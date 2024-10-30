/*
  1. Navbar
    a. logo
    b. pages redirect
  2. hero section
    a. background image
    b. title
    c. subtitle
    d. button
  3. about section
    a. title
    b. description
    c. cards (our services, quality assurance, customer satisfaction)
  4. The collection
    a. card (image, title, price) -> coming from admin user
  5. Instagram feed
    a. images -> coming from instagram account
  6. Contact us
    a. email
    b. phone number
    c. address
*/
import "./App.css";
import Navbar from "./features/navbar/Navbar";
import Hero from "./features/hero/Hero";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
    </>
  );
}

export default App;
