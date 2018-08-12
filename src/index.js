import React, { Component } from 'React';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_item_list';
import VideoDetail from './components/video_detail';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

const YouTube_API_KEY = 'AIzaSyD4N_ElM06lsH4ZAtBFWsh2nahc7nFAN_o';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
            videos: [],
            selectedVideo: null
        };
        this.videoSearch('bioluminescence');
    }

    videoSearch(term) {
        YTSearch({ key: YouTube_API_KEY, term: term }, (videos) => {

            this.setState({ videos })
            this.setState({ selectedVideo: videos[0] });

        });
    }
    render() {
        //Using debounce from lodash to throttle calling the search method
        const videoSearch = _.debounce((term) => this.videoSearch(term), 300);
        
        return (
            <div>
                <SearchBar onSearchChange={videoSearch}/>
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
                    videos={this.state.videos}
                />
            </div>
        );
    }
}


ReactDOM.render(<App />, document.querySelector('.container'));