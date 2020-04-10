---
published: true
title: "Writing a wrapper"
---
During my first semester of my second year in Polytechnic, I began writing a simple wrapper for the [Spotify Web API](https://developer.spotify.com/documentation/web-api/quick-start/) as I was interesting in the process of developing a 
library for other developers to use and this was something that I saw as an opportunity. 

### Different thinking process
It was incredibly refreshing to write a something with developers in mind, rather than focussing on clients who might
not know anything about programming. It introduced a completely different set of thinking as I had to think about how
other developers would like to use the library I write, and whether the API I present to them is intuitive.

For instance, when thinking about introducing asynchronous calls to my library, I decided to make use of callbacks.

```java
public void processArtist() {
  user.getSingleArtist("0OdUWJ0sBjDrqHygGUXeCF").build().executeAsync(artist -> {
    System.out.println("Got Artist");
    System.out.println(artist);

    return null;
  });
}
```

This was something that I personally would have enjoyed using and thus I decided to stick with this design.

#### Builder pattern
The library is built on top of the [Builder pattern](https://dzone.com/articles/design-patterns-the-builder-pattern).
This was a design choice because even if the library was written in Kotlin, it was aimed at Java developers and certain
language constructs (like optional arguments and named arguments) were simply not available to Java, so I decided to 
optimize the library to work with Java code and to reduce redundant repetitions of nulls for parameters that are not 
needed.

### Leveraging generics
#### Mistakes were made...
I also learnt to properly utilize generics when creating a parent class so as to reduce the overhead needed when creating
sub-classes. Prior to this "discovery" I had designed the parent class as such:

```kotlin
abstract class AbstractQuery {
  abstract fun execute(): Any

  fun executeAsync(callback: (Any) -> Unit) {
    thread { callback(execute()) }
  }
} 
```

This made it so any child class would implement the parent class in the following way:

```kotlin
class GetArtistQuery : AbstractQuery() {
  override fun execute(): Artist { }
}
``` 

Whilst this allowed me to return anything, it also meant that the code was not type safe, so if a developer were to use 
the `executeAsync()` method, he/she would have to be aware of the type of that the `execute()` method returns to be able 
to cast the input of the callback, which could cause problems if I (as the designer of the library) failed to properly
specify the specific return type of the `execute()` method, resulting in an overall poor experience using the library.

```java
public void processArtist() {
  user.getSingleArtist("0OdUWJ0sBjDrqHygGUXeCF").build().executeAsync(artist -> {
    System.out.println("Got Artist");
    System.out.println((Artist) artist);

    return null;
  });
}
```

#### Lessons were learnt...
With generics, I managed to have a type safe way of writing each child query, preventing developers working on the 
library code and developers using the library from making stupid mistakes.

```kotlin
abstract class AbstractQuery<T> {
  abstract fun execute(): T

  fun executeAsync(callback: (T) -> Unit) {
    thread { callback(execute()) }
  }
}

class GetArtistQuery : AbstractQuery<Artist>() {
  override fun execute(): Artist { }
}
```

```java
public void processArtist() {
  user.getSingleArtist("0OdUWJ0sBjDrqHygGUXeCF").build().executeAsync(artist -> {
    System.out.println("Got Artist");
    // artist is already going to be of type: Artist
    System.out.println(artist);

    return null;
  });
}
```

### Using varargs
When designing the endpoint system, I realized that it would be tedious to store the endpoints in the parent class and 
memorizing which ones to call for each query. Using `varargs` to construct each endpoint also allowed me to reference
the endpoint without having to memorize some unique name that was given in a parent class, effectively reducing the 
overhead needed.

```kotlin
abstract class AbstractQuery<T>(vararg pathSegments: String) { }

class GetArtistQuery private constructor(
  private val accessToken: String
  , private val artistId: String) : AbstractQuery<Artist>("artists", artistId) { }
```

### APIs
#### HTTP requests
I had also learnt a great deal about HTTP requests, namely the different types of requests and how different headers
would influence the results of the request. Prior to the making of the wrapper, I had a basic understanding of HTTP,
simply understanding that if I wanted to make a call to the API, I would need to specify the request to an endpoint of
the API with a HTTP request type.

#### OAuth process
I also learnt a lot about OAuth as that was the method of authentication the API used to authenticate users. I learnt
about the various components of OAuth and the benefits to using it.

[Reading material I used.](https://oauth.net/articles/authentication/)

### Building custom tools
In the process of writing the wrapper, the benefits of writing custom tools to assist the development process became
prevalent. I noticed that I would often have to manually manage the API token and that would become tedious since it 
resets every hour and having to manually manage it meant that I would have to run a separate instance of the library 
that handles this. 

So I decided to spend a day to design the [Access Token Generator](https://github.com/woojiahao/spotify-access-token-generator)
tool to help me generate and manage the access token, as well as facilitate the authentication process for the user, 
greatly improving my development speed.

### Conclusion
I learnt to better utilize language features that Kotlin had to offer, think about the design of the library so that 
it is easiest to use by the target developers. I also brushed up on my understanding of web services and how APIs 
operated. I also built custom tools to improve my life as a developer. All in all, it was an incredibly fruitful 
experience.

* [Library (in beta)](https://github.com/woojiahao/java-spotify-wrapper)
* [Access token generator](https://github.com/woojiahao/spotify-access-token-generator)