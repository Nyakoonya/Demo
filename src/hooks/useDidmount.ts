import { useEffect } from "react";

const useDidmount = (fn: () => void) => {
  useEffect(() => {
    fn && fn();
  }, [fn]);
};

export default useDidmount;
