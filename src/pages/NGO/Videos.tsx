import { FaPlay, FaEye, FaClock } from "react-icons/fa";

const videos = [
  {
    id: 1,
    title: "Técnicas de Irrigação Sustentável",
    description: "Como usar dados da NASA para otimizar a irrigação",
    thumbnail: "/images/video-thumb/irrigation.jpg",
    duration: "12:45",
    views: "1.2k",
    category: "Irrigação"
  },
  {
    id: 2,
    title: "Rotação de Culturas em Angola",
    description: "Métodos adaptados ao clima angolano",
    thumbnail: "/images/video-thumb/rotation.jpg", 
    duration: "8:30",
    views: "856",
    category: "Cultivo"
  },
  {
    id: 3,
    title: "Análise de Solo com Dados Satelitários",
    description: "Interpretando dados da NASA para melhor produtividade",
    thumbnail: "/images/video-thumb/soil.jpg",
    duration: "15:20",
    views: "2.1k",
    category: "Solo"
  }
];

export default function Videos() {
  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Conteúdo Educativo
        </h1>
        <p className="text-gray-600">
          Vídeos e materiais educativos para agricultores
        </p>
      </div>

      {/* Upload Section */}
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Adicionar Novo Conteúdo</h2>
        <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
          Upload Vídeo
        </button>
      </div>

      {/* Videos Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <div key={video.id} className="bg-white rounded-lg shadow overflow-hidden">
            <div className="relative">
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <FaPlay className="text-4xl text-gray-400" />
              </div>
              <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded flex items-center">
                <FaClock className="mr-1" />
                {video.duration}
              </div>
            </div>
            
            <div className="p-4">
              <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full mb-2">
                {video.category}
              </span>
              
              <h3 className="font-semibold text-gray-900 mb-2">
                {video.title}
              </h3>
              
              <p className="text-gray-600 text-sm mb-3">
                {video.description}
              </p>
              
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center">
                  <FaEye className="mr-1" />
                  {video.views} visualizações
                </div>
                
                <button className="text-green-600 hover:text-green-800 font-medium">
                  Assistir
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}