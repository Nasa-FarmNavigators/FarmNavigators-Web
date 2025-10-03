import { FaChartLine, FaDownload, FaCalendar, FaSatellite } from "react-icons/fa";

export default function FarmReports() {
  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Relatórios Agrícolas
        </h1>
        <p className="text-gray-600">
          Análises baseadas em dados da NASA e informações locais
        </p>
      </div>

      {/* Report Types */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6 border-l-4 border-green-500">
          <div className="flex items-center mb-4">
            <FaChartLine className="text-green-500 text-2xl mr-3" />
            <h3 className="text-lg font-semibold text-gray-900">Produtividade</h3>
          </div>
          <p className="text-gray-600 mb-4">
            Análise de rendimento das culturas por região e período.
          </p>
          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors">
            Gerar Relatório
          </button>
        </div>

        <div className="bg-white rounded-lg shadow p-6 border-l-4 border-blue-500">
          <div className="flex items-center mb-4">
            <FaSatellite className="text-blue-500 text-2xl mr-3" />
            <h3 className="text-lg font-semibold text-gray-900">Dados NASA</h3>
          </div>
          <p className="text-gray-600 mb-4">
            Relatório climático e de solo baseado em dados satellitários.
          </p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
            Gerar Relatório
          </button>
        </div>

        <div className="bg-white rounded-lg shadow p-6 border-l-4 border-yellow-500">
          <div className="flex items-center mb-4">
            <FaCalendar className="text-yellow-500 text-2xl mr-3" />
            <h3 className="text-lg font-semibold text-gray-900">Mensal</h3>
          </div>
          <p className="text-gray-600 mb-4">
            Resumo mensal das atividades e resultados das fazendas.
          </p>
          <button className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700 transition-colors">
            Gerar Relatório
          </button>
        </div>
      </div>

      {/* Recent Reports */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">Relatórios Recentes</h2>
        </div>
        <div className="divide-y divide-gray-200">
          {[
            {
              title: "Análise de Produtividade - Setembro 2025",
              date: "2025-10-01",
              type: "Produtividade",
              status: "Concluído"
            },
            {
              title: "Dados Climáticos NASA - Setembro 2025",
              date: "2025-09-30",
              type: "NASA",
              status: "Concluído"
            },
            {
              title: "Relatório Mensal - Agosto 2025",
              date: "2025-09-01",
              type: "Mensal",
              status: "Concluído"
            }
          ].map((report, index) => (
            <div key={index} className="p-6 hover:bg-gray-50">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-1">
                    {report.title}
                  </h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>{report.date}</span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded">
                      {report.type}
                    </span>
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded">
                      {report.status}
                    </span>
                  </div>
                </div>
                <button className="flex items-center text-blue-600 hover:text-blue-800">
                  <FaDownload className="mr-2" />
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}