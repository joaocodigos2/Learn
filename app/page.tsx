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

const lawSubjects = [
  {
    title: "Teoria Geral do Direito",
    focus: "Conceitos fundamentais, fontes do direito e sistemas jurídicos.",
    priorities: ["Fichamentos", "Mapas mentais", "Questões comentadas"]
  },
  {
    title: "Direito Constitucional",
    focus: "Constituição, poderes, direitos fundamentais e controle de constitucionalidade.",
    priorities: ["Leitura diária da CF", "Decisões STF", "Quadros comparativos"]
  },
  {
    title: "Introdução ao Direito Civil",
    focus: "Pessoas, bens, fatos jurídicos e responsabilidade.",
    priorities: ["Casos práticos", "Tabelas de artigos", "Revisão de prazos"]
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
