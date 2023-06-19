import styled from 'styled-components';
import ColoredBlob from '../Assets/colored-blob2.jpg'

export const LeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    margin: 0px;
    padding: 0;
    left: 0;
    top: 0;
    width: 50%;
    height: 100vh;
`

export const RightImage = styled.div`
    display: flex;
    position: absolute;
    top: 0;
    right: 0;
    height: 100vh;
    left: 50%;
    background-image: url(${ColoredBlob});
    background-size: cover;
`

/* SCROLL BUTTON */
// export const ScrollIconDiv = styled.div`
//     position: absolute;
//     width: 138px;
//     height: 138px;
//     left: calc(50% - 138px / 2);
//     top: 77%;
// `

// export const ScrollIcon = styled.img`
//     /* this makes the scroll button bounce */
//     animation: bounce 1s infinite alternate;
// `

//   @keyframes bounce {
//     0% {
//       transform: translateY(0);
//     }
//     100% {
//       transform: translateY(20px);
//     }
//   }

export const AntoniaInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 85%;
    height: 400px;
    margin: auto;
    margin-top: 100px;
`

export const AntoniaHeader = styled.div`
    display: flex;
    flex-direction: row;
    gap: 25px;
    height: 164px;
    padding-bottom: 20px;
`

export const AntoniaTitleText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const AntoniaHeaderInfo = styled.div`
    display: flex;
`

export const SocialMediaIcons = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    width: 100px;
    margin-top: 40px;

i {
    transition: transform 0.2s ease-in-out;
    color: black;
}

i:hover {
    opacity: 10%;
    transform: scale(1.5);
}

i:visited {
    color: black;
}
`