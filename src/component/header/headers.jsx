import React, { Fragment } from "react";
export default function Headers() {
  return (
    <Fragment>
      <div
        className="d-flex justify-content-between "
        style={{
          background: "black",
          height: 100,
          width: "1280",
          left: 0,
          top: 0,
        }}
      >
        <div>
          <img src="../../../public/img/img3.png" alt="" />
        </div>
        <div>
          <div className="d-flex justify-content-between">
            {/* <FontAwesomeIcon icon="fa-sharp fa-light fa-magnifying-glass" /> */}
            <div
              style={{
                height: "36px",
                width: "98px",
                left: "38px",
                top: "0px",
                borderRadius: "nullpx",
                color:'white'
              }}
            >
               
            <a style={{textAlign:'center',textDecoration:'none',color:'white',marginRight:'10'}} href="">Login</a>
            <a style={{textAlign:'center',textDecoration:'none',color:'white'}} href="">Register</a>
            
            </div>
    
        
          </div>
          
        </div>
      </div>
      <div className="d-flex">
        <a
          style={{ margin: 15, textDecoration: "none", color: "black" }}
          href=""
        >
          Home
        </a>
        <a
          style={{ margin: 15, textDecoration: "none", color: "black" }}
          href=""
        >
          Men
        </a>
        <a
          style={{ margin: 15, textDecoration: "none", color: "black" }}
          href=""
        >
          Woman
        </a>
        <a
          style={{ margin: 15, textDecoration: "none", color: "black" }}
          href=""
        >
          Kid
        </a>
        <a
          style={{ margin: 15, textDecoration: "none", color: "black" }}
          href=""
        >
          Sport
        </a>
      </div>
    </Fragment>
  );
}
