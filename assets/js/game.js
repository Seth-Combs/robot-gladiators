var playerName = window.prompt("What is your Robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log( playerName, playerAttack, playerHealth, playerMoney);

var enemyName = "Roberto";
var enemyHealth = 50;
var enemyAttack = 12;
var enemyAttack = 8;

var fight = function() {
    window.alert("The fight has begun! ");
    
    enemyHealth = enemyHealth - playerAttack
    
    console.log (
        playerName + " just attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );
};









fight();