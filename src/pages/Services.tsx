import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useInView } from '../hooks/useInView';

const Services = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const { ref: heroRef, isInView: heroVisible } = useInView();
  const { ref: servicesRef, isInView: servicesVisible } = useInView();

  const services = [
    {
      title: 'Стратегическое планирование',
      description: 'Разработка долгосрочной стратегии развития бизнеса с учётом рыночных условий и конкурентной среды.',
      features: ['Анализ рынка и конкурентов', 'Постановка целей и KPI', 'Дорожная карта развития', 'Оценка рисков'],
      price: 'от 50 000 ₽',
      duration: '2-4 недели'
    },
    {
      title: 'Бизнес-аналитика',
      description: 'Глубокий анализ данных, формирование отчётности и выявление точек роста для принятия обоснованных решений.',
      features: ['Сбор и структурирование данных', 'Построение аналитических моделей', 'Визуализация результатов', 'Рекомендации по улучшению'],
      price: 'от 35 000 ₽',
      duration: '1-3 недели'
    },
    {
      title: 'Консалтинг',
      description: 'Экспертные консультации по ключевым направлениям бизнеса. Помощь в принятии стратегических решений.',
      features: ['Диагностика проблем', 'Разработка решений', 'Сопровождение внедрения', 'Менторинг команды'],
      price: 'от 25 000 ₽',
      duration: 'По договорённости'
    },
    {
      title: 'Оптимизация процессов',
      description: 'Выявление и устранение неэффективностей в рабочих процессах для повышения продуктивности и снижения затрат.',
      features: ['Аудит текущих процессов', 'Выявление узких мест', 'Разработка оптимизаций', 'Внедрение изменений'],
      price: 'от 40 000 ₽',
      duration: '3-6 недель'
    },
    {
      title: 'Обучение команды',
      description: 'Программы повышения квалификации и развития компетенций для сотрудников вашей компании.',
      features: ['Индивидуальные программы', 'Практические тренинги', 'Онлайн и офлайн форматы', 'Оценка результатов'],
      price: 'от 30 000 ₽',
      duration: '1-4 недели'
    },
    {
      title: 'Аудит бизнес-процессов',
      description: 'Комплексная проверка всех бизнес-процессов компании с формированием отчёта и рекомендаций.',
      features: ['Проверка документации', 'Интервью с сотрудниками', 'Анализ эффективности', 'Итоговый отчёт'],
      price: 'от 20 000 ₽',
      duration: '1-2 недели'
    }
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50 py-16 relative overflow-hidden">
        <div className="absolute top-10 right-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 blob"></div>
        <div ref={heroRef} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 fade-in ${heroVisible ? 'visible' : ''}`}>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Наши услуги</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Полный спектр профессиональных услуг для развития и оптимизации вашего бизнеса
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-white">
        <div ref={servicesRef} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 fade-in ${servicesVisible ? 'visible' : ''}`}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all cursor-pointer border-2 border-transparent hover:border-blue-200 card-hover group"
                onClick={() => setSelectedService(selectedService === i ? null : i)}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">{service.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{service.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-blue-700 font-semibold text-lg">{service.price}</span>
                  <span className="text-xs text-gray-500">{service.duration}</span>
                </div>

                {selectedService === i && (
                  <div className="border-t border-gray-200 pt-4 mt-4 space-y-2">
                    {service.features.map((feature, j) => (
                      <div key={j} className="flex items-center space-x-2">
                        <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                    <Link 
                      to="/contacts" 
                      className="inline-block mt-4 px-4 py-2 bg-blue-700 text-white text-sm font-medium rounded-lg hover:bg-blue-800 transition-all btn-hover"
                    >
                      Оставить заявку
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Не знаете, что выбрать?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Свяжитесь с нами — мы поможем подобрать оптимальное решение для вашего бизнеса
          </p>
          <Link 
            to="/contacts" 
            className="inline-flex items-center space-x-2 px-8 py-4 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition-all btn-hover"
          >
            <span>Получить консультацию</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
