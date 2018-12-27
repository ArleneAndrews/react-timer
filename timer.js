const increaseCounter = () => {
  <button onClick={this.setState({counter: this.state.counter + 1})}>Up</button>;
} 

const decreaseCounter = () => {
  <button onClick={this.setState({counter: this.state.counter - 1})}>Down</button>;
}

class App extends React.Component {
  state = {counter: 0}

  render() {
    return <div>
      {this.state.counter}
      <p />
      <increaseCounter />
      <decreaseCounter />
    </div>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));