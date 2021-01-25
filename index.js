const say = require('say');
function between(min, max) {
    return Math.floor(
        Math.random() * (max - min) + min
    )
}
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    console.log(arr);
}

//data source
let array =[
  //'Bernardo Borges',...
];


shuffleArray(array);


let number = between(0,array.length);
console.log(array[number]);
say.speak(array[number], 'voice_kal_diphone', 1, (err) => {
    if (err) {
        return console.error(err)
    }
    console.log('Text has been spoken.')
});

