---
published: true
title: Installing UxPlay on Arch Linux
date: "2022-02-01"
description: "Simple guide to installing UxPlay - AirPlay Unix mirroring server - on Arch Linux"
tags:
    - tutorial
    - guide
    - unix
    - arch
    - archlinux
    - manjaro
    - uxplay
    - airplay
    - ios
    - ipad
---

I got my iPad Air 4 a few months ago and have been wanting to test the AirPlay functionality on it. However, as I am on Manjaro Linux - a Linux distribution based on Arch Linux, I was unable to get the native support that MacOS has.

I stumbled upon [UxPlay](https://github.com/antimof/UxPlay) as a potential solution for this problem.

UxPlay is an AirPlay Unix mirroring server that acts like an AppleTV for screen-mirroring on the machine that is running the server. It only works on [UNIX systems.](https://en.wikipedia.org/wiki/Unix)

The README is quite verbose and only contains the package names for Debian, Red Hat, Fedora, CentOS, OpenSUSE, FreeBSD distros.

So, this guide aims to help install UxPlay on Arch/Manjaro.

## Installation

Install the necessary dependencies.

```bash
yay -S cmake pkgconf
yay -S openssl libplist
yay -S avahi gstreamer gst-plugins-base gst-libav gst-plugins-bad
yay -S gstreamer-vaapi
yay -S libx11
# If you are using Manjaro, you can should also install the manjaro-gstreamer
yay -S manjaro-gstreamer
```

Clone the UxPlay repository.

```bash
git clone https://github.com/antimof/UxPlay.git
cd UxPlay
```

Build and install the server.

```bash
cmake .
make
sudo make install
```

UxPlay will be installed to `/usr/local/bin/uxplay`.

Run the server.

```bash
sudo /usr/local/bin/uxplay
```

That's all there is to this!

## Optimizing for GoodNotes 5

One of the main uses I have for AirPlay is to annotate and write notes in GoodNotes 5 without having the worry about the size constraint. Typically, I would use a 50:50 layout, where one side hosts my annotated notes (like a textbook) and the other is a notebook for my notes.

However, with AirPlay, we can configure GoodNotes 5 to mirror only the notes side (displaying it on screen). The other side will remain the same. This way, the layout can be 25:75 without sacrificing the readability of the notes as the notes are displayed on a bigger screen while still being controlled via the 25% on the iPad.
