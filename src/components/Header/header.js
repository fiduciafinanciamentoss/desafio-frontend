import React from 'react';
import "materialize-css/dist/css/materialize.min.css";
 

export default function Header () {
    return (
      <nav>
        <div className="nav-wrapper">
          <form>
            <div className="input-field grey darken-4">
              <input id="search" type="search" required />
              <label className="label-icon" for="search">
                <i className="material-icons">search</i>
              </label>
              <i className="material-icons">close</i>
            </div>
          </form>
        </div>
      </nav>
    );
}