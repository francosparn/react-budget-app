import React from 'react';
import Spending from './Spending'
import PropTypes from 'prop-types';

const List = ({ spendings }) => (
    <div>
        <h2 className="list-title mb-5">Listado de Gastos</h2>
        {spendings.map(spending => (
            <Spending 
                key={spending.id}
                spending={spending}
            />
        ))}
    </div>
);

List.propTypes = {
    spendings: PropTypes.array.isRequired
}
 
export default List;