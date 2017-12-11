//Checks to see which voter is lowest 
if (document.readyState === "complete") {
document.getElementById("sg_SubmitButton").click(); 
function balancer() {

	var vote1 = document.getElementsByClassName("sg-result-count")[0].textContent;
	var vote2 = document.getElementsByClassName("sg-result-count")[1].textContent;
	var vote3 = document.getElementsByClassName("sg-result-count")[2].textContent;
	vote1 = vote1.replace(/\D/g,'');
	vote2 = vote2.replace(/\D/g,'');
	vote3 = vote3.replace(/\D/g,'');
	var min = Math.min(vote1, vote2, vote3);

	if(min==vote1) {
		document.cookie = "whichToClick=1";
	}
	else if(min==vote2){
		document.cookie = "whichToClick=2";
	}
	else{
		document.cookie = "whichToClick=3";
	}
}
}