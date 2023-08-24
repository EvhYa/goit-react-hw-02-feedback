import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const FbButton = styled.button`
  display: block;
  height: 40px;
  width: 70px;
  border-radius: 5px;
  background-color: #8ecae6;
  transition: background-color 0.5s ease;
  font-weight: 600;
  text-transform: capitalize;
  &:hover {
    background-color: #219ebc;
  }
`;
