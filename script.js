
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
            { id: "ta_1", nome: "Supino inclinado barra", series: "4x10", img: "" },
            { id: "ta_2", nome: "Reto halter", series: "4x10", img: "" },
            { id: "ta_3", nome: "Declinado máq.", series: "4x10", img: "" },
            { id: "ta_4", nome: "Voador + elev. lat.", series: "4x10", img: "" },
            { id: "ta_5", nome: "Tríceps corda + barra", series: "4x10", img: "" },
            { id: "ta_6", nome: "Francês + testa p", series: "4x10", img: "" },
            { id: "ta_7", nome: "Desenvolvimento + frontal", series: "4x10", img: "" }
        ]
    },
    {
        id: "treino_b", titulo: "Treino B", subtitulo: "Quadríceps",
        exercicios: [
            { id: "tb_1", nome: "Agach. Smith", series: "4x12", img: "./imgs/treino b/agachamento-smith.gif" },
            { id: "tb_2", nome: "Extensora", series: "4x12", img: "./imgs/treino b/extensora.gif" },
            { id: "tb_3", nome: "Leg 45º", series: "4x12", img: "./imgs/treino b/leg-45.gif" },
            { id: "tb_4", nome: "Ext unilateral", series: "4x12", img: "./imgs/treino b/extensora-unilateral.gif" },
            { id: "tb_5", nome: "Hack", series: "4x12", img: "./imgs/treino b/hack.gif" },
            { id: "tb_6", nome: "Adutor", series: "4x12", img: "./imgs/treino b/adutor.gif" },
            { id: "tb_7", nome: "Panturrilha máq.", series: "4x12", img: "./imgs/treino b/panturrilha-maquina.gif" }
        ]
    },
    {
        id: "treino_c", titulo: "Treino C", subtitulo: "Costas / Bíceps",
        exercicios: [
            { id: "tc_1", nome: "Puxada aberta w", series: "4x10", img: "./imgs/treino c/puxada-aberta-w.gif" },
            { id: "tc_2", nome: "Puxada fechada w", series: "4x10", img: "./imgs/treino c/puxada-fechada-w.gif" },
            { id: "tc_3", nome: "Remada triângulo", series: "4x10", img: "./imgs/treino c/remada-triangulo.gif" },
            { id: "tc_4", nome: "Remada supinada uni", series: "4x10", img: "./imgs/treino c/remada-supinada.gif" },
            { id: "tc_5", nome: "Remada curvada Smith", series: "4x10", img: "./imgs/treino c/remada-curvada-smith.gif" },
            { id: "tc_6", nome: "Pull down", series: "4x10", img: "./imgs/treino c/pull-down.gif" },
            { id: "tc_7", nome: "Rosca direta", series: "4x10", img: "./imgs/treino c/rosca-direta.gif" },
            { id: "tc_8", nome: "Rosca invertida", series: "4x10", img: "./imgs/treino c/rosca-invertida.gif" },
            { id: "tc_9", nome: "Martelo", series: "4x10", img: "./imgs/treino c/martelo.gif" },
            { id: "tc_10", nome: "Concentrado", series: "4x10", img: "./imgs/treino c/concentrado.gif" }
        ]
    },
    {
        id: "treino_d", titulo: "Treino D", subtitulo: "Posterior",
        exercicios: [
            { id: "td_1", nome: "Cadeira flexora", series: "4x10", img: "" },
            { id: "td_2", nome: "Mesa flexora", series: "4x10", img: "" },
            { id: "td_3", nome: "Flexora em pé", series: "4x10", img: "" },
            { id: "td_4", nome: "Stiff Smith", series: "4x10", img: "" },
            { id: "td_5", nome: "Búlgaro", series: "4x10", img: "" },
            { id: "td_6", nome: "Abdutor", series: "4x15", img: "" },
            { id: "td_7", nome: "Panturrilha leg.", series: "4x15", img: "" }
        ]
    },
    {
        id: "treino_e", titulo: "Treino E", subtitulo: "Peito / Bíceps",
        exercicios: [
            { id: "te_1", nome: "Voador inclinado", series: "4x10", img: "" },
            { id: "te_2", nome: "Pull Over", series: "4x10", img: "" },
            { id: "te_3", nome: "Cross Over (2 posições)", series: "3x10", img: "" },
            { id: "te_4", nome: "Puxada alta frente + encolhi.", series: "3x10", img: "" },
            { id: "te_5", nome: "Elev. lat. Máq. + ombro no cabo", series: "3x10", img: "" },
            { id: "te_6", nome: "Tríceps coice + invertido", series: "4x10", img: "" },
            { id: "te_7", nome: "Francês uni. + testa banco", series: "4x10", img: "" }
        ]
    },
    {
        id: "treino_f", titulo: "Treino F", subtitulo: "Costa / Bíceps",
        exercicios: [
            { id: "tf_1", nome: "Puxada articulada máq.", series: "4x10", img: "" },
            { id: "tf_2", nome: "Remada articulada", series: "4x10", img: "" },
            { id: "tf_3", nome: "Serrote", series: "4x10", img: "" },
            { id: "tf_4", nome: "Pull face", series: "4x10", img: "" },
            { id: "tf_5", nome: "Rosca martelo barra H", series: "4x10", img: "" },
            { id: "tf_6", nome: "Banco scott drop (10-10-10)", series: "3x10", img: "" },
            { id: "tf_7", nome: "Extensão braquial corda", series: "", img: "" },
            { id: "tf_8", nome: "Extensão lombar banco romano", series: "", img: "" }
        ]
    }
];

// 2. Gerenciamento de Estado (LocalStorage)
function carregarEstado() {
    const ordemSalva = localStorage.getItem('ordemTreinos');
    const progressoSalvo = localStorage.getItem('progressoExercicios');

    return {
        ordem: ordemSalva ? JSON.parse(ordemSalva) : treinosData.map(t => t.id),
        progresso: progressoSalvo ? JSON.parse(progressoSalvo) : {}
    };
}

let estado = carregarEstado();

function salvarEstado() {
    localStorage.setItem('ordemTreinos', JSON.stringify(estado.ordem));
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
    document.getElementById('modalImg').src = url || 'https://via.placeholder.com/300?text=Sem+Foto';
    document.getElementById('imagemModal').style.display = 'flex';
}

function fecharModal() {
    document.getElementById('imagemModal').style.display = 'none';
}

// Renderiza na primeira carga
renderizar();
