class Header {
  $headerElement = null;
  $checkboxElement = null;

  constructor({ $target }) {
    this.$headerElement = document.createElement("div");
    this.$headerElement.className = 'header';
    $target.appendChild(this.$headerElement);

    this.$checkboxElement = document.createElement("input");
    this.$checkboxElement.type = 'checkbox';
    this.$headerElement.appendChild(this.$checkboxElement);

    this.render();
    this.setEvent();
  }

  setState() {
  }

  render() {
  }

  setEvent() {
    this.$checkboxElement.addEventListener('click', () => {
      const theme = window.matchMedia("(prefers-color-scheme: dark)").matches;

      if(theme && !this.$checkboxElement.checked) {
        document.body.classList.remove("light");
        document.body.classList.add("dark");
      }else {
        document.body.classList.remove("dark");
        document.body.classList.add("light");
      }
    });
  }
}
