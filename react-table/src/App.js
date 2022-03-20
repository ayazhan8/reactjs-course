import { tableData } from "./data";
import "./App.css";
import { useState } from "react";

function App() {
  const [isCheckedFirst, setIsCheckedFirst] = useState(false);
  const [isCheckedSecond, setIsCheckedSecond] = useState(false);

  const handleFirstCheckbox = () => {
    setIsCheckedFirst(!isCheckedFirst);
  };

  const handleSecondCheckbox = () => {
    setIsCheckedSecond(!isCheckedSecond);
  };

  let data = tableData;

  if (isCheckedFirst) {
    data = data.filter((item) => item.instalment);
  }

  if (isCheckedSecond) {
    data = data.filter((item) => item.count > 0);
  }

  return (
    <div className="page">
      <h2>Задание 1. Level 3 (🥇)</h2>
      <div className="flex-container">
        <div className="flex-child">
          <input type="checkbox" onChange={handleFirstCheckbox} />
          Только в рассрочку
        </div>
        <div className="flex-child">
          <input type="checkbox" onChange={handleSecondCheckbox} />
          Есть в наличии
        </div>
      </div>
      {/* <input type="checkbox">Stock</input> */}
      <table border="1">
        <thead>
          <tr>
            <th>№</th>
            <th>Название</th>
            <th>Цена ↑</th>
            <th>Количество</th>
            <th>В рассрочку</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={data.name} className={item.count > 5 ? "line-orange" : ""}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.count}</td>
              <td>{item.instalment ? "✅" : ""}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
