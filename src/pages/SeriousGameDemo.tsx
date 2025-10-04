import React, { useState, useEffect } from 'react';
import { 
  FaArrowLeft, 
  FaPlay, 
  FaPause, 
  FaRedo,
  FaCloudRain,
  FaThermometerHalf,
  FaTint,
  FaSeedling,
  FaExclamationTriangle,
  FaTrophy,
  FaInfoCircle,
  FaBolt,
  FaLeaf,
  FaGamepad
} from 'react-icons/fa';

interface GameState {
  level: number;
  score: number;
  water: number;
  soilHealth: number;
  cropGrowth: number;
  day: number;
  season: string;
  budget: number;
  totalInvestment: number;
  weather: {
    temperature: number;
    rainfall: number;
    humidity: number;
  };
  alerts: string[];
}

interface Decision {
  id: string;
  text: string;
  impact: {
    water?: number;
    soilHealth?: number;
    cropGrowth?: number;
    score?: number;
  };
  cost?: number;
}

const SeriousGameDemo: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>({
    level: 1,
    score: 0,
    water: 75,
    soilHealth: 80,
    cropGrowth: 0,
    day: 1,
    season: 'Plantio',
    budget: 400000,
    totalInvestment: 0,
    weather: {
      temperature: 25,
      rainfall: 30,
      humidity: 65
    },
    alerts: []
  });

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentScenario, setCurrentScenario] = useState(0);
  const [showDecisions, setShowDecisions] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [showTutorial, setShowTutorial] = useState(true);

  // Cenários do jogo baseados em dados reais da agricultura angolana
  const scenarios = [
    {
      title: "Primeira Semana - Preparação do Solo",
      description: "Início da estação agrícola em Huambo. Análise de satélite mostra solo ressecado após a estação seca. Como preparar melhor o terreno?",
      nasaData: {
        soilMoisture: 15,
        ndvi: 0.1,
        precipitation: 5,
        temperature: 28
      },
      decisions: [
        {
          id: 'deep_tillage',
          text: '🚜 Aração profunda para quebrar compactação',
          impact: { soilHealth: +15, water: -5, score: +12 },
          cost: 32000
        },
        {
          id: 'organic_matter',
          text: '🌿 Adicionar matéria orgânica e compostagem',
          impact: { soilHealth: +20, water: +10, score: +18 },
          cost: 24000
        },
        {
          id: 'wait_rain',
          text: '☁️ Aguardar primeira chuva antes de preparar',
          impact: { water: +5, soilHealth: +5, score: +8 },
          cost: 0
        }
      ]
    },
    {
      title: "Segunda Semana - Plantio de Milho",
      description: "Primeira chuva chegou! Dados de satélite mostram umidade adequada para plantio em Benguela. Qual variedade escolher?",
      nasaData: {
        soilMoisture: 45,
        ndvi: 0.2,
        precipitation: 30,
        temperature: 25
      },
      decisions: [
        {
          id: 'drought_resistant',
          text: '🌾 Variedade resistente à seca (ciclo longo)',
          impact: { water: +15, cropGrowth: +8, score: +15 },
          cost: 18000
        },
        {
          id: 'high_yield',
          text: '🚀 Variedade de alto rendimento (mais exigente)',
          impact: { water: -10, cropGrowth: +15, score: +12 },
          cost: 26000
        },
        {
          id: 'local_variety',
          text: '🏡 Sementes locais adaptadas (menor risco)',
          impact: { water: +5, soilHealth: +5, cropGrowth: +5, score: +10 },
          cost: 10000
        }
      ]
    },
    {
      title: "Quarta Semana - Crescimento Inicial",
      description: "Plantas emergiram! NDVI indica crescimento desigual. Dados meteorológicos preveem período seco de 10 dias.",
      nasaData: {
        soilMoisture: 25,
        ndvi: 0.4,
        precipitation: 5,
        temperature: 32
      },
      decisions: [
        {
          id: 'precision_irrigation',
          text: '💧 Irrigação localizada nas áreas mais secas',
          impact: { water: -20, cropGrowth: +12, score: +15 },
          cost: 36000
        },
        {
          id: 'mulching',
          text: '🍂 Cobertura morta para conservar umidade',
          impact: { water: +15, soilHealth: +8, score: +18 },
          cost: 16000
        },
        {
          id: 'foliar_nutrition',
          text: '🌱 Nutrição foliar para fortalecer plantas',
          impact: { cropGrowth: +8, soilHealth: +5, score: +12 },
          cost: 14000
        }
      ]
    },
    {
      title: "Sexta Semana - Controle de Pragas",
      description: "Imagens de satélite detectam possível ataque de pragas no oeste da plantação. Como agir rapidamente?",
      nasaData: {
        soilMoisture: 60,
        ndvi: 0.6,
        precipitation: 40,
        temperature: 29
      },
      decisions: [
        {
          id: 'biological_control',
          text: '🐛 Controle biológico com predadores naturais',
          impact: { cropGrowth: +5, soilHealth: +10, score: +20 },
          cost: 20000
        },
        {
          id: 'targeted_pesticide',
          text: '🎯 Pesticida específico apenas na área afetada',
          impact: { cropGrowth: +10, soilHealth: -5, score: +8 },
          cost: 28000
        },
        {
          id: 'monitoring',
          text: '📊 Intensificar monitoramento e armadilhas',
          impact: { cropGrowth: +3, score: +12 },
          cost: 8000
        }
      ]
    },
    {
      title: "Oitava Semana - Fertilização Complementar",
      description: "Análise NDVI mostra que algumas áreas precisam de nutrientes adicionais. Época crítica para floração do milho.",
      nasaData: {
        soilMoisture: 70,
        ndvi: 0.7,
        precipitation: 45,
        temperature: 27
      },
      decisions: [
        {
          id: 'variable_rate',
          text: '📍 Aplicação de fertilizante por taxa variável',
          impact: { cropGrowth: +15, soilHealth: +5, score: +22 },
          cost: 48000
        },
        {
          id: 'uniform_application',
          text: '🌾 Aplicação uniforme em toda a área',
          impact: { cropGrowth: +10, soilHealth: +3, score: +12 },
          cost: 32000
        },
        {
          id: 'organic_fertilizer',
          text: '🌿 Fertilizante orgânico (liberação lenta)',
          impact: { cropGrowth: +8, soilHealth: +12, score: +18 },
          cost: 26000
        }
      ]
    },
    {
      title: "Décima Semana - Gestão Hídrica Crítica",
      description: "Período de enchimento de grãos! Dados NASA mostram chuva intensa aproximando. Como proteger a qualidade dos grãos?",
      nasaData: {
        soilMoisture: 85,
        ndvi: 0.8,
        precipitation: 80,
        temperature: 26
      },
      decisions: [
        {
          id: 'drainage_system',
          text: '🌊 Sistema de drenagem para evitar encharcamento',
          impact: { water: -15, soilHealth: +8, cropGrowth: +10, score: +25 },
          cost: 60000
        },
        {
          id: 'temporary_cover',
          text: '☂️ Cobertura temporária nas áreas baixas',
          impact: { cropGrowth: +12, score: +15 },
          cost: 80000
        },
        {
          id: 'early_harvest_partial',
          text: '⚡ Colheita antecipada das áreas mais maduras',
          impact: { cropGrowth: +5, score: +18 },
          cost: 40000
        }
      ]
    },
    {
      title: "Décima Segunda Semana - Decisão de Colheita",
      description: "Dados de maturação indicam 85% das plantas prontas. Previsão de chuva em 5 dias. Qual estratégia de colheita?",
      nasaData: {
        soilMoisture: 40,
        ndvi: 0.9,
        precipitation: 15,
        temperature: 30
      },
      decisions: [
        {
          id: 'immediate_harvest',
          text: '🚜 Colheita imediata de toda a área',
          impact: { cropGrowth: +18, score: +25 },
          cost: 100000
        },
        {
          id: 'selective_harvest',
          text: '🎯 Colheita seletiva das áreas mais maduras',
          impact: { cropGrowth: +20, score: +35 },
          cost: 120000
        },
        {
          id: 'wait_perfect_timing',
          text: '📊 Aguardar 95% de maturação (risco climático)',
          impact: { cropGrowth: +25, score: +30 },
          cost: 32000
        }
      ]
    },
    {
      title: "Pós-Colheita - Preparação Próxima Safra",
      description: "Colheita finalizada! Como preparar o solo para a próxima temporada? Dados mostram degradação em algumas áreas.",
      nasaData: {
        soilMoisture: 30,
        ndvi: 0.3,
        precipitation: 10,
        temperature: 31
      },
      decisions: [
        {
          id: 'cover_crops',
          text: '🌱 Plantar culturas de cobertura (fixação N2)',
          impact: { soilHealth: +25, water: +10, score: +30 },
          cost: 28000
        },
        {
          id: 'crop_rotation',
          text: '🔄 Rotação com leguminosas (feijão/soja)',
          impact: { soilHealth: +20, cropGrowth: +5, score: +28 },
          cost: 34000
        },
        {
          id: 'soil_rest',
          text: '💤 Pousio com manejo de invasoras',
          impact: { soilHealth: +10, score: +15 },
          cost: 12000
        }
      ]
    }
  ];

  const currentScenarioData = scenarios[currentScenario];

  const handleDecision = (decision: Decision) => {
    // Verificar se tem orçamento suficiente
    if ((decision.cost || 0) > gameState.budget) {
      setGameState(prev => ({
        ...prev,
        alerts: ['💰 Orçamento insuficiente! Escolha uma opção mais econômica.', ...prev.alerts.slice(0, 2)]
      }));
      return;
    }

    setGameState(prev => ({
      ...prev,
      water: Math.max(0, Math.min(100, prev.water + (decision.impact.water || 0))),
      soilHealth: Math.max(0, Math.min(100, prev.soilHealth + (decision.impact.soilHealth || 0))),
      cropGrowth: Math.max(0, Math.min(100, prev.cropGrowth + (decision.impact.cropGrowth || 0))),
      score: prev.score + (decision.impact.score || 0),
      budget: prev.budget - (decision.cost || 0),
      totalInvestment: prev.totalInvestment + (decision.cost || 0),
      day: prev.day + 7
    }));

    // Adicionar feedback baseado na decisão
    const feedback = getFeedback(decision);
    setGameState(prev => ({
      ...prev,
      alerts: [feedback, ...prev.alerts.slice(0, 2)]
    }));

    // Avançar para o próximo cenário
    setTimeout(() => {
      if (currentScenario < scenarios.length - 1) {
        setCurrentScenario(prev => prev + 1);
        setShowDecisions(true); // Garantir que as decisões apareçam
      } else {
        // Fim do jogo
        setIsPlaying(false);
        setShowDecisions(false);
      }
    }, 2000);
  };

  const getFeedback = (decision: Decision): string => {
    const feedbacks: { [key: string]: string } = {
      // Semana 1 - Preparação do solo
      'deep_tillage': '🚜 Boa preparação! Solo descompactado facilita desenvolvimento radicular.',
      'organic_matter': '⭐ Excelente! Matéria orgânica melhora retenção de água e fertilidade.',
      'wait_rain': '⏳ Estratégia conservadora, mas pode atrasar o plantio.',
      
      // Semana 2 - Plantio
      'drought_resistant': '🌾 Escolha inteligente! Variedade adaptada ao clima angolano.',
      'high_yield': '🚀 Alto potencial, mas precisa de manejo cuidadoso.',
      'local_variety': '🏡 Seguro e sustentável! Variedades locais são mais resilientes.',
      
      // Semana 4 - Crescimento inicial
      'precision_irrigation': '💧 Tecnologia avançada! Uso eficiente da água.',
      'mulching': '⭐ Decisão sustentável! Economiza água e enriquece o solo.',
      'foliar_nutrition': '🌱 Boa estratégia! Nutrição rápida em período crítico.',
      
      // Semana 6 - Controle de pragas
      'biological_control': '🏆 Perfeito! Controle sustentável protege o ecossistema.',
      'targeted_pesticide': '🎯 Eficaz, mas use com moderação para preservar benefícios.',
      'monitoring': '📊 Prevenção inteligente! Monitoramento evita grandes perdas.',
      
      // Semana 8 - Fertilização
      'variable_rate': '📍 Tecnologia de precisão! Máxima eficiência dos nutrientes.',
      'uniform_application': '🌾 Estratégia tradicional, mas funcional.',
      'organic_fertilizer': '🌿 Sustentável! Liberação gradual é melhor para o solo.',
      
      // Semana 10 - Gestão hídrica
      'drainage_system': '💡 Investimento certeiro! Previne perdas por encharcamento.',
      'temporary_cover': '☂️ Proteção eficaz, mas considere custo-benefício.',
      'early_harvest_partial': '⚡ Decisão estratégica! Reduz riscos climáticos.',
      
      // Semana 12 - Colheita
      'immediate_harvest': '🚜 Eficiente! Evitou riscos climáticos.',
      'selective_harvest': '🏆 Excelente! Qualidade premium vale o investimento extra.',
      'wait_perfect_timing': '🎲 Arriscado, mas pode render mais se o clima colaborar.',
      
      // Pós-colheita
      'cover_crops': '⭐ Sustentabilidade máxima! Solo agradece para próxima safra.',
      'crop_rotation': '🔄 Manejo inteligente! Quebra ciclo de pragas e doenças.',
      'soil_rest': '💤 Estratégia conservadora, mas solo recupera naturalmente.'
    };
    
    return feedbacks[decision.id] || 'Decisão tomada! Continue aprendendo com os dados da NASA.';
  };

  const getProgressColor = (value: number) => {
    if (value >= 70) return 'bg-green-500';
    if (value >= 40) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const startGame = () => {
    setGameStarted(true);
    setIsPlaying(true);
    setShowTutorial(false);
    setTimeout(() => setShowDecisions(true), 1000);
  };

  const resetGame = () => {
    setGameState({
      level: 1,
      score: 0,
      water: 75,
      soilHealth: 80,
      cropGrowth: 0,
      day: 1,
      season: 'Plantio',
      budget: 400000,
      totalInvestment: 0,
      weather: {
        temperature: 25,
        rainfall: 30,
        humidity: 65
      },
      alerts: []
    });
    setCurrentScenario(0);
    setIsPlaying(false);
    setShowDecisions(false);
    setGameStarted(false);
    setShowTutorial(true);
  };

  // Garantir que as decisões apareçam quando o cenário muda
  useEffect(() => {
    if (isPlaying && gameStarted) {
      const timer = setTimeout(() => {
        setShowDecisions(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [currentScenario, isPlaying, gameStarted]);

  if (showTutorial) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-green-50 p-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center justify-between mb-8">
              <button
                onClick={() => window.history.back()}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <FaArrowLeft className="text-gray-600" />
              </button>
              <h1 className="text-3xl font-bold text-gray-900">Farm Navigators - Serious Game 🎮</h1>
              <div className="w-10"></div>
            </div>

            <div className="text-center mb-8">
              <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaGamepad className="text-white text-4xl" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                🌾 Simulador de Agricultura Inteligente
              </h2>
              <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                Tome decisões baseadas em dados reais da NASA para gerir sua fazenda virtual 
                em Angola. Aprenda sobre agricultura sustentável enquanto se diverte!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-blue-50 rounded-xl p-4 text-center">
                <FaSeedling className="text-blue-600 text-2xl mx-auto mb-2" />
                <h3 className="font-bold text-blue-900">8 Cenários</h3>
                <p className="text-sm text-blue-700">Do plantio à colheita</p>
              </div>
              <div className="bg-green-50 rounded-xl p-4 text-center">
                <FaLeaf className="text-green-600 text-2xl mx-auto mb-2" />
                <h3 className="font-bold text-green-900">Dados NASA</h3>
                <p className="text-sm text-green-700">Satélite & meteorologia</p>
              </div>
              <div className="bg-yellow-50 rounded-xl p-4 text-center">
                <FaTrophy className="text-yellow-600 text-2xl mx-auto mb-2" />
                <h3 className="font-bold text-yellow-900">Desafios Reais</h3>
                <p className="text-sm text-yellow-700">Situações da agricultura angolana</p>
              </div>
              <div className="bg-purple-50 rounded-xl p-4 text-center">
                <FaBolt className="text-purple-600 text-2xl mx-auto mb-2" />
                <h3 className="font-bold text-purple-900">Orçamento Real</h3>
                <p className="text-sm text-purple-700">Gestão em Kwanzas</p>
              </div>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-8">
              <h3 className="font-bold text-orange-900 mb-3 flex items-center">
                <FaInfoCircle className="mr-2" />
                Como Jogar
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-orange-800">
                <div>
                  <strong>1. Analise os dados:</strong> Use informações de satélite (NDVI, umidade do solo)
                </div>
                <div>
                  <strong>2. Tome decisões:</strong> Escolha estratégias baseadas nos dados
                </div>
                <div>
                  <strong>3. Gerencie recursos:</strong> Mantenha orçamento e sustentabilidade
                </div>
                <div>
                  <strong>4. Aprenda:</strong> Receba feedback sobre suas escolhas
                </div>
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={startGame}
                className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-12 py-4 rounded-xl text-xl font-bold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                🚀 Começar o Jogo
              </button>
              <p className="text-sm text-gray-500 mt-4">
                Duração: ~15-20 minutos • Público: estudantes, agricultores, curiosos
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-green-50">
      {/* Header com indicadores */}
      <div className="bg-white shadow-sm border-b p-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <button
            onClick={() => window.history.back()}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <FaArrowLeft className="text-gray-600" />
          </button>

          <div className="flex items-center space-x-6">
            {/* Indicadores do jogo */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <FaTint className="text-blue-500 mr-2" />
                <div>
                  <div className="text-xs text-gray-500">Água</div>
                  <div className="w-20 bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full transition-all duration-300 ${getProgressColor(gameState.water)}`}
                      style={{ width: `${gameState.water}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="flex items-center">
                <FaLeaf className="text-green-500 mr-2" />
                <div>
                  <div className="text-xs text-gray-500">Solo</div>
                  <div className="w-20 bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full transition-all duration-300 ${getProgressColor(gameState.soilHealth)}`}
                      style={{ width: `${gameState.soilHealth}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="flex items-center">
                <FaSeedling className="text-green-600 mr-2" />
                <div>
                  <div className="text-xs text-gray-500">Crescimento</div>
                  <div className="w-20 bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full transition-all duration-300 ${getProgressColor(gameState.cropGrowth)}`}
                      style={{ width: `${gameState.cropGrowth}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="flex items-center">
                <FaTrophy className="text-yellow-500 mr-2" />
                <div>
                  <div className="text-xs text-gray-500">Score</div>
                  <div className="text-lg font-bold text-gray-900">{gameState.score}</div>
                </div>
              </div>

              <div className="flex items-center">
                <FaBolt className="text-purple-500 mr-2" />
                <div>
                  <div className="text-xs text-gray-500">Orçamento</div>
                  <div className="text-lg font-bold text-purple-900">{gameState.budget.toLocaleString()} Kz</div>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={resetGame}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <FaRedo className="text-gray-600" />
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Painel principal do jogo */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{currentScenarioData?.title}</h2>
                  <p className="text-gray-600">Dia {gameState.day} • {gameState.season}</p>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-500">Cenário</div>
                  <div className="text-xl font-bold text-green-600">{currentScenario + 1}/{scenarios.length}</div>
                </div>
              </div>

              <p className="text-gray-700 mb-6">{currentScenarioData?.description}</p>

              {/* Dados NASA */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
                <h3 className="font-bold text-blue-900 mb-3 flex items-center">
                  🛰️ Dados NASA em Tempo Real
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div className="flex items-center">
                    <FaTint className="text-blue-600 mr-2" />
                    <div>
                      <div className="font-semibold">Umidade Solo</div>
                      <div>{currentScenarioData?.nasaData.soilMoisture}%</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <FaLeaf className="text-green-600 mr-2" />
                    <div>
                      <div className="font-semibold">NDVI</div>
                      <div>{currentScenarioData?.nasaData.ndvi}</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <FaCloudRain className="text-blue-600 mr-2" />
                    <div>
                      <div className="font-semibold">Precipitação</div>
                      <div>{currentScenarioData?.nasaData.precipitation}mm</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <FaThermometerHalf className="text-red-500 mr-2" />
                    <div>
                      <div className="font-semibold">Temperatura</div>
                      <div>{currentScenarioData?.nasaData.temperature}°C</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decisões */}
              {showDecisions && (
                <div>
                  <h3 className="font-bold text-gray-900 mb-4">🤔 Que decisão você toma?</h3>
                  <div className="space-y-3">
                    {currentScenarioData?.decisions.map((decision, index) => (
                      <button
                        key={decision.id}
                        onClick={() => handleDecision(decision)}
                        disabled={(decision.cost || 0) > gameState.budget}
                        className={`w-full text-left p-4 border-2 rounded-xl transition-all duration-300 group ${
                          (decision.cost || 0) > gameState.budget
                            ? 'border-red-200 bg-red-50 opacity-60 cursor-not-allowed'
                            : 'border-gray-200 hover:border-green-500 hover:bg-green-50'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <div className={`font-semibold ${
                              (decision.cost || 0) > gameState.budget
                                ? 'text-red-700'
                                : 'text-gray-900 group-hover:text-green-700'
                            }`}>
                              {decision.text}
                            </div>
                            <div className={`text-sm mt-1 flex items-center ${
                              (decision.cost || 0) > gameState.budget ? 'text-red-600' : 'text-gray-600'
                            }`}>
                              <span className="mr-2">
                                {decision.cost === 0 ? '💚 Grátis' : `💰 ${decision.cost?.toLocaleString()} Kz`}
                              </span>
                              {(decision.cost || 0) > gameState.budget && (
                                <span className="text-xs bg-red-200 px-2 py-1 rounded-full">
                                  Orçamento insuficiente
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="text-right text-sm text-gray-500">
                            {Object.entries(decision.impact).map(([key, value]) => (
                              <div key={key} className="flex items-center justify-end">
                                <span className="mr-1">
                                  {key === 'water' && '💧'}
                                  {key === 'soilHealth' && '🌱'}
                                  {key === 'cropGrowth' && '📈'}
                                  {key === 'score' && '⭐'}
                                </span>
                                <span className={value > 0 ? 'text-green-600' : 'text-red-600'}>
                                  {value > 0 ? '+' : ''}{value}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Painel lateral */}
          <div className="space-y-6">
            {/* Alertas */}
            {gameState.alerts.length > 0 && (
              <div className="bg-white rounded-xl shadow-lg p-4">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center">
                  <FaExclamationTriangle className="text-yellow-500 mr-2" />
                  Feedback
                </h3>
                <div className="space-y-2">
                  {gameState.alerts.map((alert, index) => (
                    <div 
                      key={index}
                      className={`p-3 rounded-lg text-sm ${
                        index === 0 ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {alert}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Status da fazenda */}
            <div className="bg-white rounded-xl shadow-lg p-4">
              <h3 className="font-bold text-gray-900 mb-4">📊 Status da Fazenda</h3>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Reserva de Água</span>
                    <span>{gameState.water}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full transition-all duration-500 ${getProgressColor(gameState.water)}`}
                      style={{ width: `${gameState.water}%` }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Saúde do Solo</span>
                    <span>{gameState.soilHealth}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full transition-all duration-500 ${getProgressColor(gameState.soilHealth)}`}
                      style={{ width: `${gameState.soilHealth}%` }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Crescimento das Culturas</span>
                    <span>{gameState.cropGrowth}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full transition-all duration-500 ${getProgressColor(gameState.cropGrowth)}`}
                      style={{ width: `${gameState.cropGrowth}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Dicas */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-4">
              <h3 className="font-bold text-green-900 mb-3 flex items-center">
                💡 Dica NASA
              </h3>
              <p className="text-sm text-green-800">
                {currentScenario === 0 && "Solo com baixa umidade precisa de preparação cuidadosa. Matéria orgânica melhora retenção de água."}
                {currentScenario === 1 && "NDVI baixo indica início do crescimento. Escolha de variedade é crucial para o clima local."}
                {currentScenario === 2 && "Umidade do solo abaixo de 30% é crítica. Mulch reduz evaporação em até 50%."}
                {currentScenario === 3 && "Imagens de satélite podem detectar pragas antes dos sintomas visuais. Ação precoce é mais eficaz."}
                {currentScenario === 4 && "NDVI variável indica necessidade de fertilização por zonas. Precisão economiza recursos."}
                {currentScenario === 5 && "Encharcamento durante enchimento de grãos pode causar fungos. Drenagem é investimento essencial."}
                {currentScenario === 6 && "NDVI alto (>0.85) indica maturação. Timing da colheita afeta qualidade e rendimento."}
                {currentScenario === 7 && "Culturas de cobertura capturam 30-50% mais carbono no solo. Benefício a longo prazo."}
              </p>
            </div>
          </div>
        </div>

        {/* Fim do jogo */}
        {!isPlaying && gameStarted && (
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaTrophy className="text-white text-3xl" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              🎉 Parabéns, Agricultor(a)!
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              Você completou a temporada de plantio usando dados da NASA!
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
              <div className="bg-blue-50 rounded-xl p-4">
                <div className="text-2xl font-bold text-blue-600">{gameState.score}</div>
                <div className="text-sm text-blue-800">Pontuação Final</div>
              </div>
              <div className="bg-green-50 rounded-xl p-4">
                <div className="text-2xl font-bold text-green-600">{gameState.cropGrowth}%</div>
                <div className="text-sm text-green-800">Crescimento das Culturas</div>
              </div>
              <div className="bg-yellow-50 rounded-xl p-4">
                <div className="text-2xl font-bold text-yellow-600">{Math.round(gameState.soilHealth)}%</div>
                <div className="text-sm text-yellow-800">Saúde do Solo</div>
              </div>
              <div className="bg-purple-50 rounded-xl p-4">
                <div className="text-2xl font-bold text-purple-600">{gameState.budget.toLocaleString()} Kz</div>
                <div className="text-sm text-purple-800">Orçamento Restante</div>
              </div>
            </div>

            {/* Análise de Performance */}
            <div className="bg-gray-50 rounded-xl p-6 max-w-3xl mx-auto mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">📊 Análise de Performance</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-semibold">Total Investido:</span>
                  <span className="ml-2 text-green-600">{gameState.totalInvestment.toLocaleString()} Kz</span>
                </div>
                <div>
                  <span className="font-semibold">Eficiência do Orçamento:</span>
                  <span className="ml-2 text-blue-600">
                    {gameState.totalInvestment > 0 ? (gameState.score / gameState.totalInvestment * 1000).toFixed(1) : 0} pts/1000Kz
                  </span>
                </div>
                <div>
                  <span className="font-semibold">Sustentabilidade:</span>
                  <span className="ml-2">
                    {gameState.soilHealth >= 80 ? '🏆 Excelente' : 
                     gameState.soilHealth >= 60 ? '✅ Boa' : 
                     gameState.soilHealth >= 40 ? '⚠️ Regular' : '❌ Precisa melhorar'}
                  </span>
                </div>
                <div>
                  <span className="font-semibold">Gestão Hídrica:</span>
                  <span className="ml-2">
                    {gameState.water >= 70 ? '🏆 Excelente' : 
                     gameState.water >= 50 ? '✅ Boa' : 
                     gameState.water >= 30 ? '⚠️ Regular' : '❌ Crítica'}
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <button
                onClick={resetGame}
                className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 mr-4"
              >
                🔄 Jogar Novamente
              </button>
              <button
                onClick={() => window.location.href = '/'}
                className="bg-gray-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-gray-700 transition-colors"
              >
                🏠 Voltar ao Início
              </button>
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-gray-600">
                🌱 Continue aprendendo: baixe o app Farm Navigators para dados reais da NASA!
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SeriousGameDemo;