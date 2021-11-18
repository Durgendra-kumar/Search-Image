import React, { Component } from 'react'

class SearchBar extends Component {
    render() {
        return (
            <div>
                <div className="position-relative">
 
                <div className="position-absolute top-0 start-50 translate-middle-x">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">

 
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-dark" type="submit">Search </button>
                </form>
                </div>
                </nav>
                </div>
                </div>
                
            </div>
        )
    }
}
export default SearchBar;