import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { checkBudget } from '../helpers';

const ControlBudget = ({ budget, rest }) => {

    return ( 
        <Fragment>
            <div className="budget-description">
                <p>
                    <img src="assets/img/graphic.png" 
                         className="graphic-icon" 
                         alt="Grafico" />
                     Su presupuesto semanal es de: <b>${budget}</b>
                </p>
                <p>
                    <img src="assets/img/graphic.png" 
                         className="graphic-icon" 
                         alt="Grafico" />
                     Su presupuesto diario es de: <b>${(budget/7).toFixed(2)}</b>
                </p>
            </div>

            <div className="row">
                <div className="col-md-6">
                    <div className="alert-budget btn-block">
                        <b>Total: ${budget}</b>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className={checkBudget(budget, rest)}>
                        <b>Resto: ${rest}</b>
                    </div>
                </div>
            </div>
        </Fragment>
     );
}

ControlBudget.propTypes = {
    budget: PropTypes.number.isRequired,
    rest: PropTypes.number.isRequired
}
 
export default ControlBudget;