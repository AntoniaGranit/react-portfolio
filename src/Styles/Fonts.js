import styled from 'styled-components';

/* TITLES */
export const AntoniaGranit = styled.h3`
    font-family: SatoshiBold;
    font-size: 20px;
    background-color: #ff5e55;
    color: white;
`

export const BlackTitle = styled.h2`
    font-family: SatoshiBlack;
    font-size: 25px;
    color: #030324;
`

export const MediumBlackTitle = styled.h3`
    font-family: SatoshiBlack;
    font-size: 20px;
    color: #030324;
`

export const DigitalDesigner = styled.h3`
    font-family: SatoshiMedium;
    font-size: 17px;
    color: #050d50;
`

export const BigTitle = styled.h1`
    font-family: SatoshiBlack;
    font-style: normal;
    font-weight: 700;
    font-size: 50px;
    line-height: 65px;
    color: #050d50;

    @media (min-width: 668px) and (max-width: 1023px) {
        font-size: 75px;
        line-height: 130px;
    }

    @media (min-width: 1024px) {
        font-size: 75px;
        line-height: 130px;
    }
`

export const FPTitle = styled.h1`
    font-family: SatoshiBlack;
    font-style: normal;
    font-weight: 700;
    font-size: 45px;
    line-height: 65px;
    color: #050d50;

    @media (min-width: 668px) and (max-width: 1023px) {
        font-size: 75px;
        line-height: 130px;
    }

    @media (min-width: 1024px) {
        font-size: 75px;
        line-height: 130px;
    }
`

export const BigPinkTitle = styled.h2`
    font-family: SatoshiBlack;
    font-size: 90px;
    line-height: 162px;
    text-align: center;
    color: #050d50;
    margin-bottom: 75px;
`

/* BODY TEXT */
export const Paragraph = styled.p`
    font-family: "Outfit";
    font-style: normal;
    color: #030324;
    font-size: 19px;
    line-height: 30px;
`

/* MENU LINKS */
export const MenuLink = styled.p`
    font-family: "Outfit";
    color: #030324;
    font-size: 20px;
    display: flex;
    padding: 7px;
    cursor: pointer;
    transition: 0.35s ease-in-out;

    &:hover {
        transform: translateX(0.5em);
    }
`

export const MenuIcon = styled.p`
    display: flex;
    padding-right: 7px;
`

/* LINKS AND HIGHLIGHTED TEXT */

export const Pink = styled.mark`
    background-color: #f85543;
    color: white;
`

export const CodeLanguages = styled.p`
    font-family: SatoshiMedium;
    font-size: 16px;
`

export const Black = styled.mark`
    background-color: #030324;
    color: white;
    padding: 2px 6px;
`

export const SkillsPink = styled.mark`
    background-color: #ff5454;
    color: white;
    font-family: SatoshiMedium;
    font-size: 25px;
    padding: 7px;
    display: flex;

    @media (min-width: 1024px) {
    width: 150px;
    }
`