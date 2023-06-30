import styled from 'styled-components';

export const TechDiv = styled.div`
    width: 90%;
    height: 108px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 60px;
    text-align: center;

    @media (min-width: 668px) and (max-width: 1023px) {

    }

    @media (min-width: 1024px) {
        width: 900px;
        height: 108px;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 143px;
        text-align: left;
    }
`