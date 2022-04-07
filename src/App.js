import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [matrix, setMatrix] = useState([]);
  const [selIndex, setSelIndex] = useState([]);

  useEffect(() => {
    let arr = [...matrix];
    for (let i = 0; i < 16; i++) {
      arr.push({ num: i, isSelected: false });
    }
    setMatrix(arr);
    return () => setMatrix([]);
  }, []);

  return (
    <div className="App">
      <div className="container">
        {matrix.map((box, i) => (
          <div
            className="box"
            style={{ backgroundColor: selIndex.includes(box) ? "red" : "blue" }}
            key={i}
            onClick={() => {
              let temp = [...matrix];
              let temp2 = [...selIndex];
              temp2.unshift(temp[i]);
              if (temp2.length >= 3) {
                temp2.pop();
              }
              console.log(temp2);
              setSelIndex(temp2);
            }}
          >
            <p style={{ color: "white" }}>{box.num}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
