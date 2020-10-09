import React from "react";

function Nav() {
    return (
        <nav className="navbar navbar-expand navbar-light bg-info sticky-top">
            <a className="navbar-brand text-light" href="/">Google Books</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link text-dark" href="/">Search<span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item text-dark">
                        <a className="nav-link" href="/savedbooks">Saved Books</a>
                    </li>

                </ul>
            </div>
        </nav>
    );
}

export default Nav;




