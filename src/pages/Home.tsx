import { Link } from 'react-router-dom';
import { useInView } from '../hooks/useInView';
import AnimatedCounter from '../components/AnimatedCounter';

const Home = () => {
  const { ref: heroRef, isInView: heroVisible } = useInView();
  const { ref: servicesRef, isInView: servicesVisible } = useInView();
  const { ref: advantagesRef, isInView: advantagesVisible } = useInView();

  const services = [
    { title: 'Стратегическое планирование', desc: 'Разработка стратегии развития', icon: '📊' },
    { title: 'Бизнес-аналитика', desc: 'Глубокий анализ данных', icon: '📈' },
    { title: 'Консалтинг', desc: 'Экспертные рекомендации', icon: '💡' },
    { title: 'Оптимизация процессов', desc: 'Повышение эффективности', icon: '⚙️' },
  ];

  const advantages = [
    { title: 'Индивидуальный подход', desc: 'Решения, адаптированные под ваши задачи' },
    { title: 'Прозрачность', desc: 'Открытая коммуникация на каждом этапе' },
    { title: 'Опытная команда', desc: 'Специалисты с многолетним опытом' },
    { title: 'Гарантия результата', desc: 'Фокус на измеримых показателях' },
  ];

  return (
    <div>
      {/* Hero Section — без фото */}
      <section className="relative bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50 py-20 lg:py-32 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 blob"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 blob" style={{ animationDelay: '2s' }}></div>
        
        <div ref={heroRef} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 fade-in ${heroVisible ? 'visible' : ''}`}>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Профессиональные решения <span className="text-blue-700">для бизнеса</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Комплексный подход к развитию вашего дела. Стратегия, аналитика, консалтинг и оптимизация — всё для достижения ваших целей.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contacts" 
                className="px-8 py-4 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition-all btn-hover shimmer text-center"
              >
                Обсудить проект
              </Link>
              <Link 
                to="/services" 
                className="px-8 py-4 bg-white text-gray-700 font-medium rounded-lg border border-gray-200 hover:border-blue-700 hover:text-blue-700 transition-all card-hover text-center"
              >
                Наши услуги
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div ref={servicesRef} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 fade-in ${servicesVisible ? 'visible' : ''}`}>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Наши услуги</h2>
            <p className="text-lg text-gray-600">Полный спектр профессиональных услуг для вашего бизнеса</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {services.map((service, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 card-hover cursor-pointer group" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{service.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">{service.title}</h3>
                <p className="text-sm text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link 
              to="/services" 
              className="inline-flex items-center space-x-2 text-blue-700 font-medium hover:text-blue-800 transition-colors group"
            >
              <span>Все услуги</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div ref={advantagesRef} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 fade-in ${advantagesVisible ? 'visible' : ''}`}>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Почему выбирают нас</h2>
            <p className="text-lg text-gray-600">Мы заботимся о качестве и вашем результате</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm card-hover" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-600 gradient-animate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">
                <AnimatedCounter end={10} suffix="+" />
              </div>
              <div className="text-blue-200">Лет опыта</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">
                <AnimatedCounter end={200} suffix="+" />
              </div>
              <div className="text-blue-200">Проектов</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">
                <AnimatedCounter end={50} suffix="+" />
              </div>
              <div className="text-blue-200">Клиентов</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">
                <AnimatedCounter end={98} suffix="%" />
              </div>
              <div className="text-blue-200">Довольных клиентов</div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Отзывы клиентов</h2>
            <p className="text-lg text-gray-600">Что говорят о нас наши клиенты</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: 'Алексей К.',
                company: 'Директор, IT-компания',
                text: 'Отличная команда профессионалов. Помогли выстроить стратегию развития, результаты превзошли ожидания.',
                rating: 5
              },
              {
                name: 'Елена М.',
                company: 'Владелец бизнеса',
                text: 'Благодаря аналитике и консалтингу оптимизировали процессы и сократили издержки на 30%. Рекомендую!',
                rating: 5
              },
              {
                name: 'Сергей В.',
                company: 'Финансовый директор',
                text: 'Профессиональный подход, чёткие сроки, прозрачная отчётность. Работаем уже второй год.',
                rating: 5
              }
            ].map((review, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-xl p-6 card-hover"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="flex items-center space-x-1 mb-3">
                  {[...Array(review.rating)].map((_, j) => (
                    <svg key={j} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">"{review.text}"</p>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{review.name}</div>
                  <div className="text-xs text-gray-500">{review.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-700 to-blue-600 gradient-animate">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Готовы начать сотрудничество?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Оставьте заявку — мы свяжемся с вами и обсудим ваш проект
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contacts" 
              className="px-8 py-4 bg-white text-blue-700 font-medium rounded-lg hover:bg-gray-100 transition-all btn-hover"
            >
              Оставить заявку
            </Link>
            <Link 
              to="/pricing" 
              className="px-8 py-4 bg-blue-600 text-white font-medium rounded-lg border-2 border-white hover:bg-blue-500 transition-all btn-hover"
            >
              Узнать цены
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
