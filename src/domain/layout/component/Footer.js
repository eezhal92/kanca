import React, { Component } from 'react';
import config from 'config';

class Footer extends Component {
  render() {
    const homepage = config.homepage;
    return (
      <footer className="app-footer">
        <a href={homepage}>Kanca</a> &copy; 2017 Hellowin.
        <span className="float-right">Powered by <a href="http://coreui.io">CoreUI</a></span>
      </footer>
    )
  }
}

export default Footer;
