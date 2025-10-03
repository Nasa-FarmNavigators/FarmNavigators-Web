import { FaUsers, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const farmers = [
  {
    id: 1,
    name: "João Manuel",
    phone: "+244 923 456 789",
    email: "joao.manuel@email.com",
    location: "Huambo",
    farm: "Fazenda São José",
    crops: ["Milho", "Feijão"],
    joinDate: "2023-03-15",
    status: "Ativo"
  },
  {
    id: 2,
    name: "Maria Santos", 
    phone: "+244 912 345 678",
    email: "maria.santos@email.com",
    location: "Benguela",
    farm: "Cooperativa Verde",
    crops: ["Mandioca", "Batata-doce"],
    joinDate: "2023-07-22",
    status: "Ativo"
  },
  {
    id: 3,
    name: "António Silva",
    phone: "+244 934 567 890", 
    email: "antonio.silva@email.com",
    location: "Malanje",
    farm: "Quinta da Esperança",
    crops: ["Café", "Banana"],
    joinDate: "2023-01-10",
    status: "Inativo"
  }
];

export default function Farmers() {
  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Agricultores
        </h1>
        <p className="text-gray-600">
          Gerencie a rede de agricultores da sua organização
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <FaUsers className="text-green-500 text-2xl mr-4" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Total</h3>
              <p className="text-3xl font-bold text-green-600">156</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <FaUsers className="text-blue-500 text-2xl mr-4" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Ativos</h3>
              <p className="text-3xl font-bold text-blue-600">142</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <FaUsers className="text-yellow-500 text-2xl mr-4" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Novos (30d)</h3>
              <p className="text-3xl font-bold text-yellow-600">12</p>
            </div>
          </div>
        </div>
      </div>

      {/* Farmers Table */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-gray-900">Lista de Agricultores</h2>
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
              Adicionar Agricultor
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Agricultor
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contato
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Fazenda
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Culturas
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {farmers.map((farmer) => (
                <tr key={farmer.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        {farmer.name}
                      </div>
                      <div className="text-sm text-gray-500 flex items-center">
                        <FaMapMarkerAlt className="mr-1" />
                        {farmer.location}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 flex items-center mb-1">
                      <FaPhone className="mr-2" />
                      {farmer.phone}
                    </div>
                    <div className="text-sm text-gray-500 flex items-center">
                      <FaEnvelope className="mr-2" />
                      {farmer.email}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {farmer.farm}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex flex-wrap gap-1">
                      {farmer.crops.map((crop, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full"
                        >
                          {crop}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      farmer.status === "Ativo"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}>
                      {farmer.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}