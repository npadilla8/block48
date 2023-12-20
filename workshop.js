// TODO: QUESTION 1
// Initialize an empty array
// Define bracketMapping object that maps closing brackets 
function isValid(str) {
    const stack = [];
    const bracketMapping = { ')': '(', '}': '{', ']': '[' };

    for (const character of str) {
// this checks for the opening bracket 
        if (Object.values(bracketMapping).includes(character)) {
            stack.push(character);
// this compares the closing bracket 
        } else if (Object.keys(bracketMapping).includes(character)) {
            if (stack.length === 0 || bracketMapping[character] !== stack.pop()) {
                return false;
            }
        } else {
            return false;
        }
    }

    return stack.length === 0;
}

// Example:
const inputString = "()";
const output = isValid(inputString);
console.log(output);


// TODO: QUESTION 2

// Start a queue with people in line
function timeToBuy(tickets, k) {
    const n = tickets.length;
    const queue = Array.from({ length: n }, (_, i) => i);

    let time = 0;

    while (queue.length > 0) {
        const currentPerson = queue.shift(); 
        const ticketsToBuy = tickets[currentPerson];

        if (ticketsToBuy > 0) {
            // If the person has tickets to buy, process one ticket.
            tickets[currentPerson]--;
            time++;

            if (currentPerson === k && tickets[currentPerson] === 0) {
                // If the processed person is at position k and has finished buying all tickets, break the loop.
                break;
            }
        }

       
        queue.push(currentPerson);
    }

    return time;
}

// Example:
const tickets = [2, 3, 2];
const k = 2;
const out = timeToBuy(tickets, k);
console.log(out); 

// TODO: Question 3
function heightChecker(heights) {
    // Create a copy of the original heights array to compare against after sorting
    const sortedHeights = [...heights];

    // Sort the heights array in non-decreasing order
    heights.sort((a, b) => a - b);

    // Compare the sorted heights with the original heights to find the misplaced students
    let misplacedCount = 0;
    for (let i = 0; i < heights.length; i++) {
        if (heights[i] !== sortedHeights[i]) {
            misplacedCount++;
        }
    }

    return misplacedCount;
}

// Example:
const heights = [1, 1, 4, 2, 1, 3];
const result = heightChecker(heights);
console.log(result); 


// TODO: Question 4


function deckRevealedIncreasing(deck) {
    // Sort the deck in decreasing order
    deck.sort((a, b) => b - a);

    // Initialize a queue to keep track of the revealed cards' indices
    const queue = [...Array(deck.length)].map((_, index) => index);

    const result = []; 

    
    while (queue.length > 0) {
        result.push(queue.pop());

        if (queue.length > 0) {
            
            queue.unshift(queue.pop());
        }
    }

    
    result.sort((a, b) => a - b);

    
    const finalOrder = result.map((index) => deck[index]);

    return finalOrder;
}

// Example:
const deck = [17, 13, 11, 2, 3, 5, 7];
const cards = deckRevealedIncreasing(deck);
console.log(cards); 

