console.log("app is running!");

class App {
  $target = null;
  data = [];
  $bannerData = [];
  loading = null;
  // $lastKeyword = [];

  constructor($target) {
    this.$target = $target;

    const darkmodeBtn = document.createElement('input');
    darkmodeBtn.setAttribute("type", "checkbox");
    darkmodeBtn.className = 'darkmode-btn';
    $target.appendChild(darkmodeBtn);

    this.$banner = new RandomBanner({ $target, list: this.$bannerData,
      left: (start) => {
        // this.setBanner(data, start, start+5);
        // list = this.$bannerData.slice(start, start + 5);
      },

      right: (end) => {
        // this.setBanner(data, end - 5, end);
        // list = this.$bannerData.slice(end - 5, end);
      }
    },);

    // setBanner(data, start, end) {
    //   this.$bannerData = data.slice(start, end);
    //   this.$banner.setBanner(data);
    //   this.$banner.list = this.$bannerData;
    // }

    this.searchInput = new SearchInput({
      $target,
      onSearch: async (keyword, list) => {
        try{
          document.querySelector('.SearchResult').innerHTML = "";
          this.loading = new Loading({ $target });

          new SearchKeyword({ $target, list });

          const result = await api.fetchCats(keyword);
          this.setState(result);
          // .then(({ data }) => this.setState(data));
        } catch(e){
          console.error(e);
        } finally {
          document.querySelector('.loading').remove();
        }
      },

      onClick: async () => {
        try{
          document.querySelector('.SearchResult').innerHTML = "";
          this.loading = new Loading({ $target });
          await api.fetchRandom()
          .then(({ data }) => this.setState(data));
          this.$bannerData = this.data.slice(0, 5);
          // this.$banner.list = this.$bannerData;

          // 랜덤 배너
          new RandomBanner({ $target, list: this.$bannerData,
            left: (start) => {
              list = this.data.slice(start, start + 5);
            },

            right: (end) => {
              list = this.data.slice(end - 5, end);
            }
          });
          // this.$banner.list = this.$bannerData;

        } catch(e){
          console.error(e);
        } finally {
          document.querySelector('.loading').remove();
        }
      }
    });

    this.searchResult = new SearchResult({
      $target,
      initialData: this.data,
      onClick: async image => {
        try{
          const catsInfo = await api.fetchCatsDetail(image.id);
          this.imageInfo.setState({
            visible: true,
            image: catsInfo.data
          });
        } catch (err){
          console.error(err);
        } finally{
        }
      }
    });

    this.imageInfo = new ImageInfo({
      $target,
      data: {
        visible: false,
        image: null
      }
    });
  }

  setState(nextData) {
    this.data = nextData;
    this.searchResult.setState(nextData);
  }
}
