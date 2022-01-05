import React from 'react';
import styles from './video_item.module.css';

// const VideoItem = (props) => (
//   <li>
//     <img
//       src={props.video.snippet.thumbnails.medium.url}
//       alt="video thumbnail"
//     />

//     <div>
//       <p>{props.video.snippet.title}</p>
//       <p>{props.video.snippet.channelTitle}</p>
//     </div>
//   </li>
// );

const VideoItem = ({ video, video: { snippet }, onVideoClick }) => (
  <li className={styles.container} onClick={() => onVideoClick(video)}>
    <div className={styles.video}>
      <img
        className={styles.thumbnail}
        src={snippet.thumbnails.medium.url}
        alt="video thumbnail"
      />
      <div className={styles.metadata}>
        <p className={styles.title}>{snippet.title}</p>
        <p className={styles.channel}>{snippet.channelTitle}</p>
      </div>
    </div>
  </li>
);

export default VideoItem;
