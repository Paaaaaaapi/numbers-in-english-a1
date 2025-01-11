// script.js
function submitQuiz() {
    // Correct answers
    const correctAnswers = {
        q1: 'ninety one',    // 
        q2: 'sixteen',  // 
        q3: 'eighty seven',     // 
        q4: 'twenty', // 
        q5: 'fifty five',  // 
        q6: 'eleven',     // 
        q7: 'one hundred and forty one',   // 
        q8: 'forty three',  // 
        q9: 'ninety nine',     // 
        q10: 'sixty eight', // 
        q11: 'fifty two', // 
        q12: 'one hundred and one',  // 
        q13: 'seventy nine',   // 
        q14: 'ninety two',// 
        q15: 'seventy five' // 
    };

    // Loop through each question and compare the answer
    for (let q in correctAnswers) {
        const userAnswer = document.querySelector(`input[name="${q}"]`).value.trim().toLowerCase();
        const correctAnswer = correctAnswers[q].toLowerCase();

        const feedbackElement = document.querySelector(`input[name="${q}"] + .feedback`);
        
        // Check if the answer is correct
        if (userAnswer === correctAnswer) {
            feedbackElement.innerHTML = '&#10004;'; // Green tick
            feedbackElement.classList.remove('incorrect');
            feedbackElement.classList.add('correct');
        } else {
            feedbackElement.innerHTML = `&#10008; Correct: ${correctAnswers[q]}`; // Red cross with correct answer
            feedbackElement.classList.remove('correct');
            feedbackElement.classList.add('incorrect');
        }
    }
}
