import React, { useState } from "react";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleDictionResponse(response) {
    setResults(response);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.photos);
  }

  function search() {
    let dictionaryApiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    
    fetch(dictionaryApiUrl)
      .then(response => {
        return response.json()
      })
      .then(data => handleDictionResponse(data[0]))
      .catch(error => console.log('error', error))

    fetch(pexelsApiUrl, {
      headers: {
        // Pexels API_KEY
        Authorization: "oQhYCVb5uPHW6pF025rne794YJV68rWj8R5GugTuGqd8iCZpSer1UVKv"
      }
    })
      .then(resp => {
        return resp.json()
      })
      .then(data => {
        handlePexelsResponse(data);
      }).catch((error) => console.log(error));
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h1>What word do you want to look up?</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              onChange={handleKeywordChange}
              defaultValue={props.defaultKeyword}
            />
          </form>
          <div className="hint">
            suggested words: sunset, wine, yoga, plant...
          </div>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}