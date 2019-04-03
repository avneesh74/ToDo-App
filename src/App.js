import React, { Component } from 'react'
import CreateTodo from './containers/CreateTodo'
import Table from './containers/Table'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container" style={{ marginTop: "20px"}} >
          <div className="row">
            <div className="col-lg-10 offset-lg-2 col-md-10 col-sm-12 col-xs-12" style={{ marginLeft: "92px"}}>
              <CreateTodo />
            </div>
            <Table />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
