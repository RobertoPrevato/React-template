# React-template
This project template is an application skeleton for React web applications using ES6 transpilation and Gulp task runner.
It contains a sample application and is preconfigured to offer integration with Gulp, for common tasks.

The project template offers an example of client side technology stack, featuring:
* Integration with Gulp task runner
* Transpilation of code from ES6 to ES5
* Gulp watch task, to monitor files for changes and automatically bundle the code during development
* Fast JavaScript bundling, using watchify together with browserify
* Strategy to organize the source code (both JavaScript and LESS), into logical areas
* Example of client side routing, using [react-router](https://github.com/reactjs/react-router)
* Client side localization strategy
* Integration with [Bootstrap](http://getbootstrap.com/)
* Strategy to display preloaders and error panels
* Example of React components definition, using ES6 class
* Compilation of LESS code into CSS
* Application wise, declarative and asynchronous forms validation strategy, using [Dataentry](https://github.com/RobertoPrevato/DataEntry)

## Live demo
A live demo of the React-template application is [available here](http://ugrose.com/content/demos/react-template/index.html).

## Getting started
To start using the React-template, either download the source code or use [git clone](https://git-scm.com/docs/git-clone) to clone the repository.

***

## Required software

### NodeJs
The React‑template utilizes NodeJs and its npm (Node package manager), which is included in installers available for most common operating systems. The npm is required to download the dependencies of the project template. This documentation assumes that the option to add the npm command to the PATH system variable is left active during the installation.

### Gulp cli
The React‑template utilizes the Gulp task runner. If not already installed, it is recommended to install the Gulp Command Line Interface (Gulp cli) globally, running from a command line the command:
`npm install --global gulp-cli`

### Restoring dependencies
Once the source code has been downloaded locally, it is necessary to restore the dependencies for the NodeJs tasks, which is achieved by running the npm install command in the root folder of the project template, where the packages.json file resides.
`npm install`

### Running the public-build task
Once the npm install command completes, verify that the environment works properly by issuing this terminal command:
`gulp public-build`
Which should produce an output like the one of the picture below:
[![public-build](http://ugrose.com/content/demos/react-template/images/gulp-build.png)](http://ugrose.com/content/demos/react-template/images/gulp-build.png)

***

### Visiting the demo application
The code of the React-template demo application is written in such a way to not require a running web server, in order to be visited.
It is possible to open and test the demo application by opening the index.html inside the `httpdocs` directly in a browser, like shown in the below picture.
[![Visiting without server](http://ugrose.com/content/demos/react-template/images/test-without-server.png)](http://ugrose.com/content/demos/react-template/images/test-without-server.png)

In any case, it is recommended to work using a web server, to use a more realistic development environment.
[![Visiting using web server](http://ugrose.com/content/demos/react-template/images/test-with-server.png)](http://ugrose.com/content/demos/react-template/images/test-with-server.png)

The author's recommended way to quickly use a development web server, is to use the Python HttpServer module (requires Python 3 installed):
* `py 3 -m http.server 44660` (under Windows)
* `python3 -m http.server 44660` (under Linux)

## Documentation
Detailed documentation is available at the [wiki page](https://github.com/RobertoPrevato/React-template/wiki).
