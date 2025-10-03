import React, { useState, useEffect } from 'react';
import { 
  FaApple, 
  FaGooglePlay, 
  FaFacebookF, 
  FaInstagram, 
  FaYoutube, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaMapMarkerAlt,
  FaSeedling,
  FaCloudRain,
  FaMobile,
  FaGlobe,
  FaChartLine,
  FaUsers,
  FaLeaf,
  FaEye,
  FaHeart,
  FaTimes,
  FaPlay,
  FaGamepad
} from 'react-icons/fa';

const FarmNavigatorsLanding: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentFeature, setCurrentFeature] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Features do Farm Navigators
  const features = [
    {
      icon: <FaSeedling className="w-12 h-12 text-green-600" />,
      title: "Farm Tinder 🌱❤️",
      description: "Recomendações personalizadas de culturas baseadas em dados NASA, solo e clima da sua região"
    },
    {
      icon: <FaCloudRain className="w-12 h-12 text-blue-600" />,
      title: "Previsões Climáticas",
      description: "Dados da NASA em tempo real: chuva, temperatura, umidade do solo e alertas de pragas"
    },
    {
      icon: <FaMobile className="w-12 h-12 text-purple-600" />,
      title: "AgriFlix 🎥",
      description: "Mini-vídeos educativos de 1 minuto com técnicas agrícolas em português e línguas locais"
    },
    {
      icon: <FaGamepad className="w-12 h-12 text-orange-600" />,
      title: "Serious Game 🎮",
      description: "Jogo educativo que ensina como usar dados de satélite para tomar decisões agrícolas inteligentes"
    },
    {
      icon: <FaChartLine className="w-12 h-12 text-orange-600" />,
      title: "Simulador de Crescimento",
      description: "Veja como suas culturas vão crescer baseado nas condições reais da sua terra"
    },
    {
      icon: <FaGlobe className="w-12 h-12 text-green-700" />,
      title: "Funciona Offline",
      description: "Previsões e alertas via USSD/SMS mesmo sem internet, em Kimbundu, Umbundu e Kikongo"
    },
    {
      icon: <FaLeaf className="w-12 h-12 text-emerald-600" />,
      title: "Conservação do Solo",
      description: "Monitore a saúde da sua terra e aprenda práticas sustentáveis de agricultura"
    }
  ];

  // Estatísticas (placeholder para dados reais futuros)
  const stats = [
    { value: "25%", label: "Aumento médio de produtividade", icon: <FaChartLine /> },
    { value: "3 idiomas", label: "Português + línguas locais", icon: <FaGlobe /> },
    { value: "18 províncias", label: "Cobertura em todo Angola", icon: <FaMapMarkerAlt /> },
    { value: "24/7", label: "Alertas em tempo real", icon: <FaCloudRain /> }
  ];

  // Organizações parceiras (placeholder)
  const partners = [
    { name: "NASA", description: "Dados satelitais e meteorológicos" },
    { name: "Ministério da Agricultura", description: "Parceria institucional" },
    { name: "ONGs Locais", description: "Educação e capacitação" },
    { name: "Cooperativas", description: "Distribuição e suporte local" }
  ];

  // Auto-rotate features
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-emerald-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-lg">
        <div className="container mx-auto px-4 sm:px-8 flex items-center justify-between py-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-xl flex items-center justify-center">
              <FaSeedling className="text-white text-xl" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Farm Navigators</h1>
              <p className="text-xs text-gray-600">Angola</p>
            </div>
          </div>

          <button
            className="lg:hidden text-gray-600 hover:text-green-600"
            onClick={toggleMenu}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                    d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>

          <div className={`${isMenuOpen ? 'block' : 'hidden'} lg:block`}>
            <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8 lg:items-center">
              <a href="#features" className="text-gray-700 hover:text-green-600 transition-colors">Funcionalidades</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-green-600 transition-colors">Como Funciona</a>
              <a href="#impact" className="text-gray-700 hover:text-green-600 transition-colors">Impacto</a>
              <a href="/farm-tinder" className="text-gray-700 hover:text-green-600 transition-colors">Demo Farm Tinder</a>
              <a href="/agriflix" className="text-gray-700 hover:text-green-600 transition-colors">Demo AgriFlix</a>
              <a href="/serious-game" className="text-gray-700 hover:text-orange-600 transition-colors">🎮 Jogo Educativo</a>
              <a href="#download" className="text-gray-700 hover:text-green-600 transition-colors">Baixar App</a>
              <a href="/admin" className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                Portal ONGs
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-8">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Agricultura Inteligente
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                Powered by NASA 🛰️
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              Conectamos agricultores angolanos com dados espaciais da NASA, 
              <br className="hidden md:block" />
              inteligência artificial e tecnologia para <strong>aumentar a produtividade</strong> 
              <br className="hidden md:block" />
              e <strong>conservar o meio ambiente</strong>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center">
                <FaApple className="mr-2 text-xl" />
                Baixar para iOS
              </button>
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center">
                <FaGooglePlay className="mr-2 text-xl" />
                Baixar para Android
              </button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-green-100">
                  <div className="text-green-600 mb-2 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Funcionalidades Inovadoras
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tecnologia espacial da NASA ao alcance do agricultor angolano
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const isInteractiveDemo = feature.title.includes('Farm Tinder') || 
                                       feature.title.includes('AgriFlix') || 
                                       feature.title.includes('Serious Game');
              const demoLink = feature.title.includes('Farm Tinder') ? '/farm-tinder' : 
                              feature.title.includes('AgriFlix') ? '/agriflix' : 
                              feature.title.includes('Serious Game') ? '/serious-game' : '#';
              
              return (
                <div 
                  key={index}
                  className={`p-8 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
                    currentFeature === index 
                      ? 'border-green-500 bg-green-50 shadow-lg scale-105' 
                      : 'border-gray-200 bg-white hover:border-green-300 hover:shadow-md'
                  } ${isInteractiveDemo ? 'relative overflow-hidden' : ''}`}
                  onClick={() => isInteractiveDemo ? window.location.href = demoLink : setCurrentFeature(index)}
                >
                  {/* Demo Badge */}
                  {isInteractiveDemo && (
                    <div className="absolute top-3 right-3 bg-gradient-to-r from-green-500 to-blue-500 text-white text-xs px-2 py-1 rounded-full font-bold animate-pulse">
                      {feature.title.includes('Serious Game') ? 'JOGO' : 'DEMO'}
                    </div>
                  )}
                  
                  <div className="mb-6 flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed mb-4">
                    {feature.description}
                  </p>
                  
                  {/* Interactive Demo Button */}
                  {isInteractiveDemo && (
                    <div className="text-center mt-4">
                      <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 text-sm font-semibold rounded-full">
                        {feature.title.includes('Serious Game') ? '🎮 Clique para jogar' : '🚀 Clique para testar'}
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Demos Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              🚀 Experimente Agora - Demos Interativas
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Veja como o Farm Navigators funciona na prática com nossas demonstrações interativas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Farm Tinder Demo */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 group cursor-pointer"
                 onClick={() => window.location.href = '/farm-tinder'}>
              <div className="text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FaHeart className="text-3xl text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Farm Tinder 🌱❤️</h3>
                <p className="mb-6 opacity-90">
                  Deslize para escolher as melhores culturas para sua terra baseado em dados NASA
                </p>
                <div className="bg-white/20 rounded-lg p-4 mb-6">
                  <p className="text-sm font-semibold">O que você vai ver:</p>
                  <ul className="text-sm mt-2 space-y-1 opacity-90">
                    <li>• Recomendações personalizadas</li>
                    <li>• Dados climáticos da NASA</li>
                    <li>• Estimativas de produtividade</li>
                    <li>• Interface tipo Tinder</li>
                  </ul>
                </div>
                <button className="bg-white text-green-600 px-6 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                  Testar Farm Tinder →
                </button>
              </div>
            </div>

            {/* AgriFlix Demo */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 group cursor-pointer"
                 onClick={() => window.location.href = '/agriflix'}>
              <div className="text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FaPlay className="text-3xl text-white ml-1" />
                </div>
                <h3 className="text-2xl font-bold mb-4">AgriFlix 🎥</h3>
                <p className="mb-6 opacity-90">
                  Biblioteca de vídeos educativos curtos em português e línguas locais angolanas
                </p>
                <div className="bg-white/20 rounded-lg p-4 mb-6">
                  <p className="text-sm font-semibold">O que você vai ver:</p>
                  <ul className="text-sm mt-2 space-y-1 opacity-90">
                    <li>• Vídeos de 1-4 minutos</li>
                    <li>• Técnicas agrícolas práticas</li>
                    <li>• Múltiplos idiomas</li>
                    <li>• Player interativo</li>
                  </ul>
                </div>
                <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                  Assistir AgriFlix →
                </button>
              </div>
            </div>

            {/* Serious Game */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 group cursor-pointer"
                 onClick={() => window.location.href = '/serious-game'}>
              <div className="text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FaGamepad className="text-3xl text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Serious Game 🎮</h3>
                <p className="mb-6 opacity-90">
                  Jogo educativo que ensina como usar dados de satélite para decisões agrícolas inteligentes
                </p>
                <div className="bg-white/20 rounded-lg p-4 mb-6">
                  <p className="text-sm font-semibold">O que você vai aprender:</p>
                  <ul className="text-sm mt-2 space-y-1 opacity-90">
                    <li>• Interpretação de dados NASA</li>
                    <li>• Decisões de irrigação</li>
                    <li>• Sustentabilidade agrícola</li>
                    <li>• Impacto ambiental</li>
                  </ul>
                </div>
                <button className="bg-white text-orange-600 px-6 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                  Jogar Agora →
                </button>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg opacity-90">
              💡 <strong>Nota:</strong> Demonstrações interativas e jogo educativo para explorar as funcionalidades
            </p>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Como Funciona
            </h2>
            <p className="text-xl text-gray-600">
              Simples, inteligente e acessível para todos os agricultores
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Mobile App Flow */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                <FaMobile className="mr-3 text-green-600" />
                Para Agricultores (App Mobile)
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Cadastro Simples</h4>
                    <p className="text-gray-600">Telefone, localização e tipo de culturas que planta</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Farm Tinder 🌱❤️</h4>
                    <p className="text-gray-600">Deslize para escolher as melhores culturas para sua terra</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Alertas Inteligentes</h4>
                    <p className="text-gray-600">Receba notificações sobre clima, pragas e melhores práticas</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">AgriFlix + USSD</h4>
                    <p className="text-gray-600">Aprenda com vídeos curtos, mesmo sem internet via SMS</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Web Platform Flow */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                <FaGlobe className="mr-3 text-blue-600" />
                Para ONGs e Governo (Web)
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Mapas Interativos</h4>
                    <p className="text-gray-600">Visualize dados agrícolas e climáticos por região</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Gestão de Conteúdo</h4>
                    <p className="text-gray-600">Upload de vídeos educativos e materiais de capacitação</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Relatórios e Analytics</h4>
                    <p className="text-gray-600">Dados de produtividade e impacto para políticas públicas</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Suporte a Decisões</h4>
                    <p className="text-gray-600">Use dados confiáveis para programas e investimentos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Impacto no Povo Angolano 🇦🇴
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tecnologia espacial para transformar a agricultura e reduzir a fome
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaChartLine className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Mais Produção, Mais Renda</h3>
              <p className="text-gray-600">
                Agricultores saberão o que plantar, quando plantar e como cuidar → menos perdas, mais rendimento
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaMobile className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Inclusão Digital Rural</h3>
              <p className="text-gray-600">
                Acesso por telemóveis simples (USSD), levando tecnologia até zonas sem internet
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaUsers className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Educação Acessível</h3>
              <p className="text-gray-600">
                Mini-aulas curtas e simples, em português e línguas locais (Kimbundu, Umbundu, Kikongo)
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaLeaf className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Sustentabilidade</h3>
              <p className="text-gray-600">
                Monitoramento da conservação da terra e combate à degradação do solo
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaSeedling className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Redução da Fome</h3>
              <p className="text-gray-600">
                Uso de dados para aumentar segurança alimentar e otimizar produção de alimentos
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl">
              <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaGlobe className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Planejamento Estratégico</h3>
              <p className="text-gray-600">
                ONGs e governo terão dados confiáveis para orientar projetos agrícolas e investimentos
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Parceiros e Colaboradores
            </h2>
            <p className="text-xl text-gray-600">
              Unindo forças para transformar a agricultura angolana
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{partner.name}</h3>
                <p className="text-gray-600">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Download */}
      <section id="download" className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Pronto para Revolucionar sua Agricultura? 🚀
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Junte-se aos agricultores que já estão usando tecnologia espacial da NASA 
            para aumentar a produtividade e cuidar da terra.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="bg-white text-green-600 px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center">
              <FaApple className="mr-2 text-xl" />
              Download iOS
            </button>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center">
              <FaGooglePlay className="mr-2 text-xl" />
              Download Android
            </button>
          </div>

          <p className="text-lg">
            Ou envie <strong>FARM</strong> para <strong>+244 900 000 000</strong> via SMS
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <FaSeedling className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Farm Navigators</h3>
                  <p className="text-sm text-gray-400">Angola</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6">
                Conectando agricultura angolana com tecnologia espacial da NASA
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                  <FaFacebookF />
                </a>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                  <FaInstagram />
                </a>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                  <FaYoutube />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Para Agricultores</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-green-400 transition-colors">Baixar App</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Como Usar</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">USSD Offline</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Suporte</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Para ONGs</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/admin" className="hover:text-green-400 transition-colors">Portal Web</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">API Documentação</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Relatórios</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Parcerias</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <FaEnvelope className="mr-2" />
                  info@farmnavigators.ao
                </li>
                <li className="flex items-center">
                  <FaPhoneAlt className="mr-2" />
                  +244 900 000 000
                </li>
                <li className="flex items-center">
                  <FaMapMarkerAlt className="mr-2" />
                  Luanda, Angola
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Farm Navigators Angola. Todos os direitos reservados.</p>
            <p className="mt-2">
              Desenvolvido com 💚 para o futuro da agricultura angolana
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FarmNavigatorsLanding;