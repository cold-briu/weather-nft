import React from 'react';
import { Weather } from './containers';


function App() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-2 col-md-3"></div>
          <div className="col-8 col-md-6">


            <div className="d-flex flex-column">

              <h1>weather nft</h1>
              <h6>made w/ love by sandusky.eth</h6>
              <button className="btn btn-info">
                Mint
              </button>
              <hr />
              <Weather />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
