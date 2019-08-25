# ASSESSMENT 4: REACT ASSESSMENT
## Interview Practice Questions

Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.  

1a. Indicate which of the following statements about React are false:

- React is a modern, efficient answer to complex UI applications(TRUE)
- React will only render on the server using Node.js (FALSE)
- React is a full stack framework for modern web applications(FALSE)
- React is a flexible library that plays the role of V in an MVC framework (TRUE)
- You should always update a component's state directly using this.state (FALSE)
- React is made up of encapsulated components that manage their own state
- React components render HTML(TRUE)

1b. Add an interesting true fact about React to the list.

2. What are "smart" and "dumb" components? Explain the difference and also add why we bother to make the distinction between them.

  Your answer: Smart components are the parent and the dumb component is the child.

  Researched answer: A component without a state is called a 'pure' or 'dumb' component. a component with state is called an 'impure' or 'smart' component.



3. When we use "yarn add ..." in the terminal - what is yarn doing? And what file will always be automatically updated after we add a package with yarn?

  Your answer: yarn add installs a package manager which helps you run react.           

  Researched answer: Yarn add is used to intall it to your dependencies so you can install it in your project. It will automatically update package.json 
    and yarn.lock so other developers working on the project will get the same dependencies as you when they run yarn or yarn install. 



4. How would you explain state to a friend who doesn't know code?

  Your answer: State is like weater/time, just a snapshot of that moment.

  Researched answer: Is a type of data that controls a component. Anytime data is going to be change within a component, state can be used.



5. What is the difference between component state and props? Your answer should include a short explanation of both.

  Your answer: State is like weater/time, just a snapshot of that moment. Props is a way to pass information from parent component to child component.

  Researched answer: Props and State are two type of data that controls a component. Props is immutable(does not change), and its data flows in one direction: 
    parent -> child only. Props is meant to helps you write reusable code. State works differently, it is internal to a component, while props are passed to a  
    component. Do not update the component using this.state, always use setState to update the sate objects. 
