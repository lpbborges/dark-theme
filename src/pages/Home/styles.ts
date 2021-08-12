import styled from 'styled-components';

export const Container = styled.main`
  max-width: 1120px;
  margin: 0 auto;
`;

export const Content = styled.section`
  padding: 2rem;

  ul {
    span {
      span {
        & + span {
          margin-top: 2.2rem;
        }
      }
    }
  }
`;
