import React, { Component } from "react";

class Directory extends Component {
  state = {
    weeks: [
      {
        id: 0,
        name: "Week One",
        image: "assets/images/week-one.png",
        description: "You know, girl!",
      },
      {
        id: 1,
        name: "Week Two",
        image: "assets/images/week-two.png",
        description: "What do we do this week again?",
      },
      {
        id: 2,
        name: "Week Three",
        image: "assets/images/week-three.png",
        description: "What do we do this week again?",
      },
      {
        id: 3,
        name: "Week Four",
        image: "assets/images/week-four.png",
        description: "What do we do this week again?",
      },
    ],
  };

  render() {
    const directory = this.state.weeks.map((week) => {
      return (
        <div key={week.id} className="col">
          <img src={week.image} alt={week.name} />
          <h2>{week.name}</h2>
          <p>{week.description}</p>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">{directory}</div>
      </div>
    );
  }
}

export default Directory;
