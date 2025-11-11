const btnClick = document.getElementById("btn");
btnClick.addEventListener("click", fetchData);

function fetchData() {
    console.log("Fetching data...");
    loadtodo();
}

const loadtodo = () => {
    const url = "https://jsonplaceholder.typicode.com/photos";
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
            <h3>Album ID: ${todo.albumId}</h3>
              <h4>ID: ${todo.id}</h4>
                <p>Title: ${todo.title}</p>
                <div><img style="width: 100%; height: 200px;" src="https://placehold.co/600x400" alt=""></div>
                <div><img style="width: 100%; height: 150px;" src="https://placehold.co/150" alt=""></div>
            `;

        parent.classList.add("mainPost");

        parent.appendChild(div);


    }


}