function buscar() {
  let section = document.getElementById("resultados-pesquisa");
  let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase(); // Convertendo para minúsculo logo no início

  if (campoPesquisa === "") {
    section.innerHTML = "<p>Pesquise algo!</p>";
    return;
  }

  // Inicializa uma string vazia para armazenar o HTML dos resultados
  let resultados = "";

  // Itera sobre cada dado no array de dados
  for (let dado of dados) {
    let titulo = dado.titulo.toLowerCase();
    let descricao = dado.descricao.toLocaleLowerCase();

    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
      resultados += `
        <div class="item-resultado">
          <h2><a href="#" target="_blank">${dado.titulo}</a></h2>
          <p class="descricao-meta">${dado.descricao}</p>
        </div>
      `;
    }
      console.log(dado.titulo.includes(campoPesquisa))
      // Cria uma nova div para cada item, formatando o título e a descrição com interpolação de strings
  }
  if (!resultados) {
    resultados = "Pesquisa algo relacionado ao jogo!"
  }
  
    // Atribui o HTML gerado para o elemento section, substituindo o conteúdo anterior
    section.innerHTML = resultados;
  }