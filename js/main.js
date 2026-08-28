/* =========================================================
   ART ROOM
   Main JavaScript
========================================================= */


/* =========================================================
   Artwork Data
========================================================= */

const artworks = [

  {
    id: "animation01",
    title: "Animation 01",
    category: "ANIMATION",
    type: "video",
    src: "images/animation01.mp4",
    width: 330,
    x: 8,
    y: 16,
    description: "作品についての説明をここに書きます。"
  },

  {
    id: "animation02",
    title: "Animation 02",
    category: "ANIMATION",
    type: "video",
    src: "images/animation02.mp4",
    width: 280,
    x: 58,
    y: 10,
    description: "作品についての説明をここに書きます。"
  },

  {
    id: "animation03",
    title: "Animation 03",
    category: "ANIMATION",
    type: "video",
    src: "images/animation03.mp4",
    width: 300,
    x: 30,
    y: 8,
    description: "作品についての説明をここに書きます。"
  },

  {
    id: "animation04",
    title: "Animation 04",
    category: "ANIMATION",
    type: "video",
    src: "images/animation04.mp4",
    width: 260,
    x: 75,
    y: 42,
    description: "作品についての説明をここに書きます。"
  },

  {
    id: "animation05",
    title: "Animation 05",
    category: "ANIMATION",
    type: "video",
    src: "images/animation05.mp4",
    width: 340,
    x: 10,
    y: 58,
    description: "作品についての説明をここに書きます。"
  },

  {
    id: "animation06",
    title: "Animation 06",
    category: "ANIMATION",
    type: "video",
    src: "images/animation06.mp4",
    width: 290,
    x: 52,
    y: 58,
    description: "作品についての説明をここに書きます。"
  },

  {
    id: "animation07",
    title: "Animation 07",
    category: "ANIMATION",
    type: "video",
    src: "images/animation07.mp4",
    width: 250,
    x: 80,
    y: 70,
    description: "作品についての説明をここに書きます。"
  },

  {
    id: "animation08",
    title: "Animation 08",
    category: "ANIMATION",
    type: "video",
    src: "images/animation08.mp4",
    width: 310,
    x: 25,
    y: 35,
    description: "作品についての説明をここに書きます。"
  },

  {
    id: "animation09",
    title: "Animation 09",
    category: "ANIMATION",
    type: "video",
    src: "images/animation09.mp4",
    width: 270,
    x: 67,
    y: 27,
    description: "作品についての説明をここに書きます。"
  },

  {
    id: "animation10",
    title: "Animation 10",
    category: "ANIMATION",
    type: "video",
    src: "images/animation10.mp4",
    width: 320,
    x: 5,
    y: 78,
    description: "作品についての説明をここに書きます。"
  },

  {
    id: "animation11",
    title: "Animation 11",
    category: "ANIMATION",
    type: "video",
    src: "images/animation11.mp4",
    width: 280,
    x: 42,
    y: 75,
    description: "作品についての説明をここに書きます。"
  },

  {
    id: "animation12",
    title: "Animation 12",
    category: "ANIMATION",
    type: "video",
    src: "images/animation12.mp4",
    width: 300,
    x: 70,
    y: 82,
    description: "作品についての説明をここに書きます。"
  },

  {
    id: "animation13",
    title: "Animation 13",
    category: "ANIMATION",
    type: "video",
    src: "images/animation13.mp4",
    width: 250,
    x: 15,
    y: 30,
    description: "作品についての説明をここに書きます。"
  },

  {
    id: "animation14",
    title: "Animation 14",
    category: "ANIMATION",
    type: "video",
    src: "images/animation14.mp4",
    width: 290,
    x: 47,
    y: 24,
    description: "作品についての説明をここに書きます。"
  },

  {
    id: "animation15",
    title: "Animation 15",
    category: "ANIMATION",
    type: "video",
    src: "images/animation15.mp4",
    width: 310,
    x: 85,
    y: 20,
    description: "作品についての説明をここに書きます。"
  },

  {
    id: "animation16",
    title: "Animation 16",
    category: "ANIMATION",
    type: "video",
    src: "images/animation16.mp4",
    width: 260,
    x: 35,
    y: 85,
    description: "作品についての説明をここに書きます。"
  },

  {
    id: "animation17",
    title: "Animation 17",
    category: "ANIMATION",
    type: "video",
    src: "images/animation17.mp4",
    width: 280,
    x: 62,
    y: 35,
    description: "作品についての説明をここに書きます。"
  },

  {
    id: "animation18",
    title: "Animation 18",
    category: "ANIMATION",
    type: "video",
    src: "images/animation18.mp4",
    width: 300,
    x: 20,
    y: 70,
    description: "作品についての説明をここに書きます。"
  },

  {
    id: "animation19",
    title: "Animation 19",
    category: "ANIMATION",
    type: "video",
    src: "images/animation19.mp4",
    width: 270,
    x: 78,
    y: 55,
    description: "作品についての説明をここに書きます。"
  },

  {
    id: "animation20",
    title: "Animation 20",
    category: "ANIMATION",
    type: "video",
    src: "images/animation20.mp4",
    width: 320,
    x: 40,
    y: 45,
    description: "作品についての説明をここに書きます。"
  },

  {
    id: "studies",
    title: "Studies",
    category: "STUDIES",
    type: "video",
    src: "images/studies.mp4",
    width: 380,
    x: 28,
    y: 65,
    description:
      "アニメーションの一カットのクロッキーや模写など、制作の過程で行った練習をまとめたものです。"
  },

  {
    id: "illustration01",
    title: "Illustration",
    category: "ILLUSTRATION",
    type: "image",
    src: "images/illustration01.png",
    width: 260,
    x: 88,
    y: 65,
    description:
      "イラストレーション作品です。"
  }

];


/* =========================================================
   DOM
========================================================= */

const artSpace = document.getElementById("art-space");

const modal = document.getElementById("work-modal");
const modalMedia = document.getElementById("modal-media");
const modalCategory = document.getElementById("modal-category");
const modalTitle = document.getElementById("modal-title");
const modalMeta = document.getElementById("modal-meta");
const modalDescription = document.getElementById("modal-description");
const modalClose = document.getElementById("modal-close");

const videoControls = document.getElementById("video-controls");
const videoPlay = document.getElementById("video-play");
const videoProgress = document.getElementById("video-progress");
const videoMute = document.getElementById("video-mute");
const videoFullscreen = document.getElementById("video-fullscreen");


/* =========================================================
   State
========================================================= */

let editMode = false;

let activeArtwork = null;
let selectedArtwork = null;

let pointerOffsetX = 0;
let pointerOffsetY = 0;

let resizing = false;

let resizeStartX = 0;
let resizeStartWidth = 0;

let currentModalVideo = null;


/* =========================================================
   Utility
========================================================= */

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}


/* =========================================================
   Inline Video
========================================================= */

/*
  一覧動画は「全部同時に強制ロード」しません。

  作品を作った順番に少しずつ読み込ませます。

  これによって20本以上の動画がある場合でも、
  ブラウザに一気に負荷をかけないようにします。
*/

function prepareInlineVideo(video) {

  if (!video)
    return;


  video.autoplay = true;
  video.loop = true;
  video.muted = true;
  video.defaultMuted = true;
  video.playsInline = true;

  video.preload = "metadata";

  video.setAttribute("autoplay", "");
  video.setAttribute("muted", "");
  video.setAttribute("loop", "");
  video.setAttribute("playsinline", "");


  /*
    再生処理
  */

  function playVideo() {

    if (!video.isConnected)
      return;

    video.muted = true;

    if (!video.paused)
      return;

    const promise = video.play();

    if (promise) {

      promise.catch(() => {
        /*
          ここでは何もしない。

          次のタイミングで再試行する。
        */
      });

    }

  }


  /*
    動画が読み込めたら再生
  */

  video.addEventListener(
    "loadeddata",
    playVideo
  );

  video.addEventListener(
    "canplay",
    playVideo
  );


  /*
    念のため定期的に再生を確認
  */

  video._artRoomPlayTimer =
    setInterval(
      () => {

        if (
          video.isConnected &&
          video.paused
        ) {

          playVideo();

        }

      },
      1500
    );


  /*
    src設定後、読み込みを開始
  */

  video.load();

}


/* =========================================================
   Create Artwork
========================================================= */

function createArtwork(data) {

  const artwork =
    document.createElement("div");

  artwork.className =
    "artwork";

  artwork.dataset.id =
    data.id;

  artwork.dataset.width =
    data.width;

  artwork.style.left =
    `${data.x}%`;

  artwork.style.top =
    `${data.y}%`;

  artwork.style.width =
    `${data.width}px`;


  /* -----------------------------------------
     Frame
  ----------------------------------------- */

  const frame =
    document.createElement("div");

  frame.className =
    "artwork-frame";


  /* -----------------------------------------
     Media
  ----------------------------------------- */

  let media;


  if (data.type === "video") {

    media =
      document.createElement("video");

    /*
      srcより前に自動再生関連を設定
    */

    media.autoplay = true;
    media.loop = true;
    media.muted = true;
    media.defaultMuted = true;
    media.playsInline = true;

    media.preload = "metadata";

  }

  else {

    media =
      document.createElement("img");

  }


  media.src =
    data.src;

  media.alt =
    data.title;


  /* -----------------------------------------
     Error
  ----------------------------------------- */

  media.addEventListener(
    "error",
    () => {

      /*
        エラーを大量に画面へ表示しない。
      */

      console.warn(
        "Artwork media could not be loaded:",
        data.src
      );

    }
  );


  frame.appendChild(
    media
  );


  /* -----------------------------------------
     Resize Handle
  ----------------------------------------- */

  const resizeHandle =
    document.createElement("div");

  resizeHandle.className =
    "resize-handle";

  resizeHandle.dataset.id =
    data.id;

  frame.appendChild(
    resizeHandle
  );


  artwork.appendChild(
    frame
  );

  artSpace.appendChild(
    artwork
  );


  /* -----------------------------------------
     Start Video
  ----------------------------------------- */

  if (
    data.type === "video"
  ) {

    /*
      作品を作るたびに少し待つ。

      0, 250, 500, 750...
      のように読み込みを分散。
    */

    const index =
      artworks.indexOf(data);

    setTimeout(
      () => {

        prepareInlineVideo(
          media
        );

      },
      index * 250
    );

  }


  /* =================================================
     Aspect Ratio
  ================================================= */

  if (
    data.type === "video"
  ) {

    media.addEventListener(
      "loadedmetadata",
      () => {

        if (
          media.videoWidth &&
          media.videoHeight
        ) {

          artwork.dataset.ratio =
            media.videoHeight /
            media.videoWidth;

        }

      }
    );

  }

  else {

    media.addEventListener(
      "load",
      () => {

        if (
          media.naturalWidth &&
          media.naturalHeight
        ) {

          artwork.dataset.ratio =
            media.naturalHeight /
            media.naturalWidth;

        }

      }
    );

  }


  /* =================================================
     Drag
  ================================================= */

  artwork.addEventListener(
    "pointerdown",
    (event) => {

      if (!editMode)
        return;

      if (
        event.target.classList.contains(
          "resize-handle"
        )
      ) {

        return;

      }


      event.preventDefault();

      selectedArtwork =
        artwork;

      activeArtwork =
        artwork;


      const rect =
        artwork.getBoundingClientRect();


      pointerOffsetX =
        event.clientX -
        rect.left;

      pointerOffsetY =
        event.clientY -
        rect.top;


      artwork.setPointerCapture(
        event.pointerId
      );

    }
  );


  artwork.addEventListener(
    "pointermove",
    (event) => {

      if (
        !editMode ||
        activeArtwork !== artwork ||
        resizing
      ) {

        return;

      }


      const roomRect =
        artSpace.getBoundingClientRect();


      let x =
        event.clientX -
        roomRect.left -
        pointerOffsetX;


      let y =
        event.clientY -
        roomRect.top -
        pointerOffsetY;


      const maxX =
        Math.max(
          0,
          roomRect.width -
          artwork.offsetWidth
        );


      const maxY =
        Math.max(
          0,
          roomRect.height -
          artwork.offsetHeight
        );


      x =
        clamp(
          x,
          0,
          maxX
        );

      y =
        clamp(
          y,
          0,
          maxY
        );


      artwork.style.left =
        `${x}px`;

      artwork.style.top =
        `${y}px`;

    }
  );


  artwork.addEventListener(
    "pointerup",
    () => {

      activeArtwork =
        null;

    }
  );


  artwork.addEventListener(
    "pointercancel",
    () => {

      activeArtwork =
        null;

    }
  );


  /* =================================================
     Resize
  ================================================= */

  resizeHandle.addEventListener(
    "pointerdown",
    (event) => {

      if (!editMode)
        return;

      event.preventDefault();

      event.stopPropagation();


      resizing = true;

      selectedArtwork =
        artwork;


      resizeStartX =
        event.clientX;

      resizeStartWidth =
        artwork.offsetWidth;


      resizeHandle.setPointerCapture(
        event.pointerId
      );

    }
  );


  resizeHandle.addEventListener(
    "pointermove",
    (event) => {

      if (
        !editMode ||
        !resizing ||
        selectedArtwork !== artwork
      ) {

        return;

      }


      const dx =
        event.clientX -
        resizeStartX;


      let newWidth =
        resizeStartWidth +
        dx;


      newWidth =
        clamp(
          newWidth,
          80,
          700
        );


      artwork.style.width =
        `${newWidth}px`;

    }
  );


  resizeHandle.addEventListener(
    "pointerup",
    () => {

      resizing = false;

    }
  );


  resizeHandle.addEventListener(
    "pointercancel",
    () => {

      resizing = false;

    }
  );


  /* =================================================
     Click
  ================================================= */

  artwork.addEventListener(
    "click",
    (event) => {

      if (editMode)
        return;


      if (
        event.target.classList.contains(
          "resize-handle"
        )
      ) {

        return;

      }


      openModal(
        data
      );

    }
  );


  return artwork;

}


/* =========================================================
   Initialize
========================================================= */

function initializeArtworks() {

  artworks.forEach(
    data => {

      createArtwork(
        data
      );

    }
  );

}


/* =========================================================
   Edit Mode
========================================================= */

function setEditMode(value) {

  editMode =
    value;

  document.body.classList.toggle(
    "edit-mode",
    editMode
  );


  if (!editMode) {

    activeArtwork =
      null;

    selectedArtwork =
      null;

    resizing =
      false;

  }

}


/* =========================================================
   Save Layout
========================================================= */

function saveLayout() {

  const savedLayout = {};


  document
    .querySelectorAll(
      ".artwork"
    )
    .forEach(
      artwork => {

        const rect =
          artwork.getBoundingClientRect();

        const roomRect =
          artSpace.getBoundingClientRect();


        savedLayout[
          artwork.dataset.id
        ] = {

          x:
            rect.left -
            roomRect.left,

          y:
            rect.top -
            roomRect.top,

          width:
            artwork.offsetWidth

        };

      }
    );


  localStorage.setItem(
    "artRoomLayout",
    JSON.stringify(
      savedLayout
    )
  );


  alert(
    "配置を保存しました。"
  );

}


/* =========================================================
   Load Layout
========================================================= */

function loadLayout() {

  const saved =
    localStorage.getItem(
      "artRoomLayout"
    );


  if (!saved)
    return;


  let layout;


  try {

    layout =
      JSON.parse(
        saved
      );

  }

  catch {

    return;

  }


  document
    .querySelectorAll(
      ".artwork"
    )
    .forEach(
      artwork => {

        const data =
          layout[
            artwork.dataset.id
          ];


        if (!data)
          return;


        artwork.style.left =
          `${data.x}px`;

        artwork.style.top =
          `${data.y}px`;

        artwork.style.width =
          `${data.width}px`;

      }
    );

}


/* =========================================================
   Modal
========================================================= */

function openModal(data) {

  modalMedia.innerHTML =
    "";


  let media;


  if (
    data.type === "video"
  ) {

    media =
      document.createElement(
        "video"
      );

    media.src =
      data.src;

    media.autoplay =
      true;

    media.loop =
      true;

    media.playsInline =
      true;

    media.controls =
      false;

    media.muted =
      false;

    media.volume =
      1;

    media.setAttribute(
      "playsinline",
      "");


  }

  else {

    media =
      document.createElement(
        "img"
      );

    media.src =
      data.src;

    media.alt =
      data.title;

  }


  modalMedia.appendChild(
    media
  );


  modalCategory.textContent =
    data.category;

  modalTitle.textContent =
    data.title;

  modalMeta.textContent =
    data.type === "video"
      ? "Animation"
      : "Illustration";

  modalDescription.textContent =
    data.description;


  /* -----------------------------------------
     Controls
  ----------------------------------------- */

  if (
    data.type === "video" &&
    videoControls
  ) {

    videoControls.hidden =
      false;

    setupModalVideo(
      media
    );

  }

  else if (
    videoControls
  ) {

    videoControls.hidden =
      true;

  }


  modal.classList.add(
    "is-open"
  );

  modal.setAttribute(
    "aria-hidden",
    "false"
  );


  document.body.style.overflow =
    "hidden";


  if (
    data.type === "video"
  ) {

    media.play().catch(
      () => {}
    );

  }

}


/* =========================================================
   Modal Video Controls
========================================================= */

function setupModalVideo(video) {

  currentModalVideo =
    video;


  videoPlay.textContent =
    video.paused
      ? "▶"
      : "Ⅱ";


  videoPlay.onclick =
    () => {

      if (
        video.paused
      ) {

        video.play().catch(
          () => {}
        );

      }

      else {

        video.pause();

      }

    };


  video.addEventListener(
    "play",
    () => {

      videoPlay.textContent =
        "Ⅱ";

    }
  );


  video.addEventListener(
    "pause",
    () => {

      videoPlay.textContent =
        "▶";

    }
  );


  /* -----------------------------------------
     Progress
  ----------------------------------------- */

  videoProgress.value =
    0;


  video.addEventListener(
    "timeupdate",
    () => {

      if (
        !video.duration
      )
        return;


      videoProgress.value =
        (
          video.currentTime /
          video.duration
        ) * 100;

    }
  );


  videoProgress.oninput =
    () => {

      if (
        !video.duration
      )
        return;


      video.currentTime =
        (
          Number(
            videoProgress.value
          ) /
          100
        ) *
        video.duration;

    };


  /* -----------------------------------------
     Mute
  ----------------------------------------- */

  videoMute.textContent =
    video.muted
      ? "🔇"
      : "🔊";


  videoMute.onclick =
    () => {

      video.muted =
        !video.muted;

      videoMute.textContent =
        video.muted
          ? "🔇"
          : "🔊";

    };


  /* -----------------------------------------
     Fullscreen
  ----------------------------------------- */

  videoFullscreen.onclick =
    () => {

      if (
        video.requestFullscreen
      ) {

        video.requestFullscreen();

      }

    };

}


/* =========================================================
   Close Modal
========================================================= */

function closeModal() {

  if (
    currentModalVideo
  ) {

    currentModalVideo.pause();

    currentModalVideo =
      null;

  }


  modal.classList.remove(
    "is-open"
  );

  modal.setAttribute(
    "aria-hidden",
    "true"
  );


  modalMedia.innerHTML =
    "";


  if (videoControls) {

    videoControls.hidden =
      true;

  }


  document.body.style.overflow =
    "";

}


/* =========================================================
   Modal Events
========================================================= */

modalClose.addEventListener(
  "click",
  closeModal
);


document
  .querySelector(
    ".modal-backdrop"
  )
  .addEventListener(
    "click",
    closeModal
  );


/* =========================================================
   Keyboard
========================================================= */

document.addEventListener(
  "keydown",
  (event) => {

    if (
      event.key === "Escape"
    ) {

      if (
        modal.classList.contains(
          "is-open"
        )
      ) {

        closeModal();

        return;

      }


      if (editMode) {

        setEditMode(
          false
        );

      }

    }


    if (
      event.key.toLowerCase() === "e"
    ) {

      if (
        modal.classList.contains(
          "is-open"
        )
      ) {

        return;

      }

      setEditMode(
        !editMode
      );

    }


    if (
      event.key.toLowerCase() === "s"
    ) {

      if (editMode) {

        event.preventDefault();

        saveLayout();

      }

    }

  }
);


/* =========================================================
   Start
========================================================= */

initializeArtworks();

loadLayout();
