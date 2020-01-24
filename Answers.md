# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.
    React JS manages your interactions with the DOM for you and helps you organize your code into separate components. 
1. What does it mean to think in react?
    Thinking within the rules of react rather than vanilla javascript. Using state, props, components, and all the ease of use that they bring. React lets us write code more declaritively, react sets up state for us. If we were coding everything we do in React with vanilla javascript, we could still have "state" and "props", but React has all those things set up for us in classes and hooks and also has a lot of optimization and speed built in under the hood.
1. Describe state.
    State is anything that changes within your component.
1. Describe props.
    Props is whatever is passed into your component from it's parent.
1. What are side effects, and how do you sync effects in a React component to state or prop changes?
    Side effects are things you need done outside the scope of your component like console.log() or axios calls or setTimout(). You can sync effects to state or prop changes by including an array of what you want to sync within the useEffect function parameters.