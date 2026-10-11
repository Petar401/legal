import type { Dict } from './en';

const ro: Dict = {
  meta: {
    siteTitle: 'Advice4you',
    defaultDescription:
      'Ajutor privat și practic pentru nou-veniții din Norwich și Norfolk. Beneficii, consiliul local, NHS, scrisori și formulare, explicate în cuvinte simple.',
  },

  a11y: {
    skip: 'Treceți la conținutul principal',
    menuOpen: 'Deschideți meniul',
    menuClose: 'Închideți meniul',
    language: 'Limba',
    chooseLanguage: 'Alegeți limba dumneavoastră',
    currentLanguage: 'Limba curentă',
    newTab: 'se deschide într-o filă nouă',
    breadcrumb: 'Calea de navigare',
    mainNav: 'Meniul principal',
    footerNav: 'Subsol',
  },

  nav: {
    home: 'Acasă',
    services: 'Servicii',
    how: 'Cum funcționează',
    about: 'Despre noi',
    faq: 'Întrebări',
    blog: 'Jurnal',
    contact: 'Contact',
  },

  cta: {
    book: 'Programați o consultație',
    whatsapp: 'WhatsApp',
    whatsappLong: 'Scrieți-ne pe WhatsApp',
    email: 'Trimiteți-ne un e-mail',
    call: 'Sunați-ne',
    readMore: 'Citiți mai mult',
    allServices: 'Vedeți toate serviciile',
    allQuestions: 'Toate întrebările',
    readJournal: 'Citiți articolul',
    howItWorks: 'Cum funcționează',
  },

  greeting: 'Bine ați venit',

  home: {
    title: 'Advice4you | Ajutor pentru nou-veniți în Norwich și Norfolk',
    description:
      'Ajutor privat și practic cu beneficiile, consiliul local, NHS, scrisorile și formularele. Cu sediul în Norwich, ajutăm oameni din tot comitatul Norfolk.',
    eyebrow: 'Norwich  ·  Norfolk',
    heroA: 'Viața în Marea Britanie,',
    heroB: 'explicată clar.',
    heroLead:
      'Îi ajutăm pe nou-veniți cu beneficiile, consiliul local, NHS și scrisorile oficiale. Ajutor calm și privat, în cuvinte simple.',
    langPrompt: 'Citiți acest site în limba dumneavoastră',
    scroll: 'Derulați',

    introKicker: 'De ce existăm',
    introStatement:
      'O scrisoare pe care nu o puteți citi. Un formular care vă cere același lucru de două ori. O linie telefonică care nu răspunde niciodată.',
    introBody:
      'Să începeți o viață într-o țară nouă este destul de greu. Stăm alături de dumneavoastră, vă explicăm ce înseamnă fiecare hârtie și vă ajutăm să faceți pasul următor. O singură persoană, o singură problemă odată.',

    servicesKicker: 'Cu ce vă ajutăm',
    servicesTitle: 'Ajutor practic cu instituțiile din viața de zi cu zi.',
    servicesLead:
      'Alegeți un subiect ca să vedeți ce putem face. Dacă problema dumneavoastră nu este pe listă, întrebați-ne oricum.',

    howKicker: 'Cum funcționează',
    howTitle: 'Patru pași simpli.',

    principlesKicker: 'Promisiunea noastră',
    principlesTitle: 'Cum lucrăm cu dumneavoastră.',
    principles: [
      { title: 'Cuvinte simple', text: 'Fără jargon. Explicăm lucrurile fără grabă și verificăm că ați înțeles înainte să mergem mai departe.' },
      { title: 'Confidențial', text: 'Ce ne spuneți rămâne la noi. Transmitem informațiile mai departe doar când ne dați acordul sau când legea ne obligă.' },
      { title: 'Sinceri despre limite', text: 'Dacă aveți nevoie de un avocat (solicitor) sau de un consilier de imigrare autorizat, vă spunem imediat și vă ajutăm să găsiți unul.' },
      { title: 'Din zonă', text: 'Suntem din Norwich. Cunoaștem orașul și comitatul, precum și birourile cu care oamenii au de-a face în fiecare zi.' },
    ],

    langKicker: 'Șase limbi',
    langTitle: 'Citiți acest site în limba pe care o cunoașteți cel mai bine.',
    langText:
      'Fiecare pagină este în engleză, bulgară, română, turcă și două forme de kurdă. Când ne contactați, spuneți-ne ce limbă vorbiți.',

    faqKicker: 'Întrebări',
    faqTitle: 'Ce ne întreabă oamenii cel mai des.',

    journalKicker: 'Jurnal',
    journalTitle: 'Note pentru viața în Norfolk.',

    finalTitle: 'Aduceți-ne scrisoarea. O citim împreună.',
    finalText: 'Trimiteți un mesaj scurt. Spuneți-ne numele, limba și câteva cuvinte despre problemă.',
  },

  services: {
    title: 'Servicii | Advice4you, Norwich',
    description:
      'Ajutor cu Universal Credit, council tax, scrisori despre locuință, înscrierea la medicul de familie (GP), National Insurance și formulare oficiale. Cu sediul în Norwich.',
    kicker: 'Servicii',
    h1: 'Cu ce vă ajutăm.',
    lead: 'Ajutor practic cu sistemele și birourile pe care le întâlniți în primii ani în Marea Britanie. Explicăm, pregătim actele împreună cu dumneavoastră și vă ajutăm să răspundeți la timp.',
    items: [
      {
        id: 'benefits',
        title: 'Beneficii și Universal Credit',
        short: 'Aflați ce beneficii puteți cere și țineți cererea în ordine.',
        points: [
          'Vă explicăm ce beneficii puteți solicita și de ce depind.',
          'Ajutor pentru a crea și a folosi contul online.',
          'Ajutor cu formularele, mesajele și dovezile cerute de birou.',
          'Ajutor pentru a înțelege o decizie primită prin scrisoare și ce puteți face mai departe.',
        ],
      },
      {
        id: 'council',
        title: 'Consiliul local și locuința',
        short: 'Council tax, cereri de locuință și scrisori de la consiliul local.',
        points: [
          'Citim împreună scrisorile consiliului local și vă explicăm ce cer.',
          'Ajutor cu facturile de council tax, reducerile și planurile de plată.',
          'Ajutor pentru a cere o locuință și a ține cererea la zi.',
          'Ajutor pentru a răspunde înainte de termenul limită.',
        ],
      },
      {
        id: 'health',
        title: 'Medic de familie (GP), NHS și sănătate',
        short: 'Înscrieți-vă la un medic și înțelegeți scrisorile NHS.',
        points: [
          'Ajutor pentru a găsi un cabinet de medicină de familie (GP) aproape de dumneavoastră și a vă înscrie.',
          'Vă explicăm scrisorile NHS și detaliile programărilor.',
          'Vă explicăm când să folosiți NHS 111 și când să sunați la 999.',
        ],
      },
      {
        id: 'work',
        title: 'Muncă și bani: noțiuni de bază',
        short: 'Număr National Insurance, cont bancar, fluturași de salariu și locuri la școală.',
        points: [
          'Ajutor pentru a cere un număr National Insurance.',
          'Vă explicăm fluturașul de salariu și principalele rețineri.',
          'Ajutor cu actele pe care le poate cere o bancă.',
          'Ajutor pentru a cere un loc la școală pentru copilul dumneavoastră.',
        ],
      },
      {
        id: 'letters',
        title: 'Scrisori, formulare și e-mailuri',
        short: 'Aduceți-ne scrisoarea. O citim împreună și vă ajutăm să răspundeți.',
        points: [
          'Citim împreună scrisorile oficiale și vi le explicăm în cuvinte simple.',
          'Ajutor pentru a completa corect formularele din prima încercare.',
          'Ajutor pentru a scrie răspunsuri și e-mailuri clare.',
          'Vă ajutăm să țineți actele în ordine, ca să nu se piardă nimic.',
        ],
      },
      {
        id: 'appointments',
        title: 'Programări și apeluri telefonice',
        short: 'Pregătiți-vă pentru o programare și sunați cu sprijinul nostru.',
        points: [
          'Vă ajutăm să pregătiți întrebările și actele înainte de o programare.',
          'Cu permisiunea dumneavoastră, putem vorbi cu un birou în locul dumneavoastră.',
          'Notăm ce s-a stabilit, ca să aveți o dovadă scrisă.',
        ],
      },
      {
        id: 'legal',
        title: 'Probleme juridice și imigrare',
        short: 'Vă ajutăm să găsiți consilierul autorizat sau avocatul (solicitor) potrivit.',
        points: [
          '**Nu oferim consultanță în materie de imigrare.** Pentru vize, statut și azil aveți nevoie de un consilier autorizat sau de un avocat (solicitor).',
          'Vă ajutăm să găsiți un consilier autorizat sau un avocat (solicitor), inclusiv servicii gratuite, acolo unde există.',
          'Vă ajutăm să puneți actele în ordine înainte de întâlnire.',
          'Pentru alte probleme juridice, vă explicăm unde puteți găsi ajutor juridic adecvat.',
        ],
      },
    ],
    limitsTitle: 'Ce nu facem',
    limitsText:
      'Advice4you nu este o firmă de avocatură și nu este reglementată de Immigration Advice Authority (autoritatea pentru consilierii de imigrare) sau de Solicitors Regulation Authority (autoritatea pentru avocații solicitors). Nu oferim consultanță în materie de imigrare și nu vă putem reprezenta în instanță sau la un tribunal. Când aveți nevoie de acest fel de ajutor, vă spunem și vă ajutăm să îl găsiți.',
  },

  how: {
    title: 'Cum funcționează | Advice4you',
    description: 'Cum funcționează Advice4you, pas cu pas. Ce să aduceți, cum stabilim costul și cum rămâneți în control.',
    kicker: 'Cum funcționează',
    h1: 'Simplu de la primul mesaj.',
    lead: 'Fără formulare lungi. Fără sală de așteptare. Ne spuneți problema, iar noi vă spunem clar cum vă putem ajuta.',
    steps: [
      { title: 'Trimiteți un mesaj', text: 'Folosiți WhatsApp, telefonul sau e-mailul. Spuneți-ne numele, limba și câteva cuvinte despre problemă.' },
      { title: 'Vorbim', text: 'Vă ascultăm, ne uităm la acte și vă spunem ce putem face. Știți costul înainte să înceapă orice lucrare.' },
      { title: 'Lucrăm împreună', text: 'Scrisori, formulare, apeluri și conturi online. Vă explicăm fiecare pas pe parcurs.' },
      { title: 'Rămâneți în control', text: 'Nu se trimite și nu se semnează nimic fără acordul dumneavoastră. Păstrați copii după toate actele.' },
    ],
    bringTitle: 'Ce să aduceți',
    bringItems: [
      'Scrisorile sau e-mailurile primite',
      'Actul de identitate și numerele de referință',
      'Telefonul, dacă aveți conturi online',
      'O listă scurtă cu întrebările dumneavoastră',
    ],
    costTitle: 'Despre cost',
    costText:
      'Nu vă costă nimic să ne contactați. Înainte să începem orice lucrare plătită, vă spunem prețul și ce include. Dacă nu vă putem ajuta, vă spunem și, dacă se poate, vă îndrumăm către cineva care vă poate ajuta.',
  },

  about: {
    title: 'Despre noi | Advice4you, Norwich',
    description: 'Advice4you este un serviciu din Norwich care îi ajută pe nou-veniți cu partea practică a vieții în Marea Britanie. Ce suntem și ce nu suntem.',
    kicker: 'Despre noi',
    h1: 'Un loc liniștit de unde să începeți.',
    lead: 'Advice4you îi ajută pe cei care sunt noi în Marea Britanie cu partea practică a vieții de aici.',
    paras: [
      'Când vă mutați într-o țară nouă, trebuie să învățați un sistem nou și, în același timp, o limbă nouă. Cele mai multe probleme nu sunt grele. Sunt doar scrise în cuvinte greu de înțeles.',
      'Vă ajutăm să înțelegeți aceste cuvinte. Citim scrisoarea împreună, explicăm opțiunile și vă ajutăm să faceți pasul următor, fie pe cont propriu, fie cu sprijinul nostru. Suntem din Norwich și ajutăm oameni din tot comitatul Norfolk.',
    ],
    areTitle: 'Ce suntem',
    areItems: [
      'Un serviciu local și independent, cu sediul în Norwich',
      'Ajutor practic cu beneficiile, consiliile locale, NHS, scrisorile și formularele',
      'Un ghid către ajutorul autorizat potrivit, atunci când aveți nevoie de el',
    ],
    notTitle: 'Ce nu suntem',
    notItems: [
      'Nu suntem o firmă de avocatură și nu suntem avocați (solicitors)',
      'Nu suntem autorizați să oferim consultanță în materie de imigrare',
      'Nu suntem un birou guvernamental și nici o organizație de caritate',
    ],
    areaTitle: 'Unde lucrăm',
    areaText:
      'Suntem din Norwich și ajutăm oameni din tot comitatul Norfolk. Când ne contactați, stabilim împreună cum și unde ne întâlnim.',
  },

  faq: {
    title: 'Întrebări și răspunsuri | Advice4you',
    description: 'Răspunsuri la întrebări frecvente despre Advice4you: ce facem, costul, limbile, confidențialitatea și consultanța în materie de imigrare.',
    kicker: 'Întrebări',
    h1: 'Întrebări și răspunsuri.',
    lead: 'Răspunsuri scurte și sincere. Dacă întrebarea dumneavoastră nu este aici, trimiteți-ne un mesaj.',
    items: [
      { q: 'Ce face Advice4you?', a: 'Îi ajutăm pe nou-veniți cu partea practică a vieții în Marea Britanie: beneficii, consiliul local, NHS, scrisori, formulare și apeluri telefonice. Explicăm lucrurile în cuvinte simple și vă ajutăm să faceți pasul următor.' },
      { q: 'Oferiți consultanță în materie de imigrare?', a: 'Nu. În Marea Britanie, consultanță în materie de imigrare pot oferi doar consilierii autorizați și avocații (solicitors). Vă putem ajuta să găsiți unul și să vă pregătiți actele pentru întâlnire.' },
      { q: 'Sunteți o firmă de avocatură?', a: 'Nu. Advice4you nu este o firmă de avocatură, iar noi nu suntem avocați (solicitors). Dacă problema dumneavoastră are nevoie de un avocat, vă spunem și vă ajutăm să îl găsiți pe cel potrivit.' },
      { q: 'Ce limbi pot folosi?', a: 'Acest site este în engleză, bulgară, română, turcă și kurdă (kurmanji și sorani). Când ne contactați, spuneți-ne ce limbă vorbiți și vă spunem cum vă putem ajuta.' },
      { q: 'Cât costă?', a: 'Nu vă costă nimic să ne contactați. Înainte să începem orice lucrare plătită, vă spunem prețul și ce include. Nu există costuri ascunse.' },
      { q: 'Cum fac o programare?', a: 'Trimiteți-ne un mesaj pe WhatsApp, sunați-ne sau scrieți-ne un e-mail. Spuneți-ne numele, limba și câteva cuvinte despre problemă.' },
      { q: 'Unde ne întâlnim?', a: 'Suntem din Norwich și ajutăm oameni din tot comitatul Norfolk. Când ne contactați, stabilim împreună cum și unde ne întâlnim.' },
      { q: 'Ce trebuie să aduc?', a: 'Scrisorile sau e-mailurile primite, actul de identitate, eventualele numere de referință și o listă scurtă cu întrebările dumneavoastră.' },
      { q: 'Informațiile mele sunt confidențiale?', a: 'Da. Folosim informațiile dumneavoastră doar ca să vă ajutăm. Nu le transmitem mai departe fără permisiunea dumneavoastră, decât dacă legea o cere. Vă rugăm să citiți politica noastră de confidențialitate pentru detalii.' },
      { q: 'Mă puteți ajuta să cer Universal Credit?', a: 'Da. Putem explica cum funcționează, vă putem ajuta să vă creați contul online și să completați formularele. Decizia este luată întotdeauna de Department for Work and Pensions (DWP, ministerul pentru muncă și pensii), nu de noi.' },
      { q: 'Puteți garanta un rezultat?', a: 'Nu. Deciziile sunt luate de biroul care se ocupă de cazul dumneavoastră. Ce promitem este informare clară și muncă atentă.' },
      { q: 'Am nevoie de un medic. Mă puteți ajuta?', a: 'Da. Vă putem ajuta să găsiți un cabinet de medicină de familie (GP) aproape de dumneavoastră și să vă înscrieți. NHS spune că nu aveți nevoie de act de identitate, de dovada adresei sau de dovada statutului de imigrare pentru a vă înscrie la un GP.' },
      { q: 'Ce fac dacă este o urgență?', a: 'Dacă viața cuiva este în pericol, sunați la 999. Pentru ajutor medical urgent care nu pune viața în pericol, sunați la NHS 111. Advice4you nu este un serviciu de urgență.' },
      { q: 'Ajutați și oameni din afara orașului Norwich?', a: 'Da. Suntem din Norwich și ajutăm oameni din tot comitatul Norfolk.' },
    ],
    moreTitle: 'Mai aveți o întrebare?',
    moreText: 'Trimiteți-ne un mesaj scurt. Vă răspundem în cuvinte simple.',
  },

  contact: {
    title: 'Contact | Advice4you, Norwich',
    description: 'Contactați Advice4you pe WhatsApp, la telefon sau prin e-mail. Cu sediul în Norwich, ajutăm oameni din tot comitatul Norfolk.',
    kicker: 'Contact',
    h1: 'Trimiteți un mesaj scurt.',
    lead: 'Spuneți-ne numele, limba și câteva cuvinte despre problemă. Vă răspundem și stabilim împreună pasul următor.',
    based: 'Cu sediul în Norwich. Ajutăm oameni din tot comitatul Norfolk.',
    waLabel: 'WhatsApp',
    phoneLabel: 'Telefon',
    emailLabel: 'E-mail',
    addressLabel: 'Adresă',
    mapLabel: 'Deschide în Hărți',
    waPrefill: 'Bună ziua, Advice4you. Aș avea nevoie de ajutor.',
    tipsTitle: 'În primul mesaj',
    tips: [
      'Numele dumneavoastră',
      'Limba pe care o vorbiți',
      'Câteva cuvinte despre problemă',
      'Orice termen limită din scrisoare',
    ],
    privacyNote:
      'Vă rugăm să nu trimiteți copii ale pașaportului sau ale actului de identitate până nu vi le cerem. Vă spunem care este cea mai sigură cale de a trimite documentele.',
    emergencyTitle: 'În caz de urgență',
    emergencyText: 'Dacă viața cuiva este în pericol, sunați la 999. Pentru ajutor medical urgent care nu pune viața în pericol, sunați la NHS 111.',
  },

  blog: {
    title: 'Jurnal | Advice4you, Norwich',
    description: 'Ghiduri clare și verificate pentru nou-veniții din Norwich și Norfolk.',
    kicker: 'Jurnal',
    h1: 'Note pentru viața în Norfolk.',
    lead: 'Ghiduri clare despre sistemele de zi cu zi, verificate cu surse oficiale.',
    minRead: 'min de citit',
    published: 'Publicat',
    checked: 'Informații verificate la',
    backToJournal: 'Înapoi la jurnal',
    sources: 'Surse',
    contents: 'În acest articol',
    helpTitle: 'Aveți nevoie de ajutor cu așa ceva?',
    note: 'Acest articol conține informații generale, nu consultanță juridică. Regulile se pot schimba, așa că verificați întotdeauna sursa oficială.',
  },

  privacy: {
    title: 'Politica de confidențialitate | Advice4you',
    description: 'Cum folosește și protejează Advice4you informațiile dumneavoastră personale.',
    h1: 'Politica de confidențialitate',
    updated: 'Ultima actualizare',
    sections: [
      { h: 'Cine suntem', p: ['Advice4you este un serviciu cu sediul în Norwich, Regatul Unit. Suntem responsabili pentru datele personale pe care ni le dați. Ne puteți contacta în privința confidențialității folosind datele de pe pagina noastră de contact.'] },
      { h: 'Acest site web', p: ['Acest site nu folosește instrumente de analiză, publicitate sau cookie-uri de urmărire. Nu are formular de contact. Browserul dumneavoastră păstrează pe dispozitivul dumneavoastră alegerea limbii și alegerea privind cookie-urile. Furnizorul nostru de găzduire păstrează jurnale tehnice scurte, cum ar fi adresele IP, pentru ca site-ul să rămână sigur și funcțional.'] },
      { h: 'Când ne contactați', p: ['Când ne scrieți, ne sunați sau ne trimiteți un e-mail, primim numele dumneavoastră, datele de contact și ce ne spuneți despre situația dumneavoastră. Unele dintre acestea pot fi sensibile, cum ar fi detaliile despre sănătate sau imigrare. Cerem doar ce avem nevoie ca să vă ajutăm.'] },
      { h: 'De ce folosim informațiile dumneavoastră', p: ['Folosim informațiile dumneavoastră ca să vă răspundem, să vă oferim ajutorul cerut și să păstrăm o evidență a muncii făcute împreună. Temeiurile noastre juridice conform GDPR din Regatul Unit (UK GDPR) sunt cererea dumneavoastră pentru serviciul nostru, interesul nostru legitim de a administra serviciul și, pentru informațiile sensibile, consimțământul dumneavoastră explicit.'] },
      { h: 'Cu cine le transmitem', p: ['Nu vă vindem informațiile. Le transmitem unui birou sau unei organizații doar atunci când ne cereți acest lucru sau când legea o impune. Dacă ne contactați pe WhatsApp, WhatsApp vă prelucrează și el mesajele, conform propriei politici de confidențialitate.'] },
      { h: 'Cât timp le păstrăm', p: ['Păstrăm informațiile dumneavoastră doar cât timp avem nevoie de ele pentru a vă ajuta și pentru a ne îndeplini obligațiile legale. După aceea le ștergem în siguranță.'] },
      { h: 'Drepturile dumneavoastră', p: ['Puteți cere să vedeți informațiile pe care le deținem despre dumneavoastră, puteți cere corectarea sau ștergerea lor și vă puteți opune modului în care le folosim. Dacă nu sunteți de acord cu felul în care ne ocupăm de informațiile dumneavoastră, puteți depune o plângere la Information Commissioner’s Office (autoritatea britanică pentru protecția datelor), la [ico.org.uk](https://ico.org.uk/make-a-complaint/).'] },
    ],
  },

  cookies: {
    title: 'Politica privind cookie-urile | Advice4you',
    description: 'Advice4you folosește doar stocarea esențială din browser. Fără urmărire și fără cookie-uri de publicitate.',
    h1: 'Politica privind cookie-urile',
    updated: 'Ultima actualizare',
    sections: [
      { h: 'Pe scurt', p: ['Nu folosim cookie-uri de urmărire sau de publicitate. Acest site stochează doar ce îi este necesar pentru a funcționa.'] },
      { h: 'Ce stocăm', p: ['**Alegerea limbii.** Ține minte limba aleasă, ca următoarea pagină să se deschidă în acea limbă.', '**Alegerea privind cookie-urile.** Ține minte răspunsul dumneavoastră la mesajul despre cookie-uri, ca să nu vă mai întrebăm.', 'Ambele sunt păstrate în browserul dumneavoastră, pe dispozitivul dumneavoastră. Noi nu le putem vedea.'] },
      { h: 'Cookie-uri opționale', p: ['Nu folosim niciun cookie opțional în prezent. Dacă adăugăm în viitor instrumente opționale, cum ar fi statistici despre vizitatori, acestea vor porni doar după ce vă dați acordul. Vă puteți schimba alegerea oricând, cu linkul Setări cookie-uri din partea de jos a fiecărei pagini.'] },
      { h: 'Alte site-uri web', p: ['Linkurile către alte site-uri, cum ar fi GOV.UK sau WhatsApp, vă duc la servicii cu propriile reguli privind cookie-urile.'] },
    ],
  },

  terms: {
    title: 'Termeni de utilizare | Advice4you',
    description: 'Termenii de utilizare a site-ului Advice4you și limitele serviciului nostru.',
    h1: 'Termeni de utilizare',
    updated: 'Ultima actualizare',
    sections: [
      { h: 'Despre acest site web', p: ['Acest site este administrat de Advice4you, cu sediul în Norwich, Regatul Unit. Folosindu-l, acceptați acești termeni.'] },
      { h: 'Doar informații generale', p: ['Informațiile de pe acest site sunt generale. Nu constituie consultanță juridică și este posibil să nu se potrivească situației dumneavoastră. Regulile și serviciile se pot schimba. Verificați întotdeauna sursa oficială sau întrebați-ne înainte să acționați.'] },
      { h: 'Limitele serviciului nostru', p: ['Advice4you nu este o firmă de avocatură și nu este reglementată de Immigration Advice Authority (autoritatea pentru consilierii de imigrare) sau de Solicitors Regulation Authority (autoritatea pentru avocații solicitors). **Nu oferim consultanță sau servicii în materie de imigrare.** Când aveți nevoie de ajutor autorizat, vă spunem și vă ajutăm să îl găsiți.'] },
      { h: 'Fără garanția unui rezultat', p: ['Deciziile privind beneficiile, locuința, council tax și alte chestiuni sunt luate de biroul care se ocupă de cazul dumneavoastră. Nu putem promite un rezultat.'] },
      { h: 'Asistentul automat', p: ['Asistentul de chat de pe acest site oferă răspunsuri scurte și automate, luate din pagina noastră de întrebări. Nu este o persoană și nu oferă sfaturi despre cazul dumneavoastră.'] },
      { h: 'Linkuri către alte site-uri', p: ['Trimitem către site-uri oficiale și de încredere. Nu răspundem de conținutul lor.'] },
      { h: 'Legea aplicabilă', p: ['Acești termeni sunt guvernați de legea Angliei și Țării Galilor.'] },
    ],
  },

  accessibility: {
    title: 'Accesibilitate | Advice4you',
    description: 'Cum facem site-ul Advice4you accesibil și creditele foto.',
    h1: 'Accesibilitate',
    updated: 'Ultima actualizare',
    sections: [
      { h: 'Scopul nostru', p: ['Vrem ca toată lumea să poată folosi acest site. Ne propunem să respectăm Web Content Accessibility Guidelines (WCAG) 2.2, nivelul AA.'] },
      { h: 'Ce puteți face pe acest site', p: ['Citiți fiecare pagină în șase limbi, inclusiv în kurda sorani, scrisă de la dreapta la stânga.', 'Folosiți întregul site cu tastatura sau cu un cititor de ecran.', 'Măriți textul din setările browserului fără să pierdeți conținut.', 'Opriți animațiile cu setarea de mișcare redusă de pe dispozitivul dumneavoastră.'] },
      { h: 'Traduceri', p: ['Engleza este limba originală a acestui site. Dacă o parte dintr-o traducere nu este clară, vă rugăm să ne spuneți și vă explicăm.'] },
      { h: 'Spuneți-ne despre o problemă', p: ['Dacă ceva de pe acest site este greu de folosit, vă rugăm să ne contactați pe WhatsApp, la telefon sau prin e-mail. Vom face tot posibilul să remediem problema și să vă oferim informațiile în alt mod.'] },
    ],
    creditsTitle: 'Credite foto',
    creditsText: 'Fotografii de pe Unsplash, de:',
  },

  cookieBanner: {
    title: 'Cookie-uri',
    text: 'Folosim doar stocare esențială, ca să ținem minte limba dumneavoastră și această alegere. Fără urmărire. Fără publicitate.',
    accept: 'Acceptați',
    reject: 'Respingeți cele opționale',
    policy: 'Politica privind cookie-urile',
  },

  bot: {
    open: 'Întrebări?',
    openLabel: 'Deschideți chatul de ajutor',
    title: 'Răspunsuri rapide',
    note: 'Răspunsuri automate. Nu este o persoană.',
    hello: 'Bună ziua. Pot răspunde la întrebări simple despre Advice4you. Alegeți un subiect sau scrieți o întrebare.',
    chooseLang: 'Alegeți limba',
    placeholder: 'Scrieți întrebarea dumneavoastră',
    send: 'Trimiteți',
    close: 'Închideți chatul',
    fallback: 'Îmi pare rău, nu am un răspuns la asta. Vă rugăm să ne trimiteți un mesaj și vă va răspunde o persoană.',
    contactPrompt: 'Vorbiți cu o persoană',
    youSaid: 'Dumneavoastră',
    botName: 'Asistent',
    chips: [
      { label: 'Servicii', intent: 'services' },
      { label: 'Imigrare', intent: 'immigration' },
      { label: 'Cost', intent: 'cost' },
      { label: 'Programare', intent: 'book' },
      { label: 'Limbi', intent: 'languages' },
      { label: 'Urgență', intent: 'emergency' },
    ],
    intents: [
      { id: 'greeting', keywords: ['buna', 'bună', 'salut', 'hei', 'buna ziua', 'bună ziua', 'buna dimineata', 'bună dimineața', 'buna seara', 'bună seara', 'neata'], answer: 'Bună ziua. Cu ce vă pot ajuta? Puteți întreba despre serviciile noastre, cost, limbi sau cum faceți o programare.', link: '' },
      { id: 'services', keywords: ['servicii', 'serviciu', 'ajutor cu', 'ce faceti', 'ce faceți', 'oferiti', 'oferiți', 'ajutati', 'ajutați'], answer: 'Ajutăm cu beneficiile și Universal Credit, consiliul local și locuința, medicul de familie (GP) și NHS, National Insurance, scrisori, formulare și apeluri telefonice.', link: 'services' },
      { id: 'immigration', keywords: ['imigrare', 'imigr', 'viza', 'viză', 'vize', 'azil', 'statut', 'home office', 'evisa', 'ukvi', 'cetatenie', 'cetățenie', 'pasaport', 'permis de sedere'], answer: 'Nu oferim consultanță în materie de imigrare. O pot oferi doar consilierii autorizați și avocații (solicitors). Vă putem ajuta să găsiți unul și să vă pregătiți actele.', link: 'services' },
      { id: 'lawyer', keywords: ['avocat', 'avocati', 'solicitor', 'firma de avocatura', 'firmă de avocatură', 'tribunal', 'instanta', 'instanță', 'juridic', 'proces', 'lege'], answer: 'Nu suntem o firmă de avocatură. Dacă aveți nevoie de un avocat, vă spunem și vă ajutăm să îl găsiți pe cel potrivit.', link: 'about' },
      { id: 'cost', keywords: ['cost', 'costa', 'costă', 'pret', 'preț', 'tarif', 'plata', 'plată', 'gratuit', 'gratis', 'bani', 'cat costa', 'cât costă'], answer: 'Nu vă costă nimic să ne contactați. Înainte să înceapă orice lucrare plătită, vă spunem prețul și ce include.', link: 'how-it-works' },
      { id: 'book', keywords: ['programare', 'programa', 'programez', 'rezerv', 'intalnire', 'întâlnire', 'contact', 'telefon', 'sunati', 'sunați', 'whatsapp', 'email', 'e-mail'], answer: 'Trimiteți-ne un mesaj pe WhatsApp, sunați-ne sau scrieți-ne un e-mail. Spuneți-ne numele, limba și câteva cuvinte despre problemă.', link: 'contact' },
      { id: 'languages', keywords: ['limba', 'limbi', 'engleza', 'engleză', 'bulgara', 'bulgară', 'turca', 'turcă', 'kurda', 'kurdă', 'romana', 'română', 'traducere', 'interpret'], answer: 'Acest site este în engleză, bulgară, română, turcă, kurmanji și sorani. Când ne contactați, spuneți-ne ce limbă vorbiți.', link: 'faq' },
      { id: 'benefits', keywords: ['beneficii', 'beneficiu', 'universal credit', 'uc', 'dwp', 'jobcentre', 'pensie', 'alocatie', 'alocație', 'ajutor social'], answer: 'Putem explica cum funcționează Universal Credit și alte beneficii și vă ajutăm cu contul și formularele. Decizia este luată de DWP.', link: 'services' },
      { id: 'council', keywords: ['consiliu', 'primarie', 'primărie', 'council tax', 'locuinta', 'locuință', 'chirie', 'proprietar', 'apartament', 'casa', 'casă'], answer: 'Ajutăm cu council tax, cererile de locuință și scrisorile de la consiliul local. Vă ajutăm și să răspundeți la timp.', link: 'services' },
      { id: 'health', keywords: ['medic', 'doctor', 'gp', 'nhs', 'spital', 'sanatate', 'sănătate', 'dentist', 'medicament', 'medicamente', 'stomatolog'], answer: 'Vă putem ajuta să vă înscrieți la un medic de familie (GP). NHS spune că nu aveți nevoie de act de identitate, de dovada adresei sau de dovada statutului de imigrare pentru a vă înscrie.', link: 'services' },
      { id: 'work', keywords: ['national insurance', 'numar ni', 'job', 'munca', 'muncă', 'salariu', 'fluturas', 'fluturaș', 'banca', 'bancă', 'cont bancar', 'scoala', 'școală'], answer: 'Ajutăm cu numerele National Insurance, fluturașii de salariu, actele pentru bancă și locurile la școală.', link: 'services' },
      { id: 'letter', keywords: ['scrisoare', 'scrisori', 'formular', 'document', 'acte', 'hartie', 'hârtie', 'hartii', 'documente', 'formulare', 'amenda', 'amendă', 'termen'], answer: 'Aduceți-ne scrisoarea. O citim împreună, v-o explicăm în cuvinte simple și vă ajutăm să răspundeți înainte de termenul limită.', link: 'services' },
      { id: 'privacy', keywords: ['privat', 'confidential', 'confidențial', 'confidentialitate', 'confidențialitate', 'gdpr', 'date', 'secret', 'sigur', 'siguranta', 'siguranță'], answer: 'Folosim informațiile dumneavoastră doar ca să vă ajutăm. Nu le transmitem mai departe fără permisiunea dumneavoastră, decât dacă legea o cere.', link: 'privacy' },
      { id: 'area', keywords: ['unde', 'norwich', 'norfolk', 'locatie', 'locație', 'adresa', 'adresă', 'birou', 'zona', 'zonă', 'program', 'harta', 'hartă', 'vizită'], answer: 'Adresa noastră: {address}. Ajutăm oameni din tot comitatul Norfolk. Vă rugăm să ne scrieți înainte de vizită, ca să stabilim ora.', link: 'contact' },
      { id: 'emergency', keywords: ['urgenta', 'urgență', 'pericol', 'urgent', '999', '111', 'politie', 'poliție', 'ambulanta', 'ambulanță', 'salvare', '112'], answer: 'Dacă viața cuiva este în pericol, sunați la 999. Pentru ajutor medical urgent care nu pune viața în pericol, sunați la NHS 111. Nu suntem un serviciu de urgență.', link: '' },
      { id: 'thanks', keywords: ['multumesc', 'mulțumesc', 'multumim', 'mulțumim', 'mersi', 'ok', 'pa', 'la revedere'], answer: 'Cu plăcere. Dacă aveți nevoie de mai mult ajutor, trimiteți-ne un mesaj.', link: '' },
    ],
  },

  footer: {
    tagline: 'Ajutor privat și practic pentru nou-veniți. Cu sediul în Norwich, ajutăm oameni din tot comitatul Norfolk.',
    explore: 'Explorați',
    legal: 'Informații juridice',
    contact: 'Contact',
    disclaimer:
      'Advice4you nu este o firmă de avocatură și nu este reglementată de Immigration Advice Authority sau de Solicitors Regulation Authority. Nu oferim consultanță în materie de imigrare. Informațiile de pe acest site sunt generale și nu constituie consultanță juridică.',
    rights: 'Toate drepturile rezervate.',
    cookieSettings: 'Setări cookie-uri',
    privacy: 'Confidențialitate',
    cookies: 'Cookie-uri',
    terms: 'Termeni',
    accessibility: 'Accesibilitate',
  },

  notFound: {
    title: 'Pagina nu a fost găsită | Advice4you',
    h1: 'Această pagină nu este aici.',
    text: 'Linkul poate fi vechi sau adresa poate avea o mică greșeală. Vă ducem noi spre o pagină utilă.',
    home: 'Mergeți la pagina principală',
    contact: 'Contactați-ne',
  },

  photoAlt: {
    pullsFerry: 'Pull’s Ferry, vechea poartă de apă din piatră de silex de pe râul Wensum, în Norwich',
    skyline: 'Silueta orașului Norwich, cu turla catedralei și castelul',
    elmHill: 'Elm Hill, o stradă istorică pavată cu piatră, în Norwich, noaptea',
    broads: 'O moară de vânt lângă apă, în Norfolk Broads, la începutul toamnei',
    letter: 'O scrisoare scrisă de mână pe o masă de lemn',
    writing: 'Mâini care scriu o notă la o masă',
  },
};

export default ro;
