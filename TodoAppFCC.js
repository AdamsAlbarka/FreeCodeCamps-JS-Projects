class DisplayMessages extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: '',
        messages: []
      }
     this.handleChange = this.handleChange.bind(this);
    }
    // Add handleChange() and submitMessage() methods here
  
    handleChange(event) {
      this.setState ({
        input: event.target.value,
        messages: this.state.messages
      })
    }
  
    submitMessage() {
    // let itemInput = this.state.input
      this.setState({
        input: '',
        messages: [...this.state.messages,this.state.input]
      })
    }
    render() {
  
      return (
        <div>
          <h2>Type in a new Message:</h2>
           <input onChange={this.handleChange} value={this.state.input} />
            <button onClick={this.submitMessage.bind(this)}>Button</button>
             <ul>
          {this.state.messages.map(item => <li>{item}</li>)}
             </ul>
        </div>
      );
    }
  };