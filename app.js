const choices = ["paper", "rock", "scissors"]

const pChoice = document.querySelector('.p-choice')
const cChoice = document.querySelector('.c-choice')

const weapons = document.querySelectorAll('.img') 
const result = document.querySelector('.result')

const cimg = cChoice.previousElementSibling
const pimg = pChoice.previousElementSibling


function randomNumber(){
    return Math.floor(Math.random()*3)
}

function computer(){
    console.log(randomNumber())
    const ele = choices[randomNumber()]
    cimg.src = `img/${ele}.png`
    cimg.id = ele
    cChoice.innerHTML = ele
}   



weapons.forEach(function(weapon){
    weapon.addEventListener('click',function(){
        const item = weapon.childNodes[1]
        console.log(item)
        pimg.src = item.src
        pimg.id = weapon.id
        pChoice.innerHTML = weapon.id
        
        computer()
        checker(cimg.id, pimg.id)
    })
})



function checker(a,b){
    if(a == b){
        result.innerHTML = "DRAW"
    }
    if(a=='rock' && b == 'paper'){
        result.innerHTML = "You Win!"
    }else if(a == 'rock' && b == 'scissors'){
        result.innerHTML = "You Lose!"
    }
    if(a=='paper' && b == 'scissors'){
        result.innerHTML = "You Win!"
    }else if(a == 'paper' && b == 'rock'){
        result.innerHTML = "You Lose!"
    }
    if(a=='scissors' && b == 'rock'){
        result.innerHTML = "You Win!"
    }else if(a == 'scissors' && b == 'paper'){
        result.innerHTML = "You Lose!"
    };
    
    setInterval(function(){
        result.innerHTML += "."
    },700)
    setTimeout(() => {
        location.reload()
    }, 2200);

}
