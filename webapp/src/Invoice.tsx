import React, { useContext } from 'react'

export default interface Invoice {
  referenceNumber: string
}

const errMissingProvider = 'invoice context provider is not available'
const context = React.createContext<{
  invoice: Invoice
  methods: { setReferenceNumber: (referenceNumber: string) => void }
}>({
  invoice: {
    referenceNumber: errMissingProvider,
  },
  methods: {
    setReferenceNumber: () => {
      throw Error(errMissingProvider)
    },
  },
})

export function InvoiceProvider(props: React.PropsWithChildren) {
  const [referenceNumber, setReferenceNumber] = React.useState('000000')
  return (
    <context.Provider
      value={{
        invoice: { referenceNumber },
        methods: { setReferenceNumber },
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
