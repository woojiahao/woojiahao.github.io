---
published: true
title: "Breaking down KML files"
---
## Introduction
During my second year, I took a data science course and in there, we were instructed to take data sets from https://data.gov.sg about housing and provide analysis on the data and present our findings at the end of the assignment. Whilst looking through the data sets, I found that some files were in this mysterious file format: `.kml` and that piqued my interest. So as I did more research, I began to learn more about KML and even took the time out to try to make a [KML to CSV file conversion tool](https://github.com/woojiahao/KMLConversionTool).

## What is KML?
KML was originally developed to be used with Google Earth and its purpose was to create a format to display geographic data. This is why, all KML files that I had opened had these odd syntax of specifying coordinates like so:

```xml
<LinearRing>
<coordinates>103.690974939056,1.34272948662249,0.0 103.690974834354,1.34453820996955,0.0 103.692771950895,1.34453831475346,0.0 103.692772054276,1.34272959126538,0.0 103.690974939056,1.34272948662249,0.0</coordinates>
</LinearRing>
```

However, the cool thing about KML is that, since it is an extension of the XML markup, it can also be used to store other data, that is assigned to each of these coordinates which will all be placed into a parent tag called the `<Placemark></Placemark>` tag. This tag would store all of the information for a single point or points on the map, including the coordinates and as some might expect, some place specific data.

The test data I had decided to use was from: https://data.gov.sg/dataset/dengue-cases

## Making the converter
So the first thing I had to do before starting to code was to perform some analysis on the .kml format to identify how I would be extracting the column names and the inidividual values from each of the placemarks and then placing them into the .csv file together with the headers.

### Analysis
Scrolling through the sample KML files, I found that for each of the extra data placed into the `Placemark` tag, it would have a `<SimpleData></SimpleData>` tag associated with each "row". For instance, using the `dengue-cases-south-west-kml.kml` file, I found that:

```xml
<Placemark id="kml_1">
...
<ExtendedData>
<SchemaData schemaUrl="#kml_schema_ft_DENGUECASE_SOUTHWEST_AREA">
<SimpleData name="JOIN_COUNT">2</SimpleData>
<SimpleData name="AREANAME">No. of Dengue Cases : 2</SimpleData>
<SimpleData name="DETAIL">No. of Dengue Cases : 2</SimpleData>
<SimpleData name="INC_CRC">902EDAE1119E0520</SimpleData>
<SimpleData name="FMEL_UPD_D">20180531113843</SimpleData>
</SchemaData>
</ExtendedData>
...
</Placemark>
```

These `SimpleData` all had a specific name as an attribute and I noticed that all of the `Placemarks` would have the same set of `SimpleData` and all of them would be assigned to the same name attributes. So, I begun to think that there must be some declaration fo these names at the beginning or the end of the KML file that is associated with these name attributes, and sure enough, at the top, I found the next discovery, the `<SimpleField></SimpleField>` tag.

Right at the top of the document, right after the `Document` tag, there are declarations for `SimpleField`s with their `displayName` being the associated name attributes that I had found earlier.

So, from this brief analysis, I learnt 2 things:
1. To extract the headers for the CSV file, I would need to find all those `SimpleField` tags and getting their `displayName`s
2. To extract the contents, I would have to go through each `Placemark` and find the `ExtendedData` and extract the `SimpleData`s, associating each of the contents with one of the previously found headers.

### Process
For this project, I decided on using Python to make the converter because it supports easy to use XML libraries like [BeautifulSoup](https://www.crummy.com/software/BeautifulSoup/bs4/doc/#) which made analysing the files much easier. Also, I was interested in GUI programming with Python, so I decided to use [TkInter](https://wiki.python.org/moin/TkInter) to make the GUI.

I first had to make a base class `Converter` to ensure provide some base functionality in the event where I decide to extend the application to convert KML to other file formats. The base functionality included checking if the file could be convertible (whether it is even a compatible KML file) and getting the BeautifulSoup instance for that file. They were both made protected. 

Then, I worked on the first version of the converter, `CSVConverter`. It extended `Converter`, it would extract the headers and return them as a joined string, do the same for the rows of data, returning them in a CSV format. Then, the converter would create the needed destination folder which I used the `os` library to get the OS specific user folder. Then simply opening the file and uploading the newly generated data. This version of the converter had simply extracted the data as is, assuming that the order of the `SimpleData` fields would correspond to the `SimpleField` data at the top of the document. So, for instance, if the KML file had declared the `SimpleData` inverse to the original `SimpleField` declaration, the CSV file generated would be inversed too.

This was a major problem, so I came up with the second version of the converter, `CSVConverter2`. This was meant to provide a manner of associating each of the `SimpleData` with the right `SimpleField` before saving it as a CSV file, so regardless of the ordering, the file would always be in the right order. I made use of an `OrderedDict`, but in retrospect, a normal dictionary would have worked. The keys would be the data that was declared in the `SimpleField` and for each of the key, it would have a list, to contain every single row. Then, when constructing thse data, I would link each of the data together to form the CSV file.

## Conclusion
I had a lot of fun analysing the KML file format, finding patterns and trying to come up with an optimal solution to extracting and converting a .kml file to a .csv file. Learning about TkInter as well as other libraries available to Python was also extremely fruitful and made me appreciate the simplicity that Python offers.

If you would like to check out the GitHub repository, you can do so [here](https://github.com/woojiahao/KMLConversionTool).
