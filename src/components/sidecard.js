import React from "react";
import { FaGithub, FaExternalLinkAlt, FaNewspaper } from "react-icons/fa";

const SideCard = ({ imageSrc, title, description, links }) => {
  return (
    <div className="rounded-lg shadow-lg overflow-hidden inline-block flex flex-col">
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-40 object-contain sm:h-48 md:h-64"
      />
      <div className="p-6 flex-grow">
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="flex justify-center mb-6">
        <div className="flex items-center mt-auto">
          {links.map((link) => (
            <a target="_blank"
              rel="noopener noreferrer"
              href={link.url}
              key={link.type}
              className="flex items-center mr-4 text-green-600 hover:underline"
            >
              {link.type === "github" && <FaGithub className="mr-2" />}
              {link.type === "demo" && <FaExternalLinkAlt className="mr-2" />}
              {link.type === "article" && <FaNewspaper className="mr-2" />}
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideCard;
