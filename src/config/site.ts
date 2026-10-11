// One place for business details. Replace every value marked TODO before launch.
export const site = {
  name: 'Advice4you',
  // TODO: change to your own domain when you have one (no trailing slash).
  url: 'https://advice4you.vercel.app',
  area: 'Norwich, Norfolk',
  // TODO: real email address. While this is empty, email links and email schema are left out.
  email: '',
  // Same number for calls and WhatsApp.
  phoneDisplay: '07466 951175',
  phoneIntl: '+44 7466 951175',
  phoneHref: '+447466951175',
  // WhatsApp number in international format, digits only, no plus sign.
  whatsapp: '447466951175',
  whatsappDisplay: '07466 951175',
  address: {
    street: '73A Dereham Road',
    locality: 'Norwich',
    region: 'Norfolk',
    // TODO: add the postcode. While this is empty it is left out of the page and the schema.
    postcode: '',
    country: 'GB',
  },
  // TODO: add opening hours as schema.org specs when known, e.g. { days: ['Monday', 'Tuesday'], opens: '09:00', closes: '17:00' }
  hours: [] as { days: string[]; opens: string; closes: string }[],
};

export const hasEmail = site.email.length > 0;

/** "73A Dereham Road, Norwich, NR2 ..." (postcode only once it is set) */
export const addressLine = [site.address.street, site.address.locality, site.address.postcode]
  .filter(Boolean)
  .join(', ');

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  [site.address.street, site.address.locality, site.address.postcode, 'UK'].filter(Boolean).join(', '),
)}`;

export const whatsappLink = (text = '') =>
  `https://wa.me/${site.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}`;
