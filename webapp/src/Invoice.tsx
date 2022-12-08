import React, { useContext } from 'react'

export default interface Invoice {
  billFromLineOne: string
  billFromLineTwo: string
  billFromLineThree: string
  billToLineTwo: string
  billToLineThree: string
  billToLineOne: string
  referenceNumber: string
}

const errMissingProvider = 'invoice context provider is not available'
const throwErrMissingProvider = () => {
  throw Error(errMissingProvider)
}
const context = React.createContext<{
  invoice: Invoice
  methods: {
    setBillFromLineOne(value: string): void
    setBillFromLineTwo(value: string): void
    setBillFromLineThree(value: string): void
    setReferenceNumber: React.Dispatch<string>
    setBillToLineOne: React.Dispatch<string>
    setBillToLineTwo: React.Dispatch<string>
    setBillToLineThree: React.Dispatch<string>
  }
}>({
  invoice: {
    referenceNumber: errMissingProvider,
    billToLineOne: errMissingProvider,
    billToLineTwo: errMissingProvider,
    billToLineThree: errMissingProvider,
    billFromLineOne: errMissingProvider,
    billFromLineTwo: errMissingProvider,
    billFromLineThree: errMissingProvider,
  },
  methods: {
    setReferenceNumber: throwErrMissingProvider,
    setBillToLineOne: throwErrMissingProvider,
    setBillToLineTwo: throwErrMissingProvider,
    setBillToLineThree: throwErrMissingProvider,
    setBillFromLineOne: throwErrMissingProvider,
    setBillFromLineTwo: throwErrMissingProvider,
    setBillFromLineThree: throwErrMissingProvider,
  },
})

export function InvoiceProvider(props: React.PropsWithChildren) {
  const [referenceNumber, setReferenceNumber] = React.useState('000000')
  const [billToLineOne, setBillToLineOne] = React.useState('Example LLC')
  const [billToLineTwo, setBillToLineTwo] = React.useState(
    '12345 Example Way S #999',
  )
  const [billToLineThree, setBillToLineThree] = React.useState(
    'Seattle, WA 98101',
  )
  const [billFromLineOne, setBillFromLineOne] = React.useState(
    'Example LLC',
  )
  const [billFromLineTwo, setBillFromLineTwo] = React.useState(
    '12345 Example Way S #999',
  )
  const [billFromLineThree, setBillFromLineThree] = React.useState(
    'Seattle, WA 98101',
  )
  return (
    <context.Provider
      value={{
        invoice: {
          referenceNumber,
          billToLineOne,
          billToLineTwo,
          billToLineThree,
          billFromLineOne,
          billFromLineTwo,
          billFromLineThree,
        },
        methods: {
          setReferenceNumber,
          setBillToLineOne,
          setBillToLineTwo,
          setBillToLineThree,
          setBillFromLineOne,
          setBillFromLineTwo,
          setBillFromLineThree,
        },
      }}
      {...props}
    />
  )
}

export function useInvoice() {
  return useContext(context).invoice
}

export function useInvoiceMethods() {
  return useContext(context).methods
}
