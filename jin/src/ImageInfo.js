const ESC_CODE = 27;
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
        <div class="content-wrapper">
          <div class="title">
            <strong>${name}</strong>
            <button type="button" class="close" aria-label="닫기">x</button>
          </div>
          <img src="${url}" alt="${name}"/>
          <div class="description">
            <span>성격: ${temperament}</span>
            <span>태생: ${origin}</span>
          </div>
        </div>`;
      this.$imageInfo.style.display = "block";
      this.setEvent();
    } else {
      this.$imageInfo.style.display = "none";
    }
  }

  setEvent() {
    document.addEventListener('click', (e) => {
      if(e.target === document.querySelector('.ImageInfo') || e.target === document.querySelector('.close')) {
        this.$imageInfo.style.display = "none";
      }
    });

    document.addEventListener('keydown', (e) => {
      if(e.keyCode === ESC_CODE) {
        this.$imageInfo.style.display = "none";
      }
    })
  }
}
