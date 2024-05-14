document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Simulação de envio de formulário
    setTimeout(function() {
        document.getElementById('response-message').innerText = 'Thank you, ' + name + '! Your message has been sent.';
        document.getElementById('contact-form').reset();
    }, 1000);
});