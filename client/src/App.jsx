import React from "react";

const App = () => {
  return (
    <div className="container-sm text-white">
      <div className="d-flex flex-column">
        <div className="d-flex" style={{ height: "200px" }}>
          <div className="col border border-black h-75 bg-secondary d-flex align-items-center justify-content-center">
            Sanidad Building 1
          </div>
          <div className="col border border-black h-75 bg-secondary d-flex align-items-center justify-content-center">
            Sanidad Building 2
          </div>
          <div className="col border border-black h-75 bg-secondary d-flex align-items-center justify-content-center">
            Sanidad Building 3
          </div>
          <div className="col border border-black h-75 bg-secondary d-flex align-items-center justify-content-center">
            Sanidad Building 4
          </div>
        </div>
        <div className="d-flex" style={{ height: "100px" }}>
          <div className="col border border h-25 bg-secondary border-black"></div>
          <div className="col border border h-25 bg-secondary border-black"></div>
          <div className="col border border h-25 bg-secondary border-black"></div>
          <div className="col border border h-25 bg-secondary border-black"></div>
        </div>
      </div>
    </div>
  );
};

export default App;
