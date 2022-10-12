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