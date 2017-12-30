var React = require('react')
var Popular = require('./Popular')

var { BrowserRouter, Route } = require('react-router-dom')

var Nav = require('./Nav')
var Home = require('./Home')
var Battle = require('./Battle')

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Nav />
          <Route exact path="/" component={Home} />
          <Route path="/popular" component={Popular} />
          <Route path="/battle" component={Battle} />
        </div>
      </BrowserRouter>
    )
  }
}

module.exports = App
