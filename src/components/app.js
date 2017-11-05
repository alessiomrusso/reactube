import React, { Component } from 'react';
import SearchBar from './search_bar';
import VideoList from './video_list'
import YTSearch from 'youtube-api-search'
import VideoDetail from './video_detail'

const API_KEY = "AIzaSyAuQCVeNfKhtRk9KlChQPT1nO27DPO_5Ss";
const DEFAULT_KEYWORD = 'cats';


export default class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			videos : [],
			selectedVideo: null
		};

		this.videoSearch(DEFAULT_KEYWORD)
	}

	videoSearch(term) {
		YTSearch({key: API_KEY, term: term}, (videos) => {
			this.setState({
				videos,
				selectedVideo: videos[0]
			}); 
			
		});
	}

	render() {
		return (
			<div className="search_bar">
				<h1>ReacTube</h1>
				<SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
				<div className="row">
					<VideoDetail video={this.state.selectedVideo}/>
					<VideoList videos={this.state.videos} onVideoSelect={ selectedVideo => this.setState({selectedVideo}) }/>
				</div>
				
			</div>
		)
	}

}