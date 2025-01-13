import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-[#004AAD] shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 h-12">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Health Tech Innovators Logo"
                width={48}
                height={48}
                className="h-full w-auto object-contain"
              />
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-[#FF914D] transition-colors">Home</Link>
            <Link href="/events" className="text-white hover:text-[#FF914D] transition-colors">Events</Link>
            <Link href="/resources" className="text-white hover:text-[#FF914D] transition-colors">Resources</Link>
            <Link href="/news" className="text-white hover:text-[#FF914D] transition-colors">News</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 