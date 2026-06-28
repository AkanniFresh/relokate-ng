import { offers } from "../data/tourData";

export default function OffersSection() {
  return (
    <section className="py-16 container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Offers To Inspire You</h2>
        <div className="w-20 h-1 bg-amber-500 mx-auto mt-4 rounded-full"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {offers.map((offer) => (
          <div 
            key={offer.id}
            className="relative rounded-lg overflow-hidden group"
          >
            <img 
              src={offer.image} 
              alt={offer.title} 
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-5 text-white">
              <div className="bg-amber-500 text-white text-sm font-bold py-1 px-3 rounded-md mb-2 inline-block">
                {offer.discount} OFF
              </div>
              <h3 className="text-lg font-bold">{offer.title}</h3>
              <p className="text-sm opacity-75">{offer.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
