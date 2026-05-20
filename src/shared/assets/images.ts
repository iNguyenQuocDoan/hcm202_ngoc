/**
 * Topical imagery for the Vượt Bão 1991 project.
 * All sources are Wikimedia Commons (public domain / free licence).
 */

export const IMAGES = {
  hoChiMinh: {
    src: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Ho_Chi_Minh_1946.jpg',
    alt: 'Chân dung Chủ tịch Hồ Chí Minh, năm 1946.',
    credit: 'Wikimedia Commons',
  },
  baDinhSquare: {
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Ba_Dinh_Square%2C_Hanoi.jpg/1280px-Ba_Dinh_Square%2C_Hanoi.jpg',
    alt: 'Quảng trường Ba Đình, Hà Nội — nơi diễn ra các sự kiện trọng đại của đất nước.',
    credit: 'Wikimedia Commons',
  },
  mausoleum: {
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Hanoi_Vietnam_Mausoleum-of-Ho-Chi-Minh-01.jpg/1280px-Hanoi_Vietnam_Mausoleum-of-Ho-Chi-Minh-01.jpg',
    alt: 'Lăng Chủ tịch Hồ Chí Minh tại Hà Nội.',
    credit: 'Wikimedia Commons',
  },
  hanoiCity: {
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Hanoi_Vietnam.jpg/1280px-Hanoi_Vietnam.jpg',
    alt: 'Một góc thành phố Hà Nội.',
    credit: 'Wikimedia Commons',
  },
  hanoiSunset: {
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Sunset_over_Hanoi_After_the_Rain.jpg/1280px-Sunset_over_Hanoi_After_the_Rain.jpg',
    alt: 'Hoàng hôn trên bầu trời Hà Nội sau cơn mưa.',
    credit: 'Wikimedia Commons',
  },
  ricePaddy: {
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Rice_paddy_in_Vietnam_%2839598961285%29.jpg/1280px-Rice_paddy_in_Vietnam_%2839598961285%29.jpg',
    alt: 'Cánh đồng lúa ở Việt Nam — biểu tượng của sản xuất nông nghiệp.',
    credit: 'Wikimedia Commons',
  },
  duckHerding: {
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Duck_herding_in_harvested_rice_field%2C_Vietnam.jpg/1280px-Duck_herding_in_harvested_rice_field%2C_Vietnam.jpg',
    alt: 'Chăn vịt trên cánh đồng vừa thu hoạch ở Việt Nam.',
    credit: 'Wikimedia Commons',
  },
  onePillarPagoda: {
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/One_Pillar_Pagoda.jpg/1280px-One_Pillar_Pagoda.jpg',
    alt: 'Chùa Một Cột, Hà Nội.',
    credit: 'Wikimedia Commons',
  },
  flag: {
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/1280px-Flag_of_Vietnam.svg.png',
    alt: 'Quốc kỳ Việt Nam.',
    credit: 'Wikimedia Commons',
  },
} as const;

export type ImageKey = keyof typeof IMAGES;
