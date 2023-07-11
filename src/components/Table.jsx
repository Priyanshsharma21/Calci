import React, { useState } from 'react'

const Table = () => {
    const [input, setInput] = useState(null)


    const generateTableRows = ()=>{
        const rowsInTabla = []

        if (input) {
            for (let i = 1; i <= 10; i++) {
              const result = input * i
              rowsInTabla.push(
                <tr key={i}>
                  <td>{input}</td>
                  <td>{i}</td>
                  <td>{result}</td>
                </tr>
              );
            }
        }
        return rowsInTabla
    }


  return (
    <div className="table_of_num">
        <div className="tableBox">
            <input placeholder="Enter a Number" type="number" required onChange={(e)=>setInput(e.target.value)} />
        </div>

        {input && (
            <div className="table_of_that_number">
            <table>
                <thead>
                    <tr>
                    <th>{input}</th>
                    <th>Multiply</th>
                    <th>Result</th>
                    </tr>
                </thead>

                <tbody>
                    
                </tbody>
                    <tbody>{generateTableRows()}</tbody>
                </table>
            </div>
        )}
    </div>
  )
}

export default Table