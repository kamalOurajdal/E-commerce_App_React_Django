import React from "react";
import contact_uc_img from "../media/contact_us.jpg";

function Contact() {
  return (
    <section className="  pt-10 pb-32">
      <div className="w-[84%]  m-auto ">
        <h1 className="font-bold text-3xl">Contact us</h1>
        <p className="text-gray-500 mt-6">
          If you have questions, need assistance with a problem, or simply want
          to provide feedback on your experience, <br /> you have various
          avenues to get in touch with us. We're committed to swiftly and
          effortlessly resolving your concerns,
          <br /> allowing you to return to your top priorities, such as enjoying
          your recently acquired sofa.
        </p>
        <div
          className="relative mt-10 w-full  h-96 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${contact_uc_img})` }}
        >
          <div className="absolute text-gray-500 inset-x-0 -bottom-24 flex justify-center items-center">
            <div className="w-2/3 grid grid-cols-2 gap-4">
              <div className="bg-white p-4 shadow-md">
                <i className="fa-solid fa-phone m-auto mb-2 text-2xl bg-[#f6f9fc] w-12 h-12 rounded-full flex items-center justify-center text-blue-500"></i>
                <p>
                  If you like to hear a voice at the other end, we're there for
                  you with everything you need. Call +212 506070809
                </p>
              </div>

              <div className="bg-white p-3 shadow-md rounded-md">
                <i className="fa-brands fa-whatsapp m-auto mb-2 text-3xl bg-[#f6f9fc] w-12 h-12 rounded-full flex items-center justify-center text-[#25D366]"></i>

                <p>
                  As we always strive to give you the best service, we're now
                  available on WhatsApp at +212 07080910 from 8 a.m. to 10:00
                  p.m. to assist you with all your needs.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-40 flex flex-col items-center m-auto ">
          <div>
            <h1 className="font-bold text-xl text-center text-gray-600">Send us a message</h1>
            <p className="text-gray-500 mt-2">
              Because you might need help anytime, day-or-night. So email
              and we'll get back <br />to you as soon as possible.
            </p>
          </div>

          <form className="mt-4 w-1/2 border p-6 rounded bg-[#f6f9fc] shadow-md ">
            <div className=" space-y-5">
              <div>
                <label className="block text-sm ml-4">Full Name</label>
                <input
                  type="text"
                  className="pl-4 w-full border border-gray-300 p-2 rounded-md focus:outline-none"
                />
              </div>
              <div >
                <label className="block text-sm ml-4">Subject Name</label>
                <input
                  type="text"
                  className="pl-4 w-full border border-gray-300 p-2 rounded-md focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm ml-4">Email</label>
                <input
                  type="text"
                  className="pl-4 w-full border border-gray-300 p-2 rounded-md focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm ml-4">Phone</label>
                <input
                  type="text"
                  className="pl-4 w-full border border-gray-300 p-2 rounded-md focus:outline-none"
                />
                <button
                  type="submit"
                  className="pl-4 bg-[#f6f9fc] text-blue-500 border border-blue-500 px-4 py-2 rounded-md mt-4"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
