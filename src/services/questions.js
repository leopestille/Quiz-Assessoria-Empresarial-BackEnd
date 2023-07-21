const data = [
    {
        question: "Qual foi o seu faturamento nos últimos 12 meses?",
        options: [
            { label: "Até R$ 20.000,00", value: 2 },
            { label: "De R$ 20.000,00 a R$ 50.000,00", value: 4 },
            { label: "De R$ 50.000,00 a R$ 100.000,00", value: 6 },
            { label: "De R$ 100.000,00 a R$ 500.000,00", value: 8 },
            { label: "Acima de R$ 500.000,00", value: 10 }
        ],
        type: "choice",
        category: "Financeiro"
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
        category: "Recursos Humanos"
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
        category: "Diretiva"
    },
    {
        question: "Qual a sua estratégia de Marketing?",
        options: [
            { label: "Não temos", value: 2 },
            { label: "Mídias off line (jornal, revista, folder e etc.)", value: 4 },
            { label: "Mídias on line (redes sociais, site, e-mail marketing e etc.)", value: 6 },
            { label: "Temos uma agência que cuida disso", value: 8 },
            { label: "Temos um setor que cuida disso", value: 10 },
        ],
        type: "choice",
        category: "Marketing"
    },
    {
        question: "Você faz uso de tecnologias em suas operações? (Ex.: Vendas on-line, fechamentos de contrato on-line, CRM)",
        options: [
            { label: "Não", value: 8 },
            { label: "Sim", value: 10 },
        ],
        type: "choice",
        category: "Tecnologia"
    },
    {
        question: "A empresa tem um departamento jurídico interno ou terceirizado?",
        options: [
            { label: "Não", value: 6 },
            { label: "Externo", value: 8 },
            { label: "Interno", value: 10 },
        ],
        type: "choice",
        category: "Jurídico"
    },
    {
        question: "Você organiza e mantém seus registros contábeis?",
        options: [
            { label: "Não", value: 6 },
            { label: "Sim, em parte", value: 8 },
            { label: "Sim, todos", value: 10 },
        ],
        type: "choice",
        category: "Contábil"
    },
    {
        question: "Você teve lucro nos últimos 12 meses?",
        options: [
            { label: "Não sei", value: 2 },
            { label: "De 1 a 3", value: 4 },
            { label: "De 4 a 6", value: 6 },
            { label: "De 7 a 9 ", value: 8 },
            { label: "De 10 a 12", value: 10 },
        ]
    },
    {
        question: "Você promove o desenvolvimento de competências dos funcionários?",
        options: [
            { label: "Não", value: 4 },
            { label: "Realizo feedback 1x1", value: 6 },
            { label: "Promovo treinamentos até 3x ao ano", value: 8 },
            { label: "Promovo treinamento contínuo (possuímos um setor de T&D) ", value: 10 },
        ]
    },
];

export default data;