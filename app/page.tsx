const semesterHighlights = [
  {
    title: "Visão geral do semestre",
    description:
      "Reúna calendário acadêmico, professores, critérios de avaliação e links oficiais para tudo ficar em um só lugar.",
    items: [
      "Calendário da faculdade",
      "Regulamentos do curso",
      "Grade horária",
      "Contato de coordenação"
    ]
  },
  {
    title: "Trilhas de estudo",
    description:
      "Organize o que precisa ser lido com antecedência e marque as leituras essenciais.",
    items: [
      "Doutrina base",
      "Leis secas",
      "Jurisprudência-chave",
      "Resumos pessoais"
    ]
  },
  {
    title: "Acompanhamento de avaliações",
    description:
      "Centralize provas, seminários, trabalhos e critérios de pontuação.",
    items: ["Datas de prova", "Trabalhos em grupo", "Simulados", "Peso das notas"]
  }
];

const weeklySchedule = [
  {
    day: "Segunda",
    entries: [
      {
        time: "19:00–19:45",
        subject: "Direito Civil: Pessoas, Bens e Fatos",
        professor: "Andre de Carvalho Okano"
      },
      {
        time: "19:45–20:30",
        subject: "Direito Civil: Pessoas, Bens e Fatos",
        professor: "Andre de Carvalho Okano"
      },
      {
        time: "20:45–21:30",
        subject: "Direito Civil: Pessoas, Bens e Fatos",
        professor: "Andre de Carvalho Okano"
      },
      {
        time: "21:30–22:15",
        subject: "Ambientação Jurídica",
        professor: "Igor Emanuel de Souza Marques"
      },
      {
        time: "22:15–23:00",
        subject: "Ambientação Jurídica",
        professor: "Igor Emanuel de Souza Marques"
      }
    ]
  },
  {
    day: "Terça",
    entries: [
      {
        time: "19:00–19:45",
        subject: "Criminologia",
        professor: "José Geraldo da Silva"
      },
      {
        time: "19:45–20:30",
        subject: "Criminologia",
        professor: "José Geraldo da Silva"
      },
      {
        time: "20:45–21:30",
        subject: "Teoria Geral do Direito",
        professor: "Michael Lima de Jesus"
      },
      {
        time: "21:30–22:15",
        subject: "Teoria Geral do Direito",
        professor: "Michael Lima de Jesus"
      },
      {
        time: "22:15–23:00",
        subject: "Teoria Geral do Direito",
        professor: "Michael Lima de Jesus"
      }
    ]
  },
  {
    day: "Quarta",
    entries: [
      {
        time: "19:00–19:45",
        subject: "Teoria do Estado e da Constituição",
        professor: "Lelio Maximino Lellis"
      },
      {
        time: "19:45–20:30",
        subject: "Teoria do Estado e da Constituição",
        professor: "Lelio Maximino Lellis"
      },
      {
        time: "20:45–21:30",
        subject: "Teoria do Estado e da Constituição",
        professor: "Lelio Maximino Lellis"
      },
      {
        time: "21:30–22:15",
        subject: "Cosmovisão Bíblico-Cristã",
        professor: "A confirmar"
      },
      {
        time: "22:15–23:00",
        subject: "Cosmovisão Bíblico-Cristã",
        professor: "A confirmar"
      }
    ]
  },
  {
    day: "Quinta",
    entries: [
      {
        time: "20:45–21:30",
        subject: "Direito Civil: Pessoas, Bens e Fatos",
        professor: "Andre de Carvalho Okano",
        online: true
      },
      {
        time: "21:30–22:15",
        subject: "Aprendizagem na Educação Superior",
        professor: "A confirmar",
        online: true
      },
      {
        time: "22:15–23:00",
        subject: "Aprendizagem na Educação Superior",
        professor: "A confirmar",
        online: true
      }
    ]
  },
  {
    day: "Sexta",
    entries: []
  },
  {
    day: "Sábado",
    entries: [
      {
        time: "Sob demanda",
        subject: "Criminologia (megaclass)",
        professor: "José Geraldo da Silva",
        onDemand: true
      },
      {
        time: "Sob demanda",
        subject: "Teoria Geral do Direito (megaclass)",
        professor: "Michael Lima de Jesus",
        onDemand: true
      }
    ]
  },
  {
    day: "Domingo",
    entries: []
  }
];

const dayNames = [
  "Domingo",
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado"
];

const lawSubjects = [
  {
    title: "Teoria Geral do Direito (3 créditos)",
    professor: "Michael Lima de Jesus",
    focus: "Conceitos fundamentais, fontes do direito e sistemas jurídicos.",
    priorities: ["Fichamentos", "Mapas mentais", "Questões comentadas"]
  },
  {
    title: "Teoria do Estado e da Constituição (3 créditos)",
    professor: "Lelio Maximino Lellis",
    focus: "Constituição, poderes, direitos fundamentais e controle de constitucionalidade.",
    priorities: ["Leitura diária da CF", "Decisões STF", "Quadros comparativos"]
  },
  {
    title: "Direito Civil: Pessoas, Bens e Fatos (4 créditos)",
    professor: "Andre de Carvalho Okano",
    focus: "Pessoas, bens, fatos jurídicos e responsabilidade.",
    priorities: ["Casos práticos", "Tabelas de artigos", "Revisão de prazos"]
  },
  {
    title: "Criminologia (2 créditos)",
    professor: "José Geraldo da Silva",
    focus: "Criminologia e escolas penais com análise prática.",
    priorities: ["Leituras dirigidas", "Debates em sala", "Anotações críticas"]
  },
  {
    title: "Ambientação Jurídica (2 créditos)",
    professor: "Igor Emanuel de Souza Marques",
    focus: "Integração à rotina acadêmica e fundamentos do curso.",
    priorities: ["Guia do curso", "Atividades iniciais", "Participação"]
  }
];

const weeklyRituals = [
  {
    day: "Segunda",
    tasks: ["Atualizar agenda", "Ler doutrina base", "Revisar anotações"]
  },
  {
    day: "Quarta",
    tasks: ["Organizar fichamentos", "Responder questões", "Ajustar cronograma"]
  },
  {
    day: "Sexta",
    tasks: ["Revisão geral", "Planejar a semana", "Backup de arquivos"]
  }
];

const quickLinks = [
  {
    title: "Portal da faculdade",
    description: "Notas, frequência e avisos oficiais.",
    action: "Adicionar link"
  },
  {
    title: "Drive do semestre",
    description: "Pasta central com PDFs, resumos e slides.",
    action: "Organizar pastas"
  },
  {
    title: "Grupo de estudos",
    description: "Acesso rápido para o canal de comunicação da turma.",
    action: "Salvar convite"
  }
];

export default function HomePage() {
  const todayName = dayNames[new Date().getDay()];
  const todaySchedule = weeklySchedule.find((item) => item.day === todayName);

  return (
    <main>
      <header>
        <span className="badge">Central de Direito</span>
        <h1>Centralize com clareza tudo sobre o 1º semestre de Direito</h1>
        <p>
          Este painel foi pensado para organizar matérias, leituras e avaliações
          em um único lugar. Use-o como base e personalize conforme a sua rotina
          acadêmica.
        </p>
      </header>

      <section>
        <div className="section-header">
          <div>
            <h2>Cronograma de hoje</h2>
            <p>{todayName}</p>
          </div>
          <span className="pill">Aulas e horários</span>
        </div>
        {todaySchedule && todaySchedule.entries.length > 0 ? (
          <div className="schedule">
            {todaySchedule.entries.map((entry) => (
              <article
                key={`${entry.time}-${entry.subject}`}
                className="schedule-item"
              >
                <div>
                  <h3>{entry.subject}</h3>
                  <p>
                    <strong>Professor:</strong> {entry.professor}
                  </p>
                </div>
                <div className="schedule-meta">
                  <span className="tag">{entry.time}</span>
                  {entry.online && <span className="tag online">Online</span>}
                  {entry.onDemand && (
                    <span className="tag on-demand">Sob demanda</span>
                  )}
                </div>
              </article>
            ))}
          </div>
        ) : (
          <p>Sem aulas presenciais hoje. Aproveite para revisar ou descansar.</p>
        )}
      </section>

      <section>
        <h2>Estrutura principal</h2>
        <p>Crie um ponto de partida para as informações mais importantes.</p>
        <div className="grid">
          {semesterHighlights.map((highlight) => (
            <article key={highlight.title} className="card">
              <h3>{highlight.title}</h3>
              <p>{highlight.description}</p>
              <ul>
                {highlight.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2>Matérias do semestre</h2>
        <p>Centralize leituras, referências e prioridades por disciplina.</p>
        <div className="grid">
          {lawSubjects.map((subject) => (
            <article key={subject.title} className="card">
              <h3>{subject.title}</h3>
              <p><strong>Professor:</strong> {subject.professor}</p>
              <p>{subject.focus}</p>
              <ul>
                {subject.priorities.map((priority) => (
                  <li key={priority}>{priority}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section>
        <div className="section-header">
          <div>
            <h2>Ritual semanal</h2>
            <p>Mantenha o acompanhamento constante sem perder o ritmo.</p>
          </div>
          <span className="pill">Checklist de rotina</span>
        </div>
        <div className="grid">
          {weeklyRituals.map((plan) => (
            <article key={plan.day} className="card">
              <h3>{plan.day}</h3>
              <ul>
                {plan.tasks.map((task) => (
                  <li key={task}>{task}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2>Links rápidos</h2>
        <p>Deixe as referências essenciais sempre a um clique.</p>
        <div className="grid">
          {quickLinks.map((link) => (
            <article key={link.title} className="card accent">
              <h3>{link.title}</h3>
              <p>{link.description}</p>
              <button type="button">{link.action}</button>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2>Próximos ajustes</h2>
        <ul>
          <li>Adicione as datas reais das avaliações e simulados.</li>
          <li>Crie um bloco para estágio ou atividades complementares.</li>
          <li>Inclua um painel de revisão com metas semanais.</li>
        </ul>
      </section>
    </main>
  );
}
