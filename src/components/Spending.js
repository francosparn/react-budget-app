import React from 'react';
import PropTypes from 'prop-types';

const Spending = ({ spending }) => {

    const date = new Date();

    return (
    <li className="spending">
        <p className="spending-name">
            <img src="assets/img/buy.png" className="buy" alt="Carrito" />
             {spending.spendingName}
            <span className="amount">${spending.amount}</span>
        </p>
        <p className="date">{date.toLocaleDateString()}</p>
    </li>
);

}

Spending.propTypes = {
    spending: PropTypes.object.isRequired
}
 
export default Spending;