/*
* Created by jonathanLau on 2016/5/30.
*/
var CacExecTime = function(){
	this.startTime = (new Date()).getTime();
	this.endTime = (new Date()).getTime();
	this.timeInFunc = function(){};
	this.times = 0;
	this.timeGap = [];
	this.timeSum = 0;
	this.timeAverage = 0;
};
CacExecTime.prototype = {
	constructor: CacExecTime,
	initialTimesData: function(){
		this.timeGap = [];
		this.timeSum = 0;
		this.timeAverage = 0;
	},
	execBlock: function(func,n){
		this.checkArgsProcess(arguments);
		this.timeInFunc = func;
		this.times = n;
		this.initialTimesData();
		for(var i = 0;i < n;++i){
			this.execWay();
		}
		this.printCacResult();
	},
	execWay: function(){
		this.startTime = (new Date()).getTime();
		this.timeInFunc();
		this.endTime = (new Date()).getTime();
		this.timeGap.push(this.endTime - this.startTime);
	},
	printCacResult: function(){
		if(this.times > 0){
			for(var i = 0;i < this.times;++i){
				this.timeSum = this.timeSum + this.timeGap[i];
			}
			this.timeAverage = (this.timeSum / this.times).toFixed(2);
			console.log(this.timeAverage);
		}else{
			throw new Error("please check your input arguments times of Function");
		}
	},
	checkArgsProcess: function(args){
		if(args.length != 2){
			throw new Error("please check your input arguments times");
		}
		if(typeof args[0] == "function" && typeof args[1] == "number"){
			return;
		}else{
			throw new Error("please confirm your input arguments value");
		}
	},
	clearSpaceData: function(){
		this.startTime = null;
		this.endTime = null;
		this.timeInFunc = null;
		this.times = null;
		this.timeGap = [];
		this.timeSum = null;
		this.timeAverage = null;
	}
};
