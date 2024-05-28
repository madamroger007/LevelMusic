// const API_KEY = "AIzaSyCMI1sqApUFuWWTqdpU-wXD0yE44qP8sgY";
// const CHANNEL_ID = "UCwFAYmVtdvE1GhALotlLWXg";

// async function fetchAllVideos() {
//   const url = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=50`;
//   const response = await fetch(url, {
//     method: "GET",
//     headers: {
//       Accept: "application/json",
//     },
//   });
//   const data = await response.json();

//   return data;
// }

// function CardVideo(video) {
//   const videoId = video.id.videoId;
//   const title = video.snippet.title;
//   const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/0.jpg`;
//   const videoUrl = `https://youtu.be/${videoId}`;

//   return `
//       <div class="col-12 col-md-4 mb-3">
//         <div class="thumbnail-container">
//           <a href="${videoUrl}" target="_blank">
//             <img src="${thumbnailUrl}" alt="Thumbnail Video" class="thumbnail-img" />
//             <div class="thumbnail-overlay">
//               <div class="overlay-text">
//                 <b>${title}</b> <br />
//                 Klik untuk memutar
//               </div>
//             </div>
//           </a>
//           <div class="video-info">
//             <div class="video-title">${title}</div>
//             <div class="viewers">1000 viewers</div>
//           </div>
//         </div>
//       </div>
//     `;
// }

// async function renderComponent() {
//   const videos = await fetchAllVideos();
//   const cardAllVideo = document.querySelector("#CardAllVideo");
//   console.log(videos);
// //   cardAllVideo.innerHTML = "";
// //   videos.item.forEach((video) => {
// //     const videoElement = CardVideo(video);
// //     CardAllVideo.innerHTML += videoElement;
// //   });
// }

// // window.addEventListener("DOMContentLoaded", () => {
// //   renderComponent();
// //   console.log("jalankan");
// // });

// fitur testimoni
