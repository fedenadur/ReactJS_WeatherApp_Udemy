import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import LocationListContainer from './containers/LocationListContainer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import ForecastExtended from './components/ForecastExtended'
import './App.css';

const cities = ["Buenos Aires,ar","Washington,us", "London,uk", "Madrid,es", "Santiago,cl", "Berlin,de", "Paris,fr"];

class App extends Component {
  constructor() {
    super();

    this.state = { city: null};
  }

  render() {
    const {city} = this.state

    return (
      <MuiThemeProvider>
        <Grid fluid>
          <Row>
            <AppBar position='sticky'>
              <Toolbar>
                <Typography variant='title' color='inherit'> Weather App </Typography>
              </Toolbar>
            </AppBar>
          </Row>
          <Row>
            <Col xs={12} sm={12} lg={6}>
           < LocationListContainer cities = {cities} />
      </Col>
      <Col xs={12} sm={12} lg={6}>
        <Paper zdepth={3}>
        <div className='details'>
          {!city ? 
          <h2>Pop... Mono, no se selecciono ninguna ciudad :( </h2> :
          <ForecastExtended city={city} ></ForecastExtended>}
          
        </div>
        </Paper>
      </Col>
          </Row>
        </Grid>
      </MuiThemeProvider>
    );
  }
}

export default App;
