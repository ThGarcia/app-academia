
// Registro do Service Worker para permitir a instalação como APP
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js')
            .catch(err => console.log('Erro ao registrar Service Worker:', err));
    });
}
// 1. Dados dos Treinos
const treinosData = [
    {
        id: "treino_a", titulo: "Treino A", subtitulo: "Peito / Tríceps",
        exercicios: [
            { id: "ta_1", nome: "Supino Inclinado Barra", series: "4x10", img: "./imgs/thiago/treino a/supino-inclinado-barra.gif" },
            { id: "ta_2", nome: "Reto Halter", series: "4x10", img: "./imgs/thiago/treino a/reto-halter.gif" },
            { id: "ta_3", nome: "Declinado Máquina", series: "4x10", img: "./imgs/thiago/treino a/declinado-maquina.gif" },
            { id: "ta_4", nome: "Voador", series: "4x10", img: "./imgs/thiago/treino a/voador.gif" },
            { id: "ta_5", nome: "Elevação Lateral", series: "4x10", img: "./imgs/thiago/treino a/elevacao-lateral-ombro.gif" },
            { id: "ta_6", nome: "Tríceps Corda", series: "4x10", img: "./imgs/thiago/treino a/triceps-corda.gif" },
            { id: "ta_7", nome: "Tríceps Barra", series: "4x10", img: "./imgs/thiago/treino a/triceps-barra.gif" },
            { id: "ta_8", nome: "Francês", series: "4x10", img: "./imgs/thiago/treino a/triceps-frances.gif" },
            { id: "ta_9", nome: "Testa P", series: "4x10", img: "./imgs/thiago/treino a/triceps-testa.gif" },
            { id: "ta_10", nome: "Desenvolvimento Frontal", series: "4x10", img: "./imgs/thiago/treino a/desenvolvimento-frontal.gif" },
            { id: "ta_11", nome: "Elevação Frontal", series: "4x10", img: "./imgs/thiago/treino a/elevacao-frontal.gif" }
        ]
    },
    {
        id: "treino_b", titulo: "Treino B", subtitulo: "Quadríceps",
        exercicios: [
            { id: "tb_1", nome: "Agachamento Smith", series: "4x12", img: "./imgs/thiago/treino b/agachamento-smith.gif" },
            { id: "tb_2", nome: "Cadeira Extensora", series: "4x12", img: "./imgs/thiago/treino b/extensora.gif" },
            { id: "tb_3", nome: "Leg Press 45º", series: "4x12", img: "./imgs/thiago/treino b/leg-45.gif" },
            { id: "tb_4", nome: "Extensora Unilateral", series: "4x12", img: "./imgs/thiago/treino b/extensora-unilateral.gif" },
            { id: "tb_5", nome: "Hack", series: "4x12", img: "./imgs/thiago/treino b/hack.gif" },
            { id: "tb_6", nome: "Adutor", series: "4x12", img: "./imgs/thiago/treino b/adutor.gif" },
            { id: "tb_7", nome: "Panturrilha Sentado", series: "4x12", img: "./imgs/thiago/treino b/panturrilha-sentado.gif" }
        ]
    },
    {
        id: "treino_c", titulo: "Treino C", subtitulo: "Costas / Bíceps",
        exercicios: [
            { id: "tc_1", nome: "Puxada Aberta W", series: "4x10", img: "./imgs/thiago/treino c/puxada-aberta-w.gif" },
            { id: "tc_2", nome: "Puxada Fechada W", series: "4x10", img: "./imgs/thiago/treino c/puxada-fechada-w.gif" },
            { id: "tc_3", nome: "Remada Triângulo", series: "4x10", img: "./imgs/thiago/treino c/remada-triangulo.gif" },
            { id: "tc_4", nome: "Remada Supinada Unilateral", series: "4x10", img: "./imgs/thiago/treino c/remada-supinada.gif" },
            { id: "tc_5", nome: "Remada Curvada Smith", series: "4x10", img: "./imgs/thiago/treino c/remada-curvada-smith.gif" },
            { id: "tc_6", nome: "Pull Down", series: "4x10", img: "./imgs/thiago/treino c/pull-down.gif" },
            { id: "tc_7", nome: "Rosca Direta", series: "4x10", img: "./imgs/thiago/treino c/rosca-direta.gif" },
            { id: "tc_8", nome: "Rosca Invertida", series: "4x10", img: "./imgs/thiago/treino c/rosca-invertida.gif" },
            { id: "tc_9", nome: "Martelo", series: "4x10", img: "./imgs/thiago/treino c/martelo.gif" },
            { id: "tc_10", nome: "Concentrado", series: "4x10", img: "./imgs/thiago/treino c/concentrado.gif" }
        ]
    },
    {
        id: "treino_d", titulo: "Treino D", subtitulo: "Posterior",
        exercicios: [
            { id: "td_1", nome: "Cadeira Flexora", series: "4x10", img: "./imgs/thiago/treino d/cadeira-flexora.gif" },
            { id: "td_2", nome: "Mesa Flexora", series: "4x10", img: "./imgs/thiago/treino d/mesa-flexora.gif" },
            { id: "td_3", nome: "Flexora em Pé", series: "4x10", img: "./imgs/thiago/treino d/flexora-em-pe.gif" },
            { id: "td_4", nome: "Stiff Smith", series: "4x10", img: "./imgs/thiago/treino d/stiff-smith.gif" },
            { id: "td_5", nome: "Búlgaro", series: "4x10", img: "./imgs/thiago/treino d/bulgaro.gif" },
            { id: "td_6", nome: "Abdutor", series: "4x15", img: "./imgs/thiago/treino d/abdutor.gif" },
            { id: "td_7", nome: "Panturrilha Máquina", series: "4x15", img: "./imgs/thiago/treino d/panturrilha-maquina.gif" }
        ]
    },
    {
        id: "treino_e", titulo: "Treino E", subtitulo: "Peito / Bíceps",
        exercicios: [
            { id: "te_1", nome: "Voador inclinado", series: "4x10", img: "./imgs/thiago/treino e/voador-inclinado.gif" },
            { id: "te_2", nome: "Pull Over", series: "4x10", img: "./imgs/thiago/treino e/pull-over.gif" },
            { id: "te_3", nome: "Cross Over Polia Alta", series: "3x10", img: "./imgs/thiago/treino e/cross-over-polia-alta.gif" },
            { id: "te_4", nome: "Cross Over Polia Baixa", series: "3x10", img: "./imgs/thiago/treino e/cross-over-polia-baixa.gif" },
            { id: "te_5", nome: "Puxada Alta Frente", series: "3x10", img: "./imgs/thiago/treino e/puxada-alta-frente.gif" },
            { id: "te_6", nome: "Elevação Ombro", series: "3x10", img: "./imgs/thiago/treino e/elevacao-ombro.gif" },
            { id: "te_7", nome: "Elevação Lateral", series: "3x10", img: "./imgs/thiago/treino e/elevacao-lateral.gif" },
            { id: "te_8", nome: "Ombro no Cabo", series: "3x10", img: "./imgs/thiago/treino e/ombro-cabo.gif" },
            { id: "te_9", nome: "Tríceps Coice", series: "4x10", img: "./imgs/thiago/treino e/triceps-coice.gif" },
            { id: "te_10", nome: "Invertido", series: "4x10", img: "./imgs/thiago/treino e/invertido.gif" },
            { id: "te_11", nome: "Francês", series: "4x10", img: "./imgs/thiago/treino e/frances.gif" },
            { id: "te_12", nome: "Testa", series: "4x10", img: "./imgs/thiago/treino e/testa.gif" }
        ]
    },
    {
        id: "treino_f", titulo: "Treino F", subtitulo: "Costa / Bíceps",
        exercicios: [
            { id: "tf_1", nome: "Puxada Articulada Máquina", series: "4x10", img: "./imgs/thiago/treino f/puxada-articulada-maquina.gif" },
            { id: "tf_2", nome: "Remada Articulada", series: "4x10", img: "./imgs/thiago/treino f/remada-articulada.gif" },
            { id: "tf_3", nome: "Serrote", series: "4x10", img: "./imgs/thiago/treino f/serrote.gif" },
            { id: "tf_4", nome: "Pull Face", series: "4x10", img: "./imgs/thiago/treino f/pull-face.gif" },
            { id: "tf_5", nome: "Rosca Martelo Barra H", series: "4x10", img: "./imgs/thiago/treino f/rosca-martelo-barra-h.gif" },
            { id: "tf_6", nome: "Banco Scott Drop (10-10-10)", series: "3x10", img: "./imgs/thiago/treino f/banco-scott.gif" },
            { id: "tf_7", nome: "Extensão Braquial Corda", series: "", img: "./imgs/thiago/treino f/extensao-braquial-corda.gif" },
            { id: "tf_8", nome: "Extensão Lombar Banco Romano", series: "", img: "./imgs/thiago/treino f/extensao-lombar-banco-romano.gif" }
        ]
    },
    {
        id: "segunda", titulo: "Segunda", subtitulo: "Quadríceps",
        exercicios: [
            { id: "1_1", nome: "Extensora Unilateral", series: "4x12", img: "./imgs/atencao.png" },
            { id: "1_2", nome: "Hack", series: "4x12", img: "./imgs/atencao.png" },
            { id: "1_3", nome: "Leg Press 45°", series: "4x12", img: "./imgs/atencao.png" },
            { id: "1_4", nome: "Leg Press 90°", series: "3x10", img: "./imgs/atencao.png" },
            { id: "1_5", nome: "Adutor", series: "3x15", img: "./imgs/atencao.png" },
            { id: "1_6", nome: "Panturrilha Máquina", series: "4x12", img: "./imgs/atencao.png" }
        ]
    },
    {
        id: "terca", titulo: "Terça", subtitulo: "Peito / Ombro / Tríceps",
        exercicios: [
            { id: "2_1", nome: "Voador", series: "4x10", img: "./imgs/atencao.png" },
            { id: "2_2", nome: "Supino Máquina", series: "4x10", img: "./imgs/atencao.png" },
            { id: "2_3", nome: "Elevação Lateral", series: "4x10", img: "./imgs/atencao.png" },
            { id: "2_4", nome: "Elevação Frontal", series: "4x10", img: "./imgs/atencao.png" },
            { id: "2_5", nome: "Desenvolvimento Máquina", series: "4x10", img: "./imgs/atencao.png" },
            { id: "2_6", nome: "Máquina de Tríceps", series: "4x10", img: "./imgs/atencao.png" },
            { id: "2_7", nome: "Tríceps Corda", series: "4x10", img: "./imgs/atencao.png" },
            { id: "2_8", nome: "Tríceps Puley", series: "4x10", img: "./imgs/atencao.png" }
        ]
    },
    {
        id: "quarta", titulo: "Quarta", subtitulo: "Posterior",
        exercicios: [
            { id: "3_1", nome: "Cadeira Flexora", series: "4x10", img: "./imgs/atencao.png" },
            { id: "3_2", nome: "Mesa Flexora", series: "4x10", img: "./imgs/atencao.png" },
            { id: "3_3", nome: "Flexora em Pé", series: "4x10", img: "./imgs/atencao.png" },
            { id: "3_4", nome: "Stiff", series: "4x10", img: "./imgs/atencao.png" },
            { id: "3_5", nome: "Adutor Máquina", series: "4x15", img: "./imgs/atencao.png" },
            { id: "3_6", nome: "Panturrilha Escada", series: "4x12", img: "./imgs/atencao.png" }
        ]
    },
    {
        id: "quinta", titulo: "Quinta", subtitulo: "Costa / Bíceps",
        exercicios: [
            { id: "4_1", nome: "Puxada Alta Aberta e Fechada", series: "3x10", img: "./imgs/atencao.png" },
            { id: "4_2", nome: "Remada Baixa Triângulo", series: "3x10", img: "./imgs/atencao.png" },
            { id: "4_3", nome: "Remada Articulada", series: "3x10", img: "./imgs/atencao.png" },
            { id: "4_4", nome: "Pull Face", series: "3x10", img: "./imgs/atencao.png" },
            { id: "4_5", nome: "Crucifixo Invertido", series: "3x10", img: "./imgs/atencao.png" },
            { id: "4_6", nome: "Rosca Alternada", series: "3x10", img: "./imgs/atencao.png" },
            { id: "4_7", nome: "Rosca Bnaco Scott", series: "3x10", img: "./imgs/atencao.png" }
        ]
    },
    {
        id: "sexta", titulo: "Sexta", subtitulo: "Glúteos",
        exercicios: [
            { id: "5_1", nome: "Sumô", series: "4x10", img: "./imgs/atencao.png" },
            { id: "5_2", nome: "Coice no Cabo", series: "4x10", img: "./imgs/atencao.png" },
            { id: "5_3", nome: "Elevação Pélvica", series: "4x10", img: "./imgs/atencao.png" },
            { id: "5_4", nome: "Abdutora Robótica", series: "4x10", img: "./imgs/atencao.png" },
            { id: "5_5", nome: "Gravitron", series: "4x10", img: "./imgs/atencao.png" },
            { id: "5_6", nome: "Panturrilha em Pé", series: "4x10", img: "./imgs/atencao.png" }
        ]
    }
];

// 2. Gerenciamento de Estado (LocalStorage)
// Verifica se o caminho da URL contém "camila"
const isCamila = window.location.search.includes('camila') || window.location.pathname.includes('camila');

// Define quais IDs pertencem a cada perfil
const idsPrincipais = ["treino_a", "treino_b", "treino_c", "treino_d", "treino_e", "treino_f"];
const idsCamila = ["segunda", "terca", "quarta", "quinta", "sexta"];

// Lista de IDs permitidos para a rota atual
const idsPermitidos = isCamila ? idsCamila : idsPrincipais;
const chaveStorage = isCamila ? 'ordemTreinos_camila' : 'ordemTreinos_principal';

function carregarEstado() {
    const ordemSalva = localStorage.getItem(chaveStorage);
    const progressoSalvo = localStorage.getItem('progressoExercicios');

    let ordem = ordemSalva ? JSON.parse(ordemSalva) : idsPermitidos;

    // Garante que apenas os treinos permitidos para a rota atual apareçam na ordem
    ordem = ordem.filter(id => idsPermitidos.includes(id));

    // Caso falte algum treino da lista padrão (ex: novo treino adicionado), adiciona ao final
    idsPermitidos.forEach(id => {
        if (!ordem.includes(id)) {
            ordem.push(id);
        }
    });

    return {
        ordem: ordem,
        progresso: progressoSalvo ? JSON.parse(progressoSalvo) : {}
    };
}

let estado = carregarEstado();

function salvarEstado() {
    localStorage.setItem(chaveStorage, JSON.stringify(estado.ordem));
    localStorage.setItem('progressoExercicios', JSON.stringify(estado.progresso));
}

// 3. Renderização da Interface
function renderizar() {
    const appDiv = document.getElementById('app');
    appDiv.innerHTML = '';

    estado.ordem.forEach((treinoId) => {
        const treino = treinosData.find(t => t.id === treinoId);
        if (!treino) return;

        const card = document.createElement('div');
        card.className = 'card';

        let htmlExercicios = treino.exercicios.map(ex => {
            const exEstado = estado.progresso[ex.id] || { concluido: false, peso: '' };
            return `
            <!--
            <div class="exercicio-item">
              <div class="exercicio-info">
                <input type="checkbox" ${exEstado.concluido ? 'checked' : ''} 
                       onchange="toggleCheck('${ex.id}', this.checked)">
                <span class="exercicio-nome" onclick="abrirModal('${ex.nome}', '${ex.img}')">${ex.nome}</span>
                <small>(${ex.series})</small>
              </div>
              <div>
                <input type="number" class="carga-input" placeholder="kg" value="${exEstado.peso}" 
                       onchange="salvarPeso('${ex.id}', this.value)"> kg
              </div>
            </div>
            -->
            <div class="exercicio-item">
                <input type="checkbox" ${exEstado.concluido ? 'checked' : ''} 
                       onchange="toggleCheck('${ex.id}', this.checked)">
              <div class="exercicio-detalhes">
              <div class="exercicio-info">
                <span class="exercicio-nome" onclick="abrirModal('${ex.nome}', '${ex.img}')">${ex.nome}</span>
                
              </div>
              <div class="exercicio-data">
              <small>${ex.series}</small>
                <div>
                <input type="number" class="carga-input" placeholder="kg" value="${exEstado.peso}" 
                       onchange="salvarPeso('${ex.id}', this.value)"> kg
                       </div>
              </div>
              </div>
            </div>
          `;
        }).join('');

        card.innerHTML = `
          <div class="card-header">
            <h2>${treino.titulo}</h2>
            <span>${treino.subtitulo}</span>
          </div>
          <div class="card-body">
            ${htmlExercicios}
          </div>
          <button class="btn-pago" onclick="marcarComoPago('${treino.id}')">PAGO!</button>
        `;

        appDiv.appendChild(card);
    });
}

// 4. Funções de Ação
function toggleCheck(exId, concluido) {
    if (!estado.progresso[exId]) estado.progresso[exId] = { concluido: false, peso: '' };
    estado.progresso[exId].concluido = concluido;
    salvarEstado();
}

function salvarPeso(exId, peso) {
    if (!estado.progresso[exId]) estado.progresso[exId] = { concluido: false, peso: '' };
    estado.progresso[exId].peso = peso;
    salvarEstado();
}

function marcarComoPago(treinoId) {
    // 1. Limpa os checkboxes desse treino específico
    const treino = treinosData.find(t => t.id === treinoId);
    treino.exercicios.forEach(ex => {
        if (estado.progresso[ex.id]) {
            estado.progresso[ex.id].concluido = false;
        }
    });

    // 2. Reordena o array jogando o ID do treino atual para o final
    estado.ordem = estado.ordem.filter(id => id !== treinoId);
    estado.ordem.push(treinoId);

    // 3. Salva e atualiza a tela
    salvarEstado();
    renderizar();
}

// 5. Funções do Modal de Imagem
function abrirModal(nome, url) {
    document.getElementById('modalTitulo').innerText = nome;
    document.getElementById('modalImg').src = url || './imgs/atencao.png';
    document.getElementById('imagemModal').style.display = 'flex';
}

function fecharModal() {
    document.getElementById('imagemModal').style.display = 'none';
}

// Renderiza na primeira carga
renderizar();
