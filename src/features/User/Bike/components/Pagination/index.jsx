import React from 'react';
import classname from 'classnames';
import PropTypes from 'prop-types';
Pagination.propTypes = {
  pagination: PropTypes.object.isRequired,
  action: PropTypes.func.isRequired,
};

Pagination.defaultProps = {
  pagination: {},
}

function Pagination({ pagination, action }) {

  var buttons = [];
  const totalPages = Math.ceil(pagination.totalBikes / pagination._limit);
  const distance = totalPages > 8 ? 6 : 3;
  const page = pagination._page;

  var start = page > 3 ? page - 3 : 1;
  start = page + 3 > totalPages ? totalPages - distance : start;
  var end = page + 2 < totalPages ? page + 2 : totalPages;
  end = start + distance <= totalPages ? start + distance : end;

  if (start === -distance) {
    start = 0;
    end = 0;
  }

  const handleAction = (newPage) => {
    if (action) {
      action(newPage);
    }
  }

  for (let index = start; index <= end; index++) {
    buttons.push(<li key={index + page + start}><button  className={classname({
      'active': page === index,
    })} onClick={() => handleAction(index)}> {index}</button></li>);
  }
  if (end < totalPages) {
    buttons.push(<li key={start}><button >...</button></li>)
  }
  if (start !== 1 && page <= totalPages) {
    if (end < totalPages) buttons.shift();
    buttons.unshift(<li key={end}><button >...</button></li>)
  }
  return (



    <ul className="pagination modal-2">

      <li><button disabled={page === 1} className="next" onClick={() => handleAction(page - 1)}>  &laquo;</button></li>

      {buttons}


      <li><button disabled={page === totalPages} className="next" onClick={() => handleAction(page + 1)}>  &raquo;</button></li>
    </ul>
  );
}

export default Pagination;
