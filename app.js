var budgetController = (() => {
	var expanse = (id,description,value) => {
		this.id = id;
		this.description = description;
		this.value = value;
	}
	var Income = (id,description,value) => {
		this.id = id;
		this.description = description;
		this.value = value;
	}

	var data = {
		allItems: {
			exp: [],
			inc: [],
		},
		totals: {
			exp: 0,
			inc: 0
		}
	}

})();



//UI controller
var UIController = (() => {

	var DOMStrings = {
		inputType: '.add__type',
		inputDescription: '.add__description',
		inputValue: '.add__value',
		inputButton: '.add__btn'
	};
	//some code
	return {
		getInput: () => {
			return {
				type: document.querySelector(DOMStrings.inputType).value,
				description: document.querySelector(DOMStrings.inputDescription).value,
				value: document.querySelector(DOMStrings.inputValue).value
			};
		},
		getDomStrings: () => {
			return DOMStrings;
		}
	};


})();



//GLOBAL CONTROLLER
var controller = ((budgetCtrl, UICtrl) => {

	var setUpEventListener = () => {
	document.querySelector(DOM.inputButton).addEventListener('click',ctrlAddItem);

	document.addEventListener('keypress',(e)=>{
	if(e.keyCode === 13){
		ctrlAddItem();
		}
	});
}

	var DOM = UICtrl.getDomStrings();


	var ctrlAddItem = () => {
		//1. Get the input data
		var input = UICtrl.getInput();
		//2. Add the item to the budget controller

		//3. Add the item to UI

		//4. Calculate the buget

		//5. Display the budget
	}

	return {
		init: () => {
			console.log('Application is started');
			setUpEventListener();
		}
	}

})(budgetController, UIController);



controller.init();
