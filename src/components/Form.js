 import React, { useState } from 'react';
 import PropTypes from 'prop-types';
 import shortid from 'shortid';
 import Error from './Error';
 import Swal from 'sweetalert2';

 const Form = ({ username, saveSpending, saveCreateSpending, budget, rest }) => {

    // Define the states
    const [ spendingName, saveName ] = useState('');
    const [ amount, saveAmount ] = useState(0);
    const [ error, saveError ] = useState(false);

    // When the user adds an expense
    const addSpending = e => {
        e.preventDefault();

        // Validation
        if(amount < 1 || isNaN(amount) || spendingName.trim() === ''){
            saveError(true);
            return;
        }

        saveError(false);

        // Build expense
        const spending = {
            spendingName,
            amount,
            id: shortid.generate()
        }
        
        // Send expense to main component
        saveSpending(spending);
        saveCreateSpending(true);

        // Reset form
        saveName('');
        saveAmount(0);

        // Alert of added expenses
        if(amount < budget && amount < rest){
            Swal.fire(
                'Gasto agregado',
                'El gasto ha sido agregado correctamente.',
                'success'
                )
        }else{
            Swal.fire(
                'Gasto agregado',
                'El gasto fue agregado, sin embargo, el presupuesto semanal ha sido superado.',
                'warning'
                )
        }
    }

     return ( 
         <form
            onSubmit={addSpending}
         >
             <div className="welcome">
                 <h3>¡Bienvenid@ <span className="username">{username}</span> a BudgetApp!</h3>
             </div>
             <h4 className="text-center">Agrega tus gastos aqui</h4>

            { error ? <Error message="Ambos campos son obligatorios y/o el presupuesto ingresado es inválido" /> : null }

             <div>
                 <label>Gasto</label>
                 <input 
                    type="text"
                    className="form-control"
                    placeholder="Ej. Transporte"
                    value={spendingName}
                    onChange={ e => saveName(e.target.value) }
                 />
             </div>
             <div>
                 <label>Costo</label>
                 <input 
                    type="number"
                    className="form-control"
                    value={amount}
                    onChange={ e => saveAmount(parseInt(e.target.value)) }
                 />
             </div>
                <input 
                    type="submit"
                    className="button btn-block"
                    value="Enviar"
                />
         </form>
     );
 }

 Form.propTypes = {
    saveSpending: PropTypes.func.isRequired,
    saveCreateSpending: PropTypes.func.isRequired
 }
  
 export default Form;