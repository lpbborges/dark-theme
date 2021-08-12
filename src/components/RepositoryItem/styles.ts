import styled from 'styled-components';

export const Container = styled.li`
  display: flex;
  align-items: flex-start;

  padding: 1rem 0;

  & + li {
    border-top: solid 1px ${({ theme }) => theme.border};
  }

  div.book-icon {
    margin-right: 1rem;
  }

  div.repo-infos {
    display: flex;
    flex-direction: column;

    a.fullname {
      font-size: 1.1rem;
      font-weight: bold;

      transition: 0.2s;

      &:hover {
        filter: brightness(0.8);
      }
    }

    span.description {
      font-size: 1.2rem;
      line-height: 1.6rem;
      margin-top: 0.5rem;
    }

    div.counters {
      display: flex;
      align-items: center;
      margin-top: 0.5rem;

      div {
        display: flex;
        align-items: center;

        & + div {
          margin-left: 1rem;
        }

        small {
          margin-left: 0.3rem;
        }
      }
    }
  }
`;
