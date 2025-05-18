import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-[#fdfcf8] to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-4xl font-bold text-[#4E6B4D] mb-14">
          Contactez-nous
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="bg-[#EFECDD] p-8 rounded-3xl relative shadow-xl overflow-hidden">
            <div className="absolute inset-0 bg-pattern opacity-10 pointer-events-none"></div>
            <div className="relative z-10 space-y-6">
              <h3 className="text-2xl font-semibold text-[#4E6B4D]">Restez en contact</h3>
              <p className="text-gray-700 leading-relaxed">
                Vous avez des questions ou souhaitez passer une commande ? N’hésitez pas à nous contacter, notre équipe est à votre écoute !
              </p>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#4E6B4D] text-white rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#4E6B4D]">Email</h4>
                    <p className="text-gray-700">agouailofficial@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#4E6B4D] text-white rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#4E6B4D]">Téléphone</h4>
                    <p className="text-gray-700">+212 693462980</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#4E6B4D] text-white rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#4E6B4D]">Adresse</h4>
                    <p className="text-gray-700">Comming soon</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-medium text-[#4E6B4D] mb-3">Suivez-nous</h4>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-[#4E6B4D] text-white rounded-full flex items-center justify-center hover:bg-[#3A5039] transition duration-300">
                    {/* Facebook */}
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 8H6v4h3v12h5V12h3.642l.358-4H14V6.333C14 5.378 14.192 5 15.115 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z" />
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/agouail/" className="w-10 h-10 bg-[#4E6B4D] text-white rounded-full flex items-center justify-center hover:bg-[#3A5039] transition duration-300">
                    {/* Instagram */}
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.2c3.2 0 3.6.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.22-1.67 4.77-4.92 4.92-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-3.22-.15-4.77-1.67-4.92-4.92C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85C2.42 3.92 3.93 2.37 7.15 2.22 8.42 2.16 8.8 2.15 12 2.15zm0 1.6c-3.4 0-6.16 2.76-6.16 6.16S8.6 16.1 12 16.1s6.16-2.76 6.16-6.16S15.4 3.8 12 3.8zm0 10.16a4 4 0 110-8 4 4 0 010 8zm6.4-11.85a1.44 1.44 0 110 2.88 1.44 1.44 0 010-2.88z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Placeholder (optional) */}
          <div className="fade-in">
            <div className="bg-white border border-gray-200 shadow-lg rounded-3xl p-8">
              <h3 className="text-2xl font-semibold text-[#4E6B4D] mb-6">Envoyer un message</h3>
              <form className="space-y-5">
                <input
                  type="text"
                  placeholder="Votre nom"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#4E6B4D]"
                />
                <input
                  type="email"
                  placeholder="Votre email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#4E6B4D]"
                />
                <textarea
                  rows={5}
                  placeholder="Votre message"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#4E6B4D]"
                />
                <button
                  type="submit"
                  className="w-full bg-[#4E6B4D] text-white py-3 rounded-lg hover:bg-[#3A5039] transition duration-300"
                >
                  Envoyer
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
