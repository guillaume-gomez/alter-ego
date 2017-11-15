import React from 'react';
import { Navbar, MenuItem, Nav, NavDropdown, NavItem } from 'react-bootstrap';
import { render } from 'react-dom';

import AboutMe from "./AboutMe.react";
import { t } from "./Translations";

const Pages = ["aboutMe"];

class App extends React.Component {

  constructor() {
    super();
    [
      "renderNavBar",
      "renderAboutMe",
      "renderResume",
      "renderStudentProjects",
      "renderPersonnalProjects",
      "renderContribution",
      "seeAboutMe",
      "seeResume",
      "seeStudentProjects",
      "seePersonalProjects",
      "seeContribution",
      "checkKonamiCode"
    ].forEach(item => {
      this[item] = this[item].bind(this);
    });
    this.state = { currentPage: "aboutMe", locale: "fr", konamiCodeIndex: 0 };
  }

  componentDidMount() {
    const params = this.getParams(window.location.search);
    if(Pages.includes(params)) {
      this.setState({ currentPage: params });
    }
    window.addEventListener('keydown', this.checkKonamiCode);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.checkKonamiCode);
  }

  checkKonamiCode(e) {
    const { konamiCodeIndex } = this.state;
    let newKonamiCodeIndex = konamiCodeIndex;
    console.log(newKonamiCodeIndex);
    console.log(KonamiCode[newKonamiCodeIndex]);
    if (e.keyCode === KonamiCode[newKonamiCodeIndex]) {
      newKonamiCodeIndex = newKonamiCodeIndex + 1;
      if (newKonamiCodeIndex === KonamiCode.length) {
        //ADD stuff :)
        newKonamiCodeIndex = 0;
      }
    }
    else {
      newKonamiCodeIndex = 0;
    }
    this.setState({konamiCodeIndex: newKonamiCodeIndex});
    console.log(newKonamiCodeIndex)
  }

  getParams(data) {
    //remove ?pages=
    return data.substring(6);
  }

    handleKeyDown(event) {
    console.log('handling a key press');
  }


  updateQueryString(params) {
    if (window.history.pushState) {
      var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + `?page=${params}`;
      window.history.pushState({path:newurl},'',newurl);
    }
  }

  seeAboutMe() {
    this.setState({ currentPage: "aboutMe" });
    this.updateQueryString("aboutMe");
  }

  seeResume() {
    this.setState({ currentPage: "resume" });
    this.updateQueryString("resume");
  }

  seeStudentProjects() {
    this.setState({ currentPage: "studentProjects" });
    this.updateQueryString("studentProjects");
  }

  seePersonalProjects() {
    this.setState( { currentPage: "personalProjects" });
    this.updateQueryString("personalProjects");
  }

  seeContribution() {
    this.setState( { currentPage: "contributions" });
    this.updateQueryString("contributions");
  }

  renderAboutMe() {
    if(this.state.currentPage === "aboutMe") {
      return (<AboutMe locale={this.state.locale} />);
    }
  }

  renderResume() {
    if(this.state.currentPage === "resume") {
      return (<Resume locale={this.state.locale} />);
    }
  }

  renderStudentProjects() {
    if(this.state.currentPage === "studentProjects") {
      return (<StudentProjects locale={this.state.locale} />);
    }
  }

  renderPersonnalProjects() {
    if(this.state.currentPage === "personalProjects") {
      return (<PersonalProjects locale={this.state.locale} />);
    }
  }

  renderContribution() {
    if(this.state.currentPage === "contributions") {
      return (<Contribution locale={this.state.locale} />);
    }
  }

  renderNavBar() {
    const { locale } = this.state;
    return (
      <div>
        <Navbar inverse collapseOnSelect className="navbar-static-top">
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#" onClick={this.seeAboutMe}>Roger Claude</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
        </Navbar>
        {this.renderAboutMe()}
      </div>
    );
  }

  render () {
    return (this.renderNavBar());
  }
}

render(<App/>, document.getElementById('app'));