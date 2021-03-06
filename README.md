# Node.js-Basics
A repository created while learning the basics of Node.js

You can download the files and run 'node filename' to see the result. (If you are using nodemon for auto reload 'nodemon filename'). Below I am adding some notes that I made while learning the basics:

Node.js - Ryan Dahl(2009)
=========================
* npm - Founded in 2014, and was acquired by GitHub in 2020 - Owned by Microsoft
* JS was a browser/client-only language.
* Browser needs to convert the JS code to plain object or machine code with the help of JS engines. (For eg: In React there is babel is to compile the JSX).
* Different browsers using different JS engines.
IE - Chakra
Firefox - Spider Monkey
Chrome - V8 (Edge is now using Chromium engine)
*Chrome's V8 engine is much faster
* Initial thought - So, by taking out the faster JS engine such as V8 outside of the browser, and by using its features, we can use JS outside of a browser (Like in mobile/desktop apps or servers).
* That's where Node.js was created. Used V8 engine to build a 'Runtime Environment' called Node.js, which will work on the machine.
* So, Node.js is not a programming language or a framework. It is a Runtime environment.
* By including different internal modules(Eg: http, fs, os, etc) or external modules(npm packages [there is a large community behind] or custom) Node.js will get the power to work on the server-side as well.
* It is very useful and efficient when we use any other framework along with pure Node.js. There comes 'Express.js'. Which have many capabilities and we can say it is somewhat similar to Laravel to PHP / Spring to Java / Django to Python.
* So simply by using Node.js we can have JS everywhere both in the front end and backend. (MERN or MEAN)

How Node.js works
-----------------
- Single-threaded architecture.
- Non-blocking I/O modal.
- Asynchronous execution - Event loop
- Because of the above-mentioned architecture Node.js is best for  'I/O intensive work' (Requesting and fetching data). Also, it is not preferred to use for 'CPU intensive work'. Because the available single thread always needs to be free.


* Nodemon - A package to auto reload node app in the browser on development.
	- npm i --save-dev nodemon or npm i D nodemon (Adding as dev dependency)
