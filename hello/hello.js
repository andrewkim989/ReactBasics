var text1 = React.createElement("h1", null, "Hello Dojo!");
ReactDOM.render(text1, document.getElementById("hello"));

var text2 = React.createElement("h2", null, "Things I need to do: ");
ReactDOM.render(text2, document.getElementById("things"));

var list = React.createElement(
    "ul", {
        className: "customlist"
    },
        React.createElement("li", {id: "li1"}, "Learn React"),
        React.createElement("li", {id: "li2"}, "Watch Super Smash Bros. Ultimate videos"),
        React.createElement("li", {id: "li3"}, "Watch basketball games"),
        React.createElement("li", {id: "li4"}, "Eat pizza"),
        React.createElement("li", {id: "li5"}, "Chat with other people online")
);

ReactDOM.render(list, document.getElementById("content"));