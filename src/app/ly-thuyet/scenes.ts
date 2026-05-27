import type { ImageKey } from '@/shared/assets/images';

/**
 * Data-driven scene script for the cinematic Lý thuyết experience.
 * Each scene maps to one ~100svh frame on /ly-thuyet. Effects, layout,
 * and atmospheric tone are toggled per scene from this file alone —
 * the StoryScene component does the rest.
 *
 * Narrative paragraphs may inline-highlight keywords with [[word]]
 * syntax, which the renderer turns into animated keyword chips.
 */

export type SceneTone =
  | 'dawn' // warm paper sunrise — opening
  | 'storm' // navy-storm — crisis
  | 'ember' // smouldering crimson — turning point
  | 'ink' // deep ink night — guiding thought
  | 'harvest' // golden cream — policy
  | 'twilight' // dusky purple-warm — reflection
  | 'afterglow' // sun glow — outcome
  | 'paper'; // editorial light — closing

export type SceneEffect =
  | 'particles'
  | 'glow'
  | 'orb-drift'
  | 'timeline-draw'
  | 'floating-icons'
  | 'image-parallax'
  | 'keyword-highlight'
  | 'compass'
  | 'quote-pillar'
  | 'stat-grid'
  | 'card-burst'
  | 'flag-flutter'
  | 'rain-streaks'
  | 'sun-rays';

export type SceneLayout = 'left' | 'right' | 'center';

export type SceneIconName =
  | 'shield-alert'
  | 'cloud-lightning'
  | 'network'
  | 'shopping-basket'
  | 'hand-heart'
  | 'mountain'
  | 'compass'
  | 'globe'
  | 'sprout'
  | 'wheat'
  | 'handshake'
  | 'lightbulb'
  | 'sun-rise'
  | 'star';

export interface SceneBullet {
  icon?: SceneIconName;
  title: string;
  body: string;
  detailKey?: string;
}

export interface SceneStat {
  value: number;
  decimals?: number;
  label: string;
  suffix?: string;
}

export interface SceneTimelineStep {
  year: string;
  title: string;
  body: string;
}

export interface SceneImage {
  key: ImageKey;
  ratio?: string;
  focus?: string;
  caption?: string;
}

export interface StoryScene {
  id: string;
  chapter: string;
  eyebrow: string;
  index: string;
  title: string;
  /** Short narrative blocks. Wrap keywords with [[word]] to animate them. */
  paragraphs: string[];
  highlights?: string[];
  bullets?: SceneBullet[];
  stats?: SceneStat[];
  quote?: { text: string; attrib: string };
  timelineSteps?: SceneTimelineStep[];
  detailKey?: string;
  image?: SceneImage;
  tone: SceneTone;
  layout: SceneLayout;
  effects: SceneEffect[];
}

export const storyScenes: StoryScene[] = [
  {
    id: 'mo-dau',
    chapter: 'Hồi 1',
    eyebrow: 'Mở đầu',
    index: '00',
    title: 'Một mốc trên dòng Đổi mới',
    paragraphs: [
      'Năm 1991, đất nước đứng giữa hai cơn sóng: kinh tế trong nước còn ngổn ngang sau bao cấp, ngoài thế giới — hệ thống xã hội chủ nghĩa Liên Xô, Đông Âu nghiêng đổ.',
      'Đổi mới không bắt đầu từ 1991. Nó được khởi xướng từ [[Đại hội VI]] năm 1986. 1991 là lúc Việt Nam tiếp tục kiểm nghiệm, củng cố và phát triển con đường đã chọn giữa biến động lớn.',
      'Đại hội VII họp tại Hà Nội ngày 24 – 27/6/1991. Đường lối Đổi mới được tái khẳng định: phát huy [[nội lực]], lấy đời sống nhân dân làm mục tiêu, chuyển dần từ bao cấp sang kinh tế hàng hóa nhiều thành phần.',
    ],
    highlights: ['Đại hội VII', 'tháng 6 · 1991', 'tiếp tục Đổi mới'],
    detailKey: 'mo-dau',
    image: {
      key: 'baDinhSquare',
      ratio: 'aspect-[4/5]',
      caption: 'Quảng trường Ba Đình, Hà Nội.',
    },
    tone: 'dawn',
    layout: 'right',
    effects: ['glow', 'orb-drift', 'flag-flutter', 'keyword-highlight', 'image-parallax'],
  },

  {
    id: 'boi-canh',
    chapter: 'Hồi 2',
    eyebrow: 'Bối cảnh',
    index: '01',
    title: 'Sóng dữ bốn bề',
    paragraphs: [
      'Trước Đổi mới, nền kinh tế còn chịu sức nặng của [[cơ chế kế hoạch hóa tập trung]]: sản xuất thiếu động lực, lưu thông tắc nghẽn, đời sống thiếu thốn.',
      'Đại hội VI đã mở đường với ba chương trình lớn — lương thực thực phẩm, hàng tiêu dùng, xuất khẩu. Nhưng đến 1991, áp lực dồn dập: Liên Xô và Đông Âu khủng hoảng, đối tác truyền thống đảo lộn, [[bao vây cấm vận]] vẫn chưa gỡ.',
    ],
    bullets: [
      {
        icon: 'shield-alert',
        title: 'Cơ chế bao cấp trì trệ',
        body: 'Kế hoạch hóa tập trung làm sản xuất thiếu động lực, lưu thông hàng hóa khó khăn, nền kinh tế kém linh hoạt.',
      },
      {
        icon: 'cloud-lightning',
        title: 'Liên Xô, Đông Âu khủng hoảng',
        body: 'Các đối tác kinh tế, thương mại và viện trợ truyền thống đảo lộn, mất một điểm tựa lớn của nền kinh tế.',
      },
      {
        icon: 'network',
        title: 'Vẫn chịu bao vây, cấm vận',
        body: 'Mỹ tiếp tục cấm vận, khiến việc mở rộng quan hệ kinh tế quốc tế thêm khó khăn.',
      },
      {
        icon: 'shopping-basket',
        title: 'Đời sống nhân dân thiếu thốn',
        body: 'Hàng hóa khan hiếm, sản xuất chưa ổn định — nhu cầu cải thiện đời sống thúc đẩy tiếp tục Đổi mới.',
      },
    ],
    detailKey: 'boi-canh',
    tone: 'storm',
    layout: 'center',
    effects: ['particles', 'rain-streaks', 'card-burst', 'keyword-highlight'],
  },

  {
    id: 'truc-thoi-gian',
    chapter: 'Hồi 3',
    eyebrow: 'Trục thời gian',
    index: '02',
    title: 'Năm năm bản lề',
    paragraphs: [
      'Từ một mốc khởi xướng đến một mốc thử thách, dòng thời gian 1986 – 1995 vẽ nên đường bay của Đổi mới: vạch ra, va đập, kiên trì, và bứt lên.',
    ],
    timelineSteps: [
      { year: '1986', title: 'Đại hội VI', body: 'Khởi xướng Đổi mới: ba chương trình lương thực, hàng tiêu dùng, xuất khẩu.' },
      { year: '1989', title: 'Biến động Đông Âu', body: 'Các nước XHCN Đông Âu rơi vào khủng hoảng.' },
      { year: '6 · 1991', title: 'Đại hội VII', body: 'Họp tại Hà Nội 24 – 27/6, tiếp tục đường lối Đổi mới.' },
      { year: '12 · 1991', title: 'Liên Xô tan rã', body: 'Trật tự thế giới thay đổi, Việt Nam phải tự chủ.' },
      { year: '1991 – 95', title: 'Kiên trì Đổi mới', body: 'GDP bình quân +8,2%/năm, từng bước phục hồi nền kinh tế.' },
    ],
    tone: 'ember',
    layout: 'center',
    effects: ['timeline-draw', 'glow', 'orb-drift'],
  },

  {
    id: 'van-dung',
    chapter: 'Hồi 4',
    eyebrow: 'Vận dụng tư tưởng',
    index: '03',
    title: 'La bàn từ Hồ Chí Minh',
    paragraphs: [
      'Tư tưởng Hồ Chí Minh không phải một chính sách kinh tế đơn lẻ — đó là [[la bàn]] xác định mục tiêu, nguyên tắc và phương pháp.',
      'Bốn luận điểm dẫn đường Đổi mới giữa cơn bão 1991: lấy dân làm gốc, tự lực tự cường, sáng tạo không giáo điều, độc lập tự chủ mà mở cửa.',
    ],
    bullets: [
      {
        icon: 'hand-heart',
        title: 'Lấy dân làm gốc',
        body: 'Đổi mới kinh tế phải hướng vào đời sống nhân dân: việc làm, lương thực, hàng tiêu dùng, thu nhập và quyền làm chủ.',
        detailKey: 'dan-lam-goc',
      },
      {
        icon: 'mountain',
        title: 'Tự lực, tự cường',
        body: 'Khi điểm tựa kinh tế truyền thống đảo lộn, đất nước phải phát huy nội lực để không bị động trước biến động quốc tế.',
        detailKey: 'tu-luc',
      },
      {
        icon: 'compass',
        title: 'Sáng tạo, không giáo điều',
        body: 'Giữ mục tiêu xã hội chủ nghĩa nhưng không đồng nhất nó với cơ chế bao cấp — đổi mới phương pháp tổ chức nền kinh tế.',
        detailKey: 'kien-dinh',
      },
      {
        icon: 'globe',
        title: 'Độc lập tự chủ, mở cửa',
        body: 'Mở rộng quan hệ kinh tế đối ngoại trên nền tảng độc lập tự chủ: kết hợp sức mạnh dân tộc với sức mạnh thời đại.',
        detailKey: 'doc-lap-hop-tac',
      },
    ],
    tone: 'ink',
    layout: 'center',
    effects: ['compass', 'floating-icons', 'glow', 'keyword-highlight'],
  },

  {
    id: 'chinh-sach',
    chapter: 'Hồi 5',
    eyebrow: 'Chính sách',
    index: '04',
    title: 'Bốn ngả đường thực thi',
    paragraphs: [
      'Từ la bàn tư tưởng, bốn nhóm chính sách then chốt được triển khai — từng bước đưa Việt Nam vượt khỏi tình trạng [[khủng hoảng]] kinh tế đầu thập niên 1990.',
    ],
    bullets: [
      {
        icon: 'sprout',
        title: 'Kinh tế nhiều thành phần',
        body: 'Thừa nhận và phát triển kinh tế hàng hóa nhiều thành phần. Người dân, hộ gia đình, doanh nghiệp tư nhân và nhà nước cùng tham gia phát triển.',
        detailKey: 'kinh-te-nhieu-thanh-phan',
      },
      {
        icon: 'globe',
        title: 'Thị trường có quản lý',
        body: 'Không phủ nhận thị trường nhưng không để vận hành tự phát. Nhà nước định hướng và điều tiết bằng pháp luật, kế hoạch, chính sách.',
        detailKey: 'co-che-thi-truong',
      },
      {
        icon: 'wheat',
        title: 'Nhu cầu kinh tế thiết thực',
        body: 'Tiếp tục ba chương trình từ Đại hội VI: lương thực thực phẩm, hàng tiêu dùng và hàng xuất khẩu — bám sát đời sống nhân dân.',
        detailKey: 'nhu-cau-thiet-thuc',
      },
      {
        icon: 'handshake',
        title: 'Mở rộng đối ngoại',
        body: 'Mở rộng quan hệ kinh tế với các nước và tổ chức quốc tế — tự lực nhưng không tự cô lập.',
        detailKey: 'mo-cua',
      },
    ],
    tone: 'harvest',
    layout: 'center',
    effects: ['floating-icons', 'glow', 'orb-drift'],
  },

  {
    id: 'loi-day',
    chapter: 'Hồi 6',
    eyebrow: 'Lời dạy',
    index: '05',
    title: 'Sức dân là cội nguồn',
    paragraphs: [
      'Lấy dân làm gốc trong kinh tế nghĩa là [[lấy đời sống nhân dân làm mục tiêu]] và lấy sức dân làm động lực phát triển. Đây là sợi chỉ xuyên suốt mọi chính sách Đổi mới.',
    ],
    quote: {
      text: 'Dễ trăm lần không dân cũng chịu, khó vạn lần dân liệu cũng xong.',
      attrib: 'Hồ Chí Minh',
    },
    image: {
      key: 'hoChiMinh',
      ratio: 'aspect-[4/5]',
      focus: 'object-top',
    },
    tone: 'ink',
    layout: 'left',
    effects: ['quote-pillar', 'glow', 'sun-rays', 'image-parallax', 'keyword-highlight'],
  },

  {
    id: 'ket-qua',
    chapter: 'Hồi 7',
    eyebrow: 'Kết quả',
    index: '06',
    title: 'Sau cơn bão, mùa vàng',
    paragraphs: [
      'Sau Đại hội VII, Việt Nam kiên trì đường lối Đổi mới. Báo cáo tại Đại hội VIII đánh giá: nền [[kinh tế hàng hóa nhiều thành phần]] tiếp tục được xây dựng và đạt nhiều kết quả quan trọng trong kế hoạch 5 năm 1991 – 1995.',
    ],
    stats: [
      { value: 8.2, decimals: 1, suffix: '%', label: 'Tăng trưởng GDP bình quân mỗi năm' },
      { value: 13.3, decimals: 1, suffix: '%', label: 'Tăng bình quân sản xuất công nghiệp' },
      { value: 4.5, decimals: 1, suffix: '%', label: 'Tăng bình quân sản xuất nông nghiệp' },
      { value: 20, decimals: 0, suffix: '%', label: 'Mức tăng kim ngạch xuất khẩu' },
    ],
    detailKey: 'ket-qua',
    image: {
      key: 'ricePaddy',
      ratio: 'aspect-[5/4]',
      caption: 'Cánh đồng lúa Việt Nam.',
    },
    tone: 'afterglow',
    layout: 'left',
    effects: ['sun-rays', 'stat-grid', 'glow', 'orb-drift', 'image-parallax', 'keyword-highlight'],
  },

  {
    id: 'bai-hoc',
    chapter: 'Hồi 8',
    eyebrow: 'Bài học',
    index: '07',
    title: 'Hành trang còn mãi',
    paragraphs: [
      'Một câu chuyện về Đổi mới chỉ trọn vẹn khi nó để lại điều dùng được cho hôm nay. Bốn bài học rút ra từ tư tưởng Hồ Chí Minh — vẫn nguyên giá trị trước mọi cơn bão mới.',
    ],
    bullets: [
      {
        icon: 'lightbulb',
        title: 'Xuất phát từ thực tiễn',
        body: 'Khi mô hình cũ không còn phù hợp, cần mạnh dạn đổi mới cách quản lý, không bảo thủ, không máy móc.',
        detailKey: 'bh-thuc-tien',
      },
      {
        icon: 'hand-heart',
        title: 'Đời sống nhân dân là trung tâm',
        body: 'Tăng trưởng kinh tế chỉ bền vững khi tạo việc làm, tăng thu nhập, nâng chất lượng sống của người dân.',
        detailKey: 'bh-dan-trung-tam',
      },
      {
        icon: 'mountain',
        title: 'Phát huy nội lực',
        body: 'Muốn đứng vững trước biến động bên ngoài, nền kinh tế phải có năng lực sản xuất, con người và thể chế đủ mạnh.',
        detailKey: 'bh-noi-luc',
      },
      {
        icon: 'globe',
        title: 'Mở cửa đi cùng tự chủ',
        body: 'Hội nhập là cần thiết, nhưng phải dựa trên lợi ích quốc gia và khả năng tự chủ của nền kinh tế.',
        detailKey: 'bh-mo-cua-tu-chu',
      },
    ],
    tone: 'twilight',
    layout: 'center',
    effects: ['floating-icons', 'glow', 'orb-drift', 'card-burst'],
  },

  {
    id: 'ket-luan',
    chapter: 'Hồi cuối',
    eyebrow: 'Kết luận',
    index: '08',
    title: 'Kiên định mục tiêu, đổi mới cách đi',
    paragraphs: [
      'Việt Nam đã không quay lại cơ chế bao cấp cũ, cũng không dao động trước biến động quốc tế. Đổi mới tiếp tục theo hướng thực tế: [[phát huy sức dân]], nhiều thành phần kinh tế, thị trường có quản lý, mở rộng đối ngoại.',
      'Bài học từ tư tưởng Hồ Chí Minh: muốn vượt khó khăn kinh tế, một quốc gia cần dám đổi mới tư duy quản lý, phát huy sức dân, xây dựng nội lực, mở cửa trong thế chủ động và luôn đặt đời sống nhân dân ở trung tâm.',
    ],
    image: {
      key: 'mausoleum',
      ratio: 'aspect-[4/3]',
      caption: 'Lăng Chủ tịch Hồ Chí Minh, Hà Nội.',
    },
    tone: 'paper',
    layout: 'right',
    effects: ['glow', 'sun-rays', 'orb-drift', 'image-parallax', 'keyword-highlight'],
  },
];
