import styled from 'styled-components';

export const ProjectButton = styled.button`
    background-color: #030324;
    color: white;
    font-size: 12px;
    border-radius: 2px;
    height: 35px;
    width: 100px;
    border: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-family: "Space Mono";
    transition: border-radius 0.4s ease-in-out;

&:hover {
    border-radius: 25px;
}
`