---
published: true
---

Oh boy, I screwed up bad, like *really* badly. Ok ok, let's go back and see where it all began. I've learnt countless
lessons from this and I hope you (reader) will too if you're developing your own software.

## Story time!
2 months ago, I embarked on a journey to write a markdown to PDF converter, called 
[kMD2PDF](https://omnius-project.github.io/kMD2PDF). The initial architecture was developed such that:

```
.md file -> .html file + .css styling -> .pdf
``` 

In order to facilitate this system, I used 2 libraries:

1. `commonmark-java` - this facilitated with the `.md -> .html` conversion
2. `flyingsaucer` - this facilitated with the `.html -> .pdf` conversion

In between, I used my own code to create a style DSL to generate the CSS styling. This system worked nicely as I was 
able to create an easy to use API for developers using this library.

```kotlin
fun main() {
  val document = MarkdownDocument("~/Desktop/README.md")
  val convert = markdownConverter {
    document(document)
  } 
  converter.convert()
}
```

### Failure to research
**However,** I made several big oversights. I failed to plan that the libraries I used were severely limited in what 
they could offer. For instance, `commonmark-java` does not support task list items, even as an extension and in order
to implement this feature, I had to create a custom `NodeRenderer` that would convert bullet lists to task list items
if necessary. Then I realised that because I overrode the default rendering behavior of the bullet lists, I no longer 
could create nested lists, so I had to remedy that myself and soon, the project became a bunch of band-aids stuck on
top of the library and it caused the project to steer into a direction of just bug fix upon bug fix, as I attempted to
introduce features into a tightly-coupled system. This made for an incredibly hard time working on the library as I was
de-motivated to implement features since they would result in a mess.

Worst still, as I researched more libraries for handling markdown parsing, I noticed that there were libraries like
Flexmark that *did* provide the support for the features I wanted such as task lists without requiring a lot of hacky
work to be performed to the existing library.

Similarly, a big hurdle I had to cross with flyingsaucer was getting HTML5 xml code to render as the library required
only XML or XHTML documents. This was a huge bottleneck because now some elements render incorrectly and others 
require even longer HTML that isn't always necessary. That's where I discovered OpenHTMLToPDF, which had a similar API
to flyingsaucer but it allowed for HTML5 code and it doesn't constrict users by forcing them to use XHTML (for the 
uninitiated, XHTML is a stricter form of HTML, where single-enclosed tags are not permitted, rather, every tag must be
closed off with an ending tag).

This failure to plan ahead and research properly made my life hell as I spent most of my time fixing issues I created 
for myself.

### Over committing
Another issue I had stupidly created for myself is over-committing to creating a huge feature push. Initially, after 
releasing version 0.1.2, I started work on version 0.2.0 - where many new features would come, along with a set of 
changes to the existing API to improve the lives of developers. But... that's where I failed to realise that I had 
bitten off more than I could chew. 

For an entire month, I focussed my efforts on trying to make version 0.2.0 feature complete. And within this period of 
time, the stable version of the library never once got updated. This spelt bad news for those who are using 0.1.2 as 
they are waiting for over a month for a newer library, whilst they're stuck with a bug-filled library. It also meant 
that I would burn out quickly working on the library as I tried pushing to complete the features by an arbitrary 
deadline. 

This caused me to be extremely stressed when users of the library would hound me for changes. However, during this 
month, I did learn a lot about Kotlin and software development so it wasn't a complete waste of time. I just know it 
could have been so much better and smoother. 

This is where I also begin to see the value of Agile development, where we should break up the development into deliverables across weeks to reduce the workload and to improve the end user experience.

### No testing
An area lacking in the library is unit testing. As the markdown can have many corner cases, it's hard to cater to each
of these. The lack of unit tests meant that the bugs I encounter are always by accident, rather than the result of 
methodical checking and testing to ensure that nothing slips the radar.

Backtracking to unit test everything is also a pain as by this point, I would have forgotten about some of the classes.

## Learning points
So what exactly did I take away from this experience and how will I be improving my approach. I've learnt to be more
methodical with my research before starting a project, I should carefully scope for the best libraries and options 
available for the job. I've also come to realise just how key portioning work and creating frequent deliverables is to
developing good software. Finally, I've learnt to use TDD or at least, unit test my code as I write them, rather than
leaving it till the last minute.

So what exactly does this mean for kMD2PDF? Well, I'll begin by announcing several changes to my workflow. First and 
foremost, I'll be porting my codebase to use Flexmark and OpenHTMLToPDF over the next few releases, so that's exciting!
Secondly, I'll shorten the release cycle to have new versions of the library be released every 2 weeks where the 
versioning will go from `0.2.0` to `0.2.1` etc. Each release will contain a few features and fixes and the goal is to 
make the library stable and ready to use as frequently as possible. Lastly, I'll begin to rolling out a suite of unit 
tests for the codebase. I'll adopt TDD in my workflow and hopefully, I can reach > 80% code coverage before version 
1.0.0.

Whilst I'm incredibly frustrated about my set backs, I will not allow them to hinder the development and progress of
the library and with a new found resolve to achieve better things, I'll be taking on each new challenge with pride. I 
have also greatly enjoyed the past month learning various skills and practicing Kotlin.

If you're curious about the library, it can be found [here.](https://github.com/omnius-project/kMD2PDF)