import styled from 'styled-components';

// Images
import weatherIconCloudy from '../../../assets/images/weather-icon-cloudy.png';
import weatherIconRainy from '../../../assets/images/weather-icon-rainy.png';
import weatherIconSunny from '../../../assets/images/weather-icon-sunny.png';

export const StyledHead = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 60px;
  margin-bottom: 83px;
`;

export const IconCloudy = styled.div`
  margin-right: 30px;
  background-size: contain;
  background-repeat: no-repeat;
  height: 88px;
  width: 114px;
  background-image: url(${weatherIconCloudy});
`;

export const IconRainy = styled.div`
  margin-right: 30px;
  background-size: contain;
  background-repeat: no-repeat;
  height: 88px;
  width: 100px;
  background-image: url(${weatherIconRainy});
`;

export const IconSunny = styled.div`
  margin-right: 30px;
  background-size: contain;
  background-repeat: no-repeat;
  height: 88px;
  width: 88px;
  background-image: url(${weatherIconSunny});
`;

export const CurrentDate = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CurrentDateText = styled.p`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 28px;
  color: #fff;
  display: inline-block;
  margin-top: 15px;
  margin-bottom: 10px;
`;

export const CurrentDateNumber = styled.span`
  font-family: "Roboto", sans-serif;
  font-weight: 200;
  font-size: 14px;
  color: #fff;
  text-transform: uppercase;
`;
