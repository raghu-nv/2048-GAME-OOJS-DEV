/**
 *  On DOM Content loaded - Start Game using DEFAULT settings from the config.
 */
window.addEventListener('DOMContentLoaded', (event) => {
    let game = new StartGame();
    game.loadGame("DEFAULT");    
});