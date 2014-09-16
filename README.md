Stratus
=======

A prototype content editor written in
[Clojurescript](https://github.com/clojure/clojurescript) and using
[Om](https://github.com/swannodette/om). 

The main goal of Straus is to be functionally idempotent,
always producing the same HTML markup to a wild variety of ways a user
can input the same thing.

Inspired greatly by the work at [Medium](http://medium.com) and their
thoughts on
[contentEditable](https://medium.com/medium-eng/why-contenteditable-is-terrible-122d8a40e480).

Also inspired by
[Vox's Chorus](http://product.voxmedia.com/2012/5/6/5426772/all-together-now-introducing-the-vox-product-blog-and-chorus)
and [The Guardian's Scribe](https://github.com/guardian/scribe).

Philosophy
-------

We eschew the popular monolithic structure of content for a new,
innovative pattern of small, independent and immutbale components.

The article is merely the state in which these components are linked
together. Edits are represented as a function of time applied onto the
state.

Technical Architecture
-------

We try to follow Facebook's
[Flux flow](https://facebook.github.io/react/docs/flux-overview.html)
model by adhering stricly to the one-way data flow. We also follow the
global app state and cursor methodology set out by David Nolan in
[Om](https://github.com/swannodette/om).

Install
-------

You'll need at least [Leiningen 2.1](http://leiningen.org) and at least
[JDK 1.7](http://www.oracle.com/technetwork/java/javase/downloads/index.html)
installed to build Stratus.

To Install (assuming a fresh clone):

1. `lein deps`
2. `lein build`

Afterwards, just run `lein build` to build any changes. Run `lein
watch` to have it auto build when it detects any changes. Run `lein
build prod` to build to create production files.

Open `index.html` to see and interact with the editor.
