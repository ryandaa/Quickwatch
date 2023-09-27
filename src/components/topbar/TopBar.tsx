
import './TopBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

function TopBar() {
    return (
        <div className="topbar"> 
            <div className="icon-container">
                <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="youtube-icon"> <FontAwesomeIcon icon={faYoutube} style={{color: "#FFFFFF"}} />
                </a>
            </div>
            <div className="title">
                <p className="text-4xl">
                    quickwatch
                </p>
            </div>
        </div>
    );
}

export default TopBar;