import { Container, FbButton } from './FeadbackOptions.styled';
import PropTypes from 'prop-types';

export function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <>
      <Container>
        {options.map(option => (
          <FbButton key={option} type="button" onClick={()=>onLeaveFeedback(option)}>
            {option}
          </FbButton>
        ))}
      </Container>
    </>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
