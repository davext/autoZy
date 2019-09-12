

document.addEventListener('DOMContentLoaded', function() {
	var solvethemAll = document.getElementById('solveAll');
	var solveAnimation = document.getElementById('solveAnimation');
	var solveMC = document.getElementById('solveMC');
	var solveSA = document.getElementById('solveSA');


    // onClick's logic below:
    solvethemAll.addEventListener('click', function() {

    	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    		var activeTab = tabs[0];
    		chrome.tabs.sendMessage(activeTab.id, {"message": "solveAll"});
    	});

    });

    solveAnimation.addEventListener('click', function() {

    	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    		var activeTab = tabs[0];
    		chrome.tabs.sendMessage(activeTab.id, {"message": "solveAnimation"});
    	});

    });

    solveMC.addEventListener('click', function() {

    	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    		var activeTab = tabs[0];
    		chrome.tabs.sendMessage(activeTab.id, {"message": "solveMC"});
    	});

    });

    solveSA.addEventListener('click', function() {

    	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    		var activeTab = tabs[0];
    		chrome.tabs.sendMessage(activeTab.id, {"message": "solveSA"});
    	});

    });



});