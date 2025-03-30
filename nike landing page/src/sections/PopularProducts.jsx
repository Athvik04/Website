import { products } from "../constants"
import PopularProductCard from "../components/PopularProductCard"

const PopularProducts = () => {
  return (
    <section id="products"
    className="max-cotainer max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          Our
          <span className="text-coral-red"> Popular </span>
          Products</h2>
        <p className="lg:max-w-lg ">Experience top-notch Quality and Style with our sought-after selections. Discover a world of comfort, design, and value.</p>
      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
        {products.map((product) => (  
          <PopularProductCard key={product.name} {...product} />
        ))}

      </div>
    </section>
  )
}

export default PopularProducts