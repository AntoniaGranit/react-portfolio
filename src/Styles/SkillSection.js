import styled from 'styled-components';

export const SkillTitleWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 40px;
    text-align: center;
    height: fit-content;
    width: fit-content;

    @media (min-width: 1024px) {
        text-align: left;
        margin-top: 120px;
    }
`

export const SkillsLists = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    width: 70%;
    gap: 80px;
    margin-top: 50px;

    @media (min-width: 668px) and (max-width: 1023px) {
        width: 90%;
        gap: 40px;
    }

    @media (min-width: 1024px) {
        display: flex;
        flex-direction: row;
        text-align: left;
        gap: 30px;
    }
`

export const SkillsUl = styled.ul`
    font-family: "Outfit";
    font-size: 19px;
    line-height: 32px;
`

export const SkillsLi = styled.li`
    margin-bottom: 8px;
    font-family: "Outfit";
    font-size: 19px;
    text-align: center;
`