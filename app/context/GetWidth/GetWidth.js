'use client'
import { createContext, useContext, useEffect, useState } from 'react';

const WindowWidth = createContext();

export const GetWidthProvider = ({ children }) => {
  const [width, setWidth] = useState();
  
    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
            console.log("Window resized:", window.innerWidth);
        };

        // Устанавливаем начальную ширину
        handleResize();

        // Добавляем обработчик изменения размера окна
        window.addEventListener('resize', handleResize);

        // Убираем обработчик при размонтировании компонента
        return () => window.removeEventListener('resize', handleResize);
    }, []);

  return (
    <WindowWidth.Provider value={{ width }}>
      {children}
    </WindowWidth.Provider>
  );
};

export const useGetWidth= () => useContext(WindowWidth);