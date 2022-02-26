import React from 'react';
import PropTypes from 'prop-types';
import Single from './Single';

const Grid = function ({items}) {

  return(
    <div>
      <div className="row">
        <ul>
          {items.map((item) => <Single key={item.id} item={item}/> )}
        </ul>
      </div>
    </div>
  )
}

Grid.propTypes = {
  items: PropTypes.array.isRequired
};

export default Grid;