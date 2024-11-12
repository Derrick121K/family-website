let currentPoll = {};
let votes = {};

function createPoll() {
    const question = document.getElementById("pollQuestion").value;
    const option1 = document.getElementById("pollOption1").value;
    const option2 = document.getElementById("pollOption2").value;

    if (question && option1 && option2) {
        currentPoll = {
            question: question,
            options: [option1, option2],
            votes: [0, 0]
        };
        displayPoll();
    } else {
        alert("Please fill in all fields.");
    }
}

function displayPoll() {
    const currentPollDiv = document.getElementById("currentPoll");
    currentPollDiv.innerHTML = `<h3>${currentPoll.question}</h3>`;
    currentPoll.options.forEach((option, index) => {
        currentPollDiv.innerHTML += `<button onclick="vote(${index})">${option}</button>`;
    });
}

function vote(index) {
    currentPoll.votes[index]++;
    displayResults();
}

function displayResults() {
    const resultsDiv = document.getElementById("pollResults");
    const totalVotes = currentPoll.votes.reduce((a, b) => a + b, 0);
    resultsDiv.innerHTML = "<h4>Results:</h4>";
    currentPoll.options.forEach((option, index) => {
        const percentage = totalVotes > 0 ? (currentPoll.votes[index] / totalVotes * 100).toFixed(2) : 0;
        resultsDiv.innerHTML += `<p>${option}: ${currentPoll.votes[index]} votes (${percentage}%)</p>`;
    });
}
