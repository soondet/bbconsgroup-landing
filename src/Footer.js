import React from "react";
import { FaInstagram, FaWhatsapp, FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center text-center lg:justify-between lg:text-left">
          <div className="w-full lg:w-1/3 mb-6">
            <h2 className="text-2xl font-bold mb-4">BB Consulting Group</h2>
            <p className="text-gray-400 mt-2">
              Адрес: <br />
              160011, город Шымкент, <br />
              Аль-Фарабийский район, улица Иляева, 47
            </p>
          </div>

          <div className="w-full lg:w-1/3 mb-6">
            <h2 className="text-2xl font-bold mb-4">Контакты</h2>
            <p className="text-gray-400 mt-2 flex justify-center lg:justify-start items-center">
              <FaPhone className="mr-2" />
              моб/тел.: +7 701 880 4699 (WhatsApp)
            </p>
            <p className="text-gray-400 mt-2 flex justify-center lg:justify-start items-center">
              <FaEnvelope className="mr-2" />
              e-mail:{" "}
              <a
                href="mailto:bbcngr@mail.ru"
                className="text-yellow-500 hover:text-yellow-600 transition-colors duration-300 ml-1"
              >
                bbcngr@mail.ru
              </a>
            </p>
            <p className="text-gray-400 mt-2 flex justify-center lg:justify-start items-center">
              <FaInstagram className="mr-2" />
              Instagram:{" "}
              <a
                href="https://instagram.com/bbconsgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-500 hover:text-yellow-600 transition-colors duration-300 ml-1"
              >
                @bbconsgroup
              </a>
            </p>
          </div>
        </div>
        <div className="text-center text-gray-500 mt-6">
          &copy; {new Date().getFullYear()} BB Consulting Group. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;