import React from 'react';
import PropTypes from 'prop-types';
//import AppBar from '@material-ui/core/AppBar';
//import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
//import School from '@material-ui/icons/School';
//import { withStyles } from '@material-ui/core/styles';
import fifthlogo from '../../../assets/fifth_logo.png'
import { Link } from 'react-router-dom';
import './LandingPage.css';


const  LandingPage = () => {
  return (
    <section
      id="hero"
      className="blue lighten-4"
      style={{ backgroundImage: 'url(' + fifthlogo + ')'}}
    >
      <div className="container valign-wrapper jc-center">
        <div className="valign center-align white-text">
          <p className="flowtext hide-on-small-only">We give your business an internet presence</p>
          <h3>
            Develop, Deploy, Done
          </h3>

          <p className="big">
            We build your website using cutting edge frameworks
            <br/>
            entirely customized and made to order
          </p>

          <a className="btn waves-light waves-effect m-r-16">Features</a>
          <a className="btn waves-light waves-effect">Portfolio</a>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
