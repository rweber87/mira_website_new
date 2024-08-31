import project7Image5 from '../../assets/project_7_images/Picture 5.png';
import project7Image6 from '../../assets/project_7_images/Picture 6.png';
import project7Image7 from '../../assets/project_7_images/Picture 7.png';

const primaryUrl = 'https://mira-website-new.s3.amazonaws.com/';
const tileLoc = 'tile-images/';
const projectLoc = 'projects/';
export const tileUrl = primaryUrl + tileLoc;

export const tiles = [
  {
    imageSrc: tileUrl + 'group_2.png',
    topText: '',
    botText: '',
    id: 0,
    shouldHover: false,
  },
  {
    imageSrc: tileUrl + 'Landigpage_Fitz.png',
    topText: 'Michael Fitz',
    botText: 'Album Release',
    id: 1,
    shouldHover: true,
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
            width: 1160,
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
            width: 1179,
            height: 645,
            alt: 'project1Image5',
          },
          {
            src: primaryUrl + projectLoc + 'MichaelFitz/MichaelFitz_6.png',
            width: 1179,
            height: 645,
            alt: 'project1Image6',
          },
        ],
        [
          {
            src: primaryUrl + projectLoc + 'MichaelFitz/MichaelFitz_7.png',
            width: 1160,
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
      description:
        'An Projekten für die Kunst und Kulturszene arbeiten zu dürfen, ist für mich, als Gestalterin und Musikerin, immer ein besonderes Geschenk. Der Münchner Musiker, Michael Fitz, brachte sein neues Album “Wenn I Schaug” in die Welt und ich durfte für die Agentur Grafikhaus, bei der ich damals angestellt war, das Design kreieren. Dafür durchsuchte, sortierte, kombiniert und mischte ich die gelieferten Daten, bestehend aus Ölgemälden und Fotografien aus dem Hause Fitz. Es entstand ein xx-seitiges Booklet, in dem jedes Lied eine individuell gestaltete, doppelseitige Collage erhielt - passend zum Text, Klang und Gefühl des jeweiligen Songs.',
      secondaryMain: 'umsetzung',
      secondaryDescription:
        'CD-Cover und Booklet   -   CD   -   Plakat   -   Notizkarten',
      thirdMain: 'team',
      thirdDescription: 'Michael und Karin Fitz: Gemälde und Fotografie',
    },
  },
  {
    imageSrc: tileUrl + 'Landigpage_Logos.gif',
    topText: 'Logos',
    botText: '',
    id: 2,
    shouldHover: true,
    page: {
      images: [
        [
          {
            src: primaryUrl + projectLoc + 'Logos/Camaleon.png',
            width: 1170,
            height: 410,
            alt: 'project2Image1',
          },
        ],
        [
          {
            src: primaryUrl + projectLoc + 'Logos/Conradt.png',
            width: 1170,
            height: 410,
            alt: 'project2Image3',
          },
        ],
        [
          {
            src: primaryUrl + projectLoc + 'Logos/SmokeRing.png',
            width: 1170,
            height: 410,
            alt: 'project2Image5',
          },
        ],
        [
          {
            src: primaryUrl + projectLoc + 'Logos/Abuell.png',
            width: 1170,
            height: 410,
            alt: 'project2Image7',
          },
        ],
        [
          {
            src: primaryUrl + projectLoc + 'Logos/Gioia.png',
            width: 1170,
            height: 410,
            alt: 'project2Image9',
          },
        ],
        [
          {
            src: primaryUrl + projectLoc + 'Logos/PraxisUtaSiebert.png',
            width: 1170,
            height: 410,
            alt: 'project2Image11',
          },
        ],
        [
          {
            src: primaryUrl + projectLoc + 'Logos/lamano.png',
            width: 1170,
            height: 410,
            alt: 'project2Image1',
          },
        ],
        [
          {
            src: primaryUrl + projectLoc + 'Logos/Theresa.png',
            width: 1170,
            height: 410,
            alt: 'project2Image17',
          },
        ],
        [
          {
            src: primaryUrl + projectLoc + 'Logos/Heuss.png',
            width: 1170,
            height: 410,
            alt: 'project2Image18',
          },
        ],
      ],
      title: 'Logos',
      description:
        'Logogestaltung und die Ausarbeitung einer stimmigen Gesamterscheinung gehört zu meinen Lieblingsaufgaben. Das feinfühlige Heranarbeiten an das finale Endergebnis ist immer wieder spannend und auch oft überraschend. Folgend ein paar Beispiele dieser kreativen Wutausbrüche.',
      secondary: '',
      companyInfo: [
        {
          name: 'Camaleon - Street Food',
          description: 'Logo   -   Geschäftsausstattung',
        },
        {
          name: 'Conradt and Friends - Motion Media',
          description: 'Logo   -   Geschäftsausstattung',
        },
        {
          name: 'Smoke Ring - Barbershop Quartet',
          description: 'Logo   -   Merchandise',
        },
        {
          name: 'Abuell - DJ',
          description: 'Logo   -   Geschäftsausstattung',
        },
        {
          name: 'Gioia - Schmuckdesign',
          description: 'Logo   -   Geschäftsausstattung',
        },
        {
          name: 'Uta Siebert - Therpeutin und Bindungsanalytikerin',
          description:
            'Logo   -   Geschäftsausstattung   -   Webdesign   -   Flyer   -   Postkarten',
        },
        {
          name: 'LaMano Kosmetikstudio',
          description: 'Logo   -   Geschäftsausstattung',
        },
        {
          name: 'Theresa Kosmetikstudio',
          description:
            'Logo   -   Geschäftsausstattung   -   Flyer   -   Preislisten   -   Gutscheine   -   Gestaltung Studio',
        },
        {
          name: 'Heuss - Power Tools',
          description: 'Logo   -   Geschäftsausstattung',
        },
        {
          name: 'Speak Up - Language School',
          description: 'Logo   -   Geschäftsausstattung',
        },
      ],
    },
  },
  {
    imageSrc: tileUrl + 'Landigpage_BMF.png',
    topText: 'Bing!',
    botText: 'Barbershop Musikfestival',
    id: 3,
    shouldHover: true,
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
      title: 'BinG! Barbershop Musikfestival',
      description:
        'Alle 2 Jahre lädt BinG, der deutsche Fachverband für Barbershopgesang, zum Barbershop Musikfestival ein. Neben den Wettbewerben für Chören und Quartetten gibt es auch Shows, Afterglows und Coachings ... ein Wochenende, das gut geplant und in Szene gesetzt werden muss. Nach einer langen Pandemie-Pause hieß es 2023 endlich wieder: “We are ready for our next contestant.”\nMit einem tollen Team haben wir echt was auf die Beine gestellt! Neuer Slogan, neuer Look! Und Ensembles und Zuschauer jubelten gemeinsam: Barbershop is back!!',
      secondary: '',
      secondaryMain: 'umsetzung',
      secondaryDescription:
        'Programmheft   -   Webauftritt   -   Plakate   -   Flyer   -   Lanyards & Badges   -   Banner   -   Roll-ups   -   Merchandise   -   Bauchbinden',
      thirdMain: 'credits',
      thirdDescription:
        'Robbie Weber: Programmierung Webseite \n Eric Ideler: Fotografie',
      fourthMain: '',
      fourthDescription: '',
    },
  },
  {
    imageSrc: tileUrl + 'Landigpage_JollyKrawchucks.png',
    topText: 'Hochzeit',
    botText: 'The Jolly Krawchucks',
    id: 4,
    shouldHover: true,
    page: {
      images: [
        [
          {
            src:
              primaryUrl + projectLoc + 'JollyKrawchucks/JollyKrawchucks_1.png',
            width: 1170,
            height: 788,
            alt: 'project4Image1',
          },
        ],
        [
          {
            src:
              primaryUrl + projectLoc + 'JollyKrawchucks/JollyKrawchucks_2.png',
            width: 1170,
            height: 767,
            alt: 'project4Image2',
          },
          {
            src:
              primaryUrl + projectLoc + 'JollyKrawchucks/JollyKrawchucks_3.png',
            width: 1170,
            height: 767,
            alt: 'project4Image3',
          },
        ],
        [
          {
            src:
              primaryUrl + projectLoc + 'JollyKrawchucks/JollyKrawchucks_4.png',
            width: 1170,
            height: 788,
            alt: 'project4Image4',
          },
        ],
        [
          {
            src:
              primaryUrl + projectLoc + 'JollyKrawchucks/JollyKrawchucks_5.png',
            width: 1170,
            height: 615,
            alt: 'project4Image5',
          },
        ],
        [
          {
            src:
              primaryUrl + projectLoc + 'JollyKrawchucks/JollyKrawchucks_6.png',
            width: 1170,
            height: 653,
            alt: 'project4Image6',
          },
        ],
        [
          {
            src:
              primaryUrl + projectLoc + 'JollyKrawchucks/JollyKrawchucks_7.png',
            width: 1170,
            height: 1452,
            alt: 'project4Image7',
          },
        ],
        [
          {
            src:
              primaryUrl + projectLoc + 'JollyKrawchucks/JollyKrawchucks_8.png',
            width: 1170,
            height: 1160,
            alt: 'project4Image8',
          },
        ],
      ],
      title: 'The Jolly Krawchucks',
      description:
        'Willow & Gareth wussten genau, welchen Vibe ihr besondere Tag haben sollte. Ich durfte mit der Gestaltung der Printsachen ein kein wenig helfen, ihre Vision zum Leben zu erwecken. Mit viel Liebe zum Detail kreierten die beiden ein Hochzeitswochenende, dass den Gästen noch lange in Erinnerung bleiben wird.',
      secondaryMain: 'umsetzung',
      secondaryDescription:
        'Einladung  -   RSVP Karten  -   Platzkarten   -   Menü   -   Infoflyer   -   Hochzeitsandenken',
    },
  },
  {
    imageSrc: tileUrl + 'group_3.png',
    topText: '',
    botText: '',
    id: 11,
    shouldHover: false,
  },
  {
    imageSrc: tileUrl + 'Landigpage_FischkoppBazi.png',
    topText: 'Hochzeit',
    botText: 'Fischkopp & Bazi',
    id: 5,
    shouldHover: true,
    page: {
      images: [
        [
          {
            src:
              primaryUrl + projectLoc + 'Fischkopp&Bazi/FischkoppundBazi_1.png',
            width: 1170,
            height: 788,
            alt: 'project6Image1',
          },
        ],
        [
          {
            src:
              primaryUrl + projectLoc + 'Fischkopp&Bazi/FischkoppundBazi_2.png',
            width: 1170,
            height: 684,
            alt: 'project6Image2',
          },
        ],
        [
          {
            src:
              primaryUrl + projectLoc + 'Fischkopp&Bazi/FischkoppundBazi_3.png',
            width: 1170,
            height: 753,
            alt: 'project6Image3',
          },
        ],
        [
          {
            src:
              primaryUrl + projectLoc + 'Fischkopp&Bazi/FischkoppundBazi_4.png',
            width: 1170,
            height: 788,
            alt: 'project6Image4',
          },
        ],
        [
          {
            src:
              primaryUrl + projectLoc + 'Fischkopp&Bazi/FischkoppundBazi_5.png',
            width: 1170,
            height: 811,
            alt: 'project6Image5',
          },
        ],
        [
          {
            src:
              primaryUrl + projectLoc + 'Fischkopp&Bazi/FischkoppundBazi_6.png',
            width: 1170,
            height: 753,
            alt: 'project6Image6',
          },
        ],
      ],
      title: 'Fischkopp & Bazi',
      description:
        'Sie aus dem hohen Norden, er aus dem tiefen Süden. Verbunden durch die Liebe zur Barbershop-Musik.',
      secondaryMain: 'umsetzung',
      secondaryDescription:
        'Einladung  -   RSVP Karten   -   Menü   -   Dankeskarten',
    },
  },
  {
    imageSrc: tileUrl + 'Landigpage_Buchcover.png',
    topText: 'Buchcover',
    botText: '',
    id: 6,
    shouldHover: true,
    page: {
      images: [
        [
          {
            src: primaryUrl + projectLoc + 'Buchcover/Buchcover_1.png',
            width: 770,
            height: 712,
            alt: 'project6Image1',
          },
          {
            src: primaryUrl + projectLoc + 'Buchcover/Buchcover_2.png',
            width: 770,
            height: 712,
            alt: 'project6Image2',
          },
        ],
        [
          {
            src: primaryUrl + projectLoc + 'Buchcover/Buchcover_3.png',
            width: 770,
            height: 712,
            alt: 'project6Image3',
          },
          {
            src: primaryUrl + projectLoc + 'Buchcover/Buchcover_4.png',
            width: 770,
            height: 712,
            alt: 'project6Image4',
          },
        ],
        [
          {
            src: primaryUrl + projectLoc + 'Buchcover/Buchcover_5.png',
            width: 770,
            height: 712,
            alt: 'project6Image5',
          },
          {
            src: primaryUrl + projectLoc + 'Buchcover/Buchcover_6.png',
            width: 770,
            height: 712,
            alt: 'project6Image6',
          },
        ],
      ],
      title: 'Buchcover',
      description:
        'Die Gestaltung von Buchcovern lässt mein Kreativ-Herz höherschlagen. Ähnlich wie bei der Logoentwicklung geht es darum, dem Betrachter auf den ersten Blick die Essenz des Buches zu vermitteln. Dies gelingt mit aussagekräftigen Bildern, Grafiken. Manchmal reicht auch nur Typografie. Nicht jedes der folgenden Cover hat es in die Regale der Buchläden geschafft. Ich zeige sie trotzdem.',
      secondary: '',
    },
  },
  {
    imageSrc: tileUrl + 'Landigpage_Herzensangelegenheiten.png',
    topText: 'Herzenangelegenheiten',
    botText: '',
    id: 7,
    shouldHover: true,
    page: {
      images: [
        [
          {
            src:
              primaryUrl +
              projectLoc +
              'Herzensangelegenheiten/Kinderliederbuch_1.png',
            width: 1170,
            height: 983,
            alt: 'project7Image1',
          },
          {
            src:
              primaryUrl +
              projectLoc +
              'Herzensangelegenheiten/Kinderliederbuch_2.png',
            width: 1170,
            height: 783,
            alt: 'project7Image2',
          },
        ],
        [
          {
            src:
              primaryUrl +
              projectLoc +
              'Herzensangelegenheiten/Kinderliederbuch_3.png',
            width: 1170,
            height: 783,
            alt: 'project7Image3',
          },
        ],
        [
          {
            src:
              primaryUrl +
              projectLoc +
              'Herzensangelegenheiten/Kinderliederbuch_4.png',
            width: 1170,
            height: 783,
            alt: 'project7Image4',
          },
        ],
      ],
      title: 'Herzensangelegenheiten ',
      description:
        'Manche Projekte sind Herzensprojekte. Ich finde, auch die dürfen gezeigt werden.',
      secondary:
        'Zum Beispiel dieses einzigartige Geschenk für eine Freundin ihr zweites Kind erwartete. Gemeinsam mit einer Gruppe kreativer Freunde erstellten wir dieses Kinderliederbuch der anderen Art. Die ausgewählten Kinderlieder sind alt bekannt. Was besonders ist: Passend zum Buch gibt es auch eine CD! Wir haben die Lieder selbst eingesungen bzw. eingespielt. Dazu noch ein paar Bilder gemalt und schwups - war das 22-seitige Liederbuch fertig!',
      secondaryMain: 'umsetzung',
      secondaryDescription: 'Liederbuch  -   CD',
      thirdMain: 'team',
      thirdDescription: 'Nina, Domi, Anna, Gabriele, Ramon',
    },
    secondPage: {
      images: [
        [
          {
            src: project7Image5,
            width: 1148,
            height: 908,
            alt: 'project7Image5',
          },
        ],
        [
          {
            src: project7Image6,
            width: 543,
            height: 420,
            alt: 'project7Image6',
          },
          {
            src: project7Image7,
            width: 543,
            height: 420,
            alt: 'project7Image7',
          },
        ],
      ],
      title: '',
      description:
        "Oder die Zeitscheine, die wir meinem Papa zum 60sten geschenkt haben. Mit den Scheinen konnte er sich auserwählte Aktivitäten mit uns “kaufen”. Eisstockschießen, Städtetrip, Spieleabend... Gemeinsam Zeit verbringen.\nThat's real value!",
      secondary: '',
    },
  },
  {
    imageSrc: tileUrl + 'Landigpage_PraxisUtaSiebert.png',
    topText: 'Uta Sibert',
    botText: '',
    id: 8,
    shouldHover: true,
    page: {
      images: [
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
      title: 'Uta Sibert',
      description:
        'Für die Privatpraxis der Psychotherapie von Uta Siebert im Zentrum Münchens habe ich das bestehende CI überarbeitet und erweitert. Ein besonderes Angebot der Praxis: Die Mutter-Kind-Bindungsanalyse.Für diesen Teilbereich entwickelte ich ein optisches Konzept, welches sich harmonisch in das Gestaltungskonzept der Praxis integriert. Mit einem Logo für “die Bindungsanalytikerin”, einem angepassten Farbkonzept und passenden Webauftritt, entsteht somit ein Raum rund um die Themen Frauen, Schwangerschaft und gesunden Babies.',
      secondary: '',
      secondaryMain: 'umsetzung',
      secondaryDescription:
        'Logo  -   Geschäftsausstattung   -   Beschilderung   -   Flyer   -   Webauftritt',
    },
  },
  {
    imageSrc: tileUrl + 'Landigpage_Animation.png',
    topText: 'Animation',
    botText: '',
    id: 9,
    shouldHover: true,
    page: {
      images: [],
      videos: [
        'https://www.youtube.com/embed/x383taAa3S4?si=Zbx39ZatsOYdIhbs',
        'https://www.youtube.com/embed/-wBFkshvX9w?si=u-6sZ7E-no5efDlB',
      ],
      title: 'Animation',
      description:
        'Die Erstellung von bewegten Bildern eröffneten mir einen komplett neuen Raum der Kreativität. Das harmonische Zusammenspiel von Bild, Ton und Timing fordert mich, auf genau die richtige Art und Weise.',
      secondary:
        'Hier zwei Beispiele von schlichter, animierter Weihnachtspost, ohne viel Tamtam.',
      secondVideo: [
        'https://www.youtube.com/embed/2rX_MLJ6h0w?si=JEWzr0H5c9WOEiLf',
      ],
      secondMain: 'Ein Logo zum Leben erwecken? Klar!',
    },
  },
  {
    imageSrc: tileUrl + 'Landigpage_Robbie&Mira.png',
    topText: 'Hochzeit',
    botText: 'Robbie & Mira',
    id: 10,
    shouldHover: true,
    page: {
      images: [
        [
          {
            src: primaryUrl + projectLoc + 'Robbie&Mira/RobbieandMira_1.png',
            width: 1170,
            height: 1005,
            alt: 'project9Image1',
          },
        ],
        [
          {
            src: primaryUrl + projectLoc + 'Robbie&Mira/RobbieandMira_2.png',
            width: 1170,
            height: 883,
            alt: 'project9Image2',
          },
        ],
        [
          {
            src: primaryUrl + projectLoc + 'Robbie&Mira/RobbieandMira_3.png',
            width: 1170,
            height: 701,
            alt: 'project9Image3',
          },
        ],
        [
          {
            src: primaryUrl + projectLoc + 'Robbie&Mira/RobbieandMira_4.png',
            width: 1170,
            height: 900,
            alt: 'project9Image4',
          },
        ],
        [
          {
            src: primaryUrl + projectLoc + 'Robbie&Mira/RobbieandMira_5.png',
            width: 1170,
            height: 788,
            alt: 'project9Image5',
          },
        ],
        [
          {
            src: primaryUrl + projectLoc + 'Robbie&Mira/RobbieandMira_6.png',
            width: 1170,
            height: 788,
            alt: 'project9Image6',
          },
        ],
      ],
      title: 'Robbie & Mira',
      description:
        'Und wenn sich die Berufsbilder so wunderbar ergänzen, kann man die Hochzeitswebpage gemeinsam erstellen. Teamwork makes the dream work. Genial!',
      secondaryMain: 'umsetzung',
      secondaryDescription:
        'Einladung  -   Infoflyer   -   Webauftritt   -   Dankeskarten',
      thirdMain: 'team',
      thirdDescription: 'Robbie Weber: Programmierung Webseite',
    },
  },
];
