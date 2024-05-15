import { shallowEqual, useSelector } from "react-redux";

const useShallowEquelSelector = (selector) => {
  return useSelector(selector, shallowEqual);
};

export default useShallowEquelSelector;
