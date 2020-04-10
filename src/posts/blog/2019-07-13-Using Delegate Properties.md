---
published: true
title: "Applications of Kotlin's delegate properties"
---

## Announcement time!
After a long hiatus from kMD2PDF, I revved up my engines and began to work on my latest planned feature for the 
project...

**YAML support!**

Yes, now YAML is in the works and you can now control basic attributes of your exported document using only 
[front matter YAML.](https://jekyllrb.com/docs/front-matter/)

This is an incredibly big milestone as this allows anyone to quickly customise their document without having to write a
single line of Kotlin, and with another planned release to create a GUI exporter for markdown documents, this would 
greatly streamline users' experience.

## Okay, so what are delegate properties?
kMD2PDF introduces a theming engine where you are able to change the entire color scheme of an exported document just by
specifying an attribute in code as such

```kotlin
val converter = markdownConverter {
  // ...

  settings {
    theme = Settings.Theme.DARK
  }  
}
```

### Design considerations
Before building this system, we have to make several consideration

1. How do we specify that certain attributes have different configurations depending on the theme?
2. How do we allow changes to the theme propagate to each element such that the changes are reflected during the 
   document creation?

#### Using singletons
The second inquiry is rather easy to answer, so we will tackle that issue first - we can store the `Settings` as 
[singleton](https://en.wikipedia.org/wiki/Singleton_pattern), since the state of a singleton is unique and static, as 
long as the settings are configured before the document is created, then the settings will be chosen during runtime and 
have the exported document reflect the changes.

```kotlin
object Settings {
  var font = FontFamily("sans-serif")
    get() = field.clone()
  // ...
}

inline fun settings(configuration: Settings.() -> Unit) = Settings.apply(configuration)
```

Kotlin comes with a language construct to create singletons easily - `object` keyword (read more 
[here](https://kotlinlang.org/docs/reference/object-declarations.html#object-declarations)).

This creates everything we need in a singleton but reduces all the boiler plate that would be involved with creating 
the singleton, unlike other languages like [Java.](https://www.geeksforgeeks.org/singleton-class-java/)

When we update the `Settings` singleton, the changes will reflect with the exported document since the document style is
lazily generated only up till the latest minute before it gets exported.

#### Multi-value properties
Now to tackle the hard question, how do we store multiple values in Kotlin? Ideally, what we would want with this system
is to have a single variable and have that variable store both the dark theme and light theme setting. That is, if we 
had a single variable `textColor`, we would want to be able to store both the light theme and dark theme settings inside 
this variable. Depending on the current `Settings.theme` configuration at the time where the stylesheet has to be 
generated, the `textColor` variable would return either the configuration for `DARK` theme or `LIGHT` theme.

Traditionally, we would approach this issue using a class to store the information and have that be the end of things - 
and this was indeed the approach I ended up employing due to certain limitations in that design which I'll discuss.

However, in Kotlin, there exists a language construct called 
[delegated properties](https://kotlinlang.org/docs/reference/delegated-properties.html) where you are able to call an 
object constructor to initialise a variable and provide it with a base of data. Subsequent times accessing this variable
masks the object constructor and will only allow you to access the data type specified by the delegated property. You 
can think of a delegated object as an object that defaults all variable references to the given `getValue` and 
`setValue` attributes. This effectively means that once you've delegated a property, you are no longer entitled to 
modifying the object that created the delegate.

```kotlin
import kotlin.reflect.*

class DelegateExample(private var internalValue = "") {
  operator fun getValue(thisRef: Any?, property: KProperty<*>) 
    = "Internal value is ${internalValue}"

  operator fun setValue(thisRef: Any?, property: KProperty<*>, value: Int) {
    internalValue += value.toString()
  }
}
```

In the example above, we have created a delegated property that when referenced as a variable (get), will return a 
string. But when called with an assignment operator (set) will only accept `Int`.

```kotlin
var value by DelegateExample()  // internalValue = ""

println(value)                  // Internal value is 
value = 10                      // internalValue = "10"
println(value)                  // Internal value is 10
value = 5                       // internalValue = "105"
println(value)                  // Internal value is 105
```

As you can see from, in order to instantiate a delegated property and use the features of `getValue` and `setValue`, we
have to set the variable with the `by` keyword. This way, when you have variable references, it will always call the 
respective `setValue`/`getValue` methods.

Now that you've had a crash course with delegated properties in Kotlin, can you think of how we can apply this concept 
to our current problem? To recap, we already have established a singleton to manage the configuration across all 
elements - and the configuration we are most interested in is the `theme` attribute which indicates which theme the 
document will create. In that case, since the state is singular and shared across the entire program, we can create a 
delegate property to hold the configuration of all the themes available, and when the time comes to generate the CSS for
the document, the delegated property is called and it will return the corresponding attribute for the specific theme 
configured during the time of generation (since the document HTML/CSS are generated per call of 
`MarkdownConverter#convert` as opposed to generating them all at once).

In that case, we can create the delegated property as such:

```kotlin
class CssProperty <T>(
  private var light: T?,
  private var dark: T? = light,
  private var fallback: T? = null
) {
  operator fun getValue(thisRef: Any?, property: KProperty<*>) =
    when(Settings.theme) {
      LIGHT -> light
      DARK -> dark
    } ?: fallback

  operator fun setValue(thisRef: Any?, property: KProperty<*>, value: T?) =
    when(Settings.theme) {
      LIGHT -> {
        light = value
      }
      DARK -> {
        dark = value
      }
    }
}
```

This way, we can create a `CssProperty` to hold the configurations required for each theme (light/dark for now) and then
when the variables are accessed, they will return the corresponding value stored depending on the current theme 
configured in the settings. The `fallback` property is a "default" for each `CssProperty` in the event where the `light`
or `dark` property are both set to null.

To use the `CssProperty` class, we will use the following syntax:

```kotlin
var textColor by CssProperty<FontFamily?>(c("00"), c("fa"))
print(textColor) // Light theme text color -> #000000
Settings.theme = Settings.Theme.DARK
print(textColor) // Dark theme text color  -> #fafafa
```

And this provides us with such a convenient interface to modify the values of the configured properties and to quickly
change the theme settings for each element on a whim.

## Roadblocks 😢
However, when attempting to create the YAML feature, I had noticed a huge flaw in the delegate property system used for
configuring the style components. Since the YAML formatting had to be rendered during runtime and as such, the YAML had
to modify the existing style which while possible using the Singleton pattern, certain components like relying on a 
fallback would not be able to register the changes made. Therefore, I had to revert to using a simple class to house the
CSS properties of an element and convert the Settings singleton to be a regular object that has to be passed to each 
element for the configuration to take place.

```kotlin
class CssProperty<T>(
  val theme: Settings.Theme,
  private var light: T? = null,
  private var dark: T? = light, 
  private var fallback: T? = null
) { 
  var value: T?
    get() = when(theme) {
      LIGHT -> light
      DARK -> dark
    } ?: fallback

    set(input) {
      light = input
      dark = input
    }
}
```

Then in order for the converter to apply the changes of the YAML to the document being generated, we iterate over every
element within the style and apply the changes accordingly. 

```kotlin
fun <T> List<Element>.updateStyles(input: T?, update: Element.(T) -> Unit) {
  input?.let { forEach { e -> e.update(it)  } }
}
```

The lesson learnt here is that while a structure might look good on paper and work for a specific use case, this might 
not always be the case and this can result in rewriting of the codebase. I was lucky that the codebase was one that I 
was very familiar with and I could afford the rewrite to get this new feature up and running. However, I would not 
always be so lucky and might encounter a codebase that might take too long to rewrite.