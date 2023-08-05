// const heading = React.createElement("h1", {id:"heading"}, "Hello Sheetal from React");
const heading = React.createElement(
  "div",
  { id: "container1" },
  React.createElement("div", { id: "container2" }, [
    React.createElement("h1", {}, "Hello Sheetal from heading 1"),
    React.createElement("h2", {}, "Hello Sheetal from heading 2"),
  ])
);

console.log(heading); //object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
