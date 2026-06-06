import type { Detail } from '@/shared/components/feedback';

/**
 * Deep-dive theory content for the Lý thuyết slides. Each key is wired to a
 * trigger in scenes.ts; opening it shows the full version of a card or section.
 *
 * Chủ đề: Vận dụng tư tưởng Hồ Chí Minh trong tiếp tục Đổi mới kinh tế giữa
 * khủng hoảng đầu thập niên 1990. Lưu ý: Đổi mới khởi xướng từ Đại hội VI (1986);
 * 1991 là mốc kiểm nghiệm, củng cố và phát triển đường lối Đổi mới.
 */
export const DETAILS: Record<string, Detail> = {
  // Slide: Mở đầu
  'mo-dau': {
    eyebrow: 'Phần I · Mở đầu',
    title: '1991 — Phép thử của Đổi mới, không phải điểm bắt đầu',
    blocks: [
      {
        type: 'p',
        text: 'Năm 1991 là một dấu mốc quan trọng trong tiến trình Đổi mới của Việt Nam. Đây không phải là năm mở đầu công cuộc Đổi mới, nhưng là thời điểm đường lối Đổi mới phải đối diện một thử thách rất lớn cả trong nước lẫn quốc tế.',
      },
      {
        type: 'p',
        text: 'Ở trong nước, nền kinh tế vẫn đang trong quá trình thoát khỏi những hệ quả kéo dài của cơ chế kế hoạch hóa tập trung, bao cấp. Sản xuất đã có chuyển biến sau Đại hội VI năm 1986, nhưng đời sống nhân dân còn nhiều khó khăn, hàng hóa chưa thật dồi dào, năng lực quản lý kinh tế còn đang chuyển đổi.',
      },
      {
        type: 'p',
        text: 'Ở bên ngoài, hệ thống xã hội chủ nghĩa ở Đông Âu biến động mạnh; Liên Xô rơi vào khủng hoảng nghiêm trọng và tan rã vào cuối năm 1991. Các quan hệ viện trợ, thương mại và hợp tác truyền thống bị đảo lộn, trong khi Việt Nam vẫn chịu tác động của bao vây, cấm vận.',
      },
      {
        type: 'callout',
        text: 'Trong hoàn cảnh đó, Việt Nam không quay lại cơ chế bao cấp cũ, cũng không từ bỏ mục tiêu xã hội chủ nghĩa: đất nước tiếp tục Đổi mới, phát triển kinh tế hàng hóa nhiều thành phần vận hành theo cơ chế thị trường có sự quản lý của Nhà nước, giữ vững độc lập tự chủ và từng bước mở rộng quan hệ đối ngoại.',
      },
    ],
    sources: ['Văn kiện Đại hội VII (1991)', 'tulieuvankien.dangcongsan.vn'],
  },

  // Slide: Bối cảnh
  'boi-canh': {
    eyebrow: 'Phần I · Bối cảnh',
    title: 'Sóng dữ trong nước và quốc tế',
    blocks: [
      {
        type: 'h',
        text: 'Trong nước',
      },
      {
        type: 'p',
        text: 'Trước Đổi mới, nền kinh tế Việt Nam vận hành chủ yếu theo cơ chế kế hoạch hóa tập trung, bao cấp. Cơ chế này từng có vai trò trong điều kiện chiến tranh và khôi phục đất nước, nhưng khi bước vào thời kỳ hòa bình và cần phát triển sản xuất thì bộc lộ nhiều hạn chế.',
      },
      {
        type: 'p',
        text: 'Sản xuất thiếu động lực vì người lao động và đơn vị sản xuất không có nhiều quyền chủ động; lưu thông hàng hóa bị ràng buộc bởi cơ chế phân phối hành chính; giá cả, tiền lương, vật tư đều chịu sự quản lý cứng nhắc. Hệ quả là nền kinh tế kém linh hoạt, năng suất thấp, hàng hóa thiếu thốn.',
      },
      {
        type: 'p',
        text: 'Từ Đại hội VI năm 1986, Đảng xác định ba chương trình kinh tế lớn — lương thực, thực phẩm; hàng tiêu dùng; hàng xuất khẩu — thể hiện tư duy rất thực tế: muốn đổi mới thành công thì trước hết phải giải quyết những vấn đề trực tiếp của đời sống nhân dân và sản xuất xã hội.',
      },
      {
        type: 'h',
        text: 'Quốc tế',
      },
      {
        type: 'p',
        text: 'Đầu thập niên 1990, hệ thống xã hội chủ nghĩa ở Đông Âu sụp đổ, Liên Xô tan rã vào cuối năm 1991. Việt Nam mất một điểm tựa lớn về kinh tế, thương mại, viện trợ; đồng thời vẫn chưa thoát khỏi bao vây, cấm vận, khiến việc tiếp cận vốn, công nghệ, thị trường và đầu tư nước ngoài gặp nhiều trở ngại.',
      },
      {
        type: 'callout',
        text: 'Hai câu hỏi lớn đặt ra: làm thế nào để tiếp tục phát triển khi điểm tựa bên ngoài suy giảm, và làm thế nào để cải thiện đời sống nhân dân khi kinh tế trong nước còn yếu? Câu trả lời là tiếp tục Đổi mới, phát huy nội lực, khơi dậy sức dân và chủ động hội nhập.',
      },
    ],
    sources: ['Văn kiện Đại hội VI (1986)', 'Giáo trình Tư tưởng Hồ Chí Minh'],
  },

  // Slide: Trục thời gian — 8 mốc
  'truc-thoi-gian': {
    eyebrow: 'Phần I · Trục thời gian',
    title: 'Từ khởi xướng Đổi mới đến vượt khủng hoảng (1986 – 1995)',
    blocks: [
      {
        type: 'h',
        text: '1986 — Đại hội VI khởi xướng Đổi mới',
      },
      {
        type: 'p',
        text: 'Đại hội VI của Đảng (12/1986) đánh dấu bước chuyển quan trọng trong tư duy phát triển kinh tế. Đại hội nhìn thẳng vào hạn chế của cơ chế cũ, đề ra đường lối Đổi mới và xác định ba chương trình kinh tế lớn: lương thực, thực phẩm; hàng tiêu dùng; hàng xuất khẩu.',
      },
      {
        type: 'h',
        text: '1988 — Khoán 10 trong nông nghiệp',
      },
      {
        type: 'p',
        text: 'Nghị quyết 10 của Bộ Chính trị về đổi mới quản lý kinh tế nông nghiệp giao quyền chủ động sản xuất nhiều hơn cho hộ nông dân. Sức sản xuất trong nông nghiệp được giải phóng, người dân có động lực hơn, góp phần cải thiện tình hình lương thực và ổn định xã hội.',
      },
      {
        type: 'h',
        text: '1989 — Biến động ở Đông Âu',
      },
      {
        type: 'p',
        text: 'Nhiều nước xã hội chủ nghĩa ở Đông Âu rơi vào khủng hoảng và biến động chính trị. Các quan hệ kinh tế, thương mại và viện trợ truyền thống của Việt Nam bị ảnh hưởng — tín hiệu cho thấy đất nước phải chủ động hơn, tự lực hơn.',
      },
      {
        type: 'h',
        text: '6/1991 — Đại hội VII của Đảng',
      },
      {
        type: 'p',
        text: 'Đại hội VII họp tại Hà Nội từ 24 – 27/6/1991, khẳng định tiếp tục đường lối Đổi mới, thông qua Cương lĩnh xây dựng đất nước trong thời kỳ quá độ lên chủ nghĩa xã hội và Chiến lược ổn định, phát triển kinh tế – xã hội đến năm 2000.',
      },
      {
        type: 'h',
        text: '23/10/1991 — Hiệp định Paris về Campuchia',
      },
      {
        type: 'p',
        text: 'Hiệp định Paris về Campuchia góp phần giải quyết vấn đề Campuchia, tạo điều kiện thuận lợi hơn để Việt Nam phá thế bao vây ngoại giao, cải thiện quan hệ đối ngoại và mở rộng hợp tác quốc tế.',
      },
      {
        type: 'h',
        text: '11/1991 — Bình thường hóa quan hệ Việt Nam – Trung Quốc',
      },
      {
        type: 'p',
        text: 'Việt Nam và Trung Quốc bình thường hóa quan hệ sau thời kỳ căng thẳng — một bước quan trọng cho thấy Việt Nam chuyển mạnh sang tư duy đa phương hóa, đa dạng hóa quan hệ quốc tế, vừa giữ độc lập tự chủ vừa mở rộng hợp tác.',
      },
      {
        type: 'h',
        text: '12/1991 — Liên Xô tan rã',
      },
      {
        type: 'p',
        text: 'Cuối năm 1991, Liên Xô tan rã — một cú sốc lớn làm các quan hệ viện trợ, hợp tác và thương mại truyền thống thay đổi sâu sắc. Việt Nam càng phải dựa vào nội lực, phát huy sức dân, ổn định sản xuất và tìm kiếm quan hệ kinh tế mới.',
      },
      {
        type: 'h',
        text: '1991 – 1995 — Kiên trì Đổi mới và phục hồi tăng trưởng',
      },
      {
        type: 'p',
        text: 'Trong kế hoạch 5 năm 1991 – 1995, Việt Nam vừa vượt qua cú sốc quốc tế, vừa tiếp tục chuyển đổi mô hình kinh tế: ổn định vĩ mô, kiềm chế lạm phát, phát triển sản xuất, mở rộng xuất khẩu và cải thiện quan hệ đối ngoại (GDP bình quân khoảng 8,2%/năm).',
      },
      {
        type: 'callout',
        text: 'Giai đoạn 1991 – 1995 là bản lề: Việt Nam vừa phải vượt qua cú sốc mất điểm tựa kinh tế truyền thống, vừa chứng minh đường lối Đổi mới không chỉ là giải pháp tình thế mà là hướng đi đưa đất nước ra khỏi khủng hoảng kéo dài.',
      },
    ],
    sources: ['tulieuvankien.dangcongsan.vn', 'Văn kiện Đại hội VII'],
  },

  // Slide: Vận dụng tư tưởng — overview
  'van-dung': {
    eyebrow: 'Phần II · Vận dụng tư tưởng',
    title: 'La bàn từ Hồ Chí Minh trong Đổi mới kinh tế',
    blocks: [
      {
        type: 'p',
        text: 'Tư tưởng Hồ Chí Minh trong câu chuyện Đổi mới kinh tế không nên hiểu là một chính sách kinh tế cụ thể. Hồ Chí Minh không trực tiếp đề ra chính sách Đổi mới năm 1986 hay các chính sách kinh tế đầu thập niên 1990. Tư tưởng của Người được vận dụng như một hệ giá trị và phương pháp luận để xác định mục tiêu, nguyên tắc và cách hành động.',
      },
      {
        type: 'h',
        text: 'Bốn luận điểm dẫn đường',
      },
      {
        type: 'p',
        text: 'Lấy dân làm gốc: mọi chính sách kinh tế phải hướng đến cải thiện đời sống nhân dân — lương thực, việc làm, thu nhập, hàng tiêu dùng và quyền tham gia sản xuất kinh doanh.',
      },
      {
        type: 'p',
        text: 'Tự lực, tự cường: khi điểm tựa kinh tế truyền thống (Liên Xô, Đông Âu) đảo lộn, đất nước phải dựa vào sức mình — sức dân, đất đai, lao động, doanh nghiệp trong nước và năng lực quản lý của Nhà nước.',
      },
      {
        type: 'p',
        text: 'Sáng tạo, không giáo điều: giữ mục tiêu xã hội chủ nghĩa nhưng không đồng nhất nó với cơ chế bao cấp; đổi mới phương thức tổ chức nền kinh tế, thừa nhận quy luật khách quan của thị trường.',
      },
      {
        type: 'p',
        text: 'Độc lập tự chủ, mở cửa hợp tác: kết hợp sức mạnh dân tộc với sức mạnh thời đại — mở rộng quan hệ kinh tế đối ngoại trên nền tảng giữ vững độc lập, lợi ích quốc gia.',
      },
      {
        type: 'callout',
        text: 'Bốn luận điểm không rời rạc mà là một hệ thống: lấy dân làm gốc → phát huy nội lực → đổi mới sáng tạo → mở cửa trong thế độc lập, tự chủ.',
      },
    ],
    sources: ['Giáo trình Tư tưởng Hồ Chí Minh', 'Văn kiện Đại hội VII'],
  },

  // Vận dụng tư tưởng · 01
  'dan-lam-goc': {
    eyebrow: 'Vận dụng tư tưởng · 01',
    title: 'Lấy dân làm gốc',
    blocks: [
      {
        type: 'p',
        text: 'Trong tư tưởng Hồ Chí Minh, nhân dân là chủ thể của cách mạng, là nguồn sức mạnh quyết định. Người luôn nhấn mạnh vai trò của nhân dân: tin vào dân, dựa vào dân và vì dân.',
      },
      {
        type: 'p',
        text: 'Vận dụng vào Đổi mới kinh tế, "lấy dân làm gốc" nghĩa là mọi chính sách phải hướng đến cải thiện đời sống nhân dân: làm cho người dân có đủ lương thực, có việc làm, có thu nhập, có hàng tiêu dùng và có điều kiện tham gia sản xuất, kinh doanh.',
      },
      {
        type: 'p',
        text: 'Điều này thể hiện rõ trong Khoán 10, phát triển kinh tế hộ gia đình, thừa nhận kinh tế tư nhân, mở rộng quyền chủ động sản xuất, kinh doanh. Khi người dân có động lực sản xuất, nền kinh tế có thêm sức sống.',
      },
      {
        type: 'callout',
        text: 'Đổi mới thành công không phải vì chỉ thay đổi văn bản chính sách, mà vì chính sách đó khơi dậy được sức dân.',
      },
    ],
    sources: ['Hồ Chí Minh toàn tập', 'Giáo trình Tư tưởng Hồ Chí Minh'],
  },

  // Vận dụng tư tưởng · 02
  'tu-luc': {
    eyebrow: 'Vận dụng tư tưởng · 02',
    title: 'Tự lực, tự cường',
    blocks: [
      {
        type: 'p',
        text: 'Tự lực, tự cường là một nội dung quan trọng trong tư tưởng Hồ Chí Minh: một dân tộc muốn độc lập thật sự thì không thể chỉ trông chờ vào sự giúp đỡ từ bên ngoài. Sự giúp đỡ quốc tế là cần thiết, nhưng nội lực bên trong mới là yếu tố quyết định.',
      },
      {
        type: 'p',
        text: 'Đầu thập niên 1990, khi Liên Xô và Đông Âu khủng hoảng, Việt Nam không còn dựa được vào hệ thống viện trợ và hợp tác truyền thống. Điều này buộc đất nước phải tự đứng vững hơn, tập trung phát huy lao động, đất đai, nông nghiệp, doanh nghiệp, hộ gia đình, thị trường nội địa và năng lực điều hành của Nhà nước.',
      },
      {
        type: 'callout',
        text: 'Tự lực, tự cường không có nghĩa là đóng cửa hay tự cô lập. Ngược lại, tự lực là để có năng lực hội nhập trong thế chủ động, không bị phụ thuộc hoàn toàn vào bên ngoài.',
      },
    ],
    sources: ['Hồ Chí Minh toàn tập', 'Giáo trình Tư tưởng Hồ Chí Minh'],
  },

  // Vận dụng tư tưởng · 03
  'kien-dinh': {
    eyebrow: 'Vận dụng tư tưởng · 03',
    title: 'Sáng tạo, không giáo điều',
    blocks: [
      {
        type: 'p',
        text: 'Một bài học lớn của Đổi mới là không được giáo điều, máy móc. Trước đó, có lúc người ta đồng nhất chủ nghĩa xã hội với cơ chế kế hoạch hóa tập trung, bao cấp; nhưng thực tiễn cho thấy cơ chế đó không còn phù hợp với yêu cầu phát triển sản xuất và cải thiện đời sống nhân dân.',
      },
      {
        type: 'p',
        text: 'Tinh thần sáng tạo thể hiện ở chỗ: Việt Nam vẫn kiên định mục tiêu xã hội chủ nghĩa, nhưng đổi mới phương thức quản lý kinh tế — thừa nhận nền kinh tế hàng hóa nhiều thành phần, sử dụng cơ chế thị trường có sự quản lý của Nhà nước, khuyến khích các chủ thể kinh tế cùng phát triển.',
      },
      {
        type: 'callout',
        text: 'Đổi mới không phải là từ bỏ mục tiêu, mà là đổi mới con đường và cách làm để đạt mục tiêu phù hợp hơn với thực tiễn.',
      },
    ],
    sources: ['Văn kiện Đại hội VII (1991)', 'Giáo trình Tư tưởng Hồ Chí Minh'],
  },

  // Vận dụng tư tưởng · 04
  'doc-lap-hop-tac': {
    eyebrow: 'Vận dụng tư tưởng · 04',
    title: 'Độc lập tự chủ gắn với mở cửa hợp tác',
    blocks: [
      {
        type: 'p',
        text: 'Hồ Chí Minh luôn nhấn mạnh độc lập, tự chủ, đồng thời coi trọng đoàn kết và hợp tác quốc tế. Trong tư tưởng của Người, cách mạng Việt Nam là một bộ phận của cách mạng thế giới; sức mạnh dân tộc cần được kết hợp với sức mạnh thời đại.',
      },
      {
        type: 'p',
        text: 'Vận dụng vào giai đoạn 1991 – 1995, Việt Nam từng bước mở rộng quan hệ đối ngoại, phá thế bao vây, bình thường hóa quan hệ với các nước, mở rộng hợp tác khu vực và quốc tế.',
      },
      {
        type: 'callout',
        text: 'Mở cửa không có nghĩa là lệ thuộc. Mở cửa phải dựa trên nền tảng độc lập tự chủ, bảo vệ lợi ích quốc gia, giữ quyền tự quyết và lựa chọn con đường phát triển phù hợp với điều kiện Việt Nam.',
      },
    ],
    sources: ['Văn kiện Đại hội VII (1991)', 'Hồ Chí Minh toàn tập'],
  },

  // Slide: Chính sách thực thi — overview
  'chinh-sach': {
    eyebrow: 'Phần II · Chính sách thực thi',
    title: 'Bốn hướng chuyển động của Đổi mới kinh tế',
    blocks: [
      {
        type: 'p',
        text: 'Từ đường lối Đổi mới và định hướng của Đại hội VII, Việt Nam tiếp tục cụ thể hóa bằng nhiều chính sách kinh tế quan trọng, có thể khái quát thành bốn hướng chuyển động lớn.',
      },
      {
        type: 'h',
        text: '01 · Phát triển kinh tế hàng hóa nhiều thành phần',
      },
      {
        type: 'p',
        text: 'Nền kinh tế không chỉ có kinh tế nhà nước và kinh tế tập thể, mà còn có kinh tế cá thể, kinh tế tư nhân và khu vực có vốn đầu tư nước ngoài. Khi nhiều chủ thể được tham gia, xã hội có thêm vốn, lao động, sáng kiến và động lực phát triển.',
      },
      {
        type: 'h',
        text: '02 · Vận hành theo cơ chế thị trường có sự quản lý của Nhà nước',
      },
      {
        type: 'p',
        text: 'Việt Nam dùng cơ chế thị trường để kích thích sản xuất và phân bổ nguồn lực, nhưng không để thị trường tự phát: Nhà nước quản lý, định hướng và điều tiết vĩ mô bằng pháp luật, kế hoạch, chính sách tài chính, tiền tệ.',
      },
      {
        type: 'h',
        text: '03 · Tiếp tục các chương trình kinh tế thiết thực',
      },
      {
        type: 'p',
        text: 'Ba chương trình từ Đại hội VI tiếp tục có ý nghĩa: lương thực, thực phẩm ổn định đời sống; hàng tiêu dùng giảm thiếu hàng; hàng xuất khẩu tạo nguồn ngoại tệ và tăng năng lực hội nhập.',
      },
      {
        type: 'h',
        text: '04 · Mở rộng quan hệ kinh tế đối ngoại',
      },
      {
        type: 'p',
        text: '· 23/10/1991 — Hiệp định Paris về Campuchia góp phần tháo gỡ thế bao vây ngoại giao.',
      },
      {
        type: 'p',
        text: '· 11/1991 — Việt Nam và Trung Quốc bình thường hóa quan hệ.',
      },
      {
        type: 'p',
        text: '· 03/02/1994 — Hoa Kỳ tuyên bố dỡ bỏ cấm vận thương mại đối với Việt Nam.',
      },
      {
        type: 'p',
        text: '· 12/07/1995 — Việt Nam và Hoa Kỳ thiết lập quan hệ ngoại giao.',
      },
      {
        type: 'p',
        text: '· 28/07/1995 — Việt Nam gia nhập ASEAN.',
      },
      {
        type: 'callout',
        text: 'Các nhóm chính sách này không tách rời nhau: có nhiều thành phần kinh tế thì có thêm chủ thể sản xuất; có cơ chế thị trường thì có động lực; có quản lý của Nhà nước thì giữ được định hướng; có mở cửa đối ngoại thì mở rộng nguồn lực phát triển.',
      },
    ],
    sources: ['Văn kiện Đại hội VII', 'tulieuvankien.dangcongsan.vn'],
  },

  // Chính sách · 01
  'kinh-te-nhieu-thanh-phan': {
    eyebrow: 'Chính sách · 01',
    title: 'Phát triển kinh tế hàng hóa nhiều thành phần',
    blocks: [
      {
        type: 'p',
        text: 'Một thay đổi rất quan trọng của Đổi mới là thừa nhận sự tồn tại khách quan của nhiều thành phần kinh tế. Nền kinh tế không chỉ có kinh tế nhà nước và kinh tế tập thể, mà còn có kinh tế cá thể, kinh tế tư nhân và khu vực có vốn đầu tư nước ngoài.',
      },
      {
        type: 'p',
        text: 'Chính sách này có ý nghĩa giải phóng sức sản xuất. Khi nhiều chủ thể kinh tế được tham gia, xã hội có thêm nguồn lực, thêm vốn, thêm lao động, thêm sáng kiến và thêm động lực phát triển.',
      },
      {
        type: 'p',
        text: 'Trong thực tế, kinh tế hộ gia đình, kinh tế cá thể và kinh tế tư nhân đã góp phần quan trọng vào việc tạo việc làm, tăng hàng hóa, mở rộng dịch vụ và cải thiện đời sống nhân dân.',
      },
      {
        type: 'callout',
        text: 'Thừa nhận kinh tế nhiều thành phần là bước đột phá tư duy: biến mọi nguồn lực trong xã hội thành động lực sản xuất.',
      },
    ],
    sources: ['Văn kiện Đại hội VII (1991)', 'Luật Doanh nghiệp tư nhân, Luật Công ty (1990)'],
  },

  // Chính sách · 02
  'co-che-thi-truong': {
    eyebrow: 'Chính sách · 02',
    title: 'Cơ chế thị trường có sự quản lý của Nhà nước',
    blocks: [
      {
        type: 'p',
        text: 'Đổi mới không phủ nhận vai trò của thị trường. Việt Nam từng bước sử dụng cơ chế thị trường để kích thích sản xuất, lưu thông hàng hóa và phân bổ nguồn lực hiệu quả hơn.',
      },
      {
        type: 'p',
        text: 'Tuy nhiên, Việt Nam không để thị trường vận hành hoàn toàn tự phát. Nhà nước giữ vai trò quản lý, định hướng và điều tiết vĩ mô thông qua pháp luật, kế hoạch, chính sách tài chính, tiền tệ và các công cụ quản lý khác.',
      },
      {
        type: 'callout',
        text: 'Đây là điểm đặc trưng của mô hình Đổi mới: dùng động lực thị trường để phát triển sản xuất, nhưng vẫn giữ vai trò quản lý của Nhà nước và định hướng xã hội chủ nghĩa.',
      },
    ],
    sources: ['Văn kiện Đại hội VII (1991)', 'tulieuvankien.dangcongsan.vn'],
  },

  // Chính sách · 03
  'nhu-cau-thiet-thuc': {
    eyebrow: 'Chính sách · 03',
    title: 'Ba chương trình kinh tế thiết thực',
    blocks: [
      {
        type: 'p',
        text: 'Ba chương trình kinh tế lớn từ Đại hội VI — lương thực, thực phẩm; hàng tiêu dùng; hàng xuất khẩu — vẫn tiếp tục có ý nghĩa trong giai đoạn đầu thập niên 1990.',
      },
      {
        type: 'p',
        text: 'Lương thực, thực phẩm giúp ổn định đời sống nhân dân, bảo đảm an ninh lương thực; hàng tiêu dùng giảm tình trạng thiếu hàng, cải thiện đời sống sinh hoạt; hàng xuất khẩu tạo nguồn ngoại tệ, mở rộng thị trường và tăng năng lực hội nhập.',
      },
      {
        type: 'callout',
        text: 'Đổi mới bắt đầu từ nhu cầu rất cụ thể của đời sống, chứ không phải từ khẩu hiệu chung chung. Khi dân có đủ lương thực, thêm hàng hóa, việc làm và thu nhập, niềm tin xã hội được củng cố.',
      },
    ],
    sources: ['Văn kiện Đại hội VI (1986)', 'Báo Nhân Dân'],
  },

  // Chính sách · 04
  'mo-cua': {
    eyebrow: 'Chính sách · 04',
    title: 'Mở rộng quan hệ kinh tế đối ngoại',
    blocks: [
      {
        type: 'p',
        text: 'Trong bối cảnh bị bao vây, cấm vận và mất dần quan hệ kinh tế truyền thống, mở rộng quan hệ đối ngoại là yêu cầu sống còn. Việt Nam chuyển mạnh sang tư duy đa phương hóa, đa dạng hóa quan hệ quốc tế, vừa giữ độc lập tự chủ vừa mở rộng hợp tác.',
      },
      {
        type: 'p',
        text: '· 23/10/1991 — Hiệp định Paris về Campuchia góp phần tháo gỡ thế bao vây ngoại giao.',
      },
      {
        type: 'p',
        text: '· 11/1991 — Việt Nam và Trung Quốc bình thường hóa quan hệ.',
      },
      {
        type: 'p',
        text: '· 03/02/1994 — Hoa Kỳ dỡ bỏ cấm vận thương mại đối với Việt Nam.',
      },
      {
        type: 'p',
        text: '· 12/07/1995 — Việt Nam và Hoa Kỳ thiết lập quan hệ ngoại giao.',
      },
      {
        type: 'p',
        text: '· 28/07/1995 — Việt Nam gia nhập ASEAN.',
      },
      {
        type: 'callout',
        text: 'Những mốc này cho thấy Việt Nam từng bước thoát khỏi thế bị cô lập, mở rộng hợp tác khu vực và quốc tế, tạo điều kiện thuận lợi hơn cho phát triển kinh tế.',
      },
    ],
    sources: ['Bộ Ngoại giao Việt Nam', 'Báo Nhân Dân'],
  },

  // Slide: Lời dạy
  'loi-day': {
    eyebrow: 'Phần II · Lời dạy',
    title: '"Dễ trăm lần không dân cũng chịu, khó vạn lần dân liệu cũng xong"',
    blocks: [
      {
        type: 'p',
        text: 'Câu nói thường được dẫn trong các tài liệu về tư tưởng Hồ Chí Minh khi nói về vai trò của nhân dân. Nó cô đọng tinh thần "lấy dân làm gốc": không có sự đồng thuận, tham gia và sáng tạo của nhân dân thì chính sách dù đúng cũng khó đi vào cuộc sống; ngược lại, khi nhân dân được tin tưởng, được trao quyền và được hưởng lợi, những khó khăn lớn cũng có thể vượt qua.',
      },
      {
        type: 'h',
        text: 'Ý nghĩa trong Đổi mới kinh tế',
      },
      {
        type: 'p',
        text: 'Trong giai đoạn khủng hoảng đầu thập niên 1990, câu hỏi đặt ra là: Việt Nam lấy nguồn lực ở đâu để vượt khó khi viện trợ và quan hệ kinh tế truyền thống suy giảm? Câu trả lời nằm ở việc phát huy sức dân — trao thêm quyền chủ động sản xuất cho hộ nông dân, công nhận vai trò của kinh tế tư nhân, khuyến khích người dân và doanh nghiệp tham gia sản xuất, kinh doanh, lấy cải thiện đời sống nhân dân làm thước đo hiệu quả chính sách.',
      },
      {
        type: 'h',
        text: 'Một số chính sách thể hiện tinh thần phát huy sức dân',
      },
      {
        type: 'p',
        text: '· 1988 — Khoán 10 trong nông nghiệp: trao thêm quyền chủ động sản xuất cho hộ nông dân.',
      },
      {
        type: 'p',
        text: '· 1990 – 1991 — Luật Doanh nghiệp tư nhân: hợp pháp hóa và tạo cơ sở pháp lý cho khu vực kinh tế tư nhân.',
      },
      {
        type: 'p',
        text: '· 1993 — Luật Đất đai: ghi nhận quyền sử dụng đất ổn định, lâu dài trong khuôn khổ pháp luật.',
      },
      {
        type: 'p',
        text: '· 1994 — Luật Khuyến khích đầu tư trong nước: khuyến khích nguồn lực đầu tư từ trong nước.',
      },
      {
        type: 'callout',
        text: 'Lấy dân làm gốc trong kinh tế không chỉ là khẩu hiệu. Nó phải được thể hiện thành cơ chế: lấy đời sống nhân dân làm mục tiêu, lấy sức dân làm động lực, lấy lợi ích chính đáng của nhân dân làm thước đo chính sách.',
      },
    ],
    sources: ['Hồ Chí Minh toàn tập', 'Giáo trình Tư tưởng Hồ Chí Minh'],
  },

  // Slide: Kết quả
  'ket-qua': {
    eyebrow: 'Phần III · Kết quả',
    title: 'Sau cơn bão, mùa vàng 1991 – 1995',
    blocks: [
      {
        type: 'p',
        text: 'Sau Đại hội VII, Việt Nam tiếp tục kiên trì đường lối Đổi mới. Giai đoạn 1991 – 1995 cho thấy nhiều chuyển biến tích cực của nền kinh tế.',
      },
      {
        type: 'p',
        text: 'Theo đánh giá tại Đại hội VIII, trong 5 năm 1991 – 1995: GDP tăng bình quân khoảng 8,2%/năm, sản xuất công nghiệp khoảng 13,3%/năm, sản xuất nông nghiệp khoảng 4,5%/năm, kim ngạch xuất khẩu khoảng 20%/năm.',
      },
      {
        type: 'p',
        text: 'Cần hiểu đúng rằng Việt Nam không vượt qua toàn bộ khó khăn ngay trong năm 1991. Quá trình phục hồi diễn ra trong cả giai đoạn đầu thập niên 1990, đặc biệt là kế hoạch 5 năm 1991 – 1995.',
      },
      {
        type: 'h',
        text: 'Ý nghĩa của kết quả',
      },
      {
        type: 'p',
        text: '(1) Giữ được ổn định chính trị – xã hội giữa biến động quốc tế lớn; (2) nền kinh tế từng bước thoát khỏi khủng hoảng kéo dài; (3) sản xuất nông nghiệp, công nghiệp và xuất khẩu đều có bước phát triển; (4) đời sống nhân dân từng bước được cải thiện; (5) quan hệ đối ngoại được mở rộng, tạo tiền đề cho hội nhập sau năm 1995; (6) đường lối kinh tế hàng hóa nhiều thành phần có quản lý của Nhà nước tiếp tục được khẳng định.',
      },
      {
        type: 'callout',
        text: 'Giai đoạn 1991 – 1995 chứng minh Việt Nam có thể đứng vững dù mất nhiều điểm tựa bên ngoài, miễn là biết phát huy nội lực, đổi mới tư duy và dựa vào nhân dân.',
      },
    ],
    sources: ['Văn kiện Đại hội VIII (1996)', 'Tổng cục Thống kê'],
  },

  // Slide: Bài học — overview
  'bai-hoc': {
    eyebrow: 'Phần III · Bài học',
    title: 'Hành trang còn mãi — năm bài học từ Vượt Bão 1991',
    blocks: [
      {
        type: 'p',
        text: 'Câu chuyện "Vượt Bão 1991" không chỉ là một lát cắt lịch sử. Nó để lại nhiều bài học có giá trị cho quá trình phát triển đất nước trong các giai đoạn sau.',
      },
      {
        type: 'h',
        text: '01 · Đổi mới phải xuất phát từ thực tiễn',
      },
      {
        type: 'p',
        text: 'Khi mô hình cũ không còn phù hợp, cần dũng cảm điều chỉnh tư duy và phương thức quản lý. Đổi mới không phải là thay đổi tùy tiện, mà là điều chỉnh có cơ sở trước yêu cầu thực tiễn — biểu hiện của tinh thần sáng tạo, chống giáo điều.',
      },
      {
        type: 'h',
        text: '02 · Đời sống nhân dân là trung tâm',
      },
      {
        type: 'p',
        text: 'Tăng trưởng kinh tế chỉ có ý nghĩa bền vững khi gắn với đời sống nhân dân. GDP, xuất khẩu, sản lượng công nghiệp hay đầu tư chỉ thật sự có giá trị khi cuối cùng góp phần tạo việc làm, tăng thu nhập và nâng cao đời sống con người.',
      },
      {
        type: 'h',
        text: '03 · Phát huy nội lực là điều kiện để đứng vững',
      },
      {
        type: 'p',
        text: 'Khi môi trường quốc tế thuận lợi, một quốc gia có thể nhận hỗ trợ từ bên ngoài; nhưng khi quốc tế biến động, nội lực mới là yếu tố quyết định. Nội lực gồm con người, lao động, sản xuất trong nước, doanh nghiệp, tài nguyên, thị trường nội địa, thể chế và năng lực quản lý của Nhà nước.',
      },
      {
        type: 'h',
        text: '04 · Mở cửa phải đi cùng độc lập tự chủ',
      },
      {
        type: 'p',
        text: 'Đóng cửa thì thiếu vốn, công nghệ, thị trường; nhưng mở cửa mà không giữ độc lập tự chủ thì dễ rơi vào phụ thuộc. Bài học đúng là mở cửa trong thế chủ động: hợp tác nhưng không lệ thuộc, tiếp thu nguồn lực bên ngoài nhưng vẫn phát huy nội lực bên trong.',
      },
      {
        type: 'h',
        text: '05 · Kiên định mục tiêu, linh hoạt cách làm',
      },
      {
        type: 'p',
        text: 'Việt Nam không từ bỏ mục tiêu xã hội chủ nghĩa, nhưng đổi mới cách đi đến mục tiêu đó. Mục tiêu chiến lược cần kiên định, nhưng phương thức thực hiện phải linh hoạt, sáng tạo và phù hợp với điều kiện lịch sử cụ thể.',
      },
      {
        type: 'callout',
        text: 'Bốn câu hỏi để soi chiếu một chính sách kinh tế: có xuất phát từ thực tiễn không? có vì dân không? có phát huy nội lực không? có giữ được độc lập tự chủ trong hội nhập không?',
      },
    ],
    sources: ['Văn kiện Đại hội VIII', 'Giáo trình Tư tưởng Hồ Chí Minh'],
  },

  // Bài học · 01
  'bh-thuc-tien': {
    eyebrow: 'Bài học · 01',
    title: 'Đổi mới phải xuất phát từ thực tiễn',
    blocks: [
      {
        type: 'p',
        text: 'Một chính sách muốn đúng phải xuất phát từ thực tế đời sống. Khi mô hình cũ không còn phù hợp, cần dũng cảm điều chỉnh tư duy và phương thức quản lý.',
      },
      {
        type: 'p',
        text: 'Đổi mới không phải là thay đổi tùy tiện, mà là sự điều chỉnh có cơ sở trước yêu cầu thực tiễn. Đây cũng là biểu hiện của tinh thần sáng tạo, chống giáo điều trong vận dụng tư tưởng Hồ Chí Minh.',
      },
    ],
  },

  // Bài học · 02
  'bh-doi-song': {
    eyebrow: 'Bài học · 02',
    title: 'Đời sống nhân dân là trung tâm',
    blocks: [
      {
        type: 'p',
        text: 'Tăng trưởng kinh tế chỉ có ý nghĩa bền vững khi gắn với đời sống nhân dân. Các chỉ số như GDP, xuất khẩu, sản lượng công nghiệp hay đầu tư chỉ thật sự có giá trị khi cuối cùng góp phần tạo việc làm, tăng thu nhập và nâng cao đời sống con người.',
      },
      {
        type: 'p',
        text: 'Bài học này gắn trực tiếp với tư tưởng Hồ Chí Minh về "lấy dân làm gốc": chính sách kinh tế phải vì dân, do dân tham gia và hướng tới lợi ích chính đáng của nhân dân.',
      },
    ],
  },

  // Bài học · 03
  'bh-noi-luc': {
    eyebrow: 'Bài học · 03',
    title: 'Phát huy nội lực là điều kiện để đứng vững',
    blocks: [
      {
        type: 'p',
        text: 'Khi môi trường quốc tế thuận lợi, một quốc gia có thể nhận được sự hỗ trợ từ bên ngoài. Nhưng khi môi trường quốc tế biến động, nội lực mới là yếu tố quyết định khả năng đứng vững.',
      },
      {
        type: 'p',
        text: 'Nội lực bao gồm con người, lao động, sản xuất trong nước, doanh nghiệp, tài nguyên, thị trường nội địa, thể chế và năng lực quản lý của Nhà nước. Bài học từ năm 1991: khi điểm tựa bên ngoài suy giảm, sức dân và năng lực tự chủ bên trong trở thành yếu tố quyết định.',
      },
    ],
  },

  // Bài học · 04
  'bh-mo-cua': {
    eyebrow: 'Bài học · 04',
    title: 'Mở cửa phải đi cùng độc lập tự chủ',
    blocks: [
      {
        type: 'p',
        text: 'Hội nhập quốc tế là cần thiết, nhưng hội nhập phải dựa trên lợi ích quốc gia và khả năng tự chủ của nền kinh tế.',
      },
      {
        type: 'p',
        text: 'Nếu đóng cửa, đất nước sẽ thiếu vốn, công nghệ, thị trường và khó phát triển. Nhưng nếu mở cửa mà không giữ được độc lập tự chủ, nền kinh tế dễ rơi vào phụ thuộc. Bài học đúng là mở cửa trong thế chủ động: hợp tác nhưng không lệ thuộc, tiếp thu nguồn lực bên ngoài nhưng vẫn phát huy nội lực.',
      },
    ],
  },

  // Bài học · 05
  'bh-kien-dinh': {
    eyebrow: 'Bài học · 05',
    title: 'Kiên định mục tiêu, linh hoạt cách làm',
    blocks: [
      {
        type: 'p',
        text: 'Một điểm rất quan trọng của giai đoạn này là Việt Nam không từ bỏ mục tiêu xã hội chủ nghĩa, nhưng đổi mới cách đi đến mục tiêu đó.',
      },
      {
        type: 'p',
        text: 'Đây là bài học có giá trị lâu dài: mục tiêu chiến lược cần kiên định, nhưng phương thức thực hiện phải linh hoạt, sáng tạo và phù hợp với điều kiện lịch sử cụ thể.',
      },
    ],
  },

  // Slide: Kết luận
  'ket-luan': {
    eyebrow: 'Phần III · Kết luận',
    title: 'Kiên định mục tiêu, đổi mới cách đi',
    blocks: [
      {
        type: 'p',
        text: 'Trước sức ép trong nước và biến động quốc tế, Việt Nam không quay lại cơ chế bao cấp cũ, cũng không từ bỏ mục tiêu đã lựa chọn. Đất nước tiếp tục Đổi mới, phát triển kinh tế hàng hóa nhiều thành phần vận hành theo cơ chế thị trường có sự quản lý của Nhà nước, mở rộng quan hệ đối ngoại và phát huy sức dân.',
      },
      {
        type: 'h',
        text: 'Kiên định mục tiêu',
      },
      {
        type: 'p',
        text: 'Mục tiêu xã hội chủ nghĩa — độc lập dân tộc, dân giàu, nước mạnh, xã hội công bằng, dân chủ, văn minh — tiếp tục được khẳng định. Cương lĩnh năm 1991 đặt nền tảng định hướng quan trọng cho thời kỳ quá độ, sau đó được kế thừa và phát triển trong các văn kiện sau này.',
      },
      {
        type: 'h',
        text: 'Đổi mới cách đi',
      },
      {
        type: 'p',
        text: 'Cách đi tới mục tiêu được đổi mới căn bản: từ kế hoạch hóa tập trung, bao cấp sang kinh tế hàng hóa nhiều thành phần; từ mệnh lệnh hành chính sang cơ chế thị trường có quản lý của Nhà nước; từ bị bao vây sang mở cửa, đa phương hóa, đa dạng hóa; từ tư duy cứng nhắc sang tư duy thực tiễn, linh hoạt, sáng tạo.',
      },
      {
        type: 'h',
        text: 'Bài học lớn nhất',
      },
      {
        type: 'p',
        text: 'Muốn vượt qua khó khăn kinh tế, một quốc gia cần: (1) dám đổi mới tư duy quản lý; (2) phát huy sức dân; (3) xây dựng nội lực; (4) mở cửa trong thế chủ động; (5) luôn đặt đời sống nhân dân ở trung tâm. Đó là sự vận dụng tư tưởng Hồ Chí Minh vào thực tiễn Đổi mới: kiên định mục tiêu nhưng linh hoạt, sáng tạo trong phương thức thực hiện.',
      },
      {
        type: 'callout',
        text: '"Vượt Bão 1991" là minh chứng cho khả năng biến khủng hoảng thành động lực phát triển khi đất nước biết kiên định mục tiêu, linh hoạt cách làm và đặt nhân dân ở trung tâm của mọi chính sách.',
      },
    ],
    sources: ['Văn kiện Đại hội VII', 'Cương lĩnh xây dựng đất nước (1991)'],
  },
};
