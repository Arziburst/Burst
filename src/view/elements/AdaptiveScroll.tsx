// Core
import React, { RefObject, FC, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { throttle } from 'lodash';

const scrollStyles = (heightDiff: number = 0, minHeight: boolean = false) => {
    const newScrollContainerHeight = `calc(100% - ${heightDiff + 2}px)`;

    return css`
        overflow-x: hidden;
        overflow-y: auto;
        height:    ${newScrollContainerHeight};
        min-height: ${minHeight ? newScrollContainerHeight : 'auto'};
    `;
};

// Styles
const ScrollContainer = styled.section<{ heightDiff: number; disableOnMobile?: true; minHeight?: true; }>`
    ${({ disableOnMobile, heightDiff, minHeight }) => {
        const stylesResult = scrollStyles(heightDiff, minHeight);

        if (disableOnMobile) {
            return css`
                @media (min-width: 1024px) {
                    ${stylesResult};
                }
            `;
        }

        return stylesResult;
    }};
`;

type Ref = RefObject<HTMLElement | HTMLHeadingElement>;

type Proptypes = {
    refs: Array<Ref>;
    backgroundColor?: string;
    minHeight?: true;
    disableOnMobile?: true;
}

export const AdaptiveScroll: FC<Proptypes> = ({
    children, refs, minHeight, backgroundColor, disableOnMobile,
}) => {
    const [ heightDiff, setHeightDiff ] = useState(0);

    const resizeHandler = throttle(() => {
        const clientHeightSumma = refs.reduce<number>(
            (acc, ref) => ref.current ? acc + ref.current.clientHeight : acc, 0,
        );

        heightDiff !== clientHeightSumma && void setHeightDiff(clientHeightSumma);
    }, 500);

    useEffect(() => {
        window.addEventListener('resize', resizeHandler);

        return () => window.removeEventListener('resize', resizeHandler);
    }, []);

    useEffect(() => {
        resizeHandler();
    });

    return (
        <ScrollContainer
            disableOnMobile = { disableOnMobile }
            heightDiff = { heightDiff }
            minHeight = { minHeight }
            style = {{ backgroundColor }}>
            {children}
        </ScrollContainer>
    );
};
