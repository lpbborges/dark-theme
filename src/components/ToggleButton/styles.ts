import styled from 'styled-components';

export const Button = styled.button`
  background: ${({ theme }) => theme.body};
  border: 2px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.text};
  border-radius: 30px;
  font-size: 0.8rem;
  padding: 0.6rem;

  svg {
    margin: 0 0.5rem;
  }
`;
