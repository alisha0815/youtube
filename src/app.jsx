import styles from './app.module.css';
import React, { useEffect, useState } from 'react';
import VideoList from './components/video_list/video_list';
import SearchHeader from './components/search_header/search_header';

function App({ youtube }) {
  const [videos, setvideos] = useState([]);
  const search = (query) => {
    youtube
      .search(query) //
      // .then(console.log);
      .then((videos) => setvideos(videos));
    // const requestOptions = {
    //   method: 'GET',
    //   redirect: 'follow',
    // };
    // fetch(
    //   `https://youtube.googleapis.com/youtube/v3/search?part=snippet&masResults=25&q=${query}&type=video&key=AIzaSyD73d7qyOMwjG3v0L2WiockHPZbXjqOQFk`,
    //   requestOptions
    // )
    //   .then((response) => response.json())
    //   .then((result) =>
    //     result.items.map((item) => ({ ...item, id: item.id.videoId }))
    //   )
    //   .then((items) => setvideos(items))
    //   .catch((error) => console.log('error', error));
  };
  useEffect(() => {
    youtube
      .mostPopular() //
      // .then(console.log);
      .then((videos) => setvideos(videos));
    // const requestOptions = {
    //   method: 'GET',
    //   redirect: 'follow',
    // };
    // fetch(
    //   'https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyD73d7qyOMwjG3v0L2WiockHPZbXjqOQFk',
    //   requestOptions
    // )
    //   .then((response) => response.json())
    //   // .then((result) => console.log('result', result.items))
    //   .then((result) => setvideos(result.items)) //update videos
    //     .catch((error) => console.log('error', error));
  }, []);
  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      <VideoList videos={videos} />
    </div>
  );
}

export default App;
