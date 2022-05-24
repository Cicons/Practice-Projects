import React, { Component } from 'react';

class Test extends Component {
	constructor(props) {
		super(props);

		let result;
		let nums = [];

		// ADD YOUR CUSTOM JAVASCRIPT TESTS HERE
		//const nums = [25, 125, 75, 200];

		while(nums.length < 6) {
			let x = Math.floor(Math.random() * 200) + 1;
			nums.push(x);
		}

		console.log("Nums: ", nums)

		function atLeast(num, comp) {
		  return num >= comp;
		}

		function atMost(num, comp) {
			return num <= comp;
		}

		function atNum(num, comp) {
			return num === comp;
		}

		result = nums.filter(num => atLeast(num, 100) );

		console.log("More than 100: ", result);

		result = nums.filter(num => atMost(num, 100) );

		console.log("less than 100: ", result);

		result = nums.some(num => atNum(num, 100) );

		console.log("100?: ", result)
	}

	render() {
		return (<div className="page-root-test">
			
		</div>);
	}
}

export default Test;