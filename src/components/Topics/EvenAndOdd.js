import React from "react";
import { useState } from "react";

const EvenAndOdd = () => {
  // const [userInput, setUserInput] = useState("");
  // const [evens, setEvens] = useState([]);
  // const [odds, setOdds] = useState([]);

  return (
    <div className="puzzleBox evenAndOddPB">
      <h4>Evens and Odds</h4>
      <input className="inputLine" type="text" />
      <button className="confirmationButton">Split</button>
      <span className="resultsBox"></span>
      <span className="resultsBox"></span>
    </div>
  );
};

// Class Component

// class EvenAndOdd extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       evenArray: [],
//       oddArray: [],
//       userInput: "",
//     };
//     isEvenOrOdd = () => {};
//   }

//   render() {
//     const inputHandler = (value) => {
//       this.setState({ userInput: value });
//     };

//     return (
//       <div className="puzzleBox evenAndOddPB">
//         <h4>Evens and Odds</h4>
//         <input
//           onChange={(e) => inputHandler(e.target.value)}
//           className="inputLine"
//           type="text"
//         />
//         <button
//           onClick={() => isEvenOrOdd(this.state.userInput)}
//           className="confirmationButton"
//         >
//           Split
//         </button>
//         <span className="resultsBox"></span>
//         <span className="resultsBox"></span>
//       </div>
//     );
//   }
// }

export default EvenAndOdd;
