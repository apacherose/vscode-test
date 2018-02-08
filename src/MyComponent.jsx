import Loadable from 'react-loadable';
import * as React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import  './site.css';

function Loading() {
  return <span>Loading...</span>;
}

const LoadableBar = Loadable({
  loader: () => import('./Bar'),
  loading: Loading
});

const LoadableFoo = Loadable({
  loader: () => import('./Foo'),
  loading: Loading
});

export default class MyComponent extends React.Component {
  render() {
    return (
      <Router basename="/">
        <div className="hello">
          My Component here: <br />
          +<Link to={`/bar`}>Bar</Link> + <Link to={`/foo`}>Foo</Link> <br />
          <Route path="/bar" component={LoadableBar} />
          <Route path="/foo" component={LoadableFoo} />
        </div>
      </Router>);
  }
}
