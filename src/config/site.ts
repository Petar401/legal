// One place for business details. Replace every value marked TODO before launch.
export const site = {
  name: 'Advice4you',
  // TODO: change to your own domain when you have one (no trailing slash).
  url: 'https://advice4you.vercel.app',
  area: 'Norwich, Norfolk',
  // TODO: real contact details.
  email: 'hello@example.com',
  phoneDisplay: '+44 0000 000000',
  phoneHref: '+440000000000',
  // WhatsApp number in international format, digits only, no plus sign.
  whatsapp: '440000000000',
  whatsappDisplay: '+44 0000 000000',
};

export const whatsappLink = (text = '') =>
  `https://wa.me/${site.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}`;
