// Singleton Class for Metadata
var GameMetaData = (function(){
    //metadata ;
    var gameData;

    //Initializating with empty matrix;
	let LoadMatrixWithDefault = function(){
		let matrixData = {};
		return matrixData;
	}

    //Get Configuration and load session
	let loadGameDataForSession = function(){
		this.maximumSize   =  GAME_CONF.gameSize; 
		this.numberMatrix = new LoadMatrixWithDefault(GAME_CONF.gameSize);
	};

	return{
		/**
		 *  Contains getters and setters for the matrixData.
		 */
		getMatrixData: function(){
			return  this.getGameData().numberMatrix;
        },
        getMatrixDataForPos: function(row,col){
			return  this.getGameData().numberMatrix.masterData["R"+row][col].value;
		},
		getMatrixDefaultList: function(){
			return  this.getGameData().numberMatrix.defaultList;
		},
		getMatrixFreeList: function(){
			return  this.getGameData().numberMatrix.free;
		},
		getMatrixNotFreeList: function(){
			return  this.getGameData().numberMatrix.notFree;
		},
		setMatrixDefaultList: function(defaultList){
			this.getGameData().numberMatrix.defaultList = defaultList;
		},
		setMatrixFreeList: function(freeList){
			this.getGameData().numberMatrix.free =freeList;
		},
		setMatrixNotFreeList: function(notFreeList){
			this.getGameData().numberMatrix.notFree = notFreeList;
		},

		addToMatrixFreeList: function(value){
			this.getGameData().numberMatrix.free.push(value);
		},
		addMatrixNotFreeList: function(value){
			this.getGameData().numberMatrix.notFree.push(value);
        },
        
        setMatrixValue:function(position,value){
			let row =  position.substr((position.indexOf('R')+1),(position.indexOf('C')-1));
			let col =  position.substr((position.indexOf('C')+1),(position.length));
            this.getGameData().numberMatrix.masterData["R"+row][col].value = value;
		},

		setMatrixValueForPos:function(row,col,inVal){
            this.getGameData().numberMatrix.masterData["R"+row][col].value = inVal;
		},
		setMatrixDefualtValue:function(defualtMatrix){
			 this.getGameData().numberMatrix = defualtMatrix;
		},
		setFlagForPosition:function(position,flag){

			let data = this.getGameData().numberMatrix;
			let freeData = data.free;
			let notFreeData = data.notFree;

			data.defaultList = data.defaultList.filter(item => item !==position);

			if(flag==="free"){
				notFreeData = notFreeData.filter(item => item !== position);
				if(!freeData.includes(position)){
					freeData.push(position);
				}
			}else{
				freeData = freeData.filter(item => item !== position);
				if(!notFreeData.includes(position)){
					notFreeData.push(position);
				}
			}
			return true;
		},
		getGameData: function(param){
			if(gameData==null){
				gameData =  new loadGameDataForSession();
				gameData.constructor = null; 
			}
			return gameData;
		},
		getGameSize: function(){
			return GAME_CONF.gameSize;
        },
		getAllowedKeys: function(){
			if(GAME_CONF.movementControl==="numPadControl"){
				return GAME_CONF.numberAllowedKeyCodesList;
			}else if(GAME_CONF.movementControl==="arrowsControl"){
				return GAME_CONF.arrowAllowedKeyCodesList;
			}
        },
		getOperationForKey: function(key){
			if(GAME_CONF.movementControl==="numPadControl"){
				return GAME_CONF.numberControlsMaps[key];
			}else if(GAME_CONF.movementControl==="arrowsControl"){
				return GAME_CONF.arrowControlsMaps[key];
			}
		},
		getColorPalleteForNumber: function(colorCode){
			return GAME_CONF.colorPallete[colorCode];
		}
	}
})();