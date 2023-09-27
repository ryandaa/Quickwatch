import { Analytics } from '@vercel/analytics/react';
import './App.css'
import TopBar from "./components/topbar/TopBar";
import InfoContainer from "./components/introduction/InfoContainer";
import UrlInputContainer from "./components/urlsummary/container";
import BottomBar from "./components/bottombar/BottomBar";


function App() {
  return ( 
  <div className="app">
      <TopBar />
      <div className="body">
        <div className="main-content">
          <InfoContainer />
          <UrlInputContainer />
          </div>
          <div className="svg-container">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#ff0000" fill-opacity="0.95" d="M0,224L30,234.7C60,245,120,267,180,272C240,277,300,267,360,256C420,245,480,235,540,240C600,245,660,267,720,272C780,277,840,267,900,240C960,213,1020,171,1080,181.3C1140,192,1200,256,1260,245.3C1320,235,1380,149,1410,106.7L1440,64L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z">
              </path>
              </svg>
          </div>
          <BottomBar />
          <Analytics />
      </div>
  </div>
  );
}

export default App;