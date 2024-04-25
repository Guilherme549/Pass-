import React from 'react'
import Input from '../form/Input'
import Nav from '../layout/NavBar'

export default function SearchClinic() {
  return (
    <div>
      <Nav/>
      <div>
        <h2>Olá, Paciente</h2>
        <Input type='text' name='buscarCidade' placeholder='Busque pela cidade' />
        <Input type='text' name='atendimento' placeholder='Atendimento' />
        <Input type='text' name='tipoAtendimento' placeholder='Tipo de atendimento' />
      </div>
    </div>
  )
}
