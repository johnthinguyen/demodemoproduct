import React from 'react'

export default function Product() {
  return (
    <div>
         
      <div className="row">
        <div className="col-8">
          <img
            style={{
              height: "383px",
              width: "689px",
              left: "102px",
              top: "46px",
              borderRadius: "0px",
            }}
            src="../../../public/img/img5.png"
            alt=""
          />
        </div>
        <div className="col-4">
            <h1> Product Name</h1>
            <p>Product Design</p>
            <button style={{padding:20,background:'yellow'}}>Buy Now</button>
        </div>
      </div>
    </div>
  )
}
