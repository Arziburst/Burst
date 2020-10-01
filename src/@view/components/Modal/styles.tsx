import styled, { keyframes } from 'styled-components';

// Modal
const modalWrapperBgc = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const modalAppear = keyframes`
  from { bottom: 50px; opacity: 0; }
  to { bottom: 0; opacity: 1; }
`;

export const ModalWrapper = styled.div`
  position: fixed;
  background-color: rgba(0,0,0,0.6);
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  animation: ${modalWrapperBgc} 0.5s;
`;

export const ModalContainer = styled.section`
  position: relative;
  max-width: 450px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 2147483647;
  box-sizing: border-box;
  margin: 0 auto;
  animation: ${modalAppear} 0.5s;
  overflow: hidden;

  @media (max-width: 500px) {
    margin: 0px;
    border-radius: 0px;
    max-width: 100%;
  }
`;

export const Cross = styled.button`
  position: absolute;
  border: none;
  background-color: transparent;
  right: 13px;
  top: 5px;
  font-size: 26px;
  cursor: pointer;
  color: #fff;
  z-index: 2;

  &:after {
    content: '×';
  }

  &:hover {
    color: #000;
  }
`;
