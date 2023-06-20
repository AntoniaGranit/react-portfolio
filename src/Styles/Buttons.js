import styled, { css } from 'styled-components';

export const ProjectButton = styled.button`
    background-color: #f5f5f5;
    color: black;
    font-size: 16px;
    border-radius: 40px;
    max-height: 45px;
    width: 120px;
    height: 48px;
    margin: 10px 5px 5px 5px;
    padding: 7px 10px;
    border: none;
    display: flex;
    flex-direction: row;
    align-items: center;

i {
    width: 32px;
    height: 32px;
    font-size: 30px;
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