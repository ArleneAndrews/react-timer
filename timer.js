const increaseCounter = () => {
    <button onClick={his.setState({counter: this.state.counter - 1})}>Down</button>;
   } 
   const decreaseCounter = () => {
     <button onClick={his.setState({counter: this.state.counter - 1})}>Down</button>;
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
   
   ReactDOM.render(<App />, document.querySelector('#root'));