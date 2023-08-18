import styled from 'styled-components';

export const ContactHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
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
    font-family: SatoshiBlack;
    font-size: 1.4rem;
    color: #ff5454;
    text-decoration: none;
    margin: 0 -.25rem;
    padding: .25rem .25rem;
    transition: color .3s ease-in-out, box-shadow .3s ease-in-out;

  :hover {
  box-shadow: inset 300px 0 0 0 #ff5e55;
  color: white;
}
`

export const SoMeIconContainer = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    width: 100px;
    height: 40px;

i {
    transition: transform 0.2s ease-in-out;
    color: #050d50;

    &:hover {
    transform: scale(1.5);
    }

    &visited {
    color: black;
    }
}
`
