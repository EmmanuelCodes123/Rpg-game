function Character(name, role, strength, speed, durability, image, id){
    this.name = name;
    this.role = role;
    this.strength = strength;
    this.speed = speed;
    this.durability = durability;
    this.image = image;
    this.id = id
}

let arlot = new Character("Arlot", "Fighter", 300, 200,  300, "../Project Picture/fighter.jpeg", "arlot");
let alucard = new Character("Alucard", "Assassin", 200, 300,  100,"../Project Picture/assasin.jpeg", "alucard");
let xavier = new Character("Lou yi", "Mage", 200, 500, 100, "../Project Picture/mage.jpeg", "lou yi");
let natan = new Character("Natan", "Marksman",200, 300, 100,  "../Project Picture/marksman.jpeg", "natan");

var heroes = [arlot, alucard, xavier, natan]

//enemy

let balmond = new Character("Balmond", "Fighter", 300, 100,  400, "../Project Picture/ghoul1.jpeg", "balmond");
let thamuz = new Character("Thamuz", "Fighter", 500, 100,  500, "../Project Picture/ghoul2.jpeg", "thamuz");
let dyroth = new Character("Dyroth", "Assassin", 300, 300,  100, "../Project Picture/ghoul3.jpeg", "dyroth");
let terizla = new Character("Terizla", "Fighter", 300, 50,  400, "../Project Picture/ghoul4.jpeg", "terizla");

var enemies = [balmond, thamuz, dyroth, terizla]

heroes.forEach(i => {
    let name = document.querySelector(".heroes").innerHTML += 
    `
    <div class="hero layout" id="${i.id}">
        <div class="heroesImg">
            <img src="${i.image}">
        </div>
        <div class="layoutStats">
            <h2 >${i.name}</h2>
            <p> ${i.role}</p>
            <p >Strength: ${i.strength}</p>
            <p >Speed: ${i.speed}</p>
            <p >Durability: ${i.durability}</p>
        </div>
    </div>`;
});
let layout = document.querySelector(".heroes");
let arena = document.querySelector(".arena");
let heroCard = document.querySelector(".heroCard");
function chooseHero(event) {
    // Access the clicked element using event.target
    let clickedDiv = event.target;
    // Check if the clicked div's id matches the hero's id
    
    layout.style.display = "none";
    arena.style.display = "block"
    
    switch(clickedDiv.id){
        case "arlot":
            heroCard.innerHTML = "";
            // Append the clicked div's content to the hero card
            heroCard.appendChild(clickedDiv.cloneNode(true));  
        break;

        case "alucard":
            heroCard.innerHTML = "";
    
            // Append the clicked div's content to the hero card
            heroCard.appendChild(clickedDiv.cloneNode(true)); 
          
        case "lou yi":
            heroCard.innerHTML = "";
            // Append the clicked div's content to the hero card
            heroCard.appendChild(clickedDiv.cloneNode(true));
        
        case "natan":
            heroCard.innerHTML = "";
            // Append the clicked div's content to the hero card
            heroCard.appendChild(clickedDiv.cloneNode(true));     
    }


}

let clicks = document.querySelectorAll(".layout");
clicks.forEach(chosenChar => {
    chosenChar.onclick = chooseHero;
    

});

// Choosing an enemy

function randomEnemy(){
    let randomGhoul = Math.floor(Math.random() * enemies.length);
    let pickedGhoul = enemies[randomGhoul];

    let enemyCard = document.querySelector(".enemy").innerHTML += 
    `
        <div class="ghoul">
            <div class="ghoulImg">
                <img src="${pickedGhoul.image}">
            </div>
            <div class="ghoulStats">
            <h2 >${pickedGhoul.name}</h2>
            <p> ${pickedGhoul.role}</p>
            <p>Strength: ${pickedGhoul.strength}</p>
            <p>Speed: ${pickedGhoul.speed}</p>
            <p>Durability: ${pickedGhoul.durability}</p>
        </div>
        </div>
    `

    let button = document.querySelector("#search");
    let button2 = document.querySelector("#attack");

    button.style.display = "none";
    button2.style.display = "block"
    
}
let searchEnemy = document.querySelector("#search");
searchEnemy.onclick = randomEnemy
