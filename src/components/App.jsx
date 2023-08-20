import { Component } from 'react';
import { FeadbackForm } from './FeadbackForm/FeadbackForm';
import { GlobalStyle } from './GlobalStyle';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <div>
        <GlobalStyle />
        <FeadbackForm state={this.state} />
      </div>
    );
  }
}
