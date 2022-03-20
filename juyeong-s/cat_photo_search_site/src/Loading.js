class Loading{
    $loading = null;

    constructor({ $target }) {
        const loading = document.createElement("div");
        loading.classList.add("loading");
        this.$loading = loading;
        this.$loading.innerHTML = "로딩중...";
        this.$loading.style.textAlign = "center";
        $target.prepend(this.$loading);
    }
}