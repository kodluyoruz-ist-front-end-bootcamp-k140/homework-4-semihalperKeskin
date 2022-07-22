import React, { createContext, useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { AddToCart } from '../component/add-to-cart/index';
import Footer from "../component/footer/Footer"
import CategoryPage from './CategoryPage';
import DetailPage from './DetailPage';
import "./index.css"

const URL = "http://localhost:4000/api/products";

export default function ProductsList() {
  const [items, setItems] = useState([])

  useEffect(() => {
    loadData(URL);
  }, [])


  const loadData = (URL) => {
    fetch(URL).then(res => res.json())
      .then(res => {
        setItems(res)
      })
  }
  return (
    <>
      <div className="container">
        <div className="dropdown">
          <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Kategoriler
          </button>
          <ul className="dropdown-menu">
            {items.map((category, i) => (
              <li key={i} ><NavLink className="link-nav" to={`product/${category.name}`}>{category.name}</NavLink>
                <hr />
              </li>
            ))}

          </ul>
        </div>

        {items.map((category, i) => (
          <div className="row category-name" key={i}>
            <a href={`product/${category.name}`} >
            <h2 className='categoryTittle'>{category.name}</h2>
            </a>
            {category.products.map((item, i) => (
              <div className="col-sm-3" key={i}>
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
                    <Link to="/detail" onClick={<DetailPage categoryItem={item} />}>
                      <p

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
      <Footer />
    </>
  )
}
