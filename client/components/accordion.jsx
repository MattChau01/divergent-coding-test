import React from 'react';

import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled(props => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0
  },
  '&:before': {
    display: 'none'
  }
}));

const AccordionSummary = styled(props => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)'
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1)
  }
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)'
}));

export default function HomeAccordion() {
  const [expanded, setExpanded] = React.useState('');

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className='mt-5 accordion' >

      <div>
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography>What is an escape room?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>

              An escape room is a game in which a team of players discover clues,
              solve puzzles, and accomplish tasks in one or more
              rooms in order to accomplish a specific goal in a limited amount of time. The goal is
              often to escape from the site of the game. <a href='https://en.wikipedia.org/wiki/Escape_room' target="_blank" rel="noreferrer">Learn more here!</a>

            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography>How to use this site?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography style={{ color: 'red' }} >

              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
              sit amet blandit leo lobortis eget.

            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography>Do you own an escape room?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>

              If you are a vendor and would like to add your room as a listing on this site, take a look at our
              guide on how to make your room available! Click on this link to get started!

            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
          <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
            <Typography>Looking to book your first escape room?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>

              If you are looking to book your first room, it is recommended to first decide the theme you are looking for.
              You can use this website as a catalog to browse and learn more about current listings!

            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
          <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
            <Typography>About Us</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>

              This site was created out of a hobby for escape rooms. Hopefully it can be yours too!
              There are many types and themes of escape rooms out there, find your first room here!

            </Typography>
          </AccordionDetails>
        </Accordion>

      </div>

    </div>
  );
}
