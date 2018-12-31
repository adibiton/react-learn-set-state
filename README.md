### react-learn-set-state
* This repo illustrate how to build simple react (es6) based app, with the help from [this wonderful post](https://blog.usejournal.com/creating-a-react-app-from-scratch-f3c693b84658)

* The source code and the explanations comes from this [great post](https://overreacted.io/how-does-setstate-know-what-to-do/)

### How setState triggers changes in the DOM
* Calling the **Render** function ( react-dom) triggers instantiation of new object, based on the component details and a new property - **updater** - which injected on adoptClassInstance (react-dom)
* upon calling to **setState** on the component, a call to **updater.enqueueSetState** is being triggered which results in update to the DOM

### How to debug
* Run the server with:
``` bash
npm start
```
* Run debugger