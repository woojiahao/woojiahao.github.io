---
published: true
---

kMD2PDF now finally uses [FlexMark](https://github.com/vsch/flexmark-java) as the back end for the markdown to html 
conversion. This is a big moment as now a lot more flexibility has been introduced for the library and that means more 
features.

Following my promise of making smaller and more frequent release updates, this port has ushered in version `0.2.1` of 
kMD2PDF and I'm really excited!

## Changelog
* Backend library using flexmark
* Unit testing framework set up for testing node rendering
* Task list items now supported

## Original design
Originally, the library used commonmark to handle `.md` to `.html` conversions, but it was severely limited as the 
number of useful extensions was severely lacking and it resulting in a terrible codebase. However, with FlexMark, this
problem is alleviated as it has all the features I need.

## Hiccups
There was a slight hiccup with the port as the `.html` to `.pdf` library, 
[flyingsaucer](https://github.com/flyingsaucerproject/flyingsaucer) would not accept the HTML output produced by 
FlexMark. So I had to make use of Jsoup to parse the output of FlexMark to become valid XML that the flyingsaucer
library would accept.

Another issue faced is the node renderers and visitors. In commonmark, these node renderers were a single class that 
would be added the parser 
(seen [here](https://github.com/atlassian/commonmark-java#customize-html-rendering)) and visitors would be accepted 
after the document is parsed 
(seen [here](https://github.com/atlassian/commonmark-java#use-a-visitor-to-process-parsed-nodes)). This made it really
easy to create custom node renderers and visitors which were used for figure generation and table of contents 
processing. However, with FlexMark, due to the increase in flexibility, the overhead for creating both increased as 
well and this resulted in requiring a parsing extension to be created, which would create a custom NodeRenderingFactory
which in turn be responsible for creating custom NodeRenderers to render the needed node, which in this case was the 
figure elements. Whilst this may seem all complicated, it was actually outlined in their sample 
[repository](https://github.com/vsch/flexmark-java/blob/master/flexmark-java-samples/src/com/vladsch/flexmark/samples/NodeRendererSample.java) where I was able to successfully create the figure renderer 
[here.](https://github.com/omnius-project/kMD2PDF/tree/master/src/main/kotlin/com/github/woojiahao/modifiers/figure)

The table of content processor was similar in nature. Due to the increased flexibility offered by FlexMark, additional
steps had to be taken to create a visitor to properly create the table of contents. This highlighted the idea that 
developing flexible software would often entail having to increase the overhead of the software because it just takes 
that many extra steps to provide that flexibility.

## Unit testing the DOM
I also worked on attempting to create a system to unit test the node rendering aspect of the library since there can be
a lot of edge cases involved with markdown and it might be useful to have an automated system to be able to ensure that
the code is reliable and performs within my range of expectation.

I tried to design this API to be as seamless as possible, reducing the moving parts exposed to the user so that they 
would not have to fiddle with too many configurations to get it working. What I came up with was rather interesting. 
To ensure that the rendering was correct, I had to first find a way to test that the converted markdown file would 
produce a certain result. To do so, I exposed the HTML conversion process of `MarkdownConverter` to be able to hook 
into this using the API.

The essence of the API is to compare the processed HTML and an expected HTML input using Jsoup to ensure that the they 
are the same. This required some basic recursion to assert that every single node matched.

```kotlin
fun assertMarkdown(folder: String, file: String) {
  require(file.indexOf(".") == -1) { "File should not include extensions as they are added within the method" }

  val markdownFileName = "$file.md"
  val htmlFileName = "$file.html"

  val markdownFile = getResource(folder, markdownFileName)
  val htmlFile = getResource(folder, htmlFileName)

  val converter = setupConverter(markdownFile)

  val expectedDocument = parseDocument(htmlFile.readText()).body()
  val actualDocument = 
    parseDocument(converter.generateBody())
      .getElementsByClass("content")
      .first()

  // Ensure that they both have the same number of children
  assertEquals(expectedDocument.childCount, actualDocument.childCount)

  // Ensure that they both have the same set of elements
  val expectedDocumentBody = expectedDocument.children()
  val actualDocumentBody = actualDocument.children()

  expectedDocumentBody.zip(actualDocumentBody).forEach { compare(it.first, it.second) }
}
```

As you can see, the markdown file will be the actual output produced by the library whilst the html file represents the 
expected output.

This was the bulk of the API, with the recursive function looking like:

```kotlin
private fun compare(ex: Element, ac: Element) {
  assertElementEquals(ex, ac)

  if (ex.childCount != 0) {
    (0 until ex.childCount).forEach {
      compare(ex.child(it), ac.child(it))
    }
  }
}
```

This allows the users to simply execute the `assertMarkdown()` function, providing the resource folder and resource name
of the markdown file and html file. This would set in motion an automated set of testing to ensure that every aspect
of the generated markdown file would produce the appropriate html. 

One limitation that is present with the API is that the file name of the markdown file and html file would have to be 
the same, otherwise the assert function would fail. That said, it also encourages for developers trying to use the API
to always stick to the same name for their markdown and html file, which reduces confusion.