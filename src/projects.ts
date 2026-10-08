export type Project = {
  id: string
  title: string
  category: string
  eyebrow: string
  description: string
  longDescription: string
  technologies: string[]
  accent: string
  icon: string
  featured?: boolean
  github?: string
  demo?: string
  documentation: string
  screens: { title: string; description: string }[]
  code: { language: string; file: string; description: string; snippet: string }
}

export const projects: Project[] = [
  {
    id: 'correio-inteligente', title: 'Correio Inteligente', category: 'IoT', eyebrow: 'IoT + aplicativo',
    description: 'Uma solução de correio inteligente que conecta câmera, QR Code e aplicativo para registrar entregas.',
    longDescription: 'Projeto pensado para facilitar o recebimento de encomendas por meio de um módulo inteligente, identificação do entregador e registro de cada entrega.',
    technologies: ['React', 'PHP', 'MySQL', 'QR Code', 'IoT', 'Câmera'], accent: '#8b7cff', icon: '⌁', featured: true,
    documentation: 'DOCUMENTACAO_CORREIO_INTELIGENTE.pdf', screens: [{ title: 'Aplicativo', description: 'Placeholder para tela do aplicativo.' }, { title: 'Arquitetura', description: 'Placeholder para diagrama de arquitetura.' }],
    code: { language: 'React', file: 'src/components/DeliveryCard.tsx', description: 'Espaço preparado para inserir um trecho real do projeto.', snippet: '// COLE AQUI UM TRECHO REAL DO PROJETO\n// Ex.: componente de registro de entrega' }
  },
  {
    id: 'jogo-do-jegue', title: 'Jogo do Jegue', category: 'Aplicativos', eyebrow: 'Aplicativo + Bluetooth',
    description: 'Jogo multiplayer para dispositivos móveis utilizando Bluetooth Low Energy na comunicação entre jogadores.',
    longDescription: 'A experiência explora criação de sala, conexão entre dispositivos e regras de jogo em uma comunicação local, com um celular anunciando a sala e os demais procurando e conectando.',
    technologies: ['Vue', 'TypeScript', 'Capacitor', 'Bluetooth Low Energy'], accent: '#53d6bd', icon: '↗', featured: true, documentation: 'DOCUMENTACAO_JOGO_DO_JEGUE.pdf',
    screens: [{ title: 'Sala multiplayer', description: 'Placeholder para tela da sala.' }, { title: 'Conexão BLE', description: 'Placeholder para fluxo de conexão.' }],
    code: { language: 'TypeScript', file: 'src/services/bluetooth.ts', description: 'Espaço preparado para inserir a comunicação BLE real.', snippet: '// COLE AQUI UM TRECHO REAL DO PROJETO\n// Ex.: descoberta e conexão Bluetooth' }
  },
  {
    id: 'album-figurinhas', title: 'Álbum de Figurinhas', category: 'Aplicativos', eyebrow: 'Aplicativo mobile',
    description: 'Aplicativo mobile para gerenciar um álbum de figurinhas, com login, armazenamento local e conquistas.',
    longDescription: 'Uma experiência mobile focada em organizar figurinhas coletadas, raridades e progresso pessoal, com dados armazenados localmente.',
    technologies: ['Ionic', 'Vue', 'Capacitor', 'SQLite'], accent: '#ffb86c', icon: '✦', documentation: 'DOCUMENTACAO_ALBUM_FIGURINHAS.pdf',
    screens: [{ title: 'Coleção', description: 'Placeholder para tela da coleção.' }, { title: 'Conquistas', description: 'Placeholder para tela de conquistas.' }],
    code: { language: 'Vue', file: 'src/views/Collection.vue', description: 'Espaço preparado para inserir um componente real.', snippet: '// COLE AQUI UM TRECHO REAL DO PROJETO\n// Ex.: lógica da coleção de figurinhas' }
  },
  {
    id: 'resolve-ai', title: 'ResolveAI', category: 'Sistemas', eyebrow: 'Marketplace de serviços locais',
    description: 'Plataforma web para conectar pessoas a serviços locais, organizar solicitações e facilitar a busca por soluções.',
    longDescription: 'Sistema web com foco em necessidades do dia a dia, reunindo solicitações, prestadores e regras de negócio em uma experiência simples.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'XAMPP'], accent: '#f17d9a', icon: '⌘', featured: true, documentation: 'DOCUMENTACAO_RESOLVEAI.pdf',
    screens: [{ title: 'Busca de serviços', description: 'Placeholder para tela do marketplace.' }, { title: 'Fluxo da solicitação', description: 'Placeholder para fluxo do sistema.' }],
    code: { language: 'PHP', file: 'src/api/request.php', description: 'Espaço preparado para inserir uma API real.', snippet: '// COLE AQUI UM TRECHO REAL DO PROJETO\n// Ex.: endpoint de solicitação de serviço' }
  },
  {
    id: 'ascenda', title: 'Ascenda', category: 'Interfaces', eyebrow: 'Plataforma web / UX/UI',
    description: 'Plataforma digital desenvolvida com foco em interface, experiência do usuário e conscientização política.',
    longDescription: 'Projeto de interface com identidade visual, protótipos e fluxo de navegação construídos para comunicar uma pauta social com clareza.',
    technologies: ['UX/UI', 'Figma', 'Prototipação'], accent: '#c58aff', icon: '◌', documentation: 'DOCUMENTACAO_ASCENDA.pdf',
    screens: [{ title: 'Identidade visual', description: 'Placeholder para identidade visual.' }, { title: 'Fluxo de navegação', description: 'Placeholder para protótipo.' }], code: { language: 'Figma', file: 'prototipo/ascenda', description: 'Espaço preparado para link ou imagem do protótipo.', snippet: '// ADICIONE AQUI O LINK DO PROTÓTIPO REAL' }
  },
  {
    id: 'agenda-facil', title: 'Agenda Fácil', category: 'Interfaces', eyebrow: 'UI/UX',
    description: 'Interface para uma solução de organização e agendamento, criada a partir de prototipação e planejamento da experiência.',
    longDescription: 'Um exercício de produto que explora wireframes, telas e fluxo para tornar o agendamento mais previsível e acessível.',
    technologies: ['UX/UI', 'Figma', 'Wireframes'], accent: '#5fa9ff', icon: '⊙', documentation: 'DOCUMENTACAO_AGENDA_FACIL.pdf',
    screens: [{ title: 'Wireframes', description: 'Placeholder para wireframes.' }, { title: 'Tela de agenda', description: 'Placeholder para tela final.' }], code: { language: 'Figma', file: 'prototipo/agenda-facil', description: 'Espaço preparado para link ou imagem do protótipo.', snippet: '// ADICIONE AQUI O LINK DO PROTÓTIPO REAL' }
  }
]
