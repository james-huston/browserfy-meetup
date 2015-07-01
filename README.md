# browserify-meetup
Demo project to help you get started with Browserify.

## Getting started
This is a simple project broken in to steps that walks you through getting started with [Browserify](http://browserify.org). Each step is tagged step1 through step6. You can switch to each using git checkout like so:

	git checkout step3

Project dependencies changes between steps so make sure you ```npm install``` when you change between tags.

We use npm with serve make our static assets available while developing. You can fire things up by running ```npm start```. This will fire up the webserver and server the files from the /dist folder. You can access them in your browser by going to [http://localhost:3500](http://localhost:3500)

### step1 - Getting started
	git checkout step1
	npm install
	npm start

Step1 is our starting point. Here we have a basic web project with a package.json setup to get us serve and our static assets. We have a simple dist/index.html file that kindly says "Hello World!". Move along, nothing to see here.

### step2 - Let's start to build
	git checkout step2
	npm install
	npm start

Now we start our little app. We create our ```src``` folder and create ```app.js```. We also add a browserify script command to our package.json to do our build. From this step forward you can rebuild the app by running:

	npm run browserify

This will create the ```dist/app.js``` file that we include from ```dist/index.html``` to make things go. It will contain all of our code after it is built/combined by Browserify.

Once you start the server and pull up the browser you will see that our "Hello World!" string changes to "Hello All!" when our app runs. Easy peasy.

### step3 - Time to use a npm module
	git checkout step3
	npm install
	npm run browserify
	npm start

Now let's get to the good stuff. We are going to use the excellent [debug](http://) module from node land in our app. We are going to do this by installing it with npm and then using ```require()``` got get it into our app just like we would in node. 

To install debug (we already saved this for you in the package.json)

	npm install --save-dev debug
	
We save it only in our dev dependencies because we only need it to build the app. Once it's built into ```dist/app.js``` we can deploy that file and it contains all of our dependencies. Excellent! Though in real life you will want to also minify/uglify this code as well.

You can see our code changes in ```src/app.js```. The important lines are this:

	var debug = require('debug')('app');
	debug('App is running');

So we require debug just like we would in our node app and we use it to debug to our console. Just like our node app. Booyow!

Note that to see the debug output in your browsers console you have to set a value in local storage. In our case we need to:

	localStorage.setItem('debug', 'app*');

We added this to our app for you. The first time you load the page the key isn't set but a refresh after will start the output up.



### step4 - BYOM - Build Your Own Module
	git checkout step4
	npm install
	npm run browserify
	npm start
	
It's time for the real fun, now we build our own module. We are going to move our "Hello All!" code into it's own function/file in ```src/lib/sayhello.js``` much like we would in a node app. Yes it's silly in this example, but we demonstrate how you ```module.exports``` your function in your module file and the use ```require``` to pull it into your app. See ```src/app.js``` for this bit.

### step5 - A little Ajax with SuperAgent
	git checkout step5
	npm install
	npm run browserify
	npm start

Let's do something practical. We all like ajax, and if you have done much node you have probably used [SuperAgent](https://github.com/visionmedia/superagent) to make http request. Here we do that from the browser with our web app.

We of course need to install SuperAgent using npm. We did this for you in the package.json but if you want to do this in your project use:

	npm install --save-dev superagent
	
Then you will be able to do this fun stuff (just like in node!) to use it:

	var request = require('superagent');

	request
		.get('/data.json')
		.end(function (err, res) {
			// handle your error and response
		});

We added some static data in ```/dist/data.json``` and a module to load it in ```/src/lib/data.js```. We then require the module into our ```src/app.js``` and make our request. You can also see the output from our little query in the console both from our data module using debug and our app using debug.

### step6 - But I want to use jQuery

Ok.

	npm install --save-dev jquery

Edit your sayhello.js as such:

	var debug = require('debug')('app:lib:sayhello');
	var jq = require('jquery');

	module.exports = function sayHello() {
		debug('saying hello!');
		jq('#block-content').html('Hello All!');
	};


Have a nice day NOT leaking $ all over your page. Go ahead, check $ on the console. I dare you. Double dog dare you.