import { useInvoice, useInvoiceMethods } from './Invoice'

export default function Form() {
  const invoice = useInvoice()
  const methods = useInvoiceMethods()
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
          value={invoice.projectName}
          onChange={(e) => methods.setProjectName(e.target.value)}
        />
        <Label htmlFor="hourlyRate">Hourly Rate:</Label>
        <input
          name="hourlyRate"
          value={invoice.hourlyRateAsString}
          onChange={(e) => methods.setHourlyRate(e.target.value)}
        />
      </>
      <>
        <Header>Bill To</Header>
        <Label htmlFor="billToLineOne">Line 1:</Label>
        <input
          name="billToLineOne"
          value={invoice.billToLineOne}
          onChange={(e) => methods.setBillToLineOne(e.target.value)}
        />
        <Label htmlFor="billToLineTwo">Line 2:</Label>
        <input
          name="billToLineTwo"
          value={invoice.billToLineTwo}
          onChange={(e) => methods.setBillToLineTwo(e.target.value)}
        />
        <Label htmlFor="billToLineThree">Line 3:</Label>
        <input
          name="billToLineThree"
          value={invoice.billToLineThree}
          onChange={(e) => methods.setBillToLineThree(e.target.value)}
        />
      </>
      <>
        <Header>Bill From</Header>
        <Label htmlFor="billFromLineOne">Line 1:</Label>
        <input
          name="billFromLineOne"
          value={invoice.billFromLineOne}
          onChange={(e) => methods.setBillFromLineOne(e.target.value)}
        />
        <Label htmlFor="billFromLineTwo">Line 2:</Label>
        <input
          name="billFromLineTwo"
          value={invoice.billFromLineTwo}
          onChange={(e) => methods.setBillFromLineTwo(e.target.value)}
        />
        <Label htmlFor="billFromLineThree">Line 3:</Label>
        <input
          name="billFromLineThree"
          value={invoice.billFromLineThree}
          onChange={(e) => methods.setBillFromLineThree(e.target.value)}
        />
      </>
      <>
        <Header>Billing Period</Header>
        <Label htmlFor="referenceNumber">Reference Number:</Label>
        <input
          name="referenceNumber"
          value={invoice.referenceNumber}
          onChange={(e) => methods.setReferenceNumber(e.target.value)}
        />
        <Label htmlFor="billingPeriodStart">Start:</Label>
        <input name="billingPeriodStart" />
        <Label htmlFor="billingPeriodEnd">End:</Label>
        <input name="billingPeriodEnd" />
        <Label htmlFor="hourlyRate">Hour Count:</Label>
        <input
          name="hourCount"
          value={invoice.hourCountAsString}
          onChange={(e) => methods.setHourCount(e.target.value)}
        />
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
