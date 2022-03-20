class ImageInfo {
  $imageInfo = null;
  data = null;

  constructor({ $target, data }) {
    const $imageInfo = document.createElement("div");
    $imageInfo.className = "ImageInfo";
    this.$imageInfo = $imageInfo;
    $target.appendChild($imageInfo);

    this.data = data;

    this.render();
  }

  setState(nextData) {
    this.data = nextData;
    this.render();
  }

  render() {
    if (this.data.visible) {
      const { name, url, temperament, origin } = this.data.image;

      this.$imageInfo.innerHTML = `
        <div class="content-wrapper modal">
          <div class="title">
            <span>${name}</span>
            <button class="close" type="button">x</button>
          </div>
          <img src="${url}" alt="${name}"/>        
          <div class="description">
            <span>성격: ${temperament}</span>
            <span>태생: ${origin}</span>
          </div>
        </div>`;
      this.$imageInfo.style.display = "block";
    } else {
      this.$imageInfo.style.display = "none";
    }
    // click이벤트
    document.addEventListener('click', e => {
      if(e.target === document.querySelector('.ImageInfo') || e.target === document.querySelector('.close')) {
        this.$imageInfo.style.display = "none"
      }
    });
    // ESC키 이벤트
    document.addEventListener('keydown', e => {
      if(e.keyCode === 27) {
        this.$imageInfo.style.display = "none"
      }
    });
  }
}
