import { useEffect, useRef, useState } from 'react';

const useInViewPort = (callback, delay = 0) => {
    const [isVisible, setIsVisible] = useState(false);
    const observer = useRef(null);

    useEffect(() => {
        observer.current = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        setIsVisible(true);
                        if (callback) callback();
                    }, delay);
                } else {
                    setIsVisible(false);
                }
            },
            { threshold: 0.5 } // You can adjust this threshold based on your needs
        );

        return () => {
            if (observer.current) {
                observer.current.disconnect();
            }
        };
    }, [callback, delay]);

    return isVisible;
};

export default useInViewPort;
