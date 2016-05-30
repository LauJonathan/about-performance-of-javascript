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
	/*
	* 初始化数据
	*/
	initialTimesData: function(){
		this.timeGap = [];
		this.timeSum = 0;
		this.timeAverage = 0;
	},
	/*
	* 执行体
	* @params
	* func  待执行函数 
	* n     需要执行次数
	*/
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
	/*
	* 平均数输出计算结果
	*/
	printCacResult: function(){
		if(this.times > 0){
			for(var i = 0;i < this.times;++i){
				this.timeSum = this.timeSum + this.timeGap[i];
			}
			this.timeAverage = (this.timeSum / this.times).toFixed(2);
			console.log(this.timeAverage);
		}else{
			throw new Error('please check your input arguments "n" times of Function');
		}
	},
	/*
	*  执行体参数校验
	*/
	checkArgsProcess: function(args){
		if(args.length != 2){
			throw new Error("please check your input arguments of times");
		}
		if(typeof args[0] == "function" && typeof args[1] == "number"){
			return;
		}else{
			throw new TypeError("please confirm your input arguments of type");
		}
	},
	/*
	* 清空存放数据
	*/
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
