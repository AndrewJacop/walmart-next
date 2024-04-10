import { Inter } from "next/font/google";
import * as React from "react";

type CategoryProps = {
    catData: Category;
  };
const inter = Inter({ subsets: ["latin"] });

// Use the defined props interface
export  function CategoryCard(cat:CategoryProps){
   const  myCat=cat.catData
    return (
        <div className="flex items-center justify-center  p-1 container mx-auto ">
             <div className=" flex flex-col">
                        <div>
                            <img src={myCat.imgLink} alt="l" />
                          
                            <p className="text-center font-sans text-xs">
                                {myCat.title}
                            </p>
                        </div>
                    </div>
        </div>
    );
};

