import React from 'react'

const Contact = () => {
  return (
    <div className="bg-[#f5f2ed] min-h-screen text-[#292929]">

      {/* ================= TITLE ================= */}
      <div className="text-center pt-16 md:pt-20">

        <p className="text-[#a4774e] tracking-[5px] text-sm mb-4">
          GET IN TOUCH
        </p>

        <h1 className="font-serif text-4xl md:text-5xl">
          Contact Us
        </h1>

        <div className="w-16 h-[2px] bg-[#a4774e] mx-auto mt-6"></div>

      </div>


      {/* ================= CONTACT SECTION ================= */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-20">

        <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-center">


          {/* ================= IMAGE ================= */}
          <div className="w-full md:w-1/2">

            <div className="h-[380px] md:h-[480px] overflow-hidden">

              <img
                src="https://images.trvl-media.com/place/6104582/f24d9f92-3543-425e-ad1b-5dddc953941b.jpg"
                alt="Salar Jung Museum"
                className="w-full h-full object-cover"
              />

            </div>

          </div>


          {/* ================= INFORMATION ================= */}
          <div className="w-full md:w-1/2 flex flex-col gap-8">


            {/* ADDRESS */}
            <div>

              <p className="text-[#a4774e] tracking-[3px] text-sm mb-4">
                VISIT US
              </p>

              <h2 className="font-serif text-2xl md:text-3xl mb-4">
                Salar Jung Museum
              </h2>

              <p className="text-gray-600 leading-7">
                Salar Jung Museum Road,
                <br />
                Dar-ul-Shifa,
                <br />
                Hyderabad, Telangana 500002,
                <br />
                India
              </p>

            </div>


            {/* CONTACT */}
            <div>

              <p className="text-[#a4774e] tracking-[3px] text-sm mb-4">
                CONTACT
              </p>

              <p className="text-gray-600 leading-7">
                Tel: +91 40 2452 3211
                <br />
                Email: info@salarjungmuseum.in
              </p>

            </div>


            {/* TIMINGS */}
            <div>

              <p className="text-[#a4774e] tracking-[3px] text-sm mb-4">
                MUSEUM HOURS
              </p>

              <p className="text-gray-600 leading-7">
                Open: 10:00 AM – 5:00 PM
                <br />
                Closed: Friday
              </p>

            </div>


            {/* BUTTON */}
            <div>

              <button
                onClick={() =>
                  window.open(
                    'https://www.google.com/maps/search/?api=1&query=Salar+Jung+Museum+Hyderabad',
                    '_blank'
                  )
                }
                className="border border-[#292929] px-8 py-4 text-sm tracking-wider hover:bg-[#292929] hover:text-white transition-all duration-500"
              >
                GET DIRECTIONS
              </button>

            </div>

          </div>

        </div>

      </div>


      {/* ================= VISITOR SECTION ================= */}
      <section className="bg-[#292929] text-white">

        <div className="max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-20">

          <div className="grid md:grid-cols-3 gap-10">


            {/* PLAN YOUR VISIT */}
            <div>

              <p className="text-[#c49a6c] tracking-[3px] text-sm mb-4">
                PLAN YOUR VISIT
              </p>

              <h3 className="font-serif text-2xl mb-4">
                Before You Arrive
              </h3>

              <p className="text-gray-400 leading-7 text-sm">
                Explore our collections and create a personalized
                museum trail based on your interests and available time.
              </p>

            </div>


            {/* GROUP VISITS */}
            <div>

              <p className="text-[#c49a6c] tracking-[3px] text-sm mb-4">
                GROUP VISITS
              </p>

              <h3 className="font-serif text-2xl mb-4">
                Visiting Together?
              </h3>

              <p className="text-gray-400 leading-7 text-sm">
                Whether you're visiting with family, friends or a
                student group, plan a trail that works for everyone.
              </p>

            </div>


            {/* TOUR */}
            <div>

              <p className="text-[#c49a6c] tracking-[3px] text-sm mb-4">
                MUSEUM TOUR
              </p>

              <h3 className="font-serif text-2xl mb-4">
                Create Your Trail
              </h3>

              <p className="text-gray-400 leading-7 text-sm mb-6">
                Tell us what you love and how much time you have.
                We'll help you discover what to see.
              </p>

              <button
                onClick={() => window.location.href = '/'}
                className="border border-[#c49a6c] text-[#c49a6c] px-6 py-3 text-sm hover:bg-[#c49a6c] hover:text-white transition"
              >
                START YOUR TOUR
              </button>

            </div>

          </div>

        </div>

      </section>

    </div>
  )
}

export default Contact