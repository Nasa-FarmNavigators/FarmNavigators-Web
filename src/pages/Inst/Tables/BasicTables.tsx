import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import PageMeta from "../../../components/Inst/common/PageMeta";
import PageBreadcrumb from "../../../components/Inst/common/PageBreadCrumb";

const apiUrl = import.meta.env.VITE_API_URL;

export default function GerenciarEventos() {
  type Alert = {
    id: string;
    title: string;
    description: string;
    type: string;
    region: string;
    location?: string;
    image?: string;
  };

  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [loading, setLoading] = useState(true);
  const [feedback, setFeedback] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const navigate = useNavigate();

  const fetchAlerts = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${apiUrl}/alert`);
      setAlerts(res.data);
    } catch (err) {
      setFeedback("Erro ao carregar eventos.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    const confirmed = window.confirm("Tem certeza que deseja excluir este evento?");
    if (!confirmed) return;

    try {
      await axios.delete(`${apiUrl}/alert/${id}`);
      setFeedback("Evento excluído com sucesso!");
      setAlerts((prev) => prev.filter((a) => a.id !== id));
    } catch (err) {
      console.error(err);
      setFeedback("Erro ao excluir o evento.");
    }
  };

  const totalPages = Math.ceil(alerts.length / itemsPerPage);
  const paginatedAlerts = alerts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {
    fetchAlerts();
  }, []);

  return (
    <div>
      <PageMeta title="Gerenciar Eventos" description="Listagem de alertas e eventos criados" />
      <PageBreadcrumb pageTitle="Gerenciar Eventos" />

      {feedback && (
        <div className="mt-4 mb-4 rounded bg-blue-100 p-3 text-center text-gray-700">
          {feedback}
        </div>
      )}

      {loading ? (
        <div className="flex flex-col items-center py-10">
          <svg
            className="animate-spin h-8 w-8 text-red-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
          </svg>
          <span className="mt-2 text-gray-600 text-sm">Carregando dados...</span>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            {paginatedAlerts.map((alert) => (
              <div
                key={alert.id}
                className="rounded border p-4 shadow-sm bg-white flex flex-col md:flex-row gap-4 items-start"
              >
                {alert.image ? (
                  <img
                    src={alert.image}
                    alt="Imagem do alerta"
                    className="w-32 h-32 object-cover rounded border"
                  />
                ) : (
                  <div className="w-32 h-32 flex items-center justify-center bg-gray-100 border rounded text-sm text-gray-500">
                    Sem imagem
                  </div>
                )}

                <div className="flex-1">
                  <h2 className="text-lg font-semibold text-gray-800">{alert.title}</h2>
                  <p className="text-gray-600 mt-1">{alert.description}</p>
                  <p className="text-sm mt-1 text-gray-500">📍 {alert.location || "—"}</p>

                  <div className="flex gap-4 mt-3">
                    <button
                      className="bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded"
                      onClick={() => handleDelete(alert.id)}
                    >
                      Excluir
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center items-center mt-6 gap-2">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                className="px-3 py-1 border rounded disabled:opacity-50 bg-white text-black dark:bg-gray-800 dark:text-white dark:border-gray-600"
                disabled={currentPage === 1}
              >
                Anterior
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-3 py-1 border rounded ${page === currentPage
                    ? "bg-red-400 text-white"
                    : "bg-white text-black dark:bg-gray-800 dark:text-white dark:border-gray-600"
                    }`}
                >
                  {page}
                </button>
              ))}
              <button
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                className="px-3 py-1 border rounded disabled:opacity-50 bg-white text-black dark:bg-gray-800 dark:text-white dark:border-gray-600"
                disabled={currentPage === totalPages}
              >
                Próxima
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
