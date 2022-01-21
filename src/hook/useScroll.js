import { useEffect, useRef } from "react";

export default function useScroll(parentRef, childRef, callback) {
  // parentRef - блок ГДЕ ПРОКРУТКА И
  // childRef - БЛОК КОТОРЫЙ СТАНОВИТСЯ ВИДИМАЯ ОТРАБАТЫВАЕТСЯ КОЛБЕК
  const observer = useRef();

  useEffect(() => {
    // ОПИЦИИ ДЛЯ observer
    const options = {
      root: parentRef.current,
      rootMargin: "0px",
      threshold: 0, // если 1, то когда весь блок прокрутится
    };
    observer.current = new IntersectionObserver(([target]) => {
      if (target.isIntersecting) {
        console.log("intersected");
        callback();
      }
    }, options);

    observer.current.observe(childRef.current);

    return () => {
      return observer.current.unobserve(childRef.current);
    };
    // выполняется когда зависимость callback изменилась,
    //колбек является функцие которя фечит данные с сервера
  }, [callback]);
}
