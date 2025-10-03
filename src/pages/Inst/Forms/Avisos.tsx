// Avisos.tsx - Melhorado com mapa por evento e cor personalizada por data

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import PageBreadcrumb from "../../../components/Inst/common/PageBreadCrumb";
import PageMeta from "../../../components/Inst/common/PageMeta";
import ComponentCard from "../../../components/Inst/common/ComponentCard";
import Label from "../../../components/Inst/form/Label";
import Input from "../../../components/Inst/form/input/InputField";
import TextArea from "../../../components/Inst/form/input/TextArea";
import Radio from "../../../components/Inst/form/input/Radio";
import MultiSelect from "../../../components/Inst/form/MultiSelect";
import FileInput from "../../../components/Inst/form/input/FileInput";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { GoogleMap, Marker, useJsApiLoader, Autocomplete } from "@react-google-maps/api";

const apiUrl = import.meta.env.VITE_API_URL;
const imgBBApiKey = import.meta.env.VITE_IMGBB_API_KEY;
const googleMapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

export default function Avisos() {
  const { alertId } = useParams();
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [selectedValue, setSelectedValue] = useState("Evento");
  const [selectedRegions, setSelectedRegions] = useState("Sem");
  const [location, setLocation] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [calendarMarks, setCalendarMarks] = useState<Record<string, { selected: boolean, marked: boolean, selectedColor: string }>>({});
  const [eventDates, setEventDates] = useState<Array<any>>([]);
  const [autocomplete, setAutocomplete] = useState<google.maps.places.Autocomplete | null>(null);
  const [newEvent, setNewEvent] = useState({
    location: "",
    date: new Date(),
    start_time: "",
    end_time: "",
    coords: { latitude: -8.8, longitude: 13.2 },
    color: "#ff0000"
  });

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey,
    libraries: ["places"], // 👈 necessário para Autocomplete funcionar
  });

  const handleMapClick = (e: google.maps.MapMouseEvent) => {
    const latLng = e.latLng;
    if (!latLng) return;

    setNewEvent(prev => ({
      ...prev,
      coords: {
        latitude: latLng.lat(),
        longitude: latLng.lng(),
      },
    }));
  };

  const onPlaceChanged = () => {
    if (autocomplete !== null) {
      const place = autocomplete.getPlace();
      const location = place.geometry?.location;

      if (location) {
        const lat = location.lat();
        const lng = location.lng();

        setNewEvent(prev => ({
          ...prev,
          coords: {
            latitude: lat,
            longitude: lng
          },
          location: place.formatted_address || prev.location
        }));
      }
    }
  };

  const handleCalendarColorChange = (dateStr: string, color: string) => {
    setCalendarMarks(prev => ({
      ...prev,
      [dateStr]: {
        selected: true,
        marked: true,
        selectedColor: color,
      },
    }));
  };

  const addEventDate = () => {
    if (
      newEvent.location &&
      newEvent.date &&
      newEvent.start_time &&
      newEvent.end_time
    ) {
      const dateStr = newEvent.date.toISOString().split("T")[0];
      handleCalendarColorChange(dateStr, newEvent.color);
      setEventDates([...eventDates, newEvent]);
      setNewEvent({
        location: "",
        date: new Date(),
        start_time: "",
        end_time: "",
        coords: { latitude: -8.8, longitude: 13.2 },
        color: "#ff0000"
      });
    }
  };

  const uploadImage = async (): Promise<string | null> => {
    if (!file) return imageUrl || null;
    try {
      const formData = new FormData();
      formData.append("image", file);
      const res = await axios.post(`https://api.imgbb.com/1/upload?key=${imgBBApiKey}`, formData);
      return res.data.data.url;
    } catch (err) {
      console.error("Erro ao enviar imagem:", err);
      setFeedback("Erro ao enviar imagem.");
      return null;
    }
  };

  const resetForm = () => {
    setTitle("");
    setMessage("");
    setSelectedRegions("");
    setSelectedValue("Prevenção");
    setLocation("");
    setImageUrl("");
    setFile(null);
    setEventDates([]);
    setCalendarMarks({});
    setNewEvent({
      location: "",
      date: new Date(),
      start_time: "",
      end_time: "",
      coords: { latitude: -8.8, longitude: 13.2 },
      color: "#ff0000", // valor padrão
    });
  };


  const handleSubmit = async () => {
    if (!title || !message || selectedRegions.length === 0 || !selectedValue) {
      setFeedback("Preencha todos os campos obrigatórios!");
      return;
    }
    setLoading(true);
    try {
      const uploadedUrl = await uploadImage();
      if (!uploadedUrl) return;
      const payload = {
        title,
        description: message,
        region: selectedRegions[0],
        type: selectedValue,
        image: uploadedUrl,
        location,
        calendar_marks: calendarMarks,
        dates: eventDates,
      };
      await axios.post(`${apiUrl}/alert`, payload);
      setFeedback("Alerta enviado com sucesso!");
      resetForm();
    } catch (err) {
      console.error(err);
      setFeedback("Erro ao enviar alerta.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <PageMeta title="Criar eventos" description="Página para criar eventos" />
      <PageBreadcrumb pageTitle="Criar eventos" />
      {/* 
      {feedback && (
        <div className="mt-4 mb-4 rounded-lg bg-blue-100 border border-blue-300 text-blue-800 p-3 text-center animate-fade-in">
          {feedback}
        </div>
      )} */}


      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="space-y-6">
          <ComponentCard title="Informações geral">
            <Label htmlFor="title">Título</Label>
            <Input id="title" value={title} onChange={e => setTitle(e.target.value)} />

            <Label>Mensagem</Label>
            <TextArea value={message} onChange={setMessage} />

            <Label>Imagem</Label>
            <FileInput onChange={e => setFile(e.target.files?.[0] || null)} />

            <Label>Localização Geral</Label>
            <Input value={location} onChange={e => setLocation(e.target.value)} />

            {/* <Label>Tipo</Label>
            {["Prevenção", "Alerta de Risco", "Emergência"].map(tipo => (
              <Radio
                key={tipo}
                name="tipo"
                value={tipo}
                label={tipo}
                checked={selectedValue === tipo}
                onChange={setSelectedValue}
                id={`radio-${tipo}`}
              />
            ))} */}

            {/* <Label>Regiões</Label>
            <MultiSelect
              label="Selecione regiões"
              options={["Luanda", "Malanje", "Cabinda", "Benguela"].map(r => ({ value: r, text: r }))}
              defaultSelected={selectedRegions}
              onChange={setSelectedRegions}
            /> */}
          </ComponentCard>
        </div>

        <div className="space-y-6">
          <ComponentCard title="Datas e Locais do Evento">
            <Label>Local</Label>
            <Input value={newEvent.location} onChange={e => setNewEvent({ ...newEvent, location: e.target.value })} />

            <Label>Data</Label>
            <DatePicker
              selected={newEvent.date}
              onChange={date => date && setNewEvent({ ...newEvent, date })}
              dateFormat="yyyy-MM-dd"
              className="w-full border rounded p-2"
            />

            <Label>Cor do Evento</Label>
            <Input
              type="color"
              value={newEvent.color}
              onChange={e => setNewEvent({ ...newEvent, color: e.target.value })}
            />

            <Label>Hora de Início</Label>
            <Input type="time" value={newEvent.start_time} onChange={e => setNewEvent({ ...newEvent, start_time: e.target.value })} />

            <Label>Hora de Término</Label>
            <Input type="time" value={newEvent.end_time} onChange={e => setNewEvent({ ...newEvent, end_time: e.target.value })} />

            <Label>Selecionar Local no Mapa</Label>
            {isLoaded && (
              <div className="h-[400px] w-full space-y-2">
                {/* Barra de pesquisa */}
                <Autocomplete
                  onLoad={setAutocomplete}
                  onPlaceChanged={onPlaceChanged}
                >
                  <input
                    type="text"
                    placeholder="Buscar local..."
                    className="w-full p-2 border rounded shadow-sm"
                  />
                </Autocomplete>

                {/* Mapa */}
                <GoogleMap
                  center={{
                    lat: newEvent.coords.latitude,
                    lng: newEvent.coords.longitude
                  }}
                  zoom={12}
                  mapContainerStyle={{ width: "100%", height: "300px" }}
                  onClick={handleMapClick}
                >
                  <Marker
                    position={{
                      lat: newEvent.coords.latitude,
                      lng: newEvent.coords.longitude
                    }}
                  />
                </GoogleMap>
              </div>
            )}

            <button onClick={addEventDate} className="mt-2 px-4 py-2 bg-red-400 text-white rounded">
              Adicionar Evento
            </button>

            <ul className="mt-4 space-y-2">
              {eventDates.map((ev, idx) => (
                <li key={idx} className="text-sm text-gray-800 bg-gray-100 p-2 rounded">
                  📍 {ev.location} | 📅 {new Date(ev.date).toLocaleDateString()} | 🕒 {ev.start_time} - {ev.end_time}
                  <br />🌍 Lat: {ev.coords.latitude.toFixed(4)}, Lng: {ev.coords.longitude.toFixed(4)}
                  <br />🎨 Cor: <span style={{ color: ev.color }}>{ev.color}</span>
                </li>
              ))}
            </ul>
          </ComponentCard>
          {feedback && (
            <div className="mt-4 mb-4 rounded-lg bg-blue-100 border border-blue-300 text-blue-800 p-3 text-center animate-fade-in">
              {feedback}
            </div>
          )}
          <button
            className="mt-4 w-full rounded-lg bg-red-400 p-2 text-white hover:bg-red-500"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "Salvando..." : "Registrar evento"}
          </button>
        </div>
      </div>
    </div>
  );
}
