const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


const array_of_nums = [];


function askQuestion(query) {
    return new Promise((resolve) => {
        rl.question(query, (answer) => resolve(answer));
    });
}

async function askForInput() {
    while (true) {
        const input = await askQuestion("Enter a value (type 'stop' to finish): ");
        if (input.toLowerCase() === "stop") {
            rl.close();
            break;
        }

        const num = parseFloat(input);
        if (!isNaN(num)) {
            array_of_nums.push(num); 
        } else {
            console.log("Not a number:", input);
        }
    }
}
function calculateAvg(array) {
    if (array.length == 0) {
        return 0;
    }
    const sum = array.reduce((sum, current_value) => sum + current_value, 0);
    return sum / array.length;
}



(async function main() {
    console.log("Start entering numbers...");
    await askForInput(); 
    console.log("Input saved:", array_of_nums);

    const average = calculateAvg(array_of_nums);
    console.log("Your average for entered numbers is:", average);
})();