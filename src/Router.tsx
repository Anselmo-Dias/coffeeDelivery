import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Cart } from './pages/Cart/Cart'
import { ConfirmedPurchase } from './pages/Cart/confirmedPurchase'
import { Home } from './pages/Home/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/end" element={<ConfirmedPurchase />} />
      </Route>
    </Routes>
  )
}
