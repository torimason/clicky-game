import React from "react";

const styles = {
    scoreBar: {
      backgroundColor: "#585d68",
    },
    scoreText: {
      color: "white",
      fontFamily: "'Shadows Into Light Two', cursive",
      fontSize: "24px"
    }
  }
  
const ScoreBar = props => <div className="score-container py-2 row px-5" style={styles.scoreBar}>
<div className="col-md-4"></div>
<div className="col-md-4 mt-1 text-center" style={styles.scoreText}>{props.status}</div>
<div className="col-md-4 text-center mt-1" style={styles.scoreText}>Score: {props.score} | Top Score: {props.topScore}</div>
</div>

export default ScoreBar;
