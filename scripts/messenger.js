var socket = io()
$(() => {
    $('#send').click(() => {
        var message = { name: $('#name').val(), message: $('#message').val() }
        postMessages(message)
        // addMessages({name: 'Tim', message: 'hello'})
    })
    getMessages();
})

socket.on('message', addMessage)

function addMessage(message) {
    $('#messages').append(`<h4> ${message.name} </h4> <p> ${message.message} </p>`)
}

function getMessages() {
    $.get('/messages', (data) => {
        data.forEach(addMessage);
    })
}

function postMessages(message) {
    $.post('/messages', message)
}
