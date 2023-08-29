let cards=[]
let sum=0


let message=""

let isAlive=false
let hasBlackjack=false
let messageEl=document.getElementById("message-el")
let sumEl=document.getElementById("sum")
let cardEl=document.getElementById("card")

let player={
    name:"Himanshu",
    amount:500
}
let playerEl=document.getElementById("player-el")
playerEl.textContent=player.name +":   $"+ player.amount

function startGame(){
    let firstcard=getRandomCard()
    let secondcard=getRandomCard()
    cards=[firstcard,secondcard]
    sum=firstcard+secondcard
    renderGame()
}


function getRandomCard(){
    return Math.floor(( Math.random() * 13 )) + 1
}

function renderGame(){
    cardEl.textContent="Cards:"

    for(let i=0;i<cards.length;i++)
    {
    cardEl.textContent+=cards[i]+" "
    }

sumEl.textContent="Sum:  "+sum
    if(sum<21){
        message="Do you want to draw a new card?"
        isAlive=true
    }
    else if(sum===21)
    {
        message="You have got a blackjack"
    }
    else {
        message="you are out of the game !"
        isAlive=false
        
    }

    messageEl.textContent=message
    


}


function newcard(){

    if(isAlive===true && hasBlackjack===false){
         let card=getRandomCard()
         sum+=card
         cards.push(card)
         console.log(cards)
         renderGame()
    }
}

 