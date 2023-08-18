import styled from 'styled-components';

export const ContactHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`

export const ContactTitleText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ContactInfo = styled.div`
display: flex;
`

export const MailLink = styled.a`
    font-family: "Outfit";
    font-size: 1.4rem;
    color: #030324;
    text-decoration: none;
    padding: .25rem .25rem;
    transition: color .3s ease-in-out, box-shadow .3s ease-in-out;

  :hover {
  box-shadow: inset 300px 0px 0px 0px #030324;
  color: white;
}
`

export const SoMeIconContainer = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    width: 180px;
    height: 40px;

i {
    transition: transform 0.2s ease-in-out;
    color: #030324;

    &:hover {
    transform: scale(1.5);
    }

    &visited {
    color: black;
    }
}
`
