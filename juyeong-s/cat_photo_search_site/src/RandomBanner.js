class RandomBanner{
    $banner = null;
    $leftbtn = null;
    $rightbtn = null;
    data = null;
    $left = null;
    $right = null;

    constructor({ $target, list, left, right }){
        console.log(list);
        this.$banner = document.createElement('div');
        this.$banner.className = "banner";
        this.data = list.slice(0, 5);

        this.$leftbtn = document.createElement("button");
        this.$leftbtn.className = "leftbtn";
        this.$rightbtn = document.createElement("button");
        this.$rightbtn.className = "rightbtn";

        this.$left = left;
        this.$right = right;

        $target.prepend(this.$banner);

        this.render();
        this.event();
    }

    render(){
        {this.$banner.innerHTML = `<button class="leftbtn"><</button>` + this.data.map((cat) => `
            <span class="item">
                <img src=${cat.url} alt=${cat.name} width="60" height="60"/>
            </span>
        `) + `<button class="rightbtn">></button>`}
    }

    // 이벤트 위임, 버블링 캡쳐링
    event(){
        // 클로저
        let start = 0, end = 5;
        this.$rightbtn.addEventListener("click", (e) => {
            if(start > 0)
                this.$left(start--);
        });

        this.$leftbtn.addEventListener("click", (e) => {
            this.$right(end++);
        });
    }
}