import { Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import Form from './Form'
import { InvoiceProvider } from './Invoice'
import InvoiceRender from './InvoiceRender'

export default function App() {
  return (
    <BrowserRouter>
      <InvoiceProvider>
        <Routes>
          <Route path="/render" element={<InvoiceRender />} />
          <Route path="*" element={<FormAndPreview />} />
        </Routes>
      </InvoiceProvider>
    </BrowserRouter>
  )
}

function FormAndPreview() {
  return (
    <>
      <Form />
      <InvoiceRender border />
    </>
  )
}
