import React from "react";

const styles = {
  jumbo:{
    marginRight: "0px",
    backgroundColor: "transparent",
    fontFamily: "'Shadows Into Light Two', cursive",
  },
  text:{
    fontSize: "80px",
    fontWeight:"bold",
    color:"#ffcce8",
    textShadow: "2px 2px 5px #585d68"
  },
  subText:{
    fontSize:"30px",
    color:"#585d68"
  }
}

const Jumbotron = () => <div style={styles.jumbo} className="jumbotron jumbotron-fluid mb-0">
<div className="container">
  <h1 style={styles.text} className="display-4">Clicky Kitty</h1>
  <p style={styles.subText}className="lead">For every image clicked you gain one point, but you cannot click on the same image more than once!</p>
</div>
</div>

export default Jumbotron;