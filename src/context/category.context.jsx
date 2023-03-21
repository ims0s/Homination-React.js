import { createContext , useState } from "react";

export const CategoryContext= createContext({
    currentCategory:true,
    setCurrentCategory:()=>null
})


export const CategoryProvider=({children})=>{
    const [currentCategory,setCurrentCategory]=useState(null);
    const value = {currentCategory,setCurrentCategory}
    return(
        <CategoryContext.Provider value={value}>
            {children}
        </CategoryContext.Provider>
    )
}