import { useState, ChangeEvent, KeyboardEvent } from 'react';
import './container.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import va from '@vercel/analytics';

function UrlInputContainer() {
  /* allows us to update the variables url and summary */
  const [url, setUrl] = useState(''); // allows us to hold the url
  const [summary, setSummary] = useState(''); // to hold the summary
  const [isLoading, setIsLoading] = useState(false); // load state
  const [errorMessage, setErrorMessage] = useState<string | null>(null); 


  /* updates url */
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  }

  /* enables to users to press 'enter' in order to submit their urls */
  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  }

  /*  operates with APIs so that once URL submits, it summarizes the video */
  const handleSubmit = async () => {
    setIsLoading(true);
    setErrorMessage(null); // reset the error message on each submit
    setSummary(''); // clear the summary before making the API call
    console.log("URL Submitted:", url);
    try {
      const response = await axios.post('https://flasktranscript-c69764339179.herokuapp.com/', { url });
      if (response.data.summary) {
        setSummary(response.data.summary);
        
        // tracks the event when a user successfully receives a summary
        va.track('ReceivedSummary');
      } else {
        setErrorMessage('invalid url or missing youtube transcript.');
      }
    } catch (error) {
      console.error("Error fetching summary:", error);
      setErrorMessage('invalid url or missing youtube transcript.');
    }
    setIsLoading(false);
  }

  return (
    <>
      {isLoading && (
        <div className="loading-spinner"></div>
      )}
      <div className="url-input-container">
        <div className="text-left">
          <div className="lato text-base pb-2">
            url:
          </div>
          <div className="url-input-wrapper poppins text-sm">
            <input
              type="text"
              placeholder="enter url here!"
              value={url}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              className="url-input"
            />
            <button onClick={handleSubmit} className="submit-button">
              <FontAwesomeIcon icon={faCheck} bounce />
            </button>
          </div>
          {errorMessage && (
            <div className="error-box poppins leading-relaxed text-base text-red-800">
              {errorMessage}
            </div>
          )}
          {summary && (
            <>
              <div className="lato text-base pt-3">
                summary:
              </div>
              <div className="summary-box poppins leading-relaxed text-base">
                {summary}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default UrlInputContainer;