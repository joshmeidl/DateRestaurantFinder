const SelectArray = [
  {
    id: 0,
    name: "commute",
    question: "How far are you willing to commute?",
    answers: [
      "1 mile",
      "5 miles",
      "10 miles",
      "15 miles",
      "20 miles",
      "25 miles",
      "Delivery Please"
    ]
  },
  {
    id: 1,
    name: "casual",
    question: "Is this casual or formal/celebratory?",
    answers: ["Casual", "Formal"]
  },
  {
    id: 2,
    name: "budget",
    question: "What is your budget?",
    answers: ["$20", "$50", "$100", "My Entire Paycheck"]
  },
  {
    id: 3,
    name: "open",
    question: "Open Now?",
    answers: ["yes", "no"]
  },
  {
    id: 4,
    name: "post",
    question: "What's happening after dinner?",
    answers: ["Drinks", "Ice Cream", "Netflix and Chill", "Nothing", "Stargazing"]
  }
];

export default SelectArray;