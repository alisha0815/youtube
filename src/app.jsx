import styles from './app.module.css';
import React, { useEffect, useState } from 'react';
import VideoList from './components/video_list/video_list';
import SearchHeader from './components/search_header/search_header';

function App({ youtube }) {
  const [videos, setvideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const selectVideo = (video) => setSelectedVideo(video);
  const search = (query) => {
    youtube
      .search(query) //
      // .then(console.log);
      .then((videos) => setvideos(videos));
  };
  useEffect(() => {
    youtube
      .mostPopular() //
      // .then(console.log);
      .then((videos) => setvideos(videos));
  }, []);
  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      {selectedVideo && <videoDetail video={selectedVideo} />}
      <VideoList videos={videos} />
    </div>
  );
}

export default App;
