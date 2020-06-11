import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Card from "./components/Card";
import Container from  "./components/Container"
import Footer from "./components/Footer"
import cards from "./cards.json";

class App extends Component {
  // Setting this.state.cards to the cards json array
  state = {
    cards:cards,
    count:0,
    chosen: [],
    highScore: 0,
    message: "Pick a card to begin"
    
  };
  shuffledCards = newCards => {
  var array = newCards
  for (var i = array.length - 1; i > 0; i--) {
    var pos = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[pos];
    array[pos] = temp;

  }
  return array
}
// newCount = (count,chosen) => {
//   if (chosen.length===0) {
//     count = 0
//   } else {
//     count ++
//   }
//   return count
// }
newMessage = (chosen, id) => {
    let message = ""
    if ((chosen.findIndex(element => element === id)) === -1) {
      message = "Correct"
    } else {
      message = "Game Over. Pick a new card"
    }
    return message
}
newChosen = (chosen,id) => {
  if ((chosen.findIndex(element => element ===id))===-1) {
    chosen.push(id)
  } else {
    chosen = []
  }
  return chosen
}
newHighScore = (score,highScore) => {
    if (score > highScore) {
      highScore = score
    }
    return highScore
}

chooseCard = id => {
  const newMessage = this.newMessage(this.state.chosen, id)
  const newChosen = this.newChosen(this.state.chosen,id)
  const newCount = newChosen.length
  const newCards = this.shuffledCards(this.state.cards)
  const newHighScore = this.newHighScore(newCount,this.state.highScore)
  this.setState({ cards: newCards, count: newCount, chosen:newChosen , highScore:newHighScore, message: newMessage });
};

// Map over this.state.cards and render a FriendCard component for each friend object
render() {
  return (
    <Wrapper>
      <Title
        count={this.state.count}
        highScore={this.state.highScore}
        message={this.state.message}
      />
      <Container>
      {this.state.cards.map(card => (
        <Card
          chooseCard={this.chooseCard}
          id={card.id}
          key={card.id}
          name={card.name}
          image={card.image}

        />
      ))}
      </Container>
      <Footer />
    </Wrapper>
    
    
  );
}
}
export default App;