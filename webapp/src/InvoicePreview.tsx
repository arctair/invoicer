import { useInvoice } from './Invoice'

export default function InvoicePreview() {
  const { referenceNumber } = useInvoice()
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
      Reference Number: {referenceNumber}
    </div>
  )
}
