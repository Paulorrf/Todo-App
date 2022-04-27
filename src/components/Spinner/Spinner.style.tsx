import styled, { keyframes } from "styled-components";

export const SpinnerContainer = styled.div`
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -55%);
`;

const rotate = keyframes`
    from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const LoadingSpinner = styled.div`
  width: 5rem;
  height: 5rem;
  border: 10px solid #f3f3f3;
  border-top: 10px solid #383636;
  border-radius: 50%;
  animation: ${rotate} 1.5s linear infinite;
`;
