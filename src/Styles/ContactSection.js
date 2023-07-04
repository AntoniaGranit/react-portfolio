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
    font-size: 22px;
    color: #ff5e55;
    text-decoration: none;
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
