import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Stack,
  Typography,
} from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import './Hero.scss';
import { useState } from 'react';

const HeroCard = ({ headerText, subText }) => {
  return (
    <Card
      className='test'
      sx={{
        width: 300,
        border: 1,
        borderRadius: '16px',
        borderColor: '#bdbdbd',
        padding: 0, // Disable default padding
        margin: 0, // Disable default margin
      }}
      disableElevation
      variant='outlined'
    >
      <CardContent>
        <Typography variant='h6' component='div' sx={{ fontSize: '18px' }}>
          {headerText}
        </Typography>
        <Typography sx={{ fontSize: '16px' }}>{subText}</Typography>
      </CardContent>
    </Card>
  );
};

const Hero = () => {
  const [activeHero, setActiveHero] = useState('hero1');

  const handleIconClick = (hero) => {
    setActiveHero(hero);
  };
  return (
    <>
      <Box>
        <Box sx={{ marginTop: { xs: '16px', md: '64px' } }}>
          <Stack direction={'row'} spacing={0.5}>
            <FiberManualRecordIcon
              sx={{
                fontSize: '18px',
                color: activeHero === 'hero1' ? '#337EDD' : 'inherit',
                cursor: 'pointer',
              }}
              onClick={() => handleIconClick('hero1')}
            />
            <FiberManualRecordIcon
              sx={{
                fontSize: '18px',
                color: activeHero === 'hero2' ? '#337EDD' : 'inherit',
                cursor: 'pointer',
              }}
              onClick={() => handleIconClick('hero2')}
            />
            <FiberManualRecordIcon
              sx={{
                fontSize: '18px',
                color: activeHero === 'hero3' ? '#337EDD' : 'inherit',
                cursor: 'pointer',
              }}
              onClick={() => handleIconClick('hero3')}
            />
          </Stack>
        </Box>
        <Box
          className='hero1'
          style={{ display: activeHero === 'hero1' ? 'block' : 'none' }}
        >
          <Box sx={{ marginTop: { xs: '16px', md: '32px' } }}>
            <Stack>
              <Typography variant='h5' sx={{ fontSize: '32px' }}>
                Find exactly the right job with Workwise.
              </Typography>
              <Typography
                variant='h5'
                sx={{ fontSize: '32px', fontWeight: 'medium' }}
              >
                What are you looking for?
              </Typography>
            </Stack>
          </Box>
          <Box sx={{ marginTop: { xs: '16px', md: '32px' } }}>
            <Box
              sx={{ maxWidth: '616px', paddingRight: { xs: '0', md: '16px' } }}
            >
              <Stack spacing={2}>
                <Stack spacing={2} direction={'row'}>
                  <HeroCard
                    headerText='permanent employment'
                    subText='Full-time Part-time'
                  />
                  <HeroCard
                    headerText='Student jobs'
                    subText='Working student, internship, temporary'
                  />
                </Stack>
                <Stack spacing={2} direction={'row'}>
                  <HeroCard
                    headerText='Training'
                    subText='Dual studies, vocational training'
                  />
                  <HeroCard
                    headerText='Career entry'
                    subText='Trainee, junior'
                  />
                </Stack>
              </Stack>
            </Box>
          </Box>
        </Box>
        <Box
          className='hero2'
          style={{ display: activeHero === 'hero2' ? 'block' : 'none' }}
        >
          <Box sx={{ marginTop: { xs: '16px', md: '32px' } }}>
            <Box
              sx={{ maxWidth: '616px', paddingRight: { xs: '0', md: '16px' } }}
            >
              <Stack spacing={2}>
                <Stack spacing={2} direction={'row'}>
                  <HeroCard
                    headerText='permanent employment'
                    subText='Full-time Part-time'
                  />
                  <HeroCard
                    headerText='Student jobs'
                    subText='Working student, internship, temporary'
                  />
                </Stack>
                <Stack spacing={2} direction={'row'}>
                  <HeroCard
                    headerText='Training'
                    subText='Dual studies, vocational training'
                  />
                  <HeroCard
                    headerText='Career entry'
                    subText='Trainee, junior'
                  />
                </Stack>
              </Stack>
            </Box>
          </Box>
        </Box>
        <Box
          className='hero3'
          style={{ display: activeHero === 'hero3' ? 'block' : 'none' }}
        >
          <Box sx={{ marginTop: { xs: '16px', md: '32px' } }}></Box>
        </Box>
      </Box>
    </>
  );
};

export default Hero;
