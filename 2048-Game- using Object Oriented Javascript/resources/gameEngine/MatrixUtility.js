/**
 * Matrix Utility for following functionalities
 *  
 *  Generate Template (Row DOM) and its corresponding helper functions
 *  ReDraw function to re draw on the DOM
 *  Attach key Down event. 
 *  
*/
var matrixUtility = function(){

    this.rowTemplate = ["{{#each this}}",
                    "<div id='{{@key}}' class='rowClass'>",
                    "{{#each this}}",
                    "<div class='active cellClass' style=' {{#decideClass this.value}}{{/decideClass}}'>",
                        "<p>{{#cellValue this.value}}{{/cellValue}}</p>",
                    "</div>",
                    "{{/each}}",
                    "</div>",
                    "{{/each}}"].join("\n");
    
    this.settingsTemplate = ["<div id = 'currentSettings'>",
                            "<div>Current Settings</div>",
                            "<div style='margin-top: 10px;'>Game Size    : {{this.gameSize}} * {{this.gameSize}} </div>",
                            "<div style='margin-top: 10px;'>Controls     : {{this.movementControl}}</div>",
                            "</div>"].join("\n");
 

};

matrixUtility.prototype.registerTemplateHelper = function(){
    
    Handlebars.registerHelper('decideClass',function(param){
        if(param==0){
         return "background-color:#f8f1e5"; 
        }else{
            return "background-color:"+GameMetaData.getColorPalleteForNumber(param);
        }
    });
    
    Handlebars.registerHelper('cellValue',function(param){
        if(param==0){
         return ""; 
        }else{
            return param;
        }
    });
};

matrixUtility.prototype.reDraw = function(data){
    this.registerTemplateHelper();
    var template = Handlebars.compile(this.rowTemplate);
    var templateRes = template(data);
    let container = document.getElementById('mainContainer');
    container.innerHTML = "";
    container.innerHTML = templateRes;
};

matrixUtility.prototype.attachKeyDownEvent = function(){
    document.onkeydown = function (event) {
        var moveObj = new matrixOperation();
        let numberOp = new numberOperation();
           
           if(GameMetaData.getAllowedKeys().includes(event.keyCode))
           {    
               switch(GameMetaData.getOperationForKey(event.keyCode)){
                   case "LEFT" :
                       moveObj.moveLeft();
                        break;
                   case "RIGHT" :
                       moveObj.moveRight();
                       break;
                   case "UP" :
                       moveObj.moveUp();
                       break;
                   case "DOWN" :
                       moveObj.moveDown();
                       break;
               }
               numberOp.introduceRandNumberAndRePaint();
           }    
       };       
};

matrixUtility.prototype.settingsDOM = function(){
    var template = Handlebars.compile(this.settingsTemplate);
    var templateRes = template(GAME_CONF);
    let settingNote = document.getElementById('settingsNote');
    let container = document.getElementById('mainContainer');
    container.style.width = (Number(GAME_CONF.gameSize * 110) - 20) +'px';
    settingNote.innerHTML = "";
    settingNote.innerHTML = templateRes;
};