let socketIo = io('http://localhost:3000');

function renderMessege(message) {
    $('.messages').append(`<div><strong>${message.author}</strong> : ${message.message}</div>`);
}


socketIo.on('previousMessages', function(messages) {
    for (message of messages){
        renderMessege(message);

    }
} )
// Listener deve ser registrado uma Ãºnica vez fora do submit.
socketIo.on('receivedMessages', function (message) {
    renderMessege(message);
});

$('#chat').submit(function(event){
    event.preventDefault();

    let author = $('input[name=username]').val();
    let message = $('input[name=message]').val();

    if (author.length && message.length) {
        let MessageObject = {
            author: author,
            message: message
        }
        renderMessege(MessageObject);

        socketIo.emit('sendMessage', MessageObject)
    }
})
