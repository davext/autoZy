// taking care of all the animation


function startAnimation()
{
	for (i=10; i!=0; i--){for (m of document.getElementsByClassName("start-button")){
		m.click();
	}};
}

function solveAnimation()
{
	//starting the animation
	startAnimation();
	//the 2x button so we can finish faster ehh
	let doubleSpeed = document.querySelectorAll('[aria-label="2x speed"]');
	for (button of doubleSpeed){button.click()};
	//hit play button
	function playUntilFinished()
	{
		if(document.getElementsByClassName("step disabled").length>0)
		{
			for (x of document.getElementsByClassName('play-button')) {x.click()};
			playUntilFinished();
		}

	}
}

function solveMultipleChoice()
{
	for (radio of document.querySelectorAll('input[type=radio]')) {radio.click()};
}


console.log("i'm wokring");

