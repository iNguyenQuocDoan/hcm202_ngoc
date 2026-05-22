/**
 * Topical imagery for the Vượt Bão 1991 project.
 * Sourced from Wikimedia Commons (public domain / free licence) and served
 * locally from /public/images so they load fast and never depend on a slow
 * or blocked external host.
 */

export const IMAGES = {
  hoChiMinh: {
    src: '/images/ho-chi-minh.jpg',
    alt: 'Chân dung Chủ tịch Hồ Chí Minh, năm 1946.',
    credit: 'Wikimedia Commons',
  },
  baDinhSquare: {
    src: '/images/ba-dinh-square.jpg',
    alt: 'Quảng trường Ba Đình, Hà Nội — nơi diễn ra các sự kiện trọng đại của đất nước.',
    credit: 'Wikimedia Commons',
  },
  mausoleum: {
    src: '/images/mausoleum.jpg',
    alt: 'Lăng Chủ tịch Hồ Chí Minh tại Hà Nội.',
    credit: 'Wikimedia Commons',
  },
  hanoiCity: {
    src: '/images/hanoi-city.jpg',
    alt: 'Một góc thành phố Hà Nội.',
    credit: 'Wikimedia Commons',
  },
  hanoiSunset: {
    src: '/images/hanoi-sunset.jpg',
    alt: 'Hoàng hôn trên bầu trời Hà Nội sau cơn mưa.',
    credit: 'Wikimedia Commons',
  },
  ricePaddy: {
    src: '/images/rice-paddy.jpg',
    alt: 'Cánh đồng lúa ở Việt Nam — biểu tượng của sản xuất nông nghiệp.',
    credit: 'Wikimedia Commons',
  },
  duckHerding: {
    src: '/images/duck-herding.jpg',
    alt: 'Chăn vịt trên cánh đồng vừa thu hoạch ở Việt Nam.',
    credit: 'Wikimedia Commons',
  },
  onePillarPagoda: {
    src: '/images/one-pillar-pagoda.jpg',
    alt: 'Chùa Một Cột, Hà Nội.',
    credit: 'Wikimedia Commons',
  },
  flag: {
    src: '/images/flag.png',
    alt: 'Quốc kỳ Việt Nam.',
    credit: 'Wikimedia Commons',
  },
} as const;

export type ImageKey = keyof typeof IMAGES;
