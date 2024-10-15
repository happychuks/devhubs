import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <nav className="flex justify-between">
        <Link href="/" className="font-bold text-lg">DevHubs</Link>
        <div className="space-x-4">
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/login">Login</Link>
          <Link href="/signup">Get Started</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
