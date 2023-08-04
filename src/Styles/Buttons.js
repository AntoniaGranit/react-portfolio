import styled, { css } from 'styled-components';

export const ProjectButton = styled.button`
    background-color: #F2F2F2;
    color: black;
    font-size: 16px;
    border-radius: 5px;
    max-height: 40px;
    width: 100px;
    padding: 0px;
    border: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-family: "Outfit";
    font-weight: bold;
    transition: transform 0.2s ease-in-out;

i {

    font-size: 20px;
    padding: 7px;
    margin: 5px;
}

&:hover {
    transform: scale(1.12);
}

${(props) => props.github && css`
&:hover {
    background-color: #a4ff77;
}`}

${(props) => props.netlify && css`
&:hover {
    background-color: #c2d209;
}`}
`