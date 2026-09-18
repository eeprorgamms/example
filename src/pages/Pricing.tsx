import { Link } from 'react-router-dom';
import { useInView } from '../hooks/useInView';
import CostCalculator from '../components/CostCalculator';

const Pricing = () => {
  const { ref: heroRef, isInView: heroVisible } = useInView();
  const { ref: packagesRef, isInView: packagesVisible } = useInView();

  const packages = [
    {
      name: 'Базовый',
      price: '25 000 ₽',
      duration: '1-2 недели',
      features: ['Первичная консультация', 'Анализ текущей ситуации', 'Базовые рекомендации', 'Отчёт с выводами'],
      popular: false
    },
    {
      name: 'Стандарт',
      price: '75 000 ₽',
      duration: '3-4 недели',
      features: ['Всё из «Базовый»', 'Глубокий анализ данных', 'Стратегический план', 'Сопровождение внедрения', 'Еженедельные отчёты'],
      popular: true
    },
    {
      name: 'Премиум',
      price: '150 000 ₽',
      duration: '2-3 месяца',
      features: ['Всё из «Стандарт»', 'Полный аудит процессов', 'Обучение команды', 'Персональный менеджер', 'Приоритетная поддержка', 'Гарантия результата'],
      popular: false
    },
    {
      name: 'Корпоративный',
      price: 'По запросу',
      duration: 'Индивидуально',
      features: ['Всё из «Премиум»', 'Выделенная команда', 'Комплексная трансформация', 'KPI и метрики', 'Долгосрочное партнёрство', 'Гибкие условия'],
      popular: false
    }
  ];

  const additionalServices = [
    { name: 'Разовая консультация', price: 'от 10 000 ₽' },
    { name: 'Стратегическая сессия', price: 'от 30 000 ₽' },
    { name: 'Обучение команды (день)', price: 'от 20 000 ₽' },
    { name: 'Аудит бизнес-процессов', price: 'от 20 000 ₽' },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50 py-16 relative overflow-hidden">
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 blob"></div>
        <div ref={heroRef} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 fade-in ${heroVisible ? 'visible' : ''}`}>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Цены</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Прозрачное ценообразование. Стоимость зависит от объёма и сложности проекта
          </p>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 bg-white">
        <div ref={packagesRef} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 fade-in ${packagesVisible ? 'visible' : ''}`}>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Пакеты услуг</h2>
            <p className="text-gray-600">Выберите подходящий вариант сотрудничества</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg, i) => (
              <div
                key={i}
                className={`rounded-xl p-6 border-2 transition-all card-hover ${
                  pkg.popular
                    ? 'border-blue-700 bg-blue-50 relative scale-105'
                    : 'border-gray-200 bg-white'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-700 text-white px-4 py-1 rounded-full text-xs font-semibold">
                    Популярный
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="text-3xl font-bold text-blue-700 mb-1">{pkg.price}</div>
                  <div className="text-sm text-gray-500">~ {pkg.duration}</div>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, j) => (
                    <li key={j} className="flex items-start space-x-2 text-sm text-gray-700">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contacts"
                  className={`block text-center px-4 py-3 rounded-lg font-medium transition-all btn-hover ${
                    pkg.popular
                      ? 'bg-blue-700 text-white hover:bg-blue-800'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Выбрать
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Calculator */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <CostCalculator />
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Дополнительные услуги</h2>
            <p className="text-gray-600">Отдельные услуги для решения конкретных задач</p>
          </div>

          <div className="bg-gray-50 rounded-xl shadow-sm overflow-hidden">
            {additionalServices.map((service, i) => (
              <div
                key={i}
                className={`flex items-center justify-between p-6 hover:bg-white transition-colors ${
                  i !== additionalServices.length - 1 ? 'border-b border-gray-100' : ''
                }`}
              >
                <span className="text-gray-900 font-medium">{service.name}</span>
                <span className="text-blue-700 font-semibold">{service.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Остались вопросы?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Свяжитесь с нами — мы рассчитаем точную стоимость для вашего проекта
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contacts"
              className="px-8 py-4 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition-all btn-hover"
            >
              Оставить заявку
            </Link>
            <Link
              to="/about"
              className="px-8 py-4 bg-white text-blue-700 font-medium rounded-lg border-2 border-blue-700 hover:bg-blue-50 transition-all"
            >
              Узнать больше
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
