---
published: true
title: "An investigation into generics in Java"
---
Generics was a feature introduced in [Java 5](https://en.wikipedia.org/wiki/Generics_in_Java) and it has changed how 
Java developers write code.

This article will be discussing some of the things I've picked up as I dug into generics in Java.

## Uses of generics
### Pre-generics era
Imagine you wish to create a container to store an object that can be of any type, pre-generics, you would need to do 
something like:

```java
class Container {
  private Object obj;

  public Object getObj() {
    return obj;
  }

  public void setObj(Object obj) {
    this.obj = obj;
  } 
}

Container container = new Container();
container.setObj("Hello");
System.out.println((String) container.getObj()); // Prints "Hello"
container.setObj(1);
System.out.println((Integer) container.getObj()); // Prints 1
```

As you can see, this is not type safe as you can put anything into the Container and have it spit out something 
because the Container doesn't care for the type of the inputs. You can get around this lack of type safety by giving 
the class type of the intended inputs into the Container constructor and check that against the inputs, but that will
be extra code for something that seems so logical.

### Generics era
With generics, you can now create the Container with type safety built in and no more casting.

```java
class Container<T> {
  private T obj;

  public T getObj() {
    return obj;
  }

  public void setObj(T obj) {
    this.obj = obj;
  }
}

Container<String> container = new Container<>();
container.setObj("Hello");
System.out.println(container.getObj()); // Prints "Hello"
container.setObj(1); // Does not compile because container can only receive Strings
```

## What's going on?
This was a question I had asked a lot prior to reading up, because it was such a mysterious process that I could somehow
enforce type safety just with this construct.

The type safety generics offer is limited to just **compile time**, this is because of a process called [Type Erasure](https://docs.oracle.com/javase/tutorial/java/generics/erasure.html) where the generic type
is removed during runtime. This is done in an effort to ensure backward compatibility to pre-generic code. 

This not only means that the type safety isn't extended to runtime, it also means that any operations requiring the use
of this generic type at runtime is not permitted because the type will be erased by that point. For example:

```java
<T> void foo() {
  System.out.println(T.class); // This does not work!
} 
```

Java isn't able to recognize the data type of `T` during runtime thanks to erasure and thus this line throws and
exception. This is especially troubling as you might want to be able to cast the data types from one generic type to
another, but this is not possible.

This state can also be referred to as generics being non-reified, meaning, it is not present during runtime.

## Kotlin to the rescue!
Since Kotlin is based off the JVM, it also inherits this type erasure behavior of generic types, which means behavior
with generics you see in Java will be the same in Kotlin. However, Kotlin offers a means of enabling a generic type to
be preserved during runtime, thus removing the "burden" imposed on it.

### Reified generic types + inline functions
In Kotlin, the [`inline`](https://kotlinlang.org/docs/reference/inline-functions.html) keyword, makes it so the function 
is not expanded into a separate object but rather "copy-pasted" into the call site of the function, thus allowing some
interesting behavior to occur.

One such intriguing behavior is allow generic types to be reified, or retained at runtime. Because the function is now
inline, the generic type given to the function can be preserved, thus, allowing you to access the generic type 
information during runtime.

```kotlin
fun <T> foo() {
  println(T::class.java)
}
```

## Conclusion
Generics are an interesting construct with a lot of thought put into designing them.

Some articles that might peak your interest:
* [**reified** keyword in Kotlin](https://kotlinlang.org/docs/reference/inline-functions.html#reified-type-parameters)
* [Type Erasure](https://docs.oracle.com/javase/tutorial/java/generics/erasure.html)
* [Generics: How They Work And Why They Are Important](https://www.oracle.com/technetwork/articles/java/juneau-generics-2255374.html)