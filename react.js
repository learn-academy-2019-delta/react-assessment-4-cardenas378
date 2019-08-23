// ASSESSMENT 4: REACT ASSESSMENT
// Coding practical questions

// NOTE: In this assessment you will NOT be running a react file structure

// 1. Write a React component that prints "I am a component!" Be sure to include all necessary imports, exports, etc...

import React. {component} from 'react'
export default class Something extends Component {
  constructor (props) {
    super(props)
    this.state
  }
}




// 2. Refactor this vanilla javascript loop to a map function. The output should remain the same. 

var names = ["Ford Prefect", "Arthur Dent", "Trillian", "Zaphod", "Vogon", "Marvin, the Paranoid Android"]

// for(let i=0; i<names.length; i++){
//   console.log(`${names[i]} is ${names[i].length} characters long.`)
// }

// const result = names.map(name =>{
//   console.log(`${name} is ${name.length} characters long`)
// })




// 3. Destructure the following variables out of state:

// this.state = {
//   name: "Dracula",
//   home: "Transylvania",
//   dislikes: ["mirrors", "garlic", "wooden stakes"]
// }

// let{name, home, dislikes} = this.state


// 4. Write a React method that would add one to the count and update the state.

this.state = {
  count: 0
}



// 5. There are three mistakes in this code that would cause it to break our application. Find the mistakes and fix them:

// import React, { Component } from 'react';

// class Recipes extends Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       recipes:
//         [{name: 'Meatballs'},
//         {name: 'Mac & Cheese'}]
//     }
//   }

//   render() {
//     return(
//       let {recipes} = recipes.map(recipe => {
//         return(
//           <li key={recipe.name}>{recipe.name}</li>
//         )
//       })
//       <ul>
//         {recipes}
//       </ul>
//     )
//   }
// }

// export default Recipes
