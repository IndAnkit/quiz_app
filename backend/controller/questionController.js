const Choice = require("../model/Choice");
const Question = require("../model/Question");
const UserResponses = require("../model/UserResponses");
const catchAsync = require("../utils/catchAsync");
const { success } = require("../utils/responseHandler");

exports.getQuiz = (req, res) => {};
exports.submitAnswer = catchAsync(async (req, res) => {
  const { answers, question_id, time_taken, quiz_id, user_id } = req.body || {};
  const correctAnswers = await Choice.findAll({
    where: {
      question_id: question_id,
      is_correct: true,
    },
  });
  const is_correct = correctAnswers.every((ele) => answers[ele.choice_id]);
  await UserResponses.findOrCreate({
    where: {
      question_id,
      quiz_id,
      user_id,
    },
    defaults: {
      question_id,
      quiz_id,
      user_id,
      selected_choices: Object.keys(answers).join(","),
      time_taken,
      is_correct,
    },
  }).catch(console.log);
  success({
    res,
    data: {
      message: "Submitted successfully",
    },
  });
});

exports.createSample = async (req, res) => {
  const questions = [
    ...[
      {
        text: "What is the capital of France?",
        question_type: "single",
        choices: [
          { text: "Paris", is_correct: true },
          { text: "London", is_correct: false },
          { text: "Berlin", is_correct: false },
          { text: "Madrid", is_correct: false },
        ],
      },
      {
        text: "Which of the following is a programming language?",
        question_type: "single",
        choices: [
          { text: "Python", is_correct: true },
          { text: "Snake", is_correct: false },
          { text: "Elephant", is_correct: false },
          { text: "Car", is_correct: false },
        ],
      },
      {
        text: "What is the boiling point of water?",
        question_type: "single",
        choices: [
          { text: "100°C", is_correct: true },
          { text: "50°C", is_correct: false },
          { text: "150°C", is_correct: false },
          { text: "200°C", is_correct: false },
        ],
      },
      {
        text: "Who wrote the play 'Romeo and Juliet'?",
        question_type: "single",
        choices: [
          { text: "William Shakespeare", is_correct: true },
          { text: "Charles Dickens", is_correct: false },
          { text: "Jane Austen", is_correct: false },
          { text: "Mark Twain", is_correct: false },
        ],
      },
      {
        text: "What is the largest planet in our solar system?",
        question_type: "single",
        choices: [
          { text: "Jupiter", is_correct: true },
          { text: "Earth", is_correct: false },
          { text: "Saturn", is_correct: false },
          { text: "Mars", is_correct: false },
        ],
      },
      {
        text: "Which of these animals is a mammal?",
        question_type: "single",
        choices: [
          { text: "Whale", is_correct: true },
          { text: "Shark", is_correct: false },
          { text: "Crocodile", is_correct: false },
          { text: "Penguin", is_correct: false },
        ],
      },
      {
        text: "Which planet is known as the Red Planet?",
        question_type: "single",
        choices: [
          { text: "Mars", is_correct: true },
          { text: "Venus", is_correct: false },
          { text: "Saturn", is_correct: false },
          { text: "Earth", is_correct: false },
        ],
      },
      {
        text: "Who painted the Mona Lisa?",
        question_type: "single",
        choices: [
          { text: "Leonardo da Vinci", is_correct: true },
          { text: "Pablo Picasso", is_correct: false },
          { text: "Vincent van Gogh", is_correct: false },
          { text: "Claude Monet", is_correct: false },
        ],
      },
      {
        text: "Which country is known as the Land of the Rising Sun?",
        question_type: "single",
        choices: [
          { text: "Japan", is_correct: true },
          { text: "China", is_correct: false },
          { text: "South Korea", is_correct: false },
          { text: "India", is_correct: false },
        ],
        image_url:
          "https://upload.wikimedia.org/wikipedia/commons/a/a5/Flag_of_Japan.svg",
      },
      {
        text: "What is the tallest mountain in the world?",
        question_type: "single",
        choices: [
          { text: "Mount Everest", is_correct: true },
          { text: "K2", is_correct: false },
          { text: "Kangchenjunga", is_correct: false },
          { text: "Mount Kilimanjaro", is_correct: false },
        ],
      },
      {
        text: "Which element has the chemical symbol 'O'?",
        question_type: "single",
        choices: [
          { text: "Oxygen", is_correct: true },
          { text: "Osmium", is_correct: false },
          { text: "Oganesson", is_correct: false },
          { text: "Ozone", is_correct: false },
        ],
      },
      {
        text: "What is the currency of Japan?",
        question_type: "single",
        choices: [
          { text: "Yen", is_correct: true },
          { text: "Won", is_correct: false },
          { text: "Ringgit", is_correct: false },
          { text: "Baht", is_correct: false },
        ],
      },
      {
        text: "What is the capital of Australia?",
        question_type: "single",
        choices: [
          { text: "Canberra", is_correct: true },
          { text: "Sydney", is_correct: false },
          { text: "Melbourne", is_correct: false },
          { text: "Perth", is_correct: false },
        ],
      },
      {
        text: "Which animal is known as the 'King of the Jungle'?",
        question_type: "single",
        choices: [
          { text: "Lion", is_correct: true },
          { text: "Tiger", is_correct: false },
          { text: "Elephant", is_correct: false },
          { text: "Giraffe", is_correct: false },
        ],
      },
      {
        text: "Which city is known as the 'Big Apple'?",
        question_type: "single",
        choices: [
          { text: "New York City", is_correct: true },
          { text: "Los Angeles", is_correct: false },
          { text: "Chicago", is_correct: false },
          { text: "San Francisco", is_correct: false },
        ],
        image_url:
          "https://upload.wikimedia.org/wikipedia/commons/4/47/Empire_State_Building_3.jpg",
      },
      {
        text: "Which is the longest river in the world?",
        question_type: "single",
        choices: [
          { text: "Amazon River", is_correct: true },
          { text: "Nile River", is_correct: false },
          { text: "Yangtze River", is_correct: false },
          { text: "Mississippi River", is_correct: false },
        ],
        image_url:
          "https://upload.wikimedia.org/wikipedia/commons/a/a7/Amazon_River_from_space.jpg",
      },
      {
        text: "What is the primary ingredient in guacamole?",
        question_type: "single",
        choices: [
          { text: "Avocado", is_correct: true },
          { text: "Tomato", is_correct: false },
          { text: "Lime", is_correct: false },
          { text: "Onion", is_correct: false },
        ],
        image_url:
          "https://upload.wikimedia.org/wikipedia/commons/1/13/Guacamole_in_bowl.jpg",
      },
      {
        text: "Which famous scientist developed the theory of relativity?",
        question_type: "single",
        choices: [
          { text: "Albert Einstein", is_correct: true },
          { text: "Isaac Newton", is_correct: false },
          { text: "Galileo Galilei", is_correct: false },
          { text: "Nikola Tesla", is_correct: false },
        ],
      },
      {
        text: "What is the largest ocean on Earth?",
        question_type: "single",
        choices: [
          { text: "Pacific Ocean", is_correct: true },
          { text: "Atlantic Ocean", is_correct: false },
          { text: "Indian Ocean", is_correct: false },
          { text: "Southern Ocean", is_correct: false },
        ],
        image_url:
          "https://upload.wikimedia.org/wikipedia/commons/1/1e/Pacific_Ocean_%28en%29.jpg",
      },
      {
        text: "What is the national flower of Japan?",
        question_type: "single",
        choices: [
          { text: "Cherry Blossom", is_correct: true },
          { text: "Lotus", is_correct: false },
          { text: "Rose", is_correct: false },
          { text: "Tulip", is_correct: false },
        ],
        image_url:
          "https://upload.wikimedia.org/wikipedia/commons/4/44/Cherry_blossom_2015.jpg",
      },
    ].filter((ele) => !ele.image_url),
    {
      text: "What is the color of this car?",
      question_type: "single",
      image_url:
        "https://media.istockphoto.com/id/1157655660/photo/generic-red-suv-on-a-white-background-side-view.jpg?s=1024x1024&w=is&k=20&c=L99mV4LAN-MMUYe8kkrqaRhUHCqTLl4r_HIhqdNpHTg=",
      choices: [
        { text: "Red", is_correct: true },
        { text: "Blue", is_correct: false },
        { text: "Green", is_correct: false },
        { text: "Black", is_correct: false },
      ],
    },
    {
      text: "What is the color of this car?",
      question_type: "single",
      image_url:
        "https://media.istockphoto.com/id/186872128/photo/a-bright-green-hatchback-family-car.jpg?s=612x612&w=0&k=20&c=r0tq2fuV9C29_uzCRcOJnCGfkxSwLmfnXqM252xc4uE=",
      choices: [
        { text: "Red", is_correct: false },
        { text: "Blue", is_correct: false },
        { text: "Green", is_correct: true },
        { text: "Black", is_correct: false },
      ],
    },
    {
      text: "What is the color of this car?",
      question_type: "single",
      image_url:
        "https://media.istockphoto.com/id/1157655660/photo/generic-red-suv-on-a-white-background-side-view.jpg?s=1024x1024&w=is&k=20&c=L99mV4LAN-MMUYe8kkrqaRhUHCqTLl4r_HIhqdNpHTg=",
      choices: [
        { text: "Red", is_correct: true },
        { text: "Blue", is_correct: false },
        { text: "Green", is_correct: false },
        { text: "Black", is_correct: false },
      ],
    },
    {
      text: "What is the color of this car?",
      question_type: "single",
      image_url:
        "https://media.istockphoto.com/id/1167991014/photo/modern-blue-sports-car-in-a-gentle-light-on-black-background.jpg?s=1024x1024&w=is&k=20&c=ezkhEVUdy3z792Bhlh_x-o0B-fcOODk5UkFK1GEN5Cs=",
      choices: [
        { text: "Red", is_correct: false },
        { text: "Blue", is_correct: true },
        { text: "Green", is_correct: false },
        { text: "Black", is_correct: false },
      ],
    },
    {
      text: "What is the color of this car?",
      question_type: "single",
      image_url:
        "https://media.istockphoto.com/id/526550804/photo/generic-black-hatchback-car.jpg?s=1024x1024&w=is&k=20&c=VmnxDd9GihgEkA-xh0GpyV2CH40axiGm7ux7RaVVZBY=",
      choices: [
        { text: "Red", is_correct: false },
        { text: "Blue", is_correct: false },
        { text: "Green", is_correct: false },
        { text: "Black", is_correct: true },
      ],
    },
  ];

 
  try {
    // Insert Questions
    for (const questionData of questions) {
      const [question, created] = await Question.findOrCreate({
        where: {
          text: questionData.text,
          image_url: questionData.image_url||null,
        },
        defaults: {
          image_url: questionData.image_url,
          text: questionData.text,
          question_type: questionData.question_type,
        },
      });

      if (created) {
        // Insert Choices for the question
        const choicesData = questionData.choices.map((choice) => ({
          question_id: question.question_id,
          text: choice.text,
          is_correct: choice.is_correct,
        }));

        await Choice.bulkCreate(choicesData);
      }
    }
    const questionsData = await Question.findAll();
    console.log("Questions and Choices inserted successfully!");
    success({ res, data: questionsData });
  } catch (error) {
    console.error("Error inserting questions and choices:", error);
    res.status(500).json({ message: "Error inserting questions and choices:" });
  }
};
