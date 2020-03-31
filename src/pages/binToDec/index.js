import React , { useState } from 'react';
import './styles.css'; 

export default function BinToDec()
{
    const [binary, setBinary] = useState('');
    const [decimal, setDecimal] = useState('');


    function handleNumber(e)
    {
        e.preventDefault();
        let binNumber = binary.split('');; 
        let exponent = 7; 
        let decNumber = 0;

        for(let i = 0; i<=7; i++, exponent--)
        {
            if(parseInt(binNumber[i]) === 1)
                decNumber += (2 ** exponent)      
        }
        setDecimal(decNumber);
    }

    function onlyBinary(event)
    {
        let keyPress = event.keyCode; 
        console.log(keyPress);
        if(keyPress !== 97 && keyPress !== 96 && keyPress !== 49 && keyPress !== 48 && keyPress !== 8)
        {
            event.preventDefault();
        };
    }
    return (
        <div className="binToDec-container">
            
        <div className="content">
        <h1>Binário para Decimal</h1>
        <form onSubmit={handleNumber}>
            <h2>Binário: </h2>
            <input type="text" placeholder="Numero Binário"  
            minLegth="8" 
            maxLength="8"
            pattern="[0-1]+"
            value={binary}
            onKeyDown={onlyBinary}
            onChange={e=>setBinary(e.target.value)}/>
            <button type="submit">Gerar</button>
        </form>

        <p>
            <h2>Decimal:</h2>
            <input type="text" value={decimal} placeholder="Valor Decimal"/>
        </p>

        </div>
        </div>
    );
}