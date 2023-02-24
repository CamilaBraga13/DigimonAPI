const url = "https://digimon-api.vercel.app/api/digimon";

const digimons = document.querySelector("#digimon");
const found = document.querySelector("#found");
const botao = document.querySelector("#btn-filter");

async function getAll (){
  const response = await fetch(url);  
  
  const data = await response.json();
  
  
  data.map((digimon) => {
    
    const tabela = document.createElement("table");

    const nome = document.createElement("td");
    const level = document.createElement("td");  

    nome.innerText = digimon.name;
    level.innerText = digimon.level;    
    
    tabela.appendChild(nome);
    tabela.appendChild(level); 
    
    digimons.appendChild(tabela);
    
    // ----------- Filtro -----------    
    const botao = document.getElementById("btn-filter")
  
    botao.addEventListener("click", function () {     
      
      const inputFiltro = document.getElementById("nome").value ;
      const busca = inputFiltro.replace(/(^\w{1})|(\s+\w{1})/g, letra => letra.toUpperCase());
      
      if (busca == digimon.name || busca == digimon.level ){
      
        nome.innerText = digimon.name;
        level.innerText = digimon.level;
        
        tabela.appendChild(nome);
        tabela.appendChild(level);

        found.appendChild(tabela);
      } 
		})	
  }); 
}

getAll()




