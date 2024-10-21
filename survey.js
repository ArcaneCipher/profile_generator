const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// List of questions to ask the user
const questions = [
  "Question 1: What's your name? Nicknames are also acceptable :)\n  Answer 1: ",
  "Question 2: What's an activity you like doing?\n  Answer 2: ",
  "Question 3: What do you listen to while doing that?\n  Answer 3: ",
  "Question 4: Which meal is your favourite (eg: dinner, brunch, etc.)?\n  Answer 4: ",
  "Question 5: What's your favourite thing to eat for that meal?\n  Answer 5: ",
  "Question 6: Which sport is your absolute favourite?\n  Answer 6: ",
  "Question 7: What is your superpower? In a few words, tell us what you are amazing at!\n  Answer 7: ",
];

// Array to hold the user's responses
let answers = [];

// Recursive function to ask questions in sequence
const askQuestion = (index) => {
  // If there are more questions to ask
  if (index < questions.length) {
    // Ask the current question
    rl.question(questions[index], (answer) => {
      // Store the user's answer
      answers.push(answer);
      // Call the function again with the next index (ask the next question)
      askQuestion(index + 1);
    });
  } else {
    // All questions have been answered, destructure the answers
    const [name, activity, music, meal, food, sport, superpower] = answers;
    // Generate and print the final profile description
    console.log(
      `${name} loves ${activity}, while listening to ${music}, devouring ${food} for ${meal}, prefers ${sport} over any other sport, and is amazing at ${superpower}!`
    );
    // Close the readline interface and end the program
    rl.close();
  }
};

// Start the questioning process with the first question (index 0)
askQuestion(0);
