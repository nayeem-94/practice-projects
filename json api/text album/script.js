const btnClick = document.getElementById("btn");
btnClick.addEventListener("click", fetchData);

function fetchData() {
    console.log("Fetching data...");
    loadtodo();
}

const loadtodo = () => {
    const url = "https://jsonplaceholder.typicode.com/albums";
    fetch(url)
        .then((res) => res.json())
        .then((data) => functional(data));
}

const functional = (data) => {
    const parent = document.getElementById("sectionContent");
    parent.innerHTML = "";

    for (const todo of data) {
        // console.log(todo);


        const div = document.createElement("div");
        div.classList.add("post");

        div.innerHTML = `
        <h3>User ID: ${todo.userId}</h3>
        <h4>Album ID: ${todo.id}</h4>
        <p>Title: ${todo.title}</p>
        `   
    parent.classList.add("mainPost");

        parent.appendChild(div);



    }


}