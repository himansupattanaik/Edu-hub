import { CommonHeroSection } from "@/components/core";
import { PublicLayout } from "@/layouts";
import { LocationOn, Mail, Phone } from "@mui/icons-material";

function contactus({
  email = "name232@gmail.com",
  officeAddress = "Bhubaneswar",
  phone = "+91 0534573049",
}: any) {
  return (
    <>
      <PublicLayout title="Contact | Edu-Hub-Learning">
        <CommonHeroSection title="ContactUs" />
        <section className="bg-white grid h-[100%]  w-full">
          <div className="main-container md:main-container  rounded-3xl">
            <iframe
              className=" main-container  rounded-3xl"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119743.53788645907!2d85.73805123197222!3d20.300864868626256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909d2d5170aa5%3A0xfc580e2b68b33fa8!2sBhubaneswar%2C%20Odisha!5e0!3m2!1sen!2sin!4v1705766644078!5m2!1sen!2sin"
              width="450"
              height="500"
              loading="lazy"
            ></iframe>
          </div>
          <div className=" grid  rounded-md py-8  2xl:grid-cols-2   grid-rows-[1fr, 1fr]  lg:grid-cols-2 w-[80%] h-[100%] lg:h-[100vh] place-self-center border  border-emerald-200 my-5   ">
            <div className="h-50 grid w-full">
              <div className="h-[90vh] w-[90%] lg:h-[80vh]  relative grid place-self-center rounded-2xl lg:py-10 main-container bg-emerald-50">
                {/* Phone Section */}
                <div className="flex  flex-col pt-6 gap-9  lg:gap-28 md:flex-row lg:flex-row  items-center">
                  <div className="bg-white rounded-full p-4 md:p-7 h-10 w-10 lg:h-16 lg:w-16 flex items-center justify-center border outline outline-offset-8 outline-slate-200 hover:bg-green-600">
                    <Phone className="text-green-600 lg:text-4xl md:text-3xl hover:text-white" />
                  </div>
                  <div className=" md:text-xl">
                    <p className=" text-green-600">phone no.</p>
                    <p className="md:text-3xl lg:text-2xl">{phone}</p>
                  </div>
                </div>
                {/* Email Section */}
                <div className="flex  flex-col md:flex-row lg:flex-row pt-6 gap-9   lg:gap-28 items-center border-t border-slate-300">
                  <div className="bg-white p-4 md:p-7 rounded-full h-10 w-10 lg:h-16 lg:w-16 flex items-center justify-center border outline outline-offset-8 outline-slate-200 hover:bg-green-600">
                    <Mail className="text-green-600 lg:text-4xl hover:text-white" />
                  </div>
                  <div className=" md:text-xl ">
                    <p className=" text-green-600">Email address</p>
                    <p className=" md:text-3xl lg:text-2xl">{email}</p>
                  </div>
                </div>
                {/* Office Address Section */}
                <div className="flex  flex-col pt-6 gap-9  lg:gap-28 md:flex-row lg:flex-row items-center border-t border-slate-300">
                  <div className="bg-white p-4 md:p-7 rounded-full h-10 w-10 lg:h-16 lg:w-16 flex items-center justify-center border outline outline-offset-8 outline-slate-200 hover:bg-green-600 ">
                    <LocationOn className="text-green-600  lg:text-4xl hover:text-white" />
                  </div>
                  <div className=" md:text-xl">
                    <p className=" text-green-600">Office Address</p>
                    <p className=" md:text-3xl lg:text-2xl">{officeAddress}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center  ">
              {/* Contact Form Section */}
              <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
                <div>
                  <h2 className="text-2xl lg:text-3xl lg:pb-20  md:text-3xl font-bold text-center text-green-400 lg:pt-3  pb-7">
                    Get in Touch With Us
                  </h2>
                </div>
                <div className="space-y-3">
                  <div className="mt-2">
                    <input
                      id="name"
                      className="flex h-16 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      placeholder="Enter your Name"
                    />
                  </div>
                  <div className="mt-2">
                    <input
                      id="email"
                      className="flex h-16 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="mt-2">
                    <input
                      id="subject"
                      className="flex h-16 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      placeholder="Subject"
                    />
                  </div>
                  <div className="mt-2">
                    <input
                      id="message"
                      className="flex h-16 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      placeholder="Enter your message"
                    />
                  </div>
                </div>
                <button
                  type="button"
                  className="inline-flex w-full mt-8 lg:mt-16  items-center justify-center rounded-md bg-green-600 hover:bg-black hover:transition-all hover:origin-center hover:duration-700 px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </section>
      </PublicLayout>
    </>
  );
}
export default contactus;
