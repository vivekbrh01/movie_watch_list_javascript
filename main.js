// let movieList = [];

// let movieInput = document.querySelector('input[type="text"]');
// let ul = document.querySelector("ul");

// function createUI(data = movieList, root = ul) {
// 	root.innerHTML = "";
// 	data.forEach((movie, index) => {
// 		let li = document.createElement("li");
// 		let p = document.createElement("p");
// 		p.innerText = movie.name;
// 		let button = document.createElement("button");
// 		button.innerText = movie.isWatched ? "Watched" : "To Watch";
// 		button.setAttribute("data-id", index);
// 		let del = document.createElement("span");
// 		del.setAttribute("data-id", index);
// 		del.innerText = "X";
// 		li.append(p, button, del);
// 		ul.append(li);
// 	});
// }

// function handleInput(e) {
// 	if (e.keyCode === 13) {
// 		movieList = movieList.concat({
// 			name: e.target.value,
// 			isWatched: false,
// 		});
// 		e.target.value = "";
// 		createUI();
// 	}
// }

// function toogleChoice(e) {
// 	if (e.target.nodeName === "BUTTON") {
// 		let id = e.target.dataset.id;
// 		movieList = movieList.map((movie, index) => {
// 			if (index == id) {
// 				return {
// 					...movie,
// 					isWatched: !movie.isWatched,
// 				};
// 			}
// 			return movie;
// 		});
// 		createUI();
// 	}
// }
// function deleteElement(e) {
// 	if (e.target.nodeName === "SPAN") {
// 		let id = e.target.dataset.id;
// 		movieList.splice(id, 1);
// 		createUI();
// 	}
// }
// ul.addEventListener("click", deleteElement);
// ul.addEventListener("click", toogleChoice);
// movieInput.addEventListener("keyup", handleInput);

// let movieList = [];

// let movieInput = document.querySelector("input[type='text']");

// let ul = document.querySelector("ul");

// function createUI(data = movieList, root = ul) {
// 	// input>ul>li>p+button+span
// 	root.innerHTML = "";
// 	data.forEach((data, index) => {
// 		let li = document.createElement("li");
// 		let p = document.createElement("p");
// 		p.innerText = data.name;
// 		let button = document.createElement("button");
// 		button.innerText = data.isWatched ? "Watched" : "To Watch";
// 		button.setAttribute("data-id", index);
// 		let del = document.createElement("span");
// 		del.innerText = "X";
// 		button.setAttribute("data-id", index);
// 		li.append(p, button, del);
// 		ul.append(li);
// 	});
// }

// function handleInput(e) {
// 	if (e.keyCode === 13) {
// 		movieList = movieList.concat({
// 			name: e.target.value,
// 			isWatched: false,
// 		});
// 		e.target.value = "";
// 		createUI();
// 	}
// }

// function deleteElement(e) {
// 	if (e.target.nodeName === "SPAN") {
// 		let id = e.target.dataset.id;
// 		movieList.splice(id, 1);
// 		createUI();
// 	}
// }

// function toogleChoice(e) {
// 	if (e.target.nodeName === "BUTTON") {
// 		let id = e.target.dataset.id;
// 		movieList = movieList.map((movie, index) => {
// 			if (index == id) {
// 				return {
// 					...movie,
// 					isWatched: !movie.isWatched,
// 				};
// 			}
// 			return movie;
// 		});
// 		createUI();
// 	}
// }

// ul.addEventListener("click", toogleChoice);
// ul.addEventListener("click", deleteElement);
// movieInput.addEventListener("keyup", handleInput);

// let movieList = [];

// let movieInput = document.querySelector("input[type='text']");

// let ul = document.querySelector("ul");

// function createUI(data = movieList, root = ul) {
// 	root.innerHTML = "";
// 	data.forEach((movie, index) => {
// 		// input>ul>li>p+button+span
// 		let li = document.createElement("li");
// 		let p = document.createElement("p");
// 		p.innerText = movie.name;
// 		let button = document.createElement("button");
// 		button.innerText = movie.isWatched ? "Watched" : "To Watch";
// 		button.setAttribute("data-id", index);
// 		let del = document.createElement("span");
// 		del.innerText = "X";
// 		del.setAttribute("data-id", index);
// 		li.append(p, button, del);
// 		ul.append(li);
// 	});
// }

// function inputHandler(e) {
// 	if (e.keyCode === 13) {
// 		movieList = movieList.concat({
// 			name: e.target.value,
// 			isWatched: false,
// 		});
// 		e.target.value = "";
// 		createUI();
// 	}
// }

// function deleteElement(e) {
// 	if (e.target.nodeName === "SPAN") {
// 		let id = e.target.dataset.id;
// 		movieList.splice(id, 1);
// 		createUI();
// 	}
// }

// function toggleChoice(e) {
// 	if (e.target.nodeName === "BUTTON") {
// 		let id = e.target.dataset.id;
// 		movieList = movieList.map((movie, index) => {
// 			if (index == id) {
// 				return {
// 					...movie,
// 					isWatched: !movie.isWatched,
// 				};
// 			}
// 			return movie;
// 		});
// 		createUI();
// 	}
// }

// ul.addEventListener("click", deleteElement);
// ul.addEventListener("click", toggleChoice);
// movieInput.addEventListener("keyup", inputHandler);




let movieList = [];

let movieInput = document.querySelector("input[type='text']");

let ul = document.querySelector("ul");

function createUI(data = movieList, root = ul) {
	root.innerHTML = "";
	data.forEach((movie, index) => {
		// input>ul>li>p+button+span
		let li = document.createElement("li");
		let p = document.createElement("p");
		p.innerText = movie.name;
		let button = document.createElement("button");
		button.innerText = movie.isWatched ? "Watched" : "To Watch";
		button.setAttribute("data-id", index);
		let del = document.createElement("span");
		del.innerText = "X";
		del.setAttribute("data-id", index);
		li.append(p, button, del);
		ul.append(li);
	});
}

function inputHandler(e) {
	if (e.keyCode === 13) {
		movieList = movieList.concat({
			name: e.target.value,
			isWatched: false,
		});
		e.target.value = "";
		createUI();
	}
}

function deleteElement(e) {
	if (e.target.nodeName === "SPAN") {
		let id = e.target.dataset.id;
		movieList.splice(id, 1);
		createUI();
	}
}

function toggleChoice(e) {
	if (e.target.nodeName === "BUTTON") {
		let id = e.target.dataset.id;
		movieList = movieList.map((movie, index) => {
			if (index == id) {
				return {
					...movie,
					isWatched: !movie.isWatched,
				};
			}
			return movie;
		});
		createUI();
	}
}

ul.addEventListener("click", deleteElement);
ul.addEventListener("click", toggleChoice);
movieInput.addEventListener("keyup", inputHandler);
