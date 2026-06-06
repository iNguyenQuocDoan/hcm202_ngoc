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
      'Năm 1991 không phải là năm mở đầu Đổi mới, mà là lúc đường lối ấy phải đối diện thử thách lớn cả trong nước lẫn quốc tế. Đổi mới được khởi xướng từ [[Đại hội VI]] năm 1986.',
      'Trong nước, kinh tế vẫn đang thoát khỏi hệ quả kéo dài của cơ chế kế hoạch hóa tập trung, bao cấp. Ngoài nước, Đông Âu biến động, Liên Xô khủng hoảng rồi tan rã cuối 1991, cộng thêm [[bao vây, cấm vận]] chưa được gỡ.',
      'Việt Nam không quay lại bao cấp, cũng không từ bỏ mục tiêu xã hội chủ nghĩa. Đất nước chọn tiếp tục Đổi mới: phát huy [[nội lực]], lấy đời sống nhân dân làm mục tiêu, chuyển sang kinh tế hàng hóa nhiều thành phần có quản lý của Nhà nước.',
    ],
    highlights: ['Đại hội VII', 'tháng 6 · 1991', 'tiếp tục Đổi mới'],
    detailKey: 'mo-dau',
    image: {
      key: 'baDinhSquare',
      ratio: 'aspect-[4/5]',
      caption:
        'Hội trường Ba Đình cũ, nơi diễn ra Đại hội VII năm 1991 (Nguồn: Wikimedia Commons).',
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
      'Trước Đổi mới, nền kinh tế còn chịu sức nặng của [[cơ chế kế hoạch hóa tập trung, bao cấp]]: sản xuất thiếu động lực, lưu thông bị ràng buộc bởi phân phối hành chính, hàng hóa thiếu thốn.',
      'Đại hội VI đã mở đường với ba chương trình lớn — lương thực thực phẩm, hàng tiêu dùng, hàng xuất khẩu. Nhưng đến 1991, áp lực dồn dập: Liên Xô và Đông Âu khủng hoảng, đối tác truyền thống đảo lộn, [[bao vây cấm vận]] vẫn chưa gỡ.',
    ],
    bullets: [
      {
        icon: 'shield-alert',
        title: 'Cơ chế bao cấp trì trệ',
        body: 'Kế hoạch hóa tập trung làm sản xuất thiếu động lực, lưu thông hàng hóa khó khăn, năng suất thấp, nền kinh tế kém linh hoạt.',
      },
      {
        icon: 'cloud-lightning',
        title: 'Liên Xô, Đông Âu khủng hoảng',
        body: 'Các quan hệ kinh tế, thương mại và viện trợ truyền thống bị đảo lộn — Việt Nam mất một điểm tựa lớn.',
      },
      {
        icon: 'network',
        title: 'Vẫn chịu bao vây, cấm vận',
        body: 'Việc tiếp cận vốn, công nghệ, thị trường và đầu tư nước ngoài gặp nhiều trở ngại.',
      },
      {
        icon: 'shopping-basket',
        title: 'Đời sống nhân dân còn khó khăn',
        body: 'Hàng hóa còn thiếu, sản xuất chưa ổn định — nhu cầu cải thiện đời sống thúc đẩy tiếp tục Đổi mới.',
      },
    ],
    detailKey: 'boi-canh',
    image: {
      key: 'hanoiVendors1991',
      ratio: 'aspect-[4/5]',
      caption: 'Bán hoa quả và rau từ xe đạp ở phố cổ Hà Nội năm 1991 (Ảnh: Hans-Peter Grumpe).',
    },
    tone: 'storm',
    layout: 'left',
    effects: ['particles', 'rain-streaks', 'card-burst', 'keyword-highlight', 'image-parallax'],
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
      {
        year: '1986',
        title: 'Đại hội VI',
        body: 'Khởi xướng Đổi mới: ba chương trình lương thực, hàng tiêu dùng, xuất khẩu.',
      },
      {
        year: '1988',
        title: 'Khoán 10',
        body: 'Nghị quyết 10 trao quyền chủ động sản xuất cho hộ nông dân.',
      },
      {
        year: '1989',
        title: 'Biến động Đông Âu',
        body: 'Các nước XHCN Đông Âu lâm vào khủng hoảng, viện trợ truyền thống suy giảm.',
      },
      {
        year: '6 · 1991',
        title: 'Đại hội VII',
        body: 'Họp tại Hà Nội 24 – 27/6, thông qua Cương lĩnh và Chiến lược đến 2000.',
      },
      {
        year: '10 · 1991',
        title: 'Hiệp định Paris',
        body: 'Ngày 23/10/1991, Hiệp định Paris về Campuchia tháo gỡ thế bao vây ngoại giao.',
      },
      {
        year: '11 · 1991',
        title: 'Bình thường hóa Việt – Trung',
        body: 'Mở rộng đối ngoại, chuyển mạnh sang đa phương hóa, đa dạng hóa quan hệ.',
      },
      {
        year: '12 · 1991',
        title: 'Liên Xô tan rã',
        body: 'Việt Nam dựa vào nội lực, tìm quan hệ kinh tế mới với khu vực, thế giới.',
      },
      {
        year: '1991 – 95',
        title: 'Kiên trì Đổi mới',
        body: 'GDP bình quân +8,2%/năm, từng bước thoát khủng hoảng kinh tế – xã hội.',
      },
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
        body: 'Việt – Trung bình thường hóa 11/1991, Mỹ dỡ cấm vận 2/1994, gia nhập ASEAN 7/1995 — phá thế bao vây.',
        detailKey: 'mo-cua',
      },
    ],
    detailKey: 'chinh-sach',
    image: {
      key: 'saigonExportPort1991',
      ratio: 'aspect-[4/3]',
      caption:
        'Hoạt động xuất nhập khẩu hàng hoá tại Cảng Sài Gòn năm 1991 (Nguồn: Wikimedia Commons).',
    },
    tone: 'harvest',
    layout: 'right',
    effects: ['floating-icons', 'glow', 'orb-drift', 'image-parallax', 'keyword-highlight'],
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
      caption:
        'Thu hoạch lúa bằng máy tuốt cơ giới thời kỳ Khoán 10 (Nguồn: thinhvuongvietnam.com).',
    },
    tone: 'afterglow',
    layout: 'right',
    effects: ['sun-rays', 'stat-grid', 'glow', 'orb-drift', 'image-parallax', 'keyword-highlight'],
  },

  {
    id: 'bai-hoc',
    chapter: 'Hồi 8',
    eyebrow: 'Bài học',
    index: '07',
    title: 'Hành trang còn mãi',
    paragraphs: [
      'Một câu chuyện về Đổi mới chỉ trọn vẹn khi nó để lại điều dùng được cho hôm nay. Năm bài học rút ra từ tư tưởng Hồ Chí Minh — vẫn nguyên giá trị trước mọi cơn bão mới.',
    ],
    bullets: [
      {
        icon: 'lightbulb',
        title: 'Đổi mới từ thực tiễn',
        body: 'Khi mô hình cũ không còn phù hợp, cần dũng cảm điều chỉnh tư duy và phương thức quản lý — đổi mới có cơ sở, không tùy tiện.',
        detailKey: 'bh-thuc-tien',
      },
      {
        icon: 'hand-heart',
        title: 'Đời sống nhân dân là trung tâm',
        body: 'GDP, xuất khẩu, sản lượng chỉ có giá trị khi cuối cùng tạo việc làm, tăng thu nhập và nâng cao đời sống con người.',
        detailKey: 'bh-doi-song',
      },
      {
        icon: 'mountain',
        title: 'Phát huy nội lực để đứng vững',
        body: 'Khi điểm tựa bên ngoài suy giảm, sức dân và năng lực tự chủ bên trong trở thành yếu tố quyết định.',
        detailKey: 'bh-noi-luc',
      },
      {
        icon: 'globe',
        title: 'Mở cửa cùng độc lập tự chủ',
        body: 'Hội nhập trong thế chủ động: tiếp thu nguồn lực bên ngoài nhưng giữ vững lợi ích quốc gia, không rơi vào phụ thuộc.',
        detailKey: 'bh-mo-cua',
      },
      {
        icon: 'compass',
        title: 'Kiên định mục tiêu, linh hoạt cách làm',
        body: 'Mục tiêu chiến lược cần kiên định, nhưng phương thức thực hiện phải linh hoạt, sáng tạo, hợp với điều kiện lịch sử cụ thể.',
        detailKey: 'bh-kien-dinh',
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
      'Trước sức ép trong nước và biến động quốc tế, Việt Nam không quay lại cơ chế bao cấp cũ, cũng không từ bỏ mục tiêu đã chọn. Đổi mới tiếp tục theo hướng thực tế: [[phát huy sức dân]], nhiều thành phần kinh tế, thị trường có quản lý, mở rộng đối ngoại.',
      'Nhìn từ tư tưởng Hồ Chí Minh, thành công của giai đoạn này gói trong bốn điểm: lấy đời sống nhân dân làm mục tiêu, phát huy nội lực dân tộc, giữ vững độc lập tự chủ và sáng tạo, không giáo điều — kiên định mục tiêu nhưng linh hoạt cách làm.',
    ],
    detailKey: 'ket-luan',
    image: {
      key: 'mausoleum',
      ratio: 'aspect-[4/3]',
      caption: 'Lăng Chủ tịch Hồ Chí Minh, Hà Nội.',
    },
    tone: 'paper',
    layout: 'left',
    effects: ['glow', 'sun-rays', 'orb-drift', 'image-parallax', 'keyword-highlight'],
  },
];
