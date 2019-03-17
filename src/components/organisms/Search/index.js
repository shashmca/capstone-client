import React, { Component } from 'react';
import store from '../../../store';
import { searchProducts } from '../../../actions/search';


const metaData = {
    title: 'Search Page',
    link: '/search',
    isFooterLink: true
};

class Search extends Component {

    constructor() {
        super();
        this.state = {
            search: [],
            showSuggestionList: false
        }
    }

    handleItemClick(item) {
        window.location = "/search?search=" + item.name;
    }

    getSearchSuggestions() {
        // var searchbox = document.getElementById('searchInput');
        let { search } = this.state;
        let set = new Set();
        search.map((item) => {
            return set.add(item.subcategory);
        });

        // return Array.from( set ).map( ( item,index )=>{
        //     return <button className="list-group-item" key={index}>{searchbox.value + ' for ' + item }</button>
        // });

        return search.map((item, index) => {
            return <button onClick={() => this.handleItemClick(item)} className="list-group-item" key={index}>{item.name + ' for ' + item.subcategory}</button>
        });
    }

    getSearchSuggestionCategory() {
        let { search } = this.state;
        let set = new Set();
        search.map((item) => {
            return item.categories.map((innerObj) => {
                return set.add(innerObj.name);
            })
        });

        return Array.from(set).map((item, index) => {
            return <button className="list-group-item" key={index}>{item}</button>
        });
    }

    searchBoxKeyupHandler(event) {
        var searchbox = document.getElementById('searchInput');
        const keycode = event.keyCode;
        if (keycode === 13) {// enter
            this.setState({ showSuggestionList: false });
            window.location = '/search?search=' + searchbox.value;
        }
        else {
            if (searchbox.value.length > 2) {
                this.setState({ showSuggestionList: true });
                let action = searchProducts(searchbox.value);
                store.dispatch(action);
            }
            else {
                this.setState({ showSuggestionList: false });
            }
        }
    }

    searchButtonClickHandler() {
        var searchbox = document.getElementById('searchInput');
        this.setState({ showSuggestionList: false });
        if (searchbox.value.trim().length > 2) {
            window.location = '/search?search=' + searchbox.value;
        }
    }

    getSearchItems() {
        let { showSuggestionList } = this.state;
        if (!showSuggestionList) {
            return null;
        }
        return (<div className="search-suggestion-list">
            <ul className="list-group">
                {this.getSearchSuggestions()}
                {/* <span>{ this.state.search.length> 0 ? 'Categories' : ''}</span>
                        {this.getSearchSuggestionCategory()} */}
            </ul>
        </div>)
    }

    componentDidMount() {
        this.unsubscribe = store.subscribe(() => {
            let search = store.getState().search;
            this.setState({ search });
        });
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        // let { history } = this.props;
        // console.log(history);
        return (
            <div className="col">
                <div className="input-group input-group-mg">
                    <input id="searchInput" onChange={(e) => this.searchBoxKeyupHandler(e)}
                        type="text" className="form-control w-50"
                        aria-describedby="inputGroup-sizing-lg"
                        placeholder="Type here to search" aria-label="Type here to search" />
                    <div className="input-group-append">
                        <button onClick={() => this.searchButtonClickHandler()} className="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
                    </div>
                </div>
                {this.getSearchItems()}
            </div>
        );
    }
}

export default Search;
export { metaData };