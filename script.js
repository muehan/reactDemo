var root = document.getElementById("root");

function CreateTitle() {
    return React.createElement("h1", null, "Hello from React");
}

ReactDOM.render(CreateTitle(), root);