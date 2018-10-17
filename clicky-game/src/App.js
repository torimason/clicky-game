import React, { Component } from "react";
import ScoreBar from "./components/ScoreBar";
import Jumbotron from "./components/Jumbotron";
import Container from "./components/Container";
import ImageCard from "./components/ImageCard";
import images from "./images.json";
import Row from "./components/Row";
import Column from "./components/Column";

//shuffles order of array
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

class App extends Component {
  
  //original state..
  state = {
    images,
    score: 0,
    topScore: 0,
    clicked: [],
    status: "Click Image to Start!"
  };

  //On click function
  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    }
    else {
      this.handleReset();
    }
  };

  handleIncrement = () => {
    //creates Const to hold new score which is the current score + 1 point
    const newScore = this.state.score + 1;
    //sets the state of the score to = the new score and updates the status to display a succesful click!
    this.setState({
      score: newScore,
      status: "MEOWW!"
    });
    // if the new score is greater than or equal to the top score, the top score will be updated the the newscore amount
    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore });
    }
    // if the score = 16 (total number of pictures) the player is alerted that they win and the game is reset!
    else if (newScore === 16) {
      this.setState({ status: "YOU WON!" })
    }
    // images are shuffled
    this.handleShuffle();
  };

  handleReset = () => {
    //returns set state back to the original (except the status now says, "Try Again!")
    this.setState({
      score: 0,
      topScore: this.state.topScore,
      status: "Try Again!",
      clicked: []
    });
    //images are shuffled
    this.handleShuffle();
  };
  // stores the new shuffled array into a variable and sets the images state to the new array
  handleShuffle = () => {
    let shuffledImages = shuffle(images);
    this.setState({ images: shuffledImages });
  };
  //renders the HTML
  render() {
    return (
      <div>
        <Jumbotron />
        <ScoreBar
        //takes the states from APP.js and reflects them in the component
          score={this.state.score}
          topScore={this.state.topScore}
          status={this.state.status}
        />
        <Container>
          <Row>
            {this.state.images.map(images => (
              <Column>
                <ImageCard
                  key={images.id}
                  handleClick={this.handleClick}
                  handleIncrement={this.handleIncrement}
                  handleReset={this.handleReset}
                  handleShuffle={this.handleShuffle}
                  id={images.id}
                  image={images.image}
                />
              </Column>        
            ))}
          </Row>
        </Container>

      </div>
    )
  }
}

export default App;