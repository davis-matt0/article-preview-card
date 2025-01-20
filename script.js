const articleInfo = document.querySelector(".article-info");
const shareBtn = document.querySelector(".share-btn");

shareBtn.addEventListener("click", function () {
  articleInfo.classList.toggle("share-options");
  articleInfo.innerHTML = `
        <p class="share-text">SHARE</p>
        <a href="" class="share-link">
            <img 
                src="./images/icon-facebook.svg" 
                alt="facebook share button"
                class="share-link-img">
        </a>
        <a href="" class="share-link">
            <img 
                src="./images/icon-twitter.svg" 
                alt="twitter share button"
                class="share-link-img">
        </a>
        <a href="" class="share-link">
            <img 
                src="./images/icon-pinterest.svg" 
                alt="pinterest share button"
                class="share-link-img">
        </a>
        <a href="" class="share-btn share-btn-dark">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13">
              <path
                fill="currentColor"
                d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"
              />
            </svg>
          </a>

    `;
  articleInfo.style.gap = "1em";
});
