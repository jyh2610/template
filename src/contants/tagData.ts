// src/constants/tagData.ts

export interface TagDataType {
  age: Record<string, string>;
  isMarry: Record<string, string>;
  kid: Record<string, string>;
}

export const tagData: TagDataType = {
  age: {
    1: "20대",
    2: "30대",
    3: "40대",
    4: "50대",
    5: "60대",
    6: "70대",
  },
  isMarry: {
    true: "했습니다.",
    false: "안했습니다.",
    null: "선물입니다.",
  },
  kid: {
    true: "있습니다.",
    false: "없습니다.",
  },
};
