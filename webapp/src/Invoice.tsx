import React, { useContext } from 'react'

export default interface Invoice {
  projectName: string
  hourlyRate: number
  hourlyRateAsString: string
  billFromLineOne: string
  billFromLineTwo: string
  billFromLineThree: string
  billToLineTwo: string
  billToLineThree: string
  billToLineOne: string
  referenceNumber: string
  startDate: string
  endDate: string
  hourCount: number
  hourCountAsString: string
}

const errMissingProvider = 'invoice context provider is not available'
const throwErrMissingProvider = () => {
  throw Error(errMissingProvider)
}
const context = React.createContext<{
  invoice: Invoice
  methods: {
    setProjectName: React.Dispatch<string>
    setHourlyRate: React.Dispatch<string>
    setBillFromLineOne(value: string): void
    setBillFromLineTwo(value: string): void
    setBillFromLineThree(value: string): void
    setBillToLineOne: React.Dispatch<string>
    setBillToLineTwo: React.Dispatch<string>
    setBillToLineThree: React.Dispatch<string>
    setReferenceNumber: React.Dispatch<string>
    setStartDate: React.Dispatch<string>
    setEndDate: React.Dispatch<string>
    setHourCount: React.Dispatch<string>
  }
}>({
  invoice: {
    projectName: errMissingProvider,
    hourlyRate: 0,
    hourlyRateAsString: '0.00',
    billToLineOne: errMissingProvider,
    billToLineTwo: errMissingProvider,
    billToLineThree: errMissingProvider,
    billFromLineOne: errMissingProvider,
    billFromLineTwo: errMissingProvider,
    billFromLineThree: errMissingProvider,
    referenceNumber: errMissingProvider,
    startDate: errMissingProvider,
    endDate: errMissingProvider,
    hourCount: 0,
    hourCountAsString: '0',
  },
  methods: {
    setProjectName: throwErrMissingProvider,
    setHourlyRate: throwErrMissingProvider,
    setBillToLineOne: throwErrMissingProvider,
    setBillToLineTwo: throwErrMissingProvider,
    setBillToLineThree: throwErrMissingProvider,
    setBillFromLineOne: throwErrMissingProvider,
    setBillFromLineTwo: throwErrMissingProvider,
    setBillFromLineThree: throwErrMissingProvider,
    setReferenceNumber: throwErrMissingProvider,
    setStartDate: throwErrMissingProvider,
    setEndDate: throwErrMissingProvider,
    setHourCount: throwErrMissingProvider,
  },
})

export function InvoiceProvider(props: React.PropsWithChildren) {
  const [projectName, setProjectName] = React.useState('Example Project')
  const [hourlyRateAsString, setHourlyRateAsString] = React.useState(
    '0.00',
  )
  const [hourlyRate, setHourlyRate] = React.useState(0)
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
  const [referenceNumber, setReferenceNumber] = React.useState('000000')
  const [startDate, setStartDate] = React.useState(
    'Thursday, January 1, 1970 (1/1/70)',
  )
  const [endDate, setEndDate] = React.useState(
    'Wednesday, January 7, 1970 (1/7/70)',
  )
  const [hourCount, setHourCount] = React.useState(0)
  const [hourCountAsString, setHourCountAsString] = React.useState('0')
  return (
    <context.Provider
      value={{
        invoice: {
          projectName,
          hourlyRate,
          hourlyRateAsString,
          billToLineOne,
          billToLineTwo,
          billToLineThree,
          billFromLineOne,
          billFromLineTwo,
          billFromLineThree,
          referenceNumber,
          startDate,
          endDate,
          hourCount,
          hourCountAsString,
        },
        methods: {
          setProjectName,
          setHourlyRate: (s) => {
            setHourlyRateAsString(s)
            setHourlyRate(parseFloat(s))
          },
          setBillToLineOne,
          setBillToLineTwo,
          setBillToLineThree,
          setBillFromLineOne,
          setBillFromLineTwo,
          setBillFromLineThree,
          setReferenceNumber,
          setStartDate,
          setEndDate,
          setHourCount: (s) => {
            setHourCountAsString(s)
            setHourCount(parseFloat(s))
          },
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
