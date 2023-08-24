async function fetchJobListings() {
    try {
        const response = await fetch('data.json');
        const data = await response.json();

        const jobListingsDiv = document.querySelector('#lista');

        data.forEach(job => {
            console.log(job.new, typeof job.new);
        });
        data.forEach(job => {
            const jobDiv = document.createElement('li');
            jobDiv.innerHTML = `
        <div class="notas">
            <div class="notaInfomacoes">
                <h2 class="infoNomes">${job.nome} </h2>
                <p class="infoIdade">Idade: ${job.idade}</p>
            </div>
            <div class="notaDisciplinas">
                <h3 class="notaDiscTitulo">Nota: ${job.nota}</h3>
                <h2 class="notaDiscSubtitulo">Disciplinas:</h2>
                <p class="nota_disciplinas">${job.disciplinas[0]}</p>
                <p class="nota_disciplinas">${job.disciplinas[1]}</p>
                <p class="nota_disciplinas">${job.disciplinas[2]}</p>
            </div>
        </div>
            `;
            jobListingsDiv.appendChild(jobDiv);
        });
    } catch (error) {
        console.error('Erro ao buscar os dados:', error);
    }
}
window.onload = fetchJobListings;