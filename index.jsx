import * as React from "react";

function MyComponent() {
  return (
    <>
      <div className="div">
        <div className="div-2">
          <img
            loading="lazy"
            srcSet="..."
            className="img"
          />
          <div className="div-3">Welcome to BoardX!</div>
          <div className="div-4">Email</div>
          <div className="div-5">
            <div className="div-6">Password</div>
            <img
              loading="lazy"
              srcSet="..."
              className="img-2"
            />
          </div>
          <div className="div-7">Log In </div>
          <div className="div-8">Forgot Password</div>
        </div>
      </div>
      <style jsx>{`
        .div {
          background-color: #000;
          display: flex;
          align-items: center;
          font-size: 20px;
          color: #fff;
          font-weight: 600;
          justify-content: center;
          padding: 80px 60px;
        }
        @media (max-width: 991px) {
          .div {
            padding: 0 20px;
          }
        }
        .div-2 {
          border-radius: 15px;
          border-color: rgba(39, 34, 34, 1);
          border-style: solid;
          border-width: 1px;
          background-color: #0e0e0e;
          display: flex;
          margin-top: 197px;
          width: 599px;
          max-width: 100%;
          flex-direction: column;
          padding: 37px 51px 63px;
        }
        @media (max-width: 991px) {
          .div-2 {
            margin-top: 40px;
            padding: 0 20px;
          }
        }
        .img {
          aspect-ratio: 1.27;
          object-fit: auto;
          object-position: center;
          width: 100px;
          align-self: center;
          max-width: 100%;
        }
        .div-3 {
          font-family: Inter, sans-serif;
          font-weight: 700;
          margin-top: 11px;
        }
        @media (max-width: 991px) {
          .div-3 {
            max-width: 100%;
          }
        }
        .div-4 {
          font-family: Inter, sans-serif;
          border-radius: 10px;
          border-color: rgba(57, 57, 57, 1);
          border-style: solid;
          border-width: 1px;
          background-color: #000;
          margin-top: 30px;
          color: #8f8f8f;
          white-space: nowrap;
          justify-content: center;
          padding: 13px 0;
        }
        @media (max-width: 991px) {
          .div-4 {
            max-width: 100%;
            white-space: initial;
          }
        }
        .div-5 {
          border-radius: 10px;
          border-color: rgba(57, 57, 57, 1);
          border-style: solid;
          border-width: 1px;
          background-color: #000;
          display: flex;
          margin-top: 23px;
          align-items: center;
          gap: 20px;
          color: #8f8f8f;
          white-space: nowrap;
          justify-content: space-between;
          padding: 0 7px;
        }
        @media (max-width: 991px) {
          .div-5 {
            max-width: 100%;
            flex-wrap: wrap;
            white-space: initial;
          }
        }
        .div-6 {
          font-family: Inter, sans-serif;
          align-self: stretch;
          margin: auto 0;
        }
        .img-2 {
          aspect-ratio: 1.02;
          object-fit: auto;
          object-position: center;
          width: 45px;
          align-self: stretch;
          margin: auto 0;
        }
        .div-7 {
          border-radius: 10px;
          border-color: rgba(251, 66, 121, 1);
          border-style: solid;
          border-width: 1px;
          background-color: #fb4279;
          margin-top: 31px;
          align-items: center;
          text-align: center;
          padding: 16px 60px 8px;
          font: 17px Inter, sans-serif;
        }
        @media (max-width: 991px) {
          .div-7 {
            max-width: 100%;
            padding: 0 20px;
          }
        }
        .div-8 {
          color: #ff8fb1;
          text-align: center;
          align-self: center;
          margin-top: 36px;
          font: 17px Inter, sans-serif;
        }
      `}</style>
    </>
  );
}



