// English source copy. Every other language file must have exactly the same shape.
// Simple formatting inside strings: **bold** and [link text](url). Nothing else.

const en = {
  meta: {
    siteTitle: 'Advice4you',
    defaultDescription:
      'Private, practical help for newcomers in Norwich and Norfolk. Benefits, the council, the NHS, letters and forms, explained in simple words.',
  },

  a11y: {
    skip: 'Skip to main content',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    language: 'Language',
    chooseLanguage: 'Choose your language',
    currentLanguage: 'Current language',
    newTab: 'opens in a new tab',
    breadcrumb: 'Breadcrumb',
    mainNav: 'Main',
    footerNav: 'Footer',
  },

  nav: {
    home: 'Home',
    services: 'Services',
    how: 'How it works',
    about: 'About',
    faq: 'FAQ',
    blog: 'Journal',
    contact: 'Contact',
  },

  cta: {
    book: 'Book a consultation',
    whatsapp: 'WhatsApp',
    whatsappLong: 'Message us on WhatsApp',
    email: 'Email us',
    call: 'Call us',
    readMore: 'Read more',
    allServices: 'See all services',
    allQuestions: 'All questions',
    readJournal: 'Read the article',
    howItWorks: 'How it works',
  },

  greeting: 'Welcome',

  home: {
    title: 'Advice4you | Help for newcomers in Norwich and Norfolk',
    description:
      'Private, practical help with benefits, the council, the NHS, letters and forms. Based in Norwich, helping people across Norfolk.',
    eyebrow: 'Norwich  ·  Norfolk',
    heroA: 'Life in the UK,',
    heroB: 'made clear.',
    heroLead:
      'We help newcomers with benefits, the council, the NHS and official letters. Calm, private help in simple words.',
    langPrompt: 'Read this site in your language',
    scroll: 'Scroll',

    introKicker: 'Why we exist',
    introStatement:
      'A letter you cannot read. A form that asks the same thing twice. A phone line that never answers.',
    introBody:
      'Starting a life in a new country is hard enough. We sit with you, explain what each paper means and help you take the next step. One person, one problem at a time.',

    servicesKicker: 'What we help with',
    servicesTitle: 'Practical help with the offices of everyday life.',
    servicesLead:
      'Choose a topic to see what we can do. If your problem is not on the list, ask us anyway.',

    howKicker: 'How it works',
    howTitle: 'Four simple steps.',

    principlesKicker: 'Our promise',
    principlesTitle: 'How we work with you.',
    principles: [
      { title: 'Simple words', text: 'No jargon. We explain things slowly and check that you understand before we move on.' },
      { title: 'Private', text: 'What you tell us stays with us. We only share it when you say yes, or when the law says we must.' },
      { title: 'Honest about limits', text: 'If you need a solicitor or a regulated immigration adviser, we tell you straight away and help you find one.' },
      { title: 'Local', text: 'We are based in Norwich. We know the city and the county, and the offices people deal with every day.' },
    ],

    langKicker: 'Six languages',
    langTitle: 'Read this website in the language you know best.',
    langText:
      'Every page is in English, Bulgarian, Romanian, Turkish and two forms of Kurdish. When you contact us, tell us which language you speak.',

    faqKicker: 'Questions',
    faqTitle: 'People often ask.',

    journalKicker: 'Journal',
    journalTitle: 'Notes for life in Norfolk.',

    finalTitle: 'Bring us the letter. We will read it together.',
    finalText: 'Send a short message. Tell us your name, your language and a few words about the problem.',
  },

  services: {
    title: 'Services | Advice4you, Norwich',
    description:
      'Help with Universal Credit, council tax, housing letters, GP registration, National Insurance and official forms. Based in Norwich.',
    kicker: 'Services',
    h1: 'What we help with.',
    lead: 'Practical help with the systems and offices you meet in your first years in the UK. We explain, we prepare papers with you, and we help you reply on time.',
    items: [
      {
        id: 'benefits',
        title: 'Benefits and Universal Credit',
        short: 'Understand what you may be able to claim and keep your claim in order.',
        points: [
          'We explain the benefits you may be able to claim and what they depend on.',
          'Help to set up and use your online account.',
          'Help with forms, messages and evidence the office asks for.',
          'Help to understand a decision letter and what you can do next.',
        ],
      },
      {
        id: 'council',
        title: 'Council and housing',
        short: 'Council tax, housing applications and letters from the council.',
        points: [
          'We read council letters with you and explain what they ask for.',
          'Help with council tax bills, discounts and payment plans.',
          'Help to apply for housing and keep your application up to date.',
          'Help to reply before the deadline.',
        ],
      },
      {
        id: 'health',
        title: 'GP, NHS and health',
        short: 'Register with a doctor and understand NHS letters.',
        points: [
          'Help to find a GP surgery near you and register.',
          'We explain NHS letters and appointment details.',
          'We explain when to use NHS 111 and when to call 999.',
        ],
      },
      {
        id: 'work',
        title: 'Work and money basics',
        short: 'National Insurance number, bank account, payslips and school places.',
        points: [
          'Help to apply for a National Insurance number.',
          'We explain your payslip and the main deductions.',
          'Help with the papers a bank may ask for.',
          'Help to apply for a school place for your child.',
        ],
      },
      {
        id: 'letters',
        title: 'Letters, forms and emails',
        short: 'Bring us the letter. We read it with you and help you reply.',
        points: [
          'We read official letters with you and explain them in simple words.',
          'Help to fill in forms correctly the first time.',
          'Help to write clear replies and emails.',
          'We help you keep your papers in order, so nothing gets lost.',
        ],
      },
      {
        id: 'appointments',
        title: 'Appointments and phone calls',
        short: 'Get ready for an appointment and make the call with support.',
        points: [
          'We help you prepare questions and papers before an appointment.',
          'With your permission, we can speak to an office for you.',
          'We write down what was agreed, so you have a record.',
        ],
      },
      {
        id: 'legal',
        title: 'Legal problems and immigration',
        short: 'We help you find the right regulated adviser or solicitor.',
        points: [
          '**We do not give immigration advice.** For visas, status and asylum you need a regulated adviser or a solicitor.',
          'We help you find a regulated adviser or solicitor, including free services where they exist.',
          'We help you put your papers in order before your meeting.',
          'For other legal problems we explain where to get proper legal help.',
        ],
      },
    ],
    limitsTitle: 'What we do not do',
    limitsText:
      'Advice4you is not a law firm and is not regulated by the Immigration Advice Authority or the Solicitors Regulation Authority. We do not give immigration advice and we cannot represent you in court or at a tribunal. When you need that kind of help, we will tell you and help you find it.',
  },

  how: {
    title: 'How it works | Advice4you',
    description: 'How Advice4you works, step by step. What to bring, how we agree the cost and how we keep you in control.',
    kicker: 'How it works',
    h1: 'Simple from the first message.',
    lead: 'No long forms. No waiting rooms. You tell us the problem and we tell you clearly how we can help.',
    steps: [
      { title: 'Send a message', text: 'Use WhatsApp, phone or email. Tell us your name, your language and a few words about the problem.' },
      { title: 'We talk', text: 'We listen, look at your papers and tell you what we can do. You know the cost before any work starts.' },
      { title: 'We do the work together', text: 'Letters, forms, calls and online accounts. We explain every step as we go.' },
      { title: 'You stay in control', text: 'Nothing is sent or signed without your OK. You keep copies of everything.' },
    ],
    bringTitle: 'What to bring',
    bringItems: [
      'The letters or emails you received',
      'Your ID and any reference numbers',
      'Your phone, if you have online accounts',
      'A short list of your questions',
    ],
    costTitle: 'About cost',
    costText:
      'Contacting us is free. Before we start any paid work, we tell you the price and what it includes. If we cannot help, we say so, and where we can we point you to someone who can.',
  },

  about: {
    title: 'About | Advice4you, Norwich',
    description: 'Advice4you is a Norwich service that helps newcomers with the practical side of life in the UK. What we are, and what we are not.',
    kicker: 'About',
    h1: 'A calm place to start.',
    lead: 'Advice4you helps people who are new to the UK with the practical side of life here.',
    paras: [
      'Moving to a new country means learning a new system while you also learn a new language. Most problems are not hard. They are just written in words that are hard to understand.',
      'We help you understand those words. We read the letter with you, explain the choices, and help you do the next step yourself or with our support. We are based in Norwich and help people across Norfolk.',
    ],
    areTitle: 'What we are',
    areItems: [
      'A local, independent service based in Norwich',
      'Practical help with benefits, councils, the NHS, letters and forms',
      'A guide to the right regulated help when you need it',
    ],
    notTitle: 'What we are not',
    notItems: [
      'Not a law firm and not solicitors',
      'Not regulated to give immigration advice',
      'Not a government office or a charity',
    ],
    areaTitle: 'Where we work',
    areaText:
      'We are based in Norwich and help people across Norfolk. When you contact us, we agree together how and where to meet.',
  },

  faq: {
    title: 'Questions and answers | Advice4you',
    description: 'Answers to common questions about Advice4you: what we do, cost, languages, privacy and immigration advice.',
    kicker: 'FAQ',
    h1: 'Questions and answers.',
    lead: 'Short, honest answers. If your question is not here, send us a message.',
    items: [
      { q: 'What does Advice4you do?', a: 'We help newcomers with the practical side of life in the UK: benefits, the council, the NHS, letters, forms and phone calls. We explain things in simple words and help you take the next step.' },
      { q: 'Do you give immigration advice?', a: 'No. In the UK only regulated advisers and solicitors can give immigration advice. We can help you find one and help you get your papers ready for the meeting.' },
      { q: 'Are you a law firm?', a: 'No. Advice4you is not a law firm and we are not solicitors. If your problem needs a lawyer, we will tell you and help you find the right one.' },
      { q: 'Which languages can I use?', a: 'This website is in English, Bulgarian, Romanian, Turkish and Kurdish (Kurmanji and Sorani). When you contact us, tell us which language you speak and we will tell you how we can help.' },
      { q: 'How much does it cost?', a: 'Contacting us is free. Before we start any paid work, we tell you the price and what it includes. There are no hidden costs.' },
      { q: 'How do I book?', a: 'Send us a message on WhatsApp, call us or send an email. Tell us your name, your language and a few words about the problem.' },
      { q: 'Where do we meet?', a: 'We are based in Norwich and help people across Norfolk. When you contact us, we agree together how and where to meet.' },
      { q: 'What should I bring?', a: 'The letters or emails you received, your ID, any reference numbers, and a short list of your questions.' },
      { q: 'Is my information private?', a: 'Yes. We only use your information to help you. We do not share it without your permission, unless the law requires it. Please read our privacy policy for details.' },
      { q: 'Can you help me apply for Universal Credit?', a: 'Yes. We can explain how it works, help you set up your online account and help with the forms. The decision is always made by the Department for Work and Pensions, not by us.' },
      { q: 'Can you guarantee a result?', a: 'No. Decisions are made by the office that handles your case. What we promise is clear information and careful work.' },
      { q: 'I need a doctor. Can you help?', a: 'Yes. We can help you find a GP surgery near you and register. The NHS says you do not need ID, proof of address or proof of immigration status to register with a GP.' },
      { q: 'What if it is an emergency?', a: 'If a life is in danger, call 999. For urgent medical help that is not an emergency, call NHS 111. Advice4you is not an emergency service.' },
      { q: 'Do you help people outside Norwich?', a: 'Yes. We are based in Norwich and help people across Norfolk.' },
    ],
    moreTitle: 'Still have a question?',
    moreText: 'Send us a short message. We will reply in simple words.',
  },

  contact: {
    title: 'Contact | Advice4you, Norwich',
    description: 'Contact Advice4you by WhatsApp, phone or email. Based in Norwich, helping people across Norfolk.',
    kicker: 'Contact',
    h1: 'Send a short message.',
    lead: 'Tell us your name, your language and a few words about the problem. We will reply and agree the next step with you.',
    based: 'Based in Norwich. Helping people across Norfolk.',
    waLabel: 'WhatsApp',
    phoneLabel: 'Phone',
    emailLabel: 'Email',
    addressLabel: 'Address',
    mapLabel: 'Open in Maps',
    waPrefill: 'Hello Advice4you, I would like some help.',
    tipsTitle: 'In your first message',
    tips: [
      'Your name',
      'The language you speak',
      'A few words about the problem',
      'Any deadline on your letter',
    ],
    privacyNote:
      'Please do not send copies of your passport or ID until we ask for them. We will tell you the safest way to share documents.',
    emergencyTitle: 'In an emergency',
    emergencyText: 'If a life is in danger, call 999. For urgent medical help that is not an emergency, call NHS 111.',
  },

  blog: {
    title: 'Journal | Advice4you, Norwich',
    description: 'Clear, checked guides for newcomers living in Norwich and Norfolk.',
    kicker: 'Journal',
    h1: 'Notes for life in Norfolk.',
    lead: 'Clear guides to everyday systems, checked against official sources.',
    minRead: 'min read',
    published: 'Published',
    checked: 'Facts checked on',
    backToJournal: 'Back to the journal',
    sources: 'Sources',
    contents: 'In this article',
    helpTitle: 'Need help with any of this?',
    note: 'This article is general information, not legal advice. Rules can change, so always check the official source.',
  },

  privacy: {
    title: 'Privacy policy | Advice4you',
    description: 'How Advice4you uses and protects your personal information.',
    h1: 'Privacy policy',
    updated: 'Last updated',
    sections: [
      { h: 'Who we are', p: ['Advice4you is a service based in Norwich, United Kingdom. We are responsible for the personal information you share with us. You can contact us about privacy using the details on our contact page.'] },
      { h: 'This website', p: ['This website does not use analytics, advertising or tracking cookies. It does not have a contact form. Your browser stores your language choice and your cookie choice on your own device. Our hosting provider keeps short technical logs, such as IP addresses, to keep the website secure and working.'] },
      { h: 'When you contact us', p: ['When you message, call or email us, we receive your name, your contact details and what you tell us about your situation. Some of this may be sensitive, such as health or immigration details. We only ask for what we need to help you.'] },
      { h: 'Why we use your information', p: ['We use your information to answer you, to give you the help you ask for and to keep a record of the work we do together. Our legal bases under UK GDPR are your request for our service, our legitimate interest in running the service, and, for sensitive information, your explicit consent.'] },
      { h: 'Who we share it with', p: ['We do not sell your information. We only share it with an office or organisation when you ask us to, or when the law requires it. If you contact us by WhatsApp, WhatsApp also processes your messages under its own privacy policy.'] },
      { h: 'How long we keep it', p: ['We keep your information only as long as we need it to help you and to meet our legal duties. After that we delete it securely.'] },
      { h: 'Your rights', p: ['You can ask to see the information we hold about you, ask us to correct it or delete it, and object to how we use it. If you are not happy with how we handle your information, you can complain to the Information Commissioner’s Office at [ico.org.uk](https://ico.org.uk/make-a-complaint/).'] },
    ],
  },

  cookies: {
    title: 'Cookie policy | Advice4you',
    description: 'Advice4you uses only essential browser storage. No tracking and no advertising cookies.',
    h1: 'Cookie policy',
    updated: 'Last updated',
    sections: [
      { h: 'The short version', p: ['We do not use tracking or advertising cookies. This website only stores what it needs to work.'] },
      { h: 'What we store', p: ['**Language choice.** Remembers the language you picked, so the next page opens in that language.', '**Cookie choice.** Remembers your answer to the cookie message, so we do not ask again.', 'Both are stored in your browser on your own device. We cannot see them.'] },
      { h: 'Optional cookies', p: ['We do not use any optional cookies today. If we add optional tools in the future, such as visitor statistics, they will only start after you say yes. You can change your choice at any time with the Cookie settings link at the bottom of every page.'] },
      { h: 'Other websites', p: ['Links to other websites, such as GOV.UK or WhatsApp, take you to services with their own cookie rules.'] },
    ],
  },

  terms: {
    title: 'Terms of use | Advice4you',
    description: 'Terms for using the Advice4you website, and the limits of our service.',
    h1: 'Terms of use',
    updated: 'Last updated',
    sections: [
      { h: 'About this website', p: ['This website is run by Advice4you, based in Norwich, United Kingdom. By using it you accept these terms.'] },
      { h: 'General information only', p: ['The information on this website is general. It is not legal advice and it may not fit your situation. Rules and services can change. Always check the official source or ask us before you act.'] },
      { h: 'The limits of our service', p: ['Advice4you is not a law firm and is not regulated by the Immigration Advice Authority or the Solicitors Regulation Authority. **We do not give immigration advice or immigration services.** When you need regulated help, we will tell you and help you find it.'] },
      { h: 'No guarantee of outcome', p: ['Decisions on benefits, housing, council tax and other matters are made by the office that handles your case. We cannot promise a result.'] },
      { h: 'The automatic helper', p: ['The chat helper on this website gives short automatic answers from our questions page. It is not a person and it does not give advice about your case.'] },
      { h: 'Links to other websites', p: ['We link to official and trusted websites. We are not responsible for their content.'] },
      { h: 'Law', p: ['These terms are governed by the law of England and Wales.'] },
    ],
  },

  accessibility: {
    title: 'Accessibility | Advice4you',
    description: 'How we make the Advice4you website accessible, and photo credits.',
    h1: 'Accessibility',
    updated: 'Last updated',
    sections: [
      { h: 'Our aim', p: ['We want everyone to be able to use this website. We aim to meet the Web Content Accessibility Guidelines (WCAG) 2.2 at level AA.'] },
      { h: 'What you can do on this website', p: ['Read every page in six languages, including Sorani Kurdish written right to left.', 'Use the whole site with a keyboard or a screen reader.', 'Make the text larger with your browser settings without losing content.', 'Turn off animation with the reduced motion setting on your device.'] },
      { h: 'Translations', p: ['English is the original language of this website. If any part of a translation is unclear, please tell us and we will explain it.'] },
      { h: 'Tell us about a problem', p: ['If something on this website is hard to use, please contact us by WhatsApp, phone or email. We will do our best to fix it and to give you the information another way.'] },
    ],
    creditsTitle: 'Photo credits',
    creditsText: 'Photos from Unsplash, by:',
  },

  cookieBanner: {
    title: 'Cookies',
    text: 'We only use essential storage to remember your language and this choice. No tracking. No advertising.',
    accept: 'Accept',
    reject: 'Reject optional',
    policy: 'Cookie policy',
  },

  bot: {
    open: 'Questions?',
    openLabel: 'Open the help chat',
    title: 'Quick answers',
    note: 'Automatic answers. Not a person.',
    hello: 'Hello. I can answer simple questions about Advice4you. Choose a topic or type a question.',
    chooseLang: 'Choose your language',
    placeholder: 'Type your question',
    send: 'Send',
    close: 'Close chat',
    fallback: 'Sorry, I do not have an answer for that. Please send us a message and a person will reply.',
    contactPrompt: 'Talk to a person',
    youSaid: 'You',
    botName: 'Helper',
    chips: [
      { label: 'Services', intent: 'services' },
      { label: 'Immigration', intent: 'immigration' },
      { label: 'Cost', intent: 'cost' },
      { label: 'Book', intent: 'book' },
      { label: 'Languages', intent: 'languages' },
      { label: 'Emergency', intent: 'emergency' },
    ],
    intents: [
      { id: 'greeting', keywords: ['hello', 'hi', 'hey', 'good morning', 'good afternoon'], answer: 'Hello. How can I help? You can ask about our services, cost, languages or how to book.', link: '' },
      { id: 'services', keywords: ['service', 'help with', 'what do you do', 'what you do', 'offer'], answer: 'We help with benefits and Universal Credit, the council and housing, the GP and NHS, National Insurance, letters, forms and phone calls.', link: 'services' },
      { id: 'immigration', keywords: ['immigration', 'visa', 'asylum', 'status', 'home office', 'settled', 'evisa', 'citizenship', 'passport'], answer: 'We do not give immigration advice. Only regulated advisers and solicitors can. We can help you find one and get your papers ready.', link: 'services' },
      { id: 'lawyer', keywords: ['lawyer', 'solicitor', 'law firm', 'court', 'tribunal', 'legal'], answer: 'We are not a law firm. If you need a lawyer, we will tell you and help you find the right one.', link: 'about' },
      { id: 'cost', keywords: ['cost', 'price', 'fee', 'pay', 'money', 'free', 'how much', 'charge'], answer: 'Contacting us is free. Before any paid work starts, we tell you the price and what it includes.', link: 'how-it-works' },
      { id: 'book', keywords: ['book', 'appointment', 'meet', 'contact', 'call', 'phone', 'whatsapp', 'email'], answer: 'Send us a message on WhatsApp, call or email. Tell us your name, your language and a few words about the problem.', link: 'contact' },
      { id: 'languages', keywords: ['language', 'english', 'bulgarian', 'romanian', 'turkish', 'kurdish', 'translate', 'interpreter'], answer: 'This website is in English, Bulgarian, Romanian, Turkish, Kurmanji and Sorani. When you contact us, tell us which language you speak.', link: 'faq' },
      { id: 'benefits', keywords: ['benefit', 'universal credit', 'uc', 'dwp', 'jobcentre', 'pension', 'child benefit'], answer: 'We can explain how Universal Credit and other benefits work and help with your account and forms. The DWP makes the decision.', link: 'services' },
      { id: 'council', keywords: ['council', 'council tax', 'housing', 'rent', 'landlord', 'house', 'flat'], answer: 'We help with council tax, housing applications and letters from the council, and help you reply on time.', link: 'services' },
      { id: 'health', keywords: ['gp', 'doctor', 'nhs', 'hospital', 'health', 'dentist', 'medicine'], answer: 'We can help you register with a GP. The NHS says you do not need ID, proof of address or proof of immigration status to register.', link: 'services' },
      { id: 'work', keywords: ['national insurance', 'ni number', 'job', 'work', 'payslip', 'bank', 'school'], answer: 'We help with National Insurance numbers, payslips, bank papers and school places.', link: 'services' },
      { id: 'letter', keywords: ['letter', 'form', 'document', 'paper', 'email from', 'fine', 'deadline'], answer: 'Bring us the letter. We read it with you, explain it in simple words and help you reply before the deadline.', link: 'services' },
      { id: 'privacy', keywords: ['private', 'privacy', 'data', 'confidential', 'secret', 'safe'], answer: 'We only use your information to help you. We do not share it without your permission, unless the law requires it.', link: 'privacy' },
      { id: 'area', keywords: ['where', 'norwich', 'norfolk', 'location', 'address', 'office', 'area', 'hours', 'opening hours', 'directions', 'map', 'visit', 'street'], answer: 'Our address: {address}. We help people across Norfolk. Please message us before you visit, so we can agree a time.', link: 'contact' },
      { id: 'emergency', keywords: ['emergency', 'danger', 'urgent', '999', '111', 'police', 'ambulance'], answer: 'If a life is in danger, call 999. For urgent medical help that is not an emergency, call NHS 111. We are not an emergency service.', link: '' },
      { id: 'thanks', keywords: ['thank', 'thanks', 'ok', 'bye'], answer: 'You are welcome. If you need more help, send us a message.', link: '' },
    ],
  },

  footer: {
    tagline: 'Private, practical help for newcomers. Based in Norwich, helping people across Norfolk.',
    explore: 'Explore',
    legal: 'Legal',
    contact: 'Contact',
    disclaimer:
      'Advice4you is not a law firm and is not regulated by the Immigration Advice Authority or the Solicitors Regulation Authority. We do not give immigration advice. The information on this website is general and is not legal advice.',
    rights: 'All rights reserved.',
    cookieSettings: 'Cookie settings',
    privacy: 'Privacy',
    cookies: 'Cookies',
    terms: 'Terms',
    accessibility: 'Accessibility',
  },

  notFound: {
    title: 'Page not found | Advice4you',
    h1: 'This page is not here.',
    text: 'The link may be old, or the address may have a small mistake. Let us take you somewhere useful.',
    home: 'Go to the home page',
    contact: 'Contact us',
  },

  photoAlt: {
    pullsFerry: 'Pull’s Ferry, the old flint water gate on the River Wensum in Norwich',
    skyline: 'The Norwich skyline with the cathedral spire and the castle',
    elmHill: 'Elm Hill, a historic cobbled street in Norwich, at night',
    broads: 'A windmill by the water on the Norfolk Broads in early autumn',
    letter: 'A handwritten letter on a wooden table',
    writing: 'Hands writing a note at a table',
  },
};

export default en;

type Widen<T> = T extends string ? string : T extends readonly (infer U)[] ? Widen<U>[] : { [K in keyof T]: Widen<T[K]> };
export type Dict = Widen<typeof en>;
