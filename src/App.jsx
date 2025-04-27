import Nav from "./components/Nav"
import { Hero, PopularProducts, SuperQuality, Services, SpecialOffer, CustomerReviews, Subscribe, Footer } from "./sections"
const App = () => {
  return (
    <main className="relative">
      <Nav />
      <section>
        <Hero />
      </section>
      <section className="padding mx-6">
        <PopularProducts />
      </section>
      <section className="padding mx-6">
        <SuperQuality />
      </section>

      <section className="mx-16 my-8">
        <Services />
      </section>

      <section className="padding my-8">
        <SpecialOffer />
      </section>

      <section className="padding bg-[#ebeefe]">
        <CustomerReviews />
      </section>

      <section className="padding">
        <Subscribe />
      </section>

      <section className="bg-black padding text-white-400">
        <Footer />
      </section>

    </main>
  )
}

export default App;