import { arrowRight } from "../assets/icons"
import {offer} from "../assets/images"
import Button from "../components/Button"
const SpecialOffers = () => {
  return (
    <section className="flex justify-center items-center max-lg:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img src={offer} alt="special offer" width={733} height={687} 
        className="object-contain w-full"/>
      </div>
      <div className="flex flex-1 flex-col">
      <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-coral-red"> Special </span>
          Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring premium comfort and  style, our meticulously crafted footware is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.</p>
          <p className="mt-6 lg:max-w-lg info-text">Our dedication to detail and excellence your satisfaction.</p>
          <div className="mt-11 flex flex-wrap gap-4">
            <Button  label="Shop now" iconURL={arrowRight}/>
            <Button label="Learn More"
            bgClr="bg-white" bdrClr="border-slate-gray" txtClr="text-slate-grey"/>
          </div>
      </div>
    </section>
  )
}

export default SpecialOffers