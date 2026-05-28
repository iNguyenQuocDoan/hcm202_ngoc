import type { Detail } from '@/shared/components/feedback';

/**
 * Deep-dive theory content for the Lý thuyết slides. Each key is wired to a
 * trigger in page.tsx; opening it shows the full version of a card or section.
 * Focused specifically on the Economic Crisis and Innovation Lessons of 1991.
 */
export const DETAILS: Record<string, Detail> = {
  // Slide: Mở đầu
  'mo-dau': {
    eyebrow: 'Phần I · Mở đầu',
    title: 'Bước ngoặt lịch sử của nền kinh tế Việt Nam',
    blocks: [
      {
        type: 'p',
        text: 'Năm 1991 là một thời điểm thử thách cực đại đối với nền kinh tế Việt Nam. Trong quá trình chuyển đổi từ cơ chế kế hoạch hóa tập trung bao cấp sang kinh tế thị trường, Việt Nam đột ngột phải đối mặt với cú sốc đứt gãy quan hệ kinh tế quốc tế khi hệ thống xã hội chủ nghĩa ở Liên Xô và Đông Âu tan rã.',
      },
      {
        type: 'p',
        text: 'Hội nghị Ban Chấp hành Trung ương Đảng và Đại hội VII diễn ra vào tháng 6/1991 đã đưa ra những quyết sách kinh tế lịch sử, định hình con đường Đổi mới. Đây không chỉ là việc giải quyết khó khăn tạm thời, mà là cuộc cách mạng về tư duy kinh tế: phát triển kinh tế nhiều thành phần, thừa nhận quy luật thị trường, vận dụng linh hoạt để tự giải phóng sức sản xuất.',
      },
      {
        type: 'p',
        text: 'Tư tưởng Hồ Chí Minh về tự lực cánh sinh, lấy dân làm gốc được vận dụng sáng tạo để khơi dậy nội lực trong dân, tìm ra con đường phát triển độc lập, tự chủ trong bối cảnh bị bao vây cấm vận.',
      },
      {
        type: 'callout',
        text: 'Bài học cốt lõi: Việt Nam vượt qua cơn bão kinh tế 1991 không phải bằng cách quay lại cơ chế bao cấp khép kín, mà bằng cách đẩy mạnh hơn nữa Đổi mới, cởi trói kinh tế tư nhân và đa phương hóa ngoại thương.',
      },
    ],
    sources: ['tulieuvankien.dangcongsan.vn', 'Tạp chí Cộng sản'],
  },

  // Slide: Bối cảnh
  'boi-canh': {
    eyebrow: 'Phần I · Bối cảnh',
    title: 'Cú sốc COMECON và cơn bão siêu lạm phát',
    blocks: [
      {
        type: 'p',
        text: 'Đầu thập niên 1990, nền kinh tế Việt Nam rơi vào thế "lưỡng đầu thọ địch". Ở trong nước, siêu lạm phát vẫn dai dẳng (ghi nhận mức 67,5% năm 1991), đồng tiền mất giá nghiêm trọng. Sự đổ vỡ hàng loạt của các hợp tác xã tín dụng năm 1989-1990 đã quét sạch tiền tiết kiệm của người dân, làm suy giảm nghiêm trọng niềm tin vào hệ thống ngân hàng.',
      },
      {
        type: 'p',
        text: 'Ở ngoài nước, Liên Xô và Đông Âu sụp đổ dẫn đến sự tan rã của khối COMECON. Việt Nam đột ngột mất đi nguồn viện trợ và vay ưu đãi trị giá hơn 1 tỷ USD mỗi năm, đồng thời mất đi thị trường xuất nhập khẩu truyền thống vốn chiếm tới 80% tổng kim ngạch ngoại thương. Nguồn cung phân bón hóa học, xăng dầu, sắt thép, bông vải từ Liên Xô bị giảm 90%, khiến sản xuất nông - công nghiệp đứng trước nguy cơ tê liệt.',
      },
      {
        type: 'p',
        text: 'Bên cạnh đó, lệnh cấm vận kinh tế và tài chính khắc nghiệt của Hoa Kỳ vẫn tiếp tục khóa chặt mọi cánh cửa tiếp cận nguồn vốn phát triển từ Ngân hàng Thế giới (WB), Quỹ Tiền tệ Quốc tế (IMF) và các tổ chức tài chính quốc tế.',
      },
      {
        type: 'callout',
        text: 'Tình thế năm 1991: Đứt gãy nguồn cung chiến lược, lạm phát phi mã và bị bao vây cấm vận toàn diện đòi hỏi những cải cách kinh tế đột phá mang tính tự lực tự cường.',
      },
    ],
    sources: ['Lịch sử kinh tế Việt Nam 1945 - 2000', 'Nhân Dân Online'],
  },

  // Slide: Vận dụng tư tưởng — 5 luận điểm kinh tế
  'dan-lam-goc': {
    eyebrow: 'Vận dụng tư tưởng · 01',
    title: 'Giải phóng sức sản xuất của nhân dân',
    blocks: [
      {
        type: 'p',
        text: 'Tư tưởng "Lấy dân làm gốc" của Chủ tịch Hồ Chí Minh khi áp dụng vào thực tiễn kinh tế năm 1991 có nghĩa là đặt lợi ích kinh tế của người dân lên trên hết, tin tưởng và khơi dậy năng lực sản xuất của quần chúng thay vì áp đặt mệnh lệnh hành chính.',
      },
      {
        type: 'p',
        text: 'Biểu hiện rõ nhất là việc kiên trì thực hiện Khoán 10 (Khoán hộ) trong nông nghiệp. Khi nhà nước trả lại quyền tự chủ sử dụng đất lâu dài và quyền tự quyết bán sản phẩm cho hộ nông dân, động lực sản xuất được giải phóng mạnh mẽ. Người nông dân không còn làm việc đối phó cho hợp tác xã mà dồn sức chăm sóc ruộng đất của mình.',
      },
      {
        type: 'p',
        text: 'Chính việc coi trọng lợi ích sát sườn của dân đã giúp giải quyết triệt để cuộc khủng hoảng lương thực kéo dài nhiều thập kỷ, đưa Việt Nam từ nước thiếu đói thành nước xuất khẩu gạo chỉ sau một thời gian ngắn.',
      },
      {
        type: 'callout',
        text: 'Khoán 10 là minh chứng sống động: Lấy lợi ích kinh tế và quyền làm chủ của dân làm gốc sẽ tạo ra động lực sản xuất khổng lồ vượt qua khủng hoảng.',
      },
    ],
    sources: ['hochiminh.vn', 'Lịch sử Nông nghiệp Việt Nam'],
  },

  'doan-ket': {
    eyebrow: 'Vận dụng tư tưởng · 02',
    title: 'Ổn định kinh tế vĩ mô để giữ vững lòng dân',
    blocks: [
      {
        type: 'p',
        text: 'Đại đoàn kết toàn dân tộc theo tư tưởng Hồ Chí Minh trong bối cảnh kinh tế năm 1991 là sự đồng thuận xã hội trước những cải cách đau đớn nhưng cần thiết. Khi xóa bỏ bao cấp và tái cơ cấu quốc doanh, hàng trăm ngàn công nhân dôi dư phải nghỉ việc, lạm phát bào mòn túi tiền của mọi gia đình.',
      },
      {
        type: 'p',
        text: 'Đảng và Nhà nước xác định việc ổn định kinh tế vĩ mô, kiềm chế lạm phát và bảo đảm an sinh xã hội là điều kiện tiên quyết để giữ vững ổn định chính trị và niềm tin của nhân dân. Mọi tầng lớp nhân dân được kêu gọi đồng lòng chia sẻ khó khăn chung, thắt lưng buộc bụng để tích lũy vốn đầu tư phát triển.',
      },
      {
        type: 'callout',
        text: 'Đoàn kết kinh tế thể hiện ở chỗ: Sự đồng thuận của nhân dân ủng hộ các chính sách cải cách vĩ mô khắt khe là chìa khóa để giữ vững hệ thống tài chính trước sóng gió.',
      },
    ],
    sources: ['tulieuvankien.dangcongsan.vn'],
  },

  'tu-luc': {
    eyebrow: 'Vận dụng tư tưởng · 03',
    title: 'Huy động nội lực tài chính trong dân',
    blocks: [
      {
        type: 'p',
        text: 'Khi nguồn viện trợ 1 tỷ USD hằng năm của Liên Xô bị cắt, Việt Nam thấm thía bài học sâu sắc về tinh thần tự lực cánh sinh của Hồ Chí Minh. Đất nước không thể tiếp tục phát triển dựa trên "bầu sữa" viện trợ bên ngoài mà phải đứng vững bằng nguồn lực của chính mình.',
      },
      {
        type: 'p',
        text: 'Nội lực ở đây được xác định trước hết là nguồn vốn nhàn rỗi, vàng và ngoại tệ còn tích trữ rất lớn trong dân. Để khơi thông nguồn nội lực này, ngân hàng nhà nước đã thực hiện cải cách lãi suất tiền gửi cực cao (lãi suất thực dương) để khuyến khích dân gửi tiết kiệm thay vì mua vàng trữ. Đồng thời, Nhà nước cho phép thành lập các ngân hàng thương mại cổ phần và cởi trói cho tư nhân bỏ vốn kinh doanh.',
      },
      {
        type: 'callout',
        text: 'Tự lực tự cường năm 1991 có nghĩa là: Tự cứu lấy mình bằng dòng vốn, sức lao động và tài nguyên trong nước trước khi trông chờ vào sự hỗ trợ quốc tế.',
      },
    ],
    sources: ['Lịch sử Ngân hàng Việt Nam', 'hochiminh.vn'],
  },

  'kien-dinh': {
    eyebrow: 'Vận dụng tư tưởng · 04',
    title: 'Kiên định định hướng, linh hoạt cơ chế thị trường',
    blocks: [
      {
        type: 'p',
        text: 'Tư tưởng Hồ Chí Minh luôn đòi hỏi sự độc lập, sáng tạo, bám sát thực tiễn khách quan, tránh giáo điều máy móc. Năm 1991, Việt Nam kiên định mục tiêu độc lập dân tộc gắn liền với chủ nghĩa xã hội, nhưng kiên quyết từ bỏ mô hình kinh tế kế hoạch hóa tập trung kiểu cũ vốn không phù hợp với thực tiễn.',
      },
      {
        type: 'p',
        text: 'Sự linh hoạt thể hiện ở việc dũng cảm áp dụng các quy luật khách quan của kinh tế thị trường: quy luật cung cầu, quy luật giá trị và quy luật cạnh tranh. Nhà nước chuyển từ quản lý bằng mệnh lệnh, chỉ tiêu áp đặt từ trên xuống sang điều tiết vĩ mô bằng luật pháp, thuế, chính sách tiền tệ và lãi suất.',
      },
      {
        type: 'callout',
        text: 'Phương châm hành động: Kiên định mục tiêu định hướng phát triển của đất nước, nhưng linh hoạt tối đa trong biện pháp kinh tế, sử dụng công cụ thị trường để phục vụ mục tiêu quốc gia.',
      },
    ],
    sources: ['hochiminh.vn', 'Tạp chí Cộng sản'],
  },

  'doc-lap-hop-tac': {
    eyebrow: 'Vận dụng tư tưởng · 05',
    title: 'Mở cửa đa phương để tự giải vây kinh tế',
    blocks: [
      {
        type: 'p',
        text: 'Tư tưởng ngoại giao Hồ Chí Minh về kết hợp sức mạnh dân tộc với sức mạnh thời đại được vận dụng nhạy bén để giải quyết bài toán thị trường năm 1991. Khi thị trường truyền thống sụp đổ và bị cấm vận, Việt Nam không lựa chọn bế quan tỏa cảng.',
      },
      {
        type: 'p',
        text: 'Ngược lại, đất nước chủ động xoay trục ngoại thương ngoại giao. Tuyên bố "muốn làm bạn với tất cả các nước" tại Đại hội VII mở đường cho việc bình thường hóa quan hệ với Trung Quốc vào tháng 11/1991, khai thông buôn bán biên mậu. Đồng thời, Việt Nam thiết lập quan hệ thương mại mạnh mẽ với các quốc gia ASEAN (đặc biệt là Singapore), Tây Âu, Nhật Bản và Úc để tìm thị trường xuất khẩu mới cho dầu thô, thủy sản và gạo.',
      },
      {
        type: 'callout',
        text: 'Nguyên tắc ngoại giao kinh tế: Giữ vững độc lập tự chủ về kinh tế, đồng thời chủ động mở cửa đa phương hóa, đa dạng hóa thị trường để tự giải vây thế bao vây.',
      },
    ],
    sources: ['Bộ Ngoại giao Việt Nam', 'hochiminh.vn'],
  },

  // Slide: Chính sách — 4 nhóm kinh tế
  'kinh-te-nhieu-thanh-phan': {
    eyebrow: 'Chính sách · 01',
    title: 'Cởi trói pháp lý cho kinh tế tư nhân 1990 - 1991',
    blocks: [
      {
        type: 'p',
        text: 'Năm 1991 đánh dấu cột mốc lịch sử khi Luật Doanh nghiệp tư nhân và Luật Công ty năm 1990 chính thức có hiệu lực đi vào cuộc sống. Đây là bước đột phá pháp lý lớn nhất sau Đổi mới 1986, chính thức thừa nhận và bảo hộ sự tồn tại hợp pháp của các chủ thể kinh tế tư nhân.',
      },
      {
        type: 'p',
        text: 'Thay vì coi kinh tế cá thể, tư nhân là đối tượng cần cải tạo, chính sách mới khuyến khích người dân bỏ vốn thành lập công ty trách nhiệm hữu hạn, công ty cổ phần và doanh nghiệp tư nhân. Hàng chục ngàn doanh nghiệp tư nhân ra đời ngay trong năm 1991, nhanh chóng tạo ra việc làm, sản xuất hàng tiêu dùng và đóng góp ngân sách.',
      },
      {
        type: 'callout',
        text: 'Ý nghĩa chính sách: Khai thông nguồn lực của tư nhân, biến tài sản nhàn rỗi thành công cụ sản xuất, tạo động lực cạnh tranh lành mạnh để thúc đẩy thị trường.',
      },
    ],
    sources: ['Luật Doanh nghiệp tư nhân và Luật Công ty 1990', 'Tổng cục Thống kê'],
  },

  'co-che-thi-truong': {
    eyebrow: 'Chính sách · 02',
    title: 'Xóa bao cấp SOE và áp dụng lãi suất thực dương',
    blocks: [
      {
        type: 'p',
        text: 'Cải cách kinh tế năm 1991 tập trung vào hai mũi nhọn tài chính khốc liệt: xóa bỏ bù lỗ bao cấp cho Doanh nghiệp Nhà nước (SOE) và áp dụng lãi suất thực dương để chống lạm phát.',
      },
      {
        type: 'p',
        text: 'Nhà nước ban hành các nghị định buộc các SOE phải tự hạch toán kinh tế độc lập, không còn nhận vốn cấp phát từ ngân sách. Những doanh nghiệp thua lỗ kéo dài buộc phải giải thể hoặc sáp nhập (số lượng SOE giảm từ hơn 12.000 xuống còn khoảng 6.000 doanh nghiệp). Đồng thời, ngân hàng nâng lãi suất tiền gửi lên mức cao hơn tỷ lệ lạm phát. Chính sách này lập tức thu hút hàng ngàn tỷ đồng tiền nhàn rỗi từ dân vào ngân hàng, làm giảm áp lực cầu hàng hóa và chế ngự cơn bão lạm phát vĩ mô.',
      },
      {
        type: 'callout',
        text: 'Mũi nhọn cải cách: Buộc doanh nghiệp nhà nước tự chịu trách nhiệm trước quy luật thị trường và dùng công cụ tiền tệ thực dương để thu hồi tiền mặt chống lạm phát.',
      },
    ],
    sources: ['Tạp chí Ngân hàng', 'Nghị định 217-HĐBT và cải cách SOE'],
  },

  'nhu-cau-thiet-thuc': {
    eyebrow: 'Chính sách · 03',
    title: 'Ba chương trình kinh tế thiết thực',
    blocks: [
      {
        type: 'p',
        text: 'Ba chương trình kinh tế lớn từ Đại hội VI (1986) — lương thực, thực phẩm; hàng tiêu dùng; hàng xuất khẩu — tiếp tục có ý nghĩa trong giai đoạn đầu thập niên 1990. Đây là những chương trình bám sát nhu cầu sống còn của nhân dân và yêu cầu tạo nguồn lực cho sản xuất.',
      },
      {
        type: 'p',
        text: 'Lương thực, thực phẩm giúp ổn định đời sống và là nền tảng để xóa đói. Khoán 10 (1988) phối hợp với chương trình này đã giúp Việt Nam từ nước thiếu đói trở thành nước xuất khẩu gạo chỉ sau một thời gian ngắn.',
      },
      {
        type: 'p',
        text: 'Hàng tiêu dùng đáp ứng nhu cầu xã hội bị bóp nghẹt sau nhiều năm bao cấp; hàng xuất khẩu tạo nguồn ngoại tệ để nhập khẩu vật tư, máy móc và mở rộng quan hệ kinh tế đối ngoại trong bối cảnh khối COMECON tan rã.',
      },
      {
        type: 'callout',
        text: 'Ba chương trình kinh tế là cách Đổi mới bám sát đời sống nhân dân — lấy nhu cầu trước mắt làm động lực tạo nguồn lực dài hạn.',
      },
    ],
    sources: ['Văn kiện Đại hội VI', 'Lịch sử Nông nghiệp Việt Nam'],
  },

  'mo-cua': {
    eyebrow: 'Chính sách · 04',
    title: 'Chuyển hướng thị trường ngoại thương và thu hút FDI',
    blocks: [
      {
        type: 'p',
        text: 'Mất đi khối COMECON, Việt Nam khẩn trương chuyển hướng thị trường xuất nhập khẩu. Singapore nhanh chóng trở thành bạn hàng lớn nhất của Việt Nam, cung cấp xăng dầu thay thế nguồn cung từ Liên Xô. Giao thương biên giới với Trung Quốc bùng nổ mạnh mẽ.',
      },
      {
        type: 'p',
        text: 'Đồng thời, Luật Đầu tư nước ngoài tại Việt Nam (ban hành năm 1987, sửa đổi năm 1990) bắt đầu phát huy tác dụng rõ rệt. Việt Nam mở cửa đón các dòng vốn FDI đầu tiên vào các lĩnh vực khai thác dầu khí (liên doanh Vietsovpetro), dệt may, và khách sạn dịch vụ từ các nước châu Á như Đài Loan, Hồng Kông, Singapore.',
      },
      {
        type: 'callout',
        text: 'Thực tiễn đối ngoại: Tự giải vây kinh tế bằng cách mở rộng thị trường ngoại thương mới và thu hút dòng vốn đầu tư trực tiếp nước ngoài.',
      },
    ],
    sources: ['Bộ Kế hoạch và Đầu tư', 'Niên giám Thống kê thương mại'],
  },

  'cham-lo-dan': {
    eyebrow: 'Chính sách · 04',
    title: 'Giải quyết việc làm và an sinh xã hội thời kỳ chuyển đổi',
    blocks: [
      {
        type: 'p',
        text: 'Chuyển đổi kinh tế thị trường mang lại những hệ lụy xã hội to lớn: hàng trăm ngàn quân nhân phục viên, lao động từ hợp tác xã giải thể, công nhân từ các SOE thu hẹp sản xuất rơi vào cảnh mất việc làm. Cùng lúc đó, hàng vạn lao động xuất khẩu từ Đông Âu đột ngột phải về nước.',
      },
      {
        type: 'p',
        text: 'Chính phủ đã ban hành các chương trình quốc gia về giải quyết việc làm (Chương trình 120), hỗ trợ vốn vay nhỏ cho hộ gia đình tự tạo việc làm, khuyến khích các cơ sở sản xuất tiểu thủ công nghiệp tư nhân phát triển để thu hút lao động. Chính sự năng động của khu vực kinh tế tư nhân mới được cởi trói đã gánh đỡ áp lực thất nghiệp khổng lồ này.',
      },
      {
        type: 'callout',
        text: 'An sinh xã hội gắn liền đổi mới: Phát triển kinh tế nhiều thành phần chính là giải pháp hữu hiệu nhất để tạo công ăn việc làm và ổn định xã hội.',
      },
    ],
    sources: ['Bộ Lao động - Thương binh và Xã hội', 'tulieuvankien.dangcongsan.vn'],
  },

  // Slide: Kết quả
  'ket-qua': {
    eyebrow: 'Phần I · Kết quả',
    title: 'Trái ngọt kinh tế sau giai đoạn giông bão 1991',
    blocks: [
      {
        type: 'p',
        text: 'Nhờ những quyết sách cải cách kinh tế quyết liệt và dũng cảm trong năm 1991, Việt Nam đã đứng vững trước cơn bão lớn và gặt hái những thành tựu kinh tế ngoạn mục trong giai đoạn 1991 - 1995.',
      },
      {
        type: 'p',
        text: 'Tốc độ tăng trưởng GDP bình quân hằng năm đạt 8,2%, vượt xa mục tiêu đề ra và chứng minh sức sống của nền kinh tế thị trường định hướng xã hội chủ nghĩa. Sản xuất công nghiệp tăng trưởng bình quân 13,3% mỗi năm, sản xuất nông nghiệp phát triển ổn định ở mức 4,5%.',
      },
      {
        type: 'p',
        text: 'Kim ngạch xuất khẩu tăng vọt 20% mỗi năm, nổi bật là xuất khẩu dầu thô và nông sản. Từ một nước thiếu đói phải nhập khẩu lương thực, Việt Nam vươn lên thành nước xuất khẩu gạo lớn thứ hai thế giới. Lạm phát phi mã từ mức 67,5% năm 1991 được kéo xuống còn 17,5% năm 1992 và ổn định ở mức một con số năm 1993 (5,2%).',
      },
      {
        type: 'callout',
        text: 'Kỳ tích kinh tế: Việt Nam không chỉ thoát khỏi khủng hoảng kinh tế - xã hội mà còn bước vào một chu kỳ tăng trưởng kinh tế nhanh kéo dài suốt thập niên 1990.',
      },
    ],
    sources: ['Báo cáo chính trị Đại hội VIII Đảng Cộng sản Việt Nam', 'Tổng cục Thống kê'],
  },

  // Slide: Bài học — 4 bài học kinh tế
  'bh-niem-tin': {
    eyebrow: 'Bài học · 01',
    title: 'Giữ vững ổn định vĩ mô làm nền tảng phát triển',
    blocks: [
      {
        type: 'p',
        text: 'Bài học từ năm 1991 cho thấy trong mọi cuộc khủng hoảng kinh tế, kiểm soát lạm phát và ổn định đồng nội tệ phải là ưu tiên số một. Ổn định vĩ mô là cái gốc để giữ vững lòng dân và thu hút đầu tư.',
      },
      {
        type: 'p',
        text: 'Không thể có tăng trưởng bền vững nếu đồng tiền mất giá liên tục và hệ thống tín dụng mất an toàn. Các quyết sách thắt chặt tiền tệ thực dương năm 1991 là bài học kinh điển cho điều hành kinh tế vĩ mô ngày nay.',
      },
    ],
  },

  'bh-kien-dinh': {
    eyebrow: 'Bài học · 02',
    title: 'Kiên quyết tôn trọng quy luật thị trường khách quan',
    blocks: [
      {
        type: 'p',
        text: 'Kinh tế đổi mới thành công vì chúng ta dám chấp nhận và vận dụng quy luật thị trường khách quan, xóa bỏ tư duy duy ý chí ép giá bao cấp.',
      },
      {
        type: 'p',
        text: 'Việc thừa nhận kinh tế nhiều thành phần, cởi trói cho tư nhân tự do kinh doanh đã biến sức dân thành động lực thị trường. Bài học cho hiện tại là luôn tạo môi trường thể chế pháp lý thông thoáng, bình đẳng cho mọi thành phần kinh tế phát triển.',
      },
    ],
  },

  'bh-tu-luc': {
    eyebrow: 'Bài học · 03',
    title: 'Tự lực cánh sinh, xây dựng nền kinh tế tự chủ',
    blocks: [
      {
        type: 'p',
        text: 'Sự sụp đổ của khối COMECON dạy chúng ta rằng một nền kinh tế phụ thuộc quá lớn vào một thị trường hoặc một nguồn viện trợ duy nhất sẽ cực kỳ dễ tổn thương trước biến động địa chính trị.',
      },
      {
        type: 'p',
        text: 'Xây dựng nền kinh tế tự chủ, đa phương hóa quan hệ quốc tế, tự chủ nguồn lực tài chính, lương thực và năng lượng trong nước là bài học sống còn để bảo đảm độc lập, chủ quyền của đất nước.',
      },
    ],
  },

  'bh-lay-dan': {
    eyebrow: 'Bài học · 04',
    title: 'Dân giàu nước mạnh - Giải phóng sức sản xuất trong dân',
    blocks: [
      {
        type: 'p',
        text: 'Mọi chính sách cải cách kinh tế cuối cùng phải nhằm mục tiêu dân giàu nước mạnh. Cội nguồn sức mạnh vượt bão năm 1991 nằm ở hàng triệu hộ nông dân được trao ruộng đất, hàng vạn doanh nhân tư nhân được tự do kinh doanh.',
      },
      {
        type: 'callout',
        text: 'Động lực phát triển lớn nhất của Việt Nam chính là sức mạnh lao động, sáng tạo và dòng vốn nhàn rỗi trong dân được thể chế cởi trói và định hướng đúng đắn.',
      },
    ],
  },

  // Slide: Trục thời gian — 7 mốc
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
        text: 'Đại hội VI của Đảng (12/1986) đánh dấu bước chuyển quan trọng trong tư duy phát triển kinh tế. Đại hội xác định ba chương trình kinh tế lớn: lương thực, thực phẩm; hàng tiêu dùng; hàng xuất khẩu. Đây là bước chuyển có ý nghĩa lịch sử, mở đường cho việc từng bước xóa bỏ cơ chế bao cấp và thừa nhận sự tồn tại của nền kinh tế hàng hóa nhiều thành phần.',
      },
      {
        type: 'h',
        text: '1988 — Khoán 10 trong nông nghiệp',
      },
      {
        type: 'p',
        text: 'Nghị quyết 10 của Bộ Chính trị về đổi mới quản lý kinh tế nông nghiệp giao quyền chủ động sản xuất nhiều hơn cho hộ nông dân. Chính sách này góp phần giải phóng sức sản xuất trong nông nghiệp, tạo cơ sở để Việt Nam cải thiện tình hình lương thực.',
      },
      {
        type: 'h',
        text: '1989 — Biến động Đông Âu',
      },
      {
        type: 'p',
        text: 'Hệ thống xã hội chủ nghĩa ở Đông Âu lâm vào khủng hoảng và biến động sâu sắc. Các quan hệ kinh tế, thương mại và viện trợ truyền thống bị ảnh hưởng mạnh. Việt Nam phải đối mặt với yêu cầu tự chủ hơn trong phát triển kinh tế.',
      },
      {
        type: 'h',
        text: '6/1991 — Đại hội VII',
      },
      {
        type: 'p',
        text: 'Đại hội VII họp tại Hà Nội từ 24 – 27/6/1991. Đại hội khẳng định tiếp tục đường lối Đổi mới, thông qua Cương lĩnh xây dựng đất nước trong thời kỳ quá độ lên chủ nghĩa xã hội và Chiến lược ổn định, phát triển kinh tế – xã hội đến năm 2000.',
      },
      {
        type: 'h',
        text: '10/1991 — Hiệp định Paris về Campuchia',
      },
      {
        type: 'p',
        text: 'Hiệp định Paris về Campuchia năm 1991 góp phần giải quyết vấn đề Campuchia, tạo điều kiện thuận lợi hơn để Việt Nam phá thế bao vây ngoại giao và mở rộng quan hệ đối ngoại.',
      },
      {
        type: 'h',
        text: '12/1991 — Liên Xô tan rã',
      },
      {
        type: 'p',
        text: 'Liên Xô chính thức tan rã vào cuối năm 1991. Trật tự thế giới hai cực sụp đổ. Việt Nam buộc phải vận hành nền kinh tế trong điều kiện không còn dựa vào hệ thống viện trợ và hợp tác truyền thống như trước, đồng thời phải chủ động mở rộng quan hệ với các đối tác mới.',
      },
      {
        type: 'h',
        text: '1991 – 1995 — Kiên trì Đổi mới và phục hồi tăng trưởng',
      },
      {
        type: 'p',
        text: 'Trong kế hoạch 5 năm 1991 – 1995, Việt Nam tiếp tục đường lối Đổi mới. Nền kinh tế đạt tốc độ tăng trưởng khá cao (GDP bình quân 8,2%/năm), lạm phát được kiềm chế, sản xuất phát triển và quan hệ đối ngoại từng bước được mở rộng. Đây là giai đoạn quan trọng giúp Việt Nam thoát khỏi tình trạng khủng hoảng kinh tế – xã hội kéo dài.',
      },
      {
        type: 'callout',
        text: 'Giai đoạn 1991 – 1995 là bản lề: Việt Nam vừa phải vượt qua cú sốc mất điểm tựa kinh tế truyền thống, vừa phải chứng minh tính đúng đắn của đường lối Đổi mới.',
      },
    ],
    sources: ['tulieuvankien.dangcongsan.vn', 'Văn kiện Đại hội VII'],
  },

  // Slide: Vận dụng tư tưởng — overview
  'van-dung': {
    eyebrow: 'Phần II · Vận dụng tư tưởng',
    title: 'La bàn từ Hồ Chí Minh trong Đổi mới kinh tế 1991',
    blocks: [
      {
        type: 'p',
        text: 'Tư tưởng Hồ Chí Minh không nằm ở một chính sách kinh tế đơn lẻ. Đó là phương pháp luận — cách Việt Nam xác định mục tiêu, nguyên tắc và cách giải quyết khó khăn của một quốc gia đang xây dựng kinh tế từ điểm xuất phát thấp.',
      },
      {
        type: 'h',
        text: 'Bốn luận điểm dẫn đường',
      },
      {
        type: 'p',
        text: 'Lấy dân làm gốc: kinh tế là phương tiện chứ không phải mục đích cuối cùng; mọi chính sách phải hướng vào đời sống, việc làm, thu nhập và quyền làm chủ của nhân dân.',
      },
      {
        type: 'p',
        text: 'Tự lực, tự cường: khi điểm tựa kinh tế truyền thống (Liên Xô, Đông Âu) đảo lộn, đất nước phải dựa vào sức mình — sức dân, đất đai, doanh nghiệp trong nước — để không bị động trước biến cố quốc tế.',
      },
      {
        type: 'p',
        text: 'Sáng tạo, không giáo điều: giữ mục tiêu xã hội chủ nghĩa nhưng không đồng nhất nó với cơ chế bao cấp. Đổi mới phương pháp tổ chức nền kinh tế, thừa nhận quy luật khách quan của thị trường.',
      },
      {
        type: 'p',
        text: 'Độc lập tự chủ, mở cửa: kết hợp sức mạnh dân tộc với sức mạnh thời đại — mở rộng quan hệ kinh tế đối ngoại trên nền tảng giữ vững độc lập, lợi ích quốc gia.',
      },
      {
        type: 'callout',
        text: 'Bốn luận điểm không phải bốn khẩu hiệu rời rạc — chúng là một hệ thống: lấy dân làm gốc → phát huy nội lực → đổi mới sáng tạo → hội nhập chủ động.',
      },
    ],
    sources: ['Tư tưởng Hồ Chí Minh – Giáo trình', 'Văn kiện Đại hội VII'],
  },

  // Slide: Chính sách thực thi — Bốn hướng chuyển động
  'chinh-sach': {
    eyebrow: 'Phần II · Chính sách thực thi',
    title: 'Bốn hướng chuyển động của Đổi mới kinh tế',
    blocks: [
      {
        type: 'p',
        text: 'Từ định hướng tư tưởng và đường lối Đại hội VII, Việt Nam tiếp tục cụ thể hóa Đổi mới bằng nhiều nhóm chính sách kinh tế quan trọng. Có thể khái quát thành bốn hướng chuyển động chính.',
      },
      {
        type: 'h',
        text: '01 · Phát triển kinh tế hàng hóa nhiều thành phần',
      },
      {
        type: 'p',
        text: 'Việt Nam thừa nhận và phát triển nền kinh tế hàng hóa nhiều thành phần, gồm kinh tế nhà nước, kinh tế tập thể, kinh tế cá thể, kinh tế tư nhân và khu vực có vốn đầu tư nước ngoài. Ý nghĩa của chính sách này là giải phóng sức sản xuất, công nhận vai trò của nhiều chủ thể kinh tế và tạo điều kiện để người dân, hộ gia đình, hợp tác xã, doanh nghiệp cùng tham gia phát triển.',
      },
      {
        type: 'h',
        text: '02 · Vận hành theo cơ chế thị trường có sự quản lý của Nhà nước',
      },
      {
        type: 'p',
        text: 'Việt Nam không phủ nhận cơ chế thị trường, nhưng cũng không để thị trường vận hành hoàn toàn tự phát. Nhà nước giữ vai trò định hướng, quản lý bằng pháp luật, kế hoạch, chính sách tài chính, tiền tệ và các công cụ điều tiết vĩ mô. Đây là điểm quan trọng của mô hình Đổi mới: sử dụng động lực thị trường để phát triển sản xuất, nhưng vẫn giữ định hướng xã hội chủ nghĩa và vai trò quản lý của Nhà nước.',
      },
      {
        type: 'h',
        text: '03 · Tiếp tục các chương trình kinh tế thiết thực',
      },
      {
        type: 'p',
        text: 'Ba chương trình kinh tế lớn từ Đại hội VI — lương thực, thực phẩm; hàng tiêu dùng; hàng xuất khẩu — tiếp tục có ý nghĩa trong giai đoạn đầu thập niên 1990. Lương thực, thực phẩm giúp ổn định đời sống; hàng tiêu dùng đáp ứng nhu cầu xã hội; hàng xuất khẩu tạo nguồn ngoại tệ và mở rộng quan hệ kinh tế đối ngoại.',
      },
      {
        type: 'h',
        text: '04 · Mở rộng quan hệ kinh tế đối ngoại',
      },
      {
        type: 'p',
        text: 'Trong bối cảnh bị bao vây, cấm vận và mất dần quan hệ kinh tế truyền thống, Việt Nam từng bước mở rộng quan hệ đối ngoại. Những mốc quan trọng gồm:',
      },
      {
        type: 'p',
        text: '· Bình thường hóa quan hệ với Trung Quốc năm 1991.',
      },
      {
        type: 'p',
        text: '· Hiệp định Paris về Campuchia năm 1991 góp phần tháo gỡ thế bao vây ngoại giao.',
      },
      {
        type: 'p',
        text: '· Mỹ dỡ bỏ cấm vận thương mại đối với Việt Nam năm 1994.',
      },
      {
        type: 'p',
        text: '· Việt Nam gia nhập ASEAN năm 1995.',
      },
      {
        type: 'callout',
        text: 'Các nhóm chính sách này không tách rời nhau. Có nhiều thành phần kinh tế thì mới có thêm chủ thể sản xuất; có cơ chế thị trường thì mới tạo động lực; có quản lý của Nhà nước thì giữ được định hướng; có mở cửa đối ngoại thì mở rộng nguồn lực phát triển.',
      },
    ],
    sources: ['Văn kiện Đại hội VII', 'tulieuvankien.dangcongsan.vn'],
  },

  // Slide: Lời dạy
  'loi-day': {
    eyebrow: 'Phần II · Lời dạy',
    title: '"Dễ trăm lần không dân cũng chịu, khó vạn lần dân liệu cũng xong"',
    blocks: [
      {
        type: 'p',
        text: 'Câu nói này thường được dẫn trong các tài liệu về tư tưởng Hồ Chí Minh khi nói về vai trò của nhân dân. Nó cô đọng tinh thần "lấy dân làm gốc" thành một mệnh đề về sức mạnh thực tế: không có sự đồng thuận, tham gia và sáng tạo của nhân dân thì việc dù dễ cũng khó thành. Ngược lại, khi nhân dân được tin tưởng, được trao quyền và được hưởng lợi từ chính sách, những khó khăn lớn cũng có thể vượt qua.',
      },
      {
        type: 'h',
        text: 'Ý nghĩa trong Đổi mới kinh tế',
      },
      {
        type: 'p',
        text: 'Trong giai đoạn khủng hoảng đầu thập niên 1990, câu hỏi đặt ra là: Việt Nam lấy nguồn lực ở đâu để vượt khó khi viện trợ và quan hệ kinh tế truyền thống suy giảm? Câu trả lời nằm ở việc phát huy sức dân — trao thêm quyền chủ động sản xuất cho hộ nông dân, công nhận vai trò của kinh tế tư nhân, khuyến khích người dân và doanh nghiệp tham gia sản xuất, kinh doanh, lấy cải thiện đời sống nhân dân làm thước đo hiệu quả của chính sách.',
      },
      {
        type: 'h',
        text: 'Một số chính sách thể hiện tinh thần phát huy sức dân',
      },
      {
        type: 'p',
        text: '· 1988 — Khoán 10 trong nông nghiệp: tăng quyền chủ động sản xuất cho hộ nông dân.',
      },
      {
        type: 'p',
        text: '· 1990 — Luật Doanh nghiệp tư nhân: hợp pháp hóa khu vực kinh tế tư nhân.',
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

  // Slide: Bài học — Hành trang còn mãi
  'bai-hoc': {
    eyebrow: 'Phần III · Bài học',
    title: 'Hành trang còn mãi — bốn bài học từ Vượt Bão 1991',
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
        text: 'Khi mô hình cũ không còn phù hợp, cần mạnh dạn điều chỉnh tư duy và phương thức quản lý. Đổi mới không phải là thay đổi tùy tiện, mà là phản ứng có cơ sở trước yêu cầu thực tiễn. Bài học này thể hiện tinh thần sáng tạo, không giáo điều trong tư tưởng Hồ Chí Minh.',
      },
      {
        type: 'h',
        text: '02 · Đời sống nhân dân là trung tâm',
      },
      {
        type: 'p',
        text: 'Tăng trưởng kinh tế chỉ có ý nghĩa bền vững khi gắn với việc làm, thu nhập, đời sống và quyền làm chủ của nhân dân. Các chỉ số như GDP, xuất khẩu hay đầu tư chỉ thật sự có giá trị khi cuối cùng góp phần cải thiện đời sống con người. Đây là sự vận dụng tư tưởng "lấy dân làm gốc" trong lĩnh vực kinh tế.',
      },
      {
        type: 'h',
        text: '03 · Phát huy nội lực là điều kiện để đứng vững',
      },
      {
        type: 'p',
        text: 'Khi môi trường quốc tế biến động, một quốc gia muốn đứng vững phải có nội lực. Nội lực bao gồm con người, sản xuất trong nước, doanh nghiệp, tài nguyên, thể chế và năng lực tự điều chỉnh chính sách. Bài học từ năm 1991 cho thấy: khi điểm tựa bên ngoài suy giảm, sức dân và năng lực tự chủ bên trong trở thành yếu tố quyết định.',
      },
      {
        type: 'h',
        text: '04 · Mở cửa phải đi cùng độc lập tự chủ',
      },
      {
        type: 'p',
        text: 'Hội nhập là cần thiết, nhưng hội nhập phải dựa trên lợi ích quốc gia và khả năng tự chủ của nền kinh tế. Mở cửa trong thế chủ động giúp đất nước tiếp nhận nguồn lực bên ngoài mà không rơi vào phụ thuộc. Tinh thần này phù hợp với tư tưởng Hồ Chí Minh về kết hợp sức mạnh dân tộc với sức mạnh thời đại.',
      },
      {
        type: 'callout',
        text: 'Bốn bài học có thể xem như bộ tiêu chí đánh giá chính sách kinh tế: có xuất phát từ thực tiễn không? có vì dân không? có phát huy nội lực không? có giữ được độc lập tự chủ trong hội nhập không?',
      },
    ],
    sources: ['Văn kiện Đại hội VIII', 'Giáo trình Tư tưởng Hồ Chí Minh'],
  },

  // Slide: Kết luận
  'ket-luan': {
    eyebrow: 'Phần III · Kết luận',
    title: 'Kiên định mục tiêu, đổi mới cách đi',
    blocks: [
      {
        type: 'p',
        text: 'Trước khủng hoảng đầu thập niên 1990, Việt Nam lựa chọn tiếp tục con đường xã hội chủ nghĩa nhưng đổi mới mạnh mẽ phương thức quản lý kinh tế. Đất nước không quay lại cơ chế bao cấp cũ, cũng không từ bỏ mục tiêu đã xác định.',
      },
      {
        type: 'h',
        text: 'Kiên định mục tiêu',
      },
      {
        type: 'p',
        text: 'Mục tiêu xã hội chủ nghĩa — độc lập dân tộc, dân giàu, nước mạnh, xã hội công bằng, dân chủ, văn minh — tiếp tục được khẳng định trong đường lối của Đảng. Cương lĩnh năm 1991 đặt nền tảng định hướng quan trọng cho quá trình xây dựng đất nước trong thời kỳ quá độ, sau đó tiếp tục được kế thừa và phát triển trong các văn kiện sau này.',
      },
      {
        type: 'h',
        text: 'Đổi mới cách đi',
      },
      {
        type: 'p',
        text: 'Cách đi tới mục tiêu được đổi mới căn bản: từ cơ chế kế hoạch hóa tập trung, bao cấp sang nền kinh tế hàng hóa nhiều thành phần; từ quản lý bằng mệnh lệnh hành chính là chủ yếu sang vận dụng cơ chế thị trường có sự quản lý của Nhà nước; từ tình trạng bị bao vây sang mở cửa, đa phương hóa, đa dạng hóa quan hệ; từ tư duy cứng nhắc sang tư duy thực tiễn, linh hoạt và sáng tạo.',
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
        text: '"Vượt Bão 1991" không chỉ là câu chuyện về một năm lịch sử. Đó là minh chứng cho khả năng biến khủng hoảng thành động lực phát triển khi đất nước biết dựa vào dân, phát huy nội lực, giữ vững độc lập tự chủ và đổi mới theo yêu cầu của thực tiễn.',
      },
    ],
    sources: ['Văn kiện Đại hội VII', 'Cương lĩnh xây dựng đất nước (1991)'],
  },
};
