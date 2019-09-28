import React from 'react';


class App extends React.Component {
  state = {resource: "post"}
  render() {
  return (
    <div className="ui container">
      <div>
        <button onClick={ () => this.setState({ resource: 'post'})}>Posts</button>
        <button onClick={ () => this.setState({ resource: 'potodost'})}>Todos</button>
      </div>
     {this.state.resource}
    </div>
  );
  }
}

export default App;
