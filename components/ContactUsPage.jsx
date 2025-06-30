import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function ContactUsPage() {
  return (
    <div className="bg-[#0f0f0f] text-white min-h-screen relative px-6 py-20">
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
        <img
          src={"/images/contact.png"}
          alt="img"
          className="rounded-[18px] hidden lg:block"
        ></img>

        {/* Contact Info */}
        <div className="flex flex-col justify-center bg-[#1a1a1a] p-8 rounded-xl shadow-lg border border-gray-700">
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2 text-pink-500">Email</h3>
            <a
              href="mailto:sixthgenxtech@gmail.com"
              className="text-gray-100 hover:text-amber-400 transition-colors duration-300 underline decoration-transparent hover:decoration-amber-400 hover:underline-offset-4 animate-pulse"
            >
              sixthgenxtech@gmail.com
            </a>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2 text-pink-500">Phone</h3>
            <a
              href="tel:+917988180681"
              className="text-gray-100 hover:text-amber-400 transition-colors duration-300 block hover:underline hover:underline-offset-4 animate-pulse"
            >
              +91 7988180681
            </a>
            <a
              href="tel:+919817612848"
              className="text-gray-100 hover:text-amber-400 transition-colors duration-300 block hover:underline hover:underline-offset-4 animate-pulse"
            >
              +91 9817612848
            </a>
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
      {/* Downward Arrow with Label */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-4 flex flex-col items-center">
        {/* Arrow Icon */}
        <ChevronDownIcon className="h-6 w-6 text-amber-400 animate-bounce" />

        {/* Label */}
        <p className="text-white mt-1 text-sm font-medium">Send us Messages</p>
      </div>
    </div>
  );
}
