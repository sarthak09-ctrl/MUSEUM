import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#f5f2ed] text-[#292929]">
      {/* ================= HERO ================= */}
      <section className="relative h-[65vh] min-h-[500px] overflow-hidden">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdWQITnZUcFHbc_l8gFwJRunYO4Gc9TK4aEL4zj5_tmwNrMifXgKhE4TI2&s=10"
          alt="Salar Jung Museum"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/55"></div>

        <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16 lg:px-24">
          <p className="text-[#c49a6c] tracking-[6px] text-sm md:text-base mb-5">
            DISCOVER THE COLLECTION
          </p>

          <h1 className="font-serif text-white text-5xl md:text-7xl lg:text-8xl font-bold leading-none">
            Salar Jung
          </h1>

          <h2 className="font-serif text-white text-4xl md:text-6xl lg:text-7xl mt-3">
            Museum
          </h2>

          <p className="text-gray-200 max-w-xl mt-8 text-base md:text-lg leading-relaxed">
            A journey through centuries of art, culture, craftsmanship and
            history, brought together in the heart of Hyderabad.
          </p>
        </div>
      </section>

      {/* ================= INTRODUCTION ================= */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-14 md:gap-20 items-center">
          <div>
            <p className="text-[#a4774e] tracking-[4px] text-sm mb-5">
              ABOUT THE MUSEUM
            </p>

            <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-7">
              A world of art,
              <br />
              history & culture
            </h2>

            <div className="w-20 h-[2px] bg-[#a4774e] mb-7"></div>

            <p className="text-gray-600 leading-8 text-[16px]">
              The Salar Jung Museum in Hyderabad is a remarkable repository of
              artistic achievements from India, Europe, Asia and the Far East.
              Much of its collection was assembled by Nawab Mir Yousuf Ali Khan,
              popularly known as Salar Jung III.
            </p>

            <p className="text-gray-600 leading-8 text-[16px] mt-5">
              The museum brings together paintings, sculptures, manuscripts,
              textiles, furniture, decorative arts and rare objects, offering
              visitors a glimpse into different cultures and periods of history.
            </p>
          </div>

          {/* IMAGE */}
          <div className="relative w-full">
            {/* Museum Image */}
            <div className="w-full h-[450px] overflow-hidden">
              <img
                src="https://images.trvl-media.com/place/6104582/f24d9f92-3543-425e-ad1b-5dddc953941b.jpg"
                alt="Salar Jung Museum Hyderabad"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Location Card */}
            <div className="absolute bottom-0 left-0 md:-left-8 translate-y-1/2 bg-[#292929] text-white px-8 py-7 md:px-10 md:py-8 shadow-lg">
              <p className="font-serif text-3xl md:text-4xl leading-none">
                Hyderabad
              </p>

              <p className="text-[#c49a6c] text-sm tracking-[4px] mt-3">
                INDIA
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= HISTORY ================= */}
      <section className="bg-[#292929] text-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-20 md:py-28">
          <div className="max-w-3xl">
            <p className="text-[#c49a6c] tracking-[4px] text-sm mb-5">
              OUR HISTORY
            </p>

            <h2 className="font-serif text-4xl md:text-6xl mb-8">
              A collection built
              <br />
              across generations
            </h2>

            <div className="w-20 h-[2px] bg-[#c49a6c] mb-8"></div>

            <p className="text-gray-300 leading-8 text-[16px]">
              The collection grew over generations of the Salar Jung family.
              Nawab Mir Yousuf Ali Khan, Salar Jung III, devoted much of his
              later life to collecting and preserving works of art, literature
              and objects from different parts of the world.
            </p>

            <p className="text-gray-300 leading-8 text-[16px] mt-6">
              The museum was opened to the public in 1951 and later moved to its
              present location. Today, it serves as a major cultural institution
              where visitors can explore an extensive range of artistic and
              historical objects.
            </p>
          </div>

          {/* TIMELINE */}
          <div className="grid md:grid-cols-3 gap-10 mt-20">
            <div className="border-t border-gray-600 pt-6">
              <p className="text-[#c49a6c] font-serif text-4xl">1951</p>

              <h3 className="font-serif text-xl mt-3">Museum Opens</h3>

              <p className="text-gray-400 mt-3 leading-7 text-sm">
                The Salar Jung Museum was opened to the public in Hyderabad.
              </p>
            </div>

            <div className="border-t border-gray-600 pt-6">
              <p className="text-[#c49a6c] font-serif text-4xl">1961</p>

              <h3 className="font-serif text-xl mt-3">National Importance</h3>

              <p className="text-gray-400 mt-3 leading-7 text-sm">
                The museum and its library were declared institutions of
                national importance.
              </p>
            </div>

            <div className="border-t border-gray-600 pt-6">
              <p className="text-[#c49a6c] font-serif text-4xl">TODAY</p>

              <h3 className="font-serif text-xl mt-3">A Living Collection</h3>

              <p className="text-gray-400 mt-3 leading-7 text-sm">
                Visitors can explore collections spanning Indian, European,
                Asian and Far Eastern traditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= COLLECTIONS ================= */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-20 md:py-28">
        <div className="text-center mb-14">
          <p className="text-[#a4774e] tracking-[4px] text-sm mb-4">EXPLORE</p>

          <h2 className="font-serif text-4xl md:text-5xl">
            What You Can Discover
          </h2>

          <p className="max-w-2xl mx-auto text-gray-600 mt-5 leading-7">
            From sculptures and paintings to manuscripts and decorative arts,
            every gallery offers a different story.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* CARD 1 */}
          <div className="bg-white p-8 border border-[#e3ded7] hover:-translate-y-2 transition duration-300">
            <span className="text-[#a4774e] text-3xl font-serif">01</span>

            <h3 className="font-serif text-2xl mt-6">Sculptures</h3>

            <p className="text-gray-500 leading-7 mt-4">
              Explore sculptures representing different artistic traditions and
              periods.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-white p-8 border border-[#e3ded7] hover:-translate-y-2 transition duration-300">
            <span className="text-[#a4774e] text-3xl font-serif">02</span>

            <h3 className="font-serif text-2xl mt-6">Paintings</h3>

            <p className="text-gray-500 leading-7 mt-4">
              Discover paintings from Indian and international artistic
              traditions.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-white p-8 border border-[#e3ded7] hover:-translate-y-2 transition duration-300">
            <span className="text-[#a4774e] text-3xl font-serif">03</span>

            <h3 className="font-serif text-2xl mt-6">Manuscripts</h3>

            <p className="text-gray-500 leading-7 mt-4">
              Discover rare manuscripts, calligraphy and historic works of
              literature.
            </p>
          </div>

          {/* CARD 4 */}
          <div className="bg-white p-8 border border-[#e3ded7] hover:-translate-y-2 transition duration-300">
            <span className="text-[#a4774e] text-3xl font-serif">04</span>

            <h3 className="font-serif text-2xl mt-6">Jade & Decorative Arts</h3>

            <p className="text-gray-500 leading-7 mt-4">
              See finely crafted objects including jade, decorative objects and
              ceremonial pieces.
            </p>
          </div>

          {/* CARD 5 */}
          <div className="bg-white p-8 border border-[#e3ded7] hover:-translate-y-2 transition duration-300">
            <span className="text-[#a4774e] text-3xl font-serif">05</span>

            <h3 className="font-serif text-2xl mt-6">European Art</h3>

            <p className="text-gray-500 leading-7 mt-4">
              Experience paintings, sculptures and objects representing European
              artistic traditions.
            </p>
          </div>

          {/* CARD 6 */}
          <div className="bg-white p-8 border border-[#e3ded7] hover:-translate-y-2 transition duration-300">
            <span className="text-[#a4774e] text-3xl font-serif">06</span>

            <h3 className="font-serif text-2xl mt-6">Textiles & Furniture</h3>

            <p className="text-gray-500 leading-7 mt-4">
              Explore historic textiles, furniture and objects reflecting
              different cultures.
            </p>
          </div>
        </div>
      </section>

      {/* ================= TOUR CTA ================= */}
      <section className="bg-[#b08a61]">
        <div className="max-w-5xl mx-auto px-6 py-20 text-center">
          <p className="text-white/80 tracking-[4px] text-sm mb-5">
            PLAN YOUR VISIT
          </p>

          <h2 className="font-serif text-white text-4xl md:text-6xl">
            Your museum journey
            <br />
            starts here.
          </h2>

          <p className="text-white/90 max-w-xl mx-auto mt-6 leading-7">
            Tell us what interests you and how much time you have. We'll help
            you discover a personalized trail through the museum.
          </p>

          <button
            onClick={() => navigate("/")}
            className="mt-9 bg-[#292929] text-white px-9 py-4 tracking-widest text-sm hover:bg-black transition"
          >
            CREATE YOUR TOUR
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
