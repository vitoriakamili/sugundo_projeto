function showPage(pageId) {
    // Esconder todas as páginas
    var pages = document.getElementsByClassName('page');
    for (var i = 0; i < pages.length; i++) {
        pages[i].classList.remove('active');
    }
    // Mostrar a página atual
    document.getElementById(pageId).classList.add('active');
}