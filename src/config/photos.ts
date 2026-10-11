// Photos are served by the Unsplash CDN, as Unsplash asks. Credits appear on the accessibility page.
export type PhotoKey = keyof typeof photos;

export const photos = {
  pullsFerry: {
    src: 'https://images.unsplash.com/photo-1781381047670-23307b562a6e',
    w: 6000, h: 4000,
    author: 'Arpita Ghosh', authorUrl: 'https://unsplash.com/@arpitamukh1',
    page: 'https://unsplash.com/photos/FehG1VqkvUY',
  },
  skyline: {
    src: 'https://images.unsplash.com/photo-1772969737694-871675200a59',
    w: 5760, h: 3840,
    author: 'Daniel Sturley', authorUrl: 'https://unsplash.com/@danielsturleyphotography',
    page: 'https://unsplash.com/photos/a96YinP0asI',
  },
  elmHill: {
    src: 'https://images.unsplash.com/photo-1605991004802-a3e068de6aa0',
    w: 3098, h: 2478,
    author: 'Chris Spalton', authorUrl: 'https://unsplash.com/@cspalton',
    page: 'https://unsplash.com/photos/yVbZ9DZ9_68',
  },
  broads: {
    src: 'https://images.unsplash.com/photo-1729865947173-c040820562aa',
    w: 5855, h: 3904,
    author: 'Will Hulbert', authorUrl: 'https://unsplash.com/@hulberto',
    page: 'https://unsplash.com/photos/qLSBFHg5pls',
  },
  letter: {
    src: 'https://images.unsplash.com/photo-1779729739456-be9369745290',
    w: 6000, h: 4000,
    author: 'Simon Ray', authorUrl: 'https://unsplash.com/@simonbhray',
    page: 'https://unsplash.com/photos/NggSDMYm5K8',
  },
  writing: {
    src: 'https://images.unsplash.com/photo-1760720962365-6ae03435c02a',
    w: 6320, h: 3912,
    author: 'Kelly Sikkema', authorUrl: 'https://unsplash.com/@kellysikkema',
    page: 'https://unsplash.com/photos/tA1N5B8O-nI',
  },
} as const;

export const photoUrl = (key: PhotoKey, width: number, q = 72) =>
  `${photos[key].src}?auto=format&fit=crop&w=${width}&q=${q}`;

export const photoSrcset = (key: PhotoKey, widths = [640, 960, 1280, 1600, 2000, 2560]) =>
  widths.map((w) => `${photoUrl(key, w)} ${w}w`).join(', ');
