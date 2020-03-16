const strings = {
  pf: {
    cpf: 'CPF',
    name: 'Nome',
    address: 'Endereço',
    birthDate: 'Data de Nascimento',
    gender: 'Sexo',
    email: 'E-mail',
    phoneNumber: 'Telefone fixo',
    cellPhoneNumber: 'Telefone celular',
    death: 'Óbito',
    presumedRevenue: 'Renda presumida',
    car: 'Carro',
    restriction: 'Restrição'
  }
}

const format = {
  pf: string => strings.pf[string]
}

module.exports = {
  strings,
  format
}
