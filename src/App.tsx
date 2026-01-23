import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Layout } from "./components/Layout"
import { Home } from "./components/Home"
import { PrivacyPolicy } from "./components/PrivacyPolicy"
import { TermsOfService } from "./components/TermsOfService"
import { AppDownload } from "./components/AppDownload"

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/download" element={<AppDownload />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
