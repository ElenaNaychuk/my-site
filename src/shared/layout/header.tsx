import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 shadow-md">
      <nav className="container mx-auto flex justify-center space-x-4">
        <Link href="/" className="hover:text-gray-400">Главная</Link>
        <Link href="/about" className="hover:text-gray-400">Обо мне</Link>
        <Link href="/projects" className="hover:text-gray-400">Проекты</Link>
        <Link href="/contact" className="hover:text-gray-400">Контакты</Link>
      </nav>
    </header>
  );
};

export default Header;