export default {
  pf: {
    basic: {
      url: '/pf/basic',
      title: 'Básico',
      max: 9,
      value: 30,
      attributes: [
        { name: 'cpf' },
        { name: 'name' },
        { name: 'address' },
        { name: 'birthDate' },
        { name: 'gender' },
        { name: 'email' },
        { name: 'phoneNumber' },
        { name: 'cellPhoneNumber' }
      ]
    },
    intermediate: {
      url: '/pf/intermediate',
      title: 'Intermediário',
      max: 12,
      value: 80,
      attributes: [
        { name: 'cpf' },
        { name: 'name' },
        { name: 'address' },
        { name: 'birthDate' },
        { name: 'gender' },
        { name: 'email' },
        { name: 'phoneNumber', quantity: 2 },
        { name: 'cellPhoneNumber', quantity: 2 },
        { name: 'presumedRevenue' },
        { name: 'car' }
      ]
    },
    complete: {
      url: '/pf/complete',
      title: 'Completo',
      max: 14,
      value: 100,
      attributes: [
        { name: 'cpf' },
        { name: 'name' },
        { name: 'address' },
        { name: 'birthDate' },
        { name: 'gender' },
        { name: 'email' },
        { name: 'phoneNumber', quantity: 2 },
        { name: 'cellPhoneNumber', quantity: 2 },
        { name: 'presumedRevenue' },
        { name: 'car' },
        { name: 'restriction' }
      ]
    },
    master: {
      url: '/pf/master',
      title: 'Master',
      max: 15,
      value: 150,
      attributes: [
        { name: 'cpf' },
        { name: 'name' },
        { name: 'address' },
        { name: 'birthDate' },
        { name: 'gender' },
        { name: 'email' },
        { name: 'phoneNumber', quantity: 2 },
        { name: 'cellPhoneNumber', quantity: 2 },
        { name: 'presumedRevenue' },
        { name: 'car' },
        { name: 'death' },
        { name: 'restriction', quantity: 2 }
      ]
    }
  }
}
