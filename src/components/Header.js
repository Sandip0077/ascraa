import React from 'react';

// ShadCN/UI components
import { Button } from '../components/ui/button';

// Icons (lucide-react)
import {
  Home as HomeIcon,
  Library as LibraryIcon,
  Mail as MailIcon,
  Briefcase as BriefcaseIcon,
  UserCircle as UserCircleIcon,
} from 'lucide-react';

const Header = ({ setCurrentPage, isLoggedIn, handleLogout, userType }) => {
  const baseNavItems = [
    { name: 'Home', icon: HomeIcon, page: 'home' },
    { name: 'Resources', icon: LibraryIcon, page: 'resources' },
    { name: 'Contact Us', icon: MailIcon, page: 'contact' },
  ];

  const navItems =
    userType === 'recruiter'
      ? [
          ...baseNavItems.slice(0, 1),
          { name: 'Post a Job', icon: BriefcaseIcon, page: 'recruiter-dashboard' },
          ...baseNavItems.slice(1),
        ]
      : [
          ...baseNavItems.slice(0, 1),
          { name: 'Apply for Jobs', icon: BriefcaseIcon, page: 'apply-jobs' },
          ...baseNavItems.slice(1),
        ];

  const handleProfileClick = () => {
    if (userType === 'recruiter') {
      setCurrentPage('recruiter-dashboard');
    } else {
      setCurrentPage('profile');
    }
  };

  return (
    <header className="bg-white/96 backdrop-blur-sm shadow-sm py-5 px-4 md:px-12 flex justify-between items-center fixed top-0 left-0 w-full z-40">
      {/* Brand: large gradient wordmark + soft glow behind */}
      <a
        href="/"
        onClick={(e) => {
          e.preventDefault();
          setCurrentPage('home');
        }}
        aria-label="ascraa — go to homepage"
        className="relative flex items-center gap-4 group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-200"
      >
        {/* larger radial glow behind the wordmark (soft, blurred) */}
        <span
          aria-hidden="true"
          className="absolute -right-6 top-1/2 -translate-y-1/2 pointer-events-none rounded-full"
          style={{
            width: 260, // bigger glow so entire wordmark has soft bloom
            height: 84,
            filter: 'blur(28px)',
            opacity: 0.92,
            background:
              'radial-gradient(60% 60% at 30% 40%, rgba(255,90,90,0.34), rgba(255,110,110,0.18) 30%, rgba(255,140,120,0.06) 60%, transparent 75%)',
            transform: 'translateY(-50%)',
          }}
        />

        {/* wordmark: noticeably larger (desktop 5xl-ish), full gradient clipped to text */}
        <span
          className="relative z-10 font-extrabold select-none text-3xl md:text-4xl lg:text-5xl"
          style={{
            lineHeight: 1,
            letterSpacing: '-0.02em',
            background: 'linear-gradient(90deg,#ff6b6b 0%, #ff4d4f 45%, #ef4444 100%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 1px 0 rgba(0,0,0,0.02)',
          }}
        >
          ascraa
        </span>
      </a>

      {/* Navigation (buttons for accessibility) */}
      <nav className="hidden md:flex space-x-8">
        {navItems.map((item) => (
          <button
            key={item.name}
            onClick={() => setCurrentPage(item.page)}
            className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-200 relative group bg-transparent border-0 p-0"
            aria-label={item.name}
            type="button"
          >
            <item.icon className="h-5 w-5 mr-1" />
            <span className="whitespace-nowrap">{item.name}</span>
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full" />
          </button>
        ))}
      </nav>

      <div className="flex items-center space-x-3">
        {isLoggedIn ? (
          <>
            <Button variant="ghost" size="icon" onClick={handleProfileClick}>
              <UserCircleIcon className="h-7 w-7 text-gray-600 hover:text-blue-600 transition-colors" />
            </Button>
            <Button className="hidden md:block" variant="outline" onClick={handleLogout}>
              Logout
            </Button>
          </>
        ) : (
          <Button className="hidden md:block" onClick={() => setCurrentPage('auth-selection')}>
            Login / Sign Up
          </Button>
        )}
      </div>
    </header>
  );
};

export default Header;
