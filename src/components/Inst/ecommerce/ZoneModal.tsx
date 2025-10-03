import React, { useState } from "react";
import axios from "axios";
import Label from "../form/Label";
import Input from "../form/input/InputField";
import { Modal } from "../ui/modal";
import { useUserData } from "../../../hooks/useUserData";

const imgBBApiKey = import.meta.env.VITE_IMGBB_API_KEY;
const apiUrl = import.meta.env.VITE_API_URL;

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

interface Props {
  zone: RiskZone;
  relatedZones: RiskZone[];
  onClose: () => void;
  onSelectRelated: (zone: RiskZone) => void;
  onUpdateStatus: (id: string, newStatus: string) => void;
}

const ZoneModal: React.FC<Props> = ({
  zone,
  relatedZones,
  onClose,
  onSelectRelated,
  onUpdateStatus,
}) => {
  const [resolving, setResolving] = useState(false);
  const [method, setMethod] = useState("");
  const [resolvedAt, setResolvedAt] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { user } = useUserData();
  
  const handleSubmit = async () => {
    if (!image) {
      alert("A imagem é obrigatória");
      return;
    }

    try {
      setIsSubmitting(true);

      const imgbbForm = new FormData();
      imgbbForm.append("image", image);

      const imgbbRes = await axios.post(
        `https://api.imgbb.com/1/upload?key=${imgBBApiKey}`,
        imgbbForm
      );

      const imageUrl = imgbbRes.data.data.url;

      await axios.post(`${apiUrl}/report/${zone.id}/complete`, {
        method,
        date: new Date(resolvedAt).toISOString(),
        imageUrl,
        resolvedById: user?.id,// substitua se tiver autenticação
      });

      onUpdateStatus(zone.id, "CONFIRMED");
      alert("Reporte marcado como resolvido!");

      setResolving(false);
      onClose();
    } catch (error) {
      console.error("Erro ao enviar resolução:", error);
      alert("Erro ao concluir o reporte.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Modal isOpen={true} onClose={onClose} className="max-w-[700px] m-4">
      <div className="no-scrollbar relative w-full max-w-[700px] overflow-y-auto rounded-3xl bg-white p-4 dark:bg-gray-900 lg:p-11">
        <div className="px-2 pr-14">
          <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
            {zone.address}
          </h4>
          <p className="mb-6 text-sm text-gray-500 dark:text-gray-400 lg:mb-7">
            {zone.description}
          </p>
        </div>

        <div className="flex flex-col">
          <div className="custom-scrollbar max-h-[450px] overflow-y-auto px-2 pb-3">
            {zone.imageUrl && (
              <img
                src={zone.imageUrl}
                alt="Imagem da zona"
                className="rounded-lg w-full h-64 object-cover mb-6 shadow"
              />
            )}

            <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
              <div>
                <Label>Estado</Label>
                <p className="uppercase text-sm text-gray-700 dark:text-white">
                  {zone.status === "CONFIRMED" ? "RESOLVIDO" : zone.status}
                </p>
              </div>
              <div>
                <Label>Criado em</Label>
                <p className="text-sm text-gray-600 dark:text-white">
                  {new Date(zone.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>

            {resolving && (
              <div className="mt-7 space-y-5">
                <h5 className="text-lg font-medium text-gray-800 dark:text-white/90">
                  Finalizar caso
                </h5>

                <div>
                  <Label>Método utilizado</Label>
                  <textarea
                    name="method"
                    value={method}
                    onChange={(e) => setMethod(e.target.value)}
                    className="w-full mt-1 p-2 rounded border dark:bg-zinc-800"
                    rows={3}
                    required
                  />
                </div>

                <div>
                  <Label>Data da resolução</Label>
                  <Input
                    name="date"
                    type="date"
                    value={resolvedAt}
                    onChange={(e) => setResolvedAt(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <Label>Foto do caso resolvido</Label>
                  <input
                    type="file"
                    name="image"
                    accept="image/*"
                    onChange={(e) => setImage(e.target.files?.[0] || null)}
                    required
                  />
                </div>
              </div>
            )}

            {relatedZones.length > 0 && (
              <div className="mt-7">
                <h5 className="mb-2 text-lg font-medium text-gray-800 dark:text-white/90">
                  Zonas interligadas
                </h5>
                <ul className="space-y-1 pl-4 list-disc text-sm text-blue-700 dark:text-blue-400">
                  {relatedZones.map((z) => (
                    <li
                      key={z.id}
                      onClick={() => onSelectRelated(z)}
                      className="cursor-pointer hover:underline"
                    >
                      {z.description}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="flex items-center gap-3 px-2 mt-6 lg:justify-end">
            {!resolving && (
              <button
                onClick={() => setResolving(true)}
                className="px-4 py-2 rounded bg-red-400 text-white hover:bg-red-500"
              >
                Marcar como resolvido
              </button>
            )}

            {resolving && (
              <>
                <button
                  onClick={() => setResolving(false)}
                  className="px-4 py-2 rounded bg-gray-300 dark:bg-zinc-700 text-zinc-900 dark:text-zinc-200"
                >
                  Cancelar
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className={`px-4 py-2 rounded text-white ${
                    isSubmitting
                      ? "bg-red-300 cursor-not-allowed"
                      : "bg-red-400 hover:bg-red-500"
                  }`}
                >
                  {isSubmitting ? "Enviando..." : "Enviar resolução"}
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ZoneModal;
