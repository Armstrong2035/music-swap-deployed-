// import React, { useState, useEffect } from "react";

// function SearchSongs({ accessToken, albumDetails }) {
//   const [queries, setQueries] = useState([]);

//   //   useEffect(() => {
//   //     const fetchYouTubeData = async () => {
//   //       const newQueries = [];

//   //       for (const album of albumDetails) {
//   //         for (const track of album.tracks) {
//   //           const response = await fetch(
//   //             `https://www.googleapis.com/youtube/v3/search?key=AIzaSyDFmaNtVlA__pYH6higfqR9TdSZf7WuYVo&q=${track}&type=video&part=snippet`
//   //           );
//   //           const data = await response.json();
//   //           console.log(data);
//   //           //   newQueries.push(data.items[0].id.videoId);
//   //           //   console.log(data);
//   //         }
//   //       }

//   //       //   setQueries(newQueries);
//   //     };

//   //     fetchYouTubeData();
//   //   }, [albumDetails]); // Empty dependency array ensures this effect runs only once after the initial render

//   console.log(queries);

//   return <></>;
// }

// export default SearchSongs;
