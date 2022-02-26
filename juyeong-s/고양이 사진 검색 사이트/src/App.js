console.log("app is running!");

class App {
  $target = null;
  data = [];
  bannerData = [];

  constructor($target) {
    this.$target = $target;

    const darkmodeBtn = document.createElement('input');
    darkmodeBtn.setAttribute("type", "checkbox");
    darkmodeBtn.className = 'darkmode-btn';
    $target.appendChild(darkmodeBtn);

    this.searchInput = new SearchInput({
      $target,
      onSearch: async keyword => {
        try{
          await api.fetchCats(keyword)
          .then(({ data }) => this.setState(data));
        } catch(e){
          console.error(e);
        } finally {
          const loading = new Loading({
            $target,
            state: false
          })
          loading.onChange();
          loading.$loading.remove();
        }
      },
      onClick: async () => {
        try{
          await api.fetchRandom()
          .then(({ data }) => this.setState(data));
        } catch(e){
          console.error(e);
        } finally {
          const loading = new Loading({
            $target,
            state: false
          })
          loading.onChange();
          loading.$loading.remove();
        }
      }
    });

    this.searchResult = new SearchResult({
      $target,
      initialData: this.data,
      onClick: async image => {
        const catsInfo = await api.fetchCatsDetail(image.id);
        console.log(catsInfo);

        this.imageInfo.setState({
          visible: true,
          image: catsInfo.data
        });
      }
    });

    this.imageInfo = new ImageInfo({
      $target,
      data: {
        visible: false,
        image: null
      }
    });

    // this.loading = new Loading({
    //   $target,
    //   state: false
    // })
    
  }

  setState(nextData) {
    console.log(this);
    this.data = nextData;
    this.searchResult.setState(nextData);
  }
}
