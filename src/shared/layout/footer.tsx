const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-auto">
      <div className="container mx-auto text-center">
        © {new Date().getFullYear()} Твоё Имя. Все права защищены.
      </div>
    </footer>
  );
};

export default Footer;