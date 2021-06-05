import React from "react";
// import ReactDOM from "react-dom";
var year = new Date().getFullYear();

function Footer(){
  return(
      <footer>
        <p>
        Made with ♥ by Rishabh in year {year}
        </p>
      </footer>
  );

};

export default Footer; 