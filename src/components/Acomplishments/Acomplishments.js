import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: '1st', text: 'In TECDP Summer Innovation Program'},
  { number: '18%', text: 'Found in U.S. adults of higher vitality.', },
  { number: '2.5M', text: 'Customer data analysis in those affected by COVID-19.', },
  { number: '25% ↑', text: 'Transportation budget for the department for the new fiscal year ', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Accomplishments</SectionTitle>
    <Boxes>
      {data.map((card,index) => (
        <Box key={index}>
        <BoxNum>{card.number}</BoxNum>
        <BoxText>{card.text}</BoxText>
        </Box>

      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
