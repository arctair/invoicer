import { useInvoice } from './Invoice'

export default function InvoicePreview() {
  const invoice = useInvoice()
  return (
    <div
      style={{
        width: '8.5in',
        height: '11in',
        border: '1px solid red',
        margin: 'auto',
      }}
    >
      <h1>Invoice</h1>
      <div>Project: {invoice.projectName}</div>
      <div>Reference Number: {invoice.referenceNumber}</div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
        <div>
          <h2>Bill To</h2>
          <div>{invoice.billToLineOne}</div>
          <div>{invoice.billToLineTwo}</div>
          <div>{invoice.billToLineThree}</div>
        </div>
        <div>
          <h2>Bill From</h2>
          <div>{invoice.billFromLineOne}</div>
          <div>{invoice.billFromLineTwo}</div>
          <div>{invoice.billFromLineThree}</div>
        </div>
      </div>
      <h2>Billing Period</h2>
      Total: ${invoice.hourCount * invoice.hourlyRate}
    </div>
  )
}
