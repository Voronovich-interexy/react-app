import React, { useEffect, useState, useMemo } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  GridContainer,
  CustomCard,
  StyledGrid,
  Content,
  Aside,
  Footer,
} from './components/components.styled';
import { Transition } from 'react-transition-group';
import {
  Typography,
  Box,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Autocomplete,
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  Grid,
  TextField,
} from '@mui/material';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import { fetchFourChars, getCharByName, getSingleCharacter } from './api/characters';
import red from '@mui/material/colors/red';
import { RickMortyData, SingleChar, ArrayOfChars, SwitchReturned } from './types/types';
import NavBar from './components/NavBar';

Chart.register(...registerables);

const labels = ['January', 'February', 'March', 'April', 'May', 'June'];

const data = {
  labels: labels,
  datasets: [
    {
      label: 'Stuff',
      backgroundColor: '#01579b',
      borderColor: '#424242',
      data: [0, 10, 5, 2, 20, 30, 45],
    },
    {
      label: 'Other stuff',
      backgroundColor: '#e8eaf6',
      borderColor: '#26a69a',
      data: [3, 6, 2, 9, 24, 19, 14],
    },
  ],
};

function setColor(
  status: string,
):
  | SwitchReturned.Success
  | SwitchReturned.Error
  | SwitchReturned.Default
  | SwitchReturned.Secondary
  | SwitchReturned.Primary
  | SwitchReturned.Info
  | SwitchReturned.Warning
  | undefined {
  switch (status) {
    case 'Alive':
      return SwitchReturned.Success;
    case 'Dead':
      return SwitchReturned.Error;
    default:
      return SwitchReturned.Info;
  }
}

export default function ResponsiveDrawer() {
  const drawerWidth = 190;

  const [animationStarted, setAnimationStarted] = useState<boolean | undefined>(false);
  const [cards, setCards] = useState<ArrayOfChars[]>([]);
  const [charsByName, setCharsByName] = useState<RickMortyData[]>([]);
  const [singleChar, setSingleChar] = useState<SingleChar>();
  const [open, setOpen] = useState(true);

  const getCharById = (id: number) => {
    setOpen(false);
    getSingleCharacter(id).then((char) => setSingleChar(char));
  };

  useEffect(() => {
    setAnimationStarted(true);
    fetchFourChars([1, 2, 3, 4]).then((cards) => setCards(cards));
  }, []);

  const memoCards = useMemo(() => {
    return cards.map((card) => {
      return (
        <CustomCard key={card.data.id} sx={{ width: '100%', maxWidth: 345 }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                {card.data.name.slice(0, 3)}
              </Avatar>
            }
            title={card.data.name}
            subheader={card.data.created.slice(0, 10)}
          />
          <CardMedia component="img" height="194" image={card.data.image} alt={card.data.name} />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Location: {card.data.location.name}
            </Typography>
            <Chip label={card.data.status} color={setColor(card.data.status)} />
          </CardContent>
        </CustomCard>
      );
    });
  }, [cards]);

  return (
    <Box sx={{ display: 'flex' }}>
      <NavBar drawerWidth={drawerWidth} />
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 0, width: { md: `calc(100% - ${drawerWidth}px)` } }}
      >
        <StyledGrid container>
          <Grid
            item
            sx={{
              minHeight: '100%',
              padding: '0 0 0 0 !important',
              minWidth: '100%',
            }}
          >
            <Box
              sx={{
                flexGrow: 1,
                width: '100%',
                minHeight: '100vh',
                background: 'red',
              }}
            >
              <GridContainer container>
                <Content sx={{ order: { xs: 2, md: 1 } }} item xs={12} md={9}>
                  <Autocomplete
                    freeSolo
                    open={open}
                    onOpen={() => {
                      setOpen(true);
                    }}
                    onClose={() => {
                      setOpen(false);
                    }}
                    id="custom-autocomplete"
                    options={charsByName}
                    sx={{
                      width: '50%',
                      minWidth: 150,
                    }}
                    onInputChange={(e: any, value: any, reason: any) =>
                      getCharByName(value).then((c) => setCharsByName(c))
                    }
                    getOptionLabel={(option: any) => `${option.name}: ${option.id}`} //filter value
                    renderInput={(params) => {
                      return <TextField {...params} label="Search Character" />;
                    }}
                    renderOption={(props, option, state) => {
                      return (
                        <li
                          onClick={() => getCharById(option.id)}
                          className="char_list"
                          style={{ cursor: 'pointer' }}
                          key={`${option.name}: ${option.id}`}
                        >{`${option.name}`}</li>
                      );
                    }}
                  />

                  <Box
                    sx={{
                      width: '100%',
                      height: 'auto',
                      backgroundColor: '#40c4ff',
                    }}
                  >
                    {singleChar ? (
                      <div
                        style={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          justifyContent: 'center',
                          gap: 20,
                          padding: '20px 0',
                        }}
                      >
                        <Card sx={{ minWidth: 200 }}>
                          <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                              Basic info about
                            </Typography>
                            <Typography variant="h5" component="div">
                              {singleChar.name}
                            </Typography>
                            <CardMedia
                              component="img"
                              height="194"
                              image={singleChar.image}
                              alt={singleChar.name}
                            />
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                              Location: {singleChar.location.name}
                            </Typography>
                            <Typography variant="body2">Gender: {singleChar.gender}</Typography>
                          </CardContent>
                          <CardActions>
                            <Button size="small">Learn More</Button>
                          </CardActions>
                        </Card>
                      </div>
                    ) : (
                      <div
                        style={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          justifyContent: 'center',
                          color: '#212121',
                          gap: 20,
                          padding: '20px 0',
                        }}
                      >
                        Pick your character
                      </div>
                    )}
                  </Box>
                  <Box
                    sx={{
                      width: '100%',
                      height: 'auto',
                      backgroundColor: '#e3f2fd',
                    }}
                  >
                    <div>
                      <Line data={data} />
                    </div>
                  </Box>
                  <Box
                    sx={{
                      width: '100%',
                      height: 'auto',
                      backgroundColor: '#40c4ff',
                    }}
                  >
                    {cards.length ? (
                      <div
                        style={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          justifyContent: 'center',
                          gap: 20,
                          padding: '20px 0',
                        }}
                      >
                        {memoCards}
                      </div>
                    ) : (
                      <div
                        style={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          justifyContent: 'center',
                          gap: 20,
                          padding: '20px 0',
                        }}
                      >
                        No card available
                      </div>
                    )}
                  </Box>

                  <Box
                    sx={{
                      width: '100%',
                      maxWidth: 400,
                      height: 'auto',
                      backgroundColor: '#40c4ff',
                      color: '#212121',
                      p: 3,
                    }}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore sed,
                    necessitatibus consectetur quis delectus assumenda id distinctio non eveniet
                    nulla, optio nihil vero expedita et obcaecati sequi totam eligendi commodi.
                    <div className="square__container">
                      <div className="running__square"></div>
                    </div>
                  </Box>
                  <Box
                    sx={{
                      width: '100%',
                      maxWidth: 400,
                      height: 'auto',
                      backgroundColor: '#40c4ff',
                      color: '#212121',
                      p: 3,
                    }}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore sed,
                    necessitatibus consectetur quis delectus assumenda id distinctio non eveniet
                    nulla, optio nihil vero expedita et obcaecati sequi totam eligendi commodi.
                    <div className="square__container-frame">
                      <Transition in={animationStarted} timeout={0}>
                        {(state) => <div className={`running__square-frame ${state}`} />}
                      </Transition>
                    </div>
                  </Box>
                  <Box
                    sx={{
                      width: '100%',
                      maxWidth: 400,
                      height: 'auto',
                      backgroundColor: '#40c4ff',
                      color: '#212121',
                      p: 3,
                    }}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore sed,
                    necessitatibus consectetur quis delectus assumenda id distinctio non eveniet
                    nulla, optio nihil vero expedita et obcaecati sequi totam eligendi commodi.
                    <div className="square__container-js">
                      <Transition in={animationStarted} timeout={0}>
                        {(state) => <div className={`running__square-js ${state}`} />}
                      </Transition>
                    </div>
                  </Box>
                </Content>
                <Aside sx={{ order: { xs: 1, md: 2 } }} item xs={12} md={3}>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>Accordion 1</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2a-content"
                      id="panel2a-header"
                    >
                      <Typography>Accordion 2</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </Aside>
                <Footer sx={{ order: 3 }} item xs={12} md={12}>
                  <div>FOOTER</div>
                </Footer>
              </GridContainer>
            </Box>
          </Grid>
        </StyledGrid>
      </Box>
    </Box>
  );
}
