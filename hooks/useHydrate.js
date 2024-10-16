import { useEffect, useState } from "react";

// hydration이 되었는지 확인하는 훅
const useHydrate = () => {
  const [isMount, setIsMount] = useState(false);
  useEffect(() => {
    setIsMount(true);
  }, []);

  return isMount; // hydration이 완료되었는지를 반환 
};

export default useHydrate;
