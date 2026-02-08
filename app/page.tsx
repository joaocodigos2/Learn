const subjects = [
  {
    title: "Cálculo I",
    focus: "Listas de exercícios, resumos e provas antigas.",
    items: ["Limites", "Derivadas", "Integrais", "Aplicações"]
  },
  {
    title: "Programação",
    focus: "Projetos, roteiros de aula e desafios práticos.",
    items: ["Estruturas de dados", "POO", "APIs", "Testes"]
  },
  {
    title: "Metodologia Científica",
    focus: "Artigos, fichamentos e cronogramas.",
    items: ["Normas ABNT", "Referências", "Revisões", "Entrega final"]
  }
];

const weekPlan = [
  {
    day: "Segunda",
    tasks: ["Rever cálculo", "Anotar dúvidas da aula", "Atualizar o planner"]
  },
  {
    day: "Quarta",
    tasks: ["Organizar flashcards", "Ler artigo", "Submeter exercícios"]
  },
  {
    day: "Sexta",
    tasks: ["Planejar próxima semana", "Revisar conteúdos", "Backup do drive"]
  }
];

export default function HomePage() {
  return (
    <main>
      <header>
        <span className="badge">Campus Board</span>
        <h1>Seu painel para organizar tudo da faculdade</h1>
        <p>
          Centralize matérias, tarefas e revisões em um único lugar. Esta base
          já vem com sugestões de seções para você personalizar.
        </p>
      </header>

      <section>
        <h2>Matérias em destaque</h2>
        <p>Separe seus conteúdos por disciplina e mantenha o foco semanal.</p>
        <div className="grid">
          {subjects.map((subject) => (
            <div key={subject.title} className="card">
              <h3>{subject.title}</h3>
              <p>{subject.focus}</p>
              <ul>
                {subject.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Ritual da semana</h2>
        <p>Crie pequenos rituais para manter o ritmo de estudos.</p>
        <div className="grid">
          {weekPlan.map((plan) => (
            <div key={plan.day} className="card">
              <h3>{plan.day}</h3>
              <ul>
                {plan.tasks.map((task) => (
                  <li key={task}>{task}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Próximos passos</h2>
        <ul>
          <li>Adicione suas matérias reais e links importantes.</li>
          <li>Crie uma página por semestre ou por projeto.</li>
          <li>Inclua um calendário com prazos e avaliações.</li>
        </ul>
      </section>
    </main>
  );
}
