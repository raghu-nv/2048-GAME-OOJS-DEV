/**
 *  Data Accessor for the Metadata Object
 *     
 */
var dataAccessor =function(){
};

/**
 *  Helper function to remove Value from the list
 *     
 */
dataAccessor.prototype.removeValue=function(targetObj,value){
	return targetObj.filter(item => item !== value);
};

/**
 *  Updates Position inside Defualt ,free and not free list.    
 */
dataAccessor.prototype.updatePositionMatrices = function(position,value){
	let metaDataObj = GameMetaData;
	metaDataObj.setMatrixValue(position,value);
	metaDataObj.setMatrixDefaultList(this.removeValue(metaDataObj.getMatrixDefaultList(),position));
	metaDataObj.setMatrixFreeList(this.removeValue(metaDataObj.getMatrixFreeList(),position));
	metaDataObj.addMatrixNotFreeList(position);
};

/**
 *  Updates Position inside free list.    
 */
dataAccessor.prototype.updatePositionToFreeList = function(position){
	let metaDataObj = GameMetaData;
	metaDataObj.setMatrixDefaultList(this.removeValue(metaDataObj.getMatrixDefaultList(),position));
	metaDataObj.setMatrixFreeList(this.removeValue(metaDataObj.getMatrixFreeList(),position));
	metaDataObj.setMatrixNotFreeList(this.removeValue(metaDataObj.getMatrixNotFreeList(),position));
	metaDataObj.addToMatrixFreeList(position);
};

/**
 *  Updates Position inside not free list.    
 */
dataAccessor.prototype.updatePositionToNotFreeList = function(position){
	let metaDataObj = GameMetaData;
	metaDataObj.setMatrixDefaultList(this.removeValue(metaDataObj.getMatrixDefaultList(),position));
	metaDataObj.setMatrixFreeList(this.removeValue(metaDataObj.getMatrixFreeList(),position));
	metaDataObj.setMatrixNotFreeList(this.removeValue(metaDataObj.getMatrixNotFreeList(),position));
	metaDataObj.addMatrixNotFreeList(position);
};