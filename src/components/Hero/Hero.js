import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        <ol>
          <li> &emsp; Here you will be able to find my work and achievements that I have accomplished throughout my career.</li>
        <li> &emsp; I am a recent graduate from the University of Connecticut, with two Bachelor of Science degrees in Microbiology and Economics, as well as a Masters in Quantitative Economics,
        with an interest in Data Science and Software Enginnering. </li>
        <li> &emsp; I am currently a Senior Analyst at Cigna, being apart of the TECDP program. </li>
        </ol>
      </SectionText>
      <Button onClick={() => window.location = 'https://docs.google.com/document/d/1Uxj_eEkVAfCw3cmi2A1jucku6oNh8hIt/edit?usp=sharing&ouid=107957855563689793858&rtpof=true&sd=true'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;



// &emsp; Here you will be able to find my work and achievements that I have accomplished throughout my career.
//         <li>
//         &emsp; I am a recent graduate from the University of Connecticut,
//         with two Bachelor of Science degrees in Microbiology and Economics, as well as a Masters in Quantitative Economics,
//         with an interest in Data Science and Software Enginnering. 
//         </li>
//         <li>
//         &emsp; I am currently a Senior Analyst at Cigna, being apart of the TECDP program. 
//         </li>