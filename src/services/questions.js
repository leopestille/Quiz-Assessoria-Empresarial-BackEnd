const data = [
  {
    question: "Qual foi o seu faturamento nos últimos 12 meses?",
    options: [
      { label: "Até R$ 20.000,00", value: 2 },
      { label: "De R$ 20.000,00 a R$ 50.000,00", value: 4 },
      { label: "De R$ 50.000,00 a R$ 100.000,00", value: 6 },
      { label: "De R$ 100.000,00 a R$ 500.000,00", value: 8 },
      { label: "Acima de R$ 500.000,00", value: 10 },
    ],
    type: "choice",
    category: "Financeiro",
  },
  {
    question: "Existem políticas de contratação e retenção de funcionários?",
    options: [
      { label: "Não sei o que é ", value: 4 },
      { label: "Não", value: 6 },
      { label: "Algumas", value: 8 },
      { label: "Sim", value: 10 },
    ],
    type: "choice",
    category: "Recursos Humanos",
  },
  {
    question: "A Empresa possui um planejamento stratégico?",
    options: [
      { label: "Não", value: 2 },
      { label: "Sim, somente na criação dela", value: 4 },
      { label: "Sim, de curto prazo(3 meses)", value: 6 },
      { label: "Sim, de curto e médio prazo(2 anos)", value: 8 },
      { label: "Sim, de longo prazo(5 anos)", value: 10 },
    ],
    type: "choice",
    category: "Diretiva",
  },
  {
    question: "Qual a sua estratégia de Marketing?",
    options: [
      { label: "Não temos", value: 2 },
      { label: "Mídias off line (jornal, revista, folder e etc.)", value: 4 },
      {
        label: "Mídias on line (redes sociais, site, e-mail marketing e etc.)",
        value: 6,
      },
      { label: "Temos uma agência que cuida disso", value: 8 },
      { label: "Temos um setor que cuida disso", value: 10 },
    ],
    type: "choice",
    category: "Marketing",
  },
  {
    question:
      "Você faz uso de tecnologias em suas operações? (Ex.: Vendas on-line, fechamentos de contrato on-line, CRM)",
    options: [
      { label: "Não", value: 8 },
      { label: "Sim", value: 10 },
    ],
    type: "choice",
    category: "Tecnologia",
  },
  {
    question: "A empresa tem um departamento jurídico interno ou terceirizado?",
    options: [
      { label: "Não", value: 6 },
      { label: "Externo", value: 8 },
      { label: "Interno", value: 10 },
    ],
    type: "choice",
    category: "Jurídico",
  },
  {
    question: "Você organiza e mantém seus registros contábeis?",
    options: [
      { label: "Não", value: 6 },
      { label: "Sim, em parte", value: 8 },
      { label: "Sim, todos", value: 10 },
    ],
    type: "choice",
    category: "Contábil",
  },
  {
    question: "Você teve lucro nos últimos 12 meses?",
    options: [
      { label: "Não sei", value: 2 },
      { label: "De 1 a 3", value: 4 },
      { label: "De 4 a 6", value: 6 },
      { label: "De 7 a 9 ", value: 8 },
      { label: "De 10 a 12", value: 10 },
    ],
    type: "choice",
    category: "Financeiro",
  },
  {
    question:
      "Você promove o desenvolvimento de competências dos funcionários?",
    options: [
      { label: "Não", value: 4 },
      { label: "Realizo feedback 1x1", value: 6 },
      { label: "Promovo treinamentos até 3x ao ano", value: 8 },
      {
        label: "Promovo treinamento contínuo (possuímos um setor de T&D) ",
        value: 10,
      },
    ],
    type: "choice",
    category: "Recursos Humanos",
  },
  {
    question: "Como é o processo de tomada de decisão estratégica?",
    options: [
      { label: "Feeling, sentimento ou impressão", value: 4 },
      { label: "Necessidade imediata", value: 6 },
      { label: "Com análise de dados", value: 8 },
      {
        label:
          "Após análise de dados e verificação dos objetivos de longo prazo",
        value: 10,
      },
    ],
    type: "choice",
    category: "Diretiva",
  },
  {
    question:
      "Você faz uso de análise de dados para planejar suas campanhas de marketing?",
    options: [
      { label: "Não", value: 8 },
      { label: "Sim, me fornecem os resultados", value: 10 },
    ],
    type: "choice",
    category: "Marketing",
  },
  {
    question: "Você tem um plano de transformação digital?",
    options: [
      { label: "Não", value: 8 },
      { label: "Sim", value: 10 },
    ],
    type: "choice",
    category: "Tecnologia",
  },
  {
    question:
      "A Empresa está em conformidade com todas as regulamentações do setor?",
    options: [
      { label: "Não sei", value: 4 },
      { label: "Nunca falei sobre isso meus advogados", value: 6 },
      { label: "Acho que sim", value: 8 },
      { label: "Sim", value: 10 },
    ],
    type: "choice",
    category: "Jurídico",
  },
  {
    question: "Você faz uso de algum software de contabilidade?",
    options: [
      { label: "Não", value: 8 },
      { label: "Sim", value: 10 },
    ],
    type: "choice",
    category: "Contábil",
  },
  {
    question: "Você tem uma reserva de emergência financeira?",
    options: [
      { label: "Não", value: 2 },
      { label: "Sim, até 3 meses", value: 4 },
      { label: "Sim, até 6 meses", value: 6 },
      { label: "Sim, até 1 ano", value: 8 },
      { label: "Sim, mais de 1 ano", value: 10 },
    ],
    type: "choice",
    category: "Financeiro",
  },
  {
    question: "Existe um plano de carreira definido para os funcionários?",
    options: [
      { label: "Não", value: 8 },
      { label: "Sim", value: 10 },
    ],
    type: "choice",
    category: "Recursos Humanos",
  },
  {
    question: "Existe um plano de sucessão para a diretoria/Dono?",
    options: [
        { label: "Não", value: 8 },
        { label: "Sim", value: 10 },
    ],
    type: "choice",
    category: "Diretiva",
  },
  {
    question: "Quem é o seu público alvo?",
    options: [
        { label: "Não sei", value: 4 },
        { label: "Conheço, mas não tenho registrado", value: 6 },
        { label: "Conheço e os parâmetros NÃO são usados nas campanhas", value: 8 },
        { label: "Conheço e os parâmetros são usados nas campanhas", value: 10 },
    ],
    type: "choice",
    category: "Marketing",
  },
  {
    question: "Como é a segurança da informação na empresa?",
    options: [
        { label: "Não faço", value: 6 },
        { label: "Faço backup", value: 8 },
        { label: "Uma empresa presta esse serviço", value: 10 },
    ],
    type: "choice",
    category: "Tecnologia",
  },
  {
    question: "Como é o processo de revisão de contratos na empresa?",
    options: [
        { label: "Não utilizamos contratos", value: 4 },
        { label: "Eu mesmo reviso", value: 6 },
        { label: "Os advogados externos revisam", value: 8 },
        { label: "O setor jurídico inteiro revisa", value: 10 },
    ],
    type: "choice",
    category: "Jurídico",
  },
  {
    question: "Quais são os principais indicadores contábeis que você monitora?",
    options: [
        { label: "Nenhum", value: 2 },
        { label: "Liquidez", value: 4 },
        { label: "Rentabilidade", value: 6 },
        { label: "Endividamento", value: 8 },
        { label: "Liquidez + Rentabilidade + Endividamento", value: 10 },
    ],
    type: "choice",
    category: "Contábil",
  },
  {
    question: "Como você controla suas despesas e receitas?",
    options: [
        { label: "Não controlo", value: 2 },
        { label: "Papel, caderneta ou etc", value: 4 },
        { label: "Planilhas/Excel", value: 6 },
        { label: "Aplicativo(NIBO, Organizze, conta azul)", value: 8 },
        { label: "Software(ERP, Sankya, TOTV)", value: 10 },
    ],
    type: "choice",
    category: "Financeiro",
  },
  {
    question: "Você mede o nível de satisfação dos funcionários?",
    options: [
        { label: "Não", value: 8 },
        { label: "Sim", value: 10 },        
    ],
    type: "choice",
    category: "Recursos Humanos",
  },
  {
    question: "Como a sua empresa lida com mudanças no ambiente externo?",
    options: [
        { label: "Reativamente", value: 2 },
        { label: "Análise de Impacto e Ação", value: 4 },
        { label: "Temos alguns planos de contenção de danos", value: 6 },
        { label: "Temos uma comissão para esses assuntos", value: 8 },
    ],
  }
];

export default data;