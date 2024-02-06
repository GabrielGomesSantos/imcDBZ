function scrollToSection() {
    var section = $('#' + 'resultSection');

    if (section.length) {
        $('html, body').animate({
            scrollTop: section.offset().top
        }, 1000); // 1000 milissegundos (1 segundo) para a animação
    }
}