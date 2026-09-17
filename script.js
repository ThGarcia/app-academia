
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
            { id: "tb_1", nome: "Agachamento Smith", series: "4x12", img: "./imgs/treino b/agachamento-smith.gif" },
            { id: "tb_2", nome: "Cadeira Extensora", series: "4x12", img: "./imgs/treino b/extensora.gif" },
            { id: "tb_3", nome: "Leg Press 45º", series: "4x12", img: "./imgs/treino b/leg-45.gif" },
            { id: "tb_4", nome: "Extensora unilateral", series: "4x12", img: "./imgs/treino b/extensora-unilateral.gif" },
            { id: "tb_5", nome: "Hack", series: "4x12", img: "./imgs/treino b/hack.gif" },
            { id: "tb_6", nome: "Adutor", series: "4x12", img: "./imgs/treino b/adutor.gif" },
            { id: "tb_7", nome: "Panturrilha máquina", series: "4x12", img: "./imgs/treino b/panturrilha-maquina.gif" }
        ]
    },
    {
        id: "treino_c", titulo: "Treino C", subtitulo: "Costas / Bíceps",
        exercicios: [
            { id: "tc_1", nome: "Puxada Aberta W", series: "4x10", img: "./imgs/treino c/puxada-aberta-w.gif" },
            { id: "tc_2", nome: "Puxada Fechada W", series: "4x10", img: "./imgs/treino c/puxada-fechada-w.gif" },
            { id: "tc_3", nome: "Remada Triângulo", series: "4x10", img: "./imgs/treino c/remada-triangulo.gif" },
            { id: "tc_4", nome: "Remada Supinada Unilateral", series: "4x10", img: "./imgs/treino c/remada-supinada.gif" },
            { id: "tc_5", nome: "Remada Curvada Smith", series: "4x10", img: "./imgs/treino c/remada-curvada-smith.gif" },
            { id: "tc_6", nome: "Pull Down", series: "4x10", img: "./imgs/treino c/pull-down.gif" },
            { id: "tc_7", nome: "Rosca Direta", series: "4x10", img: "./imgs/treino c/rosca-direta.gif" },
            { id: "tc_8", nome: "Rosca Invertida", series: "4x10", img: "./imgs/treino c/rosca-invertida.gif" },
            { id: "tc_9", nome: "Martelo", series: "4x10", img: "./imgs/treino c/martelo.gif" },
            { id: "tc_10", nome: "Concentrado", series: "4x10", img: "./imgs/treino c/concentrado.gif" }
        ]
    },
    {
        id: "treino_d", titulo: "Treino D", subtitulo: "Posterior",
        exercicios: [
            { id: "td_1", nome: "Cadeira Flexora", series: "4x10", img: "./imgs/treino d/cadeira-flexora.gif" },
            { id: "td_2", nome: "Mesa Flexora", series: "4x10", img: "./imgs/treino d/mesa-flexora.gif" },
            { id: "td_3", nome: "Flexora em Pé", series: "4x10", img: "./imgs/treino d/flexora-em-pe.gif" },
            { id: "td_4", nome: "Stiff Smith", series: "4x10", img: "./imgs/treino d/stiff-smith.gif" },
            { id: "td_5", nome: "Búlgaro", series: "4x10", img: "./imgs/treino d/bulgaro.gif" },
            { id: "td_6", nome: "Abdutor", series: "4x15", img: "./imgs/treino d/abdutor.gif" },
            { id: "td_7", nome: "Panturrilha Leg Press 45°", series: "4x15", img: "./imgs/treino d/panturrilha-leg.gif" }
        ]
    },
    {
        id: "treino_e", titulo: "Treino E", subtitulo: "Peito / Bíceps",
        exercicios: [
            { id: "te_1", nome: "Voador inclinado", series: "4x10", img: "./imgs/treino e/voador-inclinado.gif" },
            { id: "te_2", nome: "Pull Over", series: "4x10", img: "./imgs/treino e/pull-over.gif" },
            { id: "te_3", nome: "Cross Over Polia Alta", series: "3x10", img: "./imgs/treino e/cross-over-polia-alta.gif" },
            { id: "te_4", nome: "Cross Over Polia Baixa", series: "3x10", img: "./imgs/treino e/cross-over-polia-baixa.gif" },
            { id: "te_5", nome: "Puxada Alta Frente", series: "3x10", img: "./imgs/treino e/puxada-alta-frente.gif" },            
            { id: "te_6", nome: "Elevação Ombro", series: "3x10", img: "./imgs/treino e/elevacao-ombro.gif" },
            { id: "te_7", nome: "Elevação Lateral", series: "3x10", img: "./imgs/treino e/elevacao-lateral.gif" },
            { id: "te_8", nome: "Ombro no Cabo", series: "3x10", img: "./imgs/treino e/ombro-cabo.gif" },
            { id: "te_9", nome: "Tríceps Coice", series: "4x10", img: "./imgs/treino e/triceps-coice.gif" },
            { id: "te_10", nome: "Invertido", series: "4x10", img: "./imgs/treino e/invertido.gif" },
            { id: "te_11", nome: "Francês", series: "4x10", img: "./imgs/treino e/frances.gif" },
            { id: "te_12", nome: "Testa", series: "4x10", img: "./imgs/treino e/testa.gif" }
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
