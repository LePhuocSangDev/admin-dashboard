import { useState } from "react";

export const useToggle = (initialState?: any) => {
  const [state,setState] = useState(initialState);
  const toggle = () => {
    setState((prev:any) => !prev)
  }
  return [state,toggle]
}