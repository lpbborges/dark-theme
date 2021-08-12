import styled, { keyframes, css } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

interface IContainerProps {
  isErrored: boolean;
}

interface IButtonProps {
  isLoading: boolean;
}

export const Container = styled.div<IContainerProps>`
  height: 3rem;
  width: 616px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${({ isErrored }) => isErrored && `solid 2px #d3290f`};
  border-radius: 0.25rem;

  input {
    height: calc(100% - 2px);
    width: 100%;
    background: transparent;

    padding: 0 1.5rem;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.text};

    border-top-left-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;

    border-bottom: solid 1px ${({ theme }) => theme.border};
    border-top: solid 1px ${({ theme }) => theme.border};
    border-left: solid 1px ${({ theme }) => theme.border};
    border-right: 0;

    &::placeholder {
      color: ${({ theme }) => theme.placeholder};
    }
  }
`;

export const Button = styled.button<IButtonProps>`
  height: 100%;
  padding: 0.5rem 1.3rem;
  background: ${({ theme }) => theme.primary};
  border-top-right-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
  border: 0;

  transition: 0.2s;

  &:hover {
    filter: brightness(0.8);
  }

  ${({ isLoading }) =>
    isLoading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;
