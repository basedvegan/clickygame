import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends
  };

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    //instead of remove friend, add function that changes the state of the card to true when clicked and adds +1 to the counter, keep a log of highest score by updating "highest score" when the new score is higher than the recorded highest score each game if state was already true (previously clicked before) player restarts game
    //
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    //add function to shuffle cards upon reloading 
    this.setState({ friends });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Friends List</Title>
        {/* keep track of scores where the zeros are, will add jsx to point to it when i have variables made to hold that info, it breaks the app if i make place holders without defining them first */}
        <h1>score: 0  topscore: 0</h1>
        {this.state.friends.map(friend => (
          <FriendCard
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            clicked={friend.clicked}
            location={friend.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
