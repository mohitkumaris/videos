import React from "react";
import SearchBar from "./SearchBar";
import Youtube from "../api/Youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  state = { videos: [], videoSelected: null };
  // for default search
  componentDidMount() {
    this.onFormSubmit("flowers");
  }
  onFormSubmit = async (term) => {
    const response = await Youtube.get(`/search?q=${term}`);
    this.setState({
      videos: response.data.items,
      videoSelected: response.data.items[0],
    });
  };
  onVideoSelect = (video) => {
    this.setState({ videoSelected: video });
  };
  render() {
    return (
      <div style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onFormSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.videoSelected} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
