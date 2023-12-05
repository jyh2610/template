// RadioButtonGroup.jsx
"use client";

import { useState } from "react";

import { Divider } from "antd";

import type { TagName } from "./tag/TagFrame";

function RadioButtonGroup({ selectHandler }: { selectHandler: (tagname: TagName, value: string | number) => void }) {
  const [selectedButton, setSelectedButton] = useState<number>(1);

  const handleButtonClick = (buttonNumber: number) => {
    setSelectedButton(buttonNumber);
    selectHandler("family", buttonNumber);
  };

  return (
    <div className="flex justify-around">
      {[1, 2, 3, 4, 5].map((buttonNumber) => (
        <div key={buttonNumber} className="mb-2">
          <Divider className="w-full" plain>
            <label className="flex flex-col items-center">
              <input
                type="radio"
                name="radioGroup"
                value={buttonNumber}
                checked={selectedButton === buttonNumber}
                onChange={() => handleButtonClick(buttonNumber)}
              />
            </label>
            <span>{buttonNumber}</span>
          </Divider>
        </div>
      ))}
    </div>
  );
}

export default RadioButtonGroup;
