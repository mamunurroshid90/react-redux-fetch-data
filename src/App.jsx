import Todos from "./components/Todos";

function App() {
  return (
    <>
      <div>
        <h2
          style={{
            textAlign: "center",
            fontSize: "28px",
            fontFamily: "sans-serif",
          }}
        >
          Welcome to the react App fetch data
        </h2>
        <Todos />
      </div>
    </>
  );
}

export default App;

// Project structure

// step1: install packages
// step2: constants define
// step3: async action creator
// step4: reducer
// step5: create store
// step6: provide store
// step7: use store
// step8: adding css styles
