class SearchResult {
  $searchResult = null;
  $randomResult = null;
  data = null;
  randomData = null;
  onClick = null;

  $intervalID = 0;

  constructor({ $target, initialData, onClick }) {
    this.$searchResult = document.createElement("div");
    this.$searchResult.className = "SearchResult";
    $target.appendChild(this.$searchResult);

    this.$randomResult = document.createElement("div");
    this.$randomResult.className = "RandomBanner";
    $target.appendChild(this.$randomResult);

    this.data = initialData;
    this.onClick = onClick;

    this.render();

    window.addEventListener('scroll', e => {
      const scrollLocation = document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;

      if(scrollLocation >= windowHeight){
        this.data.push();                                         // ????
      }
    });
    this.event();
  }

  setState(nextData, bannerData) {
    this.data = nextData;
    this.randomData = bannerData;
    this.render();
  }

  render() {
    if(this.data !== null && this.data.length > 0){
      this.$searchResult.innerHTML = this.data
        .map(
          cat => `
            <div class="item">
              <img src=${cat.url} alt=${cat.name} />
            </div>
          `
        )
        .join("");
    } else {
      this.$searchResult.innerHTML = "<span>검색 결과가 없습니다.</span>";
    }

    this.$searchResult.querySelectorAll(".item").forEach(($item, index) => {
      $item.addEventListener("click", () => {
        this.onClick(this.data[index]);
      });
    });
  }

  event(){
    // 고양이 이름 노출
    this.$searchResult.addEventListener("mouseover", (e) => {
      const $item = document.querySelector('.item');
      const $itemName = document.createElement('span');
      const name = e.target.getAttribute("alt");
      $itemName.textContent = name;
      $itemName.className = 'item-name';
      console.log($itemName);
      $item.append($itemName);
    });

    this.$searchResult.addEventListener("mouseout", (e) => {
      document.querySelector('.item-name').remove();
    });

    // fade-in
    this.$searchResult.addEventListener("click", (e) => {
      document.querySelector('content-wrapper').classList.toggle('modal');
    });
  }
}
