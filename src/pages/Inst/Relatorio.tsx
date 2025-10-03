import { useState, useEffect } from "react";
import PageBreadcrumb from "../../components/Inst/common/PageBreadCrumb";
import PageMeta from "../../components/Inst/common/PageMeta";
import { useUserData } from "../../hooks/useUserData";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";


export default function Relatorio() {
  const apiUrl = import.meta.env.VITE_API_URL;
  const [reportType, setReportType] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [fullText, setFullText] = useState("");
  const [displayedText, setDisplayedText] = useState("");
  const { user, loading } = useUserData();

  const handleGeneratePDF = async () => {
    const reportElement = document.getElementById("report-pdf");

    if (!reportElement) return;

    const canvas = await html2canvas(reportElement, {
      scale: 2, // melhor qualidade
    });

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save(`relatorio_${reportType}.pdf`);
  };

  const handleReportGeneration = async () => {
    if (!reportType) return;
    setIsLoading(true);
    setFullText("");
    setDisplayedText("");

    // Mapeamento para a rota correta da API
    const endpointMap: Record<string, string> = {
      zonas_criticas: `${apiUrl}/reports-ia/common-risk-zones`,
      acoes_instituicao: `${apiUrl}/reports-ia/inst-actions/${user?.id}`,
      comparativo_temporal: `${apiUrl}/reports-ia/temp-actions`,
    };

    try {
      const res = await fetch(endpointMap[reportType]);
      const data = await res.json();
      if (data.relatorio) {
        setFullText(data.relatorio);
      } else {
        setFullText("Erro ao gerar relatório. Tente novamente.");
      }
    } catch (err) {
      console.error(err);
      setFullText("Erro na comunicação com o servidor.");
    } finally {
      setIsLoading(false);
    }
  };

  // Typing effect
  useEffect(() => {
    if (!fullText) return;

    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + fullText[index]);
      index++;

      if (index >= fullText.length) {
        clearInterval(interval);
      }
    }, 20); // velocidade do efeito (ms por caractere)

    return () => clearInterval(interval);
  }, [fullText]);

  return (
    <div>
      <PageMeta
        title="Relatórios com IA"
        description="Gere relatórios estratégicos com IA a partir dos dados de zonas de risco de malária registrados na plataforma."
      />
      <PageBreadcrumb pageTitle="Relatórios Inteligentes com IA" />

      <div className="min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
        <div className="mx-auto w-full max-w-[800px] text-center">
          <h3 className="mb-6 text-3xl font-bold text-gray-800 dark:text-white/90">
            Gerar Relatório Estratégico
          </h3>
          <p className="mb-10 text-gray-600 dark:text-gray-400 text-base">
            Escolha abaixo o tipo de relatório que deseja gerar. A inteligência
            artificial irá analisar os dados registrados na plataforma para
            fornecer um relatório completo e personalizado para sua instituição.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {[
              {
                title: "Zonas Críticas",
                description:
                  "Identifique as áreas com maior incidência de registros de risco de malária.",
                type: "zonas_criticas",
              },
              {
                title: "Ações da Instituição",
                description:
                  "Visualize onde sua instituição atuou e qual foi o impacto das intervenções.",
                type: "acoes_instituicao",
              },
              {
                title: "Comparativo Temporal",
                description:
                  "Compare a evolução dos registros ao longo dos meses em diferentes zonas.",
                type: "comparativo_temporal",
              },
            ].map((card) => (
              <div
                key={card.type}
                className={`p-5 rounded-xl border-2 transition-all duration-300 ${reportType === card.type
                  ? "border-blue-600 bg-blue-50 dark:bg-blue-900/10"
                  : "border-gray-300"
                  } cursor-pointer hover:shadow-md`}
                onClick={() => setReportType(card.type)}
              >
                <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {card.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            {reportType && !isLoading && (
              <button
                onClick={handleReportGeneration}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Gerar Relatório
              </button>

            )}
            {displayedText && !isLoading && (
              <div className="mt-4 flex justify-center gap-4">
                <button
                  onClick={handleGeneratePDF}
                  className="px-6 py-3 bg-red-400 text-white rounded-lg hover:bg-red-500 transition duration-300"
                >
                  Baixar PDF
                </button>
              </div>
            )}
            {isLoading && (
              <div className="mt-4 text-center text-blue-600">
                <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 mx-auto"></div>
                <p className="mt-4 text-lg">Analisando dados com IA...</p>
              </div>
            )}

            {displayedText && !isLoading && (
              <div
                id="report-pdf"
                className="mt-8 p-6 text-left bg-white dark:bg-gray-100 rounded-xl shadow-sm text-gray-800 whitespace-pre-wrap"
              >
                <div className="flex justify-between items-center mb-4">
                  <img src="/images/others/logo.png" alt="MapaZZZ" className="h-12" />
                  {user?.profileImageUrl && (
                    <img src={user?.profileImageUrl} alt="Instituição" className="h-12" />
                  )}
                </div>

                <h2 className="text-xl font-bold mb-2">{user?.name}</h2>
                <p className="text-sm mb-4 text-gray-600">Email: {user?.email}</p>
                <p className="text-sm mb-4 text-gray-600">Telefone: {user?.phone}</p>

                <hr className="my-4" />

                <h3 className="text-lg font-semibold mb-2">Relatório Gerado por IA</h3>
                <p>{displayedText}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
