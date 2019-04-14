/**
 *  Number Operation Responsible for following
 *  
 * Generation Of Random Position
 * Introduce a new Number between 2 & 4 
 *  
 */
var numberOperation = function(){

};

/**
 *  Iterates for Free and Default cells and returns a random position
 *  
 */
numberOperation.prototype.generateRandomPosition = function(){
	let listOfDefaultAndFreeCells = GameMetaData.getGameData().numberMatrix.defaultList.sort().concat( GameMetaData.getGameData().numberMatrix.free.sort());
	let columnArray=new Array();
	let trackker = {};
	let position="";
	for(let i=0;i<listOfDefaultAndFreeCells.length;i++){
		let value = Math.random();
		columnArray.push(value);
		trackker[value] = listOfDefaultAndFreeCells[i];
	}
	position = trackker[Math.max.apply(Math, columnArray)];
	return position;
};

/**
 *  Introduces New Number between 2 and 4 for random position.
 *  
 */
numberOperation.prototype.introduceNewNumber = function(position){
	let dataAccessObj = new dataAccessor();
	let value;
	let rand = Math.random();
	if (rand < 0.9){
		value =2;
		dataAccessObj.updatePositionMatrices(position,2);
	} else {
		value = 4;
		dataAccessObj.updatePositionMatrices(position,4);
	}
};

/**
 *  Helper function which is used after movement.
 *  
 */
numberOperation.prototype.introduceRandNumberAndRePaint =function(flag){
	let matrixUtil = new matrixUtility();
	if(flag==="DEFAULT"){
		this.introduceNewNumber(this.generateRandomPosition());
		this.introduceNewNumber(this.generateRandomPosition());
		matrixUtil.reDraw(GameMetaData.getMatrixData().masterData);
	}else{
		this.introduceNewNumber(this.generateRandomPosition());
		matrixUtil.reDraw(GameMetaData.getMatrixData().masterData);
	}
};