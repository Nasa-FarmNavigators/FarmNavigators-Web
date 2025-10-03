import { useEffect, useState } from "react";
import axios from "axios";
import * as XLSX from "xlsx";
import PageMeta from "../../../components/Inst/common/PageMeta";
import PageBreadcrumb from "../../../components/Inst/common/PageBreadCrumb";
import { Modal } from "../../../components/Inst/ui/modal";
import Input from "../../../components/Inst/form/input/InputField";
import Label from "../../../components/Inst/form/Label";
import { useUserData } from "../../../hooks/useUserData";
import ComponentCard from "../../../components/Inst/common/ComponentCard";

const apiUrl = import.meta.env.VITE_API_URL;
const imgBBApiKey = import.meta.env.VITE_IMGBB_API_KEY;

interface UssdReportResolution {
    id: number;
    method: string;
    imageUrl?: string;
    createdAt: string;
    resolvedById?: string;
}

interface UssdReport {
    id: string;
    phone: string;
    location: string;
    confirmed: boolean;
    createdAt: string;
    status: "PENDING" | "RESOLVED" | "REJECTED";
    areaDetail: string;
    district: string;
    province: string;
    riskLevel: number;
    resolutions: UssdReportResolution[];
}

const itemsPerPage = 5;

export default function UssdReports() {
    const [reports, setReports] = useState<UssdReport[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [selectedReport, setSelectedReport] = useState<UssdReport | null>(null);
    const [resolvingReport, setResolvingReport] = useState<UssdReport | null>(null);
    const [method, setMethod] = useState("");
    const [image, setImage] = useState<File | null>(null);
    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState("PENDING");
    const [currentPage, setCurrentPage] = useState(1);
    const [loadingId, setLoadingId] = useState<string | null>(null);
    const [isResolving, setIsResolving] = useState(false);



    const { user } = useUserData();

    const fetchReports = async () => {
        try {
            const res = await axios.get(`${apiUrl}/ussd-reports`);
            setReports(res.data);
        } catch (err) {
            console.error("Erro ao buscar reports:", err);
            setError("Erro ao buscar reports");
        } finally {
            setLoading(false);
        }
    };

    const exportToExcel = () => {
        const data = reports.map((r) => ({
            Província: r.province,
            Município: r.district,
            "Área Detalhada": r.areaDetail,
            "Localização": r.location,
            Confirmado: r.confirmed ? "Sim" : "Não",
            "Nível de Risco": r.riskLevel,
            Status: r.status,
            "Data de Criação": new Date(r.createdAt).toLocaleString(),
        }));
        const worksheet = XLSX.utils.json_to_sheet(data);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Relatórios USSD");
        XLSX.writeFile(workbook, "relatorios_ussd.xlsx");
    };

    const handleResolveSubmit = async () => {
        if (!resolvingReport || !image) {
            alert("A imagem da resolução é obrigatória.");
            return;
        }

        setIsResolving(true); // Inicia o loading

        try {
            // 1. Upload da imagem para o ImgBB
            const imageForm = new FormData();
            imageForm.append("image", image);

            const imgbbRes = await axios.post(
                `https://api.imgbb.com/1/upload?key=${imgBBApiKey}`,
                imageForm
            );

            const imageUrl = imgbbRes.data.data.url;

            // 2. Envio da resolução ao seu backend com o link da imagem
            await axios.post(`${apiUrl}/ussd-reports/${resolvingReport.id}/resolve`, {
                method,
                imageUrl,
                resolvedById: user?.id || "admin",
            });

            // 3. Atualiza o estado
            fetchReports();
            setResolvingReport(null);
            setMethod("");
            setImage(null);
        } catch (err) {
            console.error("Erro ao resolver:", err);
            alert("Erro ao enviar resolução. Tente novamente.");
        } finally {
            setIsResolving(false); // Finaliza o loading
        }
    };


    // 🔎 Filtro e paginação
    const filteredReports = reports.filter(
        (r) =>
            r.areaDetail.toLowerCase().includes(search.toLowerCase()) &&
            (statusFilter ? r.status === statusFilter : true)
    );
    const totalPages = Math.ceil(filteredReports.length / itemsPerPage);
    const paginatedReports = filteredReports.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    useEffect(() => {
        fetchReports();
    }, [])

    return (
        <div>
            <PageMeta title="Relatórios USSD" description="Listagem de relatórios recebidos via USSD" />
            <PageBreadcrumb pageTitle="Relatórios USSD" />
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Relatórios Recebidos</h2>
                <button
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
                    onClick={exportToExcel}
                >
                    Exportar para Excel
                </button>
            </div>
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
                        <option value="PENDING">PENDENTE</option>
                        <option value="RESOLVED">RESOLVIDO</option>
                    </select>
                </div>
            </ComponentCard>

            {loading ? (
                <div className="flex flex-col items-center py-10">
                    <svg
                        className="animate-spin h-8 w-8 text-red-400"
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
                    <span className="mt-2 text-gray-600 text-sm">Carregando dados...</span>
                </div>
            ) : error ? (
                <p className="text-red-500">{error}</p>
            ) : paginatedReports.length === 0 ? (
                <p className="text-gray-600">Nenhum relatório encontrado.</p>
            ) : (
                <div className="space-y-4 mt-4">
                    {paginatedReports.map((r) => (
                        <div key={r.id} className="border rounded p-4 shadow bg-white space-y-2">
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="text-sm text-gray-700">🗺️ {r.province}, {r.district}, {r.areaDetail}</p>
                                    <p className="text-sm text-gray-500">📆 {new Date(r.createdAt).toLocaleString()}</p>
                                    <p className="text-sm text-gray-600">
                                        ⚠️ <span className={r.riskLevel > 2 ? "text-red-500" : r.riskLevel > 1 ? "text-yellow-500" : "text-gray-500"}>Nível de Risco: {r.riskLevel}</span>
                                    </p>
                                </div>
                                <span className={`px-2 py-1 text-xs rounded font-semibold ${r.status === "RESOLVED" ? "bg-green-200 text-green-800" : r.status === "REJECTED" ? "bg-red-200 text-red-800" : "bg-blue-100 text-black-400"}`}>{r.status}</span>
                            </div>
                            <div className="flex gap-3 flex-wrap">
                                <button onClick={() => setSelectedReport(r)} className="px-3 py-1 bg-blue-500 text-white rounded">Ver no mapa</button>
                                {r.resolutions.length == 0 && (
                                    <button onClick={() => setResolvingReport(r)} className="px-3 py-1 bg-red-400 text-white rounded">Resolver</button>
                                )}
                            </div>
                            {r.resolutions.length > 0 && (
                                <div className="mt-2">
                                    <h4 className="text-sm font-semibold">Resoluções:</h4>
                                    {r.resolutions.map((res) => (
                                        <div key={res.id} className="ml-2 mt-1 text-sm text-gray-700 space-y-1">
                                            <p>Método: {res.method}</p>
                                            <p>Data: {new Date(res.createdAt).toLocaleString()}</p>
                                            {res.imageUrl && (
                                                <img src={res.imageUrl} alt="Evidência" className="mt-1 max-h-48 rounded border" />
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
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
                </div>
            )}

            {selectedReport && (
                <Modal isOpen={true} onClose={() => setSelectedReport(null)} className="max-w-3xl">
                    <div className="p-4">
                        <h2 className="text-lg font-bold mb-2">Localização: {selectedReport.province}, {selectedReport.district}</h2>
                        <div className="h-[400px] flex justify-center items-center bg-gray-100">
                            <iframe
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                loading="lazy"
                                allowFullScreen
                                src={`https://maps.google.com/maps?q=${encodeURIComponent(selectedReport.location)}&output=embed`}
                            ></iframe>
                        </div>
                    </div>
                </Modal>
            )}

            {resolvingReport && (
                <Modal isOpen={true} onClose={() => setResolvingReport(null)} className="max-w-xl">
                    <div className="p-6">
                        <h3 className="text-lg font-semibold mb-4">Resolver Reporte</h3>
                        <div className="space-y-4">
                            <div>
                                <Label>Método utilizado</Label>
                                <textarea value={method} onChange={(e) => setMethod(e.target.value)} className="w-full p-2 rounded border" rows={3} />
                            </div>
                            <div>
                                <Label>Imagem da resolução <span className="text-red-500">*</span></Label>
                                <input type="file" required onChange={(e) => setImage(e.target.files?.[0] || null)} />
                            </div>
                        </div>
                        <div className="mt-6 flex justify-end gap-2">
                            <button onClick={() => setResolvingReport(null)} className="px-4 py-2 bg-gray-300 rounded">Cancelar</button>
                            <button
                                type="submit"
                                onClick={handleResolveSubmit}
                                disabled={isResolving}
                                className="bg-red-400 text-white px-4 py-2 rounded hover:bg-red-500 text-sm flex items-center justify-center gap-2 disabled:opacity-50"
                            >
                                {isResolving ? (
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
                    </div>
                </Modal>
            )}
        </div>
    );
}

