export default {
  pf: {
    basic: {
      url: '/pf/basic',
      title: 'Básico',
      max: 8,
      value: 30,
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
      url: '/pf/intermediate',
      title: 'Intermediário',
      max: 11,
      value: 80,
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
      url: '/pf/complete',
      title: 'Completo',
      max: 12,
      value: 100,
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
      url: '/pf/master',
      title: 'Master',
      max: 12,
      value: 150,
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
      url: '/pj/basic',
      title: 'Básico',
      max: 9,
      value: 30,
      attributes: [
        'cnpj',
        'companyName',
        'companyFancyName',
        'openingDate',
        'address',
        'email',
        'phoneNumber',
        'cellPhoneNumber',
        'cnae'
      ]
    },
    intermediate: {
      url: '/pj/intermediate',
      title: 'Intermediário',
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
        'corporateControl',
        'cnae'
      ]
    },
    complete: {
      url: '/pj/complete',
      title: 'Completo',
      max: 12,
      value: 115,
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
    master: {
      url: '/pj/master',
      title: 'Master',
      max: 15,
      value: 740,
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
