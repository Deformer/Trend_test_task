# Installation
- to install this module use : 
```npm install trend_test_task```
# Usage
``` 
var reduceArrayToString = require('trend_test_task');

reduceArrayToString([1,2,3],function(err,resultString) {
    if(err) console.log(err);
    else console.log(resultString) //=> 1-3
})
``` 
- the first argument should be a sorted array
- the second argument should be a callback with parameters err - an Error object and resultString - a string
