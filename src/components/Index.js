import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import Error from './Error';

const Index = ({ saveUsername, saveBudget, saveRest, updateIndex }) => {

    // Define the states
    const [ name, saveName ] = useState('');
    const [ amount, saveAmount ] = useState(0);
    const [ error, saveError ] = useState(false);

    // Read the name
    const defineName = e => {
        saveName(e.target.value);
    }

    // Read the budget
    const defineBudget = e => {
        saveAmount( parseInt (e.target.value, 10) );
    }

    // Submit button to define the budget
    const addBudget = e => {
        e.preventDefault();

    // Validation
    if(amount < 1 || isNaN(amount) || name.trim() === '' || !isNaN(name)){
        saveError(true);
        return;
    }

    // In case of passing the validation
    saveUsername(name);
    saveError(false);
    saveBudget(amount);
    saveRest(amount);
    updateIndex(false);
    }

    return ( 
        <Fragment>
            <h2 className="text-center">Presupuesto Semanal</h2>

            { error ? <Error message="Todos los campos del formulario son obligatorios" /> : null}

            <form
                onSubmit={addBudget}
            >
                <label>Nombre</label>
                <div className="input-group mb-2">
                    <div className="input-group-prepend">
                        <div className="input-group-text bg-icon">
                            <img src="assets/img/user.png" alt="User" />
                        </div>
                    </div>
                <input
                    type="text"
                    className="form-control"
                    placeholder="¿Cuál es tu nombre?"
                    onChange={defineName}
                />
                </div>
                <label>Presupuesto</label>
                <div className="input-group mb-2">
                    <div className="input-group-prepend">
                        <div className="input-group-text bg-icon">
                            <img src="assets/img/budget.png" alt="Budget" />
                        </div>
                    </div>
                <input
                    type="number"
                    className="form-control"
                    placeholder="Agregar presupuesto"
                    onChange={defineBudget}
                />
                </div>
                <input 
                    type="submit"
                    className="button"
                    value="Agregar"
                />
            </form>
        </Fragment>
     );
}

Index.propTypes = {
    saveBudget: PropTypes.func.isRequired,
    saveRest: PropTypes.func.isRequired,
    updateIndex: PropTypes.func.isRequired
}
 
export default Index;