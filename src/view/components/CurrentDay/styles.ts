import styled, { css } from 'styled-components';

// Images
import rainy from '../../../assets/images/rainy.png';
import humidity from '../../../assets/images/humidity.png';

export const StyledCurrentDay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 38px;
`;

export const Temperature = styled.p`
  position: relative;
  font-family: "Roboto", sans-serif;
  font-weight: 200;
  font-size: 350px;
  line-height: 1;
  color: #fff;
  margin-bottom: 100px;

  :after {
    position: absolute;
    top: 53px;
    right: -70px;
    content: "";
    display: inline-block;
    width: 37px;
    height: 41px;
    border: solid 5px #fff;
    border-radius: 50%;
  }
`;

export const Meta = styled.span<{ type: 'rain-probability' | 'humidity' }>`
  font-family: "Roboto", sans-serif;
  font-weight: 200;
  font-size: 19px;
  color: #fff;
  display: inline-flex;
  align-items: flex-start;

  &:first-child {
    margin-right: 81px;
  }

  :before {
    content: "";
    display: inline-block;
    margin-right: 11px;
  }

  ${(props) => props.type === 'rain-probability'
    && css`
      :before {
        width: 26px;
        height: 26px;
        background-image: url(${rainy});
      }
    `};

  ${(props) => props.type === 'humidity'
    && css`
      :before {
        width: 19px;
        height: 28px;
        background-image: url(${humidity});
      }
    `};
`;
