const reduce = require('../index');
const assert = require('assert');
const fs = require('fs');
const testValue = JSON.parse(fs.readFileSync('testValue.json'));

describe('reduce', function() {
	it('should return a string', function(done) {
	  reduce([1,2,3],(err,resultString) => {
	  	if(err) done(err)

	  	else {
	  		assert.equal(typeof resultString,'string','function should return a string');
	  		done();
	  	} 
	  });
	});
	testValue.forEach((item)=>{
		it(`should return a string  ${item.output} if array is ${item.input}`,(done)=>{
		reduce(item.input,(err,resultString) => {
			if(err) done(err);
			else{
				assert.equal(resultString,item.output,'wrong results');
				done();
			}
		})
	})
	})
});