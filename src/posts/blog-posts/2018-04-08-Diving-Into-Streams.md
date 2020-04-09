---
published: true
title: "Diving into (Java) streams"
---
## What are streams?
Streams was introduced in Java 1.8 and it had completely changed how we write code. The majority of what I will be discussing will be what I have learnt from watching [this talk](https://www.youtube.com/watch?v=1OpAgZvYXLQ&t=6985s) by Venkat Subramaniam. His talk was what had originally got me into using streams and the concept of lambdas.

## Let's revise 

### How do we implement a lambda in Java?
Lambdas are simple constructs with very powerful use cases in Java and many other languages. Most commonly, lambdas enable the everyday programmer to reduce their clunky [anonymous inner classes](https://docs.oracle.com/javase/tutorial/java/javaOO/anonymousclasses.html) into simple one-liners. It can also be used to pass methods around between methods without having to redeclare these method over and over again.

The common components that make up a lambda in Java are:
1. A functional interface
2. A method that matches the signature of the method in the functional interface

### What is a functional interface?
A functional interface is an interface that contains a single method.

```java
public interface StringOp {
  String perform (String in);
}
```

### Using a lambda:
Code:
```java
public interface StringOp {
  String perform (String in);
}

public class LambdaDemo {
  public static void main (String[] args) {
    StringOp operation = in -> new StringBuilder(in).reverse().toString();
    
    System.out.println(operation.perform("Hello World"));
  }
}
```

Output:
```java
dlroW olleH
```

In this example, I created a functional interface (`StringOp`), declared an instance of that functional interface (`operation`) and gave it's definition all in one line using a lambda.

The core syntax of the lambda is as such:
```
(parameters) -> {
  actions
}
```

In cases where there is only 1 parameter, the parantheses can be omitted, as seen in the example, and if the method body a single line, you can also omit the curly braces.

If lambdas did not exist, I would have to declare the method like this:
```java
StringOp operation = new StringOp () {
  @Override
  public String perform (String in) {
    return new StringBuilder(in).reverse().toString();
  }
};

operation.perform("Hello World");
```
These are just simple examples of what lambdas are capable of, there a many more uses for them and you can check out a more comprehensive guide here: https://docs.oracle.com/javase/tutorial/java/javaOO/lambdaexpressions.html

## Starting streams
I will first begin by showing an example of a typical program and then showing the power of streams and how they can be used to simplify your work.

**Problem:** Write a program to print out all numbers that are multiples of a given number within a given range.

**Traditional Solution:**
```java
public class Solution {
  static void printMultiples (int multiple, int upper) {
    for (int i = 1; i <= upper; i++) {
      if (i % multiple == 0) {
        System.out.println(i);
        }
      }
  }
  
  public static void main (String[] args) {
    printMultiples(2, 10);
  }
}
```

**Streams Solution:**
```java
public class Solution {
  static void printMultiples (int multiple, int upper) {
    IntStream
      .rangeClosed(1, upper)
      .filter(i -> i % multiple == 0)
      .forEach(System.out::println);
    }

  public static void main (String[] args) {
    printMultiples(2, 10);
  }
}
```

**Output:**
```
2
4
6
8
10
```

As you can see, both methods produce the same output, however, the latter is a lot neater than the former. Not only is the solution simpler to understand than the solution that introduces loops and if statements, it is a lot easier to read and understand.

## Explanation:
The reason why methods like `.filter(i -> i % multiple == 0)` works is due to the use of functional interface as mentioned previously. According to the Java documentation on streams, `.filter()` receives a `Predicate` interface as a parameter. 

> Represents a predicate (boolean-valued function) of one argument.

This means in order to create a lambda that receives one argument and returns a boolean condition.

## Method references
Another unusual syntax you might have noticed is this `forEach(System.out::println)`, you might be scratching your head and wondering that this `::` symbol is doing. Well, it is known as a [method reference](https://docs.oracle.com/javase/tutorial/java/javaOO/methodreferences.html). The core idea with method references would be as Mr. Venkat put it

> Since the value is a simple pass over, you can use a method reference.

To illustrate this, let's see how you would use the `.forEach()` method normally:

```java
String[] menu = { "Pizza", "Cola", "Salad" };

Arrays.asList(menu)
  .stream()
  .forEach(menuItem -> System.out.println(menuItem));
```

Output:
```
Pizza
Cola
Salad
```

As you can see, for `forEach()`, the `menuItem` argument you receive is simply being passed onto the `System.out.println` method call, and since no other modification is being made to this `menuItem` value, you can use a method reference to `System.out.println` to shorten to code. 

In this particular instance, since `println` is a static method of the `System.out` object, the method reference will be a reference to a static method, which means the syntax would simply be having the `object name` followed by the `::` symbol and then the `target method name`.