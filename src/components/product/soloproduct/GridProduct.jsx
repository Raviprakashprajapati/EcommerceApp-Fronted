import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
    searchProductByClothing,
  searchProductByEletronics,
  searchProductByReqAPI,
} from "../../api/searchApi";

function GridProduct() {
  const [product, SetProduct] = useState(null);
  const { category } = useParams();

  useEffect(() => {

    if (category.includes("eletronics")) {
      searchProductByEletronics()
        .then((data) => {
          if (data) {
            console.log(data.data);
            SetProduct(data.data);
          }
        })
        .catch((err) => {
          console.log("err in eletronincs search ", err);
        });
    } 
    else if (category.includes("clothing")) {

        searchProductByClothing()
        .then((data) => {
            if (data) {
              console.log(data.data);
              SetProduct(data.data);
            }
          })
          .catch((err) => {
            console.log("err in eletronincs search ", err);
          });

    }
    else{
        if(category){
            searchProductByReqAPI(category)
            .then((data) => {
                if (data) {
                  console.log(data.data);
                  SetProduct(data.data);
                }
              })
              .catch((err) => {
                console.log("err in subcategory search ", err);
              });
    


        }
    }
  }, []);

  return (
    <div>

        {/* header */}
      <div className="flex justify-center">
        <h4 className="mt-4 mb-5 font-extrabold bg-black text-white p-3 rounded-lg ">
          { category.includes("eletronics")?
            "Eletronic ":
            category.includes("clothing")?
            "CLothing ":
            category.includes("tv")?
            "SmartTV ":
            category.includes("shirt")?
            "Shirts ":
            category.includes("phone")?
            "Phone ":null
          
          
          } Products
        </h4>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {product?.map((product, index) => (
          <div key={index} className="p-4 bg-white shadow-md rounded-md">
            {/* Replace the content below with your product card component */}
            <div>
              <img
                src={product?.images?.[0]}
                className="h-[7rem] m-auto"
                alt=""
              />
            </div>
            <h2 className=" font-semibold mb-2 text-center mt-2">
              {product.name}
            </h2>
            <p className="text-gray-700 text-center">{}</p>
            <div className="mt-2">
              <p className="text-slate-500 font-bold text-center ">₹ {product.price}</p>
              <button className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md m-auto">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default GridProduct;
