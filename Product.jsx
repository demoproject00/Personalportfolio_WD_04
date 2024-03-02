import React from 'react';
import "./productlist.css";
import Products from "../products/Products"
import {Myproducts} from "../../data"

const ProductList = () => {
  return <>
  <div className="pl">
      <div className="pl-texts">
      <h1 className="pl-title">Create & inspire. It's palaavi</h1>
        <p className="pl-desc">
          pallavi has a creative portfolio that your work has been waiting for.
          Beautiful homes, stunning portfolio styles & a whole lot more awaits
          inside.
        </p>
      </div>
      <div className="pl-l">
        {Myproducts.map((element)=>(
          <Products img={element.img} key={element.id} link={element.link}/>

        ))}
        
        
      </div>
  </div>
  
  </>;
};


export default ProductList;
