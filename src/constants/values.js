const defaultDiscount = quantity => {
  if (quantity > 100000 && quantity <= 800000) return 0.25
  if (quantity > 800000) return 0.5
  return 0
}

const values = {
  cpf: {
    value: 2,
    discount: defaultDiscount
  },
  name: {
    value: 2,
    discount: defaultDiscount
  },
  address: {
    value: 2,
    discount: defaultDiscount
  },
  birthDate: {
    value: 2,
    discount: defaultDiscount
  },
  gender: {
    value: 2,
    discount: defaultDiscount
  },
  email: {
    value: 2,
    discount: defaultDiscount
  },
  fatherName: {
    value: 2,
    discount: defaultDiscount
  },
  motherName: {
    value: 2,
    discount: defaultDiscount
  },
  phoneNumber1: {
    value: 2,
    discount: defaultDiscount
  },
  phoneNumber2: {
    value: 2,
    discount: defaultDiscount
  },
  phoneNumber3: {
    value: 2,
    discount: defaultDiscount
  },
  phoneNumber4: {
    value: 2,
    discount: defaultDiscount
  },
  phoneNumber5: {
    value: 2,
    discount: defaultDiscount
  },
  cellPhoneNumber1: {
    value: 2,
    discount: defaultDiscount
  },
  cellPhoneNumber2: {
    value: 2,
    discount: defaultDiscount
  },
  cellPhoneNumber3: {
    value: 2,
    discount: defaultDiscount
  },
  cellPhoneNumber4: {
    value: 2,
    discount: defaultDiscount
  },
  cellPhoneNumber5: {
    value: 2,
    discount: defaultDiscount
  },
  civilStatus: {
    value: 2,
    discount: defaultDiscount
  },
  car: {
    value: 2,
    discount: defaultDiscount
  },
  voterTitle: {
    value: 2,
    discount: defaultDiscount
  },
  zone: {
    value: 2,
    discount: defaultDiscount
  },
  section: {
    value: 2,
    discount: defaultDiscount
  },
  id: {
    value: 2,
    discount: defaultDiscount
  },
  registrationStatus: {
    value: 2,
    discount: defaultDiscount
  },
  educationLevel: {
    value: 2,
    discount: defaultDiscount
  },
  occupation: {
    value: 2,
    discount: defaultDiscount
  },
  socialClass: {
    value: 2,
    discount: defaultDiscount
  },
  death: { value: 29 },
  presumedRevenue: { value: 55 },
  restriction: { value: 23 },
  restrictionTwoBureaux: { value: 114 },
  cnpj: {
    value: 2,
    discount: defaultDiscount
  },
  companyName: {
    value: 2,
    discount: defaultDiscount
  },
  companyFancyName: {
    value: 2,
    discount: defaultDiscount
  },
  openingDate: {
    value: 2,
    discount: defaultDiscount
  },
  branch: {
    value: 2,
    discount: defaultDiscount
  },
  headquarters: {
    value: 2,
    discount: defaultDiscount
  },
  cnae: {
    value: 2,
    discount: defaultDiscount
  },
  presumedBilling: { value: 525 },
  corporateControl: { value: 73 },
  size: {
    value: 2,
    discount: defaultDiscount
  },
  numberOfAssociates: {
    value: 2,
    discount: defaultDiscount
  },
  serasaValidation: {
    value: 4,
    discount: quantity => {
      if (quantity > 10000 && quantity <= 50000) return 0.125
      if (quantity > 50000 && quantity <= 100000) return 0.25
      if (quantity > 100000 && quantity <= 200000) return 0.375
      if (quantity > 200000 && quantity <= 400000) return 0.5
      if (quantity > 400000 && quantity <= 800000) return 0.625
      if (quantity > 800000) return 0.75
      return 0
    }
  }
}

export const calculateDiscount = (attribute, quantity) => {
  const { value, discount } = values[attribute]
  const totalValue = discount ? value - value * discount(quantity) : value
  return totalValue
}

export default values
