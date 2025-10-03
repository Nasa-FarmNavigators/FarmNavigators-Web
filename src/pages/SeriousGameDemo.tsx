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
      title: "Primeira Semana - Plantio de Milho",
      description: "Você acabou de plantar milho na sua fazenda em Benguela. Os dados de satélite mostram chuva moderada nos próximos dias.",
      nasaData: {
        soilMoisture: 45,
        ndvi: 0.2,
        precipitation: 30,
        temperature: 25
      },
      decisions: [
        {
          id: 'irrigate',
          text: '💧 Irrigar agora para garantir germinação',
          impact: { water: -15, cropGrowth: +10, score: +5 },
          cost: 50
        },
        {
          id: 'wait',
          text: '☁️ Esperar a chuva prevista pelos dados NASA',
          impact: { water: +5, cropGrowth: +5, score: +10 },
          cost: 0
        },
        {
          id: 'fertilize',
          text: '🌱 Aplicar fertilizante orgânico',
          impact: { soilHealth: +10, cropGrowth: +5, score: +8 },
          cost: 30
        }
      ]
    },
    {
      title: "Terceira Semana - Crescimento Vegetativo",
      description: "O milho está crescendo bem. Dados de satélite indicam possível estresse hídrico na região. NDVI mostra vegetação saudável.",
      nasaData: {
        soilMoisture: 25,
        ndvi: 0.6,
        precipitation: 10,
        temperature: 32
      },
      decisions: [
        {
          id: 'emergency_irrigate',
          text: '🚨 Irrigação de emergência (alto consumo)',
          impact: { water: -25, cropGrowth: +15, score: +3 },
          cost: 100
        },
        {
          id: 'mulch',
          text: '🍂 Aplicar mulch para conservar umidade',
          impact: { water: +10, soilHealth: +5, score: +12 },
          cost: 20
        },
        {
          id: 'do_nothing',
          text: '⏳ Monitorar mais alguns dias',
          impact: { cropGrowth: -5, score: -5 },
          cost: 0
        }
      ]
    },
    {
      title: "Sexta Semana - Formação de Espigas",
      description: "Fase crítica! O milho está formando espigas. Previsão de chuva intensa. Como proteger a plantação?",
      nasaData: {
        soilMoisture: 85,
        ndvi: 0.8,
        precipitation: 80,
        temperature: 28
      },
      decisions: [
        {
          id: 'drainage',
          text: '🌊 Criar canais de drenagem',
          impact: { water: -10, soilHealth: +5, score: +15 },
          cost: 80
        },
        {
          id: 'cover',
          text: '☂️ Instalar cobertura temporária',
          impact: { cropGrowth: +10, score: +10 },
          cost: 150
        },
        {
          id: 'harvest_early',
          text: '⚡ Colheita antecipada (menor rendimento)',
          impact: { cropGrowth: -10, score: +5 },
          cost: 0
        }
      ]
    },
    {
      title: "Décima Semana - Colheita",
      description: "Chegou a hora da colheita! Os dados mostram que sua plantação está madura. Qual a melhor estratégia?",
      nasaData: {
        soilMoisture: 40,
        ndvi: 0.9,
        precipitation: 15,
        temperature: 30
      },
      decisions: [
        {
          id: 'harvest_all',
          text: '🚜 Colher tudo de uma vez',
          impact: { cropGrowth: 0, score: +20 },
          cost: 200
        },
        {
          id: 'selective_harvest',
          text: '🎯 Colheita seletiva (melhor qualidade)',
          impact: { cropGrowth: 0, score: +30 },
          cost: 300
        },
        {
          id: 'wait_optimal',
          text: '📊 Esperar dados indicarem momento ótimo',
          impact: { cropGrowth: +5, score: +25 },
          cost: 50
        }
      ]
    }
  ];

  const currentScenarioData = scenarios[currentScenario];

  const handleDecision = (decision: Decision) => {
    setGameState(prev => ({
      ...prev,
      water: Math.max(0, Math.min(100, prev.water + (decision.impact.water || 0))),
      soilHealth: Math.max(0, Math.min(100, prev.soilHealth + (decision.impact.soilHealth || 0))),
      cropGrowth: Math.max(0, Math.min(100, prev.cropGrowth + (decision.impact.cropGrowth || 0))),
      score: prev.score + (decision.impact.score || 0),
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
        setShowDecisions(false);
      } else {
        // Fim do jogo
        setIsPlaying(false);
        setShowDecisions(false);
      }
    }, 2000);
  };

  const getFeedback = (decision: Decision): string => {
    const feedbacks: { [key: string]: string } = {
      'irrigate': '💧 Boa decisão! A irrigação garantiu uma germinação uniforme.',
      'wait': '🎯 Excelente! Você economizou água usando os dados da NASA.',
      'fertilize': '🌱 Investimento inteligente! O solo ficou mais saudável.',
      'emergency_irrigate': '🚨 Necessário, mas caro. Próxima vez use mulch preventivo.',
      'mulch': '⭐ Decisão sustentável! Conservou água e melhorou o solo.',
      'do_nothing': '⚠️ Arriscado! Monitoramento é bom, mas ação é melhor.',
      'drainage': '💡 Inteligente! Prevenção de encharcamento protegeu as raízes.',
      'cover': '🛡️ Proteção eficaz, mas custosa. Considere alternativas.',
      'harvest_early': '⏰ Decisão conservadora. Melhor seguro que sem nada.',
      'harvest_all': '🚜 Eficiente! Boa estratégia para grandes volumes.',
      'selective_harvest': '🏆 Perfeito! Qualidade premium gera mais valor.',
      'wait_optimal': '📈 Estratégia baseada em dados. Excelente timing!'
    };
    
    return feedbacks[decision.id] || 'Decisão tomada!';
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
                Aprenda Agricultura com Dados de Satélite 🛰️
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Um jogo educativo que combina diversão, ciência de dados e agricultura sustentável. 
                Tome decisões reais baseadas em dados da NASA!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-blue-900 mb-4 flex items-center">
                  <FaInfoCircle className="mr-2" />
                  O que você vai aprender
                </h3>
                <ul className="space-y-2 text-blue-800">
                  <li>✅ Como interpretar dados de satélite da NASA</li>
                  <li>✅ Decisões de irrigação baseadas em dados reais</li>
                  <li>✅ Práticas sustentáveis de agricultura</li>
                  <li>✅ Impacto ambiental das suas escolhas</li>
                  <li>✅ Gestão de recursos naturais</li>
                </ul>
              </div>

              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-green-900 mb-4 flex items-center">
                  <FaTrophy className="mr-2" />
                  Como funciona o jogo
                </h3>
                <ul className="space-y-2 text-green-800">
                  <li>🌱 Gerencie uma fazenda de milho em Angola</li>
                  <li>📊 Use dados reais de satélite para decidir</li>
                  <li>💰 Equilibre custos, produtividade e sustentabilidade</li>
                  <li>🏆 Ganhe pontos por decisões inteligentes</li>
                  <li>🌍 Aprenda práticas que protegem o meio ambiente</li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-bold text-yellow-900 mb-3 flex items-center">
                <FaBolt className="mr-2" />
                Indicadores que você vai monitorar
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <FaTint className="text-blue-500 text-2xl mx-auto mb-2" />
                  <div className="text-sm font-semibold text-gray-900">Água</div>
                  <div className="text-xs text-gray-600">Umidade do solo</div>
                </div>
                <div className="text-center">
                  <FaLeaf className="text-green-500 text-2xl mx-auto mb-2" />
                  <div className="text-sm font-semibold text-gray-900">Solo</div>
                  <div className="text-xs text-gray-600">Saúde e nutrientes</div>
                </div>
                <div className="text-center">
                  <FaSeedling className="text-green-600 text-2xl mx-auto mb-2" />
                  <div className="text-sm font-semibold text-gray-900">Crescimento</div>
                  <div className="text-xs text-gray-600">Desenvolvimento das culturas</div>
                </div>
                <div className="text-center">
                  <FaTrophy className="text-yellow-500 text-2xl mx-auto mb-2" />
                  <div className="text-sm font-semibold text-gray-900">Pontuação</div>
                  <div className="text-xs text-gray-600">Decisões inteligentes</div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={startGame}
                className="bg-gradient-to-r from-orange-500 to-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                🚀 Começar o Jogo
              </button>
              <p className="text-sm text-gray-500 mt-4">
                Duração: ~10-15 minutos • Público: estudantes, agricultores, curiosos
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
                  <div className="text-xl font-bold text-green-600">{currentScenario + 1}/4</div>
                </div>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                {currentScenarioData?.description}
              </p>

              {/* Dados da NASA */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
                <h3 className="font-bold text-blue-900 mb-3 flex items-center">
                  🛰️ Dados NASA em Tempo Real
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <FaTint className="text-blue-500 text-xl mx-auto mb-1" />
                    <div className="text-lg font-bold text-blue-900">{currentScenarioData?.nasaData.soilMoisture}%</div>
                    <div className="text-xs text-blue-700">Umidade do Solo</div>
                  </div>
                  <div className="text-center">
                    <FaLeaf className="text-green-500 text-xl mx-auto mb-1" />
                    <div className="text-lg font-bold text-green-900">{currentScenarioData?.nasaData.ndvi}</div>
                    <div className="text-xs text-green-700">NDVI (Vegetação)</div>
                  </div>
                  <div className="text-center">
                    <FaCloudRain className="text-blue-600 text-xl mx-auto mb-1" />
                    <div className="text-lg font-bold text-blue-900">{currentScenarioData?.nasaData.precipitation}mm</div>
                    <div className="text-xs text-blue-700">Precipitação</div>
                  </div>
                  <div className="text-center">
                    <FaThermometerHalf className="text-red-500 text-xl mx-auto mb-1" />
                    <div className="text-lg font-bold text-red-900">{currentScenarioData?.nasaData.temperature}°C</div>
                    <div className="text-xs text-red-700">Temperatura</div>
                  </div>
                </div>
              </div>

              {/* Decisões */}
              {showDecisions && currentScenarioData && (
                <div>
                  <h3 className="font-bold text-gray-900 mb-4">🤔 Que decisão você toma?</h3>
                  <div className="space-y-3">
                    {currentScenarioData.decisions.map((decision, index) => (
                      <button
                        key={decision.id}
                        onClick={() => handleDecision(decision)}
                        className="w-full text-left p-4 border-2 border-gray-200 rounded-xl hover:border-green-500 hover:bg-green-50 transition-all duration-300 group"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <div className="font-semibold text-gray-900 group-hover:text-green-700">
                              {decision.text}
                            </div>
                            <div className="text-sm text-gray-600 mt-1">
                              Custo: {decision.cost === 0 ? 'Grátis' : `$${decision.cost}`}
                            </div>
                          </div>
                          <div className="text-right text-sm text-gray-500">
                            {Object.entries(decision.impact).map(([key, value]) => (
                              <div key={key}>
                                {key}: {value > 0 ? '+' : ''}{value}
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

            {/* Progresso */}
            <div className="bg-white rounded-xl shadow-lg p-4">
              <h3 className="font-bold text-gray-900 mb-4">📊 Status da Fazenda</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Reservas de Água</span>
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
                {currentScenario === 0 && "NDVI baixo indica início do crescimento. Garanta água suficiente!"}
                {currentScenario === 1 && "Umidade do solo abaixo de 30% é crítica. Considere irrigação ou mulch."}
                {currentScenario === 2 && "Muita chuva pode causar encharcamento. Drenagem é essencial."}
                {currentScenario === 3 && "NDVI alto indica maturidade. Hora ideal para colheita!"}
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
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto mb-8">
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
                <div className="text-sm text-yellow-800">Sustentabilidade</div>
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