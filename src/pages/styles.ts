// Core
import styled from 'styled-components';

export const EntitiesScrollList = styled.section<{ heightDiff: number }>`
    overflow-x: hidden;
    overflow-y: auto; 
    height: ${({ heightDiff }) => `calc(100% - ${heightDiff}px)`};
`;

export const EntityContainer = styled.section`
    position: relative;
    width: 100%;
`;

export const EntityHeader = styled.header`
    display: grid;
    box-sizing: border-box;
    grid-template-columns: 30% 40% 30%;
    padding: 5px;
    box-sizing: border-box;
    
    h2 {
        font-size: 20px;
        font-family: sans-serif;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: nowrap;
        white-space: nowrap;
    }

    nav {
        align-items: center;
        &:last-child {
            display: flex;
            justify-content: flex-end;
            flex-wrap: wrap;
        }
    }
`;

export const EntityInfo = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    color: #fff;
    box-sizing: border-box;
    padding: 5px 5px 0px;

    div {
        display: flex;
        justify-content: center;
        padding-bottom: 5px;
        font-family: sans-serif;

        p {
            font-size: 20px;
            text-align: center;
        }
    }
`;

export const EntityRelations = styled.main`
    display: flex;
    justify-content: space-between;

    section {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 5px;
        box-sizing: border-box;
    }
`;

export const EntityInputs = styled.main`
    display: flex;
    justify-content: center;

    section {
        width: 100%;
        max-width: 375px;
        box-sizing: border-box;
        padding: 5px;

        h2 {
            font-size: 20px;
            padding: 5px 0px;
            font-family: sans-serif;
        }
    }
`;
