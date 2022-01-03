import React from 'react';

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

const VideoItem = ({ video: { snippet } }) => (
  <li>
    <img src={snippet.thumbnails.medium.url} alt="video thumbnail" />
    <div>
      <p>{snippet.title}</p>
      <p>{snippet.channelTitle}</p>
    </div>
  </li>
);

export default VideoItem;
