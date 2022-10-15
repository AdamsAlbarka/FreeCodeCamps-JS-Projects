// Lesson 37
class Results extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      {/* Change code below this line */}
      return <h1>{this.props.fiftyFifty ? "You Win" : "You Lose" }</h1>;
      {/* Change code above this line */}
    }
  }
  
  class GameOfChance extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        counter: 1
      };
      this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
      this.setState(prevState => {
        // Complete the return statement:
        return {
          counter: this.state.counter + 1
        }
      });
    }
    render() {
      const expression = Math.random() >= .5 ? true : false;
      return (
        <div>
          <button onClick={this.handleClick}>Play Again</button>
          {/* Change code below this line */}
          <Results fiftyFifty={expression} />
          {/* Change code above this line */}
          <p>{'Turn: ' + this.state.counter}</p>
        </div>
      );
    }
  }

//   Lesson 38

class GateKeeper extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: ''
      };
      this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
      this.setState({ input: event.target.value })
    }
    render() {
      let inputStyle = {
        border: '1px solid black'
      };
      // Change code below this line
        {this.state.input.length > 15 ? inputStyle.border = '3px solid red' : 'green'}
  
        // if(this.state.input.length > 15){
        //   inputStyle.border = '3px solid red'
        // }
  
      // Change code above this line
      return (
        <div>
          <h3>Don't Type Too Much:</h3>
          <input
            type="text"
            style={inputStyle}
            value={this.state.input}
            onChange={this.handleChange} />
        </div>
      );
    }
  };

  //ToDoList lesson 39

  const textAreaStyles = {
    width: 235,
    margin: 5
  };
  
  class MyToDoList extends React.Component {
    constructor(props) {
      super(props);
      // Change code below this line
        this.state = {
          userInput  : " ",
          toDoList : []
        }
      // Change code above this line
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit() {
      const itemsArray = this.state.userInput.split(',');
      this.setState({
        toDoList: itemsArray
      });
    }
    handleChange(e) {
      this.setState({
        userInput: e.target.value
      });
    }
    render() {
      const items = this.state.toDoList.map(todoList => <li> {todoList} </li>)
      
  
      return (
        <div>
          <textarea
            onChange={this.handleChange}
            value={this.state.userInput}
            style={textAreaStyles}
            placeholder='Separate Items With Commas'
          />
          <br />
          <button onClick={this.handleSubmit}>Create List</button>
          <h1>My "To Do" List:</h1>
          <ul>{items}</ul>
        </div>
      );
    }
  }


//  Map lesson 40

const frontEndFrameworks = [
    'React',
    'Angular',
    'Ember',
    'Knockout',
    'Backbone',
    'Vue'
  ];
  
  function Frameworks() {
    const renderFrameworks = frontEndFrameworks.map(i => 
    <li key={i}>
    {i}
    </li>
    )
    return (
      <div>
        <h1>Popular Front End JavaScript Frameworks</h1>
        <ul>
          {renderFrameworks}
        </ul>
      </div>
    );
  };

  // REDUX FCC_TUTORIALS
  // How to declare a state/store in Redux
  const store = Redux.createStore(
    (state = 5) => state
  );
  
  // Get state in Redux and passed into a new var
  const currentState = store.getState()
  console.log(currentState)

  // Define an action here:
  let action = {
    type: 'LOGIN'
  }

  // An action creator is simply a JavaScript function that returns an action. 
  // In other words, action creators create objects that represent action events.
  
  // Define an action creator here:
  const actionCreator = () => {
    return action
  }

  // Dispatching
  store.dispatch(loginAction());

  // Handling Action in the store
  const defaultState = {
    login: false
  };
  
  const reducer = (state = defaultState, action) => {
    // Change code below this line
      if (action.type === 'LOGIN') {
        return {login: true}
      } else {
        return state
      }
    
    // Change code above this line
  };
  
  // const store = Redux.createStore(reducer);
  
  const loginAction = () => {
    return {
      type: 'LOGIN'
    }
  };

  // Use Switch Statement to handle multiple actions

  // const defaultState = {
  //   authenticated: false
  // };
  
  const authReducer = (state = defaultState, action) => {
    // Change code below this line
    switch (action.type) {
      case "LOGIN":
        return {
          authenticated: true
        };
  
      case "LOGOUT":
        return {
          authenticated: false
        };
  
      default:
        return defaultState;
    }
    // Change code above this line
  };
  
  // const store = Redux.createStore(authReducer);
  
  const loginUser = () => {
    return {
      type: 'LOGIN'
    }
  };
  
  const logoutUser = () => {
    return {
      type: 'LOGOUT'
    }
  };
// Sore Listener
const ADD = 'ADD';

// const reducer = (state = 0, action) => {
//   switch(action.type) {
//     case ADD:
//       return state + 1;
//     default:
//       return state;
//   }
// };

// const store = Redux.createStore(reducer);

// Global count variable:
let count = 0;
function addOne() {   //This is a function
  count += 1
}
// addOne() //This is the callback


store.subscribe(addOne) //The callback inside a method

store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);

// SENDING ACTION DATA TO STORE
const ADD_NOTE = 'ADD_NOTE';

const notesReducer = (state = 'Initial State', action) => {
  switch(action.type) {
    // Change code below this line
        case ADD_NOTE: 
        return action.text
    // Change code above this line
    default:
      return state;
  }
};

const addNoteText = (note) => {
  // Change code below this line
    return {type: ADD_NOTE,
            text: note}
  // Change code above this line
};

// const store = Redux.createStore(notesReducer);

console.log(store.getState());
store.dispatch(addNoteText('Hello!'));
console.log(store.getState());


// NEVER MUTATE STATE

const ADD_TO_DO = 'ADD_TO_DO';

// A list of strings representing tasks to do:
const todos = [
  'Go to the store',
  'Clean the house',
  'Cook dinner',
  'Learn to code',
];

const immutableReducer = (state = todos, action) => {
  switch(action.type) {
    case ADD_TO_DO:
      // Don't mutate state here or the tests will fail
      return state.concat(action.todo)
    default:
      return state;
  }
};

const addToDo = (todo) => {
  return {
    type: ADD_TO_DO,
    todo
  }
}
// const store = Redux.createStore(immutableReducer);


// Spread Operator

const imutableReducer = (state = ['Do not mutate state!'], action) => {
  switch(action.type) {
    case 'ADD_TO_DO':
      // Don't mutate state here or the tests will fail
      let newArr = [...state, action.todo] // ...state: former array. actiom.todo: new array
      return newArr
    default:
      return state;
  }
};

const adToDo = (todo) => {
  return {
    type: 'ADD_TO_DO',
    todo
  }
}

// REMOVE FROM ARRAY WOTHOUT MUTATING

// [
//   ...state.slice(0, action.index),
//   ...state.slice(action.index + 1, state.length)
// ];