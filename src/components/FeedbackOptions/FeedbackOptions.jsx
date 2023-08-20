import { Container, FbButton } from './FeadbackOptions.styled';

export function FeedbackOptions({ options, onLeaveFeedback: { addGoodFb, addNeutralFb, addBadFb } }) {
  return (
    <>
      <Container>
        <FbButton type="button" onClick={addGoodFb}>
          {options[0]}
        </FbButton>
        <FbButton type="button" onClick={addNeutralFb}>
          {options[1]}
        </FbButton>
        <FbButton type="button" onClick={addBadFb}>
          {options[2]}
        </FbButton>
      </Container>
    </>
  );
}
