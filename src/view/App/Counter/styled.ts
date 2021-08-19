import styled from 'styled-components';

export const Container = styled.div`
    margin: 100px;
  `;
export const Button = styled.button`
    width: 50px;
    height: 50px;
    background-color: ${(props: any) => props.value % 3 === 0 ? '#a52a2a' : '#ff8c00'};
    margin: 50px;
  `;

export const Count = styled.span`
    font-size: 40px;
    color: ${(props: any) => props.value > 3 ? '#0000ff' : '#8a2be2'}
  `;
