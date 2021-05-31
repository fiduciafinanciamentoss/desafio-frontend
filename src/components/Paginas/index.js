import { Nav } from './styled';
import { useHistory } from 'react-router-dom';
import React, { useContext } from 'react';

const Pagination = ({ pokesPerPage, totalPokes, paginate }) => {
  let pageNumber = Number(window.location.pathname.split('/')[2]) || 1;
  const lastPage = Math.ceil(totalPokes / pokesPerPage);

  const prev = (pageNumber) => {
    if (pageNumber > 1) {
      paginate(pageNumber - 1);
    }
  };

  const history = useHistory();

  const next = (pageNumber) => {
    if (!pageNumber) {
      paginate(2);
    } else {
      paginate(pageNumber + 1);
    }
  };

  const goToPokedex = () => {
    history.push('/pokedex');
  };

  return (
    <Nav>
      <div className="info">
        {pageNumber > 1 && (
          <div>
            <button onClick={() => prev(pageNumber)}>🠔</button>
          </div>
        )}
        <div className="main">
          <p>
            Página {pageNumber} de {lastPage}
          </p>
        </div>
        {pageNumber < lastPage && (
          <div className="arrow">
            <button onClick={() => next(pageNumber)}>➙</button>
          </div>
        )}
      </div>
      <div>
        <butbutton
          type="button"
          class="nes-btn is-warning"
          onClick={goToPokedex}
        >
          Pokédex
        </butbutton>
      </div>
    </Nav>
  );
};

export default Pagination;
