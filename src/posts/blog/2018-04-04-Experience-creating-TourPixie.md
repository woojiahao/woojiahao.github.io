---
published: false
---
## What is TourPixie?

TourPixie was a school pair project, where we were required to create a tour booking and management application. The 
project required us to use C# and SQL to create a working product that had data persistence.

## Process of creating the application:
First, we began by thinking of the features we wanted to include in the application, and some of those we decided upon were a theme changer, tour recommendation system etc.

Following the core features, we had then begun to come up with the design of the application. These designs were created by my friend. We had decided upon a flat design and decided to create separate pages for each feature we had included.

We started building the UML diagrams for the application and planning the class structures as well as the GUI frameworks we were going to use (we chose Windows Presentation Foundation in the end).

## Building the UI using XAML:
I am no stranger to using HTML which used a similar syntax as XML. XAML was no different, however, the part that I had encountered the most amount of trouble with was binding and understanding how the `INotifyPropertyChanged` interface worked. This was because in order to implement the Theme Changer, the colors of both the text and background could not be statically set, but rather, set dynamically depending on current theme selected.

This was what had prompted me to create `ThemeSelector.cs` that would be used to be the `DataContext` for most of the UI components (there were some exceptions where the data displayed had to be updated dynamically, so I had to change the DataContext for those instances). 

`ThemeSelector` implemented the `INotifyPropertyChanged` interface, thus giving it access to the `PropertyChangedEventHandler` event where you are then able to create an event listener to notify the UI when a property has been changed. Example code. By doing this, any changes made to the property from the code behind would cause the UI to be notified and changes can be made directly.

Using this same concepts, I created the Manage Tours and Manage Hotel and Cars screens, using the `INotifyPropertyChanged` interface to change the text of the tour information dynamically, without restarting the UI.

I had also made use of custom user controls to reduce the amount of repeated code in the XAML files, for instance, the header was consistent throughout the entire application, so making that a custom control meant that I was able to reuse it multiple times without having to duplicate the same set of code over and over again, which would have most definitely introduced many, many bugs into the codebase.

Another place where I had used custom controls were the tour recommendations and existing tours controls. Since there was a set piece of data that was to be displayed, using custom controls would enable reuse as well as dynamic content changes since it would enable to me vary the output without touching the internal code at all.

## Building the code-behind:
The core working pieces of the code was found in `DbBooking.cs`. This class was meant to provide singular access to the entire database as well as initialize all of the data that was to be used by the rest of the class. 

It was at this time where I had learnt about the use of prepared statements in order to prevent things like SQL injection from occurring. With C#, prepared statements are relatively simple to implement and can allow for a fun experience writing SQL queries.

At one point, since we had decided on implementing a Recommendation System we had to also find ways to calculate booking distribution as well as provide ways of recommending tours based on the tags users had selected during their sign up as well as the tags on the tours. In order to find matching or similar tours, I had simply decided to find the tours that had tags intersecting with the user's tags, this was made really simply using the LINQ framework, more specifically the `Enumerable.Intersect()` method.

Similarly, when calculating the distribution of tours, I had kept a counter for the total number of users who had booked that specific tour as a variable in the Tours table in the database and that was updated every time a user would book or cancel a booking to that tour. Using a simple SQL query, I managed to extract the top few tours (monthly and yearly) and return that as a dictionary.

Seeing as how the statement `int.ParseInt(databaseResult[i].ToString())` so often, I had decided to move that into a separate extension library as an extension method of the object class, such that I would be able to reduce that long piece of code to a simple `databaseResult[i].ToInt()`, both achieving the same thing but the second being both quicker and nicer to work with. This was done using extension methods and it had certainly improved the quality of life when accessing the database.

Using extension methods to shorten object to int conversion:

```cs
// normal version
int row = int.ParseInt(databaseResult[i].ToString());

// extension method
public int ToInt (this Object obj) => int.ParseInt(obj.ToString());

// using extension method
int row = databaseResult[i].ToInt();
```

## Places of improvement:
Looking back at the project, I can see a myriad of issues that I could have done better so as to improve the overall codebase of the application.

1. Sort the different .cs files into different folders so as to have a neater working directory. This was the big cause of frustration when I was working with the codebase since everything was packed into just one folder, it made finding files excruciating.

2. Reduce the amount of repeated code found within the DbBooking.cs file. Many of the methods to access database and store them into the respective lists could have been refactored into a singular method.

3. Relied more heavily on SQL views to display data since many of the SQL queries I had used were repetitions of one another and could have been solved by creating views of those sets of data. This is especially prominent in the distribution class since the Tour table had a lot of extra data that is not needed when retrieving the distributions.

4. Reduce the amount of unsightly comments. Many of the comments made in the files were added solely to "fluff" up the code so as to make it look a lot more packed, however, this would also entail that many of the files were extremely long due to unnecessary comments. I should have kept the comments brief and let the code speak for itself.

5. Modularize the code more so as to cut down on the sizes of files. Some files like the DbBooking.cs file was over 400+ lines long, which meant there were more places for errors.

6. Introduced the use of unit tests so as to test for the variety of outputs in the code. Because we had no proper way of testing working pieces of code, we had to often perform manual checks which would mean, some bugs would slip under our noses without us noticing. 

7. Using a reliable VCS, rather than doing everything via Google Drive, using a VCS like Git would have simplified work and made it easier to keep track of progress.

## Conclusion
Whilst this wasn't the best piece of software I have ever written, it had taught me many invaluable lessons, as well as exposed me to the idea of creating a project with a team mate.

You can find the repository [here](https://github.com/woojiahao/TourPixie).
