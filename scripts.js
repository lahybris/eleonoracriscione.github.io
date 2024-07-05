document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Grazie per il tuo messaggio, ' + name + '! Ti risponderemo al più presto.');
        document.getElementById('contactForm').reset();
    } else {
        alert('Per favore, compila tutti i campi.');
    }
});
