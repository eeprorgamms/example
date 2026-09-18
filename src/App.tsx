import { useState, useEffect } from 'react'

export default function App() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      setMenuOpen(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white font-sans">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a0a0f]/90 backdrop-blur-md shadow-lg shadow-black/20' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-xl font-semibold tracking-wide">
            <span className="text-white">PRO</span>
            <span className="text-amber-400">.</span>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('about')} className="text-sm text-gray-300 hover:text-white transition-colors">О нас</button>
            <button onClick={() => scrollToSection('services')} className="text-sm text-gray-300 hover:text-white transition-colors">Услуги</button>
            <button onClick={() => scrollToSection('advantages')} className="text-sm text-gray-300 hover:text-white transition-colors">Преимущества</button>
            <button onClick={() => scrollToSection('contact')} className="text-sm px-5 py-2 bg-amber-400/10 border border-amber-400/30 text-amber-400 rounded-full hover:bg-amber-400/20 transition-all">Связаться</button>
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-[#0a0a0f]/95 backdrop-blur-md border-t border-white/5">
            <div className="px-6 py-4 flex flex-col gap-4">
              <button onClick={() => scrollToSection('about')} className="text-left text-gray-300 hover:text-white transition-colors">О нас</button>
              <button onClick={() => scrollToSection('services')} className="text-left text-gray-300 hover:text-white transition-colors">Услуги</button>
              <button onClick={() => scrollToSection('advantages')} className="text-left text-gray-300 hover:text-white transition-colors">Преимущества</button>
              <button onClick={() => scrollToSection('contact')} className="text-left text-amber-400">Связаться</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#111118] to-[#0a0a0f]"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}></div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-400">Открыты для сотрудничества</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            <span className="text-white">Профессиональные</span>
            <br />
            <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">решения для бизнеса</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Комплексный подход к развитию вашего дела. Качество, надёжность и индивидуальный подход к каждому проекту.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onClick={() => scrollToSection('services')} className="px-8 py-3.5 bg-amber-400 text-black font-medium rounded-full hover:bg-amber-300 transition-all hover:shadow-lg hover:shadow-amber-400/20">
              Наши услуги
            </button>
            <button onClick={() => scrollToSection('contact')} className="px-8 py-3.5 border border-white/20 text-white rounded-full hover:bg-white/5 transition-all">
              Обсудить проект
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-amber-400 text-sm font-medium uppercase tracking-wider">О нас</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">Опыт и профессионализм</h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                Мы специализируемся на предоставлении высококачественных профессиональных услуг. Наш подход основан на глубоком понимании потребностей клиента и стремлении к безупречному результату.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                Каждый проект для нас — это возможность продемонстрировать экспертизу и создать решение, которое превзойдёт ожидания. Мы ценим долгосрочные отношения и строим работу на принципах прозрачности и доверия.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-amber-400">10+</div>
                  <div className="text-sm text-gray-500 mt-1">Лет опыта</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-amber-400">200+</div>
                  <div className="text-sm text-gray-500 mt-1">Проектов</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-amber-400/10 flex items-center justify-center">
                    <svg className="w-10 h-10 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Гарантия качества</h3>
                  <p className="text-gray-500 text-sm">Ответственный подход к каждому этапу работы</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-amber-400/10 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 bg-[#0d0d14]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-amber-400 text-sm font-medium uppercase tracking-wider">Услуги</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3">Что мы предлагаем</h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Полный спектр профессиональных услуг для решения ваших бизнес-задач</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: 'Стратегическое планирование',
                desc: 'Разработка стратегии развития с учётом специфики вашей отрасли и текущих рыночных условий.'
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                ),
                title: 'Управление проектами',
                desc: 'Профессиональное ведение проектов от идеи до реализации с контролем всех этапов.'
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                ),
                title: 'Аналитика и отчётность',
                desc: 'Глубокий анализ данных и формирование прозрачной отчётности для принятия решений.'
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                title: 'Консалтинг',
                desc: 'Экспертные консультации по ключевым направлениям развития вашего бизнеса.'
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                ),
                title: 'Оптимизация процессов',
                desc: 'Выявление и устранение неэффективностей в рабочих процессах для повышения продуктивности.'
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                ),
                title: 'Обучение и развитие',
                desc: 'Программы повышения квалификации и развития компетенций для вашей команды.'
              }
            ].map((service, i) => (
              <div key={i} className="group p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-amber-400/20 hover:bg-white/[0.04] transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-amber-400/10 flex items-center justify-center text-amber-400 mb-4 group-hover:bg-amber-400/20 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-amber-400 text-sm font-medium uppercase tracking-wider">Преимущества</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3">Почему выбирают нас</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: '01', title: 'Индивидуальный подход', desc: 'Каждый проект уникален — мы адаптируем решения под ваши задачи' },
              { num: '02', title: 'Прозрачность', desc: 'Открытая коммуникация и понятная отчётность на каждом этапе' },
              { num: '03', title: 'Результат', desc: 'Фокус на измеримых результатах и реальной пользе для бизнеса' },
              { num: '04', title: 'Надёжность', desc: 'Соблюдение сроков и обязательств — основа нашей работы' },
            ].map((item, i) => (
              <div key={i} className="relative p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-all group">
                <span className="text-5xl font-bold text-white/[0.03] absolute top-4 right-4 group-hover:text-amber-400/10 transition-colors">{item.num}</span>
                <h3 className="text-lg font-semibold mb-2 relative">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed relative">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section id="contact" className="py-24 px-6 bg-[#0d0d14]">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 p-8 md:p-12 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/5 rounded-full blur-3xl"></div>
            <div className="relative z-10 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Готовы начать?</h2>
              <p className="text-gray-400 max-w-xl mx-auto mb-8">
                Свяжитесь с нами для обсуждения вашего проекта. Мы готовы ответить на ваши вопросы и предложить оптимальное решение.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
                <a href="mailto:info@example.com" className="inline-flex items-center gap-2 px-6 py-3 bg-amber-400 text-black font-medium rounded-full hover:bg-amber-300 transition-all">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Написать на почту
                </a>
                <a href="tel:" className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white rounded-full hover:bg-white/5 transition-all">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Позвонить
                </a>
              </div>

              <div className="flex items-center justify-center gap-6 text-gray-500 text-sm">
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  Ответим в течение 24 часов
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-gray-500">
            © 2024 Все права защищены
          </div>
          <div className="flex items-center gap-6">
            <span className="text-sm text-gray-600">Политика конфиденциальности</span>
            <span className="text-sm text-gray-600">Условия использования</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
