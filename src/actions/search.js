import { SEARCH_PRODUCTS, SEARCH_RESULTS } from '../constants';
import axios from 'axios';

export function searchProducts( searchString ){
    return function ( dispatch ){        
        var url = 'http://localhost:4000/api/Products/search?search=' + searchString;
        axios.get(url).then(response => response.data).then(( search )=>{
        dispatch( { type: SEARCH_PRODUCTS, search } );
        })
    }
}

export function searchResults( searchString ){
    return function ( dispatch ){
        var url = 'http://localhost:4000/api/Products/search?search=' + searchString;
        axios.get(url).then(response => response.data).then(( searchresult )=>{        
        dispatch( { type: SEARCH_RESULTS, searchresult } );
        })
    }
}