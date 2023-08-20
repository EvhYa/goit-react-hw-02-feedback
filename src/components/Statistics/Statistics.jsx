import { ListItem } from './Statistics.styled';

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
