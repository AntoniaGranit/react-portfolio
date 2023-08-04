import styled, { css } from 'styled-components';

export const ProjectButton = styled.button`
    background-color: black;
    color: white;
    font-size: 12px;
    border-radius: 3px;
    height: 35px;
    width: 100px;
    border: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-family: "Space Mono";
    transition: transform 0.2s ease-in-out;

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