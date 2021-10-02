import styled, { css } from 'styled-components';

export const StyledFilter = styled.div`
  position: absolute;
  top: 2%;
  right: 2%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const Checkbox = styled.span<{ selected?: boolean; filled?: boolean }>`
  position: relative;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 16px;
  text-transform: uppercase;
  color: #fff;
  display: inline-flex;
  align-items: center;
  margin-bottom: 25px;

  :hover {
    cursor: pointer;
  }

  :after {
    content: "";
    display: inline-block;
    width: 25px;
    height: 25px;
    border: solid 1px #fff;
    border-radius: 3px;
    margin-left: 14px;
  }

  ${(props) => props.selected
    && css`
      :before {
        content: "✓";
        position: absolute;
        right: 7px;
      }
    `};

  ${(props) => props.filled && {
        pointerEvents: 'none',
    }};
`;

export const CustomInput = styled.p`
  margin-bottom: 26px;
`;

export const CustomInputLabel = styled.label`
  display: inline-block;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 16px;
  text-transform: uppercase;
  color: #fff;
  margin-right: 14px;
`;

export const CustomInputField = styled.input`
  border-bottom: solid 1px #fff;
  border-top: none;
  border-right: none;
  border-left: none;
  background: transparent;
  width: 40px;
  outline: none;
  color: #fff;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 16px;
  text-align: center;
`;

export const FilterBtn = styled.button<{ disabled?: boolean }>`
  background-color: #c584bc;
  border: none;
  padding: 10px 15px;
  border-radius: 8px;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 16px;
  letter-spacing: 1px;
  color: #fff;
  text-transform: uppercase;

  ${(props) => !props.disabled
    && css`
      :hover {
        cursor: pointer;
        background-color: #966590;
      }
    `};
`;
