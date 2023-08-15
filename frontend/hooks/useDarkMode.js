import { useState } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = (initialValue) => {

    const [darkmode, setDarkMode] = useLocalStorage(initialValue);
    return [darkmode, setDarkMode];

}