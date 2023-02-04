import { Minter, withLocation, withWallet } from './containers';
import { withDallE } from './containers/withDallE';
import withWeather from './containers/withWeather';

function App() {
  const Composed = withLocation(
    withWallet(
      withWeather(
        withDallE(
          Minter
        )
      )
    )
  )
  return (
    <>
      <div className="container text-light mt-4">
        <div className="row">
          <div className="col-2 col-md-3"></div>
          <div className="col-8 col-md-6">
            <div className="d-flex flex-column">
              <h1 className="fw-bolder" >🌥 weather nft 🌥</h1>
              <h6>🌊 by sandusky.eth</h6>
              <hr />
              {
                <Composed />
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
