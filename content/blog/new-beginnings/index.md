---
title: Every Data Scientist Needs To Learn This
date: "2015-05-28T22:40:32.169Z"
description: This single skill will open a world of new possibilities for you
tag: datascience
---

Ever had the idea of this amazing data science project, you look up the data you’ll need online but sadly it’s nowhere to be found? Unfortunately, not every dataset you’ll ever need is online. So, what should you do? Abandon your idea and go back to kaggle? No! A real data scientist should be able to collect his own DATA!

## What’s Web Scraping and why learn it?


The web is the single biggest resource for data, it’s a literal archive for human knowledge at least for the last 20 years. Web Scraping is the art of extracting that data off the web, as a Data Scientist It is such a handy tool and opens so many doors to cool projects.

**Note that some websites prohibit scraping and might ban your IP address if you scrape too frequently or maliciously.**


## How do we scrape?

There are two approaches when it comes to web scraping.

**Request based scraping**: With this approach we will be sending a request to the website’s server which will return the HTML of the page which is the same content that you find when you click “View page source” on google chrome, you can try that out right now by pressing ctrl+u .Then we will typically use a library to parse the HTML and extract the data that we want. This approach is simple, lightweight and very fast, however it’s not perfect and there’s one drawback that might put you off using it, in fact most modern websites nowadays use JavaScript to render their content, IE: you don’t see the content of the page until after the JavaScript executes which the request method can’t handle.

**Browser based scraping**: To execute JavaScript we need a fully-fledged browser, this is what this method is about, we will simulate a browser, navigate to the page we want, wait for JavaScript to execute and we can even interact with the page by clicking buttons, filling forms… Then just look at the HTML state and extract the data. This approach is very flexible, you can pretty much scrape any website you want, however it’s much slower and resource intensive than just sending a request.

## Scrape anything with selenium:

Selenium is widely used library for web automation, but you can actually use it for scraping too! Basically any task that a human can manually do, you’ll be able to simulate it with selenium, you can create a bot that will perform certain action when something happens, or you can make selenium browse web pages and scrape data for you which is what we’ll be doing in this article.

To parse the HTML we will be using beautiful soup.

For further reading here are documentation links for selenium and beautiful soup


#### Silent delightfully including because before one up barring chameleon

Separated they live in Bookmarksgrove right at the coast of the Semantics, a
large language ocean. A small river named Duden flows by their place and
supplies it with the necessary regelialia. It is a paradisematic country, in
which roasted parts of sentences fly into your mouth.

Even the all-powerful Pointing has no control about the blind texts it is an
almost unorthographic life One day however a small line of blind text by the
name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox
advised her not to do so, because there were thousands of bad Commas, wild
Question Marks and devious Semikoli, but the Little Blind Text didn’t listen.

##### Wherever far wow thus a squirrel raccoon jeez jaguar this from along

She packed her seven versalia, put her initial into the belt and made herself on
the way. When she reached the first hills of the Italic Mountains, she had a
last view back on the skyline of her hometown Bookmarksgrove, the headline of
Alphabet Village and the subline of her own road, the Line Lane. Pityful a
rhetoric question ran over her cheek, then she continued her way. On her way she
met a copy.

###### Slapped cozy a that lightheartedly and far

The copy warned the Little Blind Text, that where it came from it would have
been rewritten a thousand times and everything that was left from its origin
would be the word "and" and the Little Blind Text should turn around and return
to its own, safe country. But nothing the copy said could convince her and so it
didn’t take long until a few insidious Copy Writers ambushed her, made her drunk
with Longe and Parole and dragged her into their agency, where they abused her
for their projects again and again.
