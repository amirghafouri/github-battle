var React = require('react')
var Popular = require('./Popular')

var { BrowserRouter, Route, Switch } = require('react-router-dom')

var Nav = require('./Nav')
var Home = require('./Home')
var Battle = require('./Battle')

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/popular" component={Popular} />
            <Route path="/battle" component={Battle} />
            <Route
              render={() => {
                return <p>Not Found</p>
              }}
            />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

module.exports = App
