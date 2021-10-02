// Core
import styled from 'styled-components';

// Images
import weatherIconCloudy from '../../../assets/images/weather-icon-cloudy.png';
import weatherIconRainy from '../../../assets/images/weather-icon-rainy.png';
import weatherIconSunny from '../../../assets/images/weather-icon-sunny.png';

// Types
import { DayType } from '../../../bus/days/types';

export const StyledHead = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 60px;
  margin-bottom: 83px;
`;

export const Icon = styled.div<{ type: DayType }>`
  margin-right: 30px;
  background-size: contain;
  background-repeat: no-repeat;
  height: 88px;

  ${(props) => props.type === 'cloudy' && {
        width:           '114px',
        backgroundImage: `url(${weatherIconCloudy})`,
    }};

  ${(props) => props.type === 'rainy' && {
        width:           '100px',
        backgroundImage: `url(${weatherIconRainy})`,
    }};

  ${(props) => props.type === 'sunny' && {
        width:           '88px',
        backgroundImage: `url(${weatherIconSunny})`,
    }};
`;

export const FullDate = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Day = styled.p`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 28px;
  color: #fff;
  display: inline-block;
  margin-top: 15px;
  margin-bottom: 10px;
`;

export const Date = styled.span`
  font-family: "Roboto", sans-serif;
  font-weight: 200;
  font-size: 14px;
  color: #fff;
  text-transform: uppercase;
`;
