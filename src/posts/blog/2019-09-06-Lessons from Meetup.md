---
published: true
title: Lessons from Meetup (and Docker)
---

Recently, I got into Docker and used [Meetup](https://github.com/woojiahao/meetup) as a testing grounds for improving my knowledge on Docker. Meetup is a Discord bot written with Kotlin that provides updates on programming events happening in Singapore. The idea was first proposed by a member of the SG Computer Science server.

While there was another programming group (Kopi.JS) with a similar tool in [Slakoth](https://github.com/cheeaun/slakoth), it was for Slack and as such did not support Discord. So I did what any developer would do and replicated the application for Discord. 

## Why Meetup.com API?!
One of the pain points that surfaced was with the Meetup.com events API. Originally, I had planned to use the service to find all the tech events within Singapore, but it all failed when they had decided to promote their API to use OAuth and with that, they made the endpoint I was interested in premium only and as such, I no longer had access to that feature.

## Thank you Engineers.SG
When looking through Slakoth's source code, I realised that it relied on this API from Engineers.SG, a site where all programming events in Singapore are managed and hosted to. So I reached out to the developer of the API to see if it was open for other parties to use and thankfully it was!

## Learning Docker
Ah Docker, what a simple yet brilliant tool that improves the lives of the developers you grace with your presence. Aside from a short workshop I took a year ago hosted by Michael Cheng (one of the main forces behind Engineers.SG), I avoided Docker. My aversion of the tool stemmed from a bad experience during the workshop where I was unable to get Docker worker on my Windows machine and it ended up introducing an irrational fear of the tool as "hard to set up and use". 

Conceptually, Docker also felt daunting - being introduced to concepts like mounting volumes and the underlying system of Docker was not the best introduction to Docker.

### What changed? 
Well, over the recent semester break, I wanted to step out of my comfort zone and experience what Docker was like in the context of a real world project. To get over the first hurdle which was the fact that Docker was not supported on Windows Home, I decided to install Manjaro linux and go full linux as my daily driver. I will make a post about the other reasons why I had switched, but to sum it up, my school had cut support for Windows licenses and I was interested in using Linux beyond just the basic bash commands. Docker was the cherry on the cake since it was much easier to get started on Linux.

That resolved the first issue - "hardware" support. Now to tackle my irrational fear of Docker. I took the simplest approach I could think of and just dove right into the "Get started" guide curated by the Docker team and followed each lesson religiously. I was bent on understanding this system that had stumped me for so long.

As I practiced the example pieces provided by the Docker team, Docker felt less challenging and more interesting. The potential it held began to intrigue me and I fell in love with it's core concept - **Build, Share and Run Any App, Anywhere.** Soon, I was vying for projects to do to get my hands dirty with Docker. 

This was where Meetup came in.

## Ooo shiny!
I started Meetup as a side project for a computer science server for Singaporean developers back in March/April. Its goal was to be able to search for and post updates on programming events that were happening here in Singapore. As mentioned previously, I had plans for Meetup to use the, well, the Meetup.com API to retrieve all of the local events happening. However, these dreams were cut short and eventually, with my internship rearing its head, I was unable to complete Meetup to include the features that I wanted for it.

Fast forward 4 months and 1 completed internship later, I finally got the time to work on personal projects and seeing as I was also learning Docker, I had decided to make use of Meetup as a way to start out with Docker. It was perfect! It matched all of my criteria - simple, server-hosted and all for me! I wanted a testing ground that I had full control over and still added value to myself (and others in this case). 

### Starting out
However, before starting to completely integrate a Discord bot with Docker, I had to first test whether I could get a Docker working with a Discord bot. So I decided to make a sample project to test it out. I decided to properly comment each component of this bot so that I would have a point of reference if I ever needed to have a reference point. 

The test project was a resounding success and I even got a star out of it (you can find the repository [here](https://github.com/woojiahao/discord-docker))! I have also written up a post about the thought process behind this test project ([here](https://woojiahao.github.io/Heroku-x-Docker-x-Discord-bot-x-Kotlin/)). And so we proceed with our venture into the world of Docker with integrating it with Meetup. 

### Creating the `Dockerfile`
Writing the `Dockerfile` for Meetup was relatively simple seeing how the test project was setup to mimic the environment of Meetup. 

### Integrating with Heroku
Integration with Heroku was also a piece of cake, thanks to the documentation provided by the Heroku team of course ([here](https://devcenter.heroku.com/articles/build-docker-images-heroku-yml)). 

Adding the `heroku.yml` and setting it to use the build configuration from the `Dockerfile` was relatively simple as well.

Now let's move on to the challenges I encountered while working on Meetup x Docker.

### Running at 200%?!!
Notoriously, it is known that Docker does not respect the CPU and RAM limits of host machines. It was even talked about in the Docker repository for `openjdk`, found [here.](https://hub.docker.com/_/openjdk?tab=description) However, I failed to notice this and it caused Meetup to crash catastrophically. 

In the end, Heroku kept plugging the plug on Meetup since it continually exceeded the memory limit imposed by Heroku on free tier accounts.

The fix for this problem was also stated on the repository site:

> Inside Linux containers, OpenJDK versions 8 and later can correctly detect container-limited number of CPU cores and available RAM. In OpenJDK 11 this is turned on by default. In versions 8, 9, and 10 you have to enable the detection of container-limited amount of RAM using the following options:

```bash
$ java -XX:+UnlockExperimentalVMOptions -XX:+UseCGroupMemoryLimitForHeap
```

Initially, I went for the option to set the run parameters since I was using the Java 8 image, however, that proved to be insufficient and I ended up upgrading to Java 11 where the fix would automatically be applied!

This problem was rather interesting as I was really in the dark about the issue since I neglected to read the manual. I ended up doing research into optimising Java app performance. While that was major overkill, I managed to learn how Java apps are optimised and how they manage CPU and RAM limits.

### Tick tock, time is running out... or restarting?
Heroku is also known for restarting dynos every now and then. This causes the app to lose any data it stores temporarily. This was a major problem as I set Meetup to store the daily post scheduler as a variable that would be set after each run. Initially, I was naive enough to believe that this was sufficient, but after facing the dreaded restart!, I had to figure out a way around this.

To work around this limitation, I had to make use of the Heroku Postgresql addon that I was already using to store the registered channel information. I simply had to add a new table for configuration and add rows for the hour and minute to toggle the daily post. Then I would load these preferences on start up so that even if Heroku dropped me a restart, I would be able to recover my daily posting timing and have it continue working.

However, it is likely that this would not have been an issue if I used other hosting providers like DigitalOcean or AWS, which has got me motivated to use those for other projects of mine to see how well they hold up. Maybe you will be seeing a "DigitalOcean x Docker" soon 😛.

### Reflecting on mistakes
To speed up the process of building the Discord bot, instead of building the command framework from ground up like I normally would, I resorted to using a Discord wrapper written by a close friend of mine on the TPH server on Discord, Fox. [KUtils](https://gitlab.com/Aberrantfox/KUtils) used reflection to load the command list and allowed me to integrate with the JDA library closely. 

However, once again, I failed to read the manual and ended up making a fatal mistake - not setting the `globalPath` variable for the reflections system to load my commands. This caused a major issue with getting the JDA object after the bot was loaded since an exception would be thrown each time the bot would start. After scouring the Discord server for the library, I realised this was caused by the lack of the `globalPath` variable and had to alter my package structure so that I stored my commands within an appropriate package structure so that the reflections system could start finding my commands.

An upgrade to Java 11 was also necessary due to a library dependence with the reflections library, which had inadvertently resolved the performance issue I talked about.

## Conclusion
I'm very satisfied with the way Meetup turned out, it served its purpose and I managed to salvage a dead project and revive it even better and new! Through this project, I also learned the strengths of Docker and learnt the biggest lesson ever: **Read the f\*\*king manual**!

Resources listed in this post:
- [Meetup](https://github.com/woojiahao/meetup)
- [KUtils](https://gitlab.com/Aberrantfox/KUtils)
- [Heroku x Docker x Discord bot x Kotlin](https://woojiahao.github.io/Heroku-x-Docker-x-Discord-bot-x-Kotlin/)
- [Integrating Docker with Heroku](https://devcenter.heroku.com/articles/build-docker-images-heroku-yml)
- [Resolving performance issue with OpenJDK](https://hub.docker.com/_/openjdk/)