document.addEventListener('DOMContentLoaded', () => {
  const btnSaibaMais = document.getElementById('btn-saiba-mais');
  const infoExtra = document.getElementById('info-extra');

  btnSaibaMais.addEventListener('click', () => {
    if (infoExtra.classList.contains('hidden')) {
      infoExtra.classList.remove('hidden');
      btnSaibaMais.textContent = 'Ocultar Resumo dos Aliados vs. Eixo';
    } else {
      infoExtra.classList.add('hidden');
      btnSaibaMais.textContent = 'Exibir Resumo dos Aliados vs. Eixo';
    }
  });
});
