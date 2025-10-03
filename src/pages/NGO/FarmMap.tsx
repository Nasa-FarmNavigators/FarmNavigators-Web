import { FaMapMarkerAlt, FaSeedling, FaThermometerHalf, FaCloudRain } from "react-icons/fa";

const farms = [
  {
    id: 1,
    name: "Fazenda São José",
    location: "Huambo, Angola",
    area: "125 hectares",
    crops: ["Milho", "Feijão"],
    temperature: "26°C",
    humidity: "65%",
    status: "Ativo"
  },
  {
    id: 2,
    name: "Cooperativa Verde",
    location: "Benguela, Angola",
    area: "89 hectares", 
    crops: ["Mandioca", "Batata-doce"],
    temperature: "24°C",
    humidity: "72%",
    status: "Monitoramento"
  },
  {
    id: 3,
    name: "Quinta da Esperança",
    location: "Malanje, Angola",
    area: "203 hectares",
    crops: ["Café", "Banana"],
    temperature: "22°C",
    humidity: "78%",
    status: "Ativo"
  }
];

export default function FarmMap() {
  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Mapa das Fazendas
        </h1>
        <p className="text-gray-600">
          Visualize e monitore as propriedades da sua rede
        </p>
      </div>

      {/* Map Placeholder */}
      <div className="bg-white rounded-lg shadow mb-6">
        <div className="h-96 bg-gradient-to-br from-green-100 to-blue-100 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <FaMapMarkerAlt className="text-6xl text-green-600 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Mapa Interativo</h3>
            <p className="text-gray-500">Integração com dados da NASA em desenvolvimento</p>
          </div>
        </div>
      </div>

      {/* Farms List */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">Fazendas Registradas</h2>
        </div>
        <div className="divide-y divide-gray-200">
          {farms.map((farm) => (
            <div key={farm.id} className="p-6 hover:bg-gray-50">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {farm.name}
                  </h3>
                  <div className="flex items-center text-gray-600 mb-2">
                    <FaMapMarkerAlt className="mr-2" />
                    <span>{farm.location}</span>
                    <span className="mx-4">•</span>
                    <span>{farm.area}</span>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <FaSeedling className="mr-1" />
                      <span>{farm.crops.join(", ")}</span>
                    </div>
                    <div className="flex items-center">
                      <FaThermometerHalf className="mr-1" />
                      <span>{farm.temperature}</span>
                    </div>
                    <div className="flex items-center">
                      <FaCloudRain className="mr-1" />
                      <span>{farm.humidity}</span>
                    </div>
                  </div>
                </div>
                <div className="ml-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    farm.status === "Ativo" 
                      ? "bg-green-100 text-green-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}>
                    {farm.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}