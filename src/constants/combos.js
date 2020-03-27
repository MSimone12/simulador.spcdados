import routes from './routes'

export default {
  pf: {
    basic: {
      url: `${routes.COMBO}/pf/basic`,
      title: 'Básico',
      max: 8,
      value: 16,
      attributes: [
        'cpf',
        'name',
        'address',
        'birthDate',
        'gender',
        'email',
        'phoneNumber1',
        'cellPhoneNumber1'
      ]
    },
    intermediate: {
      url: `${routes.COMBO}/pf/intermediate`,
      title: 'Intermediário',
      max: 11,
      value: 75,
      attributes: [
        'cpf',
        'name',
        'address',
        'birthDate',
        'gender',
        'email',
        'phoneNumber1',
        'phoneNumber2',
        'cellPhoneNumber1',
        'cellPhoneNumber2',
        'presumedRevenue'
      ]
    },
    complete: {
      url: `${routes.COMBO}/pf/complete`,
      title: 'Completo',
      max: 12,
      value: 98,
      attributes: [
        'cpf',
        'name',
        'address',
        'birthDate',
        'gender',
        'email',
        'phoneNumber1',
        'phoneNumber2',
        'cellPhoneNumber1',
        'cellPhoneNumber2',
        'presumedRevenue',
        'restriction'
      ]
    },
    master: {
      url: `${routes.COMBO}/pf/master`,
      title: 'Master',
      max: 12,
      value: 189,
      attributes: [
        'cpf',
        'name',
        'address',
        'birthDate',
        'gender',
        'email',
        'phoneNumber1',
        'phoneNumber2',
        'cellPhoneNumber1',
        'cellPhoneNumber2',
        'presumedRevenue',
        'restrictionTwoBureaux'
      ]
    }
  },
  pj: {
    basic: {
      url: `${routes.COMBO}/pj/basic`,
      title: 'Básico',
      max: 9,
      value: 18,
      attributes: [
        'cnpj',
        'companyName',
        'companyFancyName',
        'openingDate',
        'address',
        'email',
        'phoneNumber1',
        'cellPhoneNumber1',
        'cnae'
      ]
    },
    intermediate: {
      url: `${routes.COMBO}/pj/intermediate`,
      title: 'Intermediário',
      max: 12,
      value: 45,
      attributes: [
        'cnpj',
        'companyName',
        'companyFancyName',
        'openingDate',
        'address',
        'email',
        'phoneNumber1',
        'phoneNumber2',
        'cellPhoneNumber1',
        'cellPhoneNumber2',
        'cnae',
        'restriction'
      ]
    },
    complete: {
      url: `${routes.COMBO}/pj/complete`,
      title: 'Completo',
      max: 12,
      value: 95,
      attributes: [
        'cnpj',
        'companyName',
        'companyFancyName',
        'openingDate',
        'address',
        'email',
        'phoneNumber1',
        'phoneNumber2',
        'cellPhoneNumber1',
        'cellPhoneNumber2',
        'cnae',
        'corporateControl'
      ]
    },
    master: {
      url: `${routes.COMBO}/pj/master`,
      title: 'Master',
      max: 14,
      value: 734,
      attributes: [
        'cnpj',
        'companyName',
        'companyFancyName',
        'openingDate',
        'address',
        'email',
        'phoneNumber1',
        'phoneNumber2',
        'cellPhoneNumber1',
        'cellPhoneNumber2',
        'corporateControl',
        'cnae',
        'presumedBilling',
        'restrictionTwoBureaux'
      ]
    }
  }
}
