import * as React from 'react';
import MyComponent from './MyComponent';

export default class App extends React.Component {
  render () {
    return <section>
        Hello React project
        <MyComponent />
      </section>;
  }
}
