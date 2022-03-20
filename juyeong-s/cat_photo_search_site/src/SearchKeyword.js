class SearchKeyword {
    constructor({ $target, list }){
        console.log(list);

        const searchKeyword = document.createElement('span');
        list.map((word) => {
            localStorage.setItem(word, word);
        });
        searchKeyword.className = "SearchKeyword";

        const words = document.createElement('button');
        list.map((word) => {
            words.prepend(document.createTextNode(localStorage.getItem(word)));
        });

        searchKeyword.prepend(words);
        $target.prepend(searchKeyword);
    }
    render() {}
}
