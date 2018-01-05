import React from 'react';
import './SearchBar.css';

const sortByOptions = {
	'Best Match': 'best_match',
  	'Highest Rated': 'rating',
  	'Most Reviewed': 'review_count'
}

class SearchBar extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			term: '',
			location: '',
			sortBy: 'best_match'
		}

		this.handleTermChange = this.handleTermChange.bind(this);
		this.handleLocationChange = this.handleLocationChange.bind(this)
		this.handleSearch = this.handleSearch.bind(this);
	}

	

	renderSortByOptions() {
		return Object.keys(sortByOptions).map(sortByOption => {
      		let sortByOptionValue = sortByOptions[sortByOption];
      		return <li onClick={this.handleSortByChange.bind(this,sortByOptionValue)} className={this.getSortByClass(sortByOptionValue)} key={sortByOptionValue}>{sortByOption}</li>
    	});
	}
	//
	
	getSortByClass(sortByOption){
		if(this.state.sortBy === sortByOption){
			return 'active';
		}else{
			return '';
		}
	}

	// updating the .setstate() by passing the object
	// and object is set sortBy
	handleSortByChange(sortByOption){
		this.setState({
			sortBy: sortByOption
		});
	}

	// this method handle changes in 'businesses'
	// inside this we call setState() and passing empty object
	handleTermChange(event){
		this.setState({
			state:{
				term: event.target.value
			}
		});
	}


	// this method handle changes in 'Location'
	// inside this we call setState() and passing empty object
	handleLocationChange(event){
		this.setState({
			state:{
				location: event.target.value
			}
		});
	}

	//this will effect when "let's go" button is clicked
	handleSearch(event){
		this.props.searchYelp(this.term, this.location, this.sortBy);
		event.preventDefault();
	}

	render() {
		return(
			<div className="SearchBar">
	  			<div className="SearchBar-sort-options">
	    			<ul>
	      				{this.renderSortByOptions()}
	    			</ul>
	  			</div>
	  			<div className="SearchBar-fields">
	    			<input onChange={this.handleTermChange} placeholder="Search Businesses" />
	    			<input onChange={this.handleLocationChange} placeholder="Where?" />
	  			</div>
	  			<div onClick={this.handleSearch} className="SearchBar-submit">
	    			<a>Let's Go</a>
	  			</div>
			</div>
		);
	}
};


export default SearchBar;