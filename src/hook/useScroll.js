import {useEffect, useRef} from "react";

export default function useScroll(parentRef, childRef, callback) {
    console.log('childRef', childRef)
    console.log('parentRef', parentRef)
    const observer = useRef();

    useEffect(() => {
        const options = {
            root: parentRef.current,
            rootMargin: '0px',
            threshold: 0
        }
        observer.current = new IntersectionObserver(([target]) => {
            if (target.isIntersecting) {
                console.log('intersected')
                callback()
            }
        }, options)

        observer.current.observe(childRef.current)

        return function () {
          return  observer.current.unobserve(childRef.current)
        };
    }, [callback])
};