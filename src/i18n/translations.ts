// Sistema de tradução para Farm Navigators
// Suporte para: Português, Inglês, e 3 línguas nacionais angolanas

export type Language = 'pt' | 'en' | 'umb' | 'kmb' | 'lun';

export interface Translations {
  // Header & Navigation
  companyName: string;
  navigation: {
    home: string;
    features: string;
    about: string;
    contact: string;
    demos: string;
    download: string;
  };
  
  // Hero Section
  hero: {
    title: string;
    subtitle: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
    watchDemo: string;
  };
  
  // Features Section
  features: {
    title: string;
    subtitle: string;
    farmTinder: {
      title: string;
      description: string;
      benefits: string[];
    };
    weather: {
      title: string;
      description: string;
      benefits: string[];
    };
    agriflix: {
      title: string;
      description: string;
      benefits: string[];
    };
    alerts: {
      title: string;
      description: string;
      benefits: string[];
    };
    community: {
      title: string;
      description: string;
      benefits: string[];
    };
    marketplace: {
      title: string;
      description: string;
      benefits: string[];
    };
  };
  
  // Video Demo Section
  videoDemo: {
    title: string;
    subtitle: string;
    thumbnailTitle: string;
    thumbnailDescription: string;
    duration: string;
    quality: string;
    source: string;
    stats: {
      duration: string;
      dataSource: string;
      quality: string;
    };
  };
  
  // Interactive Demos Section
  interactiveDemos: {
    title: string;
    subtitle: string;
    farmTinder: {
      title: string;
      description: string;
      features: string[];
      button: string;
    };
    agriflix: {
      title: string;
      description: string;
      features: string[];
      button: string;
    };
    seriousGame: {
      title: string;
      description: string;
      features: string[];
      button: string;
    };
  };
  
  // Download Section
  download: {
    title: string;
    subtitle: string;
    description: string;
    platforms: {
      ios: string;
      android: string;
      desktop: string;
      game: string;
    };
    stats: {
      downloads: string;
      rating: string;
      countries: string;
    };
  };
  
  // How It Works Section
  howItWorks: {
    title: string;
    subtitle: string;
    mobile: {
      title: string;
      subtitle: string;
      steps: {
        title: string;
        description: string;
      }[];
    };
    web: {
      title: string;
      subtitle: string;
      steps: {
        title: string;
        description: string;
      }[];
    };
    cta: string;
  };
  
  // Impact Section
  impact: {
    badge: string;
    title: string;
    subtitle: string;
    cards: {
      production: {
        title: string;
        description: string;
        metric: string;
      };
      inclusion: {
        title: string;
        description: string;
        metric: string;
      };
      education: {
        title: string;
        description: string;
        metric: string;
      };
      sustainability: {
        title: string;
        description: string;
        metric: string;
      };
      hunger: {
        title: string;
        description: string;
        metric: string;
      };
      empowerment: {
        title: string;
        description: string;
        metric: string;
      };
    };
    stats: {
      farmers: {
        value: string;
        label: string;
      };
      villages: {
        value: string;
        label: string;
      };
      productivity: {
        value: string;
        label: string;
      };
      sustainability: {
        value: string;
        label: string;
      };
    };
  };
  
  // AgriClix Complete Interface
  agriFlixFull: {
    // Header and Navigation
    header: {
      title: string;
      subtitle: string;
      searchPlaceholder: string;
    };
    
    // Filters and Categories
    filters: {
      title: string;
      clearAll: string;
      category: string;
      language: string;
      difficulty: string;
      activeFilters: string;
    };
    
    // Categories
    categories: {
      all: string;
      soilPrep: string;
      irrigation: string;
      pestControl: string;
      harvesting: string;
      sustainability: string;
      technology: string;
      composting: string;
    };
    
    // Difficulty Levels
    difficulty: {
      basic: string;
      intermediate: string;
      advanced: string;
    };
    
    // Languages
    languages: {
      all: string;
      portuguese: string;
      umbundu: string;
      kimbundu: string;
      lunda: string;
    };
    
    // Video Player Interface
    player: {
      play: string;
      pause: string;
      like: string;
      share: string;
      download: string;
      transcript: string;
      backToList: string;
      videoInfo: string;
      instructor: string;
      duration: string;
      views: string;
      likes: string;
      category: string;
      tags: string;
    };
    
    // Videos Content
    videos: {
      soilPrep: {
        title: string;
        description: string;
      };
      irrigation: {
        title: string;
        description: string;
      };
      pestControl: {
        title: string;
        description: string;
      };
      cropRotation: {
        title: string;
        description: string;
      };
      waterConservation: {
        title: string;
        description: string;
      };
      nasaData: {
        title: string;
        description: string;
      };
      composting: {
        title: string;
        description: string;
      };
      organicFarming: {
        title: string;
        description: string;
      };
    };
    
    // UI Messages
    messages: {
      noResults: string;
      noResultsDesc: string;
      loading: string;
      error: string;
      tryFilters: string;
    };
    
    // Common elements
    common: {
      views: string;
      likes: string;
      share: string;
      download: string;
      watch: string;
      instructor: string;
      back: string;
    };
  };
  
  // Partners Section
  partners: {
    title: string;
    subtitle: string;
    government: string;
    technology: string;
    international: string;
    academic: string;
    items: {
      name: string;
      description: string;
      type: string;
    }[];
    cta: {
      title: string;
      description: string;
      primaryButton: string;
      secondaryButton: string;
    };
    stats: {
      activePartners: string;
      provinces: string;
      beneficiaries: string;
      yearsActive: string;
    };
  };
  
  // Serious Game Complete Interface
  seriousGameFull: {
    // Tutorial/Welcome Screen
    welcome: {
      title: string;
      subtitle: string;
      description: string;
      features: {
        nasaData: {
          title: string;
          description: string;
        };
        realScenarios: {
          title: string;
          description: string;
        };
        scientificFeedback: {
          title: string;
          description: string;
        };
        budgetManagement: {
          title: string;
          description: string;
        };
      };
      howToPlay: {
        title: string;
        steps: {
          analyze: string;
          decide: string;
          manage: string;
          learn: string;
        };
      };
      startButton: string;
      duration: string;
    };
    
    // Game UI
    ui: {
      indicators: {
        water: string;
        soil: string;
        growth: string;
        score: string;
        budget: string;
      };
      status: {
        title: string;
        waterReserve: string;
        soilHealth: string;
        cropGrowth: string;
        day: string;
        season: string;
        budgetRemaining: string;
      };
      feedback: {
        title: string;
      };
      decisions: {
        title: string;
        free: string;
        insufficientBudget: string;
      };
      nasaPanel: {
        title: string;
        soilMoisture: string;
        ndvi: string;
        precipitation: string;
        temperature: string;
      };
      weather: {
        temperature: string;
        rainfall: string;
        humidity: string;
      };
    };
    
    // Scenarios
    scenarios: {
      week1: {
        title: string;
        description: string;
        decisions: {
          deepTillage: string;
          organicMatter: string;
          waitRain: string;
        };
      };
      week2: {
        title: string;
        description: string;
        decisions: {
          droughtResistant: string;
          highYield: string;
          localVariety: string;
        };
      };
      week4: {
        title: string;
        description: string;
        decisions: {
          precisionIrrigation: string;
          mulching: string;
          foliarNutrition: string;
        };
      };
      week6: {
        title: string;
        description: string;
        decisions: {
          biologicalControl: string;
          targetedPesticide: string;
          monitoring: string;
        };
      };
      week8: {
        title: string;
        description: string;
        decisions: {
          variableRate: string;
          uniformApplication: string;
          organicFertilizer: string;
        };
      };
      week10: {
        title: string;
        description: string;
        decisions: {
          drainageSystem: string;
          temporaryCover: string;
          earlyHarvestPartial: string;
        };
      };
      week12: {
        title: string;
        description: string;
        decisions: {
          immediateHarvest: string;
          selectiveHarvest: string;
          waitPerfectTiming: string;
        };
      };
      postHarvest: {
        title: string;
        description: string;
        decisions: {
          coverCrops: string;
          cropRotation: string;
          soilAnalysis: string;
        };
      };
    };
    
    // Feedback messages
    feedback: {
      deepTillage: string;
      organicMatter: string;
      waitRain: string;
      droughtResistant: string;
      highYield: string;
      localVariety: string;
      precisionIrrigation: string;
      mulching: string;
      foliarNutrition: string;
      biologicalControl: string;
      targetedPesticide: string;
      monitoring: string;
      variableRate: string;
      uniformApplication: string;
      organicFertilizer: string;
      drainageSystem: string;
      temporaryCover: string;
      earlyHarvestPartial: string;
      immediateHarvest: string;
      selectiveHarvest: string;
      waitPerfectTiming: string;
      coverCrops: string;
      cropRotation: string;
      soilAnalysis: string;
    };
    
    // End game
    endGame: {
      title: string;
      subtitle: string;
      results: {
        finalScore: string;
        totalInvested: string;
        budgetEfficiency: string;
        sustainability: string;
        waterManagement: string;
        excellent: string;
        good: string;
        regular: string;
        needsImprovement: string;
        critical: string;
      };
      performance: {
        title: string;
      };
      actions: {
        playAgain: string;
        backHome: string;
        downloadApp: string;
      };
    };
    
    // Common terms
    common: {
      kz: string;
      points: string;
      percentage: string;
      day: string;
      week: string;
      level: string;
      season: string;
      seasons: {
        planting: string;
        growing: string;
        harvest: string;
      };
    };
  };

  // CTA Download Section
  ctaDownload: {
    title: string;
    subtitle: string;
    buttons: {
      ios: string;
      android: string;
      desktop: string;
      game: string;
    };
    offline: {
      title: string;
      description: string;
    };
  };
  
  // Footer
  footer: {
    description: string;
    sections: {
      product: {
        title: string;
        links: string[];
      };
      company: {
        title: string;
        links: string[];
      };
      support: {
        title: string;
        links: string[];
      };
      social: {
        title: string;
      };
    };
    contact: {
      phone: string;
      email: string;
      address: string;
    };
    copyright: string;
    tagline?: string;
  };
  
  // Language Selector
  language: {
    select: string;
    current: string;
  };
  
  // Common
  common: {
    learnMore: string;
    getStarted: string;
    comingSoon: string;
    loading: string;
    error: string;
    tryAgain: string;
    close: string;
    play: string;
    pause: string;
  };
  
  // Statistics
  stats: {
    productivity: {
      value: string;
      label: string;
    };
    languages: {
      value: string;
      label: string;
    };
    coverage: {
      value: string;
      label: string;
    };
    realtime: {
      value: string;
      label: string;
    };
  };
  
  // FarmTinder Full Application
  farmTinderFull: {
    // Header and Navigation
    header: {
      title: string;
      subtitle: string;
      progress: string; // "X de Y"
    };
    
    // Main Card Interface
    card: {
      nasaConfidence: string;
      scientificName: string;
      idealConditions: string;
      bestPlantingSeason: string;
      yieldUnit: string; // "kg/hectare"
      profitUnit: string; // "lucro/hectare"
      advantages: string;
      considerations: string;
    };
    
    // Climate Information
    climate: {
      rainfall: string;
      temperature: string;
      humidity: string;
    };
    
    // Action Buttons
    actions: {
      reject: string;
      accept: string;
      rejectButton: string; // "Não Plantar"
      acceptButton: string; // "Quero Plantar!"
    };
    
    // Results Page
    results: {
      title: string;
      subtitle: string;
      selectedCrops: string;
      noSelection: {
        title: string;
        subtitle: string;
      };
      nextSteps: {
        title: string;
        items: string[];
      };
      buttons: {
        tryAgain: string;
        backHome: string;
      };
    };
    
    // Crop Data
    crops: {
      corn: {
        name: string;
        description: string;
        pros: string[];
        considerations: string[];
        plantingSeason: string;
      };
      cassava: {
        name: string;
        description: string;
        pros: string[];
        considerations: string[];
        plantingSeason: string;
      };
      beans: {
        name: string;
        description: string;
        pros: string[];
        considerations: string[];
        plantingSeason: string;
      };
      sweetPotato: {
        name: string;
        description: string;
        pros: string[];
        considerations: string[];
        plantingSeason: string;
      };
      tomato: {
        name: string;
        description: string;
        pros: string[];
        considerations: string[];
        plantingSeason: string;
      };
    };
    
    // Demo Information
    demo: {
      info: string;
    };
  };
  
  // Login Page
  login: {
    // Header
    header: {
      title: string;
      subtitle: string;
      backButton: string;
      changeBackground: string;
    };
    
    // Form Fields
    form: {
      emailLabel: string;
      emailPlaceholder: string;
      passwordLabel: string;
      passwordPlaceholder: string;
      loginButton: string;
      loginButtonLoading: string;
    };
    
    // Quick Login Demo
    quickLogin: {
      title: string;
      adminButton: string;
      ngoButton: string;
      credentials: {
        admin: string;
        ngo: string;
      };
    };
    
    // Error Messages
    errors: {
      invalidCredentials: string;
      loginError: string;
      required: string;
    };
    
    // Footer
    footer: {
      copyright: string;
    };
  };
  
  // Admin Platform (Internal - Portuguese/English only)
  admin: {
    // Common Elements
    common: {
      dashboard: string;
      users: string;
      content: string;
      reports: string;
      settings: string;
      profile: string;
      search: string;
      filter: string;
      export: string;
      save: string;
      cancel: string;
      delete: string;
      edit: string;
      view: string;
      approve: string;
      reject: string;
      loading: string;
      error: string;
      success: string;
      warning: string;
    };
    
    // Navigation/Sidebar
  navigation: {
    main: string;
    others: string;
    dashboard: string;
    userManagement: string;
    contentModeration: string;
    systemReports: string;
    systemSettings: string;
    profile: string;
  };    // Dashboard
    dashboard: {
      title: string;
      subtitle: string;
      timeRanges: {
        "24h": string;
        "7d": string;
        "30d": string;
        "90d": string;
      };
      stats: {
        totalUsers: string;
        activeUsers: string;
        totalNGOs: string;
        totalContent: string;
        systemHealth: string;
        apiCalls: string;
      };
      charts: {
        userGrowth: string;
        contentStats: string;
        systemAlerts: string;
        recentActivity: string;
      };
      alerts: {
        high_latency: string;
        backup_completed: string;
        new_ngo: string;
        storage_warning: string;
      };
      activity: {
        video_upload: string;
        new_registration: string;
        report_generated: string;
        content_approved: string;
      };
    };
    
    // User Management
    userManagement: {
      title: string;
      subtitle: string;
      tabs: {
        farmers: string;
        ngos: string;
        admins: string;
      };
      actions: {
        addUser: string;
        exportData: string;
        bulkActions: string;
      };
      userDetails: {
        name: string;
        email: string;
        role: string;
        status: string;
        registrationDate: string;
        lastLogin: string;
        location: string;
      };
      status: {
        active: string;
        inactive: string;
        suspended: string;
      };
    };
    
    // Content Moderation
    contentModeration: {
      title: string;
      subtitle: string;
      tabs: {
        pending: string;
        approved: string;
        rejected: string;
      };
      contentTypes: {
        video: string;
        article: string;
        comment: string;
      };
      moderationActions: {
        approve: string;
        reject: string;
        needsReview: string;
      };
    };
  };
  
  // NGO Platform (Internal - Portuguese/English only)
  ngo: {
    // Common Elements
    common: {
      dashboard: string;
      maps: string;
      content: string;
      reports: string;
      statistics: string;
      profile: string;
      farmers: string;
      videos: string;
      impact: string;
      reach: string;
      coverage: string;
    };
    
    // Navigation/Sidebar
    navigation: {
      dashboard: string;
      regionalMaps: string;
      educationalContent: string;
      impactReports: string;
      regionalStats: string;
      profile: string;
    };
    
    // Dashboard
    dashboard: {
      title: string;
      subtitle: string;
      stats: {
        farmersReached: string;
        agriflixVideos: string;
        totalViews: string;
        provincesCovered: string;
        monthlyGrowth: string;
        newThisMonth: string;
        vsLastMonth: string;
        nationalCoverage: string;
      };
      sections: {
        regionalImpact: string;
        mostWatchedContent: string;
        quickActions: string;
      };
      categories: {
        water: string;
        planting: string;
        protection: string;
        soil: string;
      };
      actions: {
        uploadVideo: string;
        createReport: string;
        viewMaps: string;
        manageContent: string;
      };
    };
    
    // Regional Maps
    regionalMaps: {
      title: string;
      subtitle: string;
      filters: {
        province: string;
        timeRange: string;
        dataType: string;
      };
      dataTypes: {
        farmerDensity: string;
        contentEngagement: string;
        cropDistribution: string;
        weatherPatterns: string;
      };
    };
    
    // Educational Content
    educationalContent: {
      title: string;
      subtitle: string;
      tabs: {
        myVideos: string;
        published: string;
        drafts: string;
        analytics: string;
      };
      videoStats: {
        views: string;
        likes: string;
        shares: string;
        duration: string;
        uploadDate: string;
      };
    };
    
    // Impact Reports
    impactReports: {
      title: string;
      subtitle: string;
      reportTypes: {
        monthly: string;
        quarterly: string;
        annual: string;
        custom: string;
      };
      metrics: {
        reach: string;
        engagement: string;
        outcomes: string;
        feedback: string;
      };
    };
  };
}

// Tradução em Português (PT) - Padrão
export const pt: Translations = {
  companyName: "Farm Navigators",
  navigation: {
    home: "Início",
    features: "Recursos",
    about: "Sobre",
    contact: "Contato",
    demos: "Demos",
    download: "Download"
  },
  hero: {
    title: "Revolucione Sua Agricultura com Dados da NASA",
    subtitle: "🚀 Transformando a agricultura angolana com tecnologia espacial",
    description: "Plataforma completa que combina dados satelitais da NASA com inteligência artificial para otimizar sua produção agrícola. Farm Tinder, previsões climáticas, vídeos educativos e muito mais.",
    ctaPrimary: "Começar Agora",
    ctaSecondary: "Ver Demonstração",
    watchDemo: "▶️ Assistir Demo"
  },
  features: {
    title: "Recursos Poderosos para Agricultura Inteligente",
    subtitle: "Tudo que você precisa para otimizar sua produção agrícola",
    farmTinder: {
      title: "Farm Tinder",
      description: "Recomendações personalizadas de culturas baseadas em dados NASA, solo e clima da sua região",
      benefits: ["Matching inteligente", "Dados NASA integrados", "Recomendações personalizadas"]
    },
    weather: {
      title: "Previsões Climáticas",
      description: "Dados da NASA em tempo real: chuva, temperatura, umidade do solo e alertas de pragas",
      benefits: ["Previsões precisas", "Alertas automáticos", "Dados em tempo real"]
    },
    agriflix: {
      title: "AgriFlix",
      description: "Biblioteca de vídeos educativos curtos em português e línguas locais angolanas",
      benefits: ["Vídeos práticos", "Múltiplas línguas", "Técnicas locais"]
    },
    alerts: {
      title: "Alertas Inteligentes",
      description: "Sistema de notificações baseado em IA para pragas, doenças e condições climáticas adversas",
      benefits: ["IA avançada", "Prevenção de perdas", "Notificações push"]
    },
    community: {
      title: "Comunidade de Agricultores",
      description: "Conecte-se com outros agricultores, compartilhe experiências e aprenda técnicas sustentáveis",
      benefits: ["Rede social agrícola", "Troca de experiências", "Fórum especializado"]
    },
    marketplace: {
      title: "Marketplace Agrícola",
      description: "Compre e venda produtos agrícolas diretamente na plataforma com preços justos",
      benefits: ["Venda direta", "Preços transparentes", "Logística integrada"]
    }
  },
  videoDemo: {
    title: "Veja o Farm Navigators em Ação",
    subtitle: "Demonstração completa de como a tecnologia NASA pode transformar a agricultura angolana",
    thumbnailTitle: "NASA Applied Sciences",
    thumbnailDescription: "Dados satelitais • Agricultura inteligente • Tecnologia espacial aplicada",
    duration: "8:54",
    quality: "HD 1080p",
    source: "NASA",
    stats: {
      duration: "Duração do vídeo",
      dataSource: "Dados oficiais",
      quality: "Qualidade premium"
    }
  },
  interactiveDemos: {
    title: "Demonstrações Interativas",
    subtitle: "Veja como o Farm Navigators funciona na prática com nossas demonstrações interativas",
    farmTinder: {
      title: "Farm Tinder",
      description: "Deslize para escolher as melhores culturas para sua terra baseado em dados NASA",
      features: ["Recomendações personalizadas", "Dados climáticos da NASA", "Estimativas de produtividade", "Interface tipo Tinder"],
      button: "Testar Farm Tinder →"
    },
    agriflix: {
      title: "AgriFlix",
      description: "Biblioteca de vídeos educativos curtos em português e línguas locais angolanas",
      features: ["Vídeos de 1-4 minutos", "Técnicas agrícolas práticas", "Múltiplos idiomas", "Player interativo"],
      button: "Assistir AgriFlix →"
    },
    seriousGame: {
      title: "Game",
      description: "Jogo educativo que ensina como usar dados de satélite para decisões agrícolas inteligentes",
      features: ["8 cenários realistas", "Orçamento em Kwanzas", "Feedback educativo", "Progressão por níveis"],
      button: "Jogar Agora →"
    }
  },
  download: {
    title: "Baixe o Farm Navigators",
    subtitle: "Disponível para todas as plataformas",
    description: "Acesse toda a funcionalidade do Farm Navigators no seu dispositivo preferido. Aplicativo móvel completo e versão desktop profissional.",
    platforms: {
      ios: "iOS App Store",
      android: "Google Play",
      desktop: "Desktop (Windows/Mac)",
      game: "Game"
    },
    stats: {
      downloads: "10K+ Downloads",
      rating: "4.8★ Avaliação",
      countries: "5 Países"
    }
  },
  seriousGameFull: {
    welcome: {
      title: "🎮 Serious Game: Gestor Agrícola Virtual",
      subtitle: "Simulação Realista da Agricultura Angolana",
      description: "Tome decisões baseadas em dados reais da NASA e aprenda técnicas sustentáveis de agricultura adaptadas ao clima angolano.",
      features: {
        nasaData: {
          title: "Dados Reais da NASA",
          description: "NDVI, umidade do solo, precipitação"
        },
        realScenarios: {
          title: "Cenários Angolanos",
          description: "Situações baseadas em Huambo, Benguela, Uíge"
        },
        scientificFeedback: {
          title: "Feedback Científico",
          description: "Aprenda com cada decisão tomada"
        },
        budgetManagement: {
          title: "Orçamento Real",
          description: "Gestão em Kwanzas"
        }
      },
      howToPlay: {
        title: "Como Jogar",
        steps: {
          analyze: "1. Analise os dados: Use informações de satélite (NDVI, umidade do solo)",
          decide: "2. Tome decisões: Escolha estratégias baseadas nos dados",
          manage: "3. Gerencie recursos: Mantenha orçamento e sustentabilidade",
          learn: "4. Aprenda: Receba feedback sobre suas escolhas"
        }
      },
      startButton: "🚀 Começar o Jogo",
      duration: "Duração: ~15-20 minutos • Público: estudantes, agricultores, curiosos"
    },
    ui: {
      indicators: {
        water: "Água",
        soil: "Solo",
        growth: "Crescimento",
        score: "Pontuação",
        budget: "Orçamento"
      },
      status: {
        title: "📊 Status da Fazenda",
        waterReserve: "Reserva de Água",
        soilHealth: "Saúde do Solo",
        cropGrowth: "Crescimento das Culturas",
        day: "Dia",
        season: "Estação",
        budgetRemaining: "Orçamento Restante"
      },
      feedback: {
        title: "Feedback"
      },
      decisions: {
        title: "Decisões Disponíveis",
        free: "💚 Grátis",
        insufficientBudget: "Orçamento insuficiente"
      },
      nasaPanel: {
        title: "🛰️ Dados NASA",
        soilMoisture: "Umidade do Solo",
        ndvi: "Índice NDVI",
        precipitation: "Precipitação",
        temperature: "Temperatura"
      },
      weather: {
        temperature: "Temperatura",
        rainfall: "Chuva",
        humidity: "Umidade"
      }
    },
    scenarios: {
      week1: {
        title: "Primeira Semana - Preparação do Solo",
        description: "Início da estação agrícola em Huambo. Análise de satélite mostra solo ressecado após a estação seca. Como preparar melhor o terreno?",
        decisions: {
          deepTillage: "🚜 Aração profunda para quebrar compactação",
          organicMatter: "🌿 Adicionar matéria orgânica e compostagem",
          waitRain: "☁️ Aguardar primeira chuva antes de preparar"
        }
      },
      week2: {
        title: "Segunda Semana - Plantio de Milho",
        description: "Primeira chuva chegou! Dados de satélite mostram umidade adequada para plantio em Benguela. Qual variedade escolher?",
        decisions: {
          droughtResistant: "🌾 Variedade resistente à seca (ciclo longo)",
          highYield: "🚀 Variedade de alto rendimento (mais exigente)",
          localVariety: "🏡 Sementes locais adaptadas (menor risco)"
        }
      },
      week4: {
        title: "Quarta Semana - Crescimento Inicial",
        description: "Plantas emergiram! NDVI indica crescimento desigual. Dados meteorológicos preveem período seco de 10 dias.",
        decisions: {
          precisionIrrigation: "💧 Irrigação localizada nas áreas mais secas",
          mulching: "🍂 Cobertura morta para conservar umidade",
          foliarNutrition: "🌱 Nutrição foliar para fortalecer plantas"
        }
      },
      week6: {
        title: "Sexta Semana - Controle de Pragas",
        description: "Imagens de satélite detectam possível ataque de pragas no oeste da plantação. Como agir rapidamente?",
        decisions: {
          biologicalControl: "🐛 Controle biológico com predadores naturais",
          targetedPesticide: "🎯 Pesticida específico apenas na área afetada",
          monitoring: "📊 Intensificar monitoramento e armadilhas"
        }
      },
      week8: {
        title: "Oitava Semana - Fertilização Complementar",
        description: "Análise NDVI mostra que algumas áreas precisam de nutrientes adicionais. Época crítica para floração do milho.",
        decisions: {
          variableRate: "📍 Aplicação de fertilizante por taxa variável",
          uniformApplication: "🌾 Aplicação uniforme em toda área",
          organicFertilizer: "🌿 Fertilizante orgânico de liberação lenta"
        }
      },
      week10: {
        title: "Décima Semana - Gestão Hídrica Avançada",
        description: "Previsão meteorológica indica 3 dias de chuva intensa. NDVI mostra culturas saudáveis, mas risco de encharcamento.",
        decisions: {
          drainageSystem: "🚰 Implementar sistema de drenagem temporário",
          temporaryCover: "☂️ Cobertura temporária em áreas críticas",
          earlyHarvestPartial: "⚡ Colheita parcial preventiva"
        }
      },
      week12: {
        title: "Décima Segunda Semana - Colheita",
        description: "Milho atingiu maturidade. Análise de imagem mostra desenvolvimento heterogêneo. Previsão de chuva em 5 dias.",
        decisions: {
          immediateHarvest: "🚜 Colheita imediata de toda área",
          selectiveHarvest: "🎯 Colheita seletiva das áreas mais maduras",
          waitPerfectTiming: "🎲 Aguardar ponto ideal de colheita"
        }
      },
      postHarvest: {
        title: "Pós-Colheita - Preparação para Próxima Safra",
        description: "Colheita concluída! Agora é hora de preparar o solo para a próxima temporada. Análise do solo mostra níveis baixos de nitrogênio.",
        decisions: {
          coverCrops: "🌱 Plantar culturas de cobertura (leguminosas)",
          cropRotation: "🔄 Rotação com feijão-caupi na próxima safra",
          soilAnalysis: "📋 Análise detalhada do solo e correção"
        }
      }
    },
    feedback: {
      deepTillage: "🚜 Boa preparação! Solo descompactado facilita desenvolvimento radicular.",
      organicMatter: "⭐ Excelente! Matéria orgânica melhora retenção de água e fertilidade.",
      waitRain: "⏳ Estratégia conservadora, mas pode atrasar o plantio.",
      droughtResistant: "🌾 Escolha inteligente! Variedade adaptada ao clima angolano.",
      highYield: "🚀 Alto potencial, mas precisa de manejo cuidadoso.",
      localVariety: "🏡 Seguro e sustentável! Variedades locais são mais resilientes.",
      precisionIrrigation: "💧 Tecnologia avançada! Uso eficiente da água.",
      mulching: "⭐ Decisão sustentável! Economiza água e enriquece o solo.",
      foliarNutrition: "🌱 Boa estratégia! Nutrição rápida em período crítico.",
      biologicalControl: "🏆 Perfeito! Controle sustentável protege o ecossistema.",
      targetedPesticide: "🎯 Eficaz, mas use com moderação para preservar benefícios.",
      monitoring: "📊 Prevenção inteligente! Monitoramento evita grandes perdas.",
      variableRate: "📍 Tecnologia de precisão! Máxima eficiência dos nutrientes.",
      uniformApplication: "🌾 Estratégia tradicional, mas funcional.",
      organicFertilizer: "🌿 Sustentável! Liberação gradual é melhor para o solo.",
      drainageSystem: "💡 Investimento certeiro! Previne perdas por encharcamento.",
      temporaryCover: "☂️ Proteção eficaz, mas considere custo-benefício.",
      earlyHarvestPartial: "⚡ Decisão estratégica! Reduz riscos climáticos.",
      immediateHarvest: "🚜 Eficiente! Evitou riscos climáticos.",
      selectiveHarvest: "🏆 Excelente! Qualidade premium vale o investimento extra.",
      waitPerfectTiming: "🎲 Arriscado, mas pode render mais se o clima colaborar.",
      coverCrops: "⭐ Sustentabilidade máxima! Solo agradece para próxima safra.",
      cropRotation: "🔄 Manejo inteligente! Quebra ciclo de pragas e doenças.",
      soilAnalysis: "📋 Investimento no futuro! Dados precisos orientam decisões."
    },
    endGame: {
      title: "🏆 Parabéns! Safra Concluída",
      subtitle: "Resultados da sua gestão agrícola",
      results: {
        finalScore: "Pontuação Final",
        totalInvested: "Total Investido",
        budgetEfficiency: "Eficiência do Orçamento",
        sustainability: "Sustentabilidade",
        waterManagement: "Gestão Hídrica",
        excellent: "🏆 Excelente",
        good: "✅ Boa",
        regular: "⚠️ Regular",
        needsImprovement: "❌ Precisa melhorar",
        critical: "❌ Crítica"
      },
      performance: {
        title: "📊 Análise de Performance"
      },
      actions: {
        playAgain: "🔄 Jogar Novamente",
        backHome: "🏠 Voltar ao Início",
        downloadApp: "🌱 Continue aprendendo: baixe o app Farm Navigators para dados reais da NASA!"
      }
    },
    common: {
      kz: "Kz",
      points: "pts",
      percentage: "%",
      day: "Dia",
      week: "Semana",
      level: "Nível",
      season: "Estação",
      seasons: {
        planting: "Plantio",
        growing: "Crescimento",
        harvest: "Colheita"
      }
    }
  },
  footer: {
    description: "Revolucionando a agricultura angolana com tecnologia espacial da NASA e inteligência artificial.",
    sections: {
      product: {
        title: "Produto",
        links: ["Farm Tinder", "AgriFlix", "Game", "Previsões", "Alertas", "Marketplace"]
      },
      company: {
        title: "Empresa",
        links: ["Sobre Nós", "Nossa Missão", "Equipe", "Careers", "Imprensa", "Blog"]
      },
      support: {
        title: "Suporte",
        links: ["Central de Ajuda", "Documentação", "API", "Status", "Contato", "Comunidade"]
      },
      social: {
        title: "Redes Sociais"
      }
    },
    contact: {
      phone: "+244 900 000 000",
      email: "contato@farmnavigators.ao",
      address: "Luanda, Angola"
    },
    copyright: "© 2025 Farm Navigators. Todos os direitos reservados.",
    tagline: "Desenvolvido com 💚 para o futuro da agricultura angolana"
  },
  language: {
    select: "Selecionar idioma",
    current: "Português"
  },
  common: {
    learnMore: "Saber Mais",
    getStarted: "Começar",
    comingSoon: "Em Breve",
    loading: "Carregando...",
    error: "Erro",
    tryAgain: "Tentar Novamente",
    close: "Fechar",
    play: "Reproduzir",
    pause: "Pausar"
  },
  stats: {
    productivity: {
      value: "25%",
      label: "Aumento médio de produtividade"
    },
    languages: {
      value: "5 idiomas",
      label: "Português, Inglês + línguas nacionais"
    },
    coverage: {
      value: "18 províncias",
      label: "Cobertura em todo Angola"
    },
    realtime: {
      value: "24/7",
      label: "Alertas em tempo real"
    }
  },
  howItWorks: {
    title: "Como Funciona",
    subtitle: "Tecnologia simples para resultados extraordinários",
    mobile: {
      title: "Para Agricultores",
      subtitle: "App Mobile Intuitivo",
      steps: [
        { title: "Cadastro Simples", description: "Informe sua localização e tipo de terra" },
        { title: "Recomendações", description: "Receba sugestões baseadas em dados NASA" },
        { title: "Aprenda e Cultive", description: "Assista vídeos e aplique técnicas inteligentes" },
        { title: "Monitore Resultados", description: "Acompanhe crescimento e produtividade" }
      ]
    },
    web: {
      title: "Para ONGs e Governo",
      subtitle: "Plataforma Web Avançada",
      steps: [
        { title: "Mapas Interativos", description: "Visualize dados agrícolas e climáticos por região" },
        { title: "Gestão de Conteúdo", description: "Upload de vídeos educativos e materiais de capacitação" },
        { title: "Relatórios e Analytics", description: "Dados de produtividade e impacto para políticas públicas" },
        { title: "Suporte a Decisões", description: "Use dados confiáveis para programas e investimentos" }
      ]
    },
    cta: "Pronto para transformar a agricultura? Junte-se a nós hoje"
  },
  impact: {
    badge: "Transformação Nacional",
    title: "Impacto no Povo Angolano 🇦🇴",
    subtitle: "Tecnologia espacial e inovação digital unidas para revolucionar a agricultura e erradicar a fome",
    cards: {
      production: {
        title: "Mais Produção, Mais Renda",
        description: "Agricultores saberão o que plantar, quando plantar e como cuidar → menos perdas, mais rendimento",
        metric: "+40% produtividade"
      },
      inclusion: {
        title: "Inclusão Digital Rural",
        description: "Acesso por telemóveis simples (USSD), levando tecnologia até zonas sem internet",
        metric: "100% acessível"
      },
      education: {
        title: "Educação Acessível",
        description: "Mini-aulas curtas e simples, em português e línguas locais (Kimbundu, Umbundu, Kikongo)",
        metric: "+3 idiomas"
      },
      sustainability: {
        title: "Sustentabilidade",
        description: "Monitoramento da conservação da terra e combate à degradação do solo",
        metric: "Eco-friendly"
      },
      hunger: {
        title: "Redução da Fome",
        description: "Aumento da produção de alimentos e melhoria da segurança alimentar nacional",
        metric: "Menos fome"
      },
      empowerment: {
        title: "Capacitação Rural",
        description: "Formação de agricultores em técnicas modernas e sustentáveis para autonomia econômica",
        metric: "Mais conhecimento"
      }
    },
    stats: {
      farmers: {
        value: "500K+",
        label: "Agricultores Impactados"
      },
      villages: {
        value: "2,000+",
        label: "Comunidades Alcançadas"
      },
      productivity: {
        value: "+65%",
        label: "Aumento de Produtividade"
      },
      sustainability: {
        value: "15+",
        label: "Parceiros Ativos"
      }
    }
  },
  partners: {
    title: "Nossos Parceiros",
    subtitle: "Colaboração estratégica para impacto nacional",
    government: "Governo",
    technology: "Tecnologia", 
    international: "Internacional",
    academic: "Academia",
    items: [
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
      {
        name: "Universidade Agostinho Neto",
        description: "Pesquisa agrícola e capacitação técnica",
        type: "Academia"
      }
    ],
    cta: {
      title: "Junte-se à Nossa Rede de Parceiros",
      description: "Faça parte desta revolução agrícola e contribua para o desenvolvimento sustentável de Angola",
      primaryButton: "Tornar-se Parceiro",
      secondaryButton: "Saber Mais"
    },
    stats: {
      activePartners: "Parceiros Ativos",
      provinces: "Províncias Cobertas",
      beneficiaries: "Agricultores Beneficiados",
      yearsActive: "Anos de Colaboração"
    }
  },
  ctaDownload: {
    title: "Pronto para Revolucionar sua Agricultura?",
    subtitle: "Junte-se aos agricultores que já estão usando tecnologia espacial da NASA para aumentar a produtividade e cuidar da terra.",
    buttons: {
      ios: "Baixar para iOS",
      android: "Baixar para Android",
      desktop: "Baixar para Desktop",
      game: "Jogo Desktop"
    },
    offline: {
      title: "Sem internet? Sem problema!",
      description: "Envie AGRI para +244 900 000 000 via SMS"
    }
  },
  agriFlixFull: {
    header: {
      title: "AgriFlix 🎥",
      subtitle: "Plataforma de vídeos educativos para agricultura angolana",
      searchPlaceholder: "Pesquisar vídeos por título, instrutor, categoria ou tags..."
    },
    
    filters: {
      title: "Filtros",
      clearAll: "Limpar todos os filtros",
      category: "Categoria",
      language: "Idioma",
      difficulty: "Dificuldade",
      activeFilters: "Filtros ativos:"
    },
    
    categories: {
      all: "Todos",
      soilPrep: "Preparação do Solo",
      irrigation: "Irrigação",
      pestControl: "Controle de Pragas",
      harvesting: "Colheita",
      sustainability: "Sustentabilidade",
      technology: "Tecnologia",
      composting: "Compostagem"
    },
    
    difficulty: {
      basic: "Básico",
      intermediate: "Intermediário",
      advanced: "Avançado"
    },
    
    languages: {
      all: "Todos",
      portuguese: "Português",
      umbundu: "Umbundu",
      kimbundu: "Kimbundu",
      lunda: "Lunda"
    },
    
    player: {
      play: "Reproduzir",
      pause: "Pausar",
      like: "Curtir",
      share: "Compartilhar",
      download: "Baixar",
      transcript: "Transcrição",
      backToList: "Voltar à Lista",
      videoInfo: "Informações do Vídeo",
      instructor: "Instrutor",
      duration: "Duração",
      views: "Visualizações",
      likes: "Curtidas",
      category: "Categoria",
      tags: "Tags"
    },
    
    videos: {
      soilPrep: {
        title: "Como Preparar o Solo para Plantio de Milho",
        description: "Aprenda as técnicas essenciais para preparar o solo antes de plantar milho, incluindo análise do pH e adubação adequada."
      },
      irrigation: {
        title: "Otalapia Ukwashika - Irrigação Inteligente",
        description: "Técnicas de irrigação eficiente em Umbundu, usando dados de satélite para otimizar o uso da água."
      },
      pestControl: {
        title: "Combate Natural a Pragas na Mandioca",
        description: "Métodos orgânicos e sustentáveis para controlar pragas na cultura da mandioca sem usar produtos químicos."
      },
      cropRotation: {
        title: "Rotação de Culturas para Pequenos Agricultores",
        description: "Como fazer rotação de culturas em pequenas áreas para melhorar a produtividade e a saúde do solo."
      },
      waterConservation: {
        title: "Ochisenge - Conservação da Água",
        description: "Aprenda técnicas tradicionais e modernas de conservação da água para agricultura sustentável."
      },
      nasaData: {
        title: "Usando Dados da NASA para Plantio",
        description: "Como interpretar dados satelitais da NASA para tomar decisões de plantio mais inteligentes."
      },
      composting: {
        title: "Compostagem Caseira Simples",
        description: "Transforme restos orgânicos em adubo natural rico em nutrientes para suas plantas."
      },
      organicFarming: {
        title: "Agricultura Orgânica em Angola",
        description: "Princípios e práticas da agricultura orgânica adaptados às condições climáticas angolanas."
      }
    },
    
    messages: {
      noResults: "Nenhum vídeo encontrado",
      noResultsDesc: "Nenhum vídeo corresponde aos filtros selecionados.",
      loading: "Carregando vídeos...",
      error: "Erro ao carregar vídeos",
      tryFilters: "Tente alterar os filtros para ver mais conteúdo."
    },
    
    common: {
      views: "visualizações",
      likes: "curtidas",
      share: "Compartilhar",
      download: "Baixar",
      watch: "Assistir",
      instructor: "Instrutor",
      back: "Voltar"
    }
  },
  
  // FarmTinder Full Application
  farmTinderFull: {
    // Header and Navigation
    header: {
      title: "Farm Tinder 🌱❤️",
      subtitle: "Encontre as culturas perfeitas para sua terra",
      progress: "{current} de {total}",
    },
    
    // Main Card Interface
    card: {
      nasaConfidence: "NASA",
      scientificName: "Nome científico",
      idealConditions: "Condições Ideais:",
      bestPlantingSeason: "Melhor época de plantio",
      yieldUnit: "kg/hectare",
      profitUnit: "lucro/hectare",
      advantages: "✅ Vantagens:",
      considerations: "⚠️ Considerações:",
    },
    
    // Climate Information
    climate: {
      rainfall: "Chuva:",
      temperature: "Temperatura:",
      humidity: "Umidade:",
    },
    
    // Action Buttons
    actions: {
      reject: "Rejeitar",
      accept: "Aceitar",
      rejectButton: "Não Plantar",
      acceptButton: "Quero Plantar!",
    },
    
    // Results Page
    results: {
      title: "Suas Recomendações Farm Tinder 🌱❤️",
      subtitle: "Baseado nas suas escolhas e dados NASA da sua região",
      selectedCrops: "Culturas Selecionadas ({count})",
      noSelection: {
        title: "Nenhuma cultura selecionada",
        subtitle: "Tente novamente para encontrar as melhores opções para sua terra",
      },
      nextSteps: {
        title: "Próximos Passos Recomendados",
        items: [
          "✅ Prepare o solo conforme as especificações de cada cultura",
          "✅ Configure alertas climáticos no app para suas culturas",
          "✅ Assista aos vídeos AgriFlix específicos para cada plantio",
          "✅ Use o Simulador de Crescimento para planejar o calendário",
          "✅ Conecte-se com cooperativas locais para suporte técnico",
        ],
      },
      buttons: {
        tryAgain: "Tentar Novamente",
        backHome: "Voltar ao Início",
      },
    },
    
    // Crop Data
    crops: {
      corn: {
        name: "Milho",
        description: "Cultura base da alimentação angolana com alto potencial de rendimento",
        pros: [
          "Alta demanda no mercado local",
          "Resistente a variações climáticas",
          "Múltiplos usos (alimentação, ração)",
        ],
        considerations: [
          "Necessita irrigação regular",
          "Sensível a pragas na época seca",
        ],
        plantingSeason: "Outubro - Dezembro",
      },
      cassava: {
        name: "Mandioca",
        description: "Cultura resistente ideal para solos pobres e clima tropical",
        pros: [
          "Muito resistente à seca",
          "Cresce em solos pobres",
          "Longa durabilidade no solo",
        ],
        considerations: [
          "Preço de venda mais baixo",
          "Processamento necessário",
        ],
        plantingSeason: "Novembro - Janeiro",
      },
      beans: {
        name: "Feijão",
        description: "Fonte importante de proteína com boa rotação de culturas",
        pros: [
          "Alto valor nutricional",
          "Fixa nitrogênio no solo",
          "Ciclo curto (90 dias)",
        ],
        considerations: [
          "Sensível a excesso de água",
          "Requer cuidado com pragas",
        ],
        plantingSeason: "Setembro - Novembro",
      },
      sweetPotato: {
        name: "Batata Doce",
        description: "Cultura nutritiva e resistente, ideal para segurança alimentar",
        pros: [
          "Rica em vitaminas",
          "Tolera solos ácidos",
          "Folhas também são comestíveis",
        ],
        considerations: [
          "Necessita preparo do solo",
          "Armazenamento limitado",
        ],
        plantingSeason: "Março - Maio",
      },
      tomato: {
        name: "Tomate",
        description: "Cultura de alto valor mas que requer manejo técnico",
        pros: [
          "Alto valor de mercado",
          "Grande demanda urbana",
          "Múltiplas colheitas/ano",
        ],
        considerations: [
          "Requer irrigação constante",
          "Sensível a doenças",
          "Necessita investimento inicial",
        ],
        plantingSeason: "Maio - Julho",
      },
    },
    
    // Demo Information
    demo: {
      info: "💡 Demo do Farm Tinder - Dados baseados em informações reais da NASA e agricultura angolana",
    },
  },
  
  // Login Page
  login: {
    // Header
    header: {
      title: "Farm Navigators Angola",
      subtitle: "Plataforma Agrícola com Dados NASA",
      backButton: "Voltar ao início",
      changeBackground: "Trocar imagem de fundo",
    },
    
    // Form Fields
    form: {
      emailLabel: "Email",
      emailPlaceholder: "seu@email.com",
      passwordLabel: "Senha",
      passwordPlaceholder: "••••••••",
      loginButton: "Entrar",
      loginButtonLoading: "Entrando...",
    },
    
    // Quick Login Demo
    quickLogin: {
      title: "Demonstração - Login Rápido:",
      adminButton: "Admin",
      ngoButton: "ONG",
      credentials: {
        admin: "Admin: admin@farmnavigators.ao / admin123",
        ngo: "ONG: ong@farmnavigators.ao / ong123",
      },
    },
    
    // Error Messages
    errors: {
      invalidCredentials: "Credenciais inválidas. Use as credenciais de demonstração.",
      loginError: "Erro ao fazer login. Tente novamente.",
      required: "Este campo é obrigatório",
    },
    
    // Footer
    footer: {
      copyright: "© 2025 Farm Navigators Angola. Todos os direitos reservados.",
    },
  },
  
  // Admin Platform (Internal - Portuguese/English only)
  admin: {
    // Common Elements
    common: {
      dashboard: "Dashboard",
      users: "Usuários",
      content: "Conteúdo",
      reports: "Relatórios",
      settings: "Configurações",
      profile: "Perfil",
      search: "Pesquisar",
      filter: "Filtrar",
      export: "Exportar",
      save: "Salvar",
      cancel: "Cancelar",
      delete: "Excluir",
      edit: "Editar",
      view: "Visualizar",
      approve: "Aprovar",
      reject: "Rejeitar",
      loading: "Carregando...",
      error: "Erro",
      success: "Sucesso",
      warning: "Aviso",
    },
    
    // Navigation/Sidebar
    navigation: {
      main: "Principal",
      others: "Outros", 
      dashboard: "Dashboard",
      userManagement: "Gestão de Usuários",
      contentModeration: "Moderação de Conteúdo",
      systemReports: "Relatórios",
      systemSettings: "Configurações",
      profile: "Perfil",
    },
    
    // Dashboard
    dashboard: {
      title: "Dashboard Administrativo",
      subtitle: "Gestão e monitoramento da plataforma Farm Navigators Angola",
      timeRanges: {
        "24h": "24h",
        "7d": "7d",
        "30d": "30d",
        "90d": "90d",
      },
      stats: {
        totalUsers: "Total de Usuários",
        activeUsers: "Usuários Ativos",
        totalNGOs: "Total de ONGs",
        totalContent: "Total de Conteúdo",
        systemHealth: "Saúde do Sistema",
        apiCalls: "Chamadas de API",
      },
      charts: {
        userGrowth: "Crescimento de Usuários",
        contentStats: "Estatísticas de Conteúdo",
        systemAlerts: "Alertas do Sistema",
        recentActivity: "Atividade Recente",
      },
      alerts: {
        high_latency: "API NASA com latência alta",
        backup_completed: "Backup automático concluído",
        new_ngo: "Nova ONG registrada",
        storage_warning: "Uso de storage em 85%",
      },
      activity: {
        video_upload: "Upload de vídeo",
        new_registration: "Novo registro",
        report_generated: "Relatório gerado",
        content_approved: "Conteúdo aprovado",
      },
    },
    
    // User Management
    userManagement: {
      title: "Gestão de Usuários",
      subtitle: "Gerencie agricultores, ONGs e administradores da plataforma",
      tabs: {
        farmers: "Agricultores",
        ngos: "ONGs",
        admins: "Administradores",
      },
      actions: {
        addUser: "Adicionar Usuário",
        exportData: "Exportar Dados",
        bulkActions: "Ações em Lote",
      },
      userDetails: {
        name: "Nome",
        email: "Email",
        role: "Função",
        status: "Status",
        registrationDate: "Data de Registro",
        lastLogin: "Último Login",
        location: "Localização",
      },
      status: {
        active: "Ativo",
        inactive: "Inativo",
        suspended: "Suspenso",
      },
    },
    
    // Content Moderation
    contentModeration: {
      title: "Moderação de Conteúdo",
      subtitle: "Revise e aprove conteúdo da plataforma",
      tabs: {
        pending: "Pendente",
        approved: "Aprovado",
        rejected: "Rejeitado",
      },
      contentTypes: {
        video: "Vídeo",
        article: "Artigo",
        comment: "Comentário",
      },
      moderationActions: {
        approve: "Aprovar",
        reject: "Rejeitar",
        needsReview: "Precisa Revisão",
      },
    },
  },
  
  // NGO Platform (Internal - Portuguese/English only)
  ngo: {
    // Common Elements
    common: {
      dashboard: "Dashboard",
      maps: "Mapas",
      content: "Conteúdo",
      reports: "Relatórios",
      statistics: "Estatísticas",
      profile: "Perfil",
      farmers: "Agricultores",
      videos: "Vídeos",
      impact: "Impacto",
      reach: "Alcance",
      coverage: "Cobertura",
    },
    
    // Navigation/Sidebar
    navigation: {
      dashboard: "Dashboard",
      regionalMaps: "Mapas Regionais",
      educationalContent: "Conteúdo Educativo",
      impactReports: "Relatórios de Impacto",
      regionalStats: "Estatísticas Regionais",
      profile: "Perfil",
    },
    
    // Dashboard
    dashboard: {
      title: "Dashboard ONG - Farm Navigators",
      subtitle: "Monitore o impacto da sua organização na agricultura angolana",
      stats: {
        farmersReached: "Agricultores Atingidos",
        agriflixVideos: "Vídeos AgriFlix",
        totalViews: "Visualizações",
        provincesCovered: "Províncias Cobertas",
        monthlyGrowth: "+23% este mês",
        newThisMonth: "novos este mês",
        vsLastMonth: "+156% vs mês anterior",
        nationalCoverage: "cobertura nacional",
      },
      sections: {
        regionalImpact: "Impacto Regional",
        mostWatchedContent: "Conteúdo Mais Assistido",
        quickActions: "Ações Rápidas",
      },
      categories: {
        water: "Água",
        planting: "Plantio",
        protection: "Proteção",
        soil: "Solo",
      },
      actions: {
        uploadVideo: "Upload de Vídeo",
        createReport: "Criar Relatório",
        viewMaps: "Ver Mapas",
        manageContent: "Gerenciar Conteúdo",
      },
    },
    
    // Regional Maps
    regionalMaps: {
      title: "Mapas Regionais",
      subtitle: "Visualize dados regionais e impacto da sua ONG",
      filters: {
        province: "Província",
        timeRange: "Período",
        dataType: "Tipo de Dados",
      },
      dataTypes: {
        farmerDensity: "Densidade de Agricultores",
        contentEngagement: "Engajamento de Conteúdo",
        cropDistribution: "Distribuição de Culturas",
        weatherPatterns: "Padrões Climáticos",
      },
    },
    
    // Educational Content
    educationalContent: {
      title: "Conteúdo Educativo",
      subtitle: "Gerencie seus vídeos e materiais educativos",
      tabs: {
        myVideos: "Meus Vídeos",
        published: "Publicados",
        drafts: "Rascunhos",
        analytics: "Análises",
      },
      videoStats: {
        views: "visualizações",
        likes: "curtidas",
        shares: "compartilhamentos",
        duration: "duração",
        uploadDate: "data de upload",
      },
    },
    
    // Impact Reports
    impactReports: {
      title: "Relatórios de Impacto",
      subtitle: "Analise o impacto das suas ações na comunidade",
      reportTypes: {
        monthly: "Mensal",
        quarterly: "Trimestral",
        annual: "Anual",
        custom: "Personalizado",
      },
      metrics: {
        reach: "Alcance",
        engagement: "Engajamento",
        outcomes: "Resultados",
        feedback: "Feedback",
      },
    },
  },
};

// Tradução em Inglês (EN)
export const en: Translations = {
  companyName: "Farm Navigators",
  navigation: {
    home: "Home",
    features: "Features",
    about: "About",
    contact: "Contact",
    demos: "Demos",
    download: "Download"
  },
  hero: {
    title: "Revolutionize Your Agriculture with NASA Data",
    subtitle: "🚀 Transforming Angolan agriculture with space technology",
    description: "Complete platform that combines NASA satellite data with artificial intelligence to optimize your agricultural production. Farm Tinder, weather forecasts, educational videos and much more.",
    ctaPrimary: "Get Started",
    ctaSecondary: "Watch Demo",
    watchDemo: "▶️ Watch Demo"
  },
  features: {
    title: "Powerful Features for Smart Agriculture",
    subtitle: "Everything you need to optimize your agricultural production",
    farmTinder: {
      title: "Farm Tinder",
      description: "Personalized crop recommendations based on NASA data, soil and climate of your region",
      benefits: ["Smart matching", "NASA data integrated", "Personalized recommendations"]
    },
    weather: {
      title: "Weather Forecasts",
      description: "Real-time NASA data: rain, temperature, soil moisture and pest alerts",
      benefits: ["Accurate forecasts", "Automatic alerts", "Real-time data"]
    },
    agriflix: {
      title: "AgriFlix",
      description: "Library of short educational videos in Portuguese and local Angolan languages",
      benefits: ["Practical videos", "Multiple languages", "Local techniques"]
    },
    alerts: {
      title: "Smart Alerts",
      description: "AI-based notification system for pests, diseases and adverse weather conditions",
      benefits: ["Advanced AI", "Loss prevention", "Push notifications"]
    },
    community: {
      title: "Farmers Community",
      description: "Connect with other farmers, share experiences and learn sustainable techniques",
      benefits: ["Agricultural social network", "Experience sharing", "Specialized forum"]
    },
    marketplace: {
      title: "Agricultural Marketplace",
      description: "Buy and sell agricultural products directly on the platform with fair prices",
      benefits: ["Direct sales", "Transparent prices", "Integrated logistics"]
    }
  },
  videoDemo: {
    title: "See Farm Navigators in Action",
    subtitle: "Complete demonstration of how NASA technology can transform Angolan agriculture",
    thumbnailTitle: "NASA Applied Sciences",
    thumbnailDescription: "Satellite data • Smart agriculture • Applied space technology",
    duration: "8:54",
    quality: "HD 1080p",
    source: "NASA",
    stats: {
      duration: "Video duration",
      dataSource: "Official data",
      quality: "Premium quality"
    }
  },
  interactiveDemos: {
    title: "Interactive Demonstrations",
    subtitle: "See how Farm Navigators works in practice with our interactive demonstrations",
    farmTinder: {
      title: "Farm Tinder",
      description: "Swipe to choose the best crops for your land based on NASA data",
      features: ["Personalized recommendations", "NASA climate data", "Productivity estimates", "Tinder-like interface"],
      button: "Try Farm Tinder →"
    },
    agriflix: {
      title: "AgriFlix",
      description: "Library of short educational videos in Portuguese and local Angolan languages",
      features: ["1-4 minute videos", "Practical agricultural techniques", "Multiple languages", "Interactive player"],
      button: "Watch AgriFlix →"
    },
    seriousGame: {
      title: "Game",
      description: "Educational game that teaches how to use satellite data for smart agricultural decisions",
      features: ["8 realistic scenarios", "Budget in Kwanzas", "Educational feedback", "Level progression"],
      button: "Play Now →"
    }
  },
  download: {
    title: "Download Farm Navigators",
    subtitle: "Available for all platforms",
    description: "Access all Farm Navigators functionality on your preferred device. Complete mobile app and professional desktop version.",
    platforms: {
      ios: "iOS App Store",
      android: "Google Play",
      desktop: "Desktop (Windows/Mac)",
      game: "Game"
    },
    stats: {
      downloads: "10K+ Downloads",
      rating: "4.8★ Rating",
      countries: "5 Countries"
    }
  },
  footer: {
    description: "Revolutionizing Angolan agriculture with NASA space technology and artificial intelligence.",
    sections: {
      product: {
        title: "Product",
        links: ["Farm Tinder", "AgriFlix", "Game", "Forecasts", "Alerts", "Marketplace"]
      },
      company: {
        title: "Company",
        links: ["About Us", "Our Mission", "Team", "Careers", "Press", "Blog"]
      },
      support: {
        title: "Support",
        links: ["Help Center", "Documentation", "API", "Status", "Contact", "Community"]
      },
      social: {
        title: "Social Media"
      }
    },
    contact: {
      phone: "+244 900 000 000",
      email: "contact@farmnavigators.ao",
      address: "Luanda, Angola"
    },
    copyright: "© 2025 Farm Navigators. All rights reserved.",
    tagline: "Developed with 💚 for the future of Angolan agriculture"
  },
  language: {
    select: "Select language",
    current: "English"
  },
  common: {
    learnMore: "Learn More",
    getStarted: "Get Started",
    comingSoon: "Coming Soon",
    loading: "Loading...",
    error: "Error",
    tryAgain: "Try Again",
    close: "Close",
    play: "Play",
    pause: "Pause"
  },
  stats: {
    productivity: {
      value: "25%",
      label: "Average productivity increase"
    },
    languages: {
      value: "5 languages",
      label: "Portuguese, English + national languages"
    },
    coverage: {
      value: "18 provinces",
      label: "Coverage across Angola"
    },
    realtime: {
      value: "24/7",
      label: "Real-time alerts"
    }
  },
  howItWorks: {
    title: "How It Works",
    subtitle: "Simple technology for extraordinary results",
    mobile: {
      title: "For Farmers",
      subtitle: "Intuitive Mobile App",
      steps: [
        { title: "Simple Registration", description: "Enter your location and soil type" },
        { title: "Recommendations", description: "Receive suggestions based on NASA data" },
        { title: "Learn and Grow", description: "Watch videos and apply smart techniques" },
        { title: "Track Results", description: "Monitor growth and productivity" }
      ]
    },
    web: {
      title: "For NGOs and Government",
      subtitle: "Advanced Web Platform",
      steps: [
        { title: "Interactive Maps", description: "Visualize agricultural and climate data by region" },
        { title: "Content Management", description: "Upload educational videos and training materials" },
        { title: "Reports and Analytics", description: "Productivity and impact data for public policies" },
        { title: "Decision Support", description: "Use reliable data for programs and investments" }
      ]
    },
    cta: "Ready to transform agriculture? Join us today"
  },
  impact: {
    badge: "National Transformation",
    title: "Impact on Angolan People 🇦🇴",
    subtitle: "Space technology and digital innovation united to revolutionize agriculture and eradicate hunger",
    cards: {
      production: {
        title: "More Production, More Income",
        description: "Farmers will know what to plant, when to plant and how to care → less losses, more yield",
        metric: "+40% productivity"
      },
      inclusion: {
        title: "Rural Digital Inclusion",
        description: "Access via simple mobile phones (USSD), bringing technology to areas without internet",
        metric: "100% accessible"
      },
      education: {
        title: "Accessible Education",
        description: "Short and simple mini-lessons, in Portuguese and local languages (Kimbundu, Umbundu, Kikongo)",
        metric: "+3 languages"
      },
      sustainability: {
        title: "Sustainability",
        description: "Monitoring land conservation and combating soil degradation",
        metric: "Eco-friendly"
      },
      hunger: {
        title: "Hunger Reduction",
        description: "Increased food production and improvement of national food security",
        metric: "Less hunger"
      },
      empowerment: {
        title: "Rural Empowerment",
        description: "Training farmers in modern and sustainable techniques for economic autonomy",
        metric: "More knowledge"
      }
    },
    stats: {
      farmers: {
        value: "500K+",
        label: "Farmers Impacted"
      },
      villages: {
        value: "2,000+",
        label: "Communities Reached"
      },
      productivity: {
        value: "+65%",
        label: "Productivity Increase"
      },
      sustainability: {
        value: "15+",
        label: "Active Partners"
      }
    }
  },
  partners: {
    title: "Our Partners",
    subtitle: "Strategic collaboration for national impact",
    government: "Government",
    technology: "Technology",
    international: "International", 
    academic: "Academic",
    items: [
      {
        name: "MINAGRIF",
        description: "Ministry of Agriculture and Forestry - Institutional partnership for agricultural policies",
        type: "Government"
      },
      {
        name: "NASA Harvest",
        description: "NASA agriculture and food security program - Satellite data",
        type: "Technology"
      },
      {
        name: "FAO Angola",
        description: "United Nations Food and Agriculture Organization",
        type: "International"
      },
      {
        name: "Agostinho Neto University",
        description: "Agricultural research and technical training",
        type: "Academic"
      }
    ],
    cta: {
      title: "Join Our Partner Network",
      description: "Be part of this agricultural revolution and contribute to Angola's sustainable development",
      primaryButton: "Become a Partner",
      secondaryButton: "Learn More"
    },
    stats: {
      activePartners: "Active Partners",
      provinces: "Provinces Covered",
      beneficiaries: "Farmers Benefited",
      yearsActive: "Years of Collaboration"
    }
  },
  ctaDownload: {
    title: "Ready to Revolutionize Your Agriculture?",
    subtitle: "Join the farmers who are already using NASA space technology to increase productivity and take care of the land.",
    buttons: {
      ios: "Download for iOS",
      android: "Download for Android",
      desktop: "Download for Desktop",
      game: "Desktop Game"
    },
    offline: {
      title: "No internet? No problem!",
      description: "Send AGRI to +244 900 000 000 via SMS"
    }
  },
  seriousGameFull: {
    welcome: {
      title: "🎮 Serious Game: Virtual Farm Manager",
      subtitle: "Realistic Simulation of Angolan Agriculture",
      description: "Make decisions based on real NASA data and learn sustainable farming techniques adapted to the Angolan climate.",
      features: {
        nasaData: { title: "Real NASA Data", description: "NDVI, soil moisture, precipitation" },
        realScenarios: { title: "Angolan Scenarios", description: "Situations based on Huambo, Benguela, Uíge" },
        scientificFeedback: { title: "Scientific Feedback", description: "Learn from every decision made" },
        budgetManagement: { title: "Real Budget", description: "Management in Kwanzas" }
      },
      howToPlay: {
        title: "How to Play",
        steps: {
          analyze: "1. Analyze data: Use satellite information (NDVI, soil moisture)",
          decide: "2. Make decisions: Choose strategies based on data",
          manage: "3. Manage resources: Maintain budget and sustainability",
          learn: "4. Learn: Receive feedback on your choices"
        }
      },
      startButton: "🚀 Start Game",
      duration: "Duration: ~15-20 minutes • Audience: students, farmers, curious minds"
    },
    ui: {
      indicators: { water: "Water", soil: "Soil", growth: "Growth", score: "Score", budget: "Budget" },
      status: {
        title: "📊 Farm Status", waterReserve: "Water Reserve", soilHealth: "Soil Health",
        cropGrowth: "Crop Growth", day: "Day", season: "Season", budgetRemaining: "Budget Remaining"
      },
      feedback: { title: "Feedback" },
      decisions: { title: "Available Decisions", free: "💚 Free", insufficientBudget: "Insufficient budget" },
      nasaPanel: {
        title: "🛰️ NASA Data", soilMoisture: "Soil Moisture", ndvi: "NDVI Index",
        precipitation: "Precipitation", temperature: "Temperature"
      },
      weather: { temperature: "Temperature", rainfall: "Rainfall", humidity: "Humidity" }
    },
    scenarios: {
      week1: {
        title: "First Week - Soil Preparation",
        description: "Start of agricultural season in Huambo. Satellite analysis shows dried soil after dry season. How to best prepare the land?",
        decisions: {
          deepTillage: "🚜 Deep tillage to break compaction",
          organicMatter: "🌿 Add organic matter and composting",
          waitRain: "☁️ Wait for first rain before preparing"
        }
      },
      week2: {
        title: "Second Week - Corn Planting",
        description: "First rain arrived! Satellite data shows adequate moisture for planting in Benguela. Which variety to choose?",
        decisions: {
          droughtResistant: "🌾 Drought-resistant variety (long cycle)",
          highYield: "🚀 High-yield variety (more demanding)",
          localVariety: "🏡 Adapted local seeds (lower risk)"
        }
      },
      week4: {
        title: "Fourth Week - Initial Growth",
        description: "Plants emerged! NDVI indicates uneven growth. Weather data predicts 10-day dry period.",
        decisions: {
          precisionIrrigation: "💧 Localized irrigation in drier areas",
          mulching: "🍂 Mulch to conserve moisture",
          foliarNutrition: "🌱 Foliar nutrition to strengthen plants"
        }
      },
      week6: {
        title: "Sixth Week - Pest Control",
        description: "Satellite images detect possible pest attack in west of plantation. How to act quickly?",
        decisions: {
          biologicalControl: "🐛 Biological control with natural predators",
          targetedPesticide: "🎯 Specific pesticide only in affected area",
          monitoring: "📊 Intensify monitoring and traps"
        }
      },
      week8: {
        title: "Eighth Week - Complementary Fertilization",
        description: "NDVI analysis shows some areas need additional nutrients. Critical time for corn flowering.",
        decisions: {
          variableRate: "📍 Variable rate fertilizer application",
          uniformApplication: "🌾 Uniform application across entire area",
          organicFertilizer: "🌿 Slow-release organic fertilizer"
        }
      },
      week10: {
        title: "Tenth Week - Advanced Water Management",
        description: "Weather forecast indicates 3 days of intense rain. NDVI shows healthy crops, but waterlogging risk.",
        decisions: {
          drainageSystem: "🚰 Implement temporary drainage system",
          temporaryCover: "☂️ Temporary cover in critical areas",
          earlyHarvestPartial: "⚡ Preventive partial harvest"
        }
      },
      week12: {
        title: "Twelfth Week - Harvest",
        description: "Corn reached maturity. Image analysis shows heterogeneous development. Rain forecast in 5 days.",
        decisions: {
          immediateHarvest: "🚜 Immediate harvest of entire area",
          selectiveHarvest: "🎯 Selective harvest of most mature areas",
          waitPerfectTiming: "🎲 Wait for ideal harvest point"
        }
      },
      postHarvest: {
        title: "Post-Harvest - Next Season Preparation",
        description: "Harvest completed! Now time to prepare soil for next season. Soil analysis shows low nitrogen levels.",
        decisions: {
          coverCrops: "🌱 Plant cover crops (legumes)",
          cropRotation: "🔄 Rotation with cowpea next season",
          soilAnalysis: "📋 Detailed soil analysis and correction"
        }
      }
    },
    feedback: {
      deepTillage: "🚜 Good preparation! Decompacted soil facilitates root development.",
      organicMatter: "⭐ Excellent! Organic matter improves water retention and fertility.",
      waitRain: "⏳ Conservative strategy, but may delay planting.",
      droughtResistant: "🌾 Smart choice! Variety adapted to Angolan climate.",
      highYield: "🚀 High potential, but needs careful management.",
      localVariety: "🏡 Safe and sustainable! Local varieties are more resilient.",
      precisionIrrigation: "💧 Advanced technology! Efficient water use.",
      mulching: "⭐ Sustainable decision! Saves water and enriches soil.",
      foliarNutrition: "🌱 Good strategy! Quick nutrition in critical period.",
      biologicalControl: "🏆 Perfect! Sustainable control protects ecosystem.",
      targetedPesticide: "🎯 Effective, but use moderately to preserve benefits.",
      monitoring: "📊 Smart prevention! Monitoring prevents major losses.",
      variableRate: "📍 Precision technology! Maximum nutrient efficiency.",
      uniformApplication: "🌾 Traditional strategy, but functional.",
      organicFertilizer: "🌿 Sustainable! Gradual release is better for soil.",
      drainageSystem: "💡 Smart investment! Prevents waterlogging losses.",
      temporaryCover: "☂️ Effective protection, but consider cost-benefit.",
      earlyHarvestPartial: "⚡ Strategic decision! Reduces climate risks.",
      immediateHarvest: "🚜 Efficient! Avoided climate risks.",
      selectiveHarvest: "🏆 Excellent! Premium quality worth extra investment.",
      waitPerfectTiming: "🎲 Risky, but may yield more if weather cooperates.",
      coverCrops: "⭐ Maximum sustainability! Soil thanks for next season.",
      cropRotation: "🔄 Smart management! Breaks pest and disease cycle.",
      soilAnalysis: "📋 Investment in future! Precise data guides decisions."
    },
    endGame: {
      title: "🏆 Congratulations! Season Completed",
      subtitle: "Results of your agricultural management",
      results: {
        finalScore: "Final Score", totalInvested: "Total Invested", budgetEfficiency: "Budget Efficiency",
        sustainability: "Sustainability", waterManagement: "Water Management",
        excellent: "🏆 Excellent", good: "✅ Good", regular: "⚠️ Regular",
        needsImprovement: "❌ Needs improvement", critical: "❌ Critical"
      },
      performance: { title: "📊 Performance Analysis" },
      actions: {
        playAgain: "🔄 Play Again", backHome: "🏠 Back to Home",
        downloadApp: "🌱 Keep learning: download Farm Navigators app for real NASA data!"
      }
    },
    common: {
      kz: "Kz", points: "pts", percentage: "%", day: "Day", week: "Week",
      level: "Level", season: "Season",
      seasons: { planting: "Planting", growing: "Growing", harvest: "Harvest" }
    }
  },
  agriFlixFull: {
    header: {
      title: "AgriFlix 🎥",
      subtitle: "Educational video platform for Angolan agriculture",
      searchPlaceholder: "Search videos by title, instructor, category or tags..."
    },
    
    filters: {
      title: "Filters",
      clearAll: "Clear all filters",
      category: "Category",
      language: "Language",
      difficulty: "Difficulty",
      activeFilters: "Active filters:"
    },
    
    categories: {
      all: "All",
      soilPrep: "Soil Preparation",
      irrigation: "Irrigation",
      pestControl: "Pest Control",
      harvesting: "Harvesting",
      sustainability: "Sustainability",
      technology: "Technology",
      composting: "Composting"
    },
    
    difficulty: {
      basic: "Basic",
      intermediate: "Intermediate",
      advanced: "Advanced"
    },
    
    languages: {
      all: "All",
      portuguese: "Portuguese",
      umbundu: "Umbundu",
      kimbundu: "Kimbundu",
      lunda: "Lunda"
    },
    
    player: {
      play: "Play",
      pause: "Pause",
      like: "Like",
      share: "Share",
      download: "Download",
      transcript: "Transcript",
      backToList: "Back to List",
      videoInfo: "Video Information",
      instructor: "Instructor",
      duration: "Duration",
      views: "Views",
      likes: "Likes",
      category: "Category",
      tags: "Tags"
    },
    
    videos: {
      soilPrep: {
        title: "How to Prepare Soil for Corn Planting",
        description: "Learn essential techniques for preparing soil before planting corn, including pH analysis and proper fertilization."
      },
      irrigation: {
        title: "Smart Irrigation Techniques",
        description: "Efficient irrigation techniques using satellite data to optimize water usage."
      },
      pestControl: {
        title: "Natural Pest Control in Cassava",
        description: "Organic and sustainable methods to control pests in cassava crops without using chemicals."
      },
      cropRotation: {
        title: "Crop Rotation for Small Farmers",
        description: "How to rotate crops in small areas to improve productivity and soil health."
      },
      waterConservation: {
        title: "Water Conservation Techniques",
        description: "Learn traditional and modern water conservation techniques for sustainable agriculture."
      },
      nasaData: {
        title: "Using NASA Data for Planting",
        description: "How to interpret NASA satellite data to make smarter planting decisions."
      },
      composting: {
        title: "Simple Home Composting",
        description: "Transform organic waste into nutrient-rich natural fertilizer for your plants."
      },
      organicFarming: {
        title: "Organic Farming in Angola",
        description: "Principles and practices of organic farming adapted to Angolan climate conditions."
      }
    },
    
    messages: {
      noResults: "No videos found",
      noResultsDesc: "No videos match the selected filters.",
      loading: "Loading videos...",
      error: "Error loading videos",
      tryFilters: "Try changing filters to see more content."
    },
    
    common: {
      views: "views",
      likes: "likes",
      share: "Share",
      download: "Download",
      watch: "Watch",
      instructor: "Instructor",
      back: "Back"
    }
  },
  
  // FarmTinder Full Application
  farmTinderFull: {
    // Header and Navigation
    header: {
      title: "Farm Tinder 🌱❤️",
      subtitle: "Find the perfect crops for your land",
      progress: "{current} of {total}",
    },
    
    // Main Card Interface
    card: {
      nasaConfidence: "NASA",
      scientificName: "Scientific name",
      idealConditions: "Ideal Conditions:",
      bestPlantingSeason: "Best planting season",
      yieldUnit: "kg/hectare",
      profitUnit: "profit/hectare",
      advantages: "✅ Advantages:",
      considerations: "⚠️ Considerations:",
    },
    
    // Climate Information
    climate: {
      rainfall: "Rainfall:",
      temperature: "Temperature:",
      humidity: "Humidity:",
    },
    
    // Action Buttons
    actions: {
      reject: "Reject",
      accept: "Accept",
      rejectButton: "Don't Plant",
      acceptButton: "Want to Plant!",
    },
    
    // Results Page
    results: {
      title: "Your Farm Tinder Recommendations 🌱❤️",
      subtitle: "Based on your choices and NASA data from your region",
      selectedCrops: "Selected Crops ({count})",
      noSelection: {
        title: "No crops selected",
        subtitle: "Try again to find the best options for your land",
      },
      nextSteps: {
        title: "Recommended Next Steps",
        items: [
          "✅ Prepare soil according to each crop's specifications",
          "✅ Set up climate alerts in the app for your crops",
          "✅ Watch AgriFlix videos specific to each planting",
          "✅ Use Growth Simulator to plan calendar",
          "✅ Connect with local cooperatives for technical support",
        ],
      },
      buttons: {
        tryAgain: "Try Again",
        backHome: "Back to Home",
      },
    },
    
    // Crop Data
    crops: {
      corn: {
        name: "Corn",
        description: "Base crop of Angolan diet with high yield potential",
        pros: [
          "High demand in local market",
          "Resistant to climate variations",
          "Multiple uses (food, feed)",
        ],
        considerations: [
          "Requires regular irrigation",
          "Sensitive to pests in dry season",
        ],
        plantingSeason: "October - December",
      },
      cassava: {
        name: "Cassava",
        description: "Resistant crop ideal for poor soils and tropical climate",
        pros: [
          "Very drought resistant",
          "Grows in poor soils",
          "Long durability in soil",
        ],
        considerations: [
          "Lower selling price",
          "Processing required",
        ],
        plantingSeason: "November - January",
      },
      beans: {
        name: "Beans",
        description: "Important protein source with good crop rotation",
        pros: [
          "High nutritional value",
          "Fixes nitrogen in soil",
          "Short cycle (90 days)",
        ],
        considerations: [
          "Sensitive to excess water",
          "Requires pest care",
        ],
        plantingSeason: "September - November",
      },
      sweetPotato: {
        name: "Sweet Potato",
        description: "Nutritious and resistant crop, ideal for food security",
        pros: [
          "Rich in vitamins",
          "Tolerates acid soils",
          "Leaves are also edible",
        ],
        considerations: [
          "Requires soil preparation",
          "Limited storage",
        ],
        plantingSeason: "March - May",
      },
      tomato: {
        name: "Tomato",
        description: "High-value crop but requires technical management",
        pros: [
          "High market value",
          "Great urban demand",
          "Multiple harvests/year",
        ],
        considerations: [
          "Requires constant irrigation",
          "Sensitive to diseases",
          "Needs initial investment",
        ],
        plantingSeason: "May - July",
      },
    },
    
    // Demo Information
    demo: {
      info: "💡 Farm Tinder Demo - Based on real NASA data and Angolan agriculture",
    },
  },
  
  // Login Page
  login: {
    // Header
    header: {
      title: "Farm Navigators Angola",
      subtitle: "Agricultural Platform with NASA Data",
      backButton: "Back to home",
      changeBackground: "Change background image",
    },
    
    // Form Fields
    form: {
      emailLabel: "Email",
      emailPlaceholder: "your@email.com",
      passwordLabel: "Password",
      passwordPlaceholder: "••••••••",
      loginButton: "Login",
      loginButtonLoading: "Logging in...",
    },
    
    // Quick Login Demo
    quickLogin: {
      title: "Demo - Quick Login:",
      adminButton: "Admin",
      ngoButton: "NGO",
      credentials: {
        admin: "Admin: admin@farmnavigators.ao / admin123",
        ngo: "NGO: ong@farmnavigators.ao / ong123",
      },
    },
    
    // Error Messages
    errors: {
      invalidCredentials: "Invalid credentials. Use demo credentials.",
      loginError: "Login error. Please try again.",
      required: "This field is required",
    },
    
    // Footer
    footer: {
      copyright: "© 2025 Farm Navigators Angola. All rights reserved.",
    },
  },
  
  // Admin Platform (Internal - Portuguese/English only)
  admin: {
    // Common Elements
    common: {
      dashboard: "Dashboard",
      users: "Users",
      content: "Content",
      reports: "Reports",
      settings: "Settings",
      profile: "Profile",
      search: "Search",
      filter: "Filter",
      export: "Export",
      save: "Save",
      cancel: "Cancel",
      delete: "Delete",
      edit: "Edit",
      view: "View",
      approve: "Approve",
      reject: "Reject",
      loading: "Loading...",
      error: "Error",
      success: "Success",
      warning: "Warning",
    },
    
    // Navigation/Sidebar
    navigation: {
      main: "Main",
      others: "Others",
      dashboard: "Dashboard",
      userManagement: "User Management",
      contentModeration: "Content Moderation",
      systemReports: "System Reports",
      systemSettings: "System Settings",
      profile: "Profile",
    },
    
    // Dashboard
    dashboard: {
      title: "Administrative Dashboard",
      subtitle: "Farm Navigators Angola platform management and monitoring",
      timeRanges: {
        "24h": "24h",
        "7d": "7d",
        "30d": "30d",
        "90d": "90d",
      },
      stats: {
        totalUsers: "Total Users",
        activeUsers: "Active Users",
        totalNGOs: "Total NGOs",
        totalContent: "Total Content",
        systemHealth: "System Health",
        apiCalls: "API Calls",
      },
      charts: {
        userGrowth: "User Growth",
        contentStats: "Content Statistics",
        systemAlerts: "System Alerts",
        recentActivity: "Recent Activity",
      },
      alerts: {
        high_latency: "NASA API with high latency",
        backup_completed: "Automatic backup completed",
        new_ngo: "New NGO registered",
        storage_warning: "Storage usage at 85%",
      },
      activity: {
        video_upload: "Video upload",
        new_registration: "New registration",
        report_generated: "Report generated",
        content_approved: "Content approved",
      },
    },
    
    // User Management
    userManagement: {
      title: "User Management",
      subtitle: "Manage farmers, NGOs and platform administrators",
      tabs: {
        farmers: "Farmers",
        ngos: "NGOs",
        admins: "Administrators",
      },
      actions: {
        addUser: "Add User",
        exportData: "Export Data",
        bulkActions: "Bulk Actions",
      },
      userDetails: {
        name: "Name",
        email: "Email",
        role: "Role",
        status: "Status",
        registrationDate: "Registration Date",
        lastLogin: "Last Login",
        location: "Location",
      },
      status: {
        active: "Active",
        inactive: "Inactive",
        suspended: "Suspended",
      },
    },
    
    // Content Moderation
    contentModeration: {
      title: "Content Moderation",
      subtitle: "Review and approve platform content",
      tabs: {
        pending: "Pending",
        approved: "Approved",
        rejected: "Rejected",
      },
      contentTypes: {
        video: "Video",
        article: "Article",
        comment: "Comment",
      },
      moderationActions: {
        approve: "Approve",
        reject: "Reject",
        needsReview: "Needs Review",
      },
    },
  },
  
  // NGO Platform (Internal - Portuguese/English only)
  ngo: {
    // Common Elements
    common: {
      dashboard: "Dashboard",
      maps: "Maps",
      content: "Content",
      reports: "Reports",
      statistics: "Statistics",
      profile: "Profile",
      farmers: "Farmers",
      videos: "Videos",
      impact: "Impact",
      reach: "Reach",
      coverage: "Coverage",
    },
    
    // Navigation/Sidebar
    navigation: {
      dashboard: "Dashboard",
      regionalMaps: "Regional Maps",
      educationalContent: "Educational Content",
      impactReports: "Impact Reports",
      regionalStats: "Regional Statistics",
      profile: "Profile",
    },
    
    // Dashboard
    dashboard: {
      title: "NGO Dashboard - Farm Navigators",
      subtitle: "Monitor your organization's impact on Angolan agriculture",
      stats: {
        farmersReached: "Farmers Reached",
        agriflixVideos: "AgriFlix Videos",
        totalViews: "Total Views",
        provincesCovered: "Provinces Covered",
        monthlyGrowth: "+23% this month",
        newThisMonth: "new this month",
        vsLastMonth: "+156% vs last month",
        nationalCoverage: "national coverage",
      },
      sections: {
        regionalImpact: "Regional Impact",
        mostWatchedContent: "Most Watched Content",
        quickActions: "Quick Actions",
      },
      categories: {
        water: "Water",
        planting: "Planting",
        protection: "Protection",
        soil: "Soil",
      },
      actions: {
        uploadVideo: "Upload Video",
        createReport: "Create Report",
        viewMaps: "View Maps",
        manageContent: "Manage Content",
      },
    },
    
    // Regional Maps
    regionalMaps: {
      title: "Regional Maps",
      subtitle: "Visualize regional data and your NGO's impact",
      filters: {
        province: "Province",
        timeRange: "Time Range",
        dataType: "Data Type",
      },
      dataTypes: {
        farmerDensity: "Farmer Density",
        contentEngagement: "Content Engagement",
        cropDistribution: "Crop Distribution",
        weatherPatterns: "Weather Patterns",
      },
    },
    
    // Educational Content
    educationalContent: {
      title: "Educational Content",
      subtitle: "Manage your videos and educational materials",
      tabs: {
        myVideos: "My Videos",
        published: "Published",
        drafts: "Drafts",
        analytics: "Analytics",
      },
      videoStats: {
        views: "views",
        likes: "likes",
        shares: "shares",
        duration: "duration",
        uploadDate: "upload date",
      },
    },
    
    // Impact Reports
    impactReports: {
      title: "Impact Reports",
      subtitle: "Analyze your actions' impact on the community",
      reportTypes: {
        monthly: "Monthly",
        quarterly: "Quarterly",
        annual: "Annual",
        custom: "Custom",
      },
      metrics: {
        reach: "Reach",
        engagement: "Engagement",
        outcomes: "Outcomes",
        feedback: "Feedback",
      },
    },
  },
};

// Tradução em Umbundu (UMB) - Uma das línguas nacionais mais faladas
export const umb: Translations = {
  companyName: "Farm Navigators",
  navigation: {
    home: "Ekaya",
    features: "Ovindji",
    about: "Vosi",
    contact: "Okulonga",
    demos: "Ovinduka",
    download: "Okuwila"
  },
  hero: {
    title: "Kundula Olima Wove nge Ondandu ya NASA",
    subtitle: "🚀 Okuvarula olima wa Angola nge teknolojia ya mbelu",
    description: "Plataforma yose ey'olonga ondandu ya satelite ya NASA nge intelijensia artificial oku simbula olima wove. Farm Tinder, okulola tempo, ovideo vokumanya ne vindi vyambu.",
    ctaPrimary: "Okutangela",
    ctaSecondary: "Okulola Ovinduka",
    watchDemo: "▶️ Okulola Demo"
  },
  features: {
    title: "Ovindji Vyamukuwa vye Olima Wokumanya",
    subtitle: "Vyose ovy'okulinga oku simbula olima wove",
    farmTinder: {
      title: "Farm Tinder",
      description: "Ovinduka vye otunda vo sikwa nge ondandu ya NASA, elunga ne tempo ya elunga yove",
      benefits: ["Okulonga wokumanya", "Ondandu ya NASA", "Ovinduka vyahenda"]
    },
    weather: {
      title: "Okulola Tempo",
      description: "Ondandu ya NASA ye tempo ya lelu: ombela, ovisu, ovyatu vya elunga ne ovinduka vye ofesa",
      benefits: ["Okulola wokweli", "Ovinduka vy'otoma", "Ondandu ya tempo ya lelu"]
    },
    agriflix: {
      title: "AgriFlix",
      description: "Bibliteka ye ovideo vye okumanya vokupfukunuka mu kimbundu ne ovilimi vya Angola",
      benefits: ["Video vye okonga", "Ovilimi vyambu", "Ovindji vya henda"]
    },
    alerts: {
      title: "Ovinduka Vyokumanya",
      description: "Sistema ye ovinduka nge AI vy'ofesa, ondengue ne tempo yohenda",
      benefits: ["AI yomukuwa", "Okupevita ofesa", "Ovinduka vye push"]
    },
    community: {
      title: "Komunidade ye Valima",
      description: "Okulonga ne valima vambu, okukatana vivakululo ne okumanya ovindji vyokweli",
      benefits: ["Rede social ye valima", "Okukatana vivakululo", "Forum yokumanya"]
    },
    marketplace: {
      title: "Oluseka lwe Olima",
      description: "Okusoma ne okuhonjola ovindji vye olima mu plataforma nge ovihalo vyokweli",
      benefits: ["Okuhonjola wokweli", "Ovihalo vyokweli", "Logistica yolongua"]
    }
  },
  videoDemo: {
    title: "Okulola Farm Navigators mu Vyalo",
    subtitle: "Ovinduka vyose vye komena teknolojia ya NASA ekumana okuvarula olima wa Angola",
    thumbnailTitle: "NASA Applied Sciences",
    thumbnailDescription: "Ondandu ya satelite • Olima wokumanya • Teknolojia ya mbelu",
    duration: "8:54",
    quality: "HD 1080p",
    source: "NASA",
    stats: {
      duration: "Okuwonga kwe video",
      dataSource: "Ondandu yokweli",
      quality: "Okuwa wokamukuwa"
    }
  },
  interactiveDemos: {
    title: "Ovinduka Vyokusakulula",
    subtitle: "Okulola komena Farm Navigators yisombela mu vyalo nge ovinduka vyetu vyokusakulula",
    farmTinder: {
      title: "Farm Tinder",
      description: "Okuseketelela oku soba otunda wyamukuwa we elunga yove sikua mu ondandu ya NASA",
      features: ["Ovinduka vyahenda", "Ondandu ya tempo ya NASA", "Ovinduka vye osoma", "Interface ndje Tinder"],
      button: "Okulinga Farm Tinder →"
    },
    agriflix: {
      title: "AgriFlix",
      description: "Bibliteka ye ovideo vye okumanya vokupfukunuka mu kimbundu ne ovilimi vya Angola",
      features: ["Video vye minuto 1-4", "Ovindji vye olima vyokonga", "Ovilimi vyambu", "Player wokulonga"],
      button: "Okulola AgriFlix →"
    },
    seriousGame: {
      title: "Game",
      description: "Oludyalo lwe okumanya lwalilonga komena okuyisa ondandu ya satelite mu okusoba olima wokumanya",
      features: ["Ovinduka 8 vyokweli", "Ombilo mu Kwanzas", "Ovinduka vye okumanya", "Okukula ye nivel"],
      button: "Okulanga Agora →"
    }
  },
  download: {
    title: "Okuwila Farm Navigators",
    subtitle: "Vyali mu plataforma yose",
    description: "Okupata vyose vye Farm Navigators mu aparelho wove wokusakula. App ya mobile yose ne versão desktop profisional.",
    platforms: {
      ios: "iOS App Store",
      android: "Google Play",
      desktop: "Desktop (Windows/Mac)",
      game: "Game"
    },
    stats: {
      downloads: "10K+ Oviwila",
      rating: "4.8★ Okulola",
      countries: "Oipais 5"
    }
  },
  footer: {
    description: "Okuvarula olima wa Angola nge teknolojia ya mbelu ya NASA ne intelijensia artificial.",
    sections: {
      product: {
        title: "Produto",
        links: ["Farm Tinder", "AgriFlix", "Game", "Okulola", "Ovinduka", "Oluseka"]
      },
      company: {
        title: "Kompanha",
        links: ["Vosi", "Omisão Yetu", "Equipe", "Ovimbundu", "Imprensa", "Blog"]
      },
      support: {
        title: "Ovalimbua",
        links: ["Centro ya Valimbua", "Dokumentação", "API", "Status", "Okulonga", "Komunidade"]
      },
      social: {
        title: "Redes Sociais"
      }
    },
    contact: {
      phone: "+244 900 000 000",
      email: "okulonga@farmnavigators.ao",
      address: "Luanda, Angola"
    },
    copyright: "© 2025 Farm Navigators. Ovindji vyose vyalimbua."
  },
  language: {
    select: "Okusakula ulimi",
    current: "Umbundu"
  },
  common: {
    learnMore: "Okumanya Vyindi",
    getStarted: "Okutangela",
    comingSoon: "Yikwisa",
    loading: "Okukulula...",
    error: "Okuhenda",
    tryAgain: "Okulinga Kufemi",
    close: "Okufeka",
    play: "Okutangela",
    pause: "Okuyima"
  },
  stats: {
    productivity: {
      value: "25%",
      label: "Okukula kwe osoma"
    },
    languages: {
      value: "Ovilimi 5",
      label: "Kimbundu, Inglês + ovilimi vya Angola"
    },
    coverage: {
      value: "Oiprovínsia 18",
      label: "Mu Angola yose"
    },
    realtime: {
      value: "24/7",
      label: "Ovinduka vye tempo ya lelu"
    }
  },
  howItWorks: {
    title: "Komena Yisombela",
    subtitle: "Teknolojia yokupfukunuka vy'ovyalo vyokamukuwa",
    mobile: {
      title: "Ku Valima",
      subtitle: "App Mobile Yokupfukunuka",
      steps: [
        { title: "Okukandula Yokupfukunuka", description: "Olonga ombanda wove ne tipo ye elunga" },
        { title: "Ovinduka", description: "Okuwila ovinduka sikua mu ondandu ya NASA" },
        { title: "Okumanya ne Okulima", description: "Okulola video ne okuhepa ovindji vyokumanya" },
        { title: "Okulola Ovyalo", description: "Okulola okukula ne osoma" }
      ]
    },
    web: {
      title: "Ku ONGs ne Governo",
      subtitle: "Plataforma Web Yokamukuwa",
      steps: [
        { title: "Mapas Yokulonga", description: "Okulola ondandu ye olima ne tempo ye munda" },
        { title: "Okulonga Ovindji", description: "Okuwila ovideo vokumanya ne ovindji vyokumesisa" },
        { title: "Ovikakolohono ne Analytics", description: "Ondandu ye osoma ne impacto vy'ovindji vya povo" },
        { title: "Ovalimbua vye Okusoba", description: "Okuyisa ondandu yokweli ku programas ne ovimbo" }
      ]
    },
    cta: "Okupapila okuvarula olima? Okwisu netu lelu"
  },
  impact: {
    badge: "Okuvarula kwa Inação",
    title: "Impacto mu Povo wa Angola 🇦🇴",
    subtitle: "Teknolojia ya mbelu ne inovação digital vyolongua ku kuvarula olima ne okufutila onjala",
    cards: {
      production: {
        title: "Osoma Yambu, Dinheiro Yambu",
        description: "Valima yiva okumanya ky'okulima, ovoleli yokulima ne komena okusimbula → mabixe mashoko, osoma yambu",
        metric: "+40% osoma"
      },
      inclusion: {
        title: "Inclusão Digital ye Sipindu",
        description: "Okukolola kwa telefone yekupfukunuka (USSD), okulonga teknolojia ku mbanda yekukina internet",
        metric: "100% okukolola"
      },
      education: {
        title: "Okumesisa Yokupfukunuka",
        description: "Mini-aulas yokupfiki ne yokupfukunuka, mu kimputukesi ne ovilimi vya henda (Kimbundu, Umbundu, Kikongo)",
        metric: "+3 ovilimi"
      },
      sustainability: {
        title: "Sustentabilidade",
        description: "Okulola okutalela kwa elunga ne okulwa okuyuvika kwa elunga",
        metric: "Eco-friendly"
      },
      hunger: {
        title: "Okufuta Onjala",
        description: "Okuvihisa osoma wa ovyakudia ne okusenguela kwombela wa ovyakudia wa inação",
        metric: "Onjala yokupfiki"
      },
      empowerment: {
        title: "Okuviha Kamukuwa Sipindu",
        description: "Okumesisa valima mu ovindji vyakajinja ne sustentável ku kamukuwa wa economia",
        metric: "Okumanya yambu"
      }
    },
    stats: {
      farmers: {
        value: "500K+",
        label: "Valima Vyacihumba"
      },
      villages: {
        value: "2,000+",
        label: "Ovijinda Vyacikola"
      },
      productivity: {
        value: "+65%",
        label: "Okuvihisa Osoma"
      },
      sustainability: {
        value: "15+",
        label: "Ovikama Vyakutanga"
      }
    }
  },
  partners: {
    title: "Ovikama Vyetu",
    subtitle: "Okulonga kwa estratégia ku impacto wa inação",
    government: "Governo",
    technology: "Teknolojia",
    international: "Internacional",
    academic: "Academia",
    items: [
      {
        name: "MINAGRIF", 
        description: "Ministério ya Agricultura ne Florestas - Vikama vya instituição vy'ovindji vye olima",
        type: "Governo"
      },
      {
        name: "NASA Harvest",
        description: "Programa ya NASA ye olima ne kulya yokweli - Ondandu ya satelite",
        type: "Teknolojia"
      },
      {
        name: "FAO Angola",
        description: "Organização yas Nações Unidas ye Agricultura ne Kulya",
        type: "Internacional"
      },
      {
        name: "Universidade Agostinho Neto",
        description: "Opesquisa ye olima ne okumesisa kwa técnica",
        type: "Academia"
      }
    ],
    cta: {
      title: "Okwisu ku Rede yetu ya Ovikama",
      description: "Okupapila kwa revolução ye olima ne okuhepa ku desenvolvimento sustentável ya Angola",
      primaryButton: "Okupapila Vikama",
      secondaryButton: "Okumanya Yambu"
    },
    stats: {
      activePartners: "Ovikama Vyakutanga",
      provinces: "Oviprovíncias Vyacihumba",
      beneficiaries: "Valima Vyacihumba",
      yearsActive: "Omaka ya Kusolonga"
    }
  },
  ctaDownload: {
    title: "Okupapila Okuvarula Olima Wove?",
    subtitle: "Okwisu kwa valima yivasikola okuyisa teknolojia ya mbelu ya NASA ku kuvihisa osoma ne okutalela elunga.",
    buttons: {
      ios: "Okuwila ku iOS",
      android: "Okuwila ku Android", 
      desktop: "Okuwila ku Desktop",
      game: "Ojogo Desktop"
    },
    offline: {
      title: "Kimbua internet? Kimbua problema!",
      description: "Okuhepa AGRI ku +244 900 000 000 sikua mu SMS"
    }
  },
  seriousGameFull: {
    welcome: {
      title: "🎮 Olutelelo: Okusonga Osinda",
      subtitle: "Olutelelo wa Olima Angola",
      description: "Fila okulima kwa mema na vya NASA. Londolola olima.",
      features: {
        nasaData: { title: "Vya NASA", description: "NDVI, ombela, omuva" },
        realScenarios: { title: "Angola", description: "Huambo, Benguela, Uíge" },
        scientificFeedback: { title: "Okulonga", description: "Londolola fahi" },
        budgetManagement: { title: "Okuwila", description: "Kwanza" }
      },
      howToPlay: {
        title: "Okutelela",
        steps: {
          analyze: "1. Hendelela vya NASA",
          decide: "2. Fila okufika",
          manage: "3. Wila okukonga",
          learn: "4. Londolola"
        }
      },
      startButton: "🚀 Tonda",
      duration: "Ovala: ~15-20 omuaso"
    },
    ui: {
      indicators: { water: "Ombela", soil: "Ovunda", growth: "Okuvila", score: "Onumelo", budget: "Okuwila" },
      status: {
        title: "📊 Oko", waterReserve: "Ombela", soilHealth: "Ovunda",
        cropGrowth: "Okuvila", day: "Olusiku", season: "Epoko", budgetRemaining: "Okuwila"
      },
      feedback: { title: "Okulonga" },
      decisions: { title: "Okufika", free: "💚 Teli", insufficientBudget: "Okuwila tondilua" },
      nasaPanel: {
        title: "🛰️ NASA", soilMoisture: "Ovunda", ndvi: "NDVI",
        precipitation: "Omuva", temperature: "Okuviya"
      },
      weather: { temperature: "Okuviya", rainfall: "Omuva", humidity: "Ombela" }
    },
    scenarios: {
      week1: { title: "Ovunda", description: "Ovunda konga.", decisions: { deepTillage: "Ovunda", organicMatter: "Olima", waitRain: "Omuva" } },
      week2: { title: "Olima", description: "Olima kongo.", decisions: { droughtResistant: "Olima", highYield: "Olima", localVariety: "Olima" } },
      week4: { title: "Okuvila", description: "Okuvila kongo.", decisions: { precisionIrrigation: "Ombela", mulching: "Ovunda", foliarNutrition: "Olima" } },
      week6: { title: "Ombili", description: "Ombili kongo.", decisions: { biologicalControl: "Ombili", targetedPesticide: "Ombili", monitoring: "Ombili" } },
      week8: { title: "Okuvila", description: "Okuvila kongo.", decisions: { variableRate: "Ovunda", uniformApplication: "Ovunda", organicFertilizer: "Ovunda" } },
      week10: { title: "Ombela", description: "Ombela kongo.", decisions: { drainageSystem: "Ombela", temporaryCover: "Ombela", earlyHarvestPartial: "Okuwonga" } },
      week12: { title: "Okuwonga", description: "Okuwonga kongo.", decisions: { immediateHarvest: "Okuwonga", selectiveHarvest: "Okuwonga", waitPerfectTiming: "Okuwonga" } },
      postHarvest: { title: "Epoko", description: "Epoko kongo.", decisions: { coverCrops: "Olima", cropRotation: "Olima", soilAnalysis: "Ovunda" } }
    },
    feedback: {
      deepTillage: "Omema!", organicMatter: "Okulonga omema!", waitRain: "Etelele.",
      droughtResistant: "Omema!", highYield: "Omema!", localVariety: "Okulonga!",
      precisionIrrigation: "Omema!", mulching: "Okulonga!", foliarNutrition: "Omema!",
      biologicalControl: "Omema havi!", targetedPesticide: "Omema.", monitoring: "Okulonga!",
      variableRate: "Omema!", uniformApplication: "Omema.", organicFertilizer: "Okulonga!",
      drainageSystem: "Omema!", temporaryCover: "Omema.", earlyHarvestPartial: "Okulonga!",
      immediateHarvest: "Omema!", selectiveHarvest: "Omema havi!", waitPerfectTiming: "Etelele.",
      coverCrops: "Okulonga havi!", cropRotation: "Okulonga!", soilAnalysis: "Omema!"
    },
    endGame: {
      title: "🏆 Okulonga! Epoko ye kwa.",
      subtitle: "Osoma ya oko lyaku",
      results: {
        finalScore: "Onumelo", totalInvested: "Okuwila", budgetEfficiency: "Okuwila",
        sustainability: "Okulonga", waterManagement: "Ombela",
        excellent: "🏆 Omema havi", good: "✅ Omema", regular: "⚠️ Omema",
        needsImprovement: "❌ Kuvelela", critical: "❌ Kuvelela"
      },
      performance: { title: "📊 Onumelo" },
      actions: {
        playAgain: "🔄 Telela hange", backHome: "🏠 Vutuka",
        downloadApp: "🌱 Londolola: tunga Farm Navigators!"
      }
    },
    common: {
      kz: "Kz", points: "pts", percentage: "%", day: "Olusiku", week: "Ovikela",
      level: "Osila", season: "Epoko",
      seasons: { planting: "Olima", growing: "Okuvila", harvest: "Okuwonga" }
    }
  },
  agriFlixFull: {
    header: {
      title: "AgriFlix 🎥",
      subtitle: "Okulongela olima Angola",
      searchPlaceholder: "Ukela vya olima..."
    },
    filters: {
      title: "Ohengelo", clearAll: "Hengela vahi", category: "Ondunge", language: "Olulimi", difficulty: "Osila", activeFilters: "Ohengelo:"
    },
    categories: {
      all: "Vahi", soilPrep: "Ovunda", irrigation: "Ombela", pestControl: "Ombili", harvesting: "Okuwonga", sustainability: "Okulonga", technology: "Ovitumbu", composting: "Ovunda"
    },
    difficulty: { basic: "Osimbandula", intermediate: "Okatikati", advanced: "Osandule" },
    languages: { all: "Vahi", portuguese: "Olupulukesi", umbundu: "Olumbundu", kimbundu: "Olukimbundu", lunda: "Olulunda" },
    player: { play: "Telela", pause: "Etelele", like: "Kuvila", share: "Kasakanisa", download: "Tunga", transcript: "Ekulongela", backToList: "Vutuka", videoInfo: "Okulonga", instructor: "Ombolongeli", duration: "Ovala", views: "Ohengelo", likes: "Okuvila", category: "Ondunge", tags: "Ovalombelo" },
    videos: {
      soilPrep: { title: "Ovunda ya olima", description: "Longolola ovunda ya mema." },
      irrigation: { title: "Ombela ya mema", description: "Ombela ya kuvila." },
      pestControl: { title: "Ombili ya ovunda", description: "Ombili kufita." },
      cropRotation: { title: "Olima sila", description: "Olima kwa mema." },
      waterConservation: { title: "Ombela konga", description: "Ombela ya kuvila." },
      nasaData: { title: "NASA vya olima", description: "NASA kwa olima." },
      composting: { title: "Ovunda mema", description: "Ovunda kuvila." },
      organicFarming: { title: "Olima Angola", description: "Olima kwa mema." }
    },
    messages: { noResults: "Ovya kimbamba", noResultsDesc: "Ovya tondilua.", loading: "Okukonga...", error: "Ekuluvila", tryFilters: "Hemelela ohengelo." },
    common: { views: "ohengelo", likes: "okuvila", share: "kasakanisa", download: "tunga", watch: "telela", instructor: "ombolongeli", back: "vutuka" }
  },
  
  // FarmTinder Full Application - Versão Simplificada Umbundu
  farmTinderFull: {
    header: { title: "Farm Tinder 🌱❤️", subtitle: "Olima mema", progress: "{current} ya {total}" },
    card: { nasaConfidence: "NASA", scientificName: "ocitema", idealConditions: "Mema:", bestPlantingSeason: "Otumba olima", yieldUnit: "kg/ha", profitUnit: "lupakasa/ha", advantages: "✅ Mema:", considerations: "⚠️ Katuluka:" },
    climate: { rainfall: "Ochimbanda:", temperature: "Otete:", humidity: "Ombela:" },
    actions: { reject: "Kutula", accept: "Kutambula", rejectButton: "Olima kwa", acceptButton: "Olima!" },
    results: { title: "Farm Tinder 🌱❤️", subtitle: "NASA ya olima", selectedCrops: "Olima ({count})", noSelection: { title: "Olima kimbamba", subtitle: "Tondilua olima mema" }, nextSteps: { title: "Okuhenga", items: ["✅ Olima", "✅ NASA", "✅ AgriFlix", "✅ Simulador", "✅ Cooperativas"] }, buttons: { tryAgain: "Tondilua", backHome: "Vutuka" } },
    crops: {
      corn: { name: "Omilho", description: "Kuria mema Angola", pros: ["Kuria mema", "Otete mema", "Kuria lumbu"], considerations: ["Ombela", "Otumba"], plantingSeason: "Outubro - Dezembro" },
      cassava: { name: "Omanioka", description: "Olima kwa solo", pros: ["Ombela kwa", "Solo", "Otumba lumbu"], considerations: ["Lupakasa", "Kutula"], plantingSeason: "Novembro - Janeiro" },
      beans: { name: "Omakunde", description: "Kuria mema", pros: ["Kuria", "Solo", "90 dias"], considerations: ["Ombela", "Katuluka"], plantingSeason: "Setembro - Novembro" },
      sweetPotato: { name: "Orimbanda", description: "Kuria mema", pros: ["Vitaminas", "Solo", "Kuria"], considerations: ["Solo", "Konga"], plantingSeason: "Março - Maio" },
      tomato: { name: "Otomate", description: "Lupakasa mema", pros: ["Lupakasa", "Kuria", "Lumbu"], considerations: ["Ombela", "Katuluka", "Lupakasa"], plantingSeason: "Maio - Julho" }
    },
    demo: { info: "💡 Farm Tinder Demo - NASA ya Angola olima" }
  },
  
  // Login Page - Versão Simplificada Umbundu
  login: {
    header: { title: "Farm Navigators Angola", subtitle: "NASA ya olima", backButton: "Vutuka ekaya", changeBackground: "Tuka omaka" },
    form: { emailLabel: "Email", emailPlaceholder: "email@", passwordLabel: "Sima", passwordPlaceholder: "••••••••", loginButton: "Kinjila", loginButtonLoading: "Okukinjila..." },
    quickLogin: { title: "Demo - Kinjila:", adminButton: "Admin", ngoButton: "ONG", credentials: { admin: "Admin: admin@farmnavigators.ao / admin123", ngo: "ONG: ong@farmnavigators.ao / ong123" } },
    errors: { invalidCredentials: "Sima kimbamba. Hemelela demo.", loginError: "Ekuluvila kinjila. Tondilua.", required: "Otondile oviya" },
    footer: { copyright: "© 2025 Farm Navigators Angola. Omvelo vosi." }
  },
  
  // Placeholders vazios - línguas nacionais não acessam admin/NGO
  admin: {
    common: { dashboard: "", users: "", content: "", reports: "", settings: "", profile: "", search: "", filter: "", export: "", save: "", cancel: "", delete: "", edit: "", view: "", approve: "", reject: "", loading: "", error: "", success: "", warning: "" },
    navigation: { main: "", others: "", dashboard: "", userManagement: "", contentModeration: "", systemReports: "", systemSettings: "", profile: "" },
    dashboard: { title: "", subtitle: "", timeRanges: { "24h": "", "7d": "", "30d": "", "90d": "" }, stats: { totalUsers: "", activeUsers: "", totalNGOs: "", totalContent: "", systemHealth: "", apiCalls: "" }, charts: { userGrowth: "", contentStats: "", systemAlerts: "", recentActivity: "" }, alerts: { high_latency: "", backup_completed: "", new_ngo: "", storage_warning: "" }, activity: { video_upload: "", new_registration: "", report_generated: "", content_approved: "" } },
    userManagement: { title: "", subtitle: "", tabs: { farmers: "", ngos: "", admins: "" }, actions: { addUser: "", exportData: "", bulkActions: "" }, userDetails: { name: "", email: "", role: "", status: "", registrationDate: "", lastLogin: "", location: "" }, status: { active: "", inactive: "", suspended: "" } },
    contentModeration: { title: "", subtitle: "", tabs: { pending: "", approved: "", rejected: "" }, contentTypes: { video: "", article: "", comment: "" }, moderationActions: { approve: "", reject: "", needsReview: "" } }
  },
  ngo: {
    common: { dashboard: "", maps: "", content: "", reports: "", statistics: "", profile: "", farmers: "", videos: "", impact: "", reach: "", coverage: "" },
    navigation: { dashboard: "", regionalMaps: "", educationalContent: "", impactReports: "", regionalStats: "", profile: "" },
    dashboard: { title: "", subtitle: "", stats: { farmersReached: "", agriflixVideos: "", totalViews: "", provincesCovered: "", monthlyGrowth: "", newThisMonth: "", vsLastMonth: "", nationalCoverage: "" }, sections: { regionalImpact: "", mostWatchedContent: "", quickActions: "" }, categories: { water: "", planting: "", protection: "", soil: "" }, actions: { uploadVideo: "", createReport: "", viewMaps: "", manageContent: "" } },
    regionalMaps: { title: "", subtitle: "", filters: { province: "", timeRange: "", dataType: "" }, dataTypes: { farmerDensity: "", contentEngagement: "", cropDistribution: "", weatherPatterns: "" } },
    educationalContent: { title: "", subtitle: "", tabs: { myVideos: "", published: "", drafts: "", analytics: "" }, videoStats: { views: "", likes: "", shares: "", duration: "", uploadDate: "" } },
    impactReports: { title: "", subtitle: "", reportTypes: { monthly: "", quarterly: "", annual: "", custom: "" }, metrics: { reach: "", engagement: "", outcomes: "", feedback: "" } }
  }
};

// Tradução em Kimbundu (KMB) - Outra língua nacional importante
export const kmb: Translations = {
  companyName: "Farm Navigators",
  navigation: {
    home: "Muzubu",
    features: "Mazenga",
    about: "Kuetu",
    contact: "Kusolongesa",
    demos: "Masolonga",
    download: "Kutula"
  },
  hero: {
    title: "Soba Kulima Kuaku mu Mazenga a NASA",
    subtitle: "🚀 Kusobela kulima kua Angola mu teknolojia ya mbelu",
    description: "Plataforma yose yi solonga mazenga ya satelite ya NASA mu intelijensia artificial ku soba kulima kuaku. Farm Tinder, kusolonga tempo, avideo a kumanya ne mazenga amaxingi.",
    ctaPrimary: "Kutangisa",
    ctaSecondary: "Kusolonga Masolonga",
    watchDemo: "▶️ Kusolonga Demo"
  },
  features: {
    title: "Mazenga ya Nkutu ya Kulima ya Manya",
    subtitle: "Kima kyose kya kuzenga ku soba kulima kuaku",
    farmTinder: {
      title: "Farm Tinder",
      description: "Masolonga ya mahunda ma sikua mu mazenga ya NASA, museke ne tempo ya museke waku",
      benefits: ["Kusolonga kua manya", "Mazenga ya NASA mu kimbundu", "Masolonga ya muhatu"]
    },
    weather: {
      title: "Kusolonga Tempo",
      description: "Mazenga ya NASA ya tempo ya sambunu: mvula, muvilu, maza ya museke ne masolonga ya mabixe",
      benefits: ["Kusolonga kua kieli", "Masolonga ya mubanga", "Mazenga ya tempo ya sambunu"]
    },
    agriflix: {
      title: "AgriFlix",
      description: "Bibliteka ya avideo ya kumanya ya mufupi mu kimbundu ne maliba ya Angola",
      benefits: ["Video ya kuzenga", "Maliba maxingi", "Mazenga ya muhenda"]
    },
    alerts: {
      title: "Masolonga ya Manya",
      description: "Sistema ya masolonga mu AI ya mabixe, maloba ne tempo ya kihenda",
      benefits: ["AI ya makutu", "Kufutila mabixe", "Masolonga ya push"]
    },
    community: {
      title: "Kilamba kya Kulima",
      description: "Kusolonga ne bakulima bamaxingi, kukatana makuaxikilu ne kumanya mazenga ya kieli",
      benefits: ["Rede social ya bakulima", "Kukatana makuaxikilu", "Forum ya kumanya"]
    },
    marketplace: {
      title: "Luseka lua Kulima",
      description: "Kusoma ne kuendesa bima bya kulima kimbamba mu plataforma mu mahongo ya kieli",
      benefits: ["Kuendesa kua kieli", "Mahongo ya kieli", "Logistica ya kumubanda"]
    }
  },
  videoDemo: {
    title: "Kusolonga Farm Navigators mu Mazenga",
    subtitle: "Masolonga yose ya komena teknolojia ya NASA ikumana kusobela kulima kua Angola",
    thumbnailTitle: "NASA Applied Sciences",
    thumbnailDescription: "Mazenga ya satelite • Kulima kua manya • Teknolojia ya mbelu mu kuzenga",
    duration: "8:54",
    quality: "HD 1080p",
    source: "NASA",
    stats: {
      duration: "Kuangana kua video",
      dataSource: "Mazenga ya kieli",
      quality: "Kuzenga kua makutu"
    }
  },
  interactiveDemos: {
    title: "Masolonga ya Kusakulula",
    subtitle: "Kusolonga komena Farm Navigators isombela mu mazenga ne masolonga yetu ya kusakulula",
    farmTinder: {
      title: "Farm Tinder",
      description: "Kusakulula ku soba mahunda yamakutu ya museke waku sikua mu mazenga ya NASA",
      features: ["Masolonga ya muhatu", "Mazenga ya tempo ya NASA", "Masolonga ya masoma", "Interface ndje Tinder"],
      button: "Kulinga Farm Tinder →"
    },
    agriflix: {
      title: "AgriFlix",
      description: "Bibliteka ya avideo ya kumanya ya mufupi mu kimbundu ne maliba ya Angola",
      features: ["Video ya minuto 1-4", "Mazenga ya kulima ya kuzenga", "Maliba maxingi", "Player wa kusolonga"],
      button: "Kusolonga AgriFlix →"
    },
    seriousGame: {
      title: "Game",
      description: "Kilombo kya kumanya kya solonga komena kuendesa mazenga ya satelite mu kusoba kulima kua manya",
      features: ["Masolonga 8 ya kieli", "Dinheiro mu Kwanzas", "Masolonga ya kumanya", "Kukula ya nivel"],
      button: "Kilomba Agora →"
    }
  },
  download: {
    title: "Kutula Farm Navigators",
    subtitle: "Kuyali mu plataforma yose",
    description: "Kupata yose ya Farm Navigators mu aparelho waku wa kusakula. App ya mobile yose ne versão desktop profisional.",
    platforms: {
      ios: "iOS App Store",
      android: "Google Play",
      desktop: "Desktop (Windows/Mac)",
      game: "Game"
    },
    stats: {
      downloads: "10K+ Matula",
      rating: "4.8★ Kusolonga",
      countries: "Mipais 5"
    }
  },
  footer: {
    description: "Kusobela kulima kua Angola mu teknolojia ya mbelu ya NASA ne intelijensia artificial.",
    sections: {
      product: {
        title: "Produto",
        links: ["Farm Tinder", "AgriFlix", "Game", "Kusolonga", "Masolonga", "Luseka"]
      },
      company: {
        title: "Kompanha",
        links: ["Kuetu", "Misuadu Yetu", "Equipe", "Mazenga", "Imprensa", "Blog"]
      },
      support: {
        title: "Mavalimbua",
        links: ["Centro ya Mavalimbua", "Dokumentação", "API", "Status", "Kusolonga", "Kilamba"]
      },
      social: {
        title: "Redes Sociais"
      }
    },
    contact: {
      phone: "+244 900 000 000",
      email: "kusolonga@farmnavigators.ao",
      address: "Luanda, Angola"
    },
    copyright: "© 2025 Farm Navigators. Mazenga yose yavalimbua."
  },
  language: {
    select: "Kusakula liloba",
    current: "Kimbundu"
  },
  common: {
    learnMore: "Kumanya Kindi",
    getStarted: "Kutangisa",
    comingSoon: "Yikwisa",
    loading: "Kukulula...",
    error: "Kihenda",
    tryAgain: "Kulinga Kufemi",
    close: "Kufeka",
    play: "Kutangisa",
    pause: "Kuyima"
  },
  stats: {
    productivity: {
      value: "25%",
      label: "Kukula kua masoma"
    },
    languages: {
      value: "Maloba 5",
      label: "Kimbundu, Inglês + maloba ya Angola"
    },
    coverage: {
      value: "Miprovínsia 18",
      label: "Mu Angola yose"
    },
    realtime: {
      value: "24/7",
      label: "Masolonga ya tempo ya sambunu"
    }
  },
  howItWorks: {
    title: "Komena Kisombela",
    subtitle: "Teknolojia ya mufupi ya mazenga makutu",
    mobile: {
      title: "Ku Bakulima",
      subtitle: "App Mobile ya Mufupi",
      steps: [
        { title: "Kukandula kya Mufupi", description: "Kulonga mbanza waku ne tipo ya museke" },
        { title: "Masolonga", description: "Kutula masolonga sikua mu mazenga ya NASA" },
        { title: "Kumanya ne Kulima", description: "Kusolonga video ne kuhepa mazenga ya manya" },
        { title: "Kusolonga Mazenga", description: "Kusolonga kukula ne masoma" }
      ]
    },
    web: {
      title: "Ku ONGs ne Governo",
      subtitle: "Plataforma Web ya Makutu",
      steps: [
        { title: "Mapas ya Kusolonga", description: "Kusolonga mazenga ya kulima ne tempo ya munda" },
        { title: "Kusolonga Mazenga", description: "Kutula avideo ya kumanya ne mazenga ya kumesisa" },
        { title: "Makakolohono ne Analytics", description: "Mazenga ya masoma ne impacto ya mazenga ya povo" },
        { title: "Mavalimbua ya Kusoba", description: "Kuyisa mazenga ya kieli ku programas ne mabimbo" }
      ]
    },
    cta: "Kupapila kusobela kulima? Kwisu netu lelu"
  },
  impact: {
    badge: "Kusobela kwa Inação",
    title: "Impacto mu Povo wa Angola 🇦🇴",
    subtitle: "Teknolojia ya mbelu ne inovação digital yasolonga ku kusobela kulima ne kufutila njala",
    cards: {
      production: {
        title: "Masoma Maxingi, Dinheiro Maxingi",
        description: "Bakulima yiva kumanya kya kulima, tempo ya kulima ne komena kusimbula → mabixe mashoko, masoma maxingi",
        metric: "+40% masoma"
      },
      inclusion: {
        title: "Inclusão Digital ya Sipindu",
        description: "Kukolola kwa telefone ya mufupi (USSD), kusolonga teknolojia ku mbanza yakukina internet",
        metric: "100% kukolola"
      },
      education: {
        title: "Kumesisa kya Mufupi",
        description: "Mini-aulas ya mufupi ne ya mufupi, mu kimputukesi ne maliba ya muhenda (Kimbundu, Umbundu, Kikongo)",
        metric: "+3 maliba"
      },
      sustainability: {
        title: "Sustentabilidade",
        description: "Kusolonga kutalela kwa museke ne kulwa kuyuvika kwa museke",
        metric: "Eco-friendly"
      },
      hunger: {
        title: "Kufuta Njala",
        description: "Kuvihisa masoma wa makulya ne kusenguela kwombela wa makulya wa inação",
        metric: "Njala ya mufupi"
      },
      empowerment: {
        title: "Kuviha Kamukuwa Sipindu",
        description: "Kumesisa bakulima mu mazenga ya kajinja ne sustentável ku kamukuwa wa economia",
        metric: "Kumanya maxingi"
      }
    },
    stats: {
      farmers: {
        value: "500K+",
        label: "Bakulima Bacihumba"
      },
      villages: {
        value: "2,000+",
        label: "Majinda Yacikola"
      },
      productivity: {
        value: "+65%",
        label: "Kuvihisa Masoma"
      },
      sustainability: {
        value: "15+",
        label: "Makama Yakutanga"
      }
    }
  },
  partners: {
    title: "Makama Yetu",
    subtitle: "Kusolonga kwa estratégia ku impacto wa inação",
    government: "Governo",
    technology: "Teknolojia",
    international: "Internacional",
    academic: "Academia",
    items: [
      {
        name: "MINAGRIF",
        description: "Ministério ya Agricultura ne Florestas - Makama ya instituição ya mazenga ya kulima",
        type: "Governo"
      },
      {
        name: "NASA Harvest",
        description: "Programa ya NASA ya kulima ne kulya ya kieli - Mazenga ya satelite",
        type: "Teknolojia"
      },
      {
        name: "FAO Angola",
        description: "Organização yas Nações Unidas ya Agricultura ne Kulya",
        type: "Internacional"
      },
      {
        name: "Universidade Agostinho Neto",
        description: "Pesquisa ya kulima ne kumesisa kwa técnica",
        type: "Academia"
      }
    ],
    cta: {
      title: "Kwisu ku Rede yetu ya Makama",
      description: "Kupapila kwa revolução ya kulima ne kuhepa ku desenvolvimento sustentável ya Angola",
      primaryButton: "Kupapila Makama",
      secondaryButton: "Kumanya Maxingi"
    },
    stats: {
      activePartners: "Makama Yakutanga",
      provinces: "Províncias Yacikola",
      beneficiaries: "Bakulima Bacihumba",
      yearsActive: "Miaka ya Kusolonga"
    }
  },
  ctaDownload: {
    title: "Kupapila Kusobola Kulima Waku?",
    subtitle: "Kwisu kwa bakulima yavasikola kuyisa teknolojia ya mbelu ya NASA ku kuvihisa masoma ne kutalela museke.",
    buttons: {
      ios: "Kutula ku iOS",
      android: "Kutula ku Android",
      desktop: "Kutula ku Desktop", 
      game: "Ojogo Desktop"
    },
    offline: {
      title: "Kimbamba internet? Kimbamba problema!",
      description: "Kuhepa AGRI ku +244 900 000 000 sikua mu SMS"
    }
  },
  seriousGameFull: {
    welcome: {
      title: "🎮 Jingu: Mukuxi wa Kima",
      subtitle: "Jingu ya Kilima Angola",
      description: "Sobolola kilima kya mema ni dya NASA. Jingisa kilima.",
      features: {
        nasaData: { title: "Dya NASA", description: "NDVI, mesu, mvula" },
        realScenarios: { title: "Angola", description: "Huambo, Benguela, Uíge" },
        scientificFeedback: { title: "Kujinga", description: "Jingisa mbutu" },
        budgetManagement: { title: "Kibanji", description: "Kwanza" }
      },
      howToPlay: {
        title: "Kujinga",
        steps: {
          analyze: "1. Mona dya NASA",
          decide: "2. Sobolola",
          manage: "3. Banji kibanji",
          learn: "4. Jingisa"
        }
      },
      startButton: "🚀 Banda",
      duration: "Tempu: ~15-20 minutos"
    },
    ui: {
      indicators: { water: "Mesu", soil: "Muxi", growth: "Mbongo", score: "Puntos", budget: "Kibanji" },
      status: {
        title: "📊 Kima", waterReserve: "Mesu", soilHealth: "Muxi",
        cropGrowth: "Mbongo", day: "Siku", season: "Tempu", budgetRemaining: "Kibanji"
      },
      feedback: { title: "Kujinga" },
      decisions: { title: "Kisobo", free: "💚 Kimbamba", insufficientBudget: "Kibanji kiadi" },
      nasaPanel: {
        title: "🛰️ NASA", soilMoisture: "Muxi", ndvi: "NDVI",
        precipitation: "Mvula", temperature: "Kutenda"
      },
      weather: { temperature: "Kutenda", rainfall: "Mvula", humidity: "Mesu" }
    },
    scenarios: {
      week1: { title: "Muxi", description: "Muxi wa banda.", decisions: { deepTillage: "Muxi", organicMatter: "Kilima", waitRain: "Mvula" } },
      week2: { title: "Kilima", description: "Kilima kya banda.", decisions: { droughtResistant: "Kilima", highYield: "Kilima", localVariety: "Kilima" } },
      week4: { title: "Mbongo", description: "Mbongo ya banda.", decisions: { precisionIrrigation: "Mesu", mulching: "Muxi", foliarNutrition: "Kilima" } },
      week6: { title: "Bibila", description: "Bibila bya banda.", decisions: { biologicalControl: "Bibila", targetedPesticide: "Bibila", monitoring: "Bibila" } },
      week8: { title: "Mbongo", description: "Mbongo ya banda.", decisions: { variableRate: "Muxi", uniformApplication: "Muxi", organicFertilizer: "Muxi" } },
      week10: { title: "Mesu", description: "Mesu ya banda.", decisions: { drainageSystem: "Mesu", temporaryCover: "Mesu", earlyHarvestPartial: "Kusola" } },
      week12: { title: "Kusola", description: "Kusola kya banda.", decisions: { immediateHarvest: "Kusola", selectiveHarvest: "Kusola", waitPerfectTiming: "Kusola" } },
      postHarvest: { title: "Tempu", description: "Tempu ya banda.", decisions: { coverCrops: "Kilima", cropRotation: "Kilima", soilAnalysis: "Muxi" } }
    },
    feedback: {
      deepTillage: "Mema!", organicMatter: "Kujinga mema!", waitRain: "Kandengesa.",
      droughtResistant: "Mema!", highYield: "Mema!", localVariety: "Kujinga!",
      precisionIrrigation: "Mema!", mulching: "Kujinga!", foliarNutrition: "Mema!",
      biologicalControl: "Mema makuxi!", targetedPesticide: "Mema.", monitoring: "Kujinga!",
      variableRate: "Mema!", uniformApplication: "Mema.", organicFertilizer: "Kujinga!",
      drainageSystem: "Mema!", temporaryCover: "Mema.", earlyHarvestPartial: "Kujinga!",
      immediateHarvest: "Mema!", selectiveHarvest: "Mema makuxi!", waitPerfectTiming: "Kandengesa.",
      coverCrops: "Kujinga makuxi!", cropRotation: "Kujinga!", soilAnalysis: "Mema!"
    },
    endGame: {
      title: "🏆 Kujinga! Tempu yi kua.",
      subtitle: "Bisolo bya kima yaku",
      results: {
        finalScore: "Puntos", totalInvested: "Kibanji", budgetEfficiency: "Kibanji",
        sustainability: "Kujinga", waterManagement: "Mesu",
        excellent: "🏆 Mema makuxi", good: "✅ Mema", regular: "⚠️ Mema",
        needsImprovement: "❌ Kubongisa", critical: "❌ Kubongisa"
      },
      performance: { title: "📊 Puntos" },
      actions: {
        playAgain: "🔄 Jingisa kamba", backHome: "🏠 Kuvutuka",
        downloadApp: "🌱 Jingisa: solola Farm Navigators!"
      }
    },
    common: {
      kz: "Kz", points: "pts", percentage: "%", day: "Siku", week: "Semana",
      level: "Nivel", season: "Tempu",
      seasons: { planting: "Kilima", growing: "Mbongo", harvest: "Kusola" }
    }
  },
  agriFlixFull: {
    header: {
      title: "AgriFlix 🎥",
      subtitle: "Jingu ya kilima Angola",
      searchPlaceholder: "Kuenga masolo ya kilima..."
    },
    filters: {
      title: "Kisobo", clearAll: "Jiha vya kima", category: "Kisobo", language: "Kilelu", difficulty: "Nivel", activeFilters: "Kisobo:"
    },
    categories: {
      all: "Kima", soilPrep: "Muxi", irrigation: "Mesu", pestControl: "Bibila", harvesting: "Kusola", sustainability: "Kujinga", technology: "Dya mema", composting: "Muxi"
    },
    difficulty: { basic: "Muenho", intermediate: "Katikati", advanced: "Makuxi" },
    languages: { all: "Kima", portuguese: "Kilelu ya Putukesi", umbundu: "Kilelu ya Umbundu", kimbundu: "Kilelu ya Kimbundu", lunda: "Kilelu ya Lunda" },
    player: { play: "Banda", pause: "Kandengesa", like: "Kuvila", share: "Kabongisa", download: "Solola", transcript: "Masolo", backToList: "Kuvutuka", videoInfo: "Masolo", instructor: "Mujinga", duration: "Tempu", views: "Kuluela", likes: "Kuvila", category: "Kisobo", tags: "Bisolo" },
    videos: {
      soilPrep: { title: "Muxi wa kilima", description: "Jingisa muxi wa mema." },
      irrigation: { title: "Mesu ya mema", description: "Mesu ya kuluela." },
      pestControl: { title: "Bibila bya muxi", description: "Bibila kufua." },
      cropRotation: { title: "Kilima sila", description: "Kilima kya mema." },
      waterConservation: { title: "Mesu konga", description: "Mesu ya kuluela." },
      nasaData: { title: "NASA dya kilima", description: "NASA kwa kilima." },
      composting: { title: "Muxi mema", description: "Muxi kuluela." },
      organicFarming: { title: "Kilima Angola", description: "Kilima kya mema." }
    },
    messages: { noResults: "Kimbamba masolo", noResultsDesc: "Masolo maadi.", loading: "Kubanda...", error: "Kimbamba", tryFilters: "Sobolola kisobo." },
    common: { views: "kuluela", likes: "kuvila", share: "kabongisa", download: "solola", watch: "banda", instructor: "mujinga", back: "kuvutuka" }
  },
  
  // FarmTinder Full Application - Versão Simplificada Kimbundu
  farmTinderFull: {
    header: { title: "Farm Tinder 🌱❤️", subtitle: "Kilima mema", progress: "{current} ya {total}" },
    card: { nasaConfidence: "NASA", scientificName: "disolo", idealConditions: "Mema:", bestPlantingSeason: "Tempu kilima", yieldUnit: "kg/ha", profitUnit: "lukeba/ha", advantages: "✅ Mema:", considerations: "⚠️ Kandengesa:" },
    climate: { rainfall: "Mvula:", temperature: "Moto:", humidity: "Mesu:" },
    actions: { reject: "Katula", accept: "Kutambula", rejectButton: "Kilima kwa", acceptButton: "Kilima!" },
    results: { title: "Farm Tinder 🌱❤️", subtitle: "NASA ya kilima", selectedCrops: "Kilima ({count})", noSelection: { title: "Kilima kimbamba", subtitle: "Kandengesa kilima mema" }, nextSteps: { title: "Kulonda", items: ["✅ Kilima", "✅ NASA", "✅ AgriFlix", "✅ Simulador", "✅ Cooperativas"] }, buttons: { tryAgain: "Kandengesa", backHome: "Kuvutuka" } },
    crops: {
      corn: { name: "Milho", description: "Kilima mema Angola", pros: ["Kilima mema", "Moto mema", "Kilima tempu"], considerations: ["Mesu", "Tempu"], plantingSeason: "Outubro - Dezembro" },
      cassava: { name: "Manioca", description: "Kilima kya muxi", pros: ["Mesu kwa", "Muxi", "Tempu lumbu"], considerations: ["Lukeba", "Kulonda"], plantingSeason: "Novembro - Janeiro" },
      beans: { name: "Makunde", description: "Kilima mema", pros: ["Kilima", "Muxi", "90 dias"], considerations: ["Mesu", "Kandengesa"], plantingSeason: "Setembro - Novembro" },
      sweetPotato: { name: "Rimbanda", description: "Kilima mema", pros: ["Vitaminas", "Muxi", "Kilima"], considerations: ["Muxi", "Konga"], plantingSeason: "Março - Maio" },
      tomato: { name: "Tomate", description: "Lukeba mema", pros: ["Lukeba", "Kilima", "Tempu"], considerations: ["Mesu", "Kandengesa", "Lukeba"], plantingSeason: "Maio - Julho" }
    },
    demo: { info: "💡 Farm Tinder Demo - NASA ya Angola kilima" }
  },
  
  // Login Page - Versão Simplificada Kimbundu
  login: {
    header: { title: "Farm Navigators Angola", subtitle: "NASA ya kilima", backButton: "Kuvutuka muzubu", changeBackground: "Tuka mfutu" },
    form: { emailLabel: "Email", emailPlaceholder: "email@", passwordLabel: "Sima", passwordPlaceholder: "••••••••", loginButton: "Kinjila", loginButtonLoading: "Kukinjila..." },
    quickLogin: { title: "Demo - Kinjila:", adminButton: "Admin", ngoButton: "ONG", credentials: { admin: "Admin: admin@farmnavigators.ao / admin123", ngo: "ONG: ong@farmnavigators.ao / ong123" } },
    errors: { invalidCredentials: "Sima kimbamba. Sobolola demo.", loginError: "Kimbamba kinjila. Kandengesa.", required: "Osolola oviya" },
    footer: { copyright: "© 2025 Farm Navigators Angola. Mavalo osi." }
  },
  
  // Placeholders vazios - línguas nacionais não acessam admin/NGO
  admin: {
    common: { dashboard: "", users: "", content: "", reports: "", settings: "", profile: "", search: "", filter: "", export: "", save: "", cancel: "", delete: "", edit: "", view: "", approve: "", reject: "", loading: "", error: "", success: "", warning: "" },
    navigation: { main: "", others: "", dashboard: "", userManagement: "", contentModeration: "", systemReports: "", systemSettings: "", profile: "" },
    dashboard: { title: "", subtitle: "", timeRanges: { "24h": "", "7d": "", "30d": "", "90d": "" }, stats: { totalUsers: "", activeUsers: "", totalNGOs: "", totalContent: "", systemHealth: "", apiCalls: "" }, charts: { userGrowth: "", contentStats: "", systemAlerts: "", recentActivity: "" }, alerts: { high_latency: "", backup_completed: "", new_ngo: "", storage_warning: "" }, activity: { video_upload: "", new_registration: "", report_generated: "", content_approved: "" } },
    userManagement: { title: "", subtitle: "", tabs: { farmers: "", ngos: "", admins: "" }, actions: { addUser: "", exportData: "", bulkActions: "" }, userDetails: { name: "", email: "", role: "", status: "", registrationDate: "", lastLogin: "", location: "" }, status: { active: "", inactive: "", suspended: "" } },
    contentModeration: { title: "", subtitle: "", tabs: { pending: "", approved: "", rejected: "" }, contentTypes: { video: "", article: "", comment: "" }, moderationActions: { approve: "", reject: "", needsReview: "" } }
  },
  ngo: {
    common: { dashboard: "", maps: "", content: "", reports: "", statistics: "", profile: "", farmers: "", videos: "", impact: "", reach: "", coverage: "" },
    navigation: { dashboard: "", regionalMaps: "", educationalContent: "", impactReports: "", regionalStats: "", profile: "" },
    dashboard: { title: "", subtitle: "", stats: { farmersReached: "", agriflixVideos: "", totalViews: "", provincesCovered: "", monthlyGrowth: "", newThisMonth: "", vsLastMonth: "", nationalCoverage: "" }, sections: { regionalImpact: "", mostWatchedContent: "", quickActions: "" }, categories: { water: "", planting: "", protection: "", soil: "" }, actions: { uploadVideo: "", createReport: "", viewMaps: "", manageContent: "" } },
    regionalMaps: { title: "", subtitle: "", filters: { province: "", timeRange: "", dataType: "" }, dataTypes: { farmerDensity: "", contentEngagement: "", cropDistribution: "", weatherPatterns: "" } },
    educationalContent: { title: "", subtitle: "", tabs: { myVideos: "", published: "", drafts: "", analytics: "" }, videoStats: { views: "", likes: "", shares: "", duration: "", uploadDate: "" } },
    impactReports: { title: "", subtitle: "", reportTypes: { monthly: "", quarterly: "", annual: "", custom: "" }, metrics: { reach: "", engagement: "", outcomes: "", feedback: "" } }
  }
};

// Tradução em Lunda (LUN) - Terceira língua nacional
export const lun: Translations = {
  companyName: "Farm Navigators",
  navigation: {
    home: "Xietu",
    features: "Xitumbu",
    about: "Tuetu",
    contact: "Kulonga",
    demos: "Malonga",
    download: "Kutoha"
  },
  hero: {
    title: "Sobola Kulima Kuaku mu Xitumbu xa NASA",
    subtitle: "🚀 Kusobola kulima kua Angola mu teknolojia ya mbelu",
    description: "Plataforma yose yi longa xitumbu xa satelite xa NASA mu intelijensia artificial ku sobola kulima kuaku. Farm Tinder, kulonga tempo, avideo a kumanya ne xitumbu xamaxingi.",
    ctaPrimary: "Kutanga",
    ctaSecondary: "Kulonga Malonga",
    watchDemo: "▶️ Kulonga Demo"
  },
  features: {
    title: "Xitumbu xa Makutu xa Kulima xa Manya",
    subtitle: "Kima kyose kya kuzenga ku sobola kulima kuaku",
    farmTinder: {
      title: "Farm Tinder",
      description: "Malonga ya mahunda ma sikua mu xitumbu xa NASA, museke ne tempo ya museke waku",
      benefits: ["Kulonga kua manya", "Xitumbu xa NASA mu kimbundu", "Malonga ya muhatu"]
    },
    weather: {
      title: "Kulonga Tempo",
      description: "Xitumbu xa NASA xa tempo ya sambunu: mvula, muvilu, maza ya museke ne malonga ya mabixe",
      benefits: ["Kulonga kua kieli", "Malonga ya mubanga", "Xitumbu xa tempo ya sambunu"]
    },
    agriflix: {
      title: "AgriFlix",
      description: "Bibliteka ya avideo ya kumanya ya mufupi mu lunda ne malilo ya Angola",
      benefits: ["Video ya kuzenga", "Malilo maxingi", "Xitumbu xa muhenda"]
    },
    alerts: {
      title: "Malonga ya Manya",
      description: "Sistema ya malonga mu AI ya mabixe, maloba ne tempo ya kihenda",
      benefits: ["AI ya makutu", "Kufutila mabixe", "Malonga ya push"]
    },
    community: {
      title: "Xilumbu xya Kulima",
      description: "Kulonga ne bakulima bamaxingi, kukatana makuaxikilu ne kumanya xitumbu xa kieli",
      benefits: ["Rede social ya bakulima", "Kukatana makuaxikilu", "Forum ya kumanya"]
    },
    marketplace: {
      title: "Luseka lua Kulima",
      description: "Kusoma ne kuendesa bima bya kulima kimbamba mu plataforma mu mahongo ya kieli",
      benefits: ["Kuendesa kua kieli", "Mahongo ya kieli", "Logistica ya kumubanda"]
    }
  },
  videoDemo: {
    title: "Kulonga Farm Navigators mu Xitumbu",
    subtitle: "Malonga yose ya komena teknolojia ya NASA ikumana kusobola kulima kua Angola",
    thumbnailTitle: "NASA Applied Sciences",
    thumbnailDescription: "Xitumbu xa satelite • Kulima kua manya • Teknolojia ya mbelu mu kuzenga",
    duration: "8:54",
    quality: "HD 1080p",
    source: "NASA",
    stats: {
      duration: "Kuangana kua video",
      dataSource: "Xitumbu xa kieli",
      quality: "Kuzenga kua makutu"
    }
  },
  interactiveDemos: {
    title: "Malonga ya Kusakulula",
    subtitle: "Kulonga komena Farm Navigators isombela mu xitumbu ne malonga yetu ya kusakulula",
    farmTinder: {
      title: "Farm Tinder",
      description: "Kusakulula ku sobola mahunda yamakutu ya museke waku sikua mu xitumbu xa NASA",
      features: ["Malonga ya muhatu", "Xitumbu xa tempo xa NASA", "Malonga ya masoma", "Interface ndje Tinder"],
      button: "Kulinga Farm Tinder →"
    },
    agriflix: {
      title: "AgriFlix",
      description: "Bibliteka ya avideo ya kumanya ya mufupi mu lunda ne malilo ya Angola",
      features: ["Video ya minuto 1-4", "Xitumbu xa kulima xa kuzenga", "Malilo maxingi", "Player wa kulonga"],
      button: "Kulonga AgriFlix →"
    },
    seriousGame: {
      title: "Game",
      description: "Xilombo xya kumanya xya longa komena kuendesa xitumbu xa satelite mu kusobola kulima kua manya",
      features: ["Malonga 8 ya kieli", "Dinheiro mu Kwanzas", "Malonga ya kumanya", "Kukula ya nivel"],
      button: "Xilomba Agora →"
    }
  },
  download: {
    title: "Kutoha Farm Navigators",
    subtitle: "Kuyali mu plataforma yose",
    description: "Kupata yose ya Farm Navigators mu aparelho waku wa kusakulula. App ya mobile yose ne versão desktop profisional.",
    platforms: {
      ios: "iOS App Store",
      android: "Google Play",
      desktop: "Desktop (Windows/Mac)",
      game: "Game"
    },
    stats: {
      downloads: "10K+ Matoha",
      rating: "4.8★ Kulonga",
      countries: "Mipais 5"
    }
  },
  footer: {
    description: "Kusobola kulima kua Angola mu teknolojia ya mbelu ya NASA ne intelijensia artificial.",
    sections: {
      product: {
        title: "Produto",
        links: ["Farm Tinder", "AgriFlix", "Game", "Kulonga", "Malonga", "Luseka"]
      },
      company: {
        title: "Kompanha",
        links: ["Tuetu", "Misuadu Yetu", "Equipe", "Xitumbu", "Imprensa", "Blog"]
      },
      support: {
        title: "Mavalimbua",
        links: ["Centro ya Mavalimbua", "Dokumentação", "API", "Status", "Kulonga", "Xilumbu"]
      },
      social: {
        title: "Redes Sociais"
      }
    },
    contact: {
      phone: "+244 900 000 000",
      email: "kulonga@farmnavigators.ao",
      address: "Luanda, Angola"
    },
    copyright: "© 2025 Farm Navigators. Xitumbu xyose xyavalimbua."
  },
  language: {
    select: "Kusakulula liloba",
    current: "Lunda"
  },
  common: {
    learnMore: "Kumanya Kindi",
    getStarted: "Kutanga",
    comingSoon: "Yikwisa",
    loading: "Kukulula...",
    error: "Kihenda",
    tryAgain: "Kulinga Kufemi",
    close: "Kufeka",
    play: "Kutanga",
    pause: "Kuyima"
  },
  stats: {
    productivity: {
      value: "25%",
      label: "Kukula kua masoma"
    },
    languages: {
      value: "Malilo 5",
      label: "Lunda, Inglês + malilo ya Angola"
    },
    coverage: {
      value: "Miprovínsia 18",
      label: "Mu Angola yose"
    },
    realtime: {
      value: "24/7",
      label: "Malonga ya tempo ya sambunu"
    }
  },
  howItWorks: {
    title: "Komena Kisombela",
    subtitle: "Teknolojia ya mufupi ya xitumbu xa makutu",
    mobile: {
      title: "Ku Bakulima",
      subtitle: "App Mobile ya Mufupi",
      steps: [
        { title: "Kulonga kya Mufupi", description: "Kulonga mbanza waku ne tipo ya museke" },
        { title: "Malonga", description: "Kutoha malonga sikua mu xitumbu xa NASA" },
        { title: "Kumanya ne Kulima", description: "Kulonga video ne kuhepa xitumbu xa manya" },
        { title: "Kulonga Xitumbu", description: "Kulonga kukula ne masoma" }
      ]
    },
    web: {
      title: "Ku ONGs ne Governo",
      subtitle: "Plataforma Web ya Makutu",
      steps: [
        { title: "Mapas ya Kulonga", description: "Kulonga xitumbu xa kulima ne tempo ya munda" },
        { title: "Kulonga Xitumbu", description: "Kutoha avideo ya kumanya ne xitumbu xa kumesisa" },
        { title: "Makakolohono ne Analytics", description: "Xitumbu xa masoma ne impacto ya xitumbu xa povo" },
        { title: "Mavalimbua ya Kusobola", description: "Kuyisa xitumbu xa kieli ku programas ne mabimbo" }
      ]
    },
    cta: "Kupapila kusobola kulima? Kwisu netu lelu"
  },
  impact: {
    badge: "Kusobola kwa Inação",
    title: "Impacto mu Povo wa Angola 🇦🇴",
    subtitle: "Teknolojia ya mbelu ne inovação digital yalonga ku kusobola kulima ne kufutila njala",
    cards: {
      production: {
        title: "Masoma Maxingi, Dinheiro Maxingi",
        description: "Bakulima yiva kumanya kya kulima, tempo ya kulima ne komena kusobola → mabixe mashoko, masoma maxingi",
        metric: "+40% masoma"
      },
      inclusion: {
        title: "Inclusão Digital ya Sipindu",
        description: "Kukolola kwa telefone ya mufupi (USSD), kulonga teknolojia ku mbanza yakukina internet",
        metric: "100% kukolola"
      },
      education: {
        title: "Kumesisa kya Mufupi",
        description: "Mini-aulas ya mufupi ne ya mufupi, mu kimputukesi ne malilo ya muhenda (Kimbundu, Umbundu, Kikongo)",
        metric: "+3 malilo"
      },
      sustainability: {
        title: "Sustentabilidade",
        description: "Kulonga kutalela kwa museke ne kulwa kuyuvika kwa museke",
        metric: "Eco-friendly"
      },
      hunger: {
        title: "Kufuta Njala",
        description: "Kuvihisa masoma wa makulya ne kusenguela kwombela wa makulya wa inação",
        metric: "Njala ya mufupi"
      },
      empowerment: {
        title: "Kuviha Kamukuwa Sipindu",
        description: "Kumesisa bakulima mu xitumbu xa kajinja ne sustentável ku kamukuwa wa economia",
        metric: "Kumanya maxingi"
      }
    },
    stats: {
      farmers: {
        value: "500K+",
        label: "Bakulima Bacihumba"
      },
      villages: {
        value: "2,000+",
        label: "Majinda Yacikola"
      },
      productivity: {
        value: "+65%",
        label: "Kuvihisa Masoma"
      },
      sustainability: {
        value: "15+",
        label: "Makama Yakutanga"
      }
    }
  },
  partners: {
    title: "Makama Yetu",
    subtitle: "Kulonga kwa estratégia ku impacto wa inação",
    government: "Governo",
    technology: "Teknolojia",
    international: "Internacional",
    academic: "Academia",
    items: [
      {
        name: "MINAGRIF",
        description: "Ministério ya Agricultura ne Florestas - Makama ya instituição ya xitumbu xa kulima",
        type: "Governo"
      },
      {
        name: "NASA Harvest",
        description: "Programa ya NASA ya kulima ne kulya ya kieli - Xitumbu xa satelite",
        type: "Teknolojia"
      },
      {
        name: "FAO Angola",
        description: "Organização yas Nações Unidas ya Agricultura ne Kulya",
        type: "Internacional"
      },
      {
        name: "Universidade Agostinho Neto",
        description: "Pesquisa ya kulima ne kumesisa kwa técnica",
        type: "Academia"
      }
    ],
    cta: {
      title: "Kwisu ku Rede yetu ya Makama",
      description: "Kupapila kwa revolução ya kulima ne kuhepa ku desenvolvimento sustentável ya Angola",
      primaryButton: "Kupapila Makama",
      secondaryButton: "Kumanya Maxingi"
    },
    stats: {
      activePartners: "Makama Yakutanga",
      provinces: "Províncias Yacikola",
      beneficiaries: "Bakulima Bacihumba",
      yearsActive: "Miaka ya Kusolonga"
    }
  },
  ctaDownload: {
    title: "Kupapila Kusobola Kulima Waku?",
    subtitle: "Kwisu kwa bakulima yavasikola kuyisa teknolojia ya mbelu ya NASA ku kuvihisa masoma ne kutalela museke.",
    buttons: {
      ios: "Kutula ku iOS",
      android: "Kutula ku Android",
      desktop: "Kutula ku Desktop", 
      game: "Ojogo Desktop"
    },
    offline: {
      title: "Kimbamba internet? Kimbamba problema!",
      description: "Kuhepa AGRI ku +244 900 000 000 sikua mu SMS"
    }
  },
  seriousGameFull: {
    welcome: {
      title: "🎮 Ntuxi: Mukanda wa Kilima",
      subtitle: "Ntuxi ya Kilima Angola",
      description: "Jingisela kilima kya mema na dya NASA. Longela kilima.",
      features: {
        nasaData: { title: "Dya NASA", description: "NDVI, mema, mvula" },
        realScenarios: { title: "Angola", description: "Huambo, Benguela, Uíge" },
        scientificFeedback: { title: "Kujinga", description: "Longela mbutu" },
        budgetManagement: { title: "Kibanji", description: "Kwanza" }
      },
      howToPlay: {
        title: "Kulongela",
        steps: {
          analyze: "1. Talela dya NASA",
          decide: "2. Jingisela",
          manage: "3. Longela kibanji",
          learn: "4. Jingisa"
        }
      },
      startButton: "🚀 Komesa",
      duration: "Tempu: ~15-20 minutos"
    },
    ui: {
      indicators: { water: "Mema", soil: "Muxi", growth: "Ngongo", score: "Puntos", budget: "Kibanji" },
      status: {
        title: "📊 Kilima", waterReserve: "Mema", soilHealth: "Muxi",
        cropGrowth: "Ngongo", day: "Siku", season: "Tempu", budgetRemaining: "Kibanji"
      },
      feedback: { title: "Kujinga" },
      decisions: { title: "Kilongo", free: "💚 Kimbamba", insufficientBudget: "Kibanji kiadi" },
      nasaPanel: {
        title: "🛰️ NASA", soilMoisture: "Muxi", ndvi: "NDVI",
        precipitation: "Mvula", temperature: "Moto"
      },
      weather: { temperature: "Moto", rainfall: "Mvula", humidity: "Mema" }
    },
    scenarios: {
      week1: { title: "Muxi", description: "Muxi wa komesa.", decisions: { deepTillage: "Muxi", organicMatter: "Kilima", waitRain: "Mvula" } },
      week2: { title: "Kilima", description: "Kilima kya komesa.", decisions: { droughtResistant: "Kilima", highYield: "Kilima", localVariety: "Kilima" } },
      week4: { title: "Ngongo", description: "Ngongo ya komesa.", decisions: { precisionIrrigation: "Mema", mulching: "Muxi", foliarNutrition: "Kilima" } },
      week6: { title: "Bibila", description: "Bibila bya komesa.", decisions: { biologicalControl: "Bibila", targetedPesticide: "Bibila", monitoring: "Bibila" } },
      week8: { title: "Ngongo", description: "Ngongo ya komesa.", decisions: { variableRate: "Muxi", uniformApplication: "Muxi", organicFertilizer: "Muxi" } },
      week10: { title: "Mema", description: "Mema ya komesa.", decisions: { drainageSystem: "Mema", temporaryCover: "Mema", earlyHarvestPartial: "Kulonga" } },
      week12: { title: "Kulonga", description: "Kulonga kya komesa.", decisions: { immediateHarvest: "Kulonga", selectiveHarvest: "Kulonga", waitPerfectTiming: "Kulonga" } },
      postHarvest: { title: "Tempu", description: "Tempu ya komesa.", decisions: { coverCrops: "Kilima", cropRotation: "Kilima", soilAnalysis: "Muxi" } }
    },
    feedback: {
      deepTillage: "Mema!", organicMatter: "Kujinga mema!", waitRain: "Lalela.",
      droughtResistant: "Mema!", highYield: "Mema!", localVariety: "Kujinga!",
      precisionIrrigation: "Mema!", mulching: "Kujinga!", foliarNutrition: "Mema!",
      biologicalControl: "Mema makuxi!", targetedPesticide: "Mema.", monitoring: "Kujinga!",
      variableRate: "Mema!", uniformApplication: "Mema.", organicFertilizer: "Kujinga!",
      drainageSystem: "Mema!", temporaryCover: "Mema.", earlyHarvestPartial: "Kujinga!",
      immediateHarvest: "Mema!", selectiveHarvest: "Mema makuxi!", waitPerfectTiming: "Lalela.",
      coverCrops: "Kujinga makuxi!", cropRotation: "Kujinga!", soilAnalysis: "Mema!"
    },
    endGame: {
      title: "🏆 Kujinga! Tempu yi kua.",
      subtitle: "Masolo ma kilima yaku",
      results: {
        finalScore: "Puntos", totalInvested: "Kibanji", budgetEfficiency: "Kibanji",
        sustainability: "Kujinga", waterManagement: "Mema",
        excellent: "🏆 Mema makuxi", good: "✅ Mema", regular: "⚠️ Mema",
        needsImprovement: "❌ Kulongesa", critical: "❌ Kulongesa"
      },
      performance: { title: "📊 Puntos" },
      actions: {
        playAgain: "🔄 Jingisa kamba", backHome: "🏠 Kuvutuka",
        downloadApp: "🌱 Jingisa: solola Farm Navigators!"
      }
    },
    common: {
      kz: "Kz", points: "pts", percentage: "%", day: "Siku", week: "Semana",
      level: "Nivel", season: "Tempu",
      seasons: { planting: "Kilima", growing: "Ngongo", harvest: "Kulonga" }
    }
  },
  agriFlixFull: {
    header: {
      title: "AgriFlix 🎥",
      subtitle: "Ntuxi ya kilima Angola",
      searchPlaceholder: "Kuenga masolo ya kilima..."
    },
    filters: {
      title: "Kilongo", clearAll: "Jiha masolo", category: "Kilongo", language: "Xilelu", difficulty: "Nivel", activeFilters: "Kilongo:"
    },
    categories: {
      all: "Masolo", soilPrep: "Muxi", irrigation: "Mema", pestControl: "Bibila", harvesting: "Kulonga", sustainability: "Kujinga", technology: "Dya mema", composting: "Muxi"
    },
    difficulty: { basic: "Muenho", intermediate: "Katikati", advanced: "Makuxi" },
    languages: { all: "Masolo", portuguese: "Xilelu xa Putukesi", umbundu: "Xilelu xa Umbundu", kimbundu: "Xilelu xa Kimbundu", lunda: "Xilelu xa Lunda" },
    player: { play: "Komesa", pause: "Lalela", like: "Kuvila", share: "Longela", download: "Solola", transcript: "Masolo", backToList: "Kuvutuka", videoInfo: "Masolo", instructor: "Mujinga", duration: "Tempu", views: "Kuluela", likes: "Kuvila", category: "Kilongo", tags: "Masolo" },
    videos: {
      soilPrep: { title: "Muxi wa kilima", description: "Jingisa muxi wa mema." },
      irrigation: { title: "Mema ya mema", description: "Mema ya kuluela." },
      pestControl: { title: "Bibila bya muxi", description: "Bibila kufua." },
      cropRotation: { title: "Kilima sila", description: "Kilima kya mema." },
      waterConservation: { title: "Mema konga", description: "Mema ya kuluela." },
      nasaData: { title: "NASA dya kilima", description: "NASA kwa kilima." },
      composting: { title: "Muxi mema", description: "Muxi kuluela." },
      organicFarming: { title: "Kilima Angola", description: "Kilima kya mema." }
    },
    messages: { noResults: "Kimbamba masolo", noResultsDesc: "Masolo maadi.", loading: "Kukomesa...", error: "Kimbamba", tryFilters: "Longela kilongo." },
    common: { views: "kuluela", likes: "kuvila", share: "longela", download: "solola", watch: "komesa", instructor: "mujinga", back: "kuvutuka" }
  },
  
  // FarmTinder Full Application - Versão Simplificada Lunda
  farmTinderFull: {
    header: { title: "Farm Tinder 🌱❤️", subtitle: "Kilima mema", progress: "{current} ya {total}" },
    card: { nasaConfidence: "NASA", scientificName: "disolo", idealConditions: "Mema:", bestPlantingSeason: "Tempu kilima", yieldUnit: "kg/ha", profitUnit: "lukeba/ha", advantages: "✅ Mema:", considerations: "⚠️ Longela:" },
    climate: { rainfall: "Mvula:", temperature: "Moto:", humidity: "Mema:" },
    actions: { reject: "Katula", accept: "Kutambula", rejectButton: "Kilima kwa", acceptButton: "Kilima!" },
    results: { title: "Farm Tinder 🌱❤️", subtitle: "NASA ya kilima", selectedCrops: "Kilima ({count})", noSelection: { title: "Kilima kimbamba", subtitle: "Longela kilima mema" }, nextSteps: { title: "Kulonda", items: ["✅ Kilima", "✅ NASA", "✅ AgriFlix", "✅ Simulador", "✅ Cooperativas"] }, buttons: { tryAgain: "Longela", backHome: "Kuvutuka" } },
    crops: {
      corn: { name: "Milho", description: "Kilima mema Angola", pros: ["Kilima mema", "Moto mema", "Kilima tempu"], considerations: ["Mema", "Tempu"], plantingSeason: "Outubro - Dezembro" },
      cassava: { name: "Manioca", description: "Kilima kya muxi", pros: ["Mema kwa", "Muxi", "Tempu lumbu"], considerations: ["Lukeba", "Kulonda"], plantingSeason: "Novembro - Janeiro" },
      beans: { name: "Makunde", description: "Kilima mema", pros: ["Kilima", "Muxi", "90 dias"], considerations: ["Mema", "Longela"], plantingSeason: "Setembro - Novembro" },
      sweetPotato: { name: "Rimbanda", description: "Kilima mema", pros: ["Vitaminas", "Muxi", "Kilima"], considerations: ["Muxi", "Konga"], plantingSeason: "Março - Maio" },
      tomato: { name: "Tomate", description: "Lukeba mema", pros: ["Lukeba", "Kilima", "Tempu"], considerations: ["Mema", "Longela", "Lukeba"], plantingSeason: "Maio - Julho" }
    },
    demo: { info: "💡 Farm Tinder Demo - NASA ya Angola kilima" }
  },
  
  // Login Page - Versão Simplificada Lunda
  login: {
    header: { title: "Farm Navigators Angola", subtitle: "NASA ya kilima", backButton: "Kuvutuka xietu", changeBackground: "Tuka mfutu" },
    form: { emailLabel: "Email", emailPlaceholder: "email@", passwordLabel: "Sima", passwordPlaceholder: "••••••••", loginButton: "Kinjila", loginButtonLoading: "Kukinjila..." },
    quickLogin: { title: "Demo - Kinjila:", adminButton: "Admin", ngoButton: "ONG", credentials: { admin: "Admin: admin@farmnavigators.ao / admin123", ngo: "ONG: ong@farmnavigators.ao / ong123" } },
    errors: { invalidCredentials: "Sima kimbamba. Longela demo.", loginError: "Kimbamba kinjila. Longela.", required: "Olongela oviya" },
    footer: { copyright: "© 2025 Farm Navigators Angola. Mavalo osi." }
  },
  
  // Placeholders vazios - línguas nacionais não acessam admin/NGO
  admin: {
    common: { dashboard: "", users: "", content: "", reports: "", settings: "", profile: "", search: "", filter: "", export: "", save: "", cancel: "", delete: "", edit: "", view: "", approve: "", reject: "", loading: "", error: "", success: "", warning: "" },
    navigation: { main: "", others: "", dashboard: "", userManagement: "", contentModeration: "", systemReports: "", systemSettings: "", profile: "" },
    dashboard: { title: "", subtitle: "", timeRanges: { "24h": "", "7d": "", "30d": "", "90d": "" }, stats: { totalUsers: "", activeUsers: "", totalNGOs: "", totalContent: "", systemHealth: "", apiCalls: "" }, charts: { userGrowth: "", contentStats: "", systemAlerts: "", recentActivity: "" }, alerts: { high_latency: "", backup_completed: "", new_ngo: "", storage_warning: "" }, activity: { video_upload: "", new_registration: "", report_generated: "", content_approved: "" } },
    userManagement: { title: "", subtitle: "", tabs: { farmers: "", ngos: "", admins: "" }, actions: { addUser: "", exportData: "", bulkActions: "" }, userDetails: { name: "", email: "", role: "", status: "", registrationDate: "", lastLogin: "", location: "" }, status: { active: "", inactive: "", suspended: "" } },
    contentModeration: { title: "", subtitle: "", tabs: { pending: "", approved: "", rejected: "" }, contentTypes: { video: "", article: "", comment: "" }, moderationActions: { approve: "", reject: "", needsReview: "" } }
  },
  ngo: {
    common: { dashboard: "", maps: "", content: "", reports: "", statistics: "", profile: "", farmers: "", videos: "", impact: "", reach: "", coverage: "" },
    navigation: { dashboard: "", regionalMaps: "", educationalContent: "", impactReports: "", regionalStats: "", profile: "" },
    dashboard: { title: "", subtitle: "", stats: { farmersReached: "", agriflixVideos: "", totalViews: "", provincesCovered: "", monthlyGrowth: "", newThisMonth: "", vsLastMonth: "", nationalCoverage: "" }, sections: { regionalImpact: "", mostWatchedContent: "", quickActions: "" }, categories: { water: "", planting: "", protection: "", soil: "" }, actions: { uploadVideo: "", createReport: "", viewMaps: "", manageContent: "" } },
    regionalMaps: { title: "", subtitle: "", filters: { province: "", timeRange: "", dataType: "" }, dataTypes: { farmerDensity: "", contentEngagement: "", cropDistribution: "", weatherPatterns: "" } },
    educationalContent: { title: "", subtitle: "", tabs: { myVideos: "", published: "", drafts: "", analytics: "" }, videoStats: { views: "", likes: "", shares: "", duration: "", uploadDate: "" } },
    impactReports: { title: "", subtitle: "", reportTypes: { monthly: "", quarterly: "", annual: "", custom: "" }, metrics: { reach: "", engagement: "", outcomes: "", feedback: "" } }
  }
};

// Objeto que mapeia códigos de língua para traduções
export const translations: Record<Language, Translations> = {
  pt,
  en,
  umb,
  kmb,
  lun
};

// Nomes das línguas para exibição
export const languageNames: Record<Language, string> = {
  pt: "Português",
  en: "English",
  umb: "Umbundu",
  kmb: "Kimbundu",
  lun: "Lunda"
};