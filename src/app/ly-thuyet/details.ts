import type { Detail } from '@/shared/components/feedback';

/**
 * Deep-dive theory content for the Lý thuyết slides. Each key is wired to a
 * trigger in page.tsx; opening it shows the full version of a card or section.
 */
export const DETAILS: Record<string, Detail> = {
  // Slide: Mở đầu
  'mo-dau': {
    eyebrow: 'Phần I · Mở đầu',
    title: 'Một thời điểm đặc biệt của lịch sử',
    blocks: [
      {
        type: 'p',
        text: 'Năm 1991 là một thời điểm đặc biệt trong lịch sử Việt Nam hiện đại. Đây không chỉ là một năm có nhiều khó khăn về kinh tế, chính trị và đối ngoại, mà còn là thời điểm Việt Nam phải chứng minh bản lĩnh lựa chọn con đường phát triển của mình trong bối cảnh thế giới biến động mạnh.',
      },
      {
        type: 'p',
        text: 'Đại hội VII của Đảng diễn ra tại Hà Nội từ ngày 24 đến 27/6/1991, trong bối cảnh quốc tế và trong nước có nhiều diễn biến phức tạp, đặc biệt là sự khủng hoảng nghiêm trọng của hệ thống xã hội chủ nghĩa ở Liên Xô và Đông Âu.',
      },
      {
        type: 'p',
        text: 'Chủ đề “Vượt Bão 1991” có thể hiểu là câu chuyện Việt Nam vận dụng tư tưởng Hồ Chí Minh để giữ vững mục tiêu độc lập dân tộc gắn với chủ nghĩa xã hội, đồng thời đổi mới tư duy, đổi mới cách làm, mở cửa nền kinh tế và mở rộng quan hệ quốc tế.',
      },
      {
        type: 'callout',
        text: 'Điểm quan trọng nhất: Việt Nam không vượt qua khó khăn bằng cách đứng yên, mà bằng cách kiên định mục tiêu nhưng linh hoạt trong phương pháp.',
      },
    ],
    sources: ['tulieuvankien.dangcongsan.vn'],
  },

  // Slide: Bối cảnh
  'boi-canh': {
    eyebrow: 'Phần I · Bối cảnh',
    title: 'Việt Nam cuối thập niên 1980, đầu 1990',
    blocks: [
      {
        type: 'p',
        text: 'Sau năm 1975, Việt Nam bước vào thời kỳ xây dựng đất nước trong điều kiện rất khó khăn. Nền kinh tế còn nặng tính bao cấp, sản xuất trì trệ, đời sống nhân dân thiếu thốn, cơ chế quản lý chưa phù hợp với thực tiễn. Đến năm 1986, lạm phát ở Việt Nam được ghi nhận ở mức rất cao, có nguồn thống kê nêu con số 774,7%, cho thấy nền kinh tế khi đó chịu sức ép nghiêm trọng về giá cả và đời sống.',
      },
      {
        type: 'p',
        text: 'Trước tình hình đó, Đại hội VI năm 1986 mở ra đường lối Đổi mới. Nội dung đổi mới không phải là từ bỏ mục tiêu xã hội chủ nghĩa, mà là thay đổi cách quản lý và phát triển đất nước cho phù hợp hơn với thực tiễn: đổi mới cơ chế quản lý kinh tế, chính sách xã hội, giải quyết việc làm, chăm lo giáo dục, văn hóa và sức khỏe nhân dân.',
      },
      {
        type: 'p',
        text: 'Tuy nhiên, đến năm 1991, Việt Nam lại đứng trước một cơn bão mới. Liên Xô và Đông Âu, những đối tác truyền thống quan trọng, rơi vào khủng hoảng và tan rã, làm đảo lộn các quan hệ kinh tế, thương mại và viện trợ trước đó. Cùng thời điểm, Mỹ vẫn tiếp tục cấm vận, khiến đất nước gặp thêm khó khăn trong mở rộng quan hệ kinh tế quốc tế.',
      },
      {
        type: 'callout',
        text: 'Năm 1991 là một điểm thử thách lớn: vừa phải xử lý khó khăn kinh tế trong nước, vừa phải thích ứng với trật tự thế giới đang thay đổi, vừa phải giữ vững ổn định chính trị và niềm tin xã hội.',
      },
    ],
    sources: ['tulieuvankien.dangcongsan.vn', 'Nhân Dân Online'],
  },

  // Slide: Vận dụng tư tưởng — 5 luận điểm
  'dan-lam-goc': {
    eyebrow: 'Vận dụng tư tưởng · 01',
    title: 'Lấy dân làm gốc',
    blocks: [
      {
        type: 'p',
        text: 'Trong tư tưởng Hồ Chí Minh, nhân dân là trung tâm của cách mạng. Sức mạnh của đất nước không chỉ nằm ở bộ máy nhà nước hay chính sách, mà trước hết nằm ở lòng dân, đời sống nhân dân và sự tham gia của nhân dân. Tư tưởng đại đoàn kết Hồ Chí Minh nhấn mạnh rằng dân là nền tảng của đoàn kết, là nguồn sức mạnh quyết định thắng lợi của cách mạng.',
      },
      {
        type: 'p',
        text: 'Vận dụng vào bối cảnh 1991, mọi chính sách đổi mới phải hướng đến giải quyết đời sống nhân dân: có việc làm, có lương thực, ổn định giá cả, khuyến khích sản xuất, phát huy quyền làm chủ và khả năng sáng tạo của người dân. Nếu nhân dân không được đặt ở trung tâm, đổi mới sẽ chỉ là thay đổi trên giấy tờ.',
      },
      {
        type: 'callout',
        text: 'Vượt qua khủng hoảng không chỉ là nhiệm vụ của Nhà nước, mà là quá trình khơi dậy sức dân, dựa vào dân và vì dân.',
      },
    ],
    sources: ['hochiminh.vn'],
  },

  'doan-ket': {
    eyebrow: 'Vận dụng tư tưởng · 02',
    title: 'Đại đoàn kết toàn dân',
    blocks: [
      {
        type: 'p',
        text: 'Hồ Chí Minh coi đoàn kết là sức mạnh nền tảng của dân tộc. Trong bối cảnh 1991, khi một bộ phận cán bộ, đảng viên và nhân dân có thể hoang mang trước biến động ở Liên Xô và Đông Âu, việc giữ vững đoàn kết trong xã hội có ý nghĩa rất quan trọng. Tư liệu về Đại hội VII cũng ghi nhận khủng hoảng ở Liên Xô và Đông Âu đã tác động đến tư tưởng, tình cảm của một bộ phận cán bộ, đảng viên và nhân dân.',
      },
      {
        type: 'p',
        text: 'Vận dụng tư tưởng đại đoàn kết trong giai đoạn này nghĩa là củng cố niềm tin xã hội, tránh chia rẽ, phát huy vai trò của các tầng lớp nhân dân trong sản xuất, xây dựng và bảo vệ đất nước.',
      },
      {
        type: 'callout',
        text: 'Đoàn kết ở đây không phải khẩu hiệu chung chung, mà là điều kiện để giữ ổn định chính trị, ổn định xã hội và tạo môi trường cho đổi mới kinh tế.',
      },
    ],
    sources: ['tulieuvankien.dangcongsan.vn'],
  },

  'tu-luc': {
    eyebrow: 'Vận dụng tư tưởng · 03',
    title: 'Tự lực, tự cường',
    blocks: [
      {
        type: 'p',
        text: 'Tư tưởng Hồ Chí Minh luôn đề cao tinh thần tự lực, tự cường, tự lực cánh sinh. Theo các tài liệu về tư tưởng Hồ Chí Minh, Người coi tự lực, tự cường là tiền đề của độc lập, tự do và là điều kiện quan trọng để phát triển quan hệ đối ngoại.',
      },
      {
        type: 'p',
        text: 'Trong bối cảnh năm 1991, khi nguồn viện trợ và quan hệ kinh tế truyền thống bị đảo lộn, Việt Nam không thể tiếp tục phụ thuộc vào bên ngoài. Muốn tồn tại và phát triển, đất nước phải phát huy nội lực: sản xuất trong nước, đổi mới quản lý kinh tế, khuyến khích các thành phần kinh tế, nâng cao năng lực tự chủ của nền kinh tế.',
      },
      {
        type: 'callout',
        text: 'Tự lực, tự cường không có nghĩa là tự cô lập. Tự lực là có nội lực; tự cường là làm cho đất nước mạnh lên; mở cửa là để kết hợp sức mạnh bên trong với nguồn lực bên ngoài.',
      },
    ],
    sources: ['hochiminh.vn'],
  },

  'kien-dinh': {
    eyebrow: 'Vận dụng tư tưởng · 04',
    title: 'Kiên định mục tiêu, linh hoạt phương pháp',
    blocks: [
      {
        type: 'p',
        text: 'Một điểm rất quan trọng trong tư tưởng Hồ Chí Minh là tinh thần độc lập, sáng tạo, không giáo điều. Hồ Chí Minh vận dụng chủ nghĩa Mác Lênin vào điều kiện cụ thể của Việt Nam, không máy móc sao chép mô hình bên ngoài, mà sáng tạo trong việc “Việt hóa” lý luận cho phù hợp với điều kiện Việt Nam.',
      },
      {
        type: 'p',
        text: 'Đây chính là nền tảng tư duy cho Đổi mới. Việt Nam vẫn kiên định mục tiêu độc lập dân tộc và chủ nghĩa xã hội, nhưng không giữ nguyên cơ chế quản lý cũ khi cơ chế đó không còn phù hợp. Đổi mới vì vậy là sự điều chỉnh phương pháp phát triển, không phải sự từ bỏ lý tưởng.',
      },
      {
        type: 'callout',
        text: 'Kiên định không có nghĩa là bảo thủ. Linh hoạt không có nghĩa là mất phương hướng. Việt Nam năm 1991 chọn cách giữ vững mục tiêu, nhưng thay đổi cách đi.',
      },
    ],
    sources: ['hochiminh.vn'],
  },

  'doc-lap-hop-tac': {
    eyebrow: 'Vận dụng tư tưởng · 05',
    title: 'Độc lập, tự chủ gắn với hợp tác quốc tế',
    blocks: [
      {
        type: 'p',
        text: 'Tư tưởng ngoại giao Hồ Chí Minh nhấn mạnh mối quan hệ giữa độc lập, tự chủ với đoàn kết, hợp tác quốc tế: độc lập, tự chủ, tự lực, tự cường phải gắn với đoàn kết và hợp tác quốc tế trên cơ sở bảo vệ lợi ích quốc gia, dân tộc.',
      },
      {
        type: 'p',
        text: 'Vận dụng vào năm 1991, Việt Nam không chọn con đường khép kín. Ngược lại, đất nước mở rộng quan hệ quốc tế, đa phương hóa, đa dạng hóa quan hệ đối ngoại, tìm kiếm môi trường hòa bình để phát triển.',
      },
      {
        type: 'callout',
        text: 'Đại hội VII nêu tinh thần Việt Nam muốn là bạn của tất cả các nước trong cộng đồng thế giới, phấn đấu vì hòa bình, độc lập và phát triển.',
      },
    ],
    sources: ['hochiminh.vn', 'tulieuvankien.dangcongsan.vn'],
  },

  // Slide: Chính sách — 4 nhóm
  'kinh-te-nhieu-thanh-phan': {
    eyebrow: 'Chính sách · 01',
    title: 'Phát triển kinh tế hàng hóa nhiều thành phần',
    blocks: [
      {
        type: 'p',
        text: 'Một thay đổi quan trọng sau Đổi mới là thừa nhận và phát triển nền kinh tế hàng hóa nhiều thành phần. Nghị quyết Trung ương khóa VII năm 1991 nêu rõ việc tiếp tục triển khai đường lối đổi mới theo hướng phát triển nền kinh tế hàng hóa nhiều thành phần, vận động theo cơ chế thị trường có sự quản lý của Nhà nước.',
      },
      {
        type: 'p',
        text: 'Ý nghĩa của chính sách này là giải phóng sức sản xuất. Thay vì chỉ dựa vào khu vực nhà nước và cơ chế bao cấp, nền kinh tế cho phép nhiều chủ thể tham gia: người dân, hộ gia đình, hợp tác xã, doanh nghiệp tư nhân, doanh nghiệp nhà nước và các hình thức kinh tế khác đều có vai trò trong phát triển đất nước.',
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
        text: 'Đại hội VII năm 1991 xác định cơ chế vận hành nền kinh tế hàng hóa nhiều thành phần theo định hướng xã hội chủ nghĩa là cơ chế thị trường có sự quản lý của Nhà nước bằng pháp luật, kế hoạch, chính sách và các công cụ khác.',
      },
      {
        type: 'p',
        text: 'Điểm cốt lõi là Việt Nam không phủ nhận vai trò của thị trường, nhưng cũng không để thị trường vận hành tự phát hoàn toàn. Nhà nước vẫn giữ vai trò định hướng, điều tiết, ổn định xã hội và chăm lo lợi ích chung.',
      },
      {
        type: 'callout',
        text: 'Đây là bước chuyển lớn trong tư duy kinh tế: từ quản lý bằng mệnh lệnh hành chính sang quản lý bằng cơ chế, pháp luật và chính sách.',
      },
    ],
    sources: ['Tạp chí Cộng sản'],
  },

  'mo-cua': {
    eyebrow: 'Chính sách · 03',
    title: 'Mở cửa và tăng cường đối ngoại',
    blocks: [
      {
        type: 'p',
        text: 'Trong bối cảnh mất đi nhiều quan hệ kinh tế truyền thống, Việt Nam cần mở rộng quan hệ với các nước và tổ chức quốc tế. Tinh thần Việt Nam muốn là bạn của tất cả các nước trong cộng đồng thế giới tại Đại hội VII thể hiện rõ sự chuyển hướng đối ngoại theo hướng rộng mở, hòa bình và hợp tác.',
      },
      {
        type: 'p',
        text: 'Chính sách này phù hợp với tư tưởng Hồ Chí Minh về kết hợp sức mạnh dân tộc với sức mạnh thời đại. Muốn phát triển, Việt Nam phải tự lực nhưng không tự cô lập; giữ độc lập tự chủ nhưng vẫn tranh thủ nguồn lực, tri thức, thị trường và quan hệ quốc tế.',
      },
    ],
    sources: ['tulieuvankien.dangcongsan.vn'],
  },

  'cham-lo-dan': {
    eyebrow: 'Chính sách · 04',
    title: 'Chăm lo đời sống nhân dân',
    blocks: [
      {
        type: 'p',
        text: 'Đổi mới không chỉ nhằm tăng trưởng kinh tế, mà còn nhằm ổn định đời sống nhân dân. Đại hội VI đã đặt ra các nhiệm vụ về chính sách xã hội, việc làm, giáo dục, văn hóa, bảo vệ và tăng cường sức khỏe nhân dân.',
      },
      {
        type: 'p',
        text: 'Điều này thể hiện rõ tinh thần lấy dân làm gốc. Khi đất nước khủng hoảng, nếu đời sống nhân dân không được cải thiện thì niềm tin xã hội sẽ suy giảm.',
      },
      {
        type: 'callout',
        text: 'Chăm lo đời sống nhân dân vừa là mục tiêu, vừa là điều kiện để giữ ổn định và phát triển.',
      },
    ],
    sources: ['tulieuvankien.dangcongsan.vn'],
  },

  // Slide: Kết quả
  'ket-qua': {
    eyebrow: 'Phần I · Kết quả',
    title: 'Kết quả bước đầu sau giai đoạn 1991',
    blocks: [
      {
        type: 'p',
        text: 'Sau Đại hội VII, Việt Nam tiếp tục kiên trì đường lối đổi mới và đạt nhiều kết quả quan trọng. Báo cáo tại Đại hội VIII cho biết giai đoạn 1991 tới 1995, tốc độ tăng trưởng GDP bình quân hằng năm đạt 8,2%, sản xuất công nghiệp tăng bình quân 13,3%, sản xuất nông nghiệp tăng 4,5%, kim ngạch xuất khẩu tăng 20%.',
      },
      {
        type: 'p',
        text: 'Những kết quả này cho thấy lựa chọn Đổi mới không chỉ là giải pháp tình thế, mà là hướng đi có cơ sở thực tiễn. Việt Nam từng bước ra khỏi tình trạng khủng hoảng, ổn định kinh tế, xã hội và mở rộng quan hệ quốc tế.',
      },
      {
        type: 'callout',
        text: 'Cách nói chính xác: năm 1991 là điểm thử thách lớn; từ sau Đại hội VII, Việt Nam kiên trì Đổi mới và từng bước vượt qua khủng hoảng trong những năm đầu thập niên 1990, chứ không vượt qua hoàn toàn ngay trong năm đó.',
      },
    ],
    sources: ['tulieuvankien.dangcongsan.vn'],
  },

  // Slide: Bài học — 4 bài học
  'bh-niem-tin': {
    eyebrow: 'Bài học · 01',
    title: 'Giữ vững niềm tin và đoàn kết xã hội',
    blocks: [
      {
        type: 'p',
        text: 'Khi thế giới biến động, nguy hiểm lớn không chỉ nằm ở khó khăn vật chất, mà còn nằm ở sự mất phương hướng.',
      },
      {
        type: 'p',
        text: 'Bài học từ năm 1991 cho thấy đoàn kết toàn dân, ổn định chính trị và niềm tin xã hội là nền tảng để đất nước có thể xử lý khủng hoảng.',
      },
    ],
  },

  'bh-kien-dinh': {
    eyebrow: 'Bài học · 02',
    title: 'Kiên định mục tiêu, không bảo thủ cách làm',
    blocks: [
      {
        type: 'p',
        text: 'Đổi mới thành công vì Việt Nam không máy móc giữ lại cơ chế cũ. Tinh thần Hồ Chí Minh là sáng tạo, thực tiễn và phù hợp với điều kiện Việt Nam.',
      },
      {
        type: 'p',
        text: 'Vì vậy hiện nay, khi đối mặt với chuyển đổi số, biến đổi khí hậu, cạnh tranh kinh tế hay khủng hoảng toàn cầu, Việt Nam cũng cần một tư duy linh hoạt như vậy.',
      },
    ],
  },

  'bh-tu-luc': {
    eyebrow: 'Bài học · 03',
    title: 'Tự lực, tự cường là nền tảng của hội nhập',
    blocks: [
      {
        type: 'p',
        text: 'Hội nhập quốc tế chỉ có hiệu quả khi đất nước có nội lực. Nếu không có năng lực sản xuất, con người, khoa học công nghệ và thể chế đủ mạnh, hội nhập dễ trở thành phụ thuộc.',
      },
      {
        type: 'p',
        text: 'Tự lực, tự cường vì vậy không đối lập với mở cửa, mà là điều kiện để mở cửa một cách chủ động.',
      },
    ],
  },

  'bh-lay-dan': {
    eyebrow: 'Bài học · 04',
    title: 'Lấy dân làm trung tâm của phát triển',
    blocks: [
      {
        type: 'p',
        text: 'Mọi chính sách phát triển cuối cùng phải hướng đến đời sống nhân dân. Trong khủng hoảng, người dân là đối tượng chịu ảnh hưởng trực tiếp nhất, nhưng cũng là nguồn lực quan trọng nhất để vượt qua khó khăn.',
      },
      {
        type: 'callout',
        text: 'Đây là giá trị cốt lõi của tư tưởng Hồ Chí Minh và vẫn còn nguyên ý nghĩa cho hôm nay.',
      },
    ],
  },
};
