import { useEffect } from "react";

function useCloseModal(ref, callback) {
  const handleClickOutside = (e) => {
    const target = e.target;
    if (ref.current && !ref.current.contains(target)) {
      callback();
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [ref, callback]);
}

export default useCloseModal;
