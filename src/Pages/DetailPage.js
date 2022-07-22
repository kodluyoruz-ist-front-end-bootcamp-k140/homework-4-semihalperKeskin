import React from 'react'
import { AddToCart } from '../component/add-to-cart';
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/use-fetch';

const URL = "http://localhost:4000/api/products";
export default function DetailPage() {
  const { category, categoryItem }= useParams();
  const categoryItems = useFetch(URL)
  console.log(category, categoryItem)
  const item = categoryItem.data.filter(x => categoryItem.data.toLowerCase() == categoryItem)




  return (
    <>
      {categoryItem.map((item, i) =>
        <div className="container" key={i}>
          <div className="row">
            <div className="col-sm-3" >
              <div
                className="card"
                style={{
                  width: "18rem",
                }}
              >
                <img
                  src={item.image_url}
                  className="card-img-top product-image"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <div>
                    <AddToCart item={item} />
                    <span className="price">
                      {item.price.toFixed(2)} {"TL"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
