const assert = require('assert');

class TypeError extends Error {
	constructor(message){
		super(message)
		this.name = this.constructor.name;
		Error.captureStackTrace(this, this.constructor)
	}
}

function reduceArrayToString (arr,cb) {
	let str = ''
	assert.equal(typeof (cb), 'function',
        "callback should be a function");
	if(!Array.isArray(arr))
		cb(new TypeError('first argument should be an array'),null);
	if(arr.length === 0)
		cb(null,'');  
	for(let i = 0;i < arr.length;i++){
		setImmediate( () => {
			if(i === 0) 
				str += arr[i];
			else if(arr[i] > arr[i-1]+1)
				str+=`,${arr[i]}`;
			else if(arr[i] === arr[i-1]+1 && ( i === arr.length-1 || arr[i+1] > arr[i]+1 )){
				if(i < 2 || arr[i] > arr[i-2]+2 )
					str+=`,${arr[i]}`;
				else
					str += `-${arr[i]}`; 
			}
			if(i === arr.length-1)
				cb(null,str);
		})
	}
}

module.exports = reduceArrayToString;
