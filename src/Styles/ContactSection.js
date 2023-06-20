import styled from 'styled-components';

export const ContactHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 25px;
    height: 164px;
    padding-bottom: 20px;
`

export const ContactTitleText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const ContactInfo = styled.div`
    margin-top: 40px;
    margin-bottom: 40px;
`

export const MailLink = styled.a`
    font-family: SatoshiBold;
    font-size: 20px;
    background-color: #ff5e55;
    color: white;
    text-decoration: none;
    padding: 7px 3px 7px 3px;
`

export const SoMeIconContainer = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    width: 190px;
    height: 40px;

i {
    transition: transform 0.2s ease-in-out;
    color: black;

    &:hover {
    opacity: 10%;
    transform: scale(1.5);
    }

    &visited {
    color: black;
    }
}
`
