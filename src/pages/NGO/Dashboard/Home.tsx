import { FaLeaf, FaSeedling, FaCloudSun, FaUsers } from "react-icons/fa";

export default function Home() {
  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Dashboard Farm Navigators
        </h1>
        <p className="text-gray-600">
          Bem-vindo ao painel de controle da sua organização agrícola
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6 border-l-4 border-green-500">
          <div className="flex items-center">
            <FaSeedling className="text-green-500 text-2xl mr-4" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Fazendas</h3>
              <p className="text-3xl font-bold text-green-600">24</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6 border-l-4 border-blue-500">
          <div className="flex items-center">
            <FaUsers className="text-blue-500 text-2xl mr-4" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Agricultores</h3>
              <p className="text-3xl font-bold text-blue-600">156</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6 border-l-4 border-yellow-500">
          <div className="flex items-center">
            <FaCloudSun className="text-yellow-500 text-2xl mr-4" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Clima Hoje</h3>
              <p className="text-3xl font-bold text-yellow-600">28°C</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6 border-l-4 border-emerald-500">
          <div className="flex items-center">
            <FaLeaf className="text-emerald-500 text-2xl mr-4" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Produtividade</h3>
              <p className="text-3xl font-bold text-emerald-600">+12%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Ações Rápidas</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="p-4 bg-green-50 rounded-lg border border-green-200 hover:bg-green-100 transition-colors">
            <FaSeedling className="text-green-600 text-xl mb-2" />
            <h3 className="font-semibold text-gray-900">Registrar Fazenda</h3>
            <p className="text-sm text-gray-600">Adicionar nova propriedade</p>
          </button>

          <button className="p-4 bg-blue-50 rounded-lg border border-blue-200 hover:bg-blue-100 transition-colors">
            <FaUsers className="text-blue-600 text-xl mb-2" />
            <h3 className="font-semibold text-gray-900">Cadastrar Agricultor</h3>
            <p className="text-sm text-gray-600">Novo membro da rede</p>
          </button>

          <button className="p-4 bg-yellow-50 rounded-lg border border-yellow-200 hover:bg-yellow-100 transition-colors">
            <FaCloudSun className="text-yellow-600 text-xl mb-2" />
            <h3 className="font-semibold text-gray-900">Ver Relatório</h3>
            <p className="text-sm text-gray-600">Análise NASA</p>
          </button>
        </div>
      </div>
    </div>
  );
}