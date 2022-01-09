import React from "react";

function Download() {
  return (
    <button
      className="Dbuton"
      onClick={() => {
        window.open(
          "https://play.google.com/store/apps/details?id=narkreeta.sayo",
          "_blank"
        );
      }}
      style={{
        fontFamily: "Staatliches",
        letterSpacing: 2,
        borderColor: "#ff9900",
        borderRadius: 20,
      }}
    >
      Download
    </button>
  );
}

export default Download;
