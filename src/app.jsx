import styles from './app.module.css';
import React, { useEffect, useState } from 'react';
import VideoList from './components/video_list/video_list';
import SearchHeader from './components/search_header/search_header';

function App() {
  const [videos, setvideos] = useState([]);
  useEffect(() => {
    console.log('useEffect');
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      'https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyD73d7qyOMwjG3v0L2WiockHPZbXjqOQFk',
      requestOptions
    )
      .then((response) => response.json())
      // .then((result) => console.log('result', result.items))
      .then((result) => setvideos(result.items)) //update videos
      .catch((error) => console.log('error', error));
  }, []);
  return (
    <div className={styles.app}>
      <SearchHeader />
      <VideoList videos={videos} />
    </div>
  );
}

export default App;
