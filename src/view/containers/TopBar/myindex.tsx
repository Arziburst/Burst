import React, { FC } from 'react';
import {Btt, Wraper, Description, Txt} from './mystyle'

export const Bar : FC = () => {
    return (
        <Wraper>
            <Txt>Porche 911 Carera S</Txt>
            <Description>Порше 911 Каррера- это четырехместный спортивный автомобиль премиум класса.</Description>
            <Btt>Подробнее</Btt>
        </Wraper>
    );
};
