"use client";

import React, { useState } from "react";

import { tagData } from "@/contants/tagData";

import RadioButtonGroup from "../RadioButtonGroup";

import type { TagDataType } from "@/contants/tagData";

interface selectState {
  age: null | string;
  isMarry: null | string;
  kid: null | string;
  family: null | number;
}

// Define a union type for tag names
export type TagName = "age" | "isMarry" | "kid" | "family";

function TagFrame() {
  const [stack, setStack] = useState<selectState>({
    age: null,
    isMarry: null,
    kid: null,
    family: null,
  });

  console.log(stack);

  const renderTagValues = (tagName: TagName, tag: Record<string, string>) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return Object.entries<string>(tag).map(([_, value], idx) => (
      <div
        onClick={() => selectHandler(tagName, value)}
        className={`text-[#bfbfbf] text-[18px] rounded-[30px] text-center h-10 flex items-center justify-center ${
          value === stack[tagName] ? "bg-[#ff7e12] text-white" : "border border-dashed border-[#d9d9d9]"
        }`}
        key={idx}
      >
        {value}
      </div>
    ));
  };

  const selectHandler = (tagName: TagName, tag: string | number) => {
    setStack((prev) => {
      return { ...prev, [tagName]: tag };
    });
  };

  const mapping = { age: "나이_", isMarry: "결혼_", kid: "아이가_", family: "가족_구성원은" };

  const renderTageName = (tagName: TagName) => {
    return mapping[tagName];
  };

  //#ff7e12
  return (
    <div className=" w-1/3">
      <p className="font-bold text-2xl mb-7">라이프 키워드 맞춤 제품 찾기</p>
      <div className="border-4 border-solid border-[#ff7e12] rounded-[23px] p-8 space-y-10">
        <p>
          “ <br />
          나의 라이프 키워드는
        </p>
        {Object.keys(tagData).map((tagName, idx) => (
          <div key={idx}>
            <p className="mb-4">#{renderTageName(tagName as TagName)}</p>
            <div className="grid grid-cols-2 gap-4">{renderTagValues(tagName as TagName, tagData[tagName as keyof TagDataType])}</div>
          </div>
        ))}
        <p> #가족_구성원은</p>
        <RadioButtonGroup selectHandler={selectHandler} />
        <div className="flex justify-center">
          <button className="w-64 h-14 rounded-[40px] box-border text-[20px] text-center text-[#1b1b1b] border border-solid border-[#858585] hover:bg-[#ff7e12] hover:text-white hover:border-[#d9d9d9]">
            검색하기
          </button>
        </div>
      </div>
    </div>
  );
}

export default TagFrame;
