1. What problem does the context API help solve?

Context API helps us keep our state clean especially in large applications where state is passed top-down (parent to child) via props and are required by many components across the application. Context API lets you store data on a context object, and retrieve that data in the necessary components from the context object and not from props.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions – actions are payloads of information that send data to the store through the reducer function. The reducer uses the action to update the state accordingly. The store is known as the single source of truth because the only way to change your data is to dispatch actions which will change state within redux reducer or the store.

Reducers – reducers are pure functions that takes two arguments (state and action) and returns an updated state based on the arguments passed to it.

Store – the store represents the state or everything that is stored in our application or reducer file (single source of truth). The reducer contains the initial state and actions that return a copy of our state with all the changes that happened to it. 

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Component state is local and application state is global. Application state can be accessed by components anywhere in an app while component state can only be accessed by that specific component. It would be a good time to use component state over application state when there is data/state in a component that only that component needs access to.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux Thunk is a middleware that provides the ability for javascript applications to handle asynchronous operations by allowing action creators to return a function instead of an action object.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

Redux is my favorite state management system because it provides an easy and logical way to manage the state or all the data in an application. It is also less complicated than the other two state management systems that we explored this week.
