var React = require('react')
var Popular = require('./Popular')

var { BrowserRouter, Route } = require('react-router-dom')

var Nav = require('./Nav')

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Nav />
          <Route path="/popular" component={Popular} />
        </div>
      </BrowserRouter>
    )
  }
}

module.exports = App
