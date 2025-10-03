import { useEffect, useState } from "react";
import axios from "axios";
import PageBreadcrumb from "../../../components/Inst/common/PageBreadCrumb";
import ComponentCard from "../../../components/Inst/common/ComponentCard";
import PageMeta from "../../../components/Inst/common/PageMeta";
import { Modal } from "../../../components/Inst/ui/modal";
import { useUserData } from "../../../hooks/useUserData";

const apiUrl = import.meta.env.VITE_API_URL;
const imgBBApiKey = import.meta.env.VITE_IMGBB_API_KEY;

type RiskZone = {
  id: string;
  description: string;
  address: string;
  latitude: number;
  longitude: number;
  imageUrl: string;
  status: string;
  createdAt: string;
};

const pageSize = 6;

export default function Images() {
  const [data, setData] = useState<RiskZone[]>([]);
  const [filteredData, setFilteredData] = useState<RiskZone[]>([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [resolvingReport, setResolvingReport] = useState<RiskZone | null>(null);
  const [loadingId, setLoadingId] = useState<string | null>(null);
  const [isFormVisible, setIsFormVisible] = useState<{ [key: string]: boolean }>({});
  const { user } = useUserData();

  useEffect(() => {
    setIsLoading(true);
    axios.get<RiskZone[]>(`${apiUrl}/report`)
      .then((res) => {
        setData(res.data);
        setFilteredData(res.data);
      })
      .catch((err) => console.error("Erro ao buscar dados:", err))
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    let results = [...data];
    if (search) {
      results = results.filter(r =>
        r.description.toLowerCase().includes(search.toLowerCase()) ||
        r.address.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (statusFilter !== "ALL") {
      results = results.filter(r => r.status === statusFilter);
    }
    setFilteredData(results);
    setCurrentPage(1);
  }, [search, statusFilter, data]);

  const totalPages = Math.ceil(filteredData.length / pageSize);
  const paginatedData = filteredData.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  const handleCompleteReport = async (
    e: React.FormEvent<HTMLFormElement>,
    id: string
  ) => {
    e.preventDefault();
    setLoadingId(id);

    const formData = new FormData(e.currentTarget);
    const method = formData.get("method") as string;
    const date = formData.get("date") as string;
    const image = formData.get("image") as File;

    if (!image) {
      alert("A imagem é obrigatória");
      setLoadingId(null);
      return;
    }

    try {
      const imgbbForm = new FormData();
      imgbbForm.append("image", image);

      const imgbbRes = await axios.post(
        `https://api.imgbb.com/1/upload?key=${imgBBApiKey}`,
        imgbbForm
      );

      const imageUrl = imgbbRes.data.data.url;

      console.log({
        method,
        date,
        imageUrl,
        userId: user?.id,
      });

      await axios.post(`${apiUrl}/report/${id}/complete`, {
        method,
        date: new Date(date).toISOString(),
        imageUrl,
        resolvedById: user?.id,
      });

      setResolvingReport(null);
      const updatedData = data.map((r) =>
        r.id === id ? { ...r, status: "CONFIRMED" } : r
      );
      alert("Resolvido");
      setData(updatedData);
      setIsFormVisible((prev) => ({ ...prev, [id]: false }));
    } catch (error) {
      console.error("Erro ao enviar conclusão:", error);
      alert("Erro ao concluir o reporte.");
    } finally {
      setLoadingId(null);
    }
  };

  return (
    <>
      <PageMeta title="Reportes" description="Visualização de reportes registrados." />
      <PageBreadcrumb pageTitle="Reportes" />
      <div className="space-y-6">
        <ComponentCard title="Buscar e filtrar reportes">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="relative">
              <span className="absolute -translate-y-1/2 pointer-events-none left-4 top-1/2">
                <svg
                  className="fill-gray-400 dark:fill-gray-400"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.04175 9.37363C3.04175 5.87693 5.87711 3.04199 9.37508 3.04199C12.8731 3.04199 15.7084 5.87693 15.7084 9.37363C15.7084 12.8703 12.8731 15.7053 9.37508 15.7053C5.87711 15.7053 3.04175 12.8703 3.04175 9.37363ZM9.37508 1.54199C5.04902 1.54199 1.54175 5.04817 1.54175 9.37363C1.54175 13.6991 5.04902 17.2053 9.37508 17.2053C11.2674 17.2053 13.003 16.5344 14.357 15.4176L17.177 18.238C17.4699 18.5309 17.9448 18.5309 18.2377 18.238C18.5306 17.9451 18.5306 17.4703 18.2377 17.1774L15.418 14.3573C16.5365 13.0033 17.2084 11.2669 17.2084 9.37363C17.2084 5.04817 13.7011 1.54199 9.37508 1.54199Z"
                    fill=""
                  />
                </svg>
              </span>
              <input
                type="text"
                placeholder="Buscar por descrição ou endereço..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-200 bg-transparent py-2.5 pl-12 pr-14 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-800 dark:bg-gray-900 dark:bg-white/[0.03] dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800 xl:w-[430px]"
              />
            </div>

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="border border-gray-300 px-4 py-2 rounded-md bg-white text-black dark:bg-gray-800 dark:text-white dark:border-gray-600"
            >
              <option value="ALL">Todos os status</option>
              <option value="PENDING">PENDENTE</option>
              <option value="CONFIRMED">RESOLVIDO</option>
              <option value="HIGH">ALTO RISCO</option>
              <option value="MEDIUM">MÉDIO RISCO</option>
              <option value="LOW">BAIXO RISCO</option>
            </select>
          </div>
        </ComponentCard>

        <ComponentCard title="Visualização dos casos">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-10">
              <svg className="animate-spin h-8 w-8 text-red-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
              </svg>
              <span className="mt-2 text-gray-600">Carregando reportes...</span>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {paginatedData.map((report) => (
                  <div key={report.id} className="bg-white border rounded-lg shadow-md overflow-hidden">
                    <img src={report.imageUrl} alt={report.description} className="w-full h-48 object-cover" />
                    <div className="p-4">
                      <h2 className="font-bold text-lg text-gray-800">{report.address}</h2>
                      <p className="text-sm text-gray-600">{report.description}</p>
                      <p className="text-xs text-gray-400">Criado em: {new Date(report.createdAt).toLocaleDateString()}</p>
                      {report.status === "PENDING" && (
                        <button
                          onClick={() => setResolvingReport(report)}
                          className="bg-red-400 text-white px-4 py-2 rounded mt-2 text-sm"
                        >
                          Concluir Reporte
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {totalPages > 1 && (
                <div className="flex justify-center items-center mt-6 gap-2">
                  <button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} className="px-3 py-1 border rounded disabled:opacity-50 bg-white text-black" disabled={currentPage === 1}>Anterior</button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button key={page} onClick={() => setCurrentPage(page)} className={`px-3 py-1 border rounded ${page === currentPage ? "bg-red-400 text-white" : "bg-white text-black"}`}>{page}</button>
                  ))}
                  <button onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))} className="px-3 py-1 border rounded disabled:opacity-50 bg-white text-black" disabled={currentPage === totalPages}>Próxima</button>
                </div>
              )}
            </>
          )}
        </ComponentCard>

        {resolvingReport && (
          <Modal isOpen={true} onClose={() => setResolvingReport(null)} className="max-w-xl">
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-4">Resolver Reporte</h3>
              <form onSubmit={(e) => handleCompleteReport(e, resolvingReport.id)} className="space-y-4">
                <div>
                  <label className="block mb-1 text-sm font-medium">Descreva como foi resolvido:</label>
                  <textarea name="method" required placeholder="Ex: Limpeza feita pela equipe de manutenção..." className="w-full border rounded px-3 py-2 text-sm" />
                </div>
                <div>
                  <label className="block mb-1 text-sm font-medium">Data de resolução:</label>
                  <input required type="date" name="date" className="w-full border rounded px-3 py-2 text-sm" />
                </div>
                <div>
                  <label className="block mb-1 text-sm font-medium">Imagem da resolução:</label>
                  <input required type="file" name="image" accept="image/*" className="w-full text-sm" />
                </div>
                <div className="flex justify-end gap-2 pt-2">
                  <button type="button" onClick={() => setResolvingReport(null)} className="px-4 py-2 bg-gray-300 rounded">Cancelar</button>
                  <button
                    type="submit"
                    disabled={loadingId === resolvingReport.id}
                    className="bg-red-400 text-white px-4 py-2 rounded hover:bg-red-500 text-sm flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {loadingId === resolvingReport.id ? (
                      <>
                        <svg
                          className="animate-spin h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v8z"
                          />
                        </svg>
                        Enviando...
                      </>
                    ) : (
                      "Enviar conclusão"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </Modal>
        )}
      </div>
    </>
  );
}
