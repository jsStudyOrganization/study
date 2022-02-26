const TEMPLATE = '<input type="text">';
const ENTER_CODE = 13;
class SearchInput {
  constructor({ $target, onSearch }) {
    const $searchInput = document.createElement("input");
    this.$searchInput = $searchInput;
    this.$searchInput.placeholder = "고양이를 검색해보세요.|";

    $searchInput.className = "SearchInput";
    $target.appendChild($searchInput);
    this.setEvent(onSearch);

    console.log("SearchInput created.", this);
  }
  render() {}
  setEvent(onSearch) {
    this.$searchInput.addEventListener("keyup", e => {
      if (e.keyCode === ENTER_CODE) {
        onSearch(e.target.value);
      }
    });
  }
}
