---
published: true
title: Heroku x Docker x Discord bot x Kotlin
---

You may be wondering what's up with the over the top, nearly fan-ship name, trust me, I was not on anything when I wrote this.

I simply wanted to write about a playground project I had written to get Docker working with Heroku, specifically in the context of writing a Discord bot in Kotlin.

I made a rather comprehensive guide to go with the project over on GitHub and I wish to share it here as well since it was a rather large milestone.

If you wish to follow along, the sample project is found [here.](https://github.com/woojiahao/discord-docker)

The project uses Gradle as the build tool for the project. 

## Running the Docker image
### Local
If you're running the bot locally, you should use Docker to package the bot and run the Docker image created. This way, you can test your bot locally with the same environment as your server thanks to Docker!

```bash
$ docker build -t discord-docker .
$ docker image ls # Should see the image named "discord-docker"
$ docker run -e BOT_TOKEN=<bot token> -d discord-docker
$ docker container ls # Should see "discord-docker running"
```

With Docker, it is as simple as that to get the bot running. 

### Heroku
If you're deploying the bot on Heroku, the steps are actually outlined in the documentation for Docker by Heroku. ([here](https://devcenter.heroku.com/articles/build-docker-images-heroku-yml))

```bash
$ heroku stack:set container
$ git push heroku master
```

And watch as Heroku does its magic!

## Project composition
### `build.gradle`
The `build.gradle` straightforward, with the use of the `shadowJar` plugin to create the fat jar required for all library dependency. In order to prevent the exported jar from having differing names, we set the `archiveName` attribute of the plugin to always use the name `bot.${extension}`.

This means that even if we changed the version of the gradle file, the exported jar file is the same name so we don't need to modify our Dockerfile.

```groovy
plugins {
  id 'org.jetbrains.kotlin.jvm' version '1.3.41'
  id 'com.github.johnrengelman.shadow' version '5.0.0'
}

sourceCompatibility = 1.8
targetCompatibility = 1.8

group 'com.github.woojiahao'
version '1.0-SNAPSHOT'

repositories {
  mavenCentral()
  maven { url 'https://jitpack.io' }
  jcenter()
}

dependencies {''
  implementation "org.jetbrains.kotlin:kotlin-stdlib-jdk8"
  implementation "com.gitlab.aberrantfox:Kutils:0.9.17"
}

compileKotlin {
  kotlinOptions.jvmTarget = "1.8"
}
compileTestKotlin {
  kotlinOptions.jvmTarget = "1.8"
}

sourceSets {
  main.java.srcDirs += 'src/main/kotlin/'
  test.java.srcDirs += 'src/test/kotlin/'
}

jar {
  manifest {
    attributes "Main-Class": "BotKt"
  }

  from {
    configurations.compile.collect {
      zipTree(it)
    }
  }
}

shadowJar {
  archiveName("bot.${extension}")
}
```

### `Dockerfile`
The `Dockerfile` is a little more interesting as it makes use of [multi-stage builds](https://docs.docker.com/v17.09/engine/userguide/eng-image/multistage-build/) to create a minimal Docker image. 

Our first image layer uses the official gradle images. We will label this layer as `builder`. In this layer, our goal is to create the jar file that will contain all our dependencies. We first access the image as the root user and start with our working directory labelled as `/builder`. We then add all of our files into the working directory and finally, we construct the fat jar using the `gradle shadowJar` command.

Then, we create another layer which will be the final layer that goes into the image. We first use the official Alpine linux image for OpenJDK 8. Then we create a working directory for our application labelled `/app`. Then we copy our fat jar from the `builder` layer to the our home directory. As soon as we are done, we then run the command to execute our fat jar and it will cause the Discord bot to launch.

Using Discord allows us to remain Gradle and Java version agnostic. This `Dockerfile` was taken and modified from the following article found [here.](https://www.richyhbm.co.uk/posts/kotlin-docker-spring-oh-my/)

```docker
FROM gradle:5.6.1-jdk8 AS builder
USER root
WORKDIR /builder
ADD . /builder
RUN gradle shadowJar

FROM openjdk:8-jre-alpine
WORKDIR /app
COPY --from=builder /builder/build/libs/bot.jar .
CMD ["java", "-jar", "bot.jar"]
```

### `heroku.yml`
The `heroku.yml` file contains the configuration needed for Heroku to run your application. In that sense, it is similar to the traditional `Procfile` that is provided to Heroku applications.

In this scenario, we don't need to use an elaborate `heroku.yml` file, all we need is to specify that the worker dyno will be based off the instructions of the `Dockerfile` and that's all. 

If you do need to include information like addons and build steps, you can feel free to do so through the use of the additional properties within the configuration file. More information can be found [here.](https://devcenter.heroku.com/articles/build-docker-images-heroku-yml)

```yaml
build:
  docker:
    worker: Dockerfile
```