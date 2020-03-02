import React, { Component } from "react";
import Question from "./Question";
import burger from "./images/burger.jpg";
import mexican from "./images/Mexican.jpg";
import pasta from "./images/pasta.jpeg";
import sushi from "./images/sushi.jpg";

class Quiz extends Component {
  // state = {
  //   questions: [
  //     {
  //       id: 0,
  //       questionAsked: "What type of food would you like to eat?",
  //       selectedAnswer: -1,
  //       answers: [
  //         {
  //           id: 0,
  //           imageUrl: burger,
  //           //"https://www.tasteofhome.com/wp-content/uploads/2018/01/exps28800_UG143377D12_18_1b_RMS-696x696.jpg",
  //           answer: "American Food",
  //           selected: false
  //         },
  //         {
  //           id: 1,
  //           imageUrl: mexican,
  //           //"https://cdn.cheapism.com/images/Budget_Friendly_Mexican_Dishes.2e16d0ba.fill-1440x605.jpg",
  //           answer: "Mexican Food",
  //           selected: false
  //         },
  //         {
  //           id: 2,
  //           imageUrl: sushi,
  //           //"https://www.happyfoodstube.com/wp-content/uploads/2016/03/homemade-sushi-image.jpg",
  //           answer: "Japanese",
  //           selected: false
  //         },
  //         {
  //           id: 3,
  //           imageUrl: pasta,
  //           //"https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2Farchive%2F0f2b0a259ae9c1ca7ebf6df502ce17da31237c99",
  //           answer: "Italian",
  //           selected: false
  //         }
  //       ]
  //     },
  //     {
  //       id: 1,
  //       questionAsked: "How far are you willing to commute?",
  //       selectedAnswer: -1,
  //       answers: [
  //         {
  //           id: 0,
  //           imageUrl:
  //             "https://eaglescry.net/wp-content/uploads/2018/11/Food-Delivery.jpeg",
  //           answer: "Delivery please!",
  //           selected: false
  //         },
  //         {
  //           id: 1,
  //           imageUrl:
  //             "http://www.cyclebitz.co.uk/image/cache/catalog/cbitz/main/10_miles_300-400x400.gif",
  //           answer: "", //10 MILES
  //           selected: false
  //         },
  //         {
  //           id: 2,
  //           imageUrl:
  //             "http://www.cyclebitz.co.uk/image/cache/catalog/cbitz/main/20_miles_300-400x400.gif",
  //           answer: "", //20 MILES
  //           selected: false
  //         },
  //         {
  //           id: 3,
  //           imageUrl:
  //             "http://www.cyclebitz.co.uk/image/cache/catalog/cbitz/main/30_miles_300-400x400.gif",
  //           answer: "", //30 MILES
  //           selected: false
  //         }
  //       ]
  //     },
  //     {
  //       id: 2,
  //       questionAsked: "What does your budget look like?",
  //       selectedAnswer: -1,
  //       answers: [
  //         {
  //           id: 0,
  //           imageUrl:
  //             "https://goimprints.s3.amazonaws.com/images/products/551437080/12-foam-dollar-sign-1.jpg",
  //           answer: "$20 per person",
  //           selected: false
  //         },
  //         {
  //           id: 1,
  //           imageUrl:
  //             "https://lh3.googleusercontent.com/proxy/ayGfBjme4hTodI1sFuBR-ggF_4ou3QVjPZCd-_WZ6FQQetu5Cgxj3-OP3YVoDTmme1a2nTN7bp40YUlym5mQ3SlnfCP3ZQIT3XrjjyOUm7X1hWRoC1sKfU5IW-DD-Pgb3dsyTBCa0H0sXmOkVMOZS1AtcN8HVP_isLGb",
  //           answer: "$50 per person",
  //           selected: false
  //         },
  //         {
  //           id: 2,
  //           imageUrl:
  //             "https://webcomicms.net/sites/default/files/clipart/151991/dollar-sign-images-151991-7270431.jpg",
  //           answer: "$100 per person",
  //           selected: false
  //         }
  //       ]
  //     }
  //   ]
  // };

  handleAnswer = answer => {
    /*const questions = { ...this.state.questions };
    const index = questions.answers.indexOf(answer);
    questions.answers[index].selectedAnswer = answer.id;
    console.log(answers[index].selectedAnswer);*/
    answer.selected = true;
    this.setState({ answer });
  };

  /*resetAnswers = () => {
    const answers = this.state.answers.map(c => {
      c.selected = false;
      return c;
    });
    this.setState({ answers });
  };*/

  render() {
    return (
      <div>
        <h1 className="title">Date Night Restaurant Finder Quiz </h1>
        <div>
          {/* {this.state.questions.map(question => ( */}
            <Question
              key="1"
              // onAnswer={this.handleAnswer}
              question="What type of food?"
            />
          {/* ))} */}
        </div>
      </div>
    );
  }
}

export default Quiz;
