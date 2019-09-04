import { useEffect } from 'react';
import useLocalStorage from './localStorage';

const darkMode = (initialValue) => {
    const [darkModeActive, setDarkModeActive] = useLocalStorage('dark-mode', initialValue);
    return [darkModeActive, setDarkModeActive];
};


export default darkMode;