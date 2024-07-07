import './Header.scss'

const Header = () => {
    return (
      <header className="header">
        <nav className="nav">
        <div className="logo">
          <img src="src\assets\images\[removal.ai]_d59f5708-8123-42d6-9149-a12fc5f4fc6d-1674623364_gas-kvas-com-p-cheshirskii-kot-konturnii-risunok-1.png" alt="Logo" />
        </div>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#cards">Cards</a></li>
            <li><a href="#dictionary">Dictionary</a></li>
            <li className="dropdown">
                <a href="#contact">Contact</a>
                <div className="dropdown-content">
                <div className="up">
                  <button className="card1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="30px" height="30px" className="instagram">
                      <g transform="scale(8,8)">
                        <path d="M11.46875,5c-3.55078,0-6.46875,2.91406-6.46875,6.46875v9.0625c0,3.55078,2.91406,6.46875,6.46875,6.46875h9.0625c3.55078,0,6.46875-2.91406,6.46875-6.46875v-9.0625c0-3.55078-2.91406-6.46875-6.46875-6.46875zM11.46875,7h9.0625c2.47266,0,4.46875,1.99609,4.46875,4.46875v9.0625c0,2.47266-1.99609,4.46875-4.46875,4.46875h-9.0625c-2.47266,0-4.46875-1.99609-4.46875-4.46875v-9.0625c0-2.47266,1.99609-4.46875,4.46875-4.46875zM21.90625,9.1875c-0.50391,0-0.90625,0.40234-0.90625,0.90625c0,0.50391,0.40234,0.90625,0.90625,0.90625c0.50391,0,0.90625-0.40234,0.90625-0.90625c0-0.50391-0.40234-0.90625-0.90625-0.90625zM16,10c-3.30078,0-6,2.69922-6,6c0,3.30078,2.69922,6,6,6c3.30078,0,6-2.69922,6-6c0-3.30078-2.69922-6-6-6zM16,12c2.22266,0,4,1.77734,4,4c0,2.22266-1.77734,4-4,4c-2.22266,0-4-1.77734-4-4c0-2.22266,1.77734-4,4-4z"></path>
                      </g>
                    </svg>
                  </button>
                  <button className="card2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="30px" height="30px" className="twitter">
                      <path d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"></path>
                    </svg>
                  </button>
                </div>
                <div className="down">
                  <button className="card3">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000" version="1.1" id="Capa_1" width="800px" height="800px" viewBox="0 0 96.875 96.875" xmlSpace="preserve"><g>
                    <path d="M95.201,25.538c-1.186-5.152-5.4-8.953-10.473-9.52c-12.013-1.341-24.172-1.348-36.275-1.341   c-12.105-0.007-24.266,0-36.279,1.341c-5.07,0.567-9.281,4.368-10.467,9.52C0.019,32.875,0,40.884,0,48.438   C0,55.992,0,64,1.688,71.336c1.184,5.151,5.396,8.952,10.469,9.52c12.012,1.342,24.172,1.349,36.277,1.342   c12.107,0.007,24.264,0,36.275-1.342c5.07-0.567,9.285-4.368,10.471-9.52c1.689-7.337,1.695-15.345,1.695-22.898   C96.875,40.884,96.889,32.875,95.201,25.538z M35.936,63.474c0-10.716,0-21.32,0-32.037c10.267,5.357,20.466,10.678,30.798,16.068   C56.434,52.847,46.23,58.136,35.936,63.474z"/></g>
                  </svg>
                  </button>
                  <button className="card4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="800px" height="800px" viewBox="-5.5 0 32 32" version="1.1">
                  <title>facebook</title>
                  <path d="M1.188 5.594h18.438c0.625 0 1.188 0.563 1.188 1.188v18.438c0 0.625-0.563 1.188-1.188 1.188h-18.438c-0.625 0-1.188-0.563-1.188-1.188v-18.438c0-0.625 0.563-1.188 1.188-1.188zM14.781 17.281h2.875l0.125-2.75h-3v-2.031c0-0.781 0.156-1.219 1.156-1.219h1.75l0.063-2.563s-0.781-0.125-1.906-0.125c-2.75 0-3.969 1.719-3.969 3.563v2.375h-2.031v2.75h2.031v7.625h2.906v-7.625z"/>
                  </svg>
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </nav>
        <div className="title">Follow The White Rabbit</div>        
      </header>
    );
  }
  

export default Header;