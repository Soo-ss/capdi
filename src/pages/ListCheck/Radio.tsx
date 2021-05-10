import React, { useState } from "react";

const Radio = () => {
  const lists = ["rarely", "sometimes", "often", "mostly"];
  const [Checked, setChecked] = useState("rarely");
  console.log(Checked);

  return (
    <div>
      {lists.map((item, index) => {
        return (
          <div key={index}>
            <input
              type="radio"
              value={item}
              name="answer"
              onChange={() => setChecked(item)}
            />
            {item}
          </div>
        );
      })}
    </div>
  );
};

export default Radio;
