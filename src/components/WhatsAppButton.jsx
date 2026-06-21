import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {
  const phoneNumber = "919353145785";

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=Hello%20UNDERCUT,%20I%20would%20like%20to%20book%20an%20appointment.`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-xl hover:scale-110 hover:bg-green-600 transition-all duration-300"
    >
      <FaWhatsapp size={30} />
    </a>
  );
}

export default WhatsAppButton;