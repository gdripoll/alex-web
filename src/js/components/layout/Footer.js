/* jshint esversion:6 */

import React from "react";


export default class Footer extends React.Component {
  render() {

    const footerStyles = {
      marginTop: "50px",
    };

    return (
      <footer style={footerStyles}>
        <div class="row">
          <div class="col-lg-12">
            <p>Copyright &copy;2016 literatux.com</p>
          </div>
        </div>
      </footer>
    );
  }
}
