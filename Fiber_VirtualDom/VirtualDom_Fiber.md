## Virtual Dom 
In file main.js "createRoot" creates a virtual Dom

ReactDOM.createRoot(document.getElementById('root')).render(<App />)


## React Fiber
- It is used to update the virtual Dom  || Virtual Dom is updated using React Fiber
- It is an ongoing reimplementation of React's core algorithms
- Hydration 
- Key features include the ability to pause, abort, or reuse work as new updates come in; the ability to assign priority to different types of updates; and new concurrency primitives.
- In a UI, it's not necessary for every update to be applied immediately; in fact, doing so can be wasteful, causing frames to drop and degrading the user experience.
- Fiber waits for huge updates or huge changes then it changes it in the DOM.
- Primary goal of Fiber is to enable React to take advantage of scheduling. Specifically, we need to be able to
    1. Pause work and come back to it later.
    2. Assign priority to different types of work.
    3. Reuse previously completed work.
    4. Abort work if it's no longer needed

## Hydration 
- Hydration is a concept in web development
- Hydration is a the buffer time period btw html code and Js code to show on the UI 
- The buffer time period between the html and JS code to implement simultaneously 

## Reconciliation
- The algorithm React uses to diff one tree with another to determine which parts need to be changed.
- Reconciliation is the algorithm behind what is popularly understood as the "virtual DOM." 
- 1st tree is virtualDOM and other is createRoot tree

### Update
- A change in the data used to render a React app. Usually the result of `setState`. Eventually results in a re-render.

### Source
[React Fiber](https://github.com/acdlite/react-fiber-architecture "Source")