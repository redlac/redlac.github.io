function goToPortfolio() {
    let mainMenu = document.getElementById('main-menu');
    mainMenu.style.display = 'none';

    let portfolio = document.getElementById('portfolio');
    portfolio.style.display = 'block';
}

function goBack() {
    let mainMenu = document.getElementById('main-menu');
    mainMenu.style.display = 'block';

    let portfolio = document.getElementById('portfolio');
    portfolio.style.display = 'none';

    let contact = document.getElementById('contact');
    contact.style.display = 'none';
}

function goToContact(){
    let mainMenu = document.getElementById('main-menu');
    mainMenu.style.display = 'none';

    let contact = document.getElementById('contact');
    contact.style.display = 'block';

}