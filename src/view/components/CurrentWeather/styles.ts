import styled from 'styled-components';

// Images
import rainy from '../../../assets/images/rainy.png';
import humidity from '../../../assets/images/humidity.png';

export const StyledCurrentWeather = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 38px;
`;

export const Temperature = styled.p`
  position: relative;
  font-family: 'Roboto', sans-serif;
  font-weight: 200;
  font-size: 350px;
  line-height: 1;
  color: #fff;
  margin-bottom: 100px;

  :after {
    position: absolute;
    top: 53px;
    right: -70px;
    content: '';
    display: inline-block;
    width: 37px;
    height: 41px;
    border: solid 5px #fff;
    border-radius: 50%;
}
`;

export const RainyMeta = styled.span`
  font-family: 'Roboto', sans-serif;
  font-weight: 200;
  font-size: 19px;
  color: #fff;
  display: inline-flex;
  align-items: flex-start;
  margin-right: 81px;

  :before {
    content: '';
    display: inline-block;
    width: 26px;
    height: 26px;
    background-image: url(${rainy});
    margin-right: 11px;
}
`;

export const HumidityMeta = styled.span`
  font-family: 'Roboto', sans-serif;
  font-weight: 200;
  font-size: 19px;
  color: #fff;
  display: inline-flex;
  align-items: flex-start;

  :before {
    content: '';
    display: inline-block;
    width: 19px;
    height: 28px;
    background-image: url(${humidity});
    margin-right: 11px;
}
`;
