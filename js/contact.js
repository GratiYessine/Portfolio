document.querySelector('.contact-form').addEventListener('submit', function (event) {// Empêche l'envoi par défaut pour effectuer des vérifications

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert('Veuillez remplir tous les champs.');
        return;
    }

    if (!validateEmail(email)) {
        alert('Veuillez entrer une adresse email valide.');
        return;
    }

    alert(`Merci, ${name}! Votre message a été envoyé avec succès.`);
    document.querySelector('.contact-form').reset(); 
});

function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}
