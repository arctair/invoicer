import Form from './Form'
import { InvoiceProvider } from './Invoice'
import InvoicePreview from './InvoicePreview'

export default function App() {
  return (
    <InvoiceProvider>
      <Form />
      <InvoicePreview />
    </InvoiceProvider>
  )
}
