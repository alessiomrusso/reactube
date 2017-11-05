import React, { Component } from 'react';

export default class SearchBar extends Component {

	constructor(props) {
		super(props);

		this.state = {
			term: ''
		}
	}

	render() {
		return (
			<div className="search_bar">
				<div className="input-group">
				  <span className="input-group-addon">Search</span>
				  <input type="text" className="form-control" value={this.state.term} onChange={event => this.onInputChange(event.target.value)} />
				</div>
				<p>Value of the input: {this.state.term}</p>
			</div>
			
		);
	}

	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);
	}
}