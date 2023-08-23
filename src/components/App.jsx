import { Component } from 'react';
// import { FeadbackForm } from './FeadbackForm/FeadbackForm';
import { GlobalStyle } from './GlobalStyle';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addGoodFb = () => {
    this.setState(prevState => ({ good: prevState.good + 1 }));
  };
  addNeutralFb = () => {
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  };
  addBadFb = () => {
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / (this.state.good + this.state.neutral + this.state.bad)) * 100)
      ? Math.round((this.state.good / (this.state.good + this.state.neutral + this.state.bad)) * 100)
      : 0;
  };

  render() {
    return (
      <>
        <GlobalStyle />
        <Section title="Please leave feadback">
          <FeedbackOptions
            options={['Good', 'Neutral', 'Bad']}
            onLeaveFeedback={{ addGoodFb: this.addGoodFb, addNeutralFb: this.addNeutralFb, addBadFb: this.addBadFb }}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}
