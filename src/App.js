import "./styles.css";
import React, { useState } from "react";

const Task1 = () => {
  const Form = () => {
    const [showHide, setShowHide] = useState(false);
    return (
      <form onSubmit={(e) => e.preventDefault()}>
        <textarea cols="60" rows="10" disabled={showHide}></textarea>
        <button onClick={() => setShowHide(false)}>Edit</button>
        <button onClick={() => setShowHide(true)}>Show</button>
      </form>
    );
  };
  return (
    <div>
      <Form />
    </div>
  );
};
const Task2 = () => {
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");
  const [checkbox1, setcheckbox1] = useState(false);
  const [checkbox2, setcheckbox2] = useState(false);
  const [radio, setRadio] = useState("");
  const [select, setSelect] = useState("");
  const [textarea, setTextarea] = useState("");
  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label for="chb1">checkbox1</label>
        <input
          type="checkbox"
          id="chb1"
          checked={checkbox1}
          onChange={() => {
            setcheckbox1((val) => !val);
            console.log(checkbox1);
          }}
        />
        <label for="chb2">checkbox2</label>
        <input
          type="checkbox"
          id="chb2"
          checked={checkbox2}
          onChange={() => setcheckbox2((val) => !val)}
        />
        <input
          type="radio"
          name="radio"
          value="radio1"
          onChange={(e) => setRadio(e.target.value)}
        />
        <input
          type="radio"
          name="radio"
          value="radio2"
          onChange={(e) => setRadio(e.target.value)}
        />
        <select value={select} onChange={(e) => setSelect(e.target.value)}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
        </select>
        <textarea
          value={textarea}
          onChange={(e) => setTextarea(e.target.value)}
        ></textarea>
      </form>
      <table>
        <thead>
          <tr>
            <td>text</td>
            <td>Email</td>
            <td>checkbox1</td>
            <td>checkbox2</td>
            <td>radio</td>
            <td>select</td>
            <td>textarea</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{text}</td>
            <td>{email}</td>
            <td>{checkbox1 ? "true" : "false"}</td>
            <td>{checkbox2 ? "true" : "false"}</td>
            <td>{radio}</td>
            <td>{select}</td>
            <td>{textarea}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
export default function App() {
  return (
    <div className="App">
      Task1
      <Task1 />
      Task2
      <Task2 />
    </div>
  );
}
