# Blorplr

Blorplr is a question-answer site built with ember.js framework, a practice in MVC development and asychornous requests

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* `cd question-board`
* `npm install`
* `bower install`

## Specifications
| Behavior | Input Ex. | Output Ex. |
| --- | --- | --- |
| Enter user title, content, user and optional avatar| "what is life", "is life.......?", "cmartinez84"| input displays on well on question page|
| Users can comment on original questions with same inputs and a built association between commens and questions| "Re: what is life", " life is.......?", "cmartinez84"| comments appear below parent question|
|all questions and comments can be deleted and edited. Deleting original questions deletes comments|<delete>|comments deleted individually, deleting question deletes child comments|
|each question and comment well contains five stars on the bottom for rating|tap on star| the tapped star corresponds to a number rating of 1-5 and rating updates|

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).


### Building

* `ember build` (development)
* `ember build --environment production` (production)

## Link
https://github.com/cmartinez84/github-search

## Known Bugs
_None yet_

## Support and contact details
_cardamomclouds@yahoo.com_


## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

  ### License
  The MIT License (MIT)

  Copyright (c) 2016 **_Chris Martinez_**
