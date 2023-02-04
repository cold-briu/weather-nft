import { config } from './config';
import { Minter, withLocation, WalletWrapper, withWeather, withDallE } from './containers';

function App() {
  const Composed = withLocation(
    withWeather(
      withDallE(
        Minter
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
              <h1 className="display-6 fw-bolder" >🌥 weather nft 🌥</h1>
              <h6 className="lead">🐶 by sandusky.eth ❤️</h6>
              <p>This was deployed on the ArbitrumGoerli tesnet</p>
              <div className="d-flex flex-row justify-content-evenly">
                <a href="https://faucet.triangleplatform.com/arbitrum/goerli" target="_blank" className="btn btn-outline-secondary btn-sm">
                  Facucet
                </a>
                <a href={`https://goerli.arbiscan.io/address/${config.alchemy.contractAddress}`} target="_blank" className="btn btn-outline-secondary btn-sm">
                  Contract
                </a>

              </div>
              <hr />
              <WalletWrapper>
                <Composed />
              </WalletWrapper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
