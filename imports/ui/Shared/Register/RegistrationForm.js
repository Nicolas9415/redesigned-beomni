import React from 'react';
import {Container, 
  Col, 
  Form,
  FormGroup, 
  Label, 
  Input
} from "reactstrap";
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Navigation from '../Home/PrimarySearchBar.js';
import './RegistrationForm.css';


const themeColor = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#4851A9',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#F6F2E3',
      main: '#FFFEFA',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00',
    },
    // error: will use the default color
  },
});



  class RegistrationForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        sessionToken: null
      };
      this.checkAuthentication = this.checkAuthentication.bind(this);
      this.checkAuthentication();

      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
      this.handleLastNameChange = this.handleLastNameChange.bind(this);
      this.handleEmailChange = this.handleEmailChange.bind(this);
      this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    async checkAuthentication() {
    
    }

    componentDidUpdate() {
    
    }

    handleFirstNameChange(e) {
      this.setState({ firstName: e.target.value });
    }
    handleLastNameChange(e) {
      this.setState({ lastName: e.target.value });
    }
    handleEmailChange(e) {
      this.setState({ email: e.target.value });
    }
    handlePasswordChange(e) {
      this.setState({ password: e.target.value });
    }

    handleSubmit(e) {
      //call meteor
    }

    render() {


      return (
        <div>
        <Navigation/>
        <Container className="App">
        
        <h1>Register</h1>
        <Form className="form" onSubmit={this.handleSubmit}>
          <Col>
            <FormGroup>
              <Label id="emailLabel" >Email</Label>
              <Input
                type="email"
                aria-label="Input your email"
                name="email"
                id="email"
                value={this.state.email}
                onChange={this.handleEmailChange}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label id="firstLabel" for="examplePassword">First Name</Label>
              <Input
                type="text"
                aria-label="Input your first name"
                name="first name"
                id="firstName"
                value={this.state.firstName}
                onChange={this.handleFirstNameChange}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label id="lastLabel" >Last Name</Label>
              <Input
                type="text"
                aria-label="Input your last name"
                name="last name"
                id="lastName"
                value={this.state.lastName}
                onChange={this.handleLastNameChange}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label id="passwordLabel" >Password</Label>
              <Input
                type="password"
                aria-label="Input your password"
                name="password"
                id="password"
                value={this.state.password}
                onChange={this.handlePasswordChange}
              />
            </FormGroup>
          </Col>
          <Button className="registration-buttons" variant="contained" color="primary" size="large">Let's go</Button>
        </Form>
      </Container>
      </div>
      );
    }
  }
export default RegistrationForm;