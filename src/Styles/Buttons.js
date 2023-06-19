import styled from 'styled-components';

export const ProjectButtonIcons = styled.i`
    width: 32px;
    height: 32px;
`

//   .project-buttons button i {
//     font-size: 30px;
//     padding: 7px;
//     margin: 5px;
//

export const ProjectButton = styled.button`
    background-color: #f5f5f5;
    border-radius: 40px;
    max-height: 45px;
    margin: 10px 5px 5px 5px;
    padding: 7px 10px;
    border: none;
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const LiveDemoButton = styled.button`
    width: 164px;
    height: 48px;
    font-size: 16px;
    color: black;

&:hover {
    background-color: #c2d209;
    color: black;
    transform: scale(1.12);
} 
`

export const ViewCodeButton = styled.button`
    width: 164px;
    height: 48px;
    font-size: 16px;
    color: black;

&:hover {
    background-color: #a4ff77;
    color: black;
    transform: scale(1.12);
}
`