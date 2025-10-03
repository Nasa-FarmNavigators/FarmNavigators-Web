import React, { useState } from 'react';
import { 
  FaPlay, 
  FaPause, 
  FaArrowLeft, 
  FaHeart, 
  FaShare, 
  FaDownload,
  FaClock,
  FaUser,
  FaEye,
  FaLanguage,
  FaFilter,
  FaSearch,
  FaTimes
} from 'react-icons/fa';

interface Video {
  id: number;
  title: string;
  description: string;
  duration: string;
  views: number;
  likes: number;
  category: string;
  language: string;
  difficulty: 'Básico' | 'Intermediário' | 'Avançado';
  instructor: string;
  thumbnail: string;
  tags: string[];
  transcript?: string;
}

const AgriFlixDemo: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [selectedLanguage, setSelectedLanguage] = useState('Todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  // Mock data de vídeos educativos para agricultura angolana
  const videos: Video[] = [
    {
      id: 1,
      title: "Como Preparar o Solo para Plantio de Milho",
      description: "Aprenda as técnicas essenciais para preparar o solo antes de plantar milho, incluindo análise do pH e adubação adequada.",
      duration: "2:30",
      views: 1250,
      likes: 89,
      category: "Preparo do Solo",
      language: "Português",
      difficulty: "Básico",
      instructor: "Eng. Maria Santos",
      thumbnail: "/images/videos/soil-prep.jpg",
      tags: ["milho", "solo", "preparo", "adubação"],
      transcript: "Hoje vamos aprender como preparar o solo para o plantio de milho. Primeiro, faça uma análise do pH..."
    },
    {
      id: 2,
      title: "Otalapia Ukwashika - Irrigação Inteligente",
      description: "Vídeo em Kimbundu sobre técnicas de irrigação que economizam água usando dados climáticos.",
      duration: "1:45",
      views: 890,
      likes: 67,
      category: "Irrigação",
      language: "Kimbundu",
      difficulty: "Intermediário",
      instructor: "João Kikonda",
      thumbnail: "/images/videos/irrigation.jpg",
      tags: ["irrigação", "água", "economia"],
    },
    {
      id: 3,
      title: "Combate Natural a Pragas na Mandioca",
      description: "Métodos orgânicos e sustentáveis para proteger a plantação de mandioca sem usar pesticidas químicos.",
      duration: "3:15",
      views: 2100,
      likes: 156,
      category: "Controle de Pragas",
      language: "Português",
      difficulty: "Intermediário",
      instructor: "Dr. Carlos Ngola",
      thumbnail: "/images/videos/pest-control.jpg",
      tags: ["mandioca", "pragas", "orgânico", "sustentável"],
    },
    {
      id: 4,
      title: "Rotação de Culturas para Pequenos Agricultores",
      description: "Como fazer rotação de culturas em pequenas áreas para melhorar a produtividade e a saúde do solo.",
      duration: "2:50",
      views: 1650,
      likes: 112,
      category: "Técnicas Agrícolas",
      language: "Português",
      difficulty: "Básico",
      instructor: "Ana Muhongo",
      thumbnail: "/images/videos/crop-rotation.jpg",
      tags: ["rotação", "culturas", "produtividade"],
    },
    {
      id: 5,
      title: "Ochisenge - Conservação da Água",
      description: "Técnicas tradicionais e modernas em Umbundu para conservar água durante a época seca.",
      duration: "2:10",
      views: 756,
      likes: 54,
      category: "Conservação",
      language: "Umbundu",
      difficulty: "Básico",
      instructor: "Mama Katarina",
      thumbnail: "/images/videos/water-conservation.jpg",
      tags: ["água", "conservação", "seca"],
    },
    {
      id: 6,
      title: "Usando Dados da NASA para Plantio",
      description: "Como interpretar dados satelitais da NASA para tomar decisões de plantio mais inteligentes.",
      duration: "4:20",
      views: 3200,
      likes: 245,
      category: "Tecnologia",
      language: "Português",
      difficulty: "Avançado",
      instructor: "Prof. Ricardo Silva",
      thumbnail: "/images/videos/nasa-data.jpg",
      tags: ["NASA", "satélite", "dados", "tecnologia"],
    },
    {
      id: 7,
      title: "Compostagem Caseira Simples",
      description: "Aprenda a fazer adubo orgânico em casa usando restos de comida e materiais do dia a dia.",
      duration: "1:55",
      views: 1890,
      likes: 134,
      category: "Adubação",
      language: "Português",
      difficulty: "Básico",
      instructor: "Dona Esperança",
      thumbnail: "/images/videos/composting.jpg",
      tags: ["compostagem", "orgânico", "adubo"],
    },
    {
      id: 8,
      title: "Colheita no Tempo Certo - Indicadores",
      description: "Sinais naturais e técnicos para saber quando suas culturas estão prontas para colheita.",
      duration: "3:05",
      views: 1420,
      likes: 98,
      category: "Colheita",
      language: "Português",
      difficulty: "Intermediário",
      instructor: "Mestre António",
      thumbnail: "/images/videos/harvest-timing.jpg",
      tags: ["colheita", "timing", "sinais"],
    }
  ];

  const categories = ["Todos", "Preparo do Solo", "Irrigação", "Controle de Pragas", "Técnicas Agrícolas", "Conservação", "Tecnologia", "Adubação", "Colheita"];
  const languages = ["Todos", "Português", "Kimbundu", "Umbundu", "Kikongo"];

  const filteredVideos = videos.filter(video => {
    const categoryMatch = selectedCategory === 'Todos' || video.category === selectedCategory;
    const languageMatch = selectedLanguage === 'Todos' || video.language === selectedLanguage;
    const searchMatch = searchQuery === '' || 
      video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.instructor.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return categoryMatch && languageMatch && searchMatch;
  });

  const clearSearch = () => {
    setSearchQuery('');
  };

  const clearAllFilters = () => {
    setSearchQuery('');
    setSelectedCategory('Todos');
    setSelectedLanguage('Todos');
  };

  const handleVideoSelect = (video: Video) => {
    setSelectedVideo(video);
    setIsPlaying(false);
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Básico': return 'bg-green-100 text-green-800';
      case 'Intermediário': return 'bg-yellow-100 text-yellow-800';
      case 'Avançado': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (selectedVideo) {
    return (
      <div className="min-h-screen bg-gray-900">
        {/* Video Player Header */}
        <div className="bg-black/80 p-4">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <button
              onClick={() => setSelectedVideo(null)}
              className="text-white hover:text-green-400 flex items-center"
            >
              <FaArrowLeft className="mr-2" />
              Voltar aos Vídeos
            </button>
            <div className="text-white text-sm">
              AgriFlix - Educação Agrícola
            </div>
          </div>
        </div>

        {/* Video Player */}
        <div className="max-w-6xl mx-auto bg-white">
          {/* Video Display Area */}
          <div className="relative bg-gradient-to-br from-green-600 to-blue-600 aspect-video flex items-center justify-center">
            <div className="text-center text-white">
              <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                {isPlaying ? (
                  <FaPause className="text-3xl" />
                ) : (
                  <FaPlay className="text-3xl ml-1" />
                )}
              </div>
              <p className="text-lg font-semibold">{selectedVideo.title}</p>
              <p className="text-sm opacity-80 mt-2">Vídeo Demo - {selectedVideo.duration}</p>
            </div>
            
            {/* Play/Pause Overlay */}
            <button
              onClick={handlePlayPause}
              className="absolute inset-0 flex items-center justify-center"
            >
              <span className="sr-only">{isPlaying ? 'Pausar' : 'Reproduzir'}</span>
            </button>
          </div>

          {/* Video Controls */}
          <div className="p-4 border-b">
            <div className="flex items-center justify-between mb-4">
              <button
                onClick={handlePlayPause}
                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center"
              >
                {isPlaying ? <FaPause className="mr-2" /> : <FaPlay className="mr-2" />}
                {isPlaying ? 'Pausar' : 'Reproduzir'}
              </button>
              
              <div className="flex space-x-2">
                <button className="p-2 text-gray-600 hover:text-red-500 transition-colors">
                  <FaHeart />
                </button>
                <button className="p-2 text-gray-600 hover:text-blue-500 transition-colors">
                  <FaShare />
                </button>
                <button className="p-2 text-gray-600 hover:text-green-500 transition-colors">
                  <FaDownload />
                </button>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
              <div 
                className="bg-green-600 h-2 rounded-full transition-all duration-300"
                style={{ width: isPlaying ? '45%' : '0%' }}
              ></div>
            </div>
          </div>

          {/* Video Info */}
          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Info */}
              <div className="lg:col-span-2">
                <h1 className="text-2xl font-bold text-gray-900 mb-4">
                  {selectedVideo.title}
                </h1>
                
                <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-600">
                  <div className="flex items-center">
                    <FaEye className="mr-1" />
                    {selectedVideo.views.toLocaleString()} visualizações
                  </div>
                  <div className="flex items-center">
                    <FaHeart className="mr-1" />
                    {selectedVideo.likes} curtidas
                  </div>
                  <div className="flex items-center">
                    <FaClock className="mr-1" />
                    {selectedVideo.duration}
                  </div>
                  <div className="flex items-center">
                    <FaLanguage className="mr-1" />
                    {selectedVideo.language}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(selectedVideo.difficulty)}`}>
                    {selectedVideo.difficulty}
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold">
                    {selectedVideo.category}
                  </span>
                  {selectedVideo.tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                      #{tag}
                    </span>
                  ))}
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  {selectedVideo.description}
                </p>

                {/* Transcript */}
                {selectedVideo.transcript && (
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Transcrição:</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {selectedVideo.transcript}
                    </p>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div>
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Instrutor</h3>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-3">
                      <FaUser className="text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{selectedVideo.instructor}</p>
                      <p className="text-sm text-gray-600">Especialista em Agricultura</p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h3 className="font-semibold text-green-900 mb-2">💡 Dica da NASA</h3>
                  <p className="text-sm text-green-800">
                    Use os dados de umidade do solo do seu app antes de aplicar as técnicas deste vídeo para melhores resultados!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <button
                onClick={() => window.history.back()}
                className="mr-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <FaArrowLeft className="text-gray-600" />
              </button>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">AgriFlix 🎥</h1>
                <p className="text-sm text-gray-600">Educação agrícola em vídeos curtos</p>
              </div>
            </div>
            
            <div className="text-sm text-gray-500">
              {filteredVideos.length} vídeos disponíveis
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative max-w-2xl mx-auto">
            <div className="relative">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Pesquisar vídeos por título, instrutor, categoria ou tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-12 py-4 border border-gray-300 rounded-xl text-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white shadow-sm"
              />
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <FaTimes />
                </button>
              )}
            </div>
            
            {/* Search suggestions */}
            {searchQuery && (
              <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-lg mt-1 z-10 max-h-48 overflow-y-auto">
                {filteredVideos.slice(0, 5).map((video) => (
                  <button
                    key={video.id}
                    onClick={() => {
                      setSearchQuery(video.title);
                      handleVideoSelect(video);
                    }}
                    className="w-full text-left px-4 py-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0"
                  >
                    <div className="font-medium text-gray-900">{video.title}</div>
                    <div className="text-sm text-gray-500">{video.instructor} • {video.category}</div>
                  </button>
                ))}
                {filteredVideos.length === 0 && searchQuery && (
                  <div className="px-4 py-3 text-gray-500 text-center">
                    Nenhum vídeo encontrado para "{searchQuery}"
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Filters */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-4 items-center">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <FaFilter className="text-gray-500" />
                <span className="text-sm font-semibold text-gray-700">Filtros</span>
              </button>
              
              {(searchQuery || selectedCategory !== 'Todos' || selectedLanguage !== 'Todos') && (
                <button
                  onClick={clearAllFilters}
                  className="text-sm text-red-600 hover:text-red-800 transition-colors"
                >
                  Limpar todos os filtros
                </button>
              )}
            </div>

            <div className="text-sm text-gray-500">
              {filteredVideos.length} de {videos.length} vídeos
            </div>
          </div>
          
          {/* Filter Options */}
          {showFilters && (
            <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Category Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Categoria</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>

                {/* Language Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Idioma</label>
                  <select
                    value={selectedLanguage}
                    onChange={(e) => setSelectedLanguage(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  >
                    {languages.map(language => (
                      <option key={language} value={language}>{language}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Active Filters Display */}
        {(searchQuery || selectedCategory !== 'Todos' || selectedLanguage !== 'Todos') && (
          <div className="mb-6">
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-sm text-gray-600">Filtros ativos:</span>
              
              {searchQuery && (
                <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                  Busca: "{searchQuery}"
                  <button
                    onClick={clearSearch}
                    className="ml-2 text-blue-600 hover:text-blue-800"
                  >
                    <FaTimes className="text-xs" />
                  </button>
                </span>
              )}
              
              {selectedCategory !== 'Todos' && (
                <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                  {selectedCategory}
                  <button
                    onClick={() => setSelectedCategory('Todos')}
                    className="ml-2 text-green-600 hover:text-green-800"
                  >
                    <FaTimes className="text-xs" />
                  </button>
                </span>
              )}
              
              {selectedLanguage !== 'Todos' && (
                <span className="inline-flex items-center px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">
                  {selectedLanguage}
                  <button
                    onClick={() => setSelectedLanguage('Todos')}
                    className="ml-2 text-purple-600 hover:text-purple-800"
                  >
                    <FaTimes className="text-xs" />
                  </button>
                </span>
              )}
            </div>
          </div>
        )}

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              onClick={() => handleVideoSelect(video)}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden group"
            >
              {/* Thumbnail */}
              <div className="relative aspect-video bg-gradient-to-br from-green-400 to-blue-500 group-hover:from-green-500 group-hover:to-blue-600 transition-all duration-300">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                    <FaPlay className="text-white text-xl ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </div>
              </div>

              {/* Video Info */}
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-green-600 transition-colors">
                  {video.title}
                </h3>
                
                <div className="flex items-center text-xs text-gray-500 mb-3">
                  <FaUser className="mr-1" />
                  <span className="mr-3">{video.instructor}</span>
                  <FaLanguage className="mr-1" />
                  <span>{video.language}</span>
                </div>

                <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                  <div className="flex items-center">
                    <FaEye className="mr-1" />
                    {video.views.toLocaleString()}
                  </div>
                  <div className="flex items-center">
                    <FaHeart className="mr-1" />
                    {video.likes}
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mb-3">
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${getDifficultyColor(video.difficulty)}`}>
                    {video.difficulty}
                  </span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">
                    {video.category}
                  </span>
                </div>

                <p className="text-gray-600 text-sm line-clamp-2">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredVideos.length === 0 && (
          <div className="text-center py-12">
            <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaSearch className="text-gray-500 text-2xl" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Nenhum vídeo encontrado
            </h3>
            {searchQuery ? (
              <div>
                <p className="text-gray-600 mb-4">
                  Não encontramos vídeos para "<strong>{searchQuery}</strong>"
                </p>
                <div className="space-y-2">
                  <p className="text-sm text-gray-500">Sugestões:</p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• Verifique a ortografia das palavras</li>
                    <li>• Tente termos mais gerais como "milho" ou "irrigação"</li>
                    <li>• Use palavras-chave como "preparo", "plantio", "colheita"</li>
                  </ul>
                </div>
                <button
                  onClick={clearAllFilters}
                  className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  Ver todos os vídeos
                </button>
              </div>
            ) : (
              <p className="text-gray-600">
                Tente alterar os filtros para ver mais conteúdo.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AgriFlixDemo;