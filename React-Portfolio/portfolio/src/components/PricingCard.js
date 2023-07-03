import { Link } from "react-router-dom"
import "./PricingCard.css"

import React from 'react'

const PricingCard = () => {
  return (
    <div className="pricing">
        <div className="cardcontainer">
            <div className="card">
                <h3> -Basci -</h3>
                <span className="bar"></span>
                <p className="btc">$100</p>
                <p> -3Days -</p>
                <p> -3 page -</p>
                <p> -Featured -</p>
                <p> -Responsive Design -</p>
              <Link to="/contact" className="btn">
                PURCHASE NOW
              </Link>
            </div>
            <div className="card">
                <h3> -Premium -</h3>
                <span className="bar"></span>
                <p className="btc">$100</p>
                <p> -5Days -</p>
                <p> -5 page -</p>
                <p> -Featured -</p>
                <p> -Responsive Design -</p>
              <Link to="/contact" className="btn">
                PURCHASE NOW
              </Link>
            </div>
            <div className="card">
                <h3> -Business -</h3>
                <span className="bar"></span>
                <p className="btc">$100</p>
                <p> -10Days -</p>
                <p> -5 page -</p>
                <p> -Featured -</p>
                <p> -Responsive Design -</p>
              <Link to="/contact" className="btn">
                PURCHASE NOW
              </Link>
            </div>
        </div>
    </div>
  )
}

export default PricingCard