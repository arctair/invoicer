import { useInvoice, useInvoiceMethods } from './Invoice'

export default function Form() {
  const { referenceNumber } = useInvoice()
  const { setReferenceNumber } = useInvoiceMethods()
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '10rem 20rem',
        width: '30rem',
        margin: '1rem auto',
      }}
    >
      <>
        <Header>Details</Header>
        <Label htmlFor="projectName">Project Name:</Label>
        <input
          name="projectName"
          value={referenceNumber}
          onChange={(e) => setReferenceNumber(e.target.value)}
        />
        <Label htmlFor="hourlyRate">Hourly Rate:</Label>
        <input name="hourlyRate" />
      </>
      <>
        <Header>Bill To</Header>
        <Label htmlFor="billToLineOne">Line 1:</Label>
        <input name="billToLineOne" />
        <Label htmlFor="billToLineTwo">Line 2:</Label>
        <input name="billToLineTwo" />
        <Label htmlFor="billToLineThree">Line 3:</Label>
        <input name="billToLineThree" />
      </>
      <>
        <Header>Bill From</Header>
        <Label htmlFor="billFromLineOne">Line 1:</Label>
        <input name="billFromLineOne" />
        <Label htmlFor="billFromLineTwo">Line 2:</Label>
        <input name="billFromLineTwo" />
        <Label htmlFor="billFromLineThree">Line 3:</Label>
        <input name="billFromLineThree" />
      </>
      <>
        <Header>Billing Period</Header>
        <Label htmlFor="referenceNumber">Reference Number:</Label>
        <input name="referenceNumber" />
        <Label htmlFor="billingPeriodStart">Start:</Label>
        <input name="billingPeriodStart" />
        <Label htmlFor="billingPeriodEnd">End:</Label>
        <input name="billingPeriodEnd" />
        <Label htmlFor="hourlyRate">Hour Count:</Label>
        <input name="hourCount" />
      </>
    </div>
  )
}

function Header({ children, ...props }: JSX.IntrinsicElements['h2']) {
  return (
    <h2 style={{ gridColumn: '1/3' }} {...props}>
      {children}
    </h2>
  )
}

function Label(props: JSX.IntrinsicElements['label']) {
  return <label {...props} />
}
