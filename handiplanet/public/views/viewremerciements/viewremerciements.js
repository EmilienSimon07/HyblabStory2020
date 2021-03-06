/*
 * File Created: 2020-01-28 21:05:59
 * Author: Christophe SONNEVILLE
 * Copyright - 2020 Christophe SONNEVILLE
 */
class ViewThanks extends View {
  constructor(el) {
    super('viewremerciements', el || document.getElementById('view-container'));
  }

  linkElements() {
    hideSplash();
    const nextBt = setOverlayButton('Retour', false);
    nextBt.addEventListener('click', () => {
      this.switchToComparatif();
    });
    this.createName('agr', 'Benoit', 'Frehel');
    this.createName('agr', 'Maéva', 'Pasquier');

    this.createName('audencia', 'Clément', 'Godet');
    this.createName('audencia', 'Jean', 'Pechère');

    this.createName('polytech', 'Eric', 'Bizet');
    this.createName('polytech', 'Alban', 'Lecuivre');
    this.createName('polytech', 'Pierre', 'Le Guen');
    this.createName('polytech', 'Pierre', 'Maupin');
    this.createName('polytech', 'Christophe', 'Sonneville');

    const hyblabImg = document.createElement('img');
    hyblabImg.src = 'assets/logo-hyblab.svg';
    hyblabImg.classList = 'sponsor';
    document.getElementById('view-thanks-agr').appendChild(hyblabImg);

    const nantesImg = document.createElement('img');
    nantesImg.src = 'assets/logo_nantesmetropole.svg';
    nantesImg.classList = 'sponsor';
    document.getElementById('view-thanks-agr').appendChild(nantesImg);

    const omlImg = document.createElement('img');
    omlImg.src = 'assets/logo-oml.svg';
    omlImg.classList = 'sponsor';
    document.getElementById('view-thanks-audencia').appendChild(omlImg);

    const logoContainer = document.createElement('div');
    logoContainer.className = 'sponsor';

    const openSourceImg = document.createElement('img');
    openSourceImg.src = 'assets/logo_opensource.svg';

    const ccImg = document.createElement('img');
    ccImg.src = 'assets/logo_cc.svg';

    logoContainer.appendChild(openSourceImg);
    logoContainer.appendChild(ccImg);

    document.getElementById('view-thanks-audencia').appendChild(logoContainer);

    const borderBottom = document.getElementById('overlay-footer');
    borderBottom.className = 'hide-after';
  }

  createName(icon, firstname, lastname) {
    const article = document.createElement('article');
    article.classList = 'view-thanks-name';
    const iconDiv = document.createElement('div');
    const imgContainer = document.createElement('div');
    const img = document.createElement('img');
    img.src = `assets/${icon}-icon.svg`;
    img.alt = `Logo ${icon}`;
    imgContainer.appendChild(img);
    iconDiv.appendChild(imgContainer);
    article.appendChild(iconDiv);

    const nameDiv = document.createElement('div');
    const titleName = document.createElement('h1');
    const bold = document.createElement('em');
    const firstnameElement = document.createTextNode(firstname + ' ');
    bold.appendChild(firstnameElement);
    const lastnameElement = document.createTextNode(lastname);
    titleName.appendChild(bold);
    titleName.appendChild(lastnameElement);
    nameDiv.appendChild(titleName);
    article.appendChild(nameDiv);

    const containerElement = document.getElementById(`view-thanks-${icon}`);
    containerElement.appendChild(article);
  }

  async switchToComparatif() {
    const borderBottom = document.getElementById('overlay-footer');
    borderBottom.className = '';
    transitionHorizontalInvert(this.view, Comparatif);
  }
}

ViewThanks.titre = 'Remerciements';