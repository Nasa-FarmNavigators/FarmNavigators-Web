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
    FaGamepad,
    FaDesktop,
    FaDownload,
    FaPause,
    FaPlayCircle,
    FaFlag,
    FaHandshake,
    FaBuilding,
    FaCheck,
    FaArrowRight,
    FaRocket
} from 'react-icons/fa';

const FarmNavigatorsLanding: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currentFeature, setCurrentFeature] = useState(0);
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const features = [
        {
            icon: <FaSeedling />,
            title: "Farm Tinder",
            description: "Recomendações personalizadas de culturas baseadas em dados NASA, solo e clima da sua região",
            benefits: ["Matching inteligente", "Dados NASA integrados", "Recomendações personalizadas"]
        },
        {
            icon: <FaCloudRain />,
            title: "Previsões Climáticas",
            description: "Dados da NASA em tempo real: chuva, temperatura, umidade do solo e alertas de pragas",
            benefits: ["Dados em tempo real", "Alertas de pragas", "Monitoramento contínuo"]
        },
        {
            icon: <FaMobile />,
            title: "AgriFlix",
            description: "Mini-vídeos educativos de 1 minuto com técnicas agrícolas em português e línguas locais",
            benefits: []
        },
        {
            icon: <FaGamepad />,
            title: "Jogo",
            description: "Jogo educativo que ensina como usar dados de satélite para tomar decisões agrícolas inteligentes",
            benefits: []
        },
        {
            icon: <FaChartLine />,
            title: "Simulador de Crescimento",
            description: "Veja como suas culturas vão crescer baseado nas condições reais da sua terra",
            benefits: ["Projeções visuais", "Baseado em dados reais", "Planejamento antecipado"]
        },
        {
            icon: <FaGlobe />,
            title: "Funciona Offline",
            description: "Previsões e alertas via USSD/SMS mesmo sem internet, em Kimbundu, Umbundu e Kikongo",
            benefits: ["Acesso universal", "Multi-idioma", "Sem dependência de internet"]
        },
        {
            icon: <FaLeaf />,
            title: "Conservação do Solo",
            description: "Monitore a saúde da sua terra e aprenda práticas sustentáveis de agricultura",
            benefits: ["Monitoramento contínuo", "Práticas sustentáveis", "Preservação ambiental"]
        }
    ];

    // Estatísticas (placeholder para dados reais futuros)
    const stats = [
        { value: "25%", label: "Aumento médio de produtividade", icon: <FaChartLine /> },
        { value: "5 idiomas", label: "Português, Inglês + línguas nacionais", icon: <FaGlobe /> },
        { value: "18 províncias", label: "Cobertura em todo Angola", icon: <FaMapMarkerAlt /> },
        { value: "24/7", label: "Alertas em tempo real", icon: <FaCloudRain /> }
    ];

    // Organizações parceiras (placeholder)
    const partners = [
        {
            name: "MINAGRIF",
            description: "Ministério da Agricultura e Florestas - Parceria institucional para políticas agrícolas",
            type: "Governo"
        },
        {
            name: "NASA Harvest",
            description: "Programa de agricultura e segurança alimentar da NASA - Dados satelites",
            type: "Tecnologia"
        },
        {
            name: "FAO Angola",
            description: "Organização das Nações Unidas para Agricultura e Alimentação",
            type: "Internacional"
        },
        // {
        //     name: "UNITEL",
        //     description: "Operadora de telecomunicações - Infraestrutura digital rural",
        //     type: "Telecom"
        // },
        // {
        //     name: "Banco de Fomento",
        //     description: "Financiamento de projetos agrícolas e microcrédito",
        //     type: "Financeiro"
        // },
        {
            name: "Universidade Agostinho Neto",
            description: "Pesquisa agrícola e capacitação técnica",
            type: "Academia"
        },
        // {
        //     name: "AIDA",
        //     description: "Agência para o Desenvolvimento Empresarial",
        //     type: "Desenvolvimento"
        // },
        // {
        //     name: "UNDP Angola",
        //     description: "Programa das Nações Unidas para o Desenvolvimento",
        //     type: "Cooperação"
        // }
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
                        <div className="w-12 h-12  from-green-500 to-blue-600 rounded-xl flex items-center justify-center">
                            {/* <FaSeedling className="bg-gradient-to-br text-white text-xl" /> */}
                            <img src='public/images/others/logo.png'></img>
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
                            {/* <a href="#features" className="text-gray-700 hover:text-green-600 transition-colors">Funcionalidades</a> */}
                            {/* <a href="#how-it-works" className="text-gray-700 hover:text-green-600 transition-colors">Como Funciona</a> */}
                            {/* <a href="#impact" className="text-gray-700 hover:text-green-600 transition-colors">Impacto</a> */}
                            <a href="/farm-tinder" className="text-gray-700 hover:text-green-600 transition-colors">Demo Farm Tinder</a>
                            <a href="/agriflix" className="text-gray-700 hover:text-green-600 transition-colors">AgriFlix</a>
                            <a href="/serious-game" className="text-gray-700 hover:text-orange-600 transition-colors">Jogo Educativo</a>
                            {/* <a href="#download" className="text-gray-700 hover:text-green-600 transition-colors">Baixar App</a> */}
                            <a href="/signin" className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                                Portal
                            </a>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative pt-24 pb-16 px-4 sm:px-8 overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/others/back4.jpg"
                        alt="Agriculture background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-green-900/70 via-blue-900/60 to-emerald-900/70"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 container mx-auto text-center">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            Agricultura Inteligente
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-blue-300">
                                Powered by NASA 🛰️
                            </span>
                        </h1>

                        <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                            Conectamos agricultores angolanos com dados espaciais da NASA,
                            <br className="hidden md:block" />
                            inteligência artificial e tecnologia para <strong className="text-green-300">aumentar a produtividade</strong>
                            <br className="hidden md:block" />
                            e <strong className="text-blue-300">conservar o meio ambiente</strong>.
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
                            <button className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center">
                                <FaDesktop className="mr-2 text-xl" />
                                Baixar para Desktop
                            </button>
                        </div>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {stats.map((stat, index) => (
                                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                                    <div className="text-green-300 mb-2 flex justify-center">
                                        {stat.icon}
                                    </div>
                                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                                    <div className="text-sm text-white/80">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-16 bg-white">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 mb-4">
                            <FaRocket className="text-emerald-600 text-xs" />
                            <span className="text-sm font-medium text-emerald-700">Tecnologia Avançada</span>
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Funcionalidades Inovadoras
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Tecnologia espacial da NASA ao alcance de cada agricultor angolano
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((feature, index) => {
                            const isInteractiveDemo = feature.title.includes('Farm Tinder') ||
                                feature.title.includes('AgriFlix') ||
                                feature.title.includes('Serious Game');

                            // Define demo link based on feature title
                            let demoLink = '';
                            if (feature.title.includes('Farm Tinder')) {
                                demoLink = '/farm-tinder';
                            } else if (feature.title.includes('AgriFlix')) {
                                demoLink = '/agriflix';
                            } else if (feature.title.includes('Serious Game')) {
                                demoLink = '/serious-game';
                            }

                            return (
                                <div
                                    key={index}
                                    className={`group relative bg-white rounded-xl border border-gray-200 p-6 transition-all duration-300 hover:shadow-lg hover:border-emerald-300 cursor-pointer ${isInteractiveDemo ? 'hover:scale-105' : ''}`}
                                    onClick={() => isInteractiveDemo ? window.open(demoLink, '_blank') : setCurrentFeature(index)}
                                >
                                    {/* Demo Badge */}
                                    {isInteractiveDemo && (
                                        <div className="absolute top-3 right-3 bg-gradient-to-r from-green-500 to-blue-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                                            {feature.title.includes('Serious Game') ? '🎮 JOGO' : 'DEMO'}
                                        </div>
                                    )}

                                    {/* Feature Icon */}
                                    <div className="flex justify-center mb-4">
                                        <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-md">
                                            {React.cloneElement(feature.icon, {
                                                className: "text-white text-xl"
                                            })}
                                        </div>
                                    </div>

                                    {/* Feature Content */}
                                    <div className="text-center">
                                        <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
                                            {feature.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>

                                    {/* Interactive Indicator */}
                                    {isInteractiveDemo && (
                                        <div className="mt-4 text-center">
                                            <span className="inline-flex items-center text-xs font-semibold text-emerald-600">
                                                Clique para testar →
                                            </span>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    {/* Simple Feature Details */}
                    {currentFeature !== null && !features[currentFeature].title.includes('Farm Tinder') &&
                        !features[currentFeature].title.includes('AgriFlix') &&
                        !features[currentFeature].title.includes('Serious Game') && (
                            <div className="mt-8 bg-gray-50 rounded-xl p-6 border border-gray-200">
                                <div className="flex items-start gap-6">
                                    <div className="flex-shrink-0">
                                        <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-md">
                                            {React.cloneElement(features[currentFeature].icon, {
                                                className: "text-white text-2xl"
                                            })}
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                                            {features[currentFeature].title}
                                        </h3>
                                        <p className="text-gray-600 mb-4">
                                            {features[currentFeature].description}
                                        </p>
                                        {features[currentFeature].benefits && features[currentFeature].benefits.length > 0 && (
                                            <div className="flex flex-wrap gap-2">
                                                {features[currentFeature].benefits.map((benefit, idx) => (
                                                    <span key={idx} className="inline-flex items-center gap-1 px-2 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">
                                                        <FaCheck className="text-emerald-600 text-xs" />
                                                        {benefit}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}
                </div>
            </section>

            {/* Video Demo Section */}
            <section className="relative py-20 overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/others/back.png"
                        alt="Agriculture background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-green-900/80 via-blue-900/70 to-emerald-900/80"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 container mx-auto px-4 sm:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-white mb-4">
                            Veja o Farm Navigators em Ação
                        </h2>
                        <p className="text-xl text-white/90 max-w-3xl mx-auto">
                            Demonstração completa de como a tecnologia NASA pode transformar a agricultura angolana
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                            {!isVideoPlaying ? (
                                // Video Thumbnail
                                <div className="relative">
                                    <img
                                        src="/images/others/back6.jpeg"
                                        alt="Farm Navigators Demo"
                                        className="w-full h-96 object-cover rounded-xl"
                                    />
                                    <div className="absolute inset-0 bg-black/30 rounded-xl flex items-center justify-center">
                                        <button
                                            onClick={() => setIsVideoPlaying(true)}
                                            className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 group"
                                        >
                                            <FaPlay className="text-green-600 text-2xl ml-1 group-hover:text-green-700" />
                                        </button>
                                    </div>
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <div className="bg-black/50 backdrop-blur-sm rounded-lg p-4">
                                            <h3 className="text-white font-bold text-lg mb-2">NASA Applied Sciences</h3>
                                            <p className="text-white/90 text-sm">
                                                Dados satelitais • Agricultura inteligente • Tecnologia espacial aplicada
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                // YouTube Video Player
                                <div className="relative">
                                    <div className="relative w-full h-96 rounded-xl overflow-hidden">
                                        <iframe
                                            width="100%"
                                            height="100%"
                                            src="https://www.youtube.com/embed/jjLRACfk7zM?start=9&autoplay=1&rel=0&modestbranding=1"
                                            title="Farm Navigators Demo"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowFullScreen
                                            className="rounded-xl"
                                        ></iframe>
                                    </div>
                                    <button
                                        onClick={() => setIsVideoPlaying(false)}
                                        className="absolute top-4 right-4 w-10 h-10 bg-black/70 rounded-full flex items-center justify-center text-white hover:bg-black/90 transition-colors z-10"
                                    >
                                        <FaTimes />
                                    </button>
                                </div>
                            )}

                            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                                <div className="text-white">
                                    <div className="text-2xl font-bold text-green-300">8:54</div>
                                    <div className="text-sm text-white/80">Duração do vídeo</div>
                                </div>
                                <div className="text-white">
                                    <div className="text-2xl font-bold text-blue-300">NASA</div>
                                    <div className="text-sm text-white/80">Dados oficiais</div>
                                </div>
                                <div className="text-white">
                                    <div className="text-2xl font-bold text-purple-300">HD 1080p</div>
                                    <div className="text-sm text-white/80">Qualidade premium</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Interactive Demos Section */}
            <section className="py-16 bg-gradient-to-br from-green-600 to-blue-600 text-white">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">
                            Experimente Nossas Demos
                        </h2>
                        <p className="text-lg opacity-90 max-w-2xl mx-auto">
                            Veja como o Farm Navigators funciona na prática
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {/* Farm Tinder Demo */}
                        <div className="bg-white/10 rounded-xl p-6 hover:bg-white/15 transition-all duration-300 cursor-pointer border border-white/20"
                            onClick={() => window.open('/farm-tinder', '_blank')}>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <FaHeart className="text-2xl text-white" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">Farm Tinder</h3>
                                <p className="mb-4 opacity-90 text-sm">
                                    Descubra as melhores culturas para sua terra com interface intuitiva
                                </p>
                                <div className="bg-white/10 rounded-lg p-3 mb-4">
                                    <p className="text-xs font-semibold mb-2">Funcionalidades:</p>
                                    <ul className="text-xs space-y-1 opacity-90">
                                        <li>• Recomendações personalizadas</li>
                                        <li>• Dados NASA integrados</li>
                                        <li>• Interface tipo Tinder</li>
                                    </ul>
                                </div>
                                <button className="bg-white text-green-600 px-4 py-2 rounded-lg font-semibold hover:shadow-md transition-all text-sm w-full">
                                    Testar Demo →
                                </button>
                            </div>
                        </div>

                        {/* AgriFlix Demo */}
                        <div className="bg-white/10 rounded-xl p-6 hover:bg-white/15 transition-all duration-300 cursor-pointer border border-white/20"
                            onClick={() => window.open('/agriflix', '_blank')}>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <FaPlay className="text-2xl text-white ml-1" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">AgriFlix</h3>
                                <p className="mb-4 opacity-90 text-sm">
                                    Vídeos educativos curtos em português e línguas locais
                                </p>
                                <div className="bg-white/10 rounded-lg p-3 mb-4">
                                    <p className="text-xs font-semibold mb-2">Conteúdo:</p>
                                    <ul className="text-xs space-y-1 opacity-90">
                                        <li>• Vídeos de 1-4 minutos</li>
                                        <li>• Técnicas práticas</li>
                                        <li>• Múltiplos idiomas</li>
                                    </ul>
                                </div>
                                <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:shadow-md transition-all text-sm w-full">
                                    Ver Vídeos →
                                </button>
                            </div>
                        </div>

                        {/* Serious Game */}
                        <div className="bg-white/10 rounded-xl p-6 hover:bg-white/15 transition-all duration-300 cursor-pointer border border-white/20"
                            onClick={() => window.open('/serious-game', '_blank')}>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <FaGamepad className="text-2xl text-white" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">Jogo Educativo</h3>
                                <p className="mb-4 opacity-90 text-sm">
                                    Aprenda agricultura sustentável com dados de satélite
                                </p>
                                <div className="bg-white/10 rounded-lg p-3 mb-4">
                                    <p className="text-xs font-semibold mb-2">Você vai aprender:</p>
                                    <ul className="text-xs space-y-1 opacity-90">
                                        <li>• Dados NASA na prática</li>
                                        <li>• Decisões de irrigação</li>
                                        <li>• Sustentabilidade</li>
                                    </ul>
                                </div>
                                <button className="bg-white text-orange-600 px-4 py-2 rounded-lg font-semibold hover:shadow-md transition-all text-sm w-full">
                                    Jogar Agora →
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-8">
                        <p className="text-sm opacity-80">
                            💡 Demos interativas para explorar as funcionalidades principais
                        </p>
                    </div>
                </div>
            </section>

            {/* How it Works */}
            <section id="how-it-works" className="py-24 bg-gradient-to-br from-slate-50 via-white to-emerald-50/30">
                <div className="container mx-auto px-4 sm:px-8">
                    <div className="text-center mb-20">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
                            <FaPlayCircle className="text-emerald-600 text-sm" />
                            <span className="text-sm font-medium text-emerald-700">Processo Simplificado</span>
                        </div>
                        <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-900 to-emerald-700 bg-clip-text text-transparent mb-6">
                            Como Funciona
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            Uma experiência intuitiva e poderosa desenvolvida para revolucionar a agricultura moderna
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        {/* Mobile App Flow - Enhanced */}
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/5 to-teal-500/5 rounded-3xl blur-lg"></div>
                            <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl border border-emerald-500/10 p-8 shadow-xl shadow-emerald-500/5">
                                <div className="flex items-center gap-3 mb-10">
                                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/25">
                                        <FaMobile className="text-white text-lg" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900">Para Agricultores</h3>
                                        <p className="text-gray-500 text-sm">Experiência Mobile Otimizada</p>
                                    </div>
                                </div>

                                <div className="space-y-8">
                                    {[
                                        { number: "01", title: "Cadastro Simplificado", desc: "Telefone, localização e tipo de culturas que planta", icon: "📱" },
                                        { number: "02", title: "Farm Tinder 🌱❤️", desc: "Deslize para escolher as melhores culturas para sua terra", icon: "💚" },
                                        { number: "03", title: "Alertas Inteligentes", desc: "Notificações sobre clima, pragas e melhores práticas", icon: "🔔" },
                                        { number: "04", title: "AgriFlix + USSD", desc: "Aprenda com vídeos curtos, mesmo sem internet via SMS", icon: "🎬" }
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-start gap-4 group">
                                            <div className="flex-shrink-0">
                                                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/25 group-hover:scale-110 transition-transform duration-300">
                                                    <span className="text-white font-bold text-lg">{item.number}</span>
                                                </div>
                                            </div>
                                            <div className="flex-1 pt-1">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <span className="text-lg">{item.icon}</span>
                                                    <h4 className="font-semibold text-gray-900 text-lg">{item.title}</h4>
                                                </div>
                                                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Web Platform Flow - Enhanced */}
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 rounded-3xl blur-lg"></div>
                            <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl border border-blue-500/10 p-8 shadow-xl shadow-blue-500/5">
                                <div className="flex items-center gap-3 mb-10">
                                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/25">
                                        <FaGlobe className="text-white text-lg" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900">Para ONGs e Governo</h3>
                                        <p className="text-gray-500 text-sm">Plataforma Web Avançada</p>
                                    </div>
                                </div>

                                <div className="space-y-8">
                                    {[
                                        { number: "01", title: "Mapas Interativos", desc: "Visualize dados agrícolas e climáticos por região", icon: "🗺️" },
                                        { number: "02", title: "Gestão de Conteúdo", desc: "Upload de vídeos educativos e materiais de capacitação", icon: "📊" },
                                        { number: "03", title: "Relatórios e Analytics", desc: "Dados de produtividade e impacto para políticas públicas", icon: "📈" },
                                        { number: "04", title: "Suporte a Decisões", desc: "Use dados confiáveis para programas e investimentos", icon: "🎯" }
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-start gap-4 group">
                                            <div className="flex-shrink-0">
                                                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/25 group-hover:scale-110 transition-transform duration-300">
                                                    <span className="text-white font-bold text-lg">{item.number}</span>
                                                </div>
                                            </div>
                                            <div className="flex-1 pt-1">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <span className="text-lg">{item.icon}</span>
                                                    <h4 className="font-semibold text-gray-900 text-lg">{item.title}</h4>
                                                </div>
                                                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="text-center mt-16">
                        <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 px-6 py-4 shadow-lg">
                            <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                            <p className="text-gray-700 font-medium">
                                Pronto para transformar a agricultura? <span className="text-emerald-600 font-semibold">Junte-se a nós hoje</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Impact Section */}
            <section id="impact" className="py-24 bg-gradient-to-br from-slate-50 via-white to-amber-50/20">
                <div className="container mx-auto px-4 sm:px-8">
                    <div className="text-center mb-20">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 mb-6">
                            <FaFlag className="text-amber-600 text-sm" />
                            <span className="text-sm font-medium text-amber-700">Transformação Nacional</span>
                        </div>
                        <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-900 to-amber-700 bg-clip-text text-transparent mb-6">
                            Impacto no Povo Angolano 🇦🇴
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Tecnologia espacial e inovação digital unidas para revolucionar a agricultura e erradicar a fome
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Card 1 - Produção */}
                        <div className="group relative">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
                            <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl border border-green-500/10 p-8 shadow-xl shadow-green-500/5 h-full hover:scale-105 transition-transform duration-300">
                                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/25">
                                    <FaChartLine className="text-white text-2xl" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Mais Produção, Mais Renda</h3>
                                <p className="text-gray-600 text-center leading-relaxed">
                                    Agricultores saberão o que plantar, quando plantar e como cuidar → menos perdas, mais rendimento
                                </p>
                                <div className="mt-6 flex justify-center">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/10 rounded-full">
                                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                        <span className="text-sm font-medium text-green-700">+40% produtividade</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Card 2 - Inclusão Digital */}
                        <div className="group relative">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
                            <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl border border-blue-500/10 p-8 shadow-xl shadow-blue-500/5 h-full hover:scale-105 transition-transform duration-300">
                                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/25">
                                    <FaMobile className="text-white text-2xl" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Inclusão Digital Rural</h3>
                                <p className="text-gray-600 text-center leading-relaxed">
                                    Acesso por telemóveis simples (USSD), levando tecnologia até zonas sem internet
                                </p>
                                <div className="mt-6 flex justify-center">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 rounded-full">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                        <span className="text-sm font-medium text-blue-700">100% acessível</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Card 3 - Educação */}
                        <div className="group relative">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
                            <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl border border-purple-500/10 p-8 shadow-xl shadow-purple-500/5 h-full hover:scale-105 transition-transform duration-300">
                                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-purple-500/25">
                                    <FaUsers className="text-white text-2xl" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Educação Acessível</h3>
                                <p className="text-gray-600 text-center leading-relaxed">
                                    Mini-aulas curtas e simples, em português e línguas locais (Kimbundu, Umbundu, Kikongo)
                                </p>
                                <div className="mt-6 flex justify-center">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-500/10 rounded-full">
                                        <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                                        <span className="text-sm font-medium text-purple-700">+3 idiomas</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Card 4 - Sustentabilidade */}
                        <div className="group relative">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-green-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
                            <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl border border-emerald-500/10 p-8 shadow-xl shadow-emerald-500/5 h-full hover:scale-105 transition-transform duration-300">
                                <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-500/25">
                                    <FaLeaf className="text-white text-2xl" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Sustentabilidade</h3>
                                <p className="text-gray-600 text-center leading-relaxed">
                                    Monitoramento da conservação da terra e combate à degradação do solo
                                </p>
                                <div className="mt-6 flex justify-center">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 rounded-full">
                                        <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                                        <span className="text-sm font-medium text-emerald-700">Eco-friendly</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Card 5 - Redução da Fome */}
                        <div className="group relative">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-yellow-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
                            <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl border border-orange-500/10 p-8 shadow-xl shadow-orange-500/5 h-full hover:scale-105 transition-transform duration-300">
                                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-orange-500/25">
                                    <FaSeedling className="text-white text-2xl" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Redução da Fome</h3>
                                <p className="text-gray-600 text-center leading-relaxed">
                                    Uso de dados para aumentar segurança alimentar e otimizar produção de alimentos
                                </p>
                                <div className="mt-6 flex justify-center">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-500/10 rounded-full">
                                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                                        <span className="text-sm font-medium text-orange-700">Segurança alimentar</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Card 6 - Planejamento */}
                        <div className="group relative">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
                            <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl border border-indigo-500/10 p-8 shadow-xl shadow-indigo-500/5 h-full hover:scale-105 transition-transform duration-300">
                                <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-indigo-500/25">
                                    <FaGlobe className="text-white text-2xl" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Planejamento Estratégico</h3>
                                <p className="text-gray-600 text-center leading-relaxed">
                                    ONGs e governo terão dados confiáveis para orientar projetos agrícolas e investimentos
                                </p>
                                <div className="mt-6 flex justify-center">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-500/10 rounded-full">
                                        <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                                        <span className="text-sm font-medium text-indigo-700">Dados em tempo real</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Stats Section */}
                    <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { number: "500K+", label: "Agricultores Impactados" },
                            { number: "18", label: "Províncias Atendidas" },
                            { number: "85%", label: "Aumento de Produtividade" },
                            { number: "24/7", label: "Suporte Contínuo" }
                        ].map((stat, index) => (
                            <div key={index} className="group">
                                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-600 to-amber-700 bg-clip-text text-transparent mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-gray-600 font-medium text-sm uppercase tracking-wide">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Partners */}
            <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
                <div className="container mx-auto px-4 sm:px-8">
                    <div className="text-center mb-20">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                            <FaHandshake className="text-blue-600 text-sm" />
                            <span className="text-sm font-medium text-blue-700">Parcerias Estratégicas</span>
                        </div>
                        <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-900 to-blue-700 bg-clip-text text-transparent mb-6">
                            Parceiros e Colaboradores
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            Unindo forças com as principais instituições para revolucionar a agricultura angolana
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {partners.map((partner, index) => (
                            <div
                                key={index}
                                className="group relative"
                            >
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
                                <div className="relative bg-white/80 backdrop-blur-sm rounded-xl border border-blue-500/10 p-8 shadow-lg shadow-blue-500/5 h-full hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
                                    {/* Partner Logo/Icon Placeholder */}
                                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/25 group-hover:scale-110 transition-transform duration-300">
                                        <FaBuilding className="text-white text-xl" />
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-900 mb-3 text-center group-hover:text-blue-600 transition-colors duration-300">
                                        {partner.name}
                                    </h3>

                                    <p className="text-gray-600 text-center leading-relaxed text-sm">
                                        {partner.description}
                                    </p>

                                    {/* Partner Type Badge */}
                                    <div className="mt-4 flex justify-center">
                                        <div className="inline-flex items-center gap-1 px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20">
                                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                                            <span className="text-xs font-medium text-blue-700 uppercase tracking-wide">
                                                {partner.type || 'Parceiro'}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CTA Partner Section */}
                    <div className="mt-20 text-center">
                        <div className="bg-gradient-to-r from-blue-500/5 to-indigo-500/5 rounded-2xl border border-blue-500/10 p-8 backdrop-blur-sm">
                            <div className="max-w-2xl mx-auto">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    Junte-se à Nossa Rede de Parceiros
                                </h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Faça parte desta revolução agrícola e contribua para o desenvolvimento sustentável de Angola
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl font-semibold shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105">
                                        Tornar-se Parceiro
                                    </button>
                                    <button className="px-6 py-3 bg-white text-gray-700 rounded-xl font-semibold border border-gray-300 hover:border-blue-500/30 hover:shadow-lg transition-all duration-300">
                                        Saber Mais
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Trust Indicators */}
                    <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { number: "15+", label: "Parceiros Ativos" },
                            { number: "8", label: "Províncias Cobertas" },
                            { number: "50K+", label: "Agricultores Beneficiados" },
                            { number: "3", label: "Anos de Colaboração" }
                        ].map((stat, index) => (
                            <div key={index} className="group">
                                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-gray-600 font-medium text-xs uppercase tracking-wider">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Download */}
            <section id="download" className="relative py-20 overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/others/back2.jpg"
                        alt="Agriculture background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-green-900/90 via-blue-900/80 to-emerald-900/90"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 container mx-auto px-4 sm:px-8 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Pronto para Revolucionar sua Agricultura?
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Junte-se aos agricultores que já estão usando tecnologia espacial da NASA
                        para aumentar a produtividade e cuidar da terra.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 max-w-4xl mx-auto">
                        <button className="bg-white/90 backdrop-blur-sm text-green-600 px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center hover:bg-white">
                            <FaApple className="mr-2 text-xl" />
                            Baixar para iOS
                        </button>
                        <button className="bg-white/90 backdrop-blur-sm text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center hover:bg-white">
                            <FaGooglePlay className="mr-2 text-xl" />
                            Baixar para Android
                        </button>
                        <button className="bg-white/90 backdrop-blur-sm text-purple-600 px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center hover:bg-white">
                            <FaDesktop className="mr-2 text-xl" />
                            Baixar para Desktop
                        </button>
                        <button className="bg-white/90 backdrop-blur-sm text-orange-600 px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center hover:bg-white">
                            <FaGamepad className="mr-2 text-xl" />
                            Jogo Desktop
                        </button>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-md mx-auto border border-white/20">
                        <p className="text-white/90 text-lg mb-2">
                            <strong className="text-green-300">Sem internet?</strong> Sem problema!
                        </p>
                        <p className="text-white/80">
                            Envie <strong className="text-blue-300">AGRI</strong> para <strong className="text-blue-300">+244 900 000 000</strong> via SMS
                        </p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-16">
                <div className="container mx-auto px-4 sm:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <div className="flex items-center space-x-3 mb-6">
                                <div className="w-10 h-10 from-green-500 to-blue-600 rounded-lg flex items-center justify-center">
                                    {/* <FaSeedling className="bg-gradient-to-br text-white" /> */}
                                    <img src='/images/others/logo.png'></img>
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
                                <li><a href="/signin" className="hover:text-green-400 transition-colors">Portal Web</a></li>
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