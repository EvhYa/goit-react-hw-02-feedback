import styled from 'styled-components';

export const ListItem = styled.ul`
  &:not(:last-child) {
    margin-bottom: 10px;
  }
  &:last-child,
  &:nth-last-child(2) {
    font-weight: 700;
  }
`;
