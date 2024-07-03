const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What is your name? ", (answer1) => {
  console.log(`Nice to meet you ${answer1}!`);

  rl.question("What is an activity that you like doing? ", (answer2) => {
    console.log(`I too enjoy ${answer2}`);
    
    rl.question("What do you listen to while doing that? ", (answer3) => {
      console.log(`I love listening to ${answer3} as well!`);
      
      rl.question("Which meal is your favourite? ", (answer4) => {
        console.log(`I'm also a fan of ${answer4}`);
        
        rl.question("What's your favourite thing to eat for that meal? ", (answer5) => {
          console.log(`I love ${answer5}!`);
          
          rl.question("Which sport is your absolute favourite? ", (answer6) => {
            console.log(`${answer6}! Sick!`);
          
            rl.question("What is your superpower? ", (answer7) => {
              console.log(`Your superpower is ${answer7}? That's awesome!`);
              
              // Here you could form and print the profile paragraph
              console.log(`${answer1} loves listening to ${answer3} while ${answer2}, devouring ${answer5} for ${answer4}, prefers ${answer6} over any other sport, and is amazing at ${answer7}.`);

              rl.close();
            });
          });
        });
      });
    });
  });
});
