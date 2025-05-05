import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function ContactUsPage() {
  return (
    <div className="bg-[#0f0f0f] text-white min-h-screen px-6 py-20">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Get in <span className="text-pink-500">Touch</span>
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto">
          Have a project in mind? Want to collaborate or just say hello? Drop us
          a message and we’ll get back to you soon.
        </p>
      </div>

      {/* Contact Form */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Form */}
        <img src={"/images/contact2.png"} alt="img" className="rounded-[18px] hidden lg:block">
        </img>

        {/* Contact Info */}
        <div className="flex flex-col justify-center bg-[#1a1a1a] p-8 rounded-xl shadow-lg border border-gray-700">
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2 text-pink-500">Email</h3>
            <p className="text-gray-300">webkutumb81@gmail.com</p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2 text-pink-500">Phone</h3>
            <p className="text-gray-300">+91 7988180681</p>
            <p className="text-gray-300">+91 9817612848</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2 text-pink-500">
              Location
            </h3>
            <p className="text-gray-300">Gurgaon, India</p>
          </div>
         
          <a
            href="https://wa.me/7988180681" // Replace with your number
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="bg-gradient-to-tr mt-16 w-[200px] h-[50px] from-[#25D366] to-[#128C7E] text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-opacity-90 transition-all text-center cursor-pointer">
              WhatsApp
            </div>
           
          </a>
        </div>
      </div>
    </div>
  );
}
