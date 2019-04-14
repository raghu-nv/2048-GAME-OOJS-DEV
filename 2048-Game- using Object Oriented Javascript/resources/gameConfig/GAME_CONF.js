/**
 * Game configuration and constants
 * 
 * Consists of Game Size - By Default set to 4
 * 
 * Color Pallete for the cells
 * 
 * Key MoveMent Controls Maps
 *  
*/
const GAME_CONF = (function(){
    let gameConf =
    {
        "gameSize": 4,//Default set to 4, can be extended to 8 or N
        "colorPallete" : {
            "2": "#F9BA32",
            "4": "#D4AA42",
            "8": "#AF9B53",
            "16": "#8B8C64",
            "32": "#667D75",
            "64": "#426E86",
            "128": "#3E6175",
            "256": "#3A5564",
            "512": "#364953",
            "1024": "#323D42",
            "2048": "#2F3131",
            "4096": "#232424",
            "8192": "#171818",
            "16384": "080C0C",
            "32768": "#000000"
        },
        "movementControl": "numPadControl",//default Num pad = numPadControl - can be changed to 'arrowsControl' for arrow movement
        "numberControlsMaps" :{
            "49" : "LEFT",
            "97" : "LEFT",
            "50" : "RIGHT",
            "98" : "RIGHT",
            "51" : "UP",
            "99" : "UP",
            "52" : "DOWN",
            "100" : "DOWN"
        },
        "numberAllowedKeyCodesList" : [49,50,51,52,97,98,99,100],
        "arrowControlsMaps" :{
            "65" : "LEFT",
            "37" : "LEFT",
            "39" : "RIGHT",
            "68" : "RIGHT",
            "87" : "UP",
            "38" : "UP",
            "40" : "DOWN",
            "83" : "DOWN"
        },
        "arrowAllowedKeyCodesList" : [38,87,39,68,83,40,37,65],
    }
    return Object.freeze(gameConf);
})();