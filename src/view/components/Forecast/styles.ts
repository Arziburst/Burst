import styled, { css } from "styled-components";

// Images
import weatherIconCloudy from "../../../assets/images/weather-icon-cloudy.png";
import weatherIconRainy from "../../../assets/images/weather-icon-rainy.png";
import weatherIconSunny from "../../../assets/images/weather-icon-sunny.png";

export const StyledForecast = styled.div`
  display: flex;
  margin-bottom: 40px;
`;

export const CloudyDay = styled.div<{ selected?: boolean }>`
  position: relative;
  width: 130px;
  height: 204px;
  background-color: #c486bb;
  color: #fff;
  padding-top: 35px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  :before {
    position: absolute;
    top: 86px;
    content: "";
    display: block;
    width: 62px;
    height: 37px;
    background-image: url(${weatherIconCloudy});
    background-size: contain;
    background-repeat: no-repeat;
  }

  ${(props) =>
    props.selected &&
    css`
      background-color: #d9a9ce;
    `};
`;

export const RainyDay = styled.div<{ selected?: boolean }>`
  position: relative;
  width: 130px;
  height: 204px;
  background-color: #c486bb;
  color: #fff;
  padding-top: 35px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  :before {
    position: absolute;
    top: 86px;
    content: "";
    display: block;
    width: 43px;
    height: 37px;
    background-image: url(${weatherIconRainy});
    background-size: contain;
    background-repeat: no-repeat;
  }

  ${(props) =>
    props.selected &&
    css`
      background-color: #d9a9ce;
    `};
`;

export const SunnyDay = styled.div<{ selected?: boolean }>`
  position: relative;
  width: 130px;
  height: 204px;
  background-color: #c486bb;
  color: #fff;
  padding-top: 35px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  :before {
    position: absolute;
    top: 86px;
    content: "";
    display: block;
    width: 37px;
    height: 37px;
    background-image: url(${weatherIconSunny});
    background-size: contain;
    background-repeat: no-repeat;
  }

  ${(props) =>
    props.selected &&
    css`
      background-color: #d9a9ce;
    `};
`;

export const DayText = styled.p`
  display: inline-block;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 18px;
  margin-bottom: 90px;
`;

export const DayNumber = styled.span`
  position: relative;
  font-family: "Roboto", sans-serif;
  font-weight: 200;
  font-size: 30px;

  :after {
    margin-left: 5px;
    transform: translateY(-15px);
    content: "";
    display: inline-block;
    width: 5px;
    height: 6px;
    border: solid 1px #fff;
    border-radius: 50%;
  }
`;
