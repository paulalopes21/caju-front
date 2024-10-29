import { HiRefresh } from "react-icons/hi";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const SpinnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  z-index: 999;
`;

const Icon = styled(HiRefresh)`
  font-size: 3rem;
  color: rgba(255, 117, 0, 1);
  animation: ${spin} 1s linear infinite;
`;

const LoadingSpinner: React.FC = () => {
  return (
    <SpinnerWrapper>
      <Icon />
    </SpinnerWrapper>
  );
};

export default LoadingSpinner;
