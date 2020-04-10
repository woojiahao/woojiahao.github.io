---
published: true
title: "Familiarising yourself with lambdas in Kotlin"
---
Kotlin is a language that was built on top of the JVM and what really sets it apart from Java is the emphasis on 
**functions being a first-class construct**, meaning many fancy things like lambdas are directly available to Kotlin
developers without having to include bulky constructs like the concept of *functional interfaces*.

## What are lambdas?
In my article on [Diving Into Streams,](https://woojiahao.github.io/Diving-Into-Streams/) I explained how lambdas
were this miraculous constructs in Java that removed a lot of the boilerplate required when passing behavior from one
method to another. 

However, this definition was really under the assumption of pure Java. Lambdas, as a whole, are a mathematical concept.
In programming, a lambda can be seen as a "portable" function or a piece of behavior that can be passed around and used
accordingly.

### Then, what are functions?
Functions are simply pieces of behavior that take in some input (or none at all) and return some output (or none at all),
this is very much the same as the mathematical concept it is based off of. 

## A case for lambdas
### Scenario:
Say you were working in a performance-critical situation and you just discovered that there is a major memory issue with
a function and it is causing some major performance drawbacks and you want to see how long it takes to benchmark and 
fix this issue.

*"No biggie, I can take the time before and after the execution and check how long that took to benchmark the function"*
would be something you are thinking to yourself and that would be true in a simple case like ours.

You begin to write some code to test this function:

```kotlin
fun foo(upper: Int): Int {
  var sum = 0
  for(i in 1..upper) sum += i
  return sum
}

fun main(main: Array<String>) {
  val before = System.currentTimeMillis()
  println("foo returns: ${foo(10000)}")
  val after = System.currentTimeMillis()
  println("foo took ${after - before}ms to run")
}
```

Awesome! It worked, you can now go on your merry way and fix the bug. Then you manager comes around and tells you yet 
*another* performance issue was found and you think *"Eh, this is kind of tedious to redo so I guess I could copy-paste 
the code I made earlier"*. 

Now, would you be able to continually repeat this if you suddenly had a whole class of functions that needed to be tested?

### Lambdas to the rescue!
Going back to how I mentioned how a lambda is `a "portable" function or a piece of behavior that can be passed around 
and used accordingly.` 

In this scenario, we ideally, would want to have a function that can time **any** function with a method signature like
`foo()` and this timing function would not need to know anything about the function it receives, all it needs to know
it that it should calculate the time before and after this function took to run and print that out, nicely formatted. 

Some basic pseudo-code would look like this:

|        | Details                                                                                                                                                                                                                                                         |
| ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Input  | {::nomarkdown}<ol><li>Name of the function</li><li>Function to be timed</li></ol>{:/}                                                                                                                                                                                             |
| Output | None, this function will make use of a side effect                                                                                                                                                                                                              |
| Steps  | {::nomarkdown}<ol><li>Take the time before running the function</li><li>Run the function</li><li>Take the time after running the function</li><li>Print out the difference between the before and after, this will be total time it took to for the function to run</li></ol>{:/} |

#### Defining structure
In Kotlin, in order to declare a lambda, you have to declare a *function type*, or some kind of contract for the 
functions to be passed to follow. To simplify things, all the memory leaks that have surfaced all take in exactly 1 Int
input and return an Int, so the function type for this case would look something like:

```kotlin
func: (Int) -> Int
```

Note how the function type is literally just the method signature of a potential function without the parameter names. 
As mentioned previously, these function types are merely just contracts, it defines what a function to be passed in should
look like, it does not dictate what the inputs will be used for (generally what the parameter names represent) nor does
it dictate the specific behaviors of this function.

#### Creating the timing function
Now that we have the general structure of the function we want to be able to time, we can then proceed with declaring the 
function body of this timer.

```kotlin
fun functionTimer(name: String, upper: Int, func: (Int) -> Int) {
  val before = System.currentTimeMillis();
  println("$name returned ${func(upper)}")
  val after = System.currentTimeMillis();
  println("$name took ${after - before}ms to run")
}
```

As you can see, this function's body is very much the same as the original method of timing the function in the `main` 
method. However, whilst there were some similarities, the benefits of creating a specialized function for timing is as 
follows:

1. **Modularity** - your code is now modular and can be reused if needed
2. **Flexible** - because this is a function, you can apply consistent changes to the timing and the changes made will be reflected in any function timed by this function made
3. **Abstraction** - a new user of your codebase does not need to think about how a function is timed, all they need to know is how to call this timing function and they know that this function will help to time and do everything for them
4. **Consistency** - we can remove the `upper` argument and apply a consistent argument to be passed to `func` so that the timing is not skewed by changes in the upper, thus ensuring a degree of consistency

#### Timing things
With the newly made timing function, we can then begin to time how long each function took in our class. Let's begin with
the first function we tested, which simply added a bunch of numbers from 1 up till an upper value.

```kotlin
fun main(args: Array<String>) {
  functionTimer("add", 10000) {
    var sum = 0
    for (i in 1..it) sum += i
    sum
  }
}
```

What we have used is the lambda syntax Kotlin provides. We declare the arguments of the `functionTimer` function as per
usual, but we then use `{}` which houses the body of the function. We also use the `it` keyword, to refer to the one and 
only input this lambda receives, which we can assume would be the upper limit (in this case, *10000*).

Another thing to note is we omit the `return` keyword from the lambda body even though the function type specifies that
each function has to return an `Int`. We simply put the value to be returned on a line of its own and Kotlin is clever
enough to know to return this value.

Now, we can extend this function to work with any other function that takes in a single Int input and return an Int...

```kotlin
functionTimer("multiply", 100) {
  var result = 1
  for (i in 2..it) result *= i
  result
}

functionTimer("wacky", 1000) { (1..it).map { num -> num * 3 }.sum() }
```

**Sample output:**

```
add returned 50005000
add took 1ms to run
multiply returned 0
multiply took 0ms to run
wacky returned 1501500
wacky took 58ms to run
```

You can see how flexible we can make this timer be, taking in all sorts of functions and timing them.

#### Timing existing functions
Sometimes, you might not want to rewrite a long function just to time it, and that is perfectly fine, you can pass a 
reference to an existing method for it to be run as such:

```kotlin
functionTimer("add", 10000, ::add)
```

## Conclusion
Lambdas are far more than just useful for timing stuff, it is extremely versatile and Kotlin uses them extensively 
throughout their language, in Collections to APIs that leverage off the design of lambdas.

Some resources for further reading:

* [Kotlin documentation](https://kotlinlang.org/docs/reference/lambdas.html)
* [Baeldung](https://www.baeldung.com/kotlin-lambda-expressions)


