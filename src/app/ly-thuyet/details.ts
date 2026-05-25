import type { Detail } from '@/shared/components/feedback';

/**
 * Deep-dive theory content for the Lý thuyết slides. Each key is wired to a
 * trigger in page.tsx; opening it shows the full version of a card or section.
 */
export const DETAILS: Record<string, Detail> = {
  // Slide: Mở đầu
  'mo-dau': {
    eyebrow: 'Phần I · Mở đầu',
    title: 'Một mốc quan trọng của Đổi mới kinh tế',
    blocks: [
      {
        type: 'p',
        text: 'Năm 1991 là một mốc quan trọng trong quá trình Đổi mới kinh tế của Việt Nam. Cần hiểu đúng: Đổi mới không bắt đầu từ năm 1991, mà đã được khởi xướng từ Đại hội VI năm 1986. Năm 1991 là thời điểm Việt Nam tiếp tục kiểm nghiệm, củng cố và phát triển đường lối Đổi mới trong bối cảnh trong nước và quốc tế có nhiều biến động lớn.',
      },
      {
        type: 'p',
        text: 'Đại hội VII của Đảng diễn ra tại Hà Nội từ ngày 24 đến 27/6/1991, trong bối cảnh kinh tế xã hội trong nước còn khó khăn, đồng thời hệ thống xã hội chủ nghĩa ở Liên Xô và Đông Âu rơi vào khủng hoảng nghiêm trọng. Công cuộc Đổi mới từ Đại hội VI đã đạt được những thành tựu bước đầu, giúp Việt Nam đứng vững và tiếp tục phát triển.',
      },
      {
        type: 'callout',
        text: 'Trọng tâm: Việt Nam vận dụng tư tưởng Hồ Chí Minh để tiếp tục Đổi mới kinh tế — phát huy nội lực, lấy đời sống nhân dân làm mục tiêu, và từng bước chuyển từ cơ chế bao cấp sang nền kinh tế hàng hóa nhiều thành phần vận hành theo cơ chế thị trường có sự quản lý của Nhà nước.',
      },
    ],
    sources: ['tulieuvankien.dangcongsan.vn'],
  },

  // Slide: Bối cảnh
  'boi-canh': {
    eyebrow: 'Phần I · Bối cảnh',
    title: 'Bối cảnh kinh tế trước và trong năm 1991',
    blocks: [
      {
        type: 'p',
        text: 'Trước Đổi mới, nền kinh tế Việt Nam còn chịu ảnh hưởng nặng của cơ chế kế hoạch hóa tập trung, bao cấp. Cơ chế này từng có vai trò trong một số giai đoạn lịch sử, nhưng về lâu dài đã bộc lộ nhiều hạn chế: sản xuất thiếu động lực, lưu thông hàng hóa khó khăn, đời sống nhân dân thiếu thốn, nền kinh tế vận hành kém linh hoạt.',
      },
      {
        type: 'p',
        text: 'Đại hội VI năm 1986 đã xác định ba chương trình kinh tế lớn: lương thực thực phẩm, hàng tiêu dùng và hàng xuất khẩu. Đây là những chương trình rất thực tế: lương thực, thực phẩm và hàng tiêu dùng gắn trực tiếp với ổn định đời sống nhân dân; xuất khẩu là nguồn lực quan trọng để phục vụ sản xuất và nhập khẩu vật tư cần thiết.',
      },
      {
        type: 'p',
        text: 'Đến năm 1991, Việt Nam tiếp tục gặp áp lực lớn hơn do biến động quốc tế. Liên Xô và Đông Âu khủng hoảng, làm đảo lộn nhiều quan hệ kinh tế, thương mại và viện trợ truyền thống. Trong nước, kinh tế và đời sống nhân dân vẫn còn khó khăn.',
      },
      {
        type: 'callout',
        text: 'Vấn đề đặt ra không chỉ là giải quyết thiếu thốn trước mắt, mà còn là phải tiếp tục đổi mới mô hình quản lý kinh tế cho phù hợp với thực tiễn.',
      },
    ],
    sources: ['daihoidangtoanquoc.vn', 'tulieuvankien.dangcongsan.vn'],
  },

  // Slide: Vận dụng tư tưởng — 4 luận điểm
  'dan-lam-goc': {
    eyebrow: 'Vận dụng tư tưởng · 01',
    title: 'Lấy dân làm gốc — Đổi mới hướng vào đời sống nhân dân',
    blocks: [
      {
        type: 'p',
        text: 'Tư tưởng lấy dân làm gốc là nội dung quan trọng trong tư tưởng Hồ Chí Minh. Quan điểm này nhấn mạnh nhân dân là nền tảng, là chủ thể và là nguồn sức mạnh của cách mạng.',
      },
      {
        type: 'p',
        text: 'Áp dụng vào kinh tế năm 1991: Đổi mới không chỉ nhằm thay đổi cơ chế quản lý, mà trước hết phải cải thiện đời sống nhân dân. Khi đời sống còn khó khăn, hàng hóa thiếu thốn, sản xuất chưa ổn định, chính sách kinh tế phải tập trung vào những nhu cầu thiết thực nhất: lương thực, thực phẩm, hàng tiêu dùng, việc làm, thu nhập và lưu thông hàng hóa.',
      },
      {
        type: 'p',
        text: 'Các chương trình lương thực thực phẩm, hàng tiêu dùng và hàng xuất khẩu là biểu hiện kinh tế cụ thể của tinh thần vì dân. Đổi mới không phải để tạo thay đổi trên giấy tờ, mà để người dân có điều kiện sản xuất, kinh doanh, cải thiện đời sống và tham gia vào quá trình phát triển đất nước.',
      },
      {
        type: 'callout',
        text: 'Lấy dân làm gốc trong kinh tế nghĩa là lấy đời sống nhân dân làm mục tiêu và lấy sức dân làm động lực phát triển.',
      },
    ],
    sources: ['nlv.gov.vn'],
  },

  'tu-luc': {
    eyebrow: 'Vận dụng tư tưởng · 02',
    title: 'Tự lực, tự cường — Phát huy nội lực',
    blocks: [
      {
        type: 'p',
        text: 'Tư tưởng Hồ Chí Minh đề cao tinh thần tự lực, tự cường: không trông chờ, ỷ lại, không phụ thuộc vào bên ngoài, mà phải tự xây dựng sức mạnh của mình.',
      },
      {
        type: 'p',
        text: 'Trong bối cảnh năm 1991, khi Liên Xô và Đông Âu khủng hoảng, Việt Nam không thể tiếp tục dựa nhiều vào hệ thống viện trợ, thương mại và hợp tác truyền thống như trước. Nếu nền kinh tế phụ thuộc quá lớn vào bên ngoài, khi bối cảnh quốc tế thay đổi, đất nước sẽ rơi vào thế bị động.',
      },
      {
        type: 'p',
        text: 'Vận dụng tư tưởng tự lực, Việt Nam phát huy nội lực trong nước: sức lao động của nhân dân, tiềm năng nông nghiệp, sản xuất hàng tiêu dùng, xuất khẩu, doanh nghiệp, hộ gia đình và các thành phần kinh tế. Phát triển kinh tế hàng hóa nhiều thành phần mở đường cho nhiều chủ thể trong xã hội tham gia tạo ra của cải.',
      },
      {
        type: 'callout',
        text: 'Tự lực, tự cường trong kinh tế năm 1991 là phát huy nội lực để nền kinh tế không bị động trước biến động quốc tế.',
      },
    ],
    sources: ['truongchinhtri.quangngai.gov.vn'],
  },

  'kien-dinh': {
    eyebrow: 'Vận dụng tư tưởng · 03',
    title: 'Sáng tạo, không giáo điều — Không giữ máy móc cơ chế bao cấp cũ',
    blocks: [
      {
        type: 'p',
        text: 'Một điểm quan trọng trong tư tưởng Hồ Chí Minh là tinh thần vận dụng sáng tạo lý luận vào điều kiện cụ thể của Việt Nam, không rập khuôn, không giáo điều. Hồ Chí Minh vận dụng chủ nghĩa Mác Lênin vào thực tiễn Việt Nam một cách sáng tạo, phù hợp với hoàn cảnh đất nước.',
      },
      {
        type: 'p',
        text: 'Áp dụng vào kinh tế, tinh thần này thể hiện ở việc Việt Nam không đồng nhất chủ nghĩa xã hội với cơ chế bao cấp. Khi thực tế chứng minh cơ chế bao cấp làm sản xuất thiếu động lực và đời sống khó khăn, việc tiếp tục giữ nguyên cách quản lý cũ không còn phù hợp.',
      },
      {
        type: 'p',
        text: 'Chuyển sang nền kinh tế hàng hóa nhiều thành phần, sử dụng cơ chế thị trường có sự quản lý của Nhà nước là biểu hiện của tư duy sáng tạo, thực tiễn. Việt Nam vẫn giữ mục tiêu phát triển theo định hướng xã hội chủ nghĩa, nhưng thay đổi phương pháp tổ chức nền kinh tế để giải phóng sức sản xuất.',
      },
      {
        type: 'callout',
        text: 'Vận dụng tư tưởng Hồ Chí Minh ở đây là giữ vững mục tiêu, nhưng không bảo thủ trong cách làm.',
      },
    ],
    sources: ['nhandan.vn'],
  },

  'doc-lap-hop-tac': {
    eyebrow: 'Vận dụng tư tưởng · 04',
    title: 'Độc lập tự chủ gắn hợp tác quốc tế — Mở cửa kinh tế không phụ thuộc',
    blocks: [
      {
        type: 'p',
        text: 'Hồ Chí Minh luôn coi trọng việc kết hợp sức mạnh dân tộc với sức mạnh thời đại. Trong phát triển đất nước, điều đó có nghĩa là phải dựa vào nội lực dân tộc, đồng thời tranh thủ điều kiện thuận lợi từ bên ngoài.',
      },
      {
        type: 'p',
        text: 'Áp dụng vào kinh tế đầu thập niên 1990, Việt Nam không thể tự cô lập. Khi các quan hệ kinh tế truyền thống bị đảo lộn, đất nước cần mở rộng quan hệ kinh tế đối ngoại, tìm kiếm thị trường mới, nguồn vốn, công nghệ và phương thức hợp tác mới.',
      },
      {
        type: 'p',
        text: 'Tuy nhiên, mở cửa không có nghĩa là phụ thuộc. Tinh thần đúng là: mở cửa trên nền tảng độc lập tự chủ. Việt Nam hội nhập để phát triển, nhưng vẫn đặt lợi ích dân tộc, ổn định xã hội và quyền tự quyết trong phát triển kinh tế lên hàng đầu.',
      },
      {
        type: 'callout',
        text: 'Tư tưởng Hồ Chí Minh được vận dụng ở chỗ Việt Nam biết kết hợp nội lực với ngoại lực, vừa tự chủ vừa hợp tác.',
      },
    ],
    sources: ['hocvienchinhtribqp.edu.vn'],
  },

  // Slide: Chính sách — 4 nhóm
  'kinh-te-nhieu-thanh-phan': {
    eyebrow: 'Chính sách · 01',
    title: 'Phát triển kinh tế hàng hóa nhiều thành phần',
    blocks: [
      {
        type: 'p',
        text: 'Chính sách này khơi dậy sức dân, phát huy vai trò của nhiều chủ thể kinh tế, tạo thêm động lực cho sản xuất và lưu thông hàng hóa. Thay vì chỉ dựa vào khu vực nhà nước và cơ chế bao cấp, nền kinh tế cho phép nhiều chủ thể tham gia: người dân, hộ gia đình, hợp tác xã, doanh nghiệp tư nhân, doanh nghiệp nhà nước và các hình thức kinh tế khác đều có vai trò trong phát triển đất nước.',
      },
      {
        type: 'p',
        text: 'Đây là bước chuyển quan trọng trong giai đoạn 1991 tới 1995, giúp giải phóng sức sản xuất sau nhiều năm chịu ảnh hưởng của cơ chế bao cấp.',
      },
      {
        type: 'callout',
        text: 'Kinh tế nhiều thành phần giúp biến sức dân thành động lực phát triển.',
      },
    ],
    sources: ['tulieuvankien.dangcongsan.vn'],
  },

  'co-che-thi-truong': {
    eyebrow: 'Chính sách · 02',
    title: 'Cơ chế thị trường có sự quản lý của Nhà nước',
    blocks: [
      {
        type: 'p',
        text: 'Thị trường giúp phản ánh cung cầu, giá cả và nhu cầu xã hội; Nhà nước giữ vai trò định hướng, quản lý và điều tiết bằng pháp luật, kế hoạch, chính sách để bảo đảm ổn định chung.',
      },
      {
        type: 'p',
        text: 'Điểm cốt lõi: Việt Nam không phủ nhận vai trò của thị trường, nhưng cũng không để thị trường vận hành tự phát hoàn toàn. Đây là bước chuyển lớn trong tư duy kinh tế — từ quản lý bằng mệnh lệnh hành chính sang quản lý bằng cơ chế, pháp luật và chính sách.',
      },
      {
        type: 'callout',
        text: 'Thị trường có quản lý là cách Việt Nam giải phóng sức sản xuất mà vẫn giữ định hướng xã hội chủ nghĩa.',
      },
    ],
    sources: ['Tạp chí Cộng sản'],
  },

  'nhu-cau-thiet-thuc': {
    eyebrow: 'Chính sách · 03',
    title: 'Tập trung vào nhu cầu kinh tế thiết thực',
    blocks: [
      {
        type: 'p',
        text: 'Ba chương trình kinh tế lớn từ Đại hội VI tiếp tục được triển khai trong giai đoạn này: lương thực thực phẩm, hàng tiêu dùng và hàng xuất khẩu.',
      },
      {
        type: 'p',
        text: 'Lương thực và hàng tiêu dùng gắn trực tiếp với ổn định đời sống nhân dân. Xuất khẩu là nguồn lực quan trọng để phục vụ sản xuất và nhập khẩu vật tư cần thiết. Đây là hướng đi sát đời sống: muốn ổn định đất nước thì trước hết phải ổn định đời sống nhân dân.',
      },
      {
        type: 'callout',
        text: 'Bám sát nhu cầu thiết thực là biểu hiện kinh tế cụ thể của tinh thần vì dân.',
      },
    ],
    sources: ['daihoidangtoanquoc.vn'],
  },

  'mo-cua': {
    eyebrow: 'Chính sách · 04',
    title: 'Mở rộng quan hệ kinh tế đối ngoại',
    blocks: [
      {
        type: 'p',
        text: 'Khi môi trường quốc tế thay đổi, Việt Nam cần tìm kiếm thêm thị trường, đối tác và nguồn lực mới. Tinh thần Việt Nam muốn là bạn của tất cả các nước trong cộng đồng thế giới tại Đại hội VII thể hiện rõ sự chuyển hướng đối ngoại theo hướng rộng mở, hòa bình và hợp tác.',
      },
      {
        type: 'p',
        text: 'Chính sách này phù hợp với tư tưởng Hồ Chí Minh về kết hợp sức mạnh dân tộc với sức mạnh thời đại. Việt Nam phải tự lực nhưng không tự cô lập; giữ độc lập tự chủ nhưng vẫn tranh thủ nguồn lực, tri thức, thị trường và quan hệ quốc tế.',
      },
      {
        type: 'callout',
        text: 'Mở cửa trên nguyên tắc giữ vững lợi ích dân tộc và quyền tự chủ.',
      },
    ],
    sources: ['tulieuvankien.dangcongsan.vn'],
  },

  // Slide: Kết quả
  'ket-qua': {
    eyebrow: 'Phần I · Kết quả',
    title: 'Kết quả giai đoạn 1991 tới 1995',
    blocks: [
      {
        type: 'p',
        text: 'Sau Đại hội VII, Việt Nam tiếp tục kiên trì đường lối Đổi mới. Báo cáo tại Đại hội VIII đánh giá rằng nền kinh tế hàng hóa nhiều thành phần vận hành theo cơ chế thị trường có sự quản lý của Nhà nước theo định hướng xã hội chủ nghĩa tiếp tục được xây dựng.',
      },
      {
        type: 'p',
        text: 'Trong 5 năm 1991 tới 1995, GDP tăng bình quân 8,2% mỗi năm, công nghiệp tăng 13,3%, nông nghiệp tăng 4,5%, kim ngạch xuất khẩu tăng 20%.',
      },
      {
        type: 'callout',
        text: 'Những số liệu này cho thấy kết quả của quá trình tiếp tục Đổi mới — không nên hiểu là Việt Nam đã vượt qua hoàn toàn khủng hoảng ngay trong năm 1991. Quá trình vượt khó kinh tế diễn ra trong cả giai đoạn đầu thập niên 1990, đặc biệt là kế hoạch 5 năm 1991 tới 1995.',
      },
    ],
    sources: ['tulieuvankien.dangcongsan.vn'],
  },

  // Slide: Bài học — 4 bài học
  'bh-thuc-tien': {
    eyebrow: 'Bài học · 01',
    title: 'Đổi mới kinh tế phải xuất phát từ thực tiễn',
    blocks: [
      {
        type: 'p',
        text: 'Khi mô hình cũ không còn phù hợp, cần mạnh dạn điều chỉnh cách quản lý, không được bảo thủ hoặc máy móc.',
      },
      {
        type: 'p',
        text: 'Tinh thần sáng tạo, không giáo điều của tư tưởng Hồ Chí Minh chính là nền tảng giúp Việt Nam dám đổi mới mô hình kinh tế đúng lúc.',
      },
    ],
  },

  'bh-dan-trung-tam': {
    eyebrow: 'Bài học · 02',
    title: 'Đặt đời sống nhân dân ở trung tâm',
    blocks: [
      {
        type: 'p',
        text: 'Tăng trưởng kinh tế chỉ có ý nghĩa bền vững khi góp phần tạo việc làm, tăng thu nhập, ổn định đời sống và nâng cao chất lượng sống của người dân.',
      },
      {
        type: 'callout',
        text: 'Lấy đời sống nhân dân làm mục tiêu là sợi chỉ xuyên suốt từ tư tưởng Hồ Chí Minh đến chính sách kinh tế hôm nay.',
      },
    ],
  },

  'bh-noi-luc': {
    eyebrow: 'Bài học · 03',
    title: 'Phát huy nội lực',
    blocks: [
      {
        type: 'p',
        text: 'Một nền kinh tế muốn đứng vững trước biến động bên ngoài cần có năng lực sản xuất, nguồn nhân lực, doanh nghiệp và thể chế đủ mạnh.',
      },
      {
        type: 'p',
        text: 'Bài học từ 1991: khi điểm tựa kinh tế truyền thống bị đảo lộn, chính nội lực trong nước — sức dân, đất đai, doanh nghiệp — là cứu cánh.',
      },
    ],
  },

  'bh-mo-cua-tu-chu': {
    eyebrow: 'Bài học · 04',
    title: 'Mở cửa đi cùng tự chủ',
    blocks: [
      {
        type: 'p',
        text: 'Hội nhập quốc tế là cần thiết, nhưng phải dựa trên nền tảng lợi ích quốc gia và khả năng tự chủ của nền kinh tế.',
      },
      {
        type: 'callout',
        text: 'Mở cửa trong thế chủ động — không tự cô lập, cũng không phụ thuộc.',
      },
    ],
  },
};
