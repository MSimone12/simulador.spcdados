const pf = {
  cpf: 'CPF',
  name: 'Nome',
  address: 'Endereço',
  birthDate: 'Data de Nascimento',
  gender: 'Sexo',
  email: 'E-mail',
  fatherName: 'Nome do pai',
  motherName: 'Nome da mãe',
  phoneNumber1: 'Telefone fixo 1',
  phoneNumber2: 'Telefone fixo 2',
  phoneNumber3: 'Telefone fixo 3',
  phoneNumber4: 'Telefone fixo 4',
  phoneNumber5: 'Telefone fixo 5',
  cellPhoneNumber1: 'Telefone celular 1',
  cellPhoneNumber2: 'Telefone celular 2',
  cellPhoneNumber3: 'Telefone celular 3',
  cellPhoneNumber4: 'Telefone celular 4',
  cellPhoneNumber5: 'Telefone celular 5',
  civilStatus: 'Estado civil',
  car: 'Carro',
  voterTitle: 'Título de eleitor',
  zone: 'Zona',
  section: 'Seção',
  id: 'RG',
  registrationStatus: 'Situação cadastral',
  educationLevel: 'Grau de instrução',
  occupation: 'Profissão',
  socialClass: 'Classe social',
  death: 'Óbito',
  presumedRevenue: 'Renda presumida',
  restriction: 'Restrição',
  restrictionTwoBureaux: 'Restrição 2 bureaus'
}

const pj = {
  cnpj: 'CNPJ',
  companyName: 'Razão Social',
  companyFancyName: 'Nome Fantasia',
  openingDate: 'Data de abertura',
  branch: 'Filial',
  headquarters: 'Matriz',
  phoneNumber1: 'Telefone fixo 1',
  phoneNumber2: 'Telefone fixo 2',
  phoneNumber3: 'Telefone fixo 3',
  phoneNumber4: 'Telefone fixo 4',
  phoneNumber5: 'Telefone fixo 5',
  cellPhoneNumber1: 'Telefone celular 1',
  cellPhoneNumber2: 'Telefone celular 2',
  cellPhoneNumber3: 'Telefone celular 3',
  cellPhoneNumber4: 'Telefone celular 4',
  cellPhoneNumber5: 'Telefone celular 5',
  cnae: 'CNAE (código + descrição)',
  presumedBilling: 'Faturamento presumido',
  corporateControl: 'Controle Societário',
  size: 'Porte',
  numberOfAssociates: 'Número de funcionários',
  serasaValidation: 'Valida Serasa',
  restriction: 'Restrição 1 bureau',
  restrictionTwoBureaux: 'Restrição 2 bureaus'
}

const strings = {
  ...pf,
  ...pj
}

const phonesSection = [
  'phoneNumber1',
  'cellPhoneNumber1',
  'phoneNumber2',
  'cellPhoneNumber2',
  'phoneNumber3',
  'cellPhoneNumber3',
  'phoneNumber4',
  'cellPhoneNumber4',
  'phoneNumber5',
  'cellPhoneNumber5'
]

const families = {
  pf: {
    registrationData: {
      type: 'checkbox',
      name: 'registrationData',
      title: 'Dados cadastrais',
      attributes: [
        'cpf',
        'name',
        'address',
        'birthDate',
        'gender',
        'email',
        'fatherName',
        'motherName',
        'civilStatus',
        'car',
        'voterTitle',
        'zone',
        'section',
        'id',
        'registrationStatus',
        'educationLevel',
        'occupation',
        'socialClass',
        ...phonesSection
      ]
    },
    behaviorAttributes: {
      type: 'checkbox',
      disabled: true,
      name: 'behaviorAttributes',
      title: 'Atributos comportamentais',
      attributes: ['death', 'presumedRevenue']
    },
    restrictionAttributes: {
      type: 'radio',
      name: 'restrictionAttributes',
      title: 'Atributos restritivos',
      attributes: ['restriction', 'restrictionTwoBureaux']
    }
  },
  pj: {
    registrationData: {
      type: 'checkbox',
      name: 'registrationData',
      title: 'Dados cadastrais',
      attributes: [
        'cnpj',
        'companyName',
        'companyFancyName',
        'openingDate',
        'branch',
        'headquarters',
        'cnae',
        'size',
        'numberOfAssociates',
        'serasaValidation',
        ...phonesSection
      ]
    },
    behaviorAttributes: {
      type: 'checkbox',
      disabled: true,
      name: 'behaviorAttributes',
      title: 'Atributos comportamentais',
      attributes: ['presumedBilling', 'corporateControl']
    },
    restrictionAttributes: {
      type: 'radio',
      name: 'restrictionAttributes',
      title: 'Atributos restritivos',
      attributes: ['restriction', 'restrictionTwoBureaux']
    }
  }
}

const format = string => strings[string]

module.exports = {
  pf,
  pj,
  strings,
  families,
  format
}
