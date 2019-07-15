const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
})
const nameAndDOB = () => {
    rl.question('What is your first name: ', (answer1) => {
        rl.question('What is your last name: ', (answer2) => {
            rl.question('What is your date of birth: (enter like YYYY,MM,DD) ', (answer3) => {
                let oneDay = 24*60*60*1000;
                let todayDay = Date.now();
                let birthDay = new Date(answer3);
                let diffDays = Math.round(Math.abs((todayDay - birthDay.getTime())/(oneDay)));
                console.log(`Hello ${answer1} ${answer2} you are ${diffDays} days old.clear`);
                rl.close();
            });
        });
    });
}
nameAndDOB()