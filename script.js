const input = document.querySelector('input');
const lista = document.querySelector('#lista');

const AddPonto1 = document.querySelector('#AddJogo1');
AddPonto1.onclick = () => {
  if (parseInt(Ponto1.textContent) <= parseInt(lista.value)) {
    Ponto1.textContent = parseInt(Ponto1.textContent) + 1
  };
  if (parseInt(Ponto1.textContent) == parseInt(lista.value)) {
    alert("Jogador 1 ganhou!!")
    reseta();
  };
};

const AddPonto2 = document.querySelector('#AddJogo2');
AddPonto2.onclick = () => {
  if (parseInt(Ponto2.textContent) <= parseInt(lista.value)) {
    Ponto2.textContent = parseInt(Ponto2.textContent) + 1
  };
  if (parseInt(Ponto2.textContent) == parseInt(lista.value)) {
    alert("Jogador 2 ganhou!!")
    reseta();
  };
};

const reset = document.querySelector('#reset');
reset.onclick = () => {
  reseta();
};

function reseta(){
  Ponto2.textContent = 0
  Ponto1.textContent = 0
};


const winningScoreSelect = document.querySelector('#lista');
for (let i = 1; i<=21; i++){
    var opt = document.createElement('option');
    opt.value = i;
    opt.innerHTML = i;
    winningScoreSelect.appendChild(opt);
}