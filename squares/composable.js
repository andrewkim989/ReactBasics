ReactDOM.render(
    React.createElement("h1", { style: { backgroundColor: "blue", color: "white" } },
    "White on blue"), document.getElementById("square1")
);

ReactDOM.render(
    React.createElement("h1", { style: { backgroundColor: "red", color: "blue" } },
    "Blue on red"), document.getElementById("square2")
);

ReactDOM.render(
    React.createElement("h1", { style: { backgroundColor: "pink", color: "green" } },
    "Green on pink"), document.getElementById("square3")
);