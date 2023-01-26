import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="Tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a wide-range of technological languages for the sole purpose of: <br />

        - Showcasing projects through data analysis and visualization to present for business needs. <br /> 
        - Machine learning modeling to conclude and make concrete decisions. <br />
        - Web and mobile application development. <br />

      

    </SectionText>
    <List>

      <ListItem>
        <DiReact> size="3rem" </DiReact>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Python  <br />
            RStudio <br />
            React   <br />
            Node.js <br /> 
            VSCode
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiFirebase> size="3rem" </DiFirebase>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            PostgreSQL <br />
            RHET <br />
            Teradata <br />
            MongoDB <br />
            Express
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiZend> size="3rem" </DiZend>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Figma <br />
            HTML/CSS <br />
            Matplotlib <br />
            Plotly/Seaborn <br />
            Scikit-learn <br />
            ggplot <br /> 
          </ListParagraph>
        </ListContainer>
      </ListItem>


    </List>
  </Section>
);

export default Technologies;
