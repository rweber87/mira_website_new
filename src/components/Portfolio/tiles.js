export const primaryUrl = 'https://mira-website-new.s3.amazonaws.com/';
const tileLoc = 'tile-images/';
const projectLoc = 'projects/';
export const tileUrl = primaryUrl + tileLoc;

export const tiles = [
  {
    imageSrc: null,
    topText:
      'Ich gestalte Digital- und Print- medien mit Kreativität, Liebe zum Detail und einem Blick für das große Ganze. Ich helfe dir, eine visuelle Sprache für deine Inhalte zu finden. Let’s tell a good story!',
    botText: '',
    id: 0,
    isProjectTile: false,
    classValue: 'text-1',
    link: '/hallo',
  },
  {
    imageSrc: tileUrl + 'Landingpage_Logos.png',
    topText: 'Logos',
    botText: '',
    headerImage: primaryUrl + projectLoc + 'Logos/Logos_Header.png',
    id: 1,
    isProjectTile: true,
    classValue: 'text',
    page: {
      images: [
        [
          {
            src: primaryUrl + projectLoc + 'Logos/Camaleon.png',
            width: 585,
            height: 410,
            alt: 'project2Image1',
          },
          {
            src: primaryUrl + projectLoc + 'Logos/Camaleon_2.png',
            width: 585,
            height: 410,
            alt: 'project2Image1',
          },
        ],
        [
          {
            src: primaryUrl + projectLoc + 'Logos/PraxisUtaSiebert.png',
            width: 585,
            height: 410,
            alt: 'project2Image11',
          },
          {
            src: primaryUrl + projectLoc + 'Logos/PraxisUtaSiebert_2.png',
            width: 585,
            height: 410,
            alt: 'project2Image11',
          },
        ],
        [
          {
            src: primaryUrl + projectLoc + 'Logos/Conradt.png',
            width: 585,
            height: 410,
            alt: 'project2Image3',
          },
          {
            src: primaryUrl + projectLoc + 'Logos/Conradt_2.png',
            width: 585,
            height: 410,
            alt: 'project2Image3',
          },
        ],
        [
          {
            src: primaryUrl + projectLoc + 'Logos/Abuell.png',
            width: 585,
            height: 410,
            alt: 'project2Image7',
          },
          {
            src: primaryUrl + projectLoc + 'Logos/Abuell_2.png',
            width: 585,
            height: 410,
            alt: 'project2Image7',
          },
        ],
        [
          {
            src: primaryUrl + projectLoc + 'Logos/SmokeRing.png',
            width: 585,
            height: 410,
            alt: 'project2Image5',
          },
          {
            src: primaryUrl + projectLoc + 'Logos/SmokeRing_2.png',
            width: 585,
            height: 410,
            alt: 'project2Image5',
          },
        ],
        [
          {
            src: primaryUrl + projectLoc + 'Logos/Theresa.png',
            width: 585,
            height: 410,
            alt: 'project2Image17',
          },
          {
            src: primaryUrl + projectLoc + 'Logos/Theresa_2.png',
            width: 585,
            height: 410,
            alt: 'project2Image17',
          },
        ],
        [
          {
            src: primaryUrl + projectLoc + 'Logos/lamano.png',
            width: 585,
            height: 410,
            alt: 'project2Image1',
          },
          {
            src: primaryUrl + projectLoc + 'Logos/lamano_2.png',
            width: 585,
            height: 410,
            alt: 'project2Image1',
          },
        ],
        [
          {
            src: primaryUrl + projectLoc + 'Logos/Gioia.png',
            width: 585,
            height: 410,
            alt: 'project2Image9',
          },
          {
            src: primaryUrl + projectLoc + 'Logos/Gioia_2.png',
            width: 585,
            height: 410,
            alt: 'project2Image9',
          },
        ],
        [
          {
            src: primaryUrl + projectLoc + 'Logos/Heuss.png',
            width: 585,
            height: 410,
            alt: 'project2Image18',
          },
          {
            src: primaryUrl + projectLoc + 'Logos/Heuss_2.png',
            width: 585,
            height: 410,
            alt: 'project2Image18',
          },
        ],
      ],
      title: 'Logos',
      alt: 'Logos',
      description:
        'Logogestaltung und die Ausarbeitung eines auf allen Ebenen stimmigen Erscheinungsbilds gehören zu meinen Lieblingsaufgaben. Der Prozess erfordert große Feinfühligkeit, ist immer wieder spannend und oft überraschend. Hier ein paar Beispiele meiner kreativen Ausbrüche.',
      secondary: '',
      companyInfo: [
        {
          name: 'Camaleon - Street Food',
          description: 'Logo, Geschäftsausstattung',
          url: 'https://www.instagram.com/camaleon.streetfood/',
        },
        {
          name: 'Praxis Uta Siebert - Therapeutin und Bindungsanalyikerin',
          description:
            'Logo, Geschäftsausstattung, Web Design, Flyer, Postkarten',
          url: 'https://www.diebindungsanalytikerin.de/',
        },
        {
          name: 'Conradt and Friends - Motion Media',
          description: 'Logo, Geschäftsausstattung',
          url: 'https://www.friendspro.de',
        },
        {
          name: 'Abuell - DJ',
          description: 'Logo, Logoanimation, Geschäftsausstattung',
          url: 'https://www.instagram.com/abuellmusic/',
        },
        {
          name: 'Smoke Ring - Barbershop Quartet',
          description: 'Logo, Merchandise',
          url: 'https://www.youtube.com/watch?v=LCZoXBN5T9w&list=PLxEZmY5DKdREQ4GwfiuCTQDB-lOMrz1v1&index=1',
        },
        {
          name: 'Theresa - Kosmetikstudio',
          description:
            'Logo,  Geschäftsausstattung,  Flyer,  Preislisten,  Gutscheine',
        },
        {
          name: 'La Mano - Kosmetikstudio',
          description: 'Logo, Geschäftsausstattung',
        },
        {
          name: 'Gioia - Schmuckdesign',
          description: 'Logo, Geschäftsausstattung',
        },
        {
          name: 'Heuss - Power Tools',
          description: 'Logo, Geschäftsausstattung',
        },
      ],
    },
  },
  {
    imageSrc: tileUrl + 'Landingpage_BMF.png',
    topText: 'Event Design',
    botText: 'BinG! Barbershop Musikfestival',
    headerImage: primaryUrl + projectLoc + 'BMF/BMF_Header.png',
    id: 2,
    isProjectTile: true,
    classValue: 'text',
    page: {
      images: [
        [
          {
            src: primaryUrl + projectLoc + 'BMF/BMF_1.png',
            width: 1170,
            height: 788,
            alt: 'project3Image1',
          },
        ],
        [
          {
            src: primaryUrl + projectLoc + 'BMF/BMF_2.png',
            width: 1170,
            height: 788,
            alt: 'project3Image2',
          },
          {
            src: primaryUrl + projectLoc + 'BMF/BMF_3.png',
            width: 1170,
            height: 788,
            alt: 'project3Image3',
          },
        ],
        [
          {
            src: primaryUrl + projectLoc + 'BMF/BMF_4.png',
            width: 1170,
            height: 788,
            alt: 'project3Image4',
          },
        ],
      ],
      video: [primaryUrl + projectLoc + 'BMF/BMF_15.mp4'],
      secondImages: [
        [
          {
            src: primaryUrl + projectLoc + 'BMF/BMF_5.png',
            width: 1170,
            height: 702,
            alt: 'project3Image5',
          },
        ],
        [
          {
            src: primaryUrl + projectLoc + 'BMF/BMF_6.png',
            width: 1170,
            height: 413,
            alt: 'project3Image6',
          },
        ],
        [
          {
            src: primaryUrl + projectLoc + 'BMF/BMF_7.png',
            width: 1170,
            height: 879,
            alt: 'project3Image7',
          },
          {
            src: primaryUrl + projectLoc + 'BMF/BMF_8.png',
            width: 1170,
            height: 626,
            alt: 'project3Image8',
          },
        ],
        [
          {
            src: primaryUrl + projectLoc + 'BMF/BMF_9.png',
            width: 1170,
            height: 702,
            alt: 'project3Image9',
          },
        ],
        [
          {
            src: primaryUrl + projectLoc + 'BMF/BMF_10.png',
            width: 1170,
            height: 702,
            alt: 'project3Image10',
          },
          {
            src: primaryUrl + projectLoc + 'BMF/BMF_11.png',
            width: 1170,
            height: 966,
            alt: 'project3Image11',
          },
        ],
        [
          {
            src: primaryUrl + projectLoc + 'BMF/BMF_12.png',
            width: 1170,
            height: 877,
            alt: 'project3Image12',
          },
        ],
        [
          {
            src: primaryUrl + projectLoc + 'BMF/BMF_13.png',
            width: 1170,
            height: 604,
            alt: 'project3Image12',
          },
          {
            src: primaryUrl + projectLoc + 'BMF/BMF_14.png',
            width: 1170,
            height: 728,
            alt: 'project3Image13',
          },
        ],
      ],
      type: 'Event Design',
      title: 'BinG! Barbershop Musikfestival',
      description:
        'Alle zwei Jahre lädt BinG, der deutsche Fachverband für Barbershopgesang, zum Barbershop-Musikfestival ein. Neben den Wettbewerben für Chöre und Quartette gibt es auch Shows, Afterglows und Coachings. Nach langer Pandemiepause begeisterte ich das Festival mit einem neuem Slogan und dem dazu passenden Look. Teilnehmer und Publikum jubelten gemeinsam: Barbershop is back!',
      secondary: '',
      secondaryMain: 'Umsetzung',
      secondaryDescription:
        'Key Visual, Layout und Satz für Programmheft, Plakate, Flyer, Banner und Roll-Ups, Lanyards & Badges, Merchandise, Bauchbinden für Livestream, Web Design',
      thirdMain: 'Team',
      thirdDescription:
        'Julia Moldenhauer und Almut Schmitz: Eventkoordination<br>Robbie Weber: Programmierung Webseite<br>Eric Ideler: Fotografie',
      fourthMain: '',
      fourthDescription: '',
    },
  },
  {
    imageSrc: tileUrl + 'Landingpage_Fitz.png',
    topText: 'Doppelalbum',
    botText: 'Michael Fitz',
    headerImage: primaryUrl + projectLoc + 'MichaelFitz/MichaelFitz_Header.png',
    id: 3,
    isProjectTile: true,
    classValue: 'text',
    page: {
      images: [
        [
          {
            src: primaryUrl + projectLoc + 'MichaelFitz/MichaelFitz_1.png',
            width: 1170,
            height: 828,
            alt: 'project1Image1',
          },
        ],
        [
          {
            src: primaryUrl + projectLoc + 'MichaelFitz/MichaelFitz_2.png',
            width: 1170,
            height: 645,
            alt: 'project1Image2',
          },
        ],
        [
          {
            src: primaryUrl + projectLoc + 'MichaelFitz/MichaelFitz_3.png',
            width: 1170,
            height: 645,
            alt: 'project1Image3',
          },
          {
            src: primaryUrl + projectLoc + 'MichaelFitz/MichaelFitz_4.png',
            width: 1170,
            height: 645,
            alt: 'project1Image4',
          },
        ],
        [
          {
            src: primaryUrl + projectLoc + 'MichaelFitz/MichaelFitz_5.png',
            width: 1170,
            height: 645,
            alt: 'project1Image5',
          },
          {
            src: primaryUrl + projectLoc + 'MichaelFitz/MichaelFitz_6.png',
            width: 1170,
            height: 645,
            alt: 'project1Image6',
          },
        ],
        [
          {
            src: primaryUrl + projectLoc + 'MichaelFitz/MichaelFitz_7.png',
            width: 1170,
            height: 396,
            alt: 'project1Image7',
          },
        ],
        [
          {
            src: primaryUrl + projectLoc + 'MichaelFitz/MichaelFitz_8.png',
            width: 1170,
            height: 972,
            alt: 'project1Image8',
          },
        ],
      ],
      title: 'Michael Fitz',
      type: 'Doppelalbum',
      description:
        'Als der Münchner Musiker Michael Fitz sein neues Album “Wenn I Schaug” in die Welt brachte, durfte ich für die Agentur „Grafikhaus“ das Design kreieren. Dafür durchsuchte, sortierte, kombinierte und mischte ich Ölgemälde und Fotografien aus dem Hause Fitz. Es entstand ein 48-seitiges Booklet, in dem jedes Lied eine individuell gestaltete doppelseitige Collage passend zum Text, Sound und Gefühl des jeweiligen Songs bekam.',
      secondaryMain: 'Umsetzung',
      secondaryDescription:
        'Artwork und Layout für CD-Cover und -Booklet, CD, Plakat, und Notizkarten',
      thirdMain: 'Fotografie/Gemälde',
      thirdDescription: 'Michael und Karin Fitz',
    },
  },
  {
    imageSrc: tileUrl + 'Landingpage_Buchcover.png',
    topText: 'Buchcover',
    botText: '',
    headerImage: primaryUrl + projectLoc + 'Buchcover/Buchcover_Header.png',
    id: 4,
    isProjectTile: true,
    classValue: 'text',
    page: {
      images: [
        [
          {
            src: primaryUrl + projectLoc + 'Buchcover/Buchcover_1.png',
            width: 570,
            height: 600,
            alt: 'project6Image1',
          },
          {
            src: primaryUrl + projectLoc + 'Buchcover/Buchcover_2.png',
            width: 570,
            height: 600,
            alt: 'project6Image2',
          },
        ],
        [
          {
            src: primaryUrl + projectLoc + 'Buchcover/Buchcover_7.png',
            width: 1173,
            height: 721,
            alt: 'project6Image7',
          },
        ],
        [
          {
            src: primaryUrl + projectLoc + 'Buchcover/Buchcover_8.png',
            width: 1173,
            height: 828,
            alt: 'project6Image8',
          },
        ],
        [
          {
            src: primaryUrl + projectLoc + 'Buchcover/Buchcover_3.png',
            width: 570,
            height: 600,
            alt: 'project6Image3',
          },
          {
            src: primaryUrl + projectLoc + 'Buchcover/Buchcover_4.png',
            width: 570,
            height: 600,
            alt: 'project6Image4',
          },
        ],
        [
          {
            src: primaryUrl + projectLoc + 'Buchcover/Buchcover_5.png',
            width: 570,
            height: 600,
            alt: 'project6Image5',
          },
          {
            src: primaryUrl + projectLoc + 'Buchcover/Buchcover_6.png',
            width: 570,
            height: 600,
            alt: 'project6Image6',
          },
        ],
      ],
      title: 'Buchcover',
      description:
        'Die Gestaltung von Buchcovern lässt mein Kreativ-Herz höher schlagen. Ähnlich wie bei der Logoentwicklung geht es darum, dem Betrachter auf den ersten Blick den Wesenskern des Buches zu vermitteln – mit aussagekräftigen Bildern, Grafiken oder Typografie.',
      secondary: '',
    },
  },
  {
    topText: 'GET<br>IN<br>TOUCH',
    botText: '',
    id: 5,
    isProjectTile: false,
    classValue: 'text-1 get-in-touch',
    link: 'mailto:hallo@mirataferner.com',
  },
  {
    imageSrc: tileUrl + 'Landingpage_Hochzeiten.png',
    topText: 'Hochzeiten',
    botText: '',
    headerImage: primaryUrl + projectLoc + 'Hochzeiten/Hochzeit_Header.png',
    id: 6,
    isProjectTile: true,
    classValue: 'text',
    page: {
      images: [
        [
          {
            src: primaryUrl + projectLoc + 'Hochzeiten/JollyKrawchucks_1.png',
            width: 1170,
            height: 788,
            alt: 'project4Image1',
          },
        ],
        [
          {
            src: primaryUrl + projectLoc + 'Hochzeiten/JollyKrawchucks_2.png',
            width: 1170,
            height: 767,
            alt: 'project4Image2',
          },
          {
            src: primaryUrl + projectLoc + 'Hochzeiten/JollyKrawchucks_3.png',
            width: 1170,
            height: 767,
            alt: 'project4Image3',
          },
        ],
        [
          {
            src: primaryUrl + projectLoc + 'Hochzeiten/JollyKrawchucks_4.png',
            width: 1170,
            height: 788,
            alt: 'project4Image4',
          },
        ],
        [
          {
            src: primaryUrl + projectLoc + 'Hochzeiten/JollyKrawchucks_5.png',
            width: 1193,
            height: 1551,
            alt: 'project4Image5',
          },
        ],
      ],
      secondImages: [
        [
          {
            src: primaryUrl + projectLoc + 'Hochzeiten/FischkoppundBazi_1.png',
            width: 1170,
            height: 788,
            alt: 'project6Image1',
          },
        ],
        [
          {
            src: primaryUrl + projectLoc + 'Hochzeiten/FischkoppundBazi_2.png',
            width: 1170,
            height: 684,
            alt: 'project6Image2',
          },
          {
            src: primaryUrl + projectLoc + 'Hochzeiten/FischkoppundBazi_3.png',
            width: 1170,
            height: 753,
            alt: 'project6Image3',
          },
        ],
        [
          {
            src: primaryUrl + projectLoc + 'Hochzeiten/FischkoppundBazi_4.png',
            width: 1170,
            height: 788,
            alt: 'project6Image4',
          },
          {
            src: primaryUrl + projectLoc + 'Hochzeiten/FischkoppundBazi_5.png',
            width: 1170,
            height: 811,
            alt: 'project6Image5',
          },
        ],
        [
          {
            src: primaryUrl + projectLoc + 'Hochzeiten/FischkoppundBazi_6.png',
            width: 1170,
            height: 753,
            alt: 'project6Image6',
          },
        ],
      ],
      thirdImages: [
        [
          {
            src: primaryUrl + projectLoc + 'Hochzeiten/RobbieandMira_1.png',
            width: 1170,
            height: 1005,
            alt: 'project9Image1',
          },
          {
            src: primaryUrl + projectLoc + 'Hochzeiten/RobbieandMira_2.png',
            width: 1170,
            height: 883,
            alt: 'project9Image2',
          },
        ],
        [
          {
            src: primaryUrl + projectLoc + 'Hochzeiten/RobbieandMira_3.png',
            width: 1170,
            height: 701,
            alt: 'project9Image3',
          },
        ],
        [
          {
            src: primaryUrl + projectLoc + 'Hochzeiten/RobbieandMira_4.png',
            width: 1170,
            height: 900,
            alt: 'project9Image4',
          },
        ],
        [
          {
            src: primaryUrl + projectLoc + 'Hochzeiten/RobbieandMira_5.png',
            width: 1170,
            height: 788,
            alt: 'project9Image5',
          },
        ],
        [
          {
            src: primaryUrl + projectLoc + 'Hochzeiten/RobbieandMira_6.png',
            width: 1170,
            height: 873,
            alt: 'project9Image6',
          },
        ],
      ],
      title: 'Hochzeiten',
      description:
        'Ich durfte einige Paaren bei der grafischen Umsetzung Ausstattung ihrer Hochzeit unterstützen. So individuell wie die Paare sind, habe ich auch die jeweiligen Einladungen, Platz- und Menükarten, Hochzeitsandenken und Webseiten gestaltet.',
      secondaryMain: '',
      secondaryDescription: '',
    },
  },
  {
    imageSrc: tileUrl + 'Landingpage_LayoutSatz.png',
    topText: 'Layout & Satz',
    botText: 'Klöpferholz',
    headerImage: primaryUrl + projectLoc + 'Kloepfer/Kloepfer_Header.png',
    id: 7,
    isProjectTile: true,
    classValue: 'text',
    page: {
      images: [
        [
          {
            src: primaryUrl + projectLoc + 'Kloepfer/Kloepfer_1.png',
            width: 1170,
            height: 770,
            alt: 'project7Image1',
          },
        ],
        [
          {
            src: primaryUrl + projectLoc + 'Kloepfer/Kloepfer_2.png',
            width: 1170,
            height: 836,
            alt: 'project7Image2',
          },
        ],
        [
          {
            src: primaryUrl + projectLoc + 'Kloepfer/Kloepfer_3.png',
            width: 1170,
            height: 770,
            alt: 'project7Image3',
          },
        ],
        [
          {
            src: primaryUrl + projectLoc + 'Kloepfer/Kloepfer_4.png',
            width: 1170,
            height: 836,
            alt: 'project7Image4',
          },
        ],
        [
          {
            src: primaryUrl + projectLoc + 'Kloepfer/Kloepfer_5.png',
            width: 1170,
            height: 837,
            alt: 'project7Image5',
          },
        ],
        [
          {
            src: primaryUrl + projectLoc + 'Kloepfer/Kloepfer_6.png',
            width: 1170,
            height: 780,
            alt: 'project7Image6',
          },
        ],
        [
          {
            src: primaryUrl + projectLoc + 'Kloepfer/Kloepfer_12.png',
            width: 1170,
            height: 780,
            alt: 'project7Image12',
          },
        ],
        [
          {
            src: primaryUrl + projectLoc + 'Kloepfer/Kloepfer_7.png',
            width: 1170,
            height: 780,
            alt: 'project7Image7',
          },
        ],
        [
          {
            src: primaryUrl + projectLoc + 'Kloepfer/Kloepfer_8.png',
            width: 1170,
            height: 780,
            alt: 'project7Image8',
          },
        ],
        [
          {
            src: primaryUrl + projectLoc + 'Kloepfer/Kloepfer_9.png',
            width: 1170,
            height: 780,
            alt: 'project7Image9',
          },
        ],
        [
          {
            src: primaryUrl + projectLoc + 'Kloepfer/Kloepfer_10.png',
            width: 1170,
            height: 780,
            alt: 'project7Image10',
          },
        ],
        [
          {
            src: primaryUrl + projectLoc + 'Kloepfer/Kloepfer_11.png',
            width: 1170,
            height: 780,
            alt: 'project7Image11',
          },
        ],
      ],
      title: 'Klöpferholz',
      type: 'Layout & Satz',
      description:
        'Als Deutschlands größter Holzvermarkter versorgt die Klöpfer Gruppe Handwerker, Baubranche, Industrie und Handel. Während meiner Anstellung bei der Agentur „Grafikhaus“ betreute ich Klöpferholz über viele Jahre und gestaltete Printmedien aller Art für die verschiedenen Teilbereiche des Unternehmens.',
      secondaryMain: '',
      secondaryDescription: '',
    },
  },
  {
    imageSrc: tileUrl + 'Landingpage_PraxisUtaSiebert.png',
    topText: 'Visual Identity',
    botText: 'Praxis Uta Siebert',
    headerImage:
      primaryUrl + projectLoc + 'PraxisUtaSiebert/PraxisUtaSiebert_Header.png',
    id: 8,
    isProjectTile: true,
    classValue: 'text',
    page: {
      images: [
        [
          {
            src:
              primaryUrl +
              projectLoc +
              'PraxisUtaSiebert/PraxisUtaSiebert_3.png',
            width: 1170,
            height: 1263,
            alt: 'project8Image3',
          },
        ],
        [
          {
            src:
              primaryUrl +
              projectLoc +
              'PraxisUtaSiebert/PraxisUtaSiebert_1.png',
            width: 1170,
            height: 788,
            alt: 'project8Image1',
          },
          {
            src:
              primaryUrl +
              projectLoc +
              'PraxisUtaSiebert/PraxisUtaSiebert_2.png',
            width: 1170,
            height: 788,
            alt: 'project8Image2',
          },
        ],
        [
          {
            src:
              primaryUrl +
              projectLoc +
              'PraxisUtaSiebert/PraxisUtaSiebert_4.png',
            width: 1170,
            height: 819,
            alt: 'project8Image4',
          },
          {
            src:
              primaryUrl +
              projectLoc +
              'PraxisUtaSiebert/PraxisUtaSiebert_5.png',
            width: 1170,
            height: 819,
            alt: 'project8Image5',
          },
        ],
        [
          {
            src:
              primaryUrl +
              projectLoc +
              'PraxisUtaSiebert/PraxisUtaSiebert_6.png',
            width: 1186,
            height: 683,
            alt: 'project8Image6',
          },
        ],
        [
          {
            src:
              primaryUrl +
              projectLoc +
              'PraxisUtaSiebert/PraxisUtaSiebert_7.png',
            width: 1170,
            height: 445,
            alt: 'project8Image7',
          },
        ],
        [
          {
            src:
              primaryUrl +
              projectLoc +
              'PraxisUtaSiebert/PraxisUtaSiebert_8.png',
            width: 1170,
            height: 695,
            alt: 'project8Image8',
          },
        ],
        [
          {
            src:
              primaryUrl +
              projectLoc +
              'PraxisUtaSiebert/PraxisUtaSiebert_9.png',
            width: 1170,
            height: 855,
            alt: 'project8Image9',
          },
          {
            src:
              primaryUrl +
              projectLoc +
              'PraxisUtaSiebert/PraxisUtaSiebert_10.png',
            width: 1170,
            height: 835,
            alt: 'project8Image10',
          },
        ],
      ],
      title: 'Praxis Uta Siebert',
      type: 'Visual Identity',
      description:
        'Für die Privatpraxis der Psychotherapeutin Uta Siebert im Zentrum Münchens habe ich das CI überarbeitet und erweitert für ihr besonderes Angebot: Die Mutter-Kind-Bindungsanalyse. Dafür entwickelte ich ein grafisches Konzept, das sich harmonisch in das Gestaltungskonzept der Praxis fügt. Mit einem eigenen Logo für „die Bindungsanalytikerin“, einem angepassten Farbkonzept und einem dazu passenden Webauftritt ist in der Praxis ein eigener Bereich für dieses wichtige Thema entstanden.',
      secondary: '',
      secondaryMain: 'Umsetzung',
      secondaryDescription:
        'Logo & Visual Identity, Layout & Satz für Beschilderung und Flyer, Überarbeitung der homepage',
    },
  },
  {
    imageSrc: tileUrl + 'Landingpage_Zeitscheine.png',
    topText: 'Zeitscheine',
    botText: 'Geschenk zum 60. Geburtstag',
    headerImage: primaryUrl + projectLoc + 'Zeitscheine/Zeitscheine_Header.png',
    id: 9,
    isProjectTile: true,
    classValue: 'text',
    page: {
      images: [
        [
          {
            src: primaryUrl + projectLoc + 'Zeitscheine/Zeitscheine_1.png',
            width: 1170,
            height: 996,
            alt: 'project7Image5',
          },
        ],
        [
          {
            src: primaryUrl + projectLoc + 'Zeitscheine/Zeitscheine_2.png',
            width: 1170,
            height: 625,
            alt: 'project7Image6',
          },
        ],
      ],
      title: 'Geschenk zum 60. Geburtstag',
      type: 'Zeitscheine',
      description:
        'Was schenkt man zum 60. Geburtstag? Zeug hat man in dem Alter wahrscheinlich genug. Lieber was mit Substanz. Etwas, das man im Geschäft nicht bekommt. Gemeinsame Zeit! Mit den Zeitscheinen konnte sich das Geburtstagskind Aktivitäten „kaufen“: Eisstockschießen, ein Städtetrip oder ein Spieleabend... Gemeinsam Zeit verbringen – that’s real value!',
      secondary: '',
      secondaryMain: '',
      secondaryDescription: '',
      thirdMain: '',
      thirdDescription: '',
    },
  },
  {
    imageSrc: tileUrl + 'Landingpage_Animation.gif',
    topText: 'Animation',
    botText: '',
    id: 10,
    isProjectTile: true,
    classValue: 'text',
    headerImage: primaryUrl + projectLoc + 'Animation/Animation_Header.gif',
    page: {
      images: [],
      videos: [
        primaryUrl + projectLoc + 'Animation/Animation_1.mp4',
        primaryUrl + projectLoc + 'Animation/Animation_2.mp4',
        primaryUrl + projectLoc + 'Animation/Animation_3.mp4',
        primaryUrl + projectLoc + 'Animation/Animation_4.mp4',
      ],
      title: 'Animation',
      description:
        'Die Erstellung von bewegten Bildern eröffnet mir einen neuen Raum der Kreativität. Mein Gespürt für Musik und Rhythmus kommt mir beim harmonischen Zusammenspiel von Bild, Ton und Timing zugute.',
      secondary: '',
      secondVideo: [],
      secondMain: '',
    },
  },
  {
    topText: 'Hier gibts was auf die Ohren',
    botText: '',
    id: 11,
    isProjectTile: false,
    classValue: 'text-2',
    link: 'https://open.spotify.com/playlist/6y6kGxIt1MmD2el8sOTFEu?si=efc86238f76f4ec1',
  },
  {
    imageSrc: tileUrl + 'Landingpage_Kinderliederbuch.png',
    topText: 'Kinderliederbuch',
    botText: 'Geschenk für den Nachwuchs',
    headerImage:
      primaryUrl + projectLoc + 'Kinderliederbuch/Kinderliederbuch_Header.png',
    id: 12,
    isProjectTile: true,
    classValue: 'text',
    page: {
      images: [
        [
          {
            src:
              primaryUrl +
              projectLoc +
              'Kinderliederbuch/Kinderliederbuch_1.png',
            width: 1170,
            height: 983,
            alt: 'project12Image1',
          },
        ],
        [
          {
            src:
              primaryUrl +
              projectLoc +
              'Kinderliederbuch/Kinderliederbuch_2.png',
            width: 1170,
            height: 783,
            alt: 'project12Image2',
          },
        ],
        [
          {
            src:
              primaryUrl +
              projectLoc +
              'Kinderliederbuch/Kinderliederbuch_3.png',
            width: 1170,
            height: 783,
            alt: 'project12Image3',
          },
        ],
        [
          {
            src:
              primaryUrl +
              projectLoc +
              'Kinderliederbuch/Kinderliederbuch_6.png',
            width: 1170,
            height: 678,
            alt: 'project12Image6',
          },
        ],
        [
          {
            src:
              primaryUrl +
              projectLoc +
              'Kinderliederbuch/Kinderliederbuch_4.png',
            width: 1170,
            height: 783,
            alt: 'project12Image4',
          },
        ],
        [
          {
            src:
              primaryUrl +
              projectLoc +
              'Kinderliederbuch/Kinderliederbuch_5.png',
            width: 1170,
            height: 819,
            alt: 'project12Image5',
          },
        ],
      ],
      title: 'Geschenk für Nachwuchs',
      type: 'Kinderliederbuch',
      description:
        'Gemeinsam mit singfreudigen Freunden kreierte ich ein Kinderliederbuch mit CD, mit liebevollen und lustigen Illustrationen. Die Lieder wurden von uns selbst eingesungen beziehungsweise eingespielt.',
      secondaryMain: 'Umsetzung',
      secondaryDescription:
        'Layout und Gestaltung Liederbuch, CD, Tonaufnahmen, Projektkoordination',
      thirdMain: 'Team',
      thirdDescription: 'Nina, Domi, Anna, Gabriele und Ramon',
    },
  },
];
