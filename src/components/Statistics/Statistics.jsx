import { ListItem } from './Statistics.styled';
import PropTypes from 'prop-types';

export function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <div>
      <ul>
        <ListItem>Good: {good}</ListItem>
        <ListItem>Neutral: {neutral}</ListItem>
        <ListItem>Bad: {bad}</ListItem>
        <ListItem>Total: {total}</ListItem>
        <ListItem>Positive feadback: {positivePercentage}%</ListItem>
      </ul>
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};