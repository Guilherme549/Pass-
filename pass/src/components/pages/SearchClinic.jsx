import React from 'react'
import Input from '../form/Input'

export default function SearchClinic() {
  return (
    <div>
      <div>
        <h2>Olá, Paciente</h2>
        <Input type='text' name='buscarCidade' placeholder='Busque pela cidade' />
        <Input type='text' name='atendimento' placeholder='Atendimento' />
        <Input type='text' name='tipoAtendimento' placeholder='Tipo de atendimento' />
      </div>
    </div>
  )
}
