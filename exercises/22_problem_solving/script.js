// Problem Solving

// Problem solving is the most important skill you will take out of this course. Without it, you are not truly a developer. You may have learned to repeat steps shown to you with a few minor changes but if you can't take that knowledge and apply it and mix it with other things you know to come up with a solution then you will not make it very far as a developer.

// In this exercise we are going to go over the process of breaking down and solving a problem using a particular methodology.

// First, let's define a problem. This one is going to be in pure JavaScript for the sake of simplicity.

// Problem:

// Given a group of prospective voters ranging from ages 18-55, determine the percentage of those who voted in the last election by the following age groups:

// 1) 18-25
// 2) 26-35
// 3) 36-55

// Print to the console each group with it's corresponding voter turnout percentage in this format: 18-25: n%

// Here are our voters:

var voters = [  
    {name:'Bob', age: 30, voted: true},
    {name:'Jake', age: 32, voted: true},
    {name:'Kate', age: 25, voted: false},
    {name:'Sam', age: 20, voted: false},
    {name:'Phil', age: 21, voted: true},
    {name:'Ed', age:55, voted:true},
    {name:'Tami', age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

function printVoterTurnout(voterList) {
}

function calculatePercentage(sub, total) {  
    return (sub / total) * 100;
}

// Polya's Process

// In order to effectively solve this problem we need to use a method for solving problems developed for mathematician George Polya.

// Understand the problem. Do you understand what the problem is asking of us? If not, either re-read and try to explain it to yourself in your own words or ask for further clarification. Determine the data and the unknowns. Once we've truly understood the problem we can identify what data we have and what we don't have. Is the data we have sufficient to solve the condition of the problem? If not, what data would we need to do that?

// Make a plan. Once we've understood the problem and reviewed the data and unknowns, we are ready to make a plan of action to solve this problem. Along the way, we'll ask ourselves some other questions, like, have we seen a problem similar to this one that we could use the same method to solve it? Is there an established way of dealing with this type of problem that you've learned? etc. The best way to make a plan is to break the problem down into smaller pieces or steps that we'll solve one by one. This is usually done by beginning to write pseudo-code.

// Carry out the plan. The execution of the plan will involve attempting to solve each little piece or step while checking to ensure that the outcome is what we expected. Code is easier to debug if it's done in small steps rather than attempting to solve the problem to completion and then checking it.

// Looking back. Can we check and prove the the result is correct? Now that we have a completed answer is there any way we can optimize it? Is this solution going to handle all of the potential use cases? Can our solution or parts of it be reused for another similar task? Or can code we've already written replace pieces of our solution?

// Let's follow these steps to solve our voter problem.

// Step 1: Do we understand the problem? What is it that the solution is suppose to tell us about these voters? We have the voter data that tells us a name, age, and a boolean for if they voted in the last election. What don't we know? We don't know who is in what age group. We don't know the percentage for each group.

// Step 2: Break down this problem into a plan of action. What steps or pieces do we need to take. Let's pseudo-code the answer.

// It's best to start out by declaring our main function and then using comments to write out the steps in plain English.

function printVoterTurnout(voterList) {
}

// Let's sort the voters into their respective age groups. Now that we have the voters sorted let's determine the turnout percentage. As an intermediate step let's write a function that calculates percentages. Let's string format and print each result to the console and specified.

// Now we've written some pseudo-code to help us devise a plan. If there are any parts of this you don't know how to do, like sorting or calculating percentages, now is the time to google, consult documentation, books, or someone else on how to do the things we don't know. This is extremely helpful as it helps us to realize that this problem is actually just a compilation of simple parts and rather than getting stuck because we don't even know where to begin we have a specific question or set of questions that we can get answered and then we know we can solve our problem.

// Okay, lets execute our plan.

// First, we have our function to calculate percentages. We'll call this function from within our main function to make it readable and shorter.

function calculatePercentage(sub, total) {
    return (sub / total) * 100;
}

// Now we need to sort the voters into their age groups:

function printVoterTurnout(voters) {
    // If we want we can write more pseudo-code to create a plan for sorting.
    // First start by creating an arrays where our sorted voters will live:
    var ageGroup1 = [];
    var ageGroup2 = [];
    var ageGroup3 = [];
    // Next we'll write a for loop that iterates over our voters and sorts them into those arrays:
    for (var i = 0; i < voters.length; i++) {
        var voter = voters[i];
        if (voter.age >= 18 && voter.age <= 25) {
            ageGroup1.push(voter);
        } else if (voter.age >= 26 && voter.age <= 35) {
            ageGroup2.push(voter);
        } else {
            ageGroup3.push(voter);
        }
    }
}
// Now we need to get the percentage of voters who actually voted. We have a function to calculate the percentage, but how do we get the values to pass as arguments? For each age group we'll need to pasS in the number who voted and the total. We haven't considered how to do this. Let's make another plan. 

// Often times when we're executing a plan we may realize that there is step we hadn't planned out yet, especially if the plan is large or the task is more complicated with more steps. Feel free to stop at anytime and figure out how to do something. In this case, we need to figure out how to get the number of voters in each group that have actually voted and then the total number in each group and calculate the percentage with it.

// We're going to need a function that gets us only the voters that have voted. So basically a filter:

function filterVoters(voters) {
    // We can actually just use the built-in array method 'filter':
     return voters.filter(function(voter) {
            return voter.voted === true;
    })
}

  

// Now let's go back to our main function and use our filter to get the number of voters that voted in each age group:

function printVoterTurnout(voters) {
    var ageGroup1 = [];
    var ageGroup2 = [];
    var ageGroup3 = [];
    // next we'll write a for loop that iterates over our voters and sorts them into those arrays 
    for (var i = 0; i < voters.length; i++){
        var voter = voters[i];
        if (voter.age >= 18 && voter.age <= 25) {
            ageGroup1.push(voter);
        } else if (voter.age >= 26 && voter.age <= 35) {
            ageGroup2.push(voter);
        } else {
            ageGroup3.push(voter);
        }
    }

var group1VotersVoted = filterVoters(ageGroup1).length;
var group1VotingPercentage = calculatePercentage(group1VotersVoted, ageGroup1.length);

var group2VotersVoted = filterVoters(ageGroup2).length;
var group2VotingPercentage = calculatePercentage(group2VotersVoted, ageGroup2.length);

var group2VotersVoted = filterVoters(ageGroup3).length;
var group3VotingPercentage = calculatePercentage(group2VotersVoted, ageGroup3.length);

// Now we just need to print these according to the format specified in the description

console.log('18-25: ' + group1VotingPercentage + '%');
console.log('26-35: ' + group2VotingPercentage + '%');
console.log('36-55: ' + group3VotingPercentage + '%');
}

// In the end, big problems are merely made up of smaller, more manageable problems, most of which you can either solve or learn how to solve fairly quickly.