const naruto = document.querySelector('.naruto');
const pipe = document.querySelector('.pipes');
const end = document.querySelector('.end')
let score = 0;
let pointGiven = false;


const jump = () => {
    naruto.classList.remove('jump')
    void naruto.offsetWidth;
    naruto.classList.add('jump')
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const narutoPosition = +window.getComputedStyle(naruto).bottom.replace('px','')

    console.log(narutoPosition)
    
    if (pipePosition <= 78 && pipePosition > 0 && narutoPosition < 10 ){

        pipe.style.animation ='none'
        pipe.style.left =`${pipePosition}px`


        naruto.style.animation ='none'
        naruto.style.bottom =`${narutoPosition}px`


        clearInterval(loop);

        document.querySelector('.end').style.display ='flex';
        document.getElementById('final-score').textContent =`Score: ${score}`;

        document.querySelector('.aks').style.display = 'block'

    }
    if (!pointGiven && pipePosition <= 78 && pipePosition > 0 && naruto.classList.contains('jump')){

        score++;
        document.querySelector('.score').textContent = `Score: ${score}`;
        pointGiven = true;
    }
    if (pipePosition <= 0){
        pointGiven = false;
    }
}, 10);


document.addEventListener('keydown', jump);
document.addEventListener('click', jump)