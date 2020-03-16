const strings = {
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
  restriction: 'Restrição',
  cnpj: 'CNPJ',
  companyName: 'Razão Social',
  companyFancyName: 'Nome Fantasia',
  openingDate: 'Data de abertura',
  corporateControl: 'Controle Societário',
  cnae: 'CNAE (código + descrição)',
  presumedBilling: 'Faturamento presumido'
}

const format = string => strings[string]

module.exports = {
  strings,
  format
}
