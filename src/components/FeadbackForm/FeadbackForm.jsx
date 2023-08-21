import PropTypes from 'prop-types';
import { Statistics } from 'components/Statistics/Statistics';
import { Container } from './FeadbackFrom.styled';
import { Component } from 'react';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Section } from 'components/Section/Section';
import { Notification } from 'components/Notification/Notification';

export class FeadbackForm extends Component {
  state = {
    ...this.props.state,
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
      <Container>
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
      </Container>
    );
  }
}

FeadbackForm.propTypes = {
  props: PropTypes.exact({
    state: PropTypes.exact({
      good: PropTypes.number,
      neutral: PropTypes.number,
      bad: PropTypes.number,
    }),
  }),
};
