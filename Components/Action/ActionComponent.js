import React, { useState } from "react";

function ActionComponent({saveTodo}) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    saveTodo(input);
    setInput("");
  };
  return (
    <div className=" absolute z-20">
        <form onSubmit={handleSubmit}>
          <h1 className="title" style={{ color: "red" }}>
            My Todos
          </h1>
          <div className="input">
            <input
              type="text"
              required
              placeholder="What do you need to do today?"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit">Submit</button>
          </div>
        </form>
    </div>
  )
}

export default ActionComponent
