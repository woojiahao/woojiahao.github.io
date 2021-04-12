---
published: true
title: "Elixir has opened my eyes..."
description: "How Elixir and functional programming has changed the way I look at problems"
date: "2020-12-29"
tags: 
  - reflection
  - sharing
  - Elixir
  - Advent of Code 2020
redirect_from:
  - /blog/posts/2020-12-29-Elixir has opened my eyes/
---

Functional programming (FP) is a mythical beast to the fledging developer. It can seem daunting to approach the idea of designing systems with the idea of pure functions in mind and rightfully so. I was the same a couple of years back - right when I was starting to get into computer science. Coming from object-oriented programming (OOP), FP was like trying to fit a square peg into a round hole for me. My first exposure to FP was through streams in Java 8. Then, I moved onto Kotlin and Javascript which had better "built-in" support for FP-like syntax by focusing on developing a language that has first-class functions. Finally, I approached the beast: Elixir! 

Learning Elixir has been a joy, honestly. It filled the gaps that Kotlin and Javascript left as they had to accommodate for OOP. In order to practice Elixir, I decided to work on Advent of Code (AoC) 2020. Working on AoC highlighted the strengths of Elixir/FP and my weaknesses in recursion and problem solving without OOP. It has also trained me to write far cleaner code without wasting crucial man-hours writing convoluted code.

Recently, I was reading some Kotlin code and the most unusual thing happened: I had no idea what I was reading! I certainly understood what the code was meant to do, but I didn't at the same time... The once elegant and easy to reason FP-esque code had become a challenge to interpret and that made me appreciate Elixir and "proper" FP more - specifically, function chaining, pattern matching, and guard clauses.

## Function chaining

Function chaining is by far the easiest of the three to explain so let's knock it out in one fell swoop.

In Kotlin or Javascript, functions are chained as such:

```kotlin
lst.filter{ it % 2 == 0 }.map{ it + 3 }
```

This syntax is made possible because `lst` is a `List<T>` object and these objects have methods that provide such functionality (so really, we're performing method calling).

In Elixir, however, we do not trifle with the mundane like objects or methods. Instead, we have modules. And in these modules, we have our functions. So, in order to chain function calls, we do not rely on object method calls, instead we do something like this:

```elixir
lst
|> Enum.filter(&is_even(&1))
|> Enum.map(&(&1 + 3))
```

We are quite literally chaining *function* calls as opposed to chaining *method* calls.

`lst` is passed directly as the first parameter of the first function, then the result of `Enum.filter` is passed to the second function and so on.

I like this syntax as opposed to method call chaining as it provides a clearer way of reading the code - where we do not worry about whether an object supports a given operation. We just focus on the data type of the input and pick the methods that suit this information.

## Pattern matching

Traditionally, return values or arguments are often passed in a given format (list or map, etc.) and it is the function's responsibility to decode this structure in the function body. However, pattern matching eliminates this additional overhead by providing the necessary syntax for performing all of this decoding for us. Let's look at several examples and contrast them against "traditional" solutions written in more OOP-oriented languages.

Let's say we declare a function that returns a tuple. This tuple represents a simple HTTP connection string: the URL and port. Let's see how we can write this in Kotlin:

```kotlin
fun getConnString() {
  return "193.67.13.1" to "2203"
}

fun main() {
  val connString = getConnString()
  val url = connString.first
  val port = connString.second
}
```

Let's see how we would approach this in Elixir:

```elixir
def get_conn_string() do 
  {"193.67.13.1", "2203"}
end

def main() do  
  {url, port} = get_conn_string
end
```

A keen Kotlin developer might argue that, "Hey, since Kotlin already supports Pair unpacking, this problem is trivial right?" 

**Wrong.**

While Kotlin provides basic, single-level destructuring, it does not support far more complex ones, such as:

```elixir
def big_bag() do 
  {"192.67.13.1", ["2203", "2204"]}
end

def main() do
  {address, [primary_port, secondary_port]} = big_bag
end
```

Thread lightly for brave souls have tried but failed in achieving this level of destructuring in "traditional" OOP languages.

But beyond a simple application of destructuring the return values of a function, we can also use pattern matching in our function parameters.

```elixir
def read_conn({url, [primary_port, secondary_port]}) do 
  "#{url}:#{primary_port}"
end
```

Not only can we use pattern matching for destructuring parameters of a single function, we can use method overloading in conjunction with pattern matching to cater to corner cases in our parameters (more can be done with guard clauses but that is a topic I shall reserve till later on):

```elixir
def ex([instruction | rest], result), do: ex(rest, result ++ instruction)
def ex([], result), do: result
```

In this particular example, the function `ex` extracts the immediate instruction from the list of instructions and adds it to the result. It does so recursively until the list of instructions is empty. At that point, the function will simply return the list of instructions once again (recall that `result` simply holds the instructions in order).

This recursive function is able to halt (or encounter a stop case) because pattern matching dictates that any non-empty list will call the function again while an empty list returns the `result`.

You can also use pattern matching to detect when a function parameter (destructured) does not match a given format:

```elixir
def foo([name, age]), do: "#{name}, #{age}"
def foo(_), do: :error
```

Pretty cool innit? The official Elixir documentation talks about pattern matching in much greater detail but I wanted to highlight the applications of pattern matching that I found interesting.

Pattern matching has allowed me to write far more concise code and that has been such a wonderful feature that I sorely miss now when I work on Kotlin codebases.

## Guard clauses

Imagine we're writing an implementation of the Fibonacci sequence in Kotlin. In order to inform the program that we have hit a base case, we would often design the function to include the base case, as such:

```kotlin
fun fib(n) {
  if (n == 0 or n == 1) return 1
  return fib(n - 1) + fib(n - 2)
}
```

I don't know about you, but the if-statement just makes the code look untidy. Instead, we can use guard clauses to spruce this up a little:

```elixir
def fib(n) when n in 0..1, do: 1
def fib(n), do: fib(n - 1) + fib(n - 2)
```

Rather than embedding an if-statement inside of the function, we overload the method with a guard clause - denoted by the `when` keyword. When the program executes, it checks every overload of the method and tries to match the patterns **AND** guard clauses to ensure the right function implementation is called. 

This is very useful as we can expand our code to account for many base cases without polluting the core behavior of the function. This allows us to design code that scales vertically (more functions), not horizontally (more if-statements).

---

## Conclusion

~~Elixir is cool and you should use it!~~

In all honesty, Elixir has taught me to value OOP more, ironically. I have realised that I am very used to the OOP way of solving problems that my fundamental problem solving skills without this hammer has become extremely dull and I am very happy that Elixir has allowed me to express my code in an elegant manner. I cannot wait to try using Elixir to build sites using Phoenix!
