class Loading{
    $loading = null;
    state = null;

    constructor({ $target, state }) {
        const $loading = document.createElement("div");
        $loading.className = "loading";
        this.$loading = $loading;
        this.state = state;
        this.$loading.style.display = !this.state ? "block" : "none";
        $target.appendChild($loading);

        this.render();
    }

    onChange() {
        this.state = !this.state;
        this.$loading.style.display = !this.state ? "block" : "none";
    }

    render(){
        this.$loading.innerHTML = "<div>로딩중...</div>";
        this.$loading.style.textAlign = "center";
    }
}