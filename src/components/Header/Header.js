import Link from 'next/link';
import React from 'react';
import { AiFillBoxPlot, AiFillFastBackward, AiFillFilePdf, AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20'}}>
          <DiCssdeck size="3rem" /> <Span>Omar Al-Shammary's Portfolio</Span>
          </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#Tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <Link href = "#about">
      <li>
          <NavLink>About</NavLink>
      </li>
      </Link>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/Omizzy24">
        <AiFillGithub size="3rem" />
      </SocialIcons>

      <SocialIcons href="https://linkedin.com/in/omar-al-shammary02518372">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>

      {/* {<SocialIcons href="https://instagram.com">
        <AiFillFilePdf size="3rem" />
      </SocialIcons>} */}
     
    </Div3>
  </Container>
);

export default Header;
