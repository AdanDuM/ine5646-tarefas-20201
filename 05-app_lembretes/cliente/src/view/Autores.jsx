//@flow
import React from 'react'

import type {Autor} from '../tipos_flow'

type Props = {|
  autores: Array<Autor>,
  onEsconder: void => void
|}

function Autores (props: Props) {
  const onEsconder = props.onEsconder

  return (
    <div className='message is-info'>
      <div className='message-header'>
        Autores
      </div>
      <div className='message-body'>
        <table className="table">
          <thead>
            <tr>
              <th>No.</th>
              <th>Nome</th>
              <th>Matrícula</th>
            </tr>
          </thead>
          {
            props.autores.map( (autor, i) =>
              <tr key={i}>
                <td>{i+1}</td>
                <td>{autor.nome}</td>
                <td>{autor.matricula}</td>
              </tr>
            )
          }
        </table>
        <button className='button is-success' onClick={onEsconder}>
          OK
        </button>
      </div>
    </div>
  )
}


export default Autores
