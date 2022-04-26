import exampleVideoData from '/src/data/exampleVideoData.js';

import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import searchYouTube from '/src/lib/searchYoutube.js';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      currentVideo: exampleVideoData[0]
    };
    this.changeCurrentVideo = this.changeCurrentVideo.bind(this);
    this.getYoutubeVideos = this.getYoutubeVideos.bind(this);
    this.debouncedFilter = this.debouncedFilter.bind(this);

  }

  getYoutubeVideos(searchInput) {
    searchYouTube(searchInput, (data) => {
      this.setState({
        videos: data,
        currentVideo: data[0]
      });
    });
  }

  debouncedFilter (input) {
    const debounceFunc = _.debounce((input) => {
      console.log(input);
      this.getYoutubeVideos(input);
    }, 500);
    debounceFunc(input);
  }


  changeCurrentVideo(video) {
    this.setState({
      videos: this.state.videos,
      currentVideo: video
    });
  }

  componentDidMount() {
    this.getYoutubeVideos('');
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search handleChange={this.debouncedFilter}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo}/>
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videos} handleClick={this.changeCurrentVideo}/>
          </div>
        </div>
      </div>
    );
  }


}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
