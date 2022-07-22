import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/use-fetch';
import { Link } from 'react-router-dom';
import DetailPage from './DetailPage';
import { AddToCart } from '../component/add-to-cart';
import "./index.css"

const URL = "http://localhost:4000/api/products";
export default function CategoryPage() {

    const {categoryName} = useParams();
    const categoryItem = useFetch(URL)
  const items = categoryItem.data.filter(x=> x.name.toLowerCase()==categoryName.toLowerCase())

  return (
    <>
    <div className="container">
        <h2>Seçilen kategori : {`${categoryName}`}</h2>
    {items.map((category, i)=>(
        <div className="row" key={i}>
        <h2 className='categoryTittle'>{category.name}</h2>
        {category.products.map((item, i) => (
          <div className="col-sm-3" key={i}>
            <div
              onClick={<DetailPage />}
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
                <Link to="/detail" onClick={<DetailPage categoryItem={item} />}>
                  <p
                     className='product-detail'   
                  >Ürün Detayları</p>
                </Link>

                <div>
                  <AddToCart item={item} />
                  <span className="price">
                    {item.price.toFixed(2)} {"TL"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
        <hr className='hr' />
      </div>
    ))}
    </div>
    </>
  )
}
