var typed = new Typed(".text", {
    strings: ["Frontend Developer", "Backend Developer", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
function submitQuiz() {
    const answers = {
        q1: "HyperText Markup Language",
        q2: "ES2023",
        q3: "Cascading Style Sheets",
        q4: "JavaScript",
        q5: "MySQL",
        q6: "Un langage de programmation",
        q7: "Docker",
        q8: "Envoyer des pages web",
        q9: "Un service web basé sur HTTP",
        q10: "HTTP",
        q11: "Système de Gestion de Bases de Données",
        q12: "Un environnement virtuel pour applications",
        q13: "La partie visible de l'utilisateur",
        q14: "HTML5",
        q15: "Créer la mise en page visuelle"
    };

    let score = 0;
    let feedback = "";
    
    for (let i = 1; i <= 15; i++) {
        const userAnswer = document.querySelector(`input[name="q${i}"]:checked`);
        if (userAnswer) {
            if (userAnswer.value === answers[`q${i}`]) {
                score++;
            } else {
                feedback += `<p>Question ${i}: Votre réponse (${userAnswer.value}) - Réponse correcte : ${answers[`q${i}`]}</p>`;
            }
        } else {
            feedback += `<p>Question ${i}: Aucune réponse sélectionnée - Réponse correcte : ${answers[`q${i}`]}</p>`;
        }
    }

    const resultElement = document.getElementById("quizResult");
    resultElement.innerHTML = `
        <h3>Vous avez obtenu ${score} / 15 points</h3>
        <div style="color: #0ef; font-size: 1rem;">
            ${feedback}
        </div>
    `;
    document.getElementById("quizForm").reset();
}

