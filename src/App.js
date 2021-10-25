import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [state, setState] = useState("");
  const [newstate, updateState] = useState("");
  const wordEventHandler = (e) => {
    setState(e.target.value);
    if (e.target.value === "") {
      updateState("");
    }
  };
  const sumbit = () => {
    if (state.length > 1) {
      axios.post("https://amh-translator.herokuapp.com", { word: state }).then((doc) => {
        axios.get("https://amh-translator.herokuapp.com/" + state).then((doc) => {
          console.log(doc);
          let data = doc.data;
          if (typeof data === "string") {
            updateState(data);
          }
          console.log(data);
        });
      });
    }
  };

  const clearHandle = () => {
    axios
      .delete("https://amh-translator.herokuapp.com")
      .then(() => {
        setState("");
        updateState("");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="container">
      <h1 className="colorize2">
        Amharic English Word Translator
        <br />
        አማርኛ መዝገበ -ቃላት
        <br />
        <input
          className="input"
          type="text"
          value={state}
          placeholder="Search"
          onChange={(e) => wordEventHandler(e)}
        />
        <button onClick={sumbit}>search</button>
        <button onClick={clearHandle}>clear</button>
        <div className="colorize1">
          {" "}
          word: {state}
          <br />
          ትርጉም: {newstate}
        </div>
      </h1>
    </div>
  );
}

export default App;
