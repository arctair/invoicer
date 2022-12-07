export default function App() {
  return (
    <>
      <h2>Details</h2>
      <div>
        <Label htmlFor="projectName">Project Name:</Label>
        <input name="projectName" />
      </div>
      <div>
        <Label htmlFor="referenceNumber">Reference Number:</Label>
        <input name="referenceNumber" />
      </div>
      <h2>Bill To</h2>
      <div>
        <Label htmlFor="billToLineOne">Line 1:</Label>
        <input name="billToLineOne" />
      </div>
      <div>
        <Label htmlFor="billToLineTwo">Line 2:</Label>
        <input name="billToLineTwo" />
      </div>
      <div>
        <Label htmlFor="billToLineThree">Line 3:</Label>
        <input name="billToLineThree" />
      </div>
      <h2>Bill From</h2>
      <div>
        <Label htmlFor="billFromLineOne">Line 1:</Label>
        <input name="billFromLineOne" />
      </div>
      <div>
        <Label htmlFor="billFromLineTwo">Line 2:</Label>
        <input name="billFromLineTwo" />
      </div>
      <div>
        <Label htmlFor="billFromLineThree">Line 3:</Label>
        <input name="billFromLineThree" />
      </div>
      <div>
        <h2>Billing Period</h2>
        <Label htmlFor="billingPeriodStart">Start:</Label>
        <input name="billingPeriodStart" />
        <Label htmlFor="billingPeriodEnd">End:</Label>
        <input name="billingPeriodEnd" />
      </div>
      <div>
        <Label htmlFor="hourlyRate">Hour Count:</Label>
        <input name="hourCount" />
      </div>
      <div>
        <Label htmlFor="hourlyRate">Hourly Rate:</Label>
        <input name="hourlyRate" />
      </div>
    </>
  )
}

function Label(props: JSX.IntrinsicElements['label']) {
  return <label {...props} />
}
