import React from 'react'
import { useInvoice } from './Invoice'

export default function InvoicePreview() {
  const invoice = useInvoice()
  return (
    <Letter>
      <LetterContent>
        <Section>
          <h1>Invoice</h1>
          <div>Project: {invoice.projectName}</div>
          <div>Reference Number: {invoice.referenceNumber}</div>
        </Section>
        <Section>
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
        </Section>
        <Section>
          <h2>Billing Period</h2>
          <div>Start Date: {invoice.startDate}</div>
          <div>End Date: {invoice.endDate}</div>
          <div>Hourly Rate: ${invoice.hourlyRateAsString}</div>
          <div>Number of Hours: {invoice.hourCountAsString}</div>
          <div>Total: ${invoice.hourCount * invoice.hourlyRate}</div>
        </Section>
      </LetterContent>
    </Letter>
  )
}

function Letter(props: React.PropsWithChildren) {
  return (
    <div
      style={{
        width: '8.5in',
        height: '11in',
        border: '1px solid red',
        margin: 'auto',
      }}
      {...props}
    />
  )
}

function LetterContent(props: React.PropsWithChildren) {
  return <div style={{ margin: '2rem' }} {...props} />
}

function Section(props: React.PropsWithChildren) {
  return <div style={{ margin: '2rem 0' }} {...props} />
}
