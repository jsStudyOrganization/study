const TEMPLATE = '<input type="text" id="input">';

class SearchInput {
  constructor({ $target, onSearch, onClick }) {
    const $searchInput = document.createElement("input");
    this.$searchInput = $searchInput;
    this.$searchInput.placeholder = "고양이를 검색해보세요.|";
    this.$searchInput.autofocus = true;

    $searchInput.className = "SearchInput";
    $target.appendChild($searchInput);

    $searchInput.addEventListener("keyup", e => {
      if (e.keyCode === 13) {
        onSearch(e.target.value);
      }
    });

    console.log("SearchInput created.", this);

    const $randomButton = document.createElement("button");
    $randomButton.className = "RandomButton";
    $randomButton.innerHTML = "random";
    $target.appendChild($randomButton);

    $randomButton.addEventListener("click", e => {
      onClick();
    });
  }
  render() {}
}
