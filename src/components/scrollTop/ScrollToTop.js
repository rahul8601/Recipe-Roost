import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    // Get the current pathname from the location object
    const { pathname } = useLocation();

    useEffect(() => {
        // Scroll to the top of the page whenever the pathname changes
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

export default ScrollToTop;