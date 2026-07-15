import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="min-h-screen bg-gray-50">

      <main className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-8 py-16 gap-60">

        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl font-bold leading-tight text-gray-900">
            Discover the Best Products at Unbeatable Prices
          </h1>

          <h3 className="text-lg text-gray-600 mt-6 leading-8">
            Everything you need, all in one place. Shop the latest fashion,
            electronics, home essentials, and more with fast delivery and
            secure payments.
          </h3>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link to={"/Products"}>
              <button className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition duration-300">
                Shop Now
              </button>
            </Link>
            

            <button className="border-2 border-black px-8 py-3 rounded-lg font-semibold hover:bg-black hover:text-white transition duration-300">
              Explore Collection
            </button>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center ">
          <img
            src="../../public/premium_vector-1682303136986-bd37617f9b75.avif"
            alt=""
            className="w-full max-w-lg drop-shadow-1xl rounded-3xl"
          />
        </div>

      </main>

      {/* Footer */}

      <footer className="bg-black text-white mt-20">

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-8 py-14">

          <div>
            <h2 className="text-3xl font-bold">MugonBro</h2>

            <p className="text-gray-400 mt-4 leading-7">
              Your trusted online shopping destination.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-5">Quick Links</h3>

            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-white cursor-pointer"><a href="#">Home</a></li>
              <li className="hover:text-white cursor-pointer">Shop</li>
              <li className="hover:text-white cursor-pointer">Categories</li>
              <li className="hover:text-white cursor-pointer">About</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
              <li className="hover:text-white cursor-pointer">FAQs</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-5">Customer Services</h3>

            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-white cursor-pointer">Track Order</li>
              <li className="hover:text-white cursor-pointer">Returns</li>
              <li className="hover:text-white cursor-pointer">
                Shipping Policy
              </li>
              <li className="hover:text-white cursor-pointer">
                Privacy Policy
              </li>
              <li className="hover:text-white cursor-pointer">
                Terms & Conditions
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-5">Follow Us</h3>

            <div className="space-y-4">

              <p className="flex items-center gap-3 text-gray-400 hover:text-white cursor-pointer">
                <img
                  src="../../public/facebook.png"
                  alt=""
                  className="w-6 h-6 rounded-full"
                />
                Facebook
              </p>

              <p className="flex items-center gap-3 text-gray-400 hover:text-white cursor-pointer">
                <img
                  src="../../public/instgram.jpg"
                  alt=""
                  className="w-6 h-6 rounded-full"
                />
                Instagram
              </p>

              <p className="flex items-center gap-3 text-gray-400 hover:text-white cursor-pointer">
                <img
                  src="../../public/twiter.png"
                  alt=""
                  className="w-6 h-6 rounded-full"
                />
                Twitter
              </p>

              <p className="flex items-center gap-3 text-gray-400 hover:text-white cursor-pointer">
                <img
                  src="../../public/inkedin.png"
                  alt=""
                  className="w-6 h-6 rounded-full"
                />
                LinkedIn
              </p>

            </div>
          </div>

        </div>

        <div className="border-t border-gray-800 text-center py-5 text-gray-500">
          © 2026 MugonBro. All Rights Reserved.
        </div>

      </footer>

    </div>
  );
};

export default Landing;