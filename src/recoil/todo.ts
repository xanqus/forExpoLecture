import { atom, selector } from "recoil";

type todo = {
  id: number;
  text: string;
  checked: boolean;
};

export const todoState = atom<todo[]>({
  key: "todoState",
  default: [],
});
