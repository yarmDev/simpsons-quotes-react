// src/components/QuoteList.js
import React from "react";
import QuoteCard from "./QuoteCard";
import axios from "axios";

// An array of objects
const quotes = [
  {
    quote:
      "Facts are meaningless. You could use facts to prove anything that's even remotely true.",
    character: "Homer Simpson",
    image:
      "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
  },
  {
    quote: "Nothing you say can upset us. We're the MTV generation.",
    character: "Bart Simpson",
    image:
      "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FBartSimpson.png?1497567511638"
  },
  {
    character: "Bender",
    quote: "Now we're slaving!",
    image:
      "https://res.cloudinary.com/dzxqhkyqd/image/fetch/c_scale,w_500/https://res.cloudinary.com/dzxqhkyqd/image/upload/v1552429540/bender.png"
  },
  {
    quote:
      "Hello, Simpson. I'm riding the bus today because Mother hid my car keys to punish me for talking to a woman on the phone. She was right to do it.",
    character: "Principal Skinner",
    image:
      "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FSeymourSkinner.png?1497567511460"
  }
];

class QuoteList extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     quotes
  //   };
  // }

  state = {
    quotes
  };

  getSimpsons = () => {
    axios
      .get("https://futuramaapi.herokuapp.com/api/quotes/5")
      .then(data => {
        // Une fois les données récupérées, on va mettre à jour notre state avec les nouvelles données
        this.setState({
          quotes: data.data
        });
      })
      .catch(err => console.error(err));
  };
  render() {
    return (
      <div>
        <button onClick={this.getSimpsons}>Changez les quotes</button>
        {this.state.quotes.map((item, index) => (
          <QuoteCard
            quote={item.quote}
            image={item.image}
            character={item.character}
            key={index}
          />
        ))}
      </div>
    );
  }
}

export default QuoteList;
