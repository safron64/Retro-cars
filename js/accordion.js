const accordion = document.getElementsByClassName('accordion__paragraph');
const reltedText = document.getElementsByClassName('relted__text');

dataNum(); //set the accordion points and the corresponding text attribute data-num
dynamicAccordion(); // function that adds an event click to each accordion item 

function dataNum() {
	for (let j = 0; j < accordion.length; j++) {
		accordion[j].setAttribute('data-num', j);
		reltedText[j].setAttribute('data-num', j);
	}
}

function dynamicAccordion() {
	for (let i = 0; i < accordion.length; i++) {
		//each item set event click
		accordion[i].addEventListener('click', function() {
			//when you click on the item, pull the data-num value
			const dataNum = this.getAttribute('data-num');
			//iterate over the points and delete the active class
			for (let j = 0; j < accordion.length; j++) {
				accordion[j].classList.remove('accordion__paragraph-active');
				reltedText[j].classList.remove('relted__text-active');
			}
			//add an active class to the item you clicked
			accordion[dataNum].classList.add('accordion__paragraph-active');
			reltedText[dataNum].classList.add('relted__text-active');
		});
	}
}
