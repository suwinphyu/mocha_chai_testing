//requires
const assert = require('chai').assert;
const app = require('../index');


//Results
sayHelloResult =app.sayHello();
addNumberResult = app.addNumber(6,3);
subtractNumberResult = app.subtractNumber(6,3);
multiplyNumberResult = app.multiplyNumber(6,3);
divideNumberResult = app.divideNumber(6,3);


//Assertions
describe('App', function(){

// sayHello
	describe('sayHello()',function(){
		it('app should return hello', function(){
		//let result = app.sayHello();
		assert.equal(sayHelloResult,'hello');
	});

		it('sayHello should return type string',function(){
			//let reuslt = app.sayHello();
			assert.typeOf(sayHelloResult,'string');

		});

	});

//addNumber
	describe('AddNumber()',function(){

		it('addnumber should be above 5',function(){
			//let reuslt = app.addTwoValue(6,3);
			assert.isAbove(addNumberResult,5);

		});

		it('addnumber should be return type number',function(){
			//let reuslt = app.addTwoValue(2,3);
			assert.typeOf(addNumberResult,'number');

		});

		it('addnumber should be equal to 9',function(){
			//let reuslt = app.addTwoValue(6,3);
			assert.equal(addNumberResult,9);

		});

	});

	//subtractNumber
	describe('subtractNumber()',function(){
		it('subtract number should be below 4',function(){
			//let reuslt = app.addTwoValue(6,3);
			assert.isBelow(subtractNumberResult,4);

		});

		it('subtract number should be return type number',function(){
			//let reuslt = app.addTwoValue(2,3);
			assert.typeOf(subtractNumberResult,'number');

		});
		it('subtract number should be equal to 3',function(){
			//let reuslt = app.addTwoValue(6,3);
			assert.equal(subtractNumberResult,3);

		});

	});

	//multiplyNumber
	describe('multiplyNumber()',function(){
		it('multiply number should be above 15',function(){
			//let reuslt = app.addTwoValue(6,3);
			assert.isAbove(multiplyNumberResult,15);

		});

		it('multiply number should be return type number',function(){
			//let reuslt = app.addTwoValue(2,3);
			assert.typeOf(multiplyNumberResult,'number');

		});
		it('multiply number should be equal to 18',function(){
			//let reuslt = app.addTwoValue(6,3);
			assert.equal(multiplyNumberResult,18);

		});

	});

	//divideNumber
	describe('divideNumber()',function(){
		it('divide number should be below 3',function(){
			//let reuslt = app.addTwoValue(6,3);
			assert.isBelow(divideNumberResult,3);

		});

		it('divide number should be return type number',function(){
			//let reuslt = app.addTwoValue(2,3);
			assert.typeOf(divideNumberResult,'number');

		});

		it('divide number should be equal to 2',function(){
			//let reuslt = app.addTwoValue(6,3);
			assert.equal(divideNumberResult,2);

		});

	});

});