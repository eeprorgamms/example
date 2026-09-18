import { useInView } from '../hooks/useInView';
import FAQ from '../components/FAQ';
import AnimatedCounter from '../components/AnimatedCounter';

const About = () => {
  const { ref: heroRef, isInView: heroVisible } = useInView();
  const { ref: contentRef, isInView: contentVisible } = useInView();
  const { ref: advantagesRef, isInView: advantagesVisible } = useInView();
  const { ref: statsRef, isInView: statsVisible } = useInView();

  const advantages = [
    { title: 'Профессиональная команда', desc: 'Наши специалисты имеют многолетний опыт работы в различных отраслях бизнеса' },
    { title: 'Индивидуальный подход', desc: 'Каждый проект уникален — мы адаптируем решения под конкретные задачи клиента' },
    { title: 'Прозрачная работа', desc: 'Открытая коммуникация, понятная отчётность и регулярные обновления по проекту' },
    { title: 'Гарантия качества', desc: 'Мы уверены в результате и гарантируем качество выполненных работ' },
    { title: 'Современные методы', desc: 'Используем передовые методики и инструменты для достижения максимального эффекта' },
    { title: 'Долгосрочное партнёрство', desc: 'Строим отношения на основе доверия и продолжаем поддерживать клиентов после завершения проекта' },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50 py-16 relative overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 blob"></div>
        <div ref={heroRef} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 fade-in ${heroVisible ? 'visible' : ''}`}>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">О нас</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Команда профессионалов, помогающая бизнесу достигать новых высот
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-white">
        <div ref={contentRef} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 fade-in ${contentVisible ? 'visible' : ''}`}>
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Экспертиза и результат
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Мы — команда опытных специалистов, объединённых общей целью: помогать бизнесу расти и развиваться. Наш подход основан на глубоком анализе, проверенных методиках и стремлении к измеримому результату.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                За годы работы мы реализовали сотни проектов в различных отраслях. Каждый случай — это возможность применить наш опыт и найти нестандартное решение.
              </p>
              <p className="text-lg text-gray-600">
                Мы верим, что успех клиента — это наш успех. Поэтому работаем на результат и строим долгосрочные партнёрские отношения.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl p-12 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-blue-700/10 flex items-center justify-center">
                    <svg className="w-10 h-10 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Надёжность</h3>
                  <p className="text-gray-600 text-sm">Соблюдение сроков и обязательств — основа нашей работы</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-700 rounded-2xl opacity-20 blur-xl"></div>
            </div>
          </div>

          {/* Advantages */}
          <div ref={advantagesRef} className={`mb-12 fade-in ${advantagesVisible ? 'visible' : ''}`}>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Наши принципы</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {advantages.map((item, i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-6 card-hover group" style={{ transitionDelay: `${i * 100}ms` }}>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-600 gradient-animate">
        <div ref={statsRef} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 fade-in ${statsVisible ? 'visible' : ''}`}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">
                <AnimatedCounter end={10} suffix="+" />
              </div>
              <div className="text-blue-200">Лет на рынке</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">
                <AnimatedCounter end={200} suffix="+" />
              </div>
              <div className="text-blue-200">Реализованных проектов</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">
                <AnimatedCounter end={50} suffix="+" />
              </div>
              <div className="text-blue-200">Постоянных клиентов</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">
                <AnimatedCounter end={15} suffix="" />
              </div>
              <div className="text-blue-200">Специалистов в команде</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Часто задаваемые вопросы</h2>
            <p className="text-lg text-gray-600">Ответы на популярные вопросы</p>
          </div>
          <FAQ />
        </div>
      </section>

      {/* How we work */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Как мы работаем</h2>
            <p className="text-lg text-gray-600">Простой и понятный процесс сотрудничества</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Заявка', desc: 'Вы оставляете заявку на сайте или связываетесь с нами' },
              { step: '02', title: 'Консультация', desc: 'Обсуждаем задачи, проводим первичный анализ' },
              { step: '03', title: 'Предложение', desc: 'Формируем план работ и согласовываем условия' },
              { step: '04', title: 'Реализация', desc: 'Выполняем проект с регулярной отчётностью' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 card-hover text-center">
                <div className="text-4xl font-bold text-blue-100 mb-3">{item.step}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
