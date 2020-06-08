import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import characters from "./lotr.json";
import "./App.css";

class App extends Component {
    // Setting state to the characters.json array
    state = {
        characters,
        score: 0,
        topScore: 0,
        newTopScore: 0
    };

    resetGame = () => {
        this.setState({ topScore: 0, score: 0, newTopScore: 0 });
        console.log(this.state.topScore)
        characters.sort((a, b) => 0.5 - Math.random());
    };

    onClick = id => {
        // Filter for the clicked match
        const characters = this.state.characters
        const clickedCharacter = this.state.characters.filter(characters => characters.id === id);

        // If the matched image's value is true, start over
        if (clickedCharacter[0].click) {
            // shuffles characters
            characters.sort((a, b) => 0.5 - Math.random());
            // reset state
            this.setState({ topScore: this.state.score, score: 0, newTopScore: this.state.newTopScore });

            if (this.state.score > this.state.topScore) {
                this.setState({ newTopScore: this.state.topScore });
            }
            for (var i = 0; i < characters.length; i++) {
                characters[i].click = false;
            }

            alert("You hit the same card twice! Please try again!");

        } else if (this.state.score < 12) {
            // Set its value to true
            clickedCharacter[0].click = true;
            this.setState({ score: this.state.score + 1 });
            characters.sort((a, b) => 0.5 - Math.random());
        } else {
            // restarts if game is won
            this.setState({ score: 0, topScore: 0, newTopScore: 0 });
            characters.sort((a, b) => 0.5 - Math.random());
        }

    }
    render() {
        return (<>
            <Header
                score={this.state.score}
                topScore={this.state.topScore}
                resetGame={this.resetGame}
            />
            <Wrapper>
                {this.state.characters.map(characters => (
                    <Card
                        onClick={this.onClick}
                        id={characters.id}
                        key={characters.id}
                        image={characters.image}
                        click={characters.click}
                    />
                ))}
            </Wrapper>
            <Footer></Footer>
        </>
        );
    }
}

export default App;