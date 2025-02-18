const startButton = document.querySelector('.start')
const minutes = document.querySelector('.minutes')
const seconds = document.querySelector('.seconds')
let secondsCurrentRotation = 90;
let minutesCurrentRotation = 90;
let countSeconds = 0;

function startClock()
{
    secondsCurrentRotation = ( secondsCurrentRotation == 450 ) ? 90 : secondsCurrentRotation + 6
    seconds.style.transform = `rotate(${secondsCurrentRotation}deg)`
    seconds.addEventListener('transitionend', function(e){
        if(e.propertyName != 'transform') return;
        secondsCurrentRotation += 10
        let remainder = countSeconds % 36
        if( remainder == 0 ) 
        {
            console.log('minute added')
            minutesCurrentRotation += 15
            minutes.style.transform = `rotate(${minutesCurrentRotation}deg)`
        }
        countSeconds++
        seconds.style.transform = `rotate(${secondsCurrentRotation}deg)`
    })
    // setInterval(() => {
    //     secondsCurrentRotation = ( secondsCurrentRotation == 450 ) ? 90 : secondsCurrentRotation + 10
    //     countSeconds = ( countSeconds == 60 ) ? 0 : countSeconds++
    //     console.log(secondsCurrentRotation)
    //     seconds.style.transform = `rotate(${secondsCurrentRotation}deg)`
    // }, 1000);
}
startButton.addEventListener('click', startClock)