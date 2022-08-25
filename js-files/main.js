

         

// functionCall for player 1 

document.getElementById("btn-1").addEventListener("click", function () { 
	const player1add = getPlayerNameById("player-1");
	disabledbtn('btn-1')
})

// functionCall for player 2
document.getElementById("btn-2").addEventListener("click", function (){
	const player1add = getPlayerNameById("player-2");
	disabledbtn("btn-2");
})

// functionCall for player 3
document.getElementById("btn-3").addEventListener("click", function (){
	const player1add = getPlayerNameById("player-3");
	disabledbtn("btn-3");
})

// functionCall for player 4
document.getElementById("btn-4").addEventListener("click", function (){
	const player1add = getPlayerNameById("player-4");
	disabledbtn("btn-4");
})

// functionCall for player 5
document.getElementById("btn-5").addEventListener("click", function (){
	const player1add = getPlayerNameById("player-5");
	disabledbtn("btn-5");
})


// functionCall for player 6////

document.getElementById("btn-6").addEventListener("click", function (){
	const player1add = getPlayerNameById("player-6");
	disabledbtn("btn-6");
})

//// calculate cost starting from here /////////

document.getElementById('calculate').addEventListener('click', function () {
	const perplayercost = getInputValue("per-player-cost");
	const oderlistid = document.getElementById("selected-li");
	let linumbers = oderlistid.childElementCount;
	const linumbernumber = parseFloat(linumbers);
	let allPlayerCost = linumbers * perplayercost;
	console.log(allPlayerCost);
	let totalplayercostid = document.getElementById("total-player-expenses");
	const totalplayercosttext = totalplayercostid.innerText;
	totalplayercostid.innerText = allPlayerCost;
	const totalplayercoststring = totalplayercostid.innerText;
	const totalplayercostnumber = parseFloat(totalplayercoststring); 



	// total cost coding start from here ////
	document
		.getElementById("total-cost")
		.addEventListener("click", function () {
			// manager cost

			const managercost = getInputValue("manager-cost");
			console.log(managercost);

			//  coachcost
			const coachcost = getInputValue("coach-cost");
			console.log(coachcost);
			const totalcost = totalplayercostnumber + managercost + coachcost;
			console.log(totalcost);
			const totalcosttextfield =
				document.getElementById("total-expenses");
			totalcosttextfield.innerText = totalcost;
		});

})

