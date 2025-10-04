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
  }
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
  }
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