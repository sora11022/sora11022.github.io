import { createContext, useState } from 'react';

const TitleContext = createContext();

const TitleProvider = ({ children }) => {
    const [title, setTitle] = useState("")

    const handleTitle = () => {
        setTitle((prev) => !prev)
    }
    return (
        <TitleContext.Provider value = {{title, handleTitle}}>
            {children}
        </TitleContext.Provider>
    )
};

export {TitleContext, TitleProvider}
