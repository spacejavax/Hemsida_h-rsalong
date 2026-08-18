export type Service = { name: string; duration: string; price: string };
export const salon = {
  demo: true, name: 'Hairbynimet Beauty Salon & Company', shortName: 'Hairbynimet',
  phoneDisplay: '0455-84 405', phoneHref: 'tel:+4645584405', email: 'nimetfrisor@gmail.com',
  address: { street: 'Amiralitetstorget 25', postalCode: '371 30', city: 'Karlskrona', country: 'SE' },
  links: { booking: 'https://www.bokadirekt.se/places/hairbynimet-beauty-salon-company-27800', instagram: 'https://www.instagram.com/hairbynimet/', map: 'https://www.google.com/maps/search/?api=1&query=Amiralitetstorget+25%2C+371+30+Karlskrona' },
  rating: { value: '4,8', count: '1 837', source: 'Bokadirekt' },
  about: {
    intro: 'Vill du att håret ska kännas lika rätt som din stil? Då har du hittat hem.',
    paragraphs: [
      'Hos oss handlar det inte bara om färg och klippning – det handlar om att skapa en look som känns du, fast ännu bättre. Vi jobbar med moderna tekniker, trendkoll och en fingertoppskänsla för detaljer som gör skillnad på riktigt.',
      'Vi använder endast professionella produkter från ledande varumärken för att kunna skräddarsy varje behandling efter just ditt hår. Resultatet är hår som inte bara ser bra ut – utan håller, känns lyxigt och levererar varje dag.',
      'Det här är salongen där du som kund alltid står i centrum. Vi älskar det vi gör, och det märks – i energin, i resultatet och i upplevelsen.',
      'Boka enkelt online för våra vanligaste behandlingar. För extensions arbetar vi med Hairtalk och guidar dig hela vägen till ditt drömhår.',
      'Planerar du en större färgförändring, som en avfärgning? Hör av dig till oss först. Vi ger dig ärlig rådgivning och ser till att du bokar rätt behandling från start.'
    ],
    practical: [
      'Ungdomar under 17 år behöver vårdnadshavares godkännande vid färgbehandlingar.',
      'Färgpriser är cirka-priser och anpassas alltid efter ditt hår.',
      'Osäker på vad du ska boka? Ring oss – vi hjälper dig direkt.'
    ],
    cancellation: 'Avbokning sker senast 48 timmar före din tid och endast via telefon, inte via sms eller e-post. Sen avbokning eller uteblivet besök debiteras till 100%.',
    payment: 'Salongen är kontantfri. Betala smidigt med kort eller Swish.'
  },
  hours: [['Måndag','10.00–18.00'],['Tisdag','10.00–18.00'],['Onsdag','10.00–18.00'],['Torsdag','10.00–19.30'],['Fredag','10.00–17.00'],['Lördag','Stängt'],['Söndag','Stängt']] as const,
  staff: [{name:'Nimet Skoro',title:'Frisörmästare · Gesällbrev · Färgspecialist'},{name:'Josefine',title:'Frisör · Gesällbrev'},{name:'Felicia',title:'Certifierad frisör · Delprov · Hyrstol'}],
  services: {
    'Klippning': [{name:'Lyxklipp & Styling',duration:'65 min',price:'699 kr'},{name:'Fräsch Ny Look – Dam',duration:'45 min',price:'595 kr'},{name:'Herrklippning – Stilren & Skarp',duration:'45 min',price:'555 kr'},{name:'Fade Cut',duration:'30 min',price:'449 kr'},{name:'Senior Klipp & Tvätt',duration:'40 min',price:'470 kr'},{name:'Kids Cut 1–9 år',duration:'35 min',price:'430 kr'}],
    'Färg & form': [{name:'Balayage Glow',duration:'175 min',price:'från 1 945 kr'},{name:'Balayage makeover inkl. klippning',duration:'180 min',price:'från 2 480 kr'},{name:'Full Refresh Highlights',duration:'130 min',price:'från 1 910 kr'},{name:'Highlights + Haircut',duration:'155 min',price:'från 2 470 kr'},{name:'Gloss & Cut',duration:'80 min',price:'1 415 kr'},{name:'Colour & Cut Makeover',duration:'120 min',price:'från 2 310 kr'},{name:'Root Touch-Up',duration:'85 min',price:'1 025 kr'}],
    'Styling & special': [{name:'Lyxstyling med tvätt',duration:'35 min',price:'430 kr'},{name:'SPA-klippning hos Josefine',duration:'60 min',price:'675 kr'},{name:'Total Hair Transformation',duration:'250 min',price:'2 710 kr'},{name:'Extensions / hårförlängning',duration:'120 min',price:'pris efter konsultation'}]
  } satisfies Record<string, Service[]>,
  images: [{src:'/images/gesallbrev.jpeg',alt:'Nimet Skoro visar sitt gesällbrev inom frisöryrket'},{src:'/images/gallery-01.jpg',alt:'Glansigt hår med mjuka slingor och formade längder'},{src:'/images/gallery-02.jpg',alt:'Långt hår med sömlösa ljusa dimensioner'},{src:'/images/gallery-03.jpg',alt:'Naturlig hårfärg och nyklippta längder'},{src:'/images/gallery-07.jpg',alt:'Långt brunt hår med diskreta ljusa slingor'},{src:'/images/gallery-05.jpg',alt:'Kall blond hårfärg med mjuk styling'},{src:'/images/gallery-06.jpg',alt:'Mustig karamellfärg med glansiga lockar'}]
} as const;
