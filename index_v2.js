const say = require('say');

say.speak('Bom dia', 'voice_kal_diphone', 1, (err) => {
    if (err) {
        return console.error(err)
    }
    console.log('Text has been spoken.')
});

