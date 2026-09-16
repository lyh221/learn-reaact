import Greeting from "./Greeting";

function App() {
  //logical
  //구조분해할당 - object destucturing
  const animals = ["dog","cat","pig"];
  // const second = animals[1];

  const [ potato, second] = animals;

  console.log("🚀 ~ App ~ potato:", potato)
  console.log("🚀 ~ App ~ second:", second)
  
  const todoItem = {
    todo: "React학습하기",
    isComplete: false
  }

  const {todo, isComplete} = todoItem
  console.log("🚀 ~ App ~ todo:", todo)

  //view
  return (
    <div className="App">
      Hello World!
      <Greeting />
    </div>
  );
}

export default App;
