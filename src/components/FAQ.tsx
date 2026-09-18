import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      question: 'Как начать сотрудничество?',
      answer: 'Оставьте заявку на сайте или свяжитесь с нами любым удобным способом. Мы обсудим ваши задачи и предложим оптимальное решение.'
    },
    {
      question: 'Какие сроки выполнения проектов?',
      answer: 'Сроки зависят от объёма и сложности проекта. После обсуждения задачи мы предоставляем точные сроки и придерживаемся их.'
    },
    {
      question: 'Какие способы оплаты вы принимаете?',
      answer: 'Принимаем оплату по безналичному расчёту, банковскими картами, а также наличными. Возможна поэтапная оплата для крупных проектов.'
    },
    {
      question: 'Даёте ли гарантию на работы?',
      answer: 'Да, мы предоставляем гарантию на все выполненные работы. Срок гарантии зависит от типа услуги и обсуждается индивидуально.'
    },
    {
      question: 'Работаете ли вы с удалёнными клиентами?',
      answer: 'Да, мы работаем как с локальными, так и с удалёнными клиентами. Используем современные инструменты для эффективной коммуникации.'
    },
    {
      question: 'Можно ли получить консультацию бесплатно?',
      answer: 'Первичная консультация проводится бесплатно. Мы обсудим ваши потребности и предложим план действий без каких-либо обязательств.'
    },
    {
      question: 'Как обеспечивается конфиденциальность?',
      answer: 'Мы подписываем NDA при необходимости и строго соблюдаем конфиденциальность всей информации, полученной от клиентов.'
    },
    {
      question: 'Каков ваш подход к работе?',
      answer: 'Мы работаем по принципу индивидуального подхода. Каждый проект уникален, и мы адаптируем наши методы под конкретные задачи клиента.'
    }
  ];

  return (
    <div className="max-w-3xl mx-auto">
      {faqItems.map((item, index) => (
        <div key={index} className="mb-4 border border-gray-200 rounded-xl overflow-hidden">
          <button
            className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <span className="font-semibold text-gray-900">{item.question}</span>
            <svg
              className={`w-5 h-5 text-blue-700 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? 'max-h-96' : 'max-h-0'
            }`}
          >
            <div className="px-6 pb-4 text-gray-600">
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
