import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1.5rem 2rem;
  border-bottom: solid 1px ${({ theme }) => theme.border};
`;
