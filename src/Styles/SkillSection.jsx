import styled from 'styled-components';

export const SkillsLists = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 70%;
  gap: 80px;
  margin-top: 50px;

  @media (min-width: 668px) and (max-width: 1023px) {
    width: 45%;
    gap: 40px;
  }

  @media (min-width: 1024px) and (max-width: 1279px) {
    display: flex;
    flex-direction: row;
    gap: 20px;
  }

  @media (min-width: 1280px) {
    display: flex;
    flex-direction: row;
    gap: 30px;
  }
`;

export const SkillsUl = styled.ul`
  font-family: 'Outfit';
  font-size: 19px;
  line-height: 32px;
`;

export const SkillsLi = styled.li`
  margin-bottom: 8px;
  font-family: 'Outfit';
  font-size: 18px;
  text-align: center;
`;
