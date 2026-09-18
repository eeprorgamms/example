import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ScrollToTop from './ScrollToTop';
import Loader from './Loader';

interface LayoutProps {
  children: React.ReactNode;
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navItems = [
    { path: '/', label: 'Главная' },
    { path: '/services', label: 'Услуги' },
    { path: '/pricing', label: 'Цены' },
    { path: '/about', label: 'О нас' },
    { path: '/contacts', label: 'Контакты' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="text-2xl font-bold text-gray-900 hover:text-blue-700 transition-colors">
            PRO<span className="text-blue-700">.</span>
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map(item => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors relative group ${
                  isActive(item.path) 
                    ? 'text-blue-700' 
                    : 'text-gray-600 hover:text-blue-700'
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-700 transition-all duration-300 ${isActive(item.path) ? 'w-full' : 'group-hover:w-full'}`}></span>
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <Link 
              to="/contacts" 
              className="px-5 py-2.5 bg-blue-700 text-white text-sm font-medium rounded-lg hover:bg-blue-800 transition-all btn-hover"
            >
              Оставить заявку
            </Link>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2 text-gray-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-4 space-y-2">
            {navItems.map(item => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-4 py-2 rounded-lg text-sm font-medium ${
                  isActive(item.path)
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="text-2xl font-bold mb-4">
              PRO<span className="text-blue-400">.</span>
            </div>
            <p className="text-sm text-gray-400">
              Профессиональные решения для вашего бизнеса. Качество, надёжность и индивидуальный подход к каждому проекту.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-blue-400 transition-colors">Главная</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">Услуги</Link></li>
              <li><Link to="/pricing" className="hover:text-blue-400 transition-colors">Цены</Link></li>
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">О нас</Link></li>
              <li><Link to="/contacts" className="hover:text-blue-400 transition-colors">Контакты</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">Стратегическое планирование</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">Бизнес-аналитика</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">Консалтинг</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">Оптимизация процессов</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">Обучение команды</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-gray-500">© 2024 Все права защищены.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <span className="text-sm text-gray-500">Политика конфиденциальности</span>
            <span className="text-sm text-gray-500">Условия использования</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-white">
      <Loader />
      <ScrollToTop />
      <Header />
      <main className="pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
