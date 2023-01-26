import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
   <FooterWrapper>
    <LinkList>
    <LinkColumn>
    <LinkTitle>Call</LinkTitle>
    <LinkItem href="tel:203-805-9303">203-805-9303</LinkItem>
    </LinkColumn>

    <LinkColumn>
    <LinkTitle>Email</LinkTitle>
    <LinkItem href="mailto:omar.al-shammary@uconn.edu">omar.al-shammary@uconn.edu</LinkItem>
    </LinkColumn>
    </LinkList>
    <SocialIconsContainer>
      <CompanyContainer>
        <Slogan>
          Innovating one project at a time
        </Slogan>
      </CompanyContainer>
      <SocialContainer> 

      <SocialIcons href="https://github.com/Omizzy24">
        <AiFillGithub size="3rem" />
      </SocialIcons>

      <SocialIcons href="www.linkedin.com/in/omar-al-shammary02518372">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>

      {/* <SocialIcons href="https://instagram.com">
        <AiFillInstagram size="3rem" />
      </SocialIcons> */}

      </SocialContainer>
    </SocialIconsContainer>
   </FooterWrapper>
  );
};

export default Footer;
