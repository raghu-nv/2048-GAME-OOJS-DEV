// Matrix Movement 
var matrixOperation = function(){ 
    
let dataAccessObj = new dataAccessor();


/**
 * Move Right 
*/
let moveRight = function() {
	let tempColl;
	for(let row = 0; row < GameMetaData.getGameSize(); row++) {
		for(let col = GameMetaData.getGameSize() - 2; col >= 0; col--) {
			if(GameMetaData.getMatrixDataForPos(row,col)) {
				tempColl = col;
				while (tempColl + 1 < GameMetaData.getGameSize()) {
					if (!GameMetaData.getMatrixDataForPos(row,tempColl+1)) {
						GameMetaData.setMatrixValueForPos(row,tempColl+1,GameMetaData.getMatrixDataForPos(row,tempColl));
						GameMetaData.setMatrixValueForPos(row,tempColl,0);
                        
                        dataAccessObj.updatePositionToFreeList("R"+row+"C"+tempColl);
						dataAccessObj.updatePositionToNotFreeList("R"+row+"C"+Number(tempColl+1));
						tempColl++;
					} else if (GameMetaData.getMatrixDataForPos(row,tempColl) == GameMetaData.getMatrixDataForPos(row,tempColl+1)) {
						GameMetaData.setMatrixValueForPos(row,tempColl+1,(GameMetaData.getMatrixDataForPos(row,tempColl+1)*2));
						GameMetaData.setMatrixValueForPos(row,tempColl,0);
                        
                        dataAccessObj.updatePositionToFreeList("R"+row+"C"+tempColl);
						dataAccessObj.updatePositionToNotFreeList("R"+row+"C"+Number(tempColl+1));
						break;
					} else {
						break;
					}
				}
			}
		}
	}
}

/**
 * Move Left 
*/
let moveLeft = function()  {
	let tempColl;
	for(let row = 0; row < GameMetaData.getGameSize(); row++) {
		for(let col = 1; col < GameMetaData.getGameSize(); col++) {
			if(GameMetaData.getMatrixDataForPos(row,col)) {
				tempColl = col;
				while (tempColl - 1 >= 0) {
					if (!GameMetaData.getMatrixDataForPos(row,tempColl-1)) {
                        
                        GameMetaData.setMatrixValueForPos(row,tempColl-1,GameMetaData.getMatrixDataForPos(row,tempColl));
						GameMetaData.setMatrixValueForPos(row,tempColl,0);
                        
                        dataAccessObj.updatePositionToFreeList("R"+row+"C"+tempColl);
						dataAccessObj.updatePositionToNotFreeList("R"+row+"C"+Number(tempColl-1));
						tempColl--;
					} else if (GameMetaData.getMatrixDataForPos(row,tempColl) == GameMetaData.getMatrixDataForPos(row,tempColl-1)) {
                        
                        GameMetaData.setMatrixValueForPos(row,tempColl-1,(GameMetaData.getMatrixDataForPos(row,tempColl-1)*2));
                        GameMetaData.setMatrixValueForPos(row,tempColl,0);
                        
						dataAccessObj.updatePositionToFreeList("R"+row+"C"+tempColl);
						dataAccessObj.updatePositionToNotFreeList("R"+row+"C"+Number(tempColl-1));
						break;
					} else {
						break; 
					}
				}
			}
		}
	}

}

/**
 * Move up 
*/
let moveUp =function() {
	var tempRow;
	for(let col = 0; col < GameMetaData.getGameSize(); col++) {
		for(let row = 1; row < GameMetaData.getGameSize(); row++) {
			if(GameMetaData.getMatrixDataForPos(row,col)) {
				tempRow = row;
				while (tempRow > 0) {
					if(!GameMetaData.getMatrixDataForPos(tempRow-1,col)) {
						GameMetaData.setMatrixValueForPos(tempRow-1,col,GameMetaData.getMatrixDataForPos(tempRow,col));
						GameMetaData.setMatrixValueForPos(tempRow,col,0);

						dataAccessObj.updatePositionToFreeList("R"+tempRow+"C"+col);
						dataAccessObj.updatePositionToNotFreeList("R"+Number(tempRow-1)+"C"+col);

						tempRow--;
					} else if (GameMetaData.getMatrixDataForPos(tempRow,col) == GameMetaData.getMatrixDataForPos(tempRow-1, col)) {
						GameMetaData.setMatrixValueForPos(tempRow-1,col,(GameMetaData.getMatrixDataForPos(tempRow-1,col)*2));
						GameMetaData.setMatrixValueForPos(tempRow,col,0);

						dataAccessObj.updatePositionToFreeList("R"+tempRow+"C"+col);
						dataAccessObj.updatePositionToNotFreeList("R"+Number(tempRow-1)+"C"+col);

						break;
					} else {
						break; 
					}
				}
			}
		}
	}

}

/**
 * Move down 
*/
let moveDown = function() {
	let tempRow;
	for(let col = 0; col < GameMetaData.getGameSize(); col++) {
		for(let row = GameMetaData.getGameSize() - 2; row >= 0; row--) {
			if(GameMetaData.getMatrixDataForPos(row,col)) {
				tempRow = row;
				while (Number(tempRow+1) < GameMetaData.getGameSize()) {
					if (!GameMetaData.getMatrixDataForPos(tempRow+1,col)) {
						GameMetaData.setMatrixValueForPos(tempRow+1,col,GameMetaData.getMatrixDataForPos(tempRow,col));
						GameMetaData.setMatrixValueForPos(tempRow,col,0);          
						dataAccessObj.updatePositionToFreeList("R"+tempRow+"C"+col);
						dataAccessObj.updatePositionToNotFreeList("R"+Number(tempRow+1)+"C"+col);

						tempRow++;
					} else if (GameMetaData.getMatrixDataForPos(tempRow,col) == GameMetaData.getMatrixDataForPos(tempRow+1, col)) {
						GameMetaData.setMatrixValueForPos(tempRow+1,col,(GameMetaData.getMatrixDataForPos(tempRow+1,col)*2));
						GameMetaData.setMatrixValueForPos(tempRow,col,0);
						dataAccessObj.updatePositionToFreeList("R"+tempRow+"C"+col);
						dataAccessObj.updatePositionToNotFreeList("R"+Number(tempRow+1)+"C"+col);
						break;
					} else {
						break; 
					}
				}
			}
		}
	}

};
    return {
        moveRight : moveRight,
        moveLeft : moveLeft,
        moveUp : moveUp,
        moveDown : moveDown
    }
};