# techcorridor.io

GitHub Pages site for techcorridor.io

[![Build Status](https://travis-ci.org/techcorridorio/techcorridorio.github.io.svg?branch=master)](https://travis-ci.org/techcorridorio/techcorridorio.github.io)
[![Issues in HuBoard](https://img.shields.io/github/issues/techcorridorio/techcorridorio.github.io.svg?label=HuBoard)](https://huboard.com/techcorridorio/techcorridorio.github.io)

[![HuBoard: Ready](https://img.shields.io/github/issues-raw/techcorridorio/techcorridorio.github.io/1%20-%20Ready.svg?label=Ready)](https://huboard.com/techcorridorio/techcorridorio.github.io)
[![HuBoard: Working](https://img.shields.io/github/issues-raw/techcorridorio/techcorridorio.github.io/2%20-%20Working.svg?label=Working)](https://huboard.com/techcorridorio/techcorridorio.github.io)
[![HuBoard: Review](https://img.shields.io/github/issues-raw/techcorridorio/techcorridorio.github.io/3%20-%20Review.svg?label=Review)](https://huboard.com/techcorridorio/techcorridorio.github.io)

## Goals

* Very common technologies
  * HTML/CSS
  * Client-side JavaScript
  * Bootstrap
  * jQuery
* Hostable on GitHub Pages  (Need to have dynamic content?  Pull it from a webservice like GitHub or Meetup via client-side JavaScript.)
* Easily hackable (within 10 minutes of cloning, regardless of your OS!)
* Easily approachable for beginners

## Getting started

This site uses GitHub Pages.  GitHub Pages uses a static site generator called Jekyll.

To set up dependencies on OSX or Linux, run `./configure`.

After that succeeds, you can run Jekyll like so:

    jekyll serve

And then visit [http://127.0.0.1:4000/](http://127.0.0.1:4000/).

## Running tests

Our CI (Continuous Integration) script is `script/ci`.  You will need to have run `./configure` first.
