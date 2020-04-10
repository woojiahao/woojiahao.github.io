---
published: true
title: "Deploying Discord bots written in Kotlin on Heroku"
---
## Why this post?
Whilst there are tutorials for Java apps to be hosted on Heroku, I couldn't find one specifically for hosting a discord bot written in Java/Kotlin, so this will be used to supplement that gap.

## What is Heroku?
According to the [Heroku](https://www.heroku.com/what) page:

> Heroku is a cloud platform that lets companies build, deliver, monitor and scale apps — we're the fastest way to go from idea to URL, bypassing all those infrastructure headaches.

We will be using Heroku as it has a free tier that doesn't require any credit card number at all, unlike other cloud platforms like AWS or DigitalOcean. 

## Pre-requisites
1. Git 
2. Maven
3. Discord Bot written in Java/Kotlin

The discord bot should ideally be using maven as that will be tool that will be used to generate the `.jar` file that will be used to run your bot.

For this tutorial, I will be supplying a sample Bot written in [Kotlin](https://kotlinlang.org/) as well as it's `pom.xml` file.

The Java library that I have chosen to use as my Discord wrapper is the JDA library, you can learn about it [here](https://github.com/DV8FromTheWorld/JDA).

Also, I have included the plugins for the project to be exported as a `.jar` file. To obtain the `.jar` file. Run the following command in the project's folder to run the bot.

```bash
mvn clean install
cd target
java -jar <jar_name>.jar
```

Sample Bot: [https://gist.github.com/woojiahao/38f33e20ed5f30862f428e102da0b0af](https://gist.github.com/woojiahao/38f33e20ed5f30862f428e102da0b0af)

Sample pom.xml: [https://gist.github.com/woojiahao/7512b8ab6c082f6cec164026c3f4a2cd](https://gist.github.com/woojiahao/7512b8ab6c082f6cec164026c3f4a2cd)

## Using Heroku
### Step 1: Downloading Heroku
You will have to install Heroku onto your machine to execute the following commands in the command line. You can find the installation file for Heroku [here](https://devcenter.heroku.com/articles/heroku-cli).

To test that you have successfully installed Heroku, use the command `heroku --version`. My version of Heroku is `heroku-cli/6.15.28-6b9662e (win32-x64) node-v9.3.0`.

Once you have successfully installed Heroku onto your machine, you can proceed.

### Step 2: Publishing your bot to GitHub
Create an empty repository on GitHub.

Then navigate to your project folder on your local machine. After that, type the following commands into the command line.

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/<github repository url>
git push -u origin master
```

These steps are the standard steps when adding an existing local repository onto GitHub.
Refresh your repository page and you should see your files being added to the repository. 

### Step 3: Set up Heroku 
After your project files have been added to GitHub, you can begin setting up Heroku.

Within your project folder, enter the following commands:

```bash
heroku create
```

Heroku will now create a new remote for your project to their Git repositories. Pushing changes to this repository will update the exisiting bot. You can view this remote using:

```bash 
git remote -v
```

### Step 4: Creating a Procfile
When you run `mvn clean install`, a `.jar` will be created in the `target` folder. We will be running this `.jar` file to start the bot. 

Create a new file called `Procfile` and inside of it, include the following line:

```
worker: java -jar target/<jar_name>.jar
```

The command in this file will be run whenever you push changes to the `heroku` remote and this command specifically will execute the `.jar` file as a worker dyno. You can read more about Heroku dynos [here](https://www.heroku.com/dynos). 

### Step 5: Configuring bot token
A Discord bot requires a token in order for the bot to run, you can obtain this bot token when you make a new Discord bot from the Discord developer dashboard. However, you do not want to expose your token on your own repository, so we will make use of Heroku [Environment Variables](https://devcenter.heroku.com/articles/config-vars). We will add our bot's token as an environment variable and use Java's `System.getenv()` method to retrieve this value.

```bash
heroku config:set BOT_TOKEN=<bot_token>
```

Inside the `Bot.kt` file, replace the string in `setToken()` to the `BOT_TOKEN`, as such

```java
setToken(System.getenv("BOT_TOKEN"))
```

### Step 6: Running Heroku
After configuring everything, commit all the changes to your project, and push it to both the `origin` remote (your own repository) and the `heroku` remote (Heroku's repository). If you encounter a problem with pushing to the `heroku` remote, use the command `heroku logs --tail` and find the latest error messages to debug any errors.

```bash
git push origin master
git push -u heroku master
```

After pushing the changes, run the following command to activate the worker dyno:

```bash
heroku ps:scale worker=1
```

After doing so, push to the `heroku` remote again and your bot should go online.

Test the bot by using `!ping` in the chat and ensure that the bot replies with `Pong`.

### Step 7: Developing the bot
Everytime you make some changes to the bot, make sure you push those changes to both your own repository (`origin` remote) and the heroku's repository (`heroku` remote).

## Conclusion
If you wish to learn more about hosting Java applications on Heroku, there are terrific guides online such as:

[Getting Started on Heroku with Java](https://devcenter.heroku.com/articles/getting-started-with-java#introduction)

[Java Sample (on GitHub)](https://github.com/heroku/java-sample)
