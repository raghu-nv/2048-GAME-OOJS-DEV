/**
 *  Start Game methods and functionalities.
 */
var StartGame = function(){
    
    //Cell Constructor
    var cell = function(){
        this.value = 0;
    };
    
    // Populates '0' to all cells of matrix. 
    let loadGameWithDefault = function(){
        let matrixData={};
        let defaultList=[];
        let rowData= {};
    
        for(let row = 0; row < GameMetaData.getGameSize(); row++) {
            let rowArray = new Array();
          for(let col = 0; col < GameMetaData.getGameSize(); col++) {
            let newCell = new cell();
            defaultList.push("R" + row + "C" + col);
            rowArray.push(newCell);
          }
          rowData["R"+row] =  rowArray;
        }
        matrixData["defaultList"] = defaultList;
        matrixData["free"] = new Array();
        matrixData["notFree"] = new Array();
        matrixData["masterData"] = rowData;
        matrixData["weights"] = {"0.55" : "R0C1"}; //Can be used for computer/AI solution.
        GameMetaData.setMatrixDefualtValue(matrixData);
        return true;
    }

	return {
		loadGame: function(flag){
			if(flag==="DEFAULT"){
                loadGameWithDefault();
                let numberOp = new numberOperation();
                numberOp.introduceRandNumberAndRePaint(flag);
                let matrixOp = new matrixUtility();
                matrixOp.attachKeyDownEvent();
                matrixOp.settingsDOM();
            }
		}  
	}
};