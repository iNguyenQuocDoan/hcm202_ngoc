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
      { year: '1988', title: 'Khoán 10', body: 'Nghị quyết 10 trao quyền chủ động sản xuất cho hộ nông dân.' },
      { year: '1989', title: 'Biến động Đông Âu', body: 'Các nước XHCN Đông Âu lâm vào khủng hoảng, viện trợ truyền thống suy giảm.' },
      { year: '6 · 1991', title: 'Đại hội VII', body: 'Họp tại Hà Nội 24 – 27/6, thông qua Cương lĩnh và Chiến lược đến 2000.' },
      { year: '10 · 1991', title: 'Hiệp định Paris', body: 'Hiệp định Paris về Campuchia tháo gỡ thế bao vây ngoại giao.' },
      { year: '12 · 1991', title: 'Liên Xô tan rã', body: 'Việt Nam buộc vận hành kinh tế tự chủ, mở rộng đối tác mới.' },
      { year: '1991 – 95', title: 'Kiên trì Đổi mới', body: 'GDP bình quân +8,2%/năm, từng bước thoát khủng hoảng kinh tế – xã hội.' },
    ],
    detailKey: 'truc-thoi-gian',
    tone: 'ember',
    layout: 'center',
    effects: ['timeline-draw', 'glow', 'orb-drift'],
  },

  {
    id: 'van-dung',
    chapter: 'Hồi 4',
    eyebrow: 'Vận dụng tư tưởng',
    index: '03',
    title: 'La bàn vượt bão từ Hồ Chí Minh',
    paragraphs: [
      'Tư tưởng Hồ Chí Minh không phải một chính sách kinh tế đơn lẻ — đó là [[phương pháp luận]] xác định mục tiêu, nguyên tắc và phương thức hành động.',
      'Bốn luận điểm dẫn đường Đổi mới giữa cơn bão đầu thập niên 1990: lấy dân làm gốc, tự lực tự cường, sáng tạo không giáo điều, độc lập tự chủ đi cùng mở cửa hợp tác.',
    ],
    bullets: [
      {
        icon: 'hand-heart',
        title: 'Lấy dân làm gốc',
        body: 'Mọi chính sách hướng vào đời sống nhân dân: lương thực, việc làm, thu nhập, hàng tiêu dùng và quyền tham gia sản xuất kinh doanh.',
        detailKey: 'dan-lam-goc',
      },
      {
        icon: 'mountain',
        title: 'Tự lực, tự cường',
        body: 'Phát huy nội lực — sức dân, đất đai, lao động, doanh nghiệp trong nước và năng lực quản lý của Nhà nước — để đứng vững trước biến động.',
        detailKey: 'tu-luc',
      },
      {
        icon: 'compass',
        title: 'Sáng tạo, không giáo điều',
        body: 'Giữ mục tiêu xã hội chủ nghĩa nhưng không đồng nhất với cơ chế bao cấp — thừa nhận kinh tế nhiều thành phần và cơ chế thị trường.',
        detailKey: 'kien-dinh',
      },
      {
        icon: 'globe',
        title: 'Độc lập tự chủ, mở cửa hợp tác',
        body: 'Kết hợp sức mạnh dân tộc với sức mạnh thời đại — hội nhập trên nền tảng giữ vững lợi ích quốc gia và quyền tự quyết.',
        detailKey: 'doc-lap-hop-tac',
      },
    ],
    detailKey: 'van-dung',
    tone: 'ink',
    layout: 'center',
    effects: ['compass', 'floating-icons', 'glow', 'keyword-highlight'],
  },

  {
    id: 'chinh-sach',
    chapter: 'Hồi 5',
    eyebrow: 'Chính sách thực thi',
    index: '04',
    title: 'Bốn hướng chuyển động',
    paragraphs: [
      'Từ định hướng tư tưởng và đường lối Đại hội VII, Đổi mới được cụ thể hóa thành bốn [[hướng chuyển động]] chính — từng bước đưa Việt Nam thoát khỏi khủng hoảng kinh tế đầu thập niên 1990.',
    ],
    bullets: [
      {
        icon: 'sprout',
        title: 'Kinh tế hàng hóa nhiều thành phần',
        body: 'Nhà nước, tập thể, cá thể, tư nhân và khu vực vốn đầu tư nước ngoài cùng tham gia — giải phóng sức sản xuất.',
        detailKey: 'kinh-te-nhieu-thanh-phan',
      },
      {
        icon: 'globe',
        title: 'Thị trường có quản lý của Nhà nước',
        body: 'Dùng động lực thị trường, đồng thời Nhà nước điều tiết bằng pháp luật, kế hoạch, chính sách tài chính – tiền tệ.',
        detailKey: 'co-che-thi-truong',
      },
      {
        icon: 'wheat',
        title: 'Ba chương trình kinh tế thiết thực',
        body: 'Lương thực thực phẩm, hàng tiêu dùng và hàng xuất khẩu — bám sát nhu cầu nhân dân, tạo nguồn ngoại tệ.',
        detailKey: 'nhu-cau-thiet-thuc',
      },
      {
        icon: 'handshake',
        title: 'Mở rộng đối ngoại',
        body: 'Bình thường hóa với Trung Quốc 1991, Mỹ dỡ cấm vận 1994, gia nhập ASEAN 1995 — phá thế bao vây.',
        detailKey: 'mo-cua',
      },
    ],
    detailKey: 'chinh-sach',
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
    detailKey: 'loi-day',
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
      caption: 'Thu hoạch lúa bằng máy tuốt cơ giới thời kỳ Khoán 10 (Nguồn: thinhvuongvietnam.com).',
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
        title: 'Kiềm lạm phát, ổn định vĩ mô',
        body: 'Trong mọi cuộc khủng hoảng kinh tế, ổn định đồng tiền và kiềm chế lạm phát là nền tảng cốt lõi để giữ lòng dân và duy trì sản xuất.',
        detailKey: 'bh-niem-tin',
      },
      {
        icon: 'compass',
        title: 'Tôn trọng quy luật thị trường',
        body: 'Dũng cảm xóa bỏ cơ chế quản lý hành chính ép giá, để quy luật cung cầu điều tiết và cởi trói quyền tự do kinh doanh của nhân dân.',
        detailKey: 'bh-kien-dinh',
      },
      {
        icon: 'mountain',
        title: 'Xây dựng nền kinh tế tự chủ',
        body: 'Đa dạng hóa đối tác ngoại thương, tránh phụ thuộc vào một thị trường duy nhất để nâng cao khả năng chống chịu trước địa chính trị.',
        detailKey: 'bh-tu-luc',
      },
      {
        icon: 'hand-heart',
        title: 'Dân giàu để nước mạnh',
        body: 'Giải phóng tiềm năng lao động sáng tạo và tài sản nhàn rỗi trong dân là cội nguồn động lực vượt qua mọi sóng gió phát triển.',
        detailKey: 'bh-lay-dan',
      },
    ],
    detailKey: 'bai-hoc',
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
    detailKey: 'ket-luan',
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
