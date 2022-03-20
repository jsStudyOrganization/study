const TEMPLATE = '<input type="text" id="input">';

class SearchInput {
  searchkeyword = [];

  constructor({ $target, onSearch, onClick }) {
    const $searchInput = document.createElement("input");
    this.$searchInput = $searchInput;
    this.$searchInput.placeholder = "고양이를 검색해보세요.|";
    this.$searchInput.autofocus = true;

    $searchInput.className = "SearchInput";
    $target.appendChild($searchInput);

    $searchInput.addEventListener("keyup", e => {
      if (e.keyCode === 13) {
        if(this.searchkeyword.length === 5) this.searchkeyword.shift();
        this.searchkeyword.push(e.target.value);
        onSearch(e.target.value, this.searchkeyword);
      }
    });

    // 버튼 타입
    const $randomButton = document.createElement("button");
    $randomButton.className = "RandomButton";
    $randomButton.innerHTML = "랜덤 검색";
    $target.appendChild($randomButton);

    $randomButton.addEventListener("click", e => {
      onClick();
    });

    this.$searchInput.addEventListener("click", e => {
      if($searchInput.value)
        $searchInput.value = "";
    });
  }
  
  render() {}
}
