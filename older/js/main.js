(function(){

	var menu = document.querySelector("form button");
	var searchBar = document.querySelector("#bar");

	menu.onClick = function CSSChange() {
		searchBar.style.display = "block";
		console.log("test");
	}
})();