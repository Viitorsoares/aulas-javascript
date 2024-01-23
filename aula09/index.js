function useLightTheme() {
    document.body.style.color = '#212529'
    document.body.style.backgroundColor = '#f1f5f9'
}

function useDarkTeheme() {
    document.body.style.color = '#f1f5f9'
    document.body.style.backgroundColor = '#212529'
}

function switchTheme() {
    document.body.classList.toggle('is-light')
    document.body.classList.toggle('is-dark')
}

document.getElementById('lightBtn').addEventListener('click', useLightTheme)  // Tem prioridade no tema, pois o CSS está inline 
document.getElementById('darkBtn').addEventListener('click', useDarkTeheme)  // Tem prioridade no tema, pois o CSS está inline 
document.getElementById('switchBtn').addEventListener('click', switchTheme)   // Aqui o CSS está interno 