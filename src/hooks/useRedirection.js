import {useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom';

const useRedirection = (path, delayTime) => {
    const navigate = useNavigate();
    const [shouldRedirect, setShouldRedirect] = useState(false);

    useEffect(() => {
        let timeoutId;
        if (shouldRedirect) {
            timeoutId = setTimeout(() => {
                navigate(path);
            }, delayTime);
        }
        return () => {
            clearTimeout(timeoutId);
        };
    }, [shouldRedirect, path, delayTime, navigate]);

    const redirect = () => {
        setShouldRedirect(true);
    };

    return redirect;
}

export default useRedirection;