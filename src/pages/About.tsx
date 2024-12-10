export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-indigo-800">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
            alt="Office"
          />
          <div className="absolute inset-0 bg-indigo-800 mix-blend-multiply" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            About Us
          </h1>
          <p className="mt-6 text-xl text-indigo-100 max-w-3xl">
            We're a team of passionate individuals dedicated to delivering innovative solutions
            that drive business success.
          </p>
        </div>
      </div>

      {/* About Us Section */}
      <div className="bg-indigo-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-indigo-600">
            About Us
          </h2>
          <p className="mt-2 text-sm leading-8 font-extrabold tracking-tight text-gray-900 sm:text-2xl">
            At Gloport Photonix Innovations Pvt Ltd, we are a pioneering deep-tech company driven by a mission to transform healthcare through the power of photonics technology. Our journey began with a singular vision—to make early-stage disease detection accessible and effective for everyone, regardless of geography or resources. Today, we are proud to be at the forefront of medical innovation, developing cutting-edge diagnostic tools that empower healthcare providers to detect diseases like lung cancer at their earliest stages, when treatment is most successful.
          </p>
        </div>
      </div>

      {/* Vision Section */}
      <div className="bg-white py-16 sm:py-24 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-indigo-500 text-left">
            Our Vision
          </h2>
          <p className="mt-2 text-xl text-gray-500 lg:mx-auto text-left">
            We envision a world where diseases are detected early, healthcare is accessible to all, and the technology we create improves millions of lives. By leveraging advanced photonics, we aim to deliver solutions that bridge the gap between science and practical healthcare, offering tools that are noninvasive, precise, and scalable.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="bg-indigo-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-indigo-500 text-left">
            Our Mission
          </h2>
          <p className="mt-2 text-xl text-gray-500 lg:mx-auto text-left">
            Our mission is to create breakthrough healthcare solutions that revolutionize the way diseases are diagnosed and treated. At the core of our innovation is photoacoustic technology, which enables noninvasive, real-time detection of critical biomarkers in human breath and other biological samples. Our breath analyzers offer a powerful solution for the early detection of lung cancer and other respiratory diseases, reducing the need for invasive procedures and improving patient outcomes.
          </p>
        </div>
      </div>

      {/* What Sets Us Apart Section */}
      <div className="bg-white py-16 sm:py-24 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-indigo-500 text-left">
            What Sets Us Apart
          </h2>
          <p className="mt-2 text-xl text-gray-500 lg:mx-auto text-left">
            At Gloport Photonix, we combine scientific excellence with cutting-edge technology to create medical devices that address real-world healthcare challenges. Our team is composed of experts in photonics, healthcare, AI technology, and biomedical engineering, all working together to push the boundaries of what’s possible.
          </p>
          {/* List of unique features */}
          <ul className="mt-4 list-disc list-inside text-gray-500">
            <li>Innovation in Photonics: We specialize in harnessing the power of light and sound to detect molecular changes in the human body, making early diagnosis faster, more accurate, and less invasive.</li>
            <li>Focused on Early Detection: Our flagship product, the Advanced Breath Analyzer, is designed to detect diseases at their earliest stages, giving doctors and patients the tools they need to make informed decisions quickly.</li>
            <li>Scalable Solutions for Global Impact: Our technology is not just designed for large hospitals; it’s built to scale across different healthcare environments, from advanced medical centers to rural clinics, ensuring that early detection is available to everyone.</li>
          </ul>
        </div>
      </div>

      {/* Our Commitment to Healthcare Section */}
      <div className="bg-indigo-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-indigo-500 text-left">
            Our Commitment to Healthcare
          </h2>
          <p className="mt-2 text-xl text-gray-500 lg:mx-auto text-left">
            We are committed to improving global healthcare by providing advanced diagnostic tools that not only save lives but also reduce the burden on healthcare systems. Our research and development efforts are continually focused on enhancing our technologies to address a wider range of diseases, making our tools indispensable in the fight against life-threatening conditions.
          </p>
        </div>
      </div>

      {/* Collaborative Innovation Section */}
      <div className="bg-white py-16 sm:py-24 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-indigo-500 text-left">
            Collaborative Innovation
          </h2>
          <p className="mt-2 text-xl text-gray-500 lg:mx-auto text-left">
            At Gloport Photonix, we believe in the power of collaboration. We work closely with leading research institutions, hospitals, and healthcare providers to ensure that our innovations are rooted in practical needs and can make a meaningful impact. By collaborating with the best minds in healthcare and technology, we are able to push the boundaries of diagnostics and create solutions that will shape the future of medicine.
          </p>
        </div>
      </div>

      {/* Our Core Values Section */}
      <div className="bg-indigo-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-indigo-500 text-left">
            Our Core Values
          </h2>
          <ul className="mt-4 list-disc list-inside text-gray-500">
            <li>Innovation: We are driven by a passion for discovering new solutions to complex healthcare problems.</li>
            <li>Integrity: Our commitment to ethical practices and transparency guides everything we do, from research to product development.</li>
            <li>Impact: We measure our success by the positive change we create in the lives of patients and healthcare providers around the world.</li>
            <li>Excellence: We hold ourselves to the highest standards of quality in every aspect of our work, ensuring that our technologies are reliable, accurate, and transformative.</li>
          </ul>
        </div>
      </div>

      {/* Our Team Section */}
      <div className="bg-white py-16 sm:py-24 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-indigo-500 text-left">
            Our Team
          </h2>
          <p className="mt-2 text-xl text-gray-500 lg:mx-auto text-left">
            Behind Gloport Photonix is a team of visionary AI Engineers, Scientists, Deep management experts, and Healthcare professionals, each bringing a unique set of skills to drive our innovations forward. Our team is passionate about creating technologies that can solve critical healthcare challenges and improve outcomes for patients everywhere.
          </p>
        </div>
      </div>

      {/* Join Us on Our Journey Section */}
      <div className="bg-indigo-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-indigo-500 text-left">
            Join Us on Our Journey
          </h2>
          <p className="mt-2 text-xl text-gray-500 lg:mx-auto text-left">
            We are on a mission to change the future of healthcare, one innovation at a time. Whether you are a healthcare provider looking for advanced diagnostic tools, a researcher interested in collaborating, or a patient advocate eager to support early detection efforts, we invite you to join us in our quest to revolutionize healthcare.
          </p>
        </div>
      </div>

      {/* Solutions Section */}
      <div className="bg-white py-16 sm:py-24 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-indigo-500 text-left">
            Solutions
          </h2>
          <p className="mt-2 text-xl text-gray-500 lg:mx-auto text-left">
            At Gloport Photonix Innovations Pvt Ltd, we are dedicated to solving some of the most pressing challenges in healthcare by harnessing the power of photonics technology. Our solutions are designed to improve early disease detection, enhance diagnostics, and enable healthcare providers to deliver more accurate and timely treatments.
          </p>
          {/* Advanced Breath Analyzer Section */}
          <h3 className="mt-4 text-lg font-medium text-gray-900 text-center">Advanced Breath Analyzer for Early Lung Cancer Detection</h3>
          <p className="mt-2 text-base text-gray-500 text-center">
            One of our flagship products, the Advanced Breath Analyzer, represents a breakthrough in non-invasive diagnostic technology. This device uses cutting-edge photoacoustic technology to detect volatile organic compounds (VOCs) in exhaled breath, which serve as biomarkers for diseases such as lung cancer.
          </p>
          {/* List of features */}
          <ul className="mt-4 list-disc list-inside text-gray-500">
            <li>Early Detection of Lung Cancer: Lung cancer is often diagnosed in its late stages, when treatment options are limited. Our breath analyzer enables the early detection of lung cancer by analyzing biomarkers in a simple, non-invasive breath sample.</li>
            <li>Non-Invasive and Painless: Unlike traditional diagnostic methods such as biopsies and imaging scans, our breath analyzer is completely non-invasive.</li>
            <li>Real-Time Results: Powered by multi-wavelength laser technology, the analyzer provides real-time diagnostic results.</li>
            <li>Highly Sensitive and Accurate: The use of photoacoustic spectroscopy allows the device to detect biomarkers at extremely low concentrations.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}