import React from "react";

export default function PageNotFound() {
  return (
    <>
      <h1
        style={{ marginTop: "30px", textAlign: "center", overflow: "visible" }}
      >
        Oops!
      </h1>
      <p
        style={{
          textAlign: "center",
          marginTop: "10vh",
          fontSize: "10vw",
          fontWeight: 800,
        }}
      >
        4
        <span>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzhv-cYp1YMQNP4Ut4f7RdcCK_clMA9Ta_8Q&usqp=CAU"
            alt="sorry_emoji"
            style={{
              width: "17vw",
              marginBottom: "2vw",
            }}
          />
        </span>
        4
      </p>
      <p style={{ textAlign: "center", fontWeight: 600 }}>
        SORRY, PAGE NOT FOUND
      </p>
    </>
  );
}
