import React from 'react';

import Aux from '../hoc/_Aux'

import {Grid, Row, Col} from 'react-bootstrap'
import Toolbar from '../components/Toolbar/Toolbar'
import Sidebar from '../components/Sidebar/Sidebar'

const toolbar = (props) => {
  return ( 
    <Aux>
      <Grid>
        <Row className="show-grid">
          <Col>
            <Toolbar></Toolbar>
          </Col>
        </Row>

        <Row className="show-grid">
          <Col lg={3}>
            <Sidebar></Sidebar>
          </Col>
          <Col lg={9}>
            
          </Col>
        </Row>
      </Grid>
    </Aux>
  );
}
 
export default toolbar;