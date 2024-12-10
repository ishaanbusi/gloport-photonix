import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from 'react';

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-indigo-800">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
            alt="Hero"
          />
          <div className="absolute inset-0 bg-indigo-800 mix-blend-multiply" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 text-left">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            <span className="block">Revolutionizing Healthcare & Life Sciences through Advanced Photonics Technology</span>
          </h1>
          <p className="mt-6 text-xl text-indigo-100 max-w-3xl">
            At Gloport Photonix, we are committed to creating cutting-edge solutions that empower early disease detection, drive innovation in medical diagnostics, and enhance healthcare outcomes.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Link
              to="/technology"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 transition duration-300"
            >
              Learn About Our Technology
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-700 transition duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Popup Section */}
      {showPopup && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm">
    <div className="relative bg-white p-8 rounded-2xl shadow-2xl max-w-sm text-center transform scale-100 transition-all duration-300 ease-in-out">
      <button
        onClick={handleClosePopup}
        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition duration-200"
      >
        ✕
      </button>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">🚀 Get 40% revenue increment</h2>
      <p className="text-gray-600 mb-6">
        Unlock a 40% increase in revenue with us. Don’t miss out!
      </p>
      <button className="w-full px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-500 transition duration-300">
        Get my 40% Now
      </button>
    </div>
  </div>
)}


      {/* Introduction Section */}
      <section className="py-16 bg-white shadow-lg flex flex-col md:flex-row">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1">
          <div className="text-left">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-indigo-600">
              About Gloport Photonix Innovations Pvt Ltd
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Gloport Photonix is a deep-tech company at the forefront of developing advanced healthcare & Life science’s solutions using photonics technology. Our mission is to transform the global healthcare landscape by enabling early-stage disease detection, particularly in cancer diagnostics, and delivering breakthrough innovations that push the boundaries of medical science. Our technologies are designed to be non-invasive, highly accurate, and accessible to healthcare providers worldwide.
            </p>
          </div>
        </div>
        <div className="flex-1">
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80" alt="About Gloport Photonix" className="w-full h-auto rounded-lg" />
        </div>
      </section>

      {/* Solutions Overview Section */}
      <section className="py-16 bg-gray-50 flex flex-col md:flex-row">
        <div className="flex-1">
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80" alt="Innovative Solutions" className="w-full h-auto rounded-lg" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1">
          <div className="text-left">
            <h2 className="text-2xl font-bold text-indigo-500">
              Innovative Solutions for Early Detection
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Early diagnosis saves lives, and at Gloport Photonix, we are pioneering new ways to detect diseases before symptoms arise. Our flagship product, the Advanced Breath Analyzer, leverages photoacoustic technology to identify disease markers in exhaled breath with unmatched sensitivity.
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <h3 className="text-xl font-bold text-gray-800">Non-Invasive Testing</h3>
                <p className="mt-2 text-gray-600">Our breath analyzer is designed to provide accurate results without the need for invasive procedures.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <h3 className="text-xl font-bold text-gray-800">Real-Time Diagnostics</h3>
                <p className="mt-2 text-gray-600">By harnessing the power of multi-wavelength lasers and advanced signal processing, our technology delivers instant, real-time insights.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <h3 className="text-xl font-bold text-gray-800">Scalable Solutions</h3>
                <p className="mt-2 text-gray-600">Built to serve both large hospitals and remote healthcare facilities, our products are accessible and adaptable.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white shadow-lg flex flex-col md:flex-row">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1">
          <div className="text-left">
            <h2 className="text-2xl font-bold text-indigo-500">
              Our Mission
            </h2>
            <p className="mt-4 text-lg text-gray-600">
            At Gloport Photonix, we believe in the power of innovation to change the world. Our mission is to
develop photonics-based technologies that not only improve healthcare outcomes but also make early
diagnostics more accessible across diverse populations. Through continuous research, collaboration, and
technological advancement, we are committed to building a future where early-stage disease detection
is the norm, not the exception.
            </p>
          </div>
        </div>
        <div className="flex-1">
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80" alt="Our Mission" className="w-full h-auto rounded-lg" />
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left">
            <h2 className="text-2xl font-bold text-indigo-500">
              Driving Innovation in Healthcare
            </h2>
            <p className="mt-4 text-lg text-gray-600">
            Our groundbreaking research in photonics allows us to harness light to detect and measure biological
changes at a molecular level. By combining laser technologies with advanced data analytics, we’ve built
a robust platform for detecting critical disease markers early—when treatment is most effective.
Whether it's through our breath analyzers or future diagnostic tools, we are continuously pushing the
boundaries of what’s possible in healthcare.            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <h3 className="text-xl font-bold text-gray-800">Photoacoustic Spectroscopy</h3>
                <p className="mt-2 text-gray-600">Harnessing sound waves generated by laser-light interactions to detect biomarkers in real time.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <h3 className="text-xl font-bold text-gray-800">IoT-Integrated Systems</h3>
                <p className="mt-2 text-gray-600">Enabling continuous monitoring and data-driven insights to personalize patient care.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left">
            <h2 className="text-2xl font-bold text-indigo-500">
              Why Choose Gloport Photonix?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
            With our unique blend of scientific expertise and innovative product development, Gloport Photonix
offers revolutionary solutions that can redefine healthcare diagnostics. Our advanced breath analyzers
are built with a vision to help doctors detect diseases earlier, improving survival rates and enhancing
patient outcomes.            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <h3 className="text-xl font-bold text-gray-800">Precision and Accuracy</h3>
                <p className="mt-2 text-gray-600">Our devices deliver industry-leading accuracy in detecting even the smallest trace of disease markers.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <h3 className="text-xl font-bold text-gray-800">Scalability</h3>
                <p className="mt-2 text-gray-600">From large healthcare institutions to rural clinics, our solutions are built to scale and adapt to different healthcare environments.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <h3 className="text-xl font-bold text-gray-800">Global Reach</h3>
                <p className="mt-2 text-gray-600">We are committed to making our technology accessible worldwide, ensuring that everyone benefits from advanced diagnostics.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left">
            <h2 className="text-2xl font-bold text-indigo-500">
              What Our Partners Are Saying:
            </h2>
            <Slider {...{
              dots: true,
              infinite: true,
              speed: 500,
              slidesToShow: 1,
              slidesToScroll: 1,
            }}>
              <blockquote className="mt-4 text-lg text-gray-600 italic">
                “Gloport Photonix is on the cutting edge of healthcare innovation. Their focus on early detection technologies will change the way we diagnose and treat diseases worldwide.”
                <footer className="mt-2 text-gray-500">– Dr. A. Sharma, Chief Medical Officer</footer>
              </blockquote>
              <blockquote className="mt-4 text-lg text-gray-600 italic">
                “The technology developed by Gloport Photonix has transformed our approach to diagnostics.”
                <footer className="mt-2 text-gray-500">– Dr. B. Patel, Healthcare Innovator</footer>
              </blockquote>
              <blockquote className="mt-4 text-lg text-gray-600 italic">
                “Their commitment to early detection is truly commendable and impactful.”
                <footer className="mt-2 text-gray-500">– Dr. C. Lee, Medical Director</footer>
              </blockquote>
            </Slider>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-indigo-50">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-indigo-600 sm:text-4xl">
              Ready to Learn More?
            </h2>
            <p className="mt-4 text-lg leading-6 text-indigo-500">
              We’re excited to partner with healthcare providers, researchers, and innovators. Explore our technology, contact us for collaboration opportunities, or learn how you can benefit from our solutions.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <Link
                to="/technology"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 transition duration-300"
              >
                Learn About Our Technology
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-700 transition duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}