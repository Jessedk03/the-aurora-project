import { useEffect, useState } from "react";

const useIsMobileView = () => {
    const [width, setWidth] = useState<number>(window.innerWidth);

    function handleResize() {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return width <= 768;
};

export default useIsMobileView;
