import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import './App.css';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ChartWrapper from './ChartWrapper';
import Table from './Table';
import GenderDropdown from './GenderDropdown';
import { json } from 'd3'



class App extends Component {
  state = {
    data: [{"age":"10","height":"152","name":"Tony"},
           {"age":"12","height":"148","name":"Jessica"},
           {"age":"9","height":"135","name":"Andrew"},
           {"age":"10","height":"145","name":"Emily"},
           {"age":"11","height":"141","name":"Richard"}],
    activeName:null
  }
  // state = {
  //   gender: "men"
  // }

  // genderSelected = (gender) => this.setState({gender})


  renderChart(){
    if(this.state.data.length == 0){
      return "No data yet"
    }
    return <ChartWrapper data={this.state.data} updateName = {this.updateName} />
  }

  updateData = (data) => this.setState({ data })

  updateName = (activeName) => this.setState({activeName})

  render() {
    return (
      <div className="App">
          <Navbar bg="light">
            <Navbar.Brand>Barchartly</Navbar.Brand>
          </Navbar>
        <Container>
          {/* <Row>
            <Col xs={12}><GenderDropdown genderSelected={this.genderSelected}/></Col>
          </Row>
          <Row>
            <Col xs={12}><ChartWrapper gender={this.state.gender}/></Col>
          </Row>         */}
          <Row>
            <Col md={6} xs={12}>{this.renderChart()}</Col>
            <Col md={6} xs={12}><Table data={this.state.data} 
                                       updateData={this.updateData}
                                       activeName={this.state.activeName}/></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
