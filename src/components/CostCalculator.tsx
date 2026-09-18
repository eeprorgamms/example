import { useState } from 'react';
import { Link } from 'react-router-dom';

interface Service {
  id: string;
  name: string;
  price: number;
}

const CostCalculator = () => {
  const [projectType, setProjectType] = useState('small');
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const projectTypes = [
    { id: 'small', name: 'Стартап', multiplier: 1 },
    { id: 'medium', name: 'Малый бизнес', multiplier: 1.5 },
    { id: 'large', name: 'Корпорация', multiplier: 2.5 },
  ];

  const services: Service[] = [
    { id: 'strategy', name: 'Стратегическое планирование', price: 50000 },
    { id: 'analytics', name: 'Бизнес-аналитика', price: 35000 },
    { id: 'consulting', name: 'Консалтинг', price: 25000 },
    { id: 'optimization', name: 'Оптимизация процессов', price: 40000 },
    { id: 'training', name: 'Обучение команды', price: 30000 },
    { id: 'audit', name: 'Аудит бизнес-процессов', price: 20000 },
  ];

  const toggleService = (serviceId: string) => {
    setSelectedServices(prev =>
      prev.includes(serviceId)
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const calculateTotal = () => {
    const typeMultiplier = projectTypes.find(c => c.id === projectType)?.multiplier || 1;
    const servicesTotal = selectedServices.reduce((sum, serviceId) => {
      const service = services.find(s => s.id === serviceId);
      return sum + (service?.price || 0);
    }, 0);
    return Math.round(servicesTotal * typeMultiplier);
  };

  const total = calculateTotal();

  return (
    <div className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl p-8 border border-blue-100">
      <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
        Калькулятор стоимости
      </h3>

      {/* Project Type */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Тип проекта
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3">
          {projectTypes.map(type => (
            <button
              key={type.id}
              onClick={() => setProjectType(type.id)}
              className={`px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg font-medium text-sm sm:text-base transition-all ${
                projectType === type.id
                  ? 'bg-blue-700 text-white shadow-lg'
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-blue-300'
              }`}
            >
              {type.name}
            </button>
          ))}
        </div>
      </div>

      {/* Services */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Выберите услуги
        </label>
        <div className="space-y-2">
          {services.map(service => (
            <label
              key={service.id}
              className={`flex items-center justify-between p-4 rounded-lg cursor-pointer transition-all ${
                selectedServices.includes(service.id)
                  ? 'bg-blue-100 border-2 border-blue-700'
                  : 'bg-white border-2 border-gray-200 hover:border-blue-300'
              }`}
            >
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={selectedServices.includes(service.id)}
                  onChange={() => toggleService(service.id)}
                  className="w-5 h-5 text-blue-700 rounded focus:ring-blue-500"
                />
                <span className="font-medium text-gray-900">{service.name}</span>
              </div>
              <span className="text-blue-700 font-semibold">{service.price.toLocaleString()} ₽</span>
            </label>
          ))}
        </div>
      </div>

      {/* Total */}
      <div className="bg-white rounded-xl p-6 border-2 border-blue-700">
        <div className="flex items-center justify-between mb-4">
          <span className="text-gray-600 font-medium">Итого:</span>
          <span className="text-3xl font-bold text-blue-700">от {total.toLocaleString()} ₽</span>
        </div>
        <Link
          to="/contacts"
          className="block w-full text-center px-6 py-4 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors"
        >
          Оставить заявку
        </Link>
      </div>

      {selectedServices.length === 0 && (
        <p className="text-center text-sm text-gray-500 mt-4">
          Выберите хотя бы одну услугу для расчёта стоимости
        </p>
      )}
    </div>
  );
};

export default CostCalculator;
