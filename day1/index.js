const sounds = [
    {path: './sounds/boom.wav', name: 'Boom'},
    {path: './sounds/clap.wav', name: 'Clap'},
    {path: './sounds/hihat.wav', name: 'Hihat'},
    {path: './sounds/kick.wav', name: 'Kick'},
    {path: './sounds/openhat.wav', name: 'Openhat'},
    {path: './sounds/ride.wav', name: 'Ride'},
    {path: './sounds/snare.wav', name: 'Snare'},
    {path: './sounds/tink.wav', name: 'Tink'},
    {path: './sounds/tom.wav', name: 'tom'}
]

const AudioElements = document.querySelectorAll('.audio')
const TextElements = document.querySelectorAll('.text')
const drumPads = document.querySelectorAll('.drum-pad')

AudioElements.forEach( (audio, index) => {
    sound = sounds[index]
    audio.src = sound.path
    TextElements[index].innerHTML = sound.name
});

drumPads.forEach( (drumPad, index) => {
    drumPad.addEventListener('click', () => {
        AudioElements[index].play()
        drumPad.classList.toggle('clicked')
        setTimeout(() => {
            drumPad.classList.toggle('clicked')
        }, 100);
    })
})