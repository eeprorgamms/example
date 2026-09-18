import { useState } from 'react';
import { useInView } from '../hooks/useInView';
import BookingCalendar from '../components/BookingCalendar';

const Contacts = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', service: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [rawDigits, setRawDigits] = useState('');
  const { ref: heroRef, isInView: heroVisible } = useInView();
  const { ref: contentRef, isInView: contentVisible } = useInView();

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Сохраняем заявку в localStorage
    const bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
    bookings.unshift({
      ...formData,
      id: Date.now().toString(36),
      createdAt: new Date().toISOString(),
      status: 'new'
    });
    localStorage.setItem('bookings', JSON.stringify(bookings));

    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 4000);
    setFormData({ name: '', phone: '', service: '', message: '' });
    setRawDigits('');
  };

  const formatDigits = (digits: string): string => {
    if (digits.length === 0) return '';
    
    let formatted = '+7';
    if (digits.length > 1) {
      formatted += ' (' + digits.slice(1, 4);
    }
    if (digits.length >= 4) {
      formatted += ') ' + digits.slice(4, 7);
    }
    if (digits.length >= 7) {
      formatted += '-' + digits.slice(7, 9);
    }
    if (digits.length >= 9) {
      formatted += '-' + digits.slice(9, 11);
    }
    
    return formatted;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    
    if (inputValue === '') {
      setRawDigits('');
      setFormData({...formData, phone: ''});
      return;
    }
    
    const prevFormatted = formData.phone;
    const isDeleting = inputValue.length < prevFormatted.length;
    
    if (isDeleting) {
      const newRaw = rawDigits.slice(0, -1);
      
      if (newRaw.length === 0) {
        setRawDigits('');
        setFormData({...formData, phone: ''});
        return;
      }
      
      setRawDigits(newRaw);
      setFormData({...formData, phone: formatDigits(newRaw)});
      return;
    }
    
    const inputDigits = inputValue.replace(/\D/g, '');
    let newDigits = inputDigits;
    
    if (newDigits.length > 0) {
      if (newDigits[0] === '8') {
        newDigits = '7' + newDigits.slice(1);
      } else if (newDigits[0] !== '7') {
        newDigits = '7' + newDigits;
      }
    }
    
    newDigits = newDigits.slice(0, 11);
    
    setRawDigits(newDigits);
    setFormData({...formData, phone: formatDigits(newDigits)});
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50 py-16 relative overflow-hidden">
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 blob"></div>
        <div ref={heroRef} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 fade-in ${heroVisible ? 'visible' : ''}`}>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Контакты</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Свяжитесь с нами удобным способом или оставьте заявку
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-white">
        <div ref={contentRef} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 fade-in ${contentVisible ? 'visible' : ''}`}>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Booking Calendar */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Выберите удобное время</h2>
              <BookingCalendar />
            </div>

            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Оставьте заявку</h2>
              
              {formSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Заявка отправлена!</h3>
                  <p className="text-gray-600">Мы свяжемся с вами в ближайшее время</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Ваше имя</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg text-gray-900 bg-white focus:outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700 transition-all"
                      placeholder="Введите ваше имя"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Телефон</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handlePhoneChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg text-gray-900 bg-white focus:outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700 transition-all"
                      placeholder="Введите номер телефона"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Интересующая услуга</label>
                    <textarea
                      value={formData.service}
                      onChange={e => setFormData({...formData, service: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg text-gray-900 bg-white focus:outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700 transition-all resize-none"
                      placeholder="Опишите вашу задачу или выберите услугу"
                      rows={2}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Комментарий</label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={e => setFormData({...formData, message: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg text-gray-900 bg-white focus:outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700 transition-all resize-none"
                      placeholder="Дополнительная информация..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-4 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition-all btn-hover"
                  >
                    Отправить заявку
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Информация</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-gray-50 rounded-xl p-6 card-hover">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                      <p className="text-gray-600 text-sm">info@example.com</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 card-hover">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Режим работы</h3>
                      <p className="text-gray-600 text-sm">Пн — Пт: 09:00 — 18:00</p>
                      <p className="text-sm text-gray-500 mt-1">Сб — Вс: выходной</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 card-hover">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Ответ</h3>
                      <p className="text-gray-600 text-sm">В течение 24 часов</p>
                      <p className="text-sm text-gray-500 mt-1">После получения заявки</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacts;
