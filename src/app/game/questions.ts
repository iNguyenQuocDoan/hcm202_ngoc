export interface StatEffects {
  economy: number;
  confidence: number;
  adaptability: number;
  solidarity: number;
}

export interface Choice {
  text: string;
  effects: StatEffects;
  outcome: string;
  lesson1991: string;
}

export interface Question {
  id: number;
  title: string;
  situation: string;
  choices: Choice[];
}

export const QUESTIONS: Question[] = [
  {
    id: 1,
    title: 'Khủng hoảng đứt gãy nguồn cung COMECON',
    situation: 'Cuối năm 1991, Liên Xô tan rã, nguồn viện trợ hằng năm bị cắt hoàn toàn, lượng phân bón và xăng dầu nhập khẩu giảm đột ngột 90%. Nông dân và các nhà máy đứng trước nguy cơ thiếu hụt vật tư sản xuất trầm trọng.',
    choices: [
      {
        text: 'Cho phép các doanh nghiệp ngoại thương tự do tìm kiếm thị trường nhập khẩu từ Singapore, Nhật Bản và tự phân phối theo giá thị trường.',
        effects: { economy: 15, confidence: 10, adaptability: 20, solidarity: -10 },
        outcome: 'Nguồn cung phân bón và xăng dầu được bù đắp kịp thời, cứu vãn vụ mùa. Tuy nhiên, giá vật tư tăng theo giá thị trường tự do khiến chi phí sản xuất của một bộ phận nông dân nghèo bị ảnh hưởng.',
        lesson1991: 'Bài học 1991 (Tự lực và Mở cửa đối ngoại): Khi nguồn lực và thị trường truyền thống bị đóng băng, chủ động đa dạng hóa đối tác thương mại để tự cứu mình là lối thoát tiên quyết.'
      },
      {
        text: 'Duy trì cơ chế bao cấp, phân phối nhỏ giọt vật tư qua Hợp tác xã mua bán nhà nước và cấm mọi giao dịch mua bán tự do bên ngoài.',
        effects: { economy: -20, confidence: -15, adaptability: -20, solidarity: 10 },
        outcome: 'Tránh được phân hóa giá cả ngắn hạn, nhưng việc bao cấp cào bằng khi nguồn lực đã cạn kiệt khiến nông nghiệp rơi vào suy kiệt cục bộ vì thiếu hụt nghiêm trọng.',
        lesson1991: 'Bài học 1991 (Chống bảo thủ trì trệ): Việc bám giữ cơ chế bao cấp cứng nhắc bất chấp thực tế đứt gãy nguồn cung chỉ làm trầm trọng thêm khủng hoảng hệ thống.'
      },
      {
        text: 'Kêu gọi nông dân tập trung tự cung tự cấp bằng các biện pháp hữu cơ truyền thống (phân chuồng, phân xanh) thay thế hoàn toàn vật tư hóa học.',
        effects: { economy: -10, confidence: 5, adaptability: -10, solidarity: 15 },
        outcome: 'Giúp củng cố tính đoàn kết nông thôn và giảm áp lực ngoại tệ nhập khẩu, nhưng năng suất lúa giảm mạnh làm gia tăng nguy cơ thiếu lương thực.',
        lesson1991: 'Bài học 1991 (Tôn trọng thực tiễn khách quan): Phát huy nội lực phải đi đôi với tiếp cận công nghệ và thương mại tiến bộ, chứ không phải quay về sản xuất lạc hậu tự cấp tự túc.'
      }
    ]
  },
  {
    id: 2,
    title: 'Cơn bão siêu lạm phát vĩ mô 67.5%',
    situation: 'Lạm phát phi mã đạt mức 67,5% năm 1991. Người dân mất lòng tin vào đồng tiền nội tệ, liên tục rút tiết kiệm để mua vàng và ngoại tệ dự trữ, khiến hệ thống ngân hàng nhà nước cạn kiệt tiền mặt.',
    choices: [
      {
        text: 'Thực hiện chính sách lãi suất thực dương (nâng lãi suất tiền gửi ngân hàng lên mức cao hơn tỷ lệ lạm phát thực tế) để hút tiền gửi của dân.',
        effects: { economy: -10, confidence: 25, adaptability: 15, solidarity: 10 },
        outcome: 'Ngay lập tức, hàng ngàn tỷ đồng và vàng chảy ngược vào ngân hàng, giảm áp lực mua gom đầu cơ trên thị trường, hạ nhiệt thành công cơn bão lạm phát.',
        lesson1991: 'Bài học 1991 (Ổn định tiền tệ vĩ mô): Dùng công cụ tiền tệ thực dương để khôi phục giá trị đồng nội tệ và hút tiền mặt lưu thông là chìa khóa chặn đứng siêu lạm phát.'
      },
      {
        text: 'Tiếp tục in tiền để bù đắp ngân sách và cấp tín dụng ưu đãi lãi suất thấp hỗ trợ các xí nghiệp quốc doanh duy trì việc làm.',
        effects: { economy: 5, confidence: -25, adaptability: -20, solidarity: -15 },
        outcome: 'Cấp được vốn ngắn hạn cho quốc doanh, nhưng làm bùng nổ lượng tiền lưu thông, đẩy lạm phát vĩ mô tăng vọt lên mức ba chữ số, hủy hoại tài chính quốc gia.',
        lesson1991: 'Bài học 1991 (Kỷ luật tài chính quốc gia): Tiếp tục in tiền bù lỗ bao cấp cho sản xuất kém hiệu quả chỉ gây ra vòng xoáy siêu lạm phát tự hủy hoại.'
      },
      {
        text: 'Áp đặt giá trần hành chính nghiêm ngặt và hình sự hóa các hoạt động mua bán vàng, ngoại tệ tự do trên thị trường.',
        effects: { economy: -20, confidence: -15, adaptability: -10, solidarity: 5 },
        outcome: 'Các giao dịch rút vào bóng tối của thị trường chợ đen, hàng hóa thiết yếu biến mất hoàn toàn khỏi kệ hàng do người bán găm hàng trốn thuế.',
        lesson1991: 'Bài học 1991 (Tôn trọng quy luật thị trường): Dùng mệnh lệnh hành chính ép giá trái quy luật cung cầu chỉ bóp nghẹt lưu thông và gây khan hiếm trầm trọng hơn.'
      }
    ]
  },
  {
    id: 3,
    title: 'Cải cách và cắt bao cấp xí nghiệp quốc doanh (SOE)',
    situation: 'Nhà nước kiên quyết xóa bỏ bù lỗ ngân sách hằng năm. Xí nghiệp dệt may quốc doanh của bạn mất đối tác xuất khẩu Liên Xô, hàng tồn kho chất đống, quỹ lương cạn kiệt, đe dọa sinh kế 500 công nhân.',
    choices: [
      {
        text: 'Kiên quyết chuyển sang tự hạch toán độc lập: Tinh giản 30% bộ máy gián tiếp dôi dư, đổi mới sản phẩm, tìm thị trường xuất khẩu mới ở ASEAN.',
        effects: { economy: 20, confidence: 15, adaptability: 25, solidarity: -20 },
        outcome: 'Xí nghiệp tự cứu sống mình, ký được đơn hàng dệt may sang Singapore, duy trì lương ổn định cho số công nhân còn lại nhưng gây tổn thương lòng tin ngắn hạn cho những người bị tinh giản.',
        lesson1991: 'Bài học 1991 (Tự chủ hạch toán kinh tế): Buộc doanh nghiệp nhà nước tự bơi trên thị trường và tinh gọn bộ máy là cách duy nhất giải phóng năng lực cạnh tranh.'
      },
      {
        text: 'Gửi đơn lên Bộ chủ quản xin viện trợ khẩn cấp, đình hoãn nợ thuế và xin duy trì hạn mức tín dụng bao cấp để bảo toàn việc làm.',
        effects: { economy: -15, confidence: -10, adaptability: -20, solidarity: 20 },
        outcome: 'Giữ được ổn định nội bộ tạm thời, nhưng nhà máy tiếp tục sản xuất ra những sản phẩm không ai mua, biến doanh nghiệp thành gánh nặng nợ xấu của ngân sách.',
        lesson1991: 'Bài học 1991 (Xóa bỏ bao cấp, ỷ lại): Trông chờ vào cứu trợ nhà nước mà không tự tái cấu trúc chỉ làm kéo dài sự trì trệ và phá vỡ kỷ cương kinh tế.'
      },
      {
        text: 'Kêu gọi công nhân góp vốn cổ phần, chuyển đổi một phần nhà xưởng sang kinh doanh dịch vụ hỗn hợp và cho thuê kho bãi.',
        effects: { economy: 5, confidence: 10, adaptability: 15, solidarity: 25 },
        outcome: 'Giải quyết được việc làm năng động tại chỗ, tận dụng tốt mặt bằng để sinh lợi nhuận phụ giúp cải thiện thu nhập công nhân nhưng quy mô công nghiệp cốt lõi bị thu hẹp.',
        lesson1991: 'Bài học 1991 (Năng động chuyển đổi cơ cấu): Đa dạng hóa hình thức sở hữu và linh hoạt thay đổi công năng sản xuất để thích ứng với khủng hoảng.'
      }
    ]
  },
  {
    id: 4,
    title: 'Khơi thông dòng vốn qua Luật Doanh nghiệp 1990',
    situation: 'Luật Doanh nghiệp tư nhân và Luật Công ty có hiệu lực từ đầu năm 1991. Tuy nhiên, người dân vẫn còn e ngại định kiến xã hội cũ và sợ rủi ro pháp lý nên không dám bỏ vốn nhàn rỗi thành lập doanh nghiệp.',
    choices: [
      {
        text: 'Tuyên truyền mạnh mẽ quyền tự do kinh doanh hợp pháp, đơn giản hóa thủ tục cấp phép và cam kết bảo hộ quyền sở hữu tài sản của tư nhân.',
        effects: { economy: 25, confidence: 20, adaptability: 15, solidarity: 10 },
        outcome: 'Khai thông nguồn lực tài chính khổng lồ trong dân. Hàng ngàn doanh nghiệp tư nhân may mặc, gia công cơ khí ra đời ngay trong năm 1991, tạo việc làm lớn.',
        lesson1991: 'Bài học 1991 (Cởi trói thể chế pháp lý): Thừa nhận và tạo hành lang pháp lý vững chắc cho kinh tế tư nhân là chìa khóa mở đường cho nội lực tài chính trong dân bứt phá.'
      },
      {
        text: 'Tiếp tục áp dụng các thủ tục hành chính phức tạp và hạn chế hạn ngạch của tư nhân để bảo vệ lợi ích và vị thế của các xí nghiệp nhà nước.',
        effects: { economy: -15, confidence: -20, adaptability: -15, solidarity: 5 },
        outcome: 'Hộ tư nhân e ngại không dám đầu tư sản xuất, tiền nhàn rỗi tiếp tục chảy vào cất trữ vàng và USD, nền kinh tế khan hiếm việc làm trầm trọng.',
        lesson1991: 'Bài học 1991 (Bình đẳng các thành phần kinh tế): Sự phân biệt đối xử và kìm hãm kinh tế tư nhân sẽ bóp nghẹt động lực tăng trưởng và làm nghèo đất nước.'
      },
      {
        text: 'Chỉ khuyến khích thành lập các mô hình xí nghiệp liên doanh tập thể (nhà nước có cổ phần chi phối) để nhà nước dễ kiểm soát.',
        effects: { economy: 10, confidence: 10, adaptability: 5, solidarity: 15 },
        outcome: 'Người dân an tâm hơn nhờ bóng mát nhà nước, nhưng bộ máy quản lý nửa tư nửa công cồng kềnh, làm suy giảm tốc độ ra quyết định kinh doanh.',
        lesson1991: 'Bài học 1991 (Đổi mới có hiệu quả thực chất): Xây dựng lòng tin bằng luật pháp thông thoáng hiệu quả hơn sự can thiệp và áp đặt tỷ lệ sở hữu hành chính.'
      }
    ]
  },
  {
    id: 5,
    title: 'Giải quyết cuộc khủng hoảng lương thực bằng Khoán 10',
    situation: 'Năng suất nông nghiệp trì trệ, nông dân hợp tác xã không mặn mà canh tác do cơ chế chấm điểm cào bằng. Đất nước đứng trước nguy cơ thiếu đói quay lại.',
    choices: [
      {
        text: 'Kiên quyết giao quyền sử dụng đất lâu dài và quyền tự quyết tiêu thụ nông sản cho hộ gia đình (thực chất Khoán 10 nông nghiệp).',
        effects: { economy: 25, confidence: 20, adaptability: 15, solidarity: 10 },
        outcome: 'Giải phóng triệt để động lực sản xuất. Nông dân tự đầu tư cải tạo đất, năng suất nông sản bùng nổ, đưa Việt Nam thành nước xuất khẩu gạo lớn.',
        lesson1991: 'Bài học 1991 (Lấy dân làm gốc trong kinh tế): Coi trọng lợi ích kinh tế thực chất và trao quyền tự chủ cho người dân sẽ tạo ra năng lượng sản xuất vô hạn.'
      },
      {
        text: 'Duy trì ban quản trị hợp tác xã quyết định phân chia ruộng đất hằng năm để bảo đảm công bằng bình quân, cấm tự do bán gạo liên tỉnh.',
        effects: { economy: -25, confidence: -20, adaptability: -20, solidarity: 15 },
        outcome: 'Giữ được sự công bằng bề nổi nhưng kìm hãm nông nghiệp phát triển. Người dân tiếp tục bỏ hoang ruộng đất, đô thị thiếu đói lương thực trầm trọng.',
        lesson1991: 'Bài học 1991 (Chống cào bằng duy ý chí): Cơ chế phân phối bình quân cào bằng triệt tiêu động lực lao động và biến tài nguyên sản xuất thành gánh nặng.'
      },
      {
        text: 'Giữ nguyên cơ cấu hợp tác xã tập trung đi cày chung nhưng giảm nhẹ nghĩa vụ đóng góp sản lượng đóng thuế cho nông dân.',
        effects: { economy: -5, confidence: 10, adaptability: -10, solidarity: 15 },
        outcome: 'Giảm bớt áp lực tài chính ngắn hạn cho dân, nhưng nông dân vẫn thiếu động lực thâm canh nên năng suất nông nghiệp chỉ tăng nhỏ giọt.',
        lesson1991: 'Bài học 1991 (Cải cách căn bản): Chỉ giảm nghĩa vụ thuế khóa mà không thay đổi cốt lõi quyền tự chủ ruộng đất và thị trường thì không thể tạo bước ngoặt.'
      }
    ]
  },
  {
    id: 6,
    title: 'Xử lý khủng hoảng quỹ tín dụng tự phát đổ vỡ',
    situation: 'Do thiếu kiểm soát của nhà nước, hàng loạt hợp tác xã tín dụng tư nhân huy động lãi suất ảo cực cao sụp đổ hàng loạt. Hàng vạn người dân mất sạch tiền gửi, phẫn nộ bao vây các cơ quan hành chính đòi nhà nước bồi thường.',
    choices: [
      {
        text: 'Thanh lý tài sản các chủ quỹ lừa đảo đền bù một phần, đồng thời ban hành pháp lệnh chuyển đổi quỹ tốt thành Ngân hàng cổ phần dưới sự giám sát chặt chẽ của Ngân hàng Nhà nước.',
        effects: { economy: 15, confidence: 20, adaptability: 20, solidarity: 10 },
        outcome: 'Tái thiết lập trật tự tài chính chuyên nghiệp, xoa dịu làn sóng phẫn nộ, đặt nền móng cho hệ thống ngân hàng hai cấp hiện đại tại Việt Nam.',
        lesson1991: 'Bài học 1991 (Sử dụng công cụ pháp lý quản trị): Khủng hoảng tài chính phải được giải quyết bằng các cải cách thể chế, luật pháp hóa và minh bạch hóa hệ thống.'
      },
      {
        text: 'In thêm tiền giấy từ ngân sách để đền bù 100% tài sản bị mất cho toàn bộ người dân gửi tiền nhằm dập tắt ngay sự bất ổn xã hội.',
        effects: { economy: -25, confidence: 10, adaptability: -15, solidarity: -20 },
        outcome: 'Ổn định nhanh lòng dân tạm thời, nhưng đổ thêm một lượng tiền mặt khổng lồ vào lưu thông, làm bùng phát trở lại siêu lạm phát vĩ mô tàn phá nền kinh tế.',
        lesson1991: 'Bài học 1991 (Kỷ luật ngân sách vĩ mô): Dùng tiền ngân sách in thêm để chi trả cho các đổ vỡ tài chính tự phát là hành vi tự sát tài chính phá hủy giá trị đồng nội tệ.'
      },
      {
        text: 'Tuyên bố đây là giao dịch dân sự tự chịu rủi ro, nhà nước không liên đới đền bù và áp dụng biện pháp hành chính cưỡng chế giải tán đám đông biểu tình.',
        effects: { economy: -10, confidence: -30, adaptability: -10, solidarity: -25 },
        outcome: 'Bảo toàn được ngân sách nhà nước, nhưng gây chia rẽ sâu sắc, triệt tiêu niềm tin của nhân dân vào sự bảo hộ của luật pháp và hệ thống tài chính.',
        lesson1991: 'Bài học 1991 (An sinh gắn liền ổn định): Giải quyết khủng hoảng phải bằng các biện pháp điều tiết hài hòa và thấu tình đạt lý, lắng nghe lòng dân.'
      }
    ]
  },
  {
    id: 7,
    title: 'Bình thường hóa quan hệ Việt - Trung mở biên mậu',
    situation: 'Tháng 11/1991, cơ hội bình thường hóa quan hệ ngoại giao với Trung Quốc mở ra. Điều này hứa hẹn dòng chảy xuất khẩu nông sản bùng nổ, nhưng cũng mang lại áp lực hàng hóa giá rẻ Trung Quốc bóp nghẹt sản xuất nội địa.',
    choices: [
      {
        text: 'Quyết định bình thường hóa quan hệ toàn diện, ký hiệp định mậu dịch biên giới chính thức để thông thương hàng hóa song phương.',
        effects: { economy: 20, confidence: 15, adaptability: 25, solidarity: 10 },
        outcome: 'Khai thông thị trường biên mậu khổng lồ. Nông sản Việt Nam tìm được đầu ra lớn, công nghiệp nhẹ tiếp cận nguyên liệu sợi, hóa chất đầu vào giá rẻ.',
        lesson1991: 'Bài học 1991 (Ngoại giao kinh tế chủ động): Tận dụng cơ hội địa chính trị để mở cửa thị trường lớn, lấy lợi ích kinh tế quốc gia làm mục tiêu tối thượng.'
      },
      {
        text: 'Duy trì kiểm soát quân sự đóng cửa biên giới phía Bắc, cấm giao thương buôn bán để bảo hộ tuyệt đối hàng sản xuất trong nước khỏi cạnh tranh.',
        effects: { economy: -20, confidence: -10, adaptability: -20, solidarity: 15 },
        outcome: 'Bảo vệ được các xí nghiệp nội địa lạc hậu ngắn hạn, nhưng khiến nông sản ứ đọng, kinh tế vùng biên giới nghèo nàn và lỡ nhịp đà phát triển.',
        lesson1991: 'Bài học 1991 (Chống tự cô lập): Đóng cửa biên giới để trốn tránh cạnh tranh chỉ kéo dài sự lạc hậu công nghệ và kìm hãm khả năng thích ứng của doanh nghiệp.'
      },
      {
        text: 'Cho phép giao thương tiểu ngạch tự phát qua các lối mở biên giới mà không ký hiệp định chính thức để tránh ràng buộc đối ngoại.',
        effects: { economy: 10, confidence: 10, adaptability: 5, solidarity: 10 },
        outcome: 'Biên giới nhộn nhịp tự phát nhưng nạn buôn lậu và trốn thuế bùng nổ vượt tầm kiểm soát, gây hỗn loạn thị trường nội địa không có hàng rào chất lượng bảo vệ.',
        lesson1991: 'Bài học 1991 (Quản lý vĩ mô ngoại thương): Mở cửa phải đi đôi với luật pháp hóa và tăng cường năng lực kiểm soát của các cơ quan quản lý nhà nước.'
      }
    ]
  },
  {
    id: 8,
    title: 'Xuất khẩu nông sản và bài học xóa bỏ độc quyền lương thực',
    situation: 'Nhờ Khoán 10, nông nghiệp thặng dư lượng lớn lúa gạo. Tuy nhiên, các cơ quan thương mại trung ương lo sợ xuất khẩu tự do sẽ gây ra nạn đói cục bộ, đề xuất tiếp tục giữ độc quyền nhà nước thu mua lương thực theo giá chỉ định.',
    choices: [
      {
        text: 'Xóa bỏ độc quyền thu mua của trung ương, cho phép các doanh nghiệp tỉnh Đồng bằng sông Cửu Long tự do xuất khẩu trực tiếp sang thị trường mới.',
        effects: { economy: 25, confidence: 20, adaptability: 15, solidarity: 10 },
        outcome: 'Kim ngạch xuất khẩu bùng nổ, giá lúa tăng cao giúp nông dân nâng cao thu nhập rõ rệt, kích thích tinh thần sản xuất thâm canh gạo chất lượng.',
        lesson1991: 'Bài học 1991 (Giải phóng thị trường nông sản): Phân cấp quản lý ngoại thương và bãi bỏ các độc quyền phân phối hành chính giúp tối ưu hóa chuỗi giá trị nông nghiệp.'
      },
      {
        text: 'Giữ nguyên độc quyền thu mua xuất khẩu của Tổng công ty Lương thực Trung ương, ép giá thu mua thấp để bảo đảm an ninh dự trữ quốc gia.',
        effects: { economy: -15, confidence: -20, adaptability: -15, solidarity: 5 },
        outcome: 'Bảo đảm được kho lương dự trữ nhà nước đầy đặn, nhưng nông dân chán nản giảm diện tích gieo cấy vụ sau vì không thu hồi được chi phí sản xuất.',
        lesson1991: 'Bài học 1991 (Hài hòa lợi ích kinh tế): Không thể bảo đảm an ninh lương thực quốc gia bằng cách bóc lột lợi ích thiết thực của người sản xuất nông nghiệp.'
      },
      {
        text: 'Cho phép xuất khẩu tự do nhưng đánh thuế xuất khẩu gạo cực cao để thu ngân sách nhà nước bù đắp thâm hụt tài chính.',
        effects: { economy: 5, confidence: 10, adaptability: 5, solidarity: 10 },
        outcome: 'Tăng ngân sách nhà nước ngắn hạn, nhưng thuế cao khiến giá gạo xuất khẩu của ta mất sức cạnh tranh với gạo Thái Lan trên thị trường châu Á.',
        lesson1991: 'Bài học 1991 (Chính sách thuế nuôi dưỡng nguồn thu): Thuế xuất khẩu phải hợp lý để khuyến khích sản xuất trong nước vươn tầm quốc tế, nuôi dưỡng nguồn lưu lâu dài.'
      }
    ]
  },
  {
    id: 9,
    title: 'Thu hút dòng vốn FDI đầu tiên tại Khu chế xuất Tân Thuận',
    situation: 'Luật đầu tư nước ngoài sửa đổi được thông qua, nhưng hạ tầng điện nước của nước ta năm 1991 cực kỳ yếu kém. Một tập đoàn Đài Loan đề xuất thuê đầm lầy xây dựng Khu chế xuất Tân Thuận dệt may xuất khẩu đầu tiên tại TP.HCM.',
    choices: [
      {
        text: 'Cấp phép nhanh, áp dụng thí điểm cơ chế hành chính "Một cửa" để gỡ bỏ thủ tục rườm rà và tạo ưu đãi thuế vượt trội cho liên doanh.',
        effects: { economy: 25, confidence: 15, adaptability: 25, solidarity: 10 },
        outcome: 'Khai thông dòng vốn FDI lớn, biến đầm lầy Tân Thuận thành khu công nghiệp kiểu mẫu hoạt động hiệu quả, giải quyết việc làm cho hàng vạn lao động.',
        lesson1991: 'Bài học 1991 (Đón đầu ngoại lực phát triển): Cải cách hành chính đột phá và tạo cơ chế thông thoáng là thỏi nam châm thu hút dòng vốn ngoại lực đầu tư vào nước.'
      },
      {
        text: 'Yêu cầu đối tác nước ngoài phải tự bỏ vốn đầu tư nâng cấp toàn bộ hạ tầng điện lưới và đường giao thông của cả quận lân cận trước khi cấp phép.',
        effects: { economy: -20, confidence: -10, adaptability: -15, solidarity: 15 },
        outcome: 'Tránh được áp lực hạ tầng nhà nước ngắn hạn, nhưng khiến nhà đầu tư nản lòng chuyển vốn đầu tư sang nước khác, Việt Nam mất cơ hội vàng.',
        lesson1991: 'Bài học 1991 (Chia sẻ lợi ích hạ tầng): Cơ sở hạ tầng là trách nhiệm của nhà nước; ép nhà đầu tư gánh vác quá mức ban đầu sẽ làm mất đi sức hấp dẫn dòng vốn.'
      },
      {
        text: 'Chỉ cho phép đầu tư dưới hình thức liên doanh mà phía Việt Nam nắm giữ cổ phần chi phối tuyệt đối 51% để bảo vệ an ninh công nghiệp.',
        effects: { economy: -10, confidence: 10, adaptability: 10, solidarity: 15 },
        outcome: 'Nhiều nhà đầu tư lớn từ chối liên doanh vì lo ngại bất đồng quản trị điều hành, dòng vốn FDI đầu tư vào nước bị sụt giảm sâu.',
        lesson1991: 'Bài học 1991 (Chủ quyền kinh tế thực chất): Quyền tự chủ thực chất nằm ở trình độ quản lý, năng lực tiếp thu kỹ năng và luật pháp bảo vệ chứ không nằm ở tỷ lệ phần trăm sở hữu danh nghĩa.'
      }
    ]
  },
  {
    id: 10,
    title: 'Xóa bỏ bao cấp giá cả - Quyết sách "Một giá thị trường"',
    situation: 'Hàng hóa thiết yếu năm 1991 chịu cơ chế "hai giá" (giá phân phối bao cấp cho cán bộ công nhân viên và giá thị trường tự do), gây ra đầu cơ, buôn lậu và đục khoét kho dự trữ quốc gia. Có đề xuất xóa bỏ hoàn toàn giá bao cấp.',
    choices: [
      {
        text: 'Kiên quyết xóa bỏ cơ chế hai giá, áp dụng thống nhất một giá bán theo cung cầu thị trường tự do, bù chênh lệch trực tiếp vào lương tiền mặt cán bộ.',
        effects: { economy: 20, confidence: 15, adaptability: 25, solidarity: -15 },
        outcome: 'Chấm dứt hoàn toàn nạn xếp hàng mua lương thực bao cấp, hàng hóa lưu thông thông suốt trên cả nước, chấm dứt tình trạng găm hàng đầu cơ lậu.',
        lesson1991: 'Bài học 1991 (Áp dụng giá thị trường thống nhất): Xóa bỏ bao cấp giá cả giúp khai thông lưu chuyển hàng hóa thực chất và đẩy lùi tệ nạn tham nhũng phân phối.'
      },
      {
        text: 'Duy trì hệ thống hai giá để bảo đảm ổn định đời sống danh nghĩa của cán bộ nhà nước, áp dụng quân đội thắt chặt bắt giữ đầu cơ thị trường chợ đen.',
        effects: { economy: -25, confidence: -20, adaptability: -20, solidarity: 15 },
        outcome: 'Ngân sách nhà nước kiệt quệ vì bù giá chênh lệch giá, hàng hóa quốc doanh tiếp tục thất thoát lậu ra ngoài chợ đen, khan hiếm ngày càng trầm trọng.',
        lesson1991: 'Bài học 1991 (Tác hại của bao cấp giá cả): Dùng bao cấp giá chống lại quy luật thị trường tự nhiên chỉ gây ra sự méo mó phân phối và bóp nghẹt động lực sản xuất.'
      },
      {
        text: 'Áp dụng lộ trình tăng giá bao cấp từ từ từng năm một để người dân làm quen, duy trì các cửa hàng thương nghiệp nhà nước bù giá một phần.',
        effects: { economy: -5, confidence: 10, adaptability: 5, solidarity: 10 },
        outcome: 'Tránh được cú sốc chi phí sinh hoạt tức thì cho dân, nhưng kéo dài tình trạng thị trường méo mó, ngân sách tiếp tục rò rỉ làm chậm đà ổn định vĩ mô.',
        lesson1991: 'Bài học 1991 (Cải cách dũng cảm đúng thời điểm): Cải cách nửa vời, chắp vá cơ chế cũ và mới chỉ làm gia tăng tổng chi phí chuyển đổi của nền kinh tế.'
      }
    ]
  },
  {
    id: 11,
    title: 'Xóa bỏ tem phiếu - Bù giá vào lương',
    situation: 'Nhà nước xem xét việc bãi bỏ hoàn toàn việc cấp phát gạo, thịt, vải bằng tem phiếu bao cấp cho cán bộ công nhân viên nhà nước, thay thế hoàn toàn bằng tiền mặt tính trực tiếp vào tiền lương theo giá thị trường.',
    choices: [
      {
        text: 'Kiên quyết bãi bỏ toàn bộ tem phiếu và bù chênh lệch giá trực tiếp vào lương tiền mặt một lần duy nhất.',
        effects: { economy: 20, confidence: 10, adaptability: 25, solidarity: -15 },
        outcome: 'Cửa hàng mậu dịch quốc doanh đóng cửa, hàng hóa chuyển giao cho thị trường tự do, thương nghiệp phát triển mạnh mẽ mặc dù giá cả sinh hoạt có biến động ban đầu.',
        lesson1991: 'Bài học 1991 (Tiền tệ hóa tiền lương): Chuyển từ phân phối bằng hiện vật bao cấp sang quan hệ tiền tệ-hàng hóa giúp lưu chuyển thị trường thông suốt, triệt tiêu đặc quyền bao cấp.'
      },
      {
        text: 'Duy trì tem phiếu cho các mặt hàng lương thực tối thiểu (gạo, muối) và chỉ phát tiền mặt thay thế cho các nhu yếu phẩm phụ.',
        effects: { economy: -15, confidence: 5, adaptability: -15, solidarity: 10 },
        outcome: 'Lưu thông nội địa vẫn bị nghẽn ở phân khúc lương thực, ngân sách nhà nước tiếp tục gánh nợ bù lỗ vận chuyển và quản lý kho bãi cồng kềnh.',
        lesson1991: 'Bài học 1991 (Cải cách triệt để): Cải cách nửa vời giữ lại một phần cơ chế tem phiếu bao cấp chỉ kéo dài thời gian khủng hoảng và làm chậm đà giải phóng thị trường.'
      },
      {
        text: 'Chỉ xóa bỏ tem phiếu ở các thành phố lớn (Hà Nội, TP.HCM) còn các tỉnh thành miền núi nghèo vẫn giữ nguyên chế độ cấp phát.',
        effects: { economy: -10, confidence: -5, adaptability: -10, solidarity: 15 },
        outcome: 'Tạo ra sự bất bình đẳng vùng miền, tình trạng buôn lậu tem phiếu từ miền núi ngược về đồng bằng bùng phát phá vỡ kiểm soát phân phối.',
        lesson1991: 'Bài học 1991 (Thống nhất thị trường toàn quốc): Nền kinh tế thị trường đòi hỏi sự thống nhất thể chế, mọi giải pháp chia cắt địa giới chỉ kích thích đầu cơ.'
      }
    ]
  },
  {
    id: 12,
    title: 'Thống nhất tỷ giá và chống đô-la hóa',
    situation: 'Đầu thập niên 1990, lạm phát khiến đồng VND mất giá liên tục. Thị trường tồn tại ba tỷ giá song song: tỷ giá nhà nước ấn định, tỷ giá ngân hàng giao dịch và tỷ giá chợ đen. Đô-la Mỹ trở thành đồng tiền giao dịch ngầm chính.',
    choices: [
      {
        text: 'Bãi bỏ tỷ giá cố định cũ, điều chỉnh tỷ giá chính thức sát với tỷ giá chợ đen, đồng thời quy định mọi giao dịch trên đất nước phải niêm yết bằng VND.',
        effects: { economy: 25, confidence: 15, adaptability: 20, solidarity: -10 },
        outcome: 'Kiểm soát hiệu quả nạn đô-la hóa, ổn định giá trị tiền đồng, thu hút dòng USD chảy vào hệ thống ngân hàng chính thống.',
        lesson1991: 'Bài học 1991 (Sát cánh cùng tỷ giá thị trường): Thừa nhận tỷ giá thực tế dựa trên cung cầu ngoại tệ giúp khôi phục chủ quyền tiền tệ của Ngân hàng Nhà nước.'
      },
      {
        text: 'Sử dụng dự trữ ngoại hối ít ỏi để can thiệp giữ nguyên tỷ giá cố định giá thấp và hình sự hóa hành vi giao dịch bằng USD tự phát.',
        effects: { economy: -25, confidence: -20, adaptability: -20, solidarity: 5 },
        outcome: 'Dự trữ ngoại hối cạn kiệt nhanh chóng, USD khan hiếm đẩy tỷ giá chợ đen vọt lên cao hơn, hoạt động kinh tế chuyển hoàn toàn sang thanh toán lậu.',
        lesson1991: 'Bài học 1991 (Bản chất tỷ giá): Can thiệp tỷ giá bằng mệnh lệnh hành chính khi thiếu dự trữ ngoại tệ mạnh chỉ mang lại kết quả ngược và gây mất mát tài sản quốc gia.'
      },
      {
        text: 'Thả nổi hoàn toàn tỷ giá mà không đi kèm các biện pháp thắt chặt quản lý niêm yết tiền tệ hay kiểm soát lưu thông vàng.',
        effects: { economy: -10, confidence: -15, adaptability: 10, solidarity: -10 },
        outcome: 'Đồng VND mất giá không phanh, tâm lý hoang mang lan rộng, người dân ồ ạt rút tiền mua USD đẩy kinh tế vào vòng xoáy mất giá tiền tệ mới.',
        lesson1991: 'Bài học 1991 (Tự do hóa có quản lý): Thả nổi tỷ giá phải đi đôi với các chính sách vĩ mô thắt chặt tài khóa và củng cố độ tin cậy của đồng nội tệ.'
      }
    ]
  },
  {
    id: 13,
    title: 'Khai thông nguồn vốn ODA từ Nhật Bản',
    situation: 'Năm 1992, Nhật Bản đề xuất mở lại viện trợ phát triển chính thức (ODA) cho Việt Nam sau nhiều năm gián đoạn. Đây là cơ hội vàng để có nguồn vốn giá rẻ cải tạo hạ tầng, nhưng vấp phải sự phản đối từ các đối tác lớn chưa bình thường hóa quan hệ với ta.',
    choices: [
      {
        text: 'Chủ động đàm phán ký kết hiệp định hợp tác ODA với Nhật Bản, cam kết minh bạch hóa quản lý dự án để tạo tiền đề cho các định chế tài chính khác.',
        effects: { economy: 25, confidence: 15, adaptability: 25, solidarity: 10 },
        outcome: 'Khai thông nguồn vốn phát triển khổng lồ nâng cấp cầu đường, bến cảng, thúc đẩy tăng trưởng vượt bậc và mở đường cho WB, ADB nối lại viện trợ.',
        lesson1991: 'Bài học 1991 (Đa phương hóa đối ngoại): Lấy mục tiêu phát triển kinh tế làm cầu nối ngoại giao, chủ động phá thế bao vây cô lập từng bước chắc chắn.'
      },
      {
        text: 'Từ chối nhận ODA của Nhật Bản để khẳng định lập trường tự lực tự cường tuyệt đối, tự đầu tư hạ tầng bằng nguồn ngân sách tự có.',
        effects: { economy: -20, confidence: -10, adaptability: -20, solidarity: 15 },
        outcome: 'Nền kinh tế thiếu vốn nghiêm trọng, cơ sở hạ tầng giao thông điện nước ngày càng xuống cấp trầm trọng, kìm hãm hoàn toàn các dự án công nghiệp.',
        lesson1991: 'Bài học 1991 (Tận dụng ngoại lực): Tự lực tự cường không nghĩa là khước từ nguồn lực quốc tế hữu ích, mà phải biết biến ngoại lực thành chất xúc tác cho nội lực.'
      },
      {
        text: 'Đồng ý nhận vốn ODA nhưng từ chối các điều khoản giám sát đấu thầu quốc tế, yêu cầu giao toàn quyền chỉ định thầu cho doanh nghiệp quốc doanh trong nước.',
        effects: { economy: 5, confidence: 5, adaptability: -10, solidarity: 10 },
        outcome: 'Phía Nhật Bản trì hoãn giải ngân vốn, các dự án hạ tầng rơi vào bế tắc kéo dài nhiều năm do tranh chấp quy chuẩn xây dựng.',
        lesson1991: 'Bài học 1991 (Hội nhập luật chơi chung): Tiếp nhận dòng vốn quốc tế bắt buộc phải làm quen và tôn trọng các chuẩn mực quản lý văn minh của thế giới.'
      }
    ]
  },
  {
    id: 14,
    title: 'Ban hành hệ thống Luật Thuế mới thống nhất',
    situation: 'Trước năm 1991, nhà nước áp dụng các mức thuế suất và nghĩa vụ tài chính rất khác nhau giữa xí nghiệp quốc doanh (thu nộp lợi nhuận) và kinh tế tư nhân. Hệ thống này gây bất bình đẳng và thất thu ngân sách lớn.',
    choices: [
      {
        text: 'Ban hành bộ luật thuế mới thống nhất nghĩa vụ cho mọi thành phần kinh tế, giảm nhẹ thuế doanh nghiệp và tập trung vào kiểm soát chống thất thu.',
        effects: { economy: 20, confidence: 15, adaptability: 20, solidarity: 10 },
        outcome: 'Doanh thu thuế tăng trưởng vững chắc, tạo lập môi trường cạnh tranh lành mạnh thu hút doanh nghiệp tư nhân an tâm đầu tư mở rộng sản xuất.',
        lesson1991: 'Bài học 1991 (Bình đẳng thể chế thuế khóa): Thống nhất nghĩa vụ thuế cho cả công và tư là bước đi pháp lý bắt buộc để chuyển sang cơ chế thị trường lành mạnh.'
      },
      {
        text: 'Duy trì mức thuế ưu đãi nhẹ cho xí nghiệp quốc doanh để bảo vệ vai trò chủ đạo, và đánh thuế rất cao đối với kinh tế tư nhân để điều tiết thu nhập.',
        effects: { economy: -20, confidence: -25, adaptability: -15, solidarity: -10 },
        outcome: 'Kinh tế tư nhân tìm mọi cách lách luật, lập tài khoản ảo để trốn thuế, xí nghiệp quốc doanh tiếp tục hoạt động kém hiệu quả gây thất thoát ngân sách.',
        lesson1991: 'Bài học 1991 (Bảo hộ sai lầm): Ưu đãi thuế sai mục đích cho khu vực quốc doanh yếu kém và chèn ép tư nhân chỉ triệt tiêu nguồn thu lâu dài của quốc gia.'
      },
      {
        text: 'Bãi bỏ hầu hết các loại thuế doanh nghiệp trực thu để kích thích kinh tế cực nhanh, bù đắp ngân sách bằng cách tăng thuế tiêu dùng tối thiểu.',
        effects: { economy: 10, confidence: -15, adaptability: 5, solidarity: -20 },
        outcome: 'Kích thích doanh nghiệp thành lập ngắn hạn nhưng đẩy chi phí sinh hoạt của người nghèo lên cao, gây phản ứng xã hội gay gắt về công bằng.',
        lesson1991: 'Bài học 1991 (Hài hòa chính sách thuế): Cải cách thuế phải bảo đảm nguồn thu cơ bản cho ngân sách nhà nước đi đôi với nuôi dưỡng sức dân.'
      }
    ]
  },
  {
    id: 15,
    title: 'Khủng hoảng năng lượng và Dự án Đường dây 500kV Bắc - Nam',
    situation: 'Năm 1992, miền Bắc thừa điện từ nhà máy thủy điện Hòa Bình nhưng miền Nam thiếu điện nghiêm trọng, sản xuất bị cắt điện luân phiên 3-4 ngày một tuần. Thủ tướng Võ Văn Kiệt đề xuất xây dựng đường dây tải điện siêu cao áp 500kV Bắc - Nam xuyên rừng núi hiểm trở.',
    choices: [
      {
        text: 'Quyết tâm thực hiện dự án ngay lập tức, huy động toàn bộ nguồn lực lực lượng kỹ sư trong nước kết hợp nhập khẩu thiết bị tiên tiến, đặt mốc hoàn thành trong 2 năm.',
        effects: { economy: 25, confidence: 20, adaptability: 25, solidarity: 15 },
        outcome: 'Kỳ tích hoàn thành năm 1994 giải quyết triệt để nạn thiếu điện miền Nam, thống nhất hệ thống điện quốc gia, tạo động lực tăng trưởng kinh tế nhảy vọt.',
        lesson1991: 'Bài học 1991 (Tư duy đột phá hạ tầng): Dũng cảm ra quyết định xây dựng các công trình hạ tầng cốt lõi chính là đòn bẩy khai thông dòng chảy kinh tế liên vùng.'
      },
      {
        text: 'Trì hoãn dự án để chờ đợi vốn viện trợ ODA quốc tế và lập các báo cáo đánh giá kỹ thuật an toàn kéo dài của nước ngoài.',
        effects: { economy: -20, confidence: -10, adaptability: -15, solidarity: 10 },
        outcome: 'Miền Nam tiếp tục chìm trong cảnh thiếu điện, hàng trăm nhà máy dệt may, cơ khí dậm chân tại chỗ, mất đi thời cơ vàng đón dòng vốn FDI đầu tiên.',
        lesson1991: 'Bài học 1991 (Chớp thời cơ phát triển): Quá phụ thuộc vào ngoại lực tài trợ hoặc e ngại rủi ro kỹ thuật sẽ làm đình trệ các cơ hội phát triển sống còn của quốc gia.'
      },
      {
        text: 'Chỉ xây dựng các đường dây truyền tải ngắn liên tỉnh miền Nam và miền Bắc riêng rẽ để giảm chi phí đầu tư ban đầu.',
        effects: { economy: -5, confidence: 5, adaptability: -10, solidarity: 5 },
        outcome: 'Chi phí rẻ hơn trong ngắn hạn nhưng không giải quyết được bài toán thừa - thiếu điện mang tính cấu trúc quốc gia, miền Nam vẫn thiếu hụt năng lượng.',
        lesson1991: 'Bài học 1991 (Tầm nhìn quy hoạch vĩ mô): Các giải pháp chắp vá địa phương không thể thay thế cho tư duy quy hoạch hạ tầng thống nhất quy mô toàn quốc.'
      }
    ]
  },
  {
    id: 16,
    title: 'Nguồn cung sợi nhập khẩu cho ngành Dệt may',
    situation: 'Sau khi khối Đông Âu sụp đổ, ngành dệt may trong nước mất hoàn toàn nguồn cung sợi bông bao cấp. Nhiều xí nghiệp đứng trước nguy cơ dừng máy do cạn kiệt nguyên liệu dệt.',
    choices: [
      {
        text: 'Cho phép các xí nghiệp dệt may chủ động vay ngoại tệ thương mại để tự tìm nguồn nhập bông sợi từ các nước châu Á (Ấn Độ, Pakistan).',
        effects: { economy: 20, confidence: 10, adaptability: 20, solidarity: -10 },
        outcome: 'Các nhà máy khôi phục hoạt động nhanh chóng, nguyên liệu dồi dào mặc dù giá thành sản xuất tăng theo giá thị trường tự do.',
        lesson1991: 'Bài học 1991 (Chuyển đổi nguồn cung linh hoạt): Chủ động gỡ bỏ các rào cản hạn ngạch ngoại tệ giúp doanh nghiệp thích ứng nhanh trước đứt gãy cung ứng.'
      },
      {
        text: 'Yêu cầu xí nghiệp dệt may chờ đợi nhà nước thực hiện các hiệp định thương mại song phương cấp chính phủ với các đối tác truyền thống.',
        effects: { economy: -20, confidence: -15, adaptability: -20, solidarity: 10 },
        outcome: 'Nhiều nhà máy dệt may phải đóng cửa tạm thời, hàng ngàn công nhân mất thu nhập, dây chuyền máy móc xuống cấp do bỏ hoang lâu ngày.',
        lesson1991: 'Bài học 1991 (Tự chủ doanh nghiệp): Sự thụ động trông chờ vào các hiệp định bao cấp của chính phủ sẽ giết chết tính năng động sinh tồn của doanh nghiệp.'
      },
      {
        text: 'Bắt buộc các xí nghiệp dệt may chuyển sang sử dụng các nguồn nguyên liệu thô tự nhiên trong nước (tơ tằm, sợi đay) để tự cung tự cấp.',
        effects: { economy: -10, confidence: 5, adaptability: -10, solidarity: 15 },
        outcome: 'Giúp duy trì hoạt động nhỏ lẻ mang tính thủ công truyền thống, nhưng sản phẩm thô sơ không thể xuất khẩu hoặc tiêu thụ đại trà ở đô thị.',
        lesson1991: 'Bài học 1991 (Quy mô công nghiệp): Phát huy nội lực phải đi liền với hội nhập kỹ thuật hiện đại, không thể cưỡng ép nền công nghiệp quay về thời thủ công.'
      }
    ]
  },
  {
    id: 17,
    title: 'Giao quyền sử dụng đất lâu dài (Luật Đất đai 1993)',
    situation: 'Đất đai thuộc sở hữu toàn dân, nhưng cơ chế giao đất canh tác ngắn hạn của hợp tác xã trước đây khiến nông dân không muốn đầu tư cải tạo đất lâu dài vì sợ bị thu hồi ruộng bất kỳ lúc nào.',
    choices: [
      {
        text: 'Ban hành Luật Đất đai mới, trao cho hộ nông dân quyền sử dụng đất lâu dài và 5 quyền cốt lõi (chuyển đổi, chuyển nhượng, cho thuê, thừa kế, thế chấp).',
        effects: { economy: 25, confidence: 25, adaptability: 20, solidarity: 10 },
        outcome: 'Nông dân phấn khởi, ồ ạt đầu tư tiền của mua máy cày, cải tạo đê điều giúp năng suất lúa tăng vượt bậc, thị trường tín dụng nông thôn được khơi thông.',
        lesson1991: 'Bài học 1991 (Luật hóa lợi ích thiết thực): Quyền sở hữu/sử dụng hợp pháp lâu dài là điểm tựa pháp lý vững chắc kích hoạt lòng dân bỏ vốn đầu tư sản xuất.'
      },
      {
        text: 'Giữ nguyên cơ chế giao đất ngắn hạn hằng năm để bảo đảm công bằng bình quân xã hội, tránh phân hóa giàu nghèo nông thôn.',
        effects: { economy: -20, confidence: -15, adaptability: -20, solidarity: 15 },
        outcome: 'Ruộng đất bị khai thác kiệt quệ bạc màu vì nông dân cố thu hoạch nhanh ngắn hạn và bỏ bê thủy lợi lâu dài, nông nghiệp rơi vào suy thoái trì trệ.',
        lesson1991: 'Bài học 1991 (Hậu quả cào cào bình quân): Cố duy trì sự bình đẳng hình thức bằng cách triệt tiêu các quyền kinh tế dài hạn chỉ làm nghèo hóa nông thôn.'
      },
      {
        text: 'Cho phép chuyển nhượng đất đai tự do hoàn toàn không qua bất kỳ kiểm soát quy hoạch nông nghiệp hay quản lý hạn điền nào của nhà nước.',
        effects: { economy: 15, confidence: -10, adaptability: 10, solidarity: -25 },
        outcome: 'Xuất hiện làn sóng đầu cơ tích tụ đất đai hoang hóa nông thôn, nhiều nông dân nghèo mất tư liệu sản xuất phải bỏ xứ lên thành thị làm thuê.',
        lesson1991: 'Bài học 1991 (Quản lý thị trường đất đai): Tự do hóa quyền sử dụng đất phải đi đôi với sự kiểm soát quy hoạch và hàng rào bảo vệ người nông dân nghèo.'
      }
    ]
  },
  {
    id: 18,
    title: 'Nạn buôn lậu qua biên giới Tây Nam',
    situation: 'Đầu thập niên 1990, hàng tiêu dùng (xe máy, điện tử, vải vóc) nhập lậu từ biên giới Tây Nam tràn ngập thị trường miền Nam. Hàng lậu trốn thuế có giá cực rẻ bóp nghẹt các xí nghiệp sản xuất nội địa non trẻ của ta.',
    choices: [
      {
        text: 'Thành lập lực lượng liên ngành chống buôn lậu quốc gia, tăng cường kiểm soát cửa khẩu kết hợp giảm thuế nhập khẩu chính ngạch để khuyến khích thương mại hợp pháp.',
        effects: { economy: 20, confidence: 15, adaptability: 20, solidarity: 10 },
        outcome: 'Hạ nhiệt vấn nạn buôn lậu biên giới, thu hút các hộ kinh doanh chuyển sang khai báo hải quan chính ngạch, tăng nguồn thu thuế cho ngân sách.',
        lesson1991: 'Bài học 1991 (Chống lậu bằng kinh tế): Kết hợp kiểm soát hành chính nghiêm ngặt với hạ rào cản thuế chính ngạch để triệt tiêu chênh lệch giá lậu.'
      },
      {
        text: 'Đóng cửa hoàn toàn biên giới Tây Nam, áp dụng thiết quân luật cấm mọi hoạt động đi lại giao thương vùng biên để bảo vệ tuyệt đối hàng nội.',
        effects: { economy: -20, confidence: -15, adaptability: -15, solidarity: 5 },
        outcome: 'Kinh tế vùng biên giới rơi vào tê liệt nghèo đói, hàng lậu chuyển sang vận chuyển đường biển phức tạp hơn, thị trường khan hiếm hàng tiêu dùng trầm trọng.',
        lesson1991: 'Bài học 1991 (Tác hại ngăn sông cấm chợ): Đóng cửa hành chính cực đoan chỉ đẩy hoạt động thương mại vào bóng tối và bóp nghẹt đời sống nhân dân vùng biên.'
      },
      {
        text: 'Thả nổi biên giới để hàng hóa tự do tràn vào đáp ứng nhu cầu tiêu dùng của dân, chấp nhận các xí nghiệp sản xuất nội địa giải thể do cạnh tranh.',
        effects: { economy: -15, confidence: 10, adaptability: -10, solidarity: -20 },
        outcome: 'Hàng hóa rẻ dồi dào cho người dân đô thị nhưng các nhà máy sản xuất nội địa phá sản hàng loạt, gia tăng tỷ lệ thất nghiệp và mất cân đối ngoại tệ.',
        lesson1991: 'Bài học 1991 (Bảo vệ sản xuất hợp lý): Không thể buông trôi thị trường cho hàng lậu phi pháp phá hủy nền móng công nghiệp và trật tự tài khóa quốc gia.'
      }
    ]
  },
  {
    id: 19,
    title: 'Đẩy mạnh khai thác dầu khí mỏ Bạch Hổ',
    situation: 'Năm 1991, đất nước cạn kiệt ngoại tệ mạnh để nhập khẩu vật tư thiết yếu. Trữ lượng dầu khí tại mỏ Bạch Hổ (liên doanh Vietsovpetro) rất lớn nhưng hạ tầng khai thác biển sâu đòi hỏi đầu tư vốn và công nghệ cực lớn.',
    choices: [
      {
        text: 'Kiên quyết dồn toàn bộ nguồn lực ngoại tệ nhàn rỗi dự trữ để nhập khẩu giàn khoan công nghệ cao, đẩy nhanh tiến độ khai thác dầu thô xuất khẩu.',
        effects: { economy: 25, confidence: 15, adaptability: 20, solidarity: 10 },
        outcome: 'Sản lượng dầu thô bùng nổ vượt mốc triệu tấn, trở thành nguồn thu ngoại tệ chủ lực lớn nhất cứu nguy cho cán cân thanh toán quốc gia.',
        lesson1991: 'Bài học 1991 (Tập trung nguồn lực chiến lược): Lựa chọn đúng ngành mũi nhọn có khả năng tạo ra dòng tiền ngoại tệ nhanh nhất để giải vây khủng hoảng tài chính.'
      },
      {
        text: 'Khai thác nhỏ giọt mỏ Bạch Hổ bằng các thiết bị cũ sẵn có để tránh rủi ro tài chính, chờ đợi có đối tác phương Tây viện trợ vốn mới.',
        effects: { economy: -15, confidence: -10, adaptability: -15, solidarity: 5 },
        outcome: 'Cán cân ngoại tệ tiếp tục thâm hụt nghiêm trọng, đất nước không có tiền nhập khẩu phân bón, xăng dầu làm trì trệ cả nền sản xuất công nông nghiệp.',
        lesson1991: 'Bài học 1991 (Tính chủ động trong khai thác): Không thể trì hoãn cơ hội tự giải cứu bằng cách trông chờ thụ động vào các nguồn vốn chưa rõ ràng từ bên ngoài.'
      },
      {
        text: 'Bán đứt quyền khai thác mỏ Bạch Hổ cho các tập đoàn dầu khí nước ngoài để lấy một khoản tiền mặt ngoại tệ lớn ngay lập tức.',
        effects: { economy: -10, confidence: -25, adaptability: 5, solidarity: -20 },
        outcome: 'Có được ngoại tệ ngắn hạn để chi tiêu tạm thời nhưng mất đi nguồn thu tài nguyên chiến lược lâu dài của đất nước, gây bức xúc dư luận xã hội.',
        lesson1991: 'Bài học 1991 (Chủ quyền tài nguyên quốc gia): Thu hút đầu tư và hợp tác quốc tế phải trên tinh thần giữ vững quyền kiểm soát tài nguyên chiến lược của đất nước.'
      }
    ]
  },
  {
    id: 20,
    title: 'Giải quyết nạn đói giáp hạt miền Trung',
    situation: 'Năm 1991, một đợt thiên tai hạn hán nghiêm trọng gây mất mùa lớn tại các tỉnh miền Trung. Miền Nam lúa gạo dồi dào nhưng hệ thống đường sắt Bắc-Nam và xe tải quốc lộ của ta lúc này vô cùng lạc hậu, không thể vận chuyển gạo cứu đói kịp thời.',
    choices: [
      {
        text: 'Trưng dụng khẩn cấp đội tàu vận tải biển quân sự phối hợp với tổng công ty lương thực vận chuyển gạo miền Nam ra miền Trung theo đường biển.',
        effects: { economy: 15, confidence: 25, adaptability: 20, solidarity: 25 },
        outcome: 'Cứu đói kịp thời cho hàng vạn hộ dân miền Trung, ổn định lòng dân và thể hiện rõ tinh thần tương thân tương ái quốc gia trong cơn hoạn nạn.',
        lesson1991: 'Bài học 1991 (Linh hoạt điều phối vĩ mô): Khi hạ tầng giao thông bộ bị nghẽn, dũng cảm huy động mọi phương tiện vận tải sẵn có để bảo vệ sinh mạng nhân dân.'
      },
      {
        text: 'Để chính quyền các tỉnh miền Trung tự chủ động mua gạo cứu đói trên thị trường tự do tại địa phương bằng ngân sách tỉnh.',
        effects: { economy: -10, confidence: -20, adaptability: -10, solidarity: -15 },
        outcome: 'Tỉnh nghèo không có ngân sách, giá gạo miền Trung bị đẩy lên cao do đầu cơ tích trữ, làm gia tăng nguy cơ nạn đói lan rộng cục bộ.',
        lesson1991: 'Bài học 1991 (Vai trò điều tiết trung ương): Trong các tình huống đứt gãy cung ứng sinh tồn, sự can thiệp và điều phối vĩ mô của trung ương là không thể thay thế.'
      },
      {
        text: 'Kêu gọi viện trợ khẩn cấp từ các tổ chức nhân đạo quốc tế và chờ đợi các chuyến tàu cứu trợ lương thực cập cảng miền Trung.',
        effects: { economy: -5, confidence: -10, adaptability: -5, solidarity: 10 },
        outcome: 'Quá trình làm thủ tục quốc tế kéo dài nhiều tháng khiến cứu trợ không đến kịp thời, gây thiệt hại đau xót về người và gia tăng bất ổn xã hội.',
        lesson1991: 'Bài học 1991 (Nội lực cứu đói tự lực): Cứu đói khẩn cấp phải dựa vào nguồn lực nội bộ quốc gia trước hết, không thể để nhân dân chờ đợi viện trợ thụ động.'
      }
    ]
  },
  {
    id: 21,
    title: 'Cổ phần hóa doanh nghiệp nhà nước thí điểm',
    situation: 'Năm 1992, nhà nước bắt đầu chương trình thí điểm cổ phần hóa doanh nghiệp nhà nước (SOE) để giảm gánh nặng ngân sách. Tuy nhiên, ban giám đốc và công nhân xí nghiệp Cơ điện lạnh (REE) lo sợ mất biên chế nhà nước, e ngại tư nhân thâu tóm.',
    choices: [
      {
        text: 'Kiên trì cổ phần hóa: Cam kết dành 50% cổ phần ưu đãi giá rẻ bán lại cho cán bộ công nhân viên xí nghiệp, phần còn lại phát hành rộng rãi ra công chúng.',
        effects: { economy: 20, confidence: 15, adaptability: 25, solidarity: 15 },
        outcome: 'Cổ phần hóa REE thành công rực rỡ, khơi dậy tinh thần làm chủ thực sự của công nhân, giúp doanh nghiệp thu hút vốn tư nhân phát triển mạnh.',
        lesson1991: 'Bài học 1991 (Hài hòa lợi ích cổ phần hóa): Gắn chặt lợi ích của người lao động vào sự sinh tồn và phát triển của doanh nghiệp sau cổ phần hóa.'
      },
      {
        text: 'Dừng chương trình thí điểm để bảo toàn 100% sở hữu nhà nước tại xí nghiệp, tiếp tục duy trì chế độ biên chế cào bằng cũ.',
        effects: { economy: -15, confidence: -10, adaptability: -20, solidarity: 10 },
        outcome: 'Xí nghiệp tiếp tục hoạt động ì ạch do thiếu vốn đầu tư công nghệ mới, trở thành gánh nặng trợ cấp tài chính dài hạn cho ngân sách quốc gia.',
        lesson1991: 'Bài học 1991 (Đột phá sở hữu): Tránh né cải cách sở hữu nhà nước chỉ kéo dài sự trì trệ và hạn chế khả năng huy động vốn xã hội của doanh nghiệp.'
      },
      {
        text: 'Bán toàn bộ 100% doanh nghiệp nhà nước cho một tập đoàn tư nhân nước ngoài mà không kèm theo các cam kết bảo vệ việc làm cho công nhân cũ.',
        effects: { economy: 15, confidence: -25, adaptability: 10, solidarity: -25 },
        outcome: 'Ban giám đốc cũ và công nhân phản đối gay gắt, đình công kéo dài gây gián đoạn sản xuất và làm xáo trộn nghiêm trọng trật tự xã hội.',
        lesson1991: 'Bài học 1991 (Đổi mới có lộ trình nhân văn): Cải cách cơ cấu phải đặt sự ổn định sinh kế của người lao động làm trung tâm, không làm ồ ạt duy ý chí.'
      }
    ]
  },
  {
    id: 22,
    title: 'Tái cơ cấu các khoản nợ nước ngoài quá hạn',
    situation: 'Đầu năm 1992, Việt Nam gánh khoản nợ nước ngoài quá hạn khổng lồ từ các chủ nợ phương Tây (thành viên Câu lạc bộ London và Paris). Việc chưa thanh toán nợ cũ khiến nước ta bị cấm tiếp cận hầu hết các nguồn vốn quốc tế mới.',
    choices: [
      {
        text: 'Chủ động cử phái đoàn tài chính đàm phán trực tiếp với các chủ nợ, cam kết lộ trình trả nợ thiện chí dựa trên sản lượng xuất khẩu dầu thô và nông sản.',
        effects: { economy: 15, confidence: 20, adaptability: 25, solidarity: 10 },
        outcome: 'Đạt được thỏa thuận khoanh nợ, giảm nợ lên tới 50%, mở đường cho việc khôi phục hoàn toàn quan hệ tài chính quốc tế và các dòng vốn FDI.',
        lesson1991: 'Bài học 1991 (Chủ động ứng xử nợ quốc tế): Thiện chí đàm phán và minh bạch hóa năng lực tài chính quốc gia là chìa khóa tháo gỡ phong tỏa tài chính.'
      },
      {
        text: 'Tuyên bố đơn phương quỵt nợ hoặc từ chối đàm phán với lý do đây là các khoản nợ của chính quyền cũ hoặc do hoàn cảnh khủng hoảng.',
        effects: { economy: -25, confidence: -20, adaptability: -20, solidarity: -5 },
        outcome: 'Các tài sản xuất khẩu của Việt Nam ở nước ngoài bị đe dọa tịch thu, đất nước tiếp tục bị cấm vận tài chính chặt chẽ, không thể tiếp cận ODA.',
        lesson1991: 'Bài học 1991 (Tín nhiệm quốc gia): Trốn tránh nghĩa vụ nợ quốc tế chỉ làm cô lập nền kinh tế và hủy hoại hoàn toàn uy tín quốc gia trên trường quốc tế.'
      },
      {
        text: 'Chấp nhận trả nợ ngay lập tức bằng mọi giá bằng cách vắt kiệt nguồn dự trữ ngoại hối quốc gia và cắt giảm toàn bộ ngân sách y tế, giáo dục.',
        effects: { economy: -20, confidence: -25, adaptability: -10, solidarity: -25 },
        outcome: 'Thanh toán được nợ ngắn hạn nhưng đẩy đời sống nhân dân vào cảnh khốn cùng, gây suy sụp hệ thống an sinh xã hội cơ bản.',
        lesson1991: 'Bài học 1991 (Hài hòa tài khóa): Trả nợ quốc tế phải đi đôi với bảo đảm sức chịu đựng tối thiểu của nền kinh tế và cuộc sống nhân dân.'
      }
    ]
  },
  {
    id: 23,
    title: 'Phát triển xuất khẩu cà phê Tây Nguyên',
    situation: 'Vùng Tây Nguyên có tiềm năng trồng cà phê Robusta rất lớn để xuất khẩu thu ngoại tệ. Tuy nhiên, khâu xuất khẩu đang bị độc quyền bởi một số ít tổng công ty nhà nước ở trung ương, ép giá mua thô của nông dân rất thấp.',
    choices: [
      {
        text: 'Bãi bỏ độc quyền xuất khẩu, cho phép các công ty tỉnh và hộ gia đình liên kết trực tiếp xuất khẩu và tự quyết định giá thu mua theo thị trường.',
        effects: { economy: 20, confidence: 20, adaptability: 20, solidarity: 10 },
        outcome: 'Diện tích trồng cà phê bùng nổ, đời sống nông dân Tây Nguyên thay đổi nhanh chóng, Việt Nam nhanh chóng vươn lên top các nước xuất khẩu cà phê thế giới.',
        lesson1991: 'Bài học 1991 (Giải phóng chuỗi giá trị): Xóa bỏ trung gian hành chính độc quyền giúp chia sẻ lợi ích thực chất cho người sản xuất trực tiếp.'
      },
      {
        text: 'Duy trì độc quyền xuất khẩu của nhà nước để bảo đảm thu trọn vẹn ngoại tệ cho ngân sách, áp dụng khung giá trần thu mua thô cố định.',
        effects: { economy: -15, confidence: -15, adaptability: -15, solidarity: 5 },
        outcome: 'Nông dân chán nản bỏ bê vườn cà phê, chuyển sang trồng ngô sắn tự cung tự cấp, sản lượng cà phê xuất khẩu sụt giảm nghiêm trọng.',
        lesson1991: 'Bài học 1991 (Động lực kinh tế): Không thể thúc đẩy nông nghiệp phát triển bằng các biện pháp ép giá trái quy luật cung cầu kinh tế thị trường.'
      },
      {
        text: 'Cho phép tư nhân xuất khẩu tự do nhưng bắt buộc phải bán lại toàn bộ ngoại tệ thu được cho ngân hàng nhà nước theo tỷ giá cố định thấp.',
        effects: { economy: 5, confidence: -10, adaptability: 5, solidarity: -10 },
        outcome: 'Doanh nghiệp xuất khẩu cà phê tìm cách khai báo giá thấp để giữ ngoại tệ ở nước ngoài, gây thất thoát dòng vốn đầu tư tái sản xuất.',
        lesson1991: 'Bài học 1991 (Đồng bộ tỷ giá): Chính sách ngoại hối áp đặt khiên cưỡng chỉ kích thích doanh nghiệp che giấu doanh thu và trốn thuế.'
      }
    ]
  },
  {
    id: 24,
    title: 'Cơn sốt nóng xi măng năm 1995',
    situation: 'Năm 1995, làn sóng xây dựng đô thị bùng nổ mạnh mẽ. Cung không đáp ứng cầu dẫn đến cơn sốt giá xi măng tăng vọt 100% trong vài tuần, đe dọa làm đình trệ toàn bộ các dự án xây dựng hạ tầng quốc gia.',
    choices: [
      {
        text: 'Nhanh chóng cấp phép nhập khẩu clinker bổ sung, giảm thuế nhập khẩu xi măng ngắn hạn kết hợp thanh tra xử phạt các đầu mối găm hàng nâng giá.',
        effects: { economy: 20, confidence: 15, adaptability: 20, solidarity: 10 },
        outcome: 'Nguồn cung được giải tỏa nhanh chóng, ổn định lại mặt bằng giá vật liệu xây dựng, bảo đảm tiến độ các công trình hạ tầng trọng điểm.',
        lesson1991: 'Bài học 1991 (Điều tiết cung cầu vĩ mô): Dùng các biện pháp kinh tế (nhập khẩu bổ sung, giảm thuế) để giải quyết gốc rễ mất cân đối cung cầu.'
      },
      {
        text: 'Áp đặt giá trần hành chính cố định cho xi măng và cấm hoàn toàn việc vận chuyển xi măng ra khỏi địa bàn tỉnh sản xuất.',
        effects: { economy: -20, confidence: -15, adaptability: -20, solidarity: -10 },
        outcome: 'Xi măng biến mất khỏi thị trường chính ngạch, chảy hoàn toàn vào chợ đen với giá cao gấp 3 lần, công trình nhà nước bị tê liệt hoàn toàn.',
        lesson1991: 'Bài học 1991 (Hiệu quả lệnh hành chính): Ép giá hành chính và chia cắt thị trường khi thiếu nguồn cung chỉ làm trầm trọng thêm tình trạng khan hiếm.'
      },
      {
        text: 'Bỏ mặc cho thị trường tự điều tiết hoàn toàn giá cả mà không có bất kỳ can thiệp điều phối nguồn cung hay giảm thuế nhập khẩu nào.',
        effects: { economy: 5, confidence: -15, adaptability: 5, solidarity: -20 },
        outcome: 'Giá xi măng tiếp tục leo thang, chi phí xây dựng tăng vọt đẩy nhiều dự án hạ tầng nhà nước vào cảnh cạn kiệt vốn phải dừng thi công.',
        lesson1991: 'Bài học 1991 (Vai trò kiến tạo vĩ mô): Thị trường tự do cần sự giám sát định hướng vĩ mô của nhà nước để ngăn chặn các cơn sốt đầu cơ hủy hoại hạ tầng.'
      }
    ]
  },
  {
    id: 25,
    title: 'Thu hút dòng kiều hối từ nước ngoài',
    situation: 'Đầu thập niên 1990, kiều bào nước ngoài có nhu cầu gửi lượng lớn ngoại tệ về hỗ trợ người thân và đầu tư sản xuất. Tuy nhiên, quy định cũ coi việc nhận ngoại tệ từ nước ngoài là hoạt động phi pháp hoặc bị đánh thuế cực cao.',
    choices: [
      {
        text: 'Hợp pháp hóa việc nhận kiều hối, bãi bỏ thuế thu nhập đối với kiều hối gửi về nước và cho phép kiều bào tự do mở tài khoản ngoại tệ gửi ngân hàng.',
        effects: { economy: 25, confidence: 20, adaptability: 20, solidarity: 25 },
        outcome: 'Dòng kiều hối chảy về nước tăng vọt lên hàng tỷ USD mỗi năm, trở thành nguồn vốn quan trọng thúc đẩy kinh tế hộ gia đình và sản xuất nhỏ.',
        lesson1991: 'Bài học 1991 (Khơi thông nội lực dân tộc): Coi kiều hối là nguồn lực quý giá của đất nước, tạo hành lang thông thoáng để dòng vốn chảy về xây dựng quê hương.'
      },
      {
        text: 'Tiếp tục kiểm soát chặt chẽ, bắt buộc kiều hối phải chuyển đổi 100% sang VND tại ngân hàng nhà nước với tỷ giá thấp hơn thị trường.',
        effects: { economy: -15, confidence: -20, adaptability: -15, solidarity: -10 },
        outcome: 'Kiều hối chuyển hướng đi lậu qua các kênh ngầm phi pháp hoặc chuyển sang cất trữ vàng ở nước ngoài, nhà nước hoàn toàn thất thu ngoại tệ.',
        lesson1991: 'Bài học 1991 (Chính sách tỷ giá kiều hối): Ép buộc quy đổi tỷ giá bất lợi chỉ đẩy dòng tiền lánh dòng vào các kênh chợ đen mất kiểm soát.'
      },
      {
        text: 'Cấm hoàn toàn việc gửi ngoại tệ từ nước ngoài về nước để ngăn chặn nguy cơ đô-la hóa nền kinh tế từ bên ngoài.',
        effects: { economy: -25, confidence: -25, adaptability: -20, solidarity: -25 },
        outcome: 'Đời sống của hàng triệu hộ gia đình nghèo bị ảnh hưởng nghiêm trọng, gây rạn nứt lòng tin của kiều bào đối với chính sách hòa hợp dân tộc.',
        lesson1991: 'Bài học 1991 (Tự do hóa tài chính cá nhân): Đóng cửa dòng vốn cá nhân hợp pháp chỉ làm nghèo hóa nền kinh tế và triệt tiêu một nguồn lực phát triển lớn.'
      }
    ]
  },
  {
    id: 26,
    title: 'Cấp phép thành lập các Ngân hàng TMCP đầu tiên',
    situation: 'Năm 1991-1992, hệ thống ngân hàng nhà nước quá tải và không thể đáp ứng nhu cầu vay vốn phát triển cực nhanh của kinh tế tư nhân. Xuất hiện đề xuất cấp phép cho các ngân hàng thương mại cổ phần tư nhân đầu tiên.',
    choices: [
      {
        text: 'Cấp phép thí điểm thành lập các Ngân hàng TMCP tư nhân, ban hành quy chế giám sát tỷ lệ an toàn vốn nghiêm ngặt của Ngân hàng Trung ương.',
        effects: { economy: 25, confidence: 15, adaptability: 25, solidarity: 10 },
        outcome: 'Sự ra đời của VPBank, ACB, Techcombank tạo ra làn sóng khơi thông vốn hiệu quả, đáp ứng nhu cầu tín dụng năng động của thị trường.',
        lesson1991: 'Bài học 1991 (Hiện đại hóa hệ thống tài chính): Xây dựng hệ thống ngân hàng hai cấp giúp tách biệt quản lý vĩ mô của nhà nước và kinh doanh vốn thương mại.'
      },
      {
        text: 'Giữ nguyên độc quyền cung cấp tín dụng của các ngân hàng thương mại nhà nước để bảo đảm kiểm soát tuyệt đối dòng tiền quốc gia.',
        effects: { economy: -20, confidence: -15, adaptability: -20, solidarity: 10 },
        outcome: 'Khu vực kinh tế tư nhân tiếp tục đói vốn nghiêm trọng, buộc phải tìm đến các tín dụng đen lãi suất cắt cổ, cản trở đà tăng trưởng chung.',
        lesson1991: 'Bài học 1991 (Đa dạng hóa định chế tài chính): Độc quyền ngân hàng nhà nước kéo dài chỉ cản trở hiệu quả phân bổ vốn xã hội.'
      },
      {
        text: 'Cấp phép ồ ạt cho tư nhân lập ngân hàng tự do mà không kèm theo các quy định kiểm toán độc lập hay tỷ lệ dự trữ bắt buộc tối thiểu.',
        effects: { economy: -15, confidence: -30, adaptability: 10, solidarity: -20 },
        outcome: 'Xuất hiện tình trạng chủ ngân hàng tự cho công ty sân sau vay nợ xấu, dẫn đến nguy cơ đổ vỡ hệ thống tài chính domino cực kỳ nguy hiểm.',
        lesson1991: 'Bài học 1991 (Giám sát tài chính vĩ mô): Tự do hóa dịch vụ tài chính bắt buộc phải đi đôi với sự kiểm soát chất lượng tín dụng chặt chẽ của Ngân hàng Trung ương.'
      }
    ]
  },
  {
    id: 27,
    title: 'Nhập khẩu phân bón Urea cứu vãn vụ mùa',
    situation: 'Năm 1991, phân bón Urea nhập khẩu từ khối Đông Âu bị cắt đứt đột ngột. Giá phân bón chợ đen tăng vọt 300%, nông dân miền Tây e ngại không dám xuống giống vụ Đông Xuân do sợ thua lỗ chi phí đầu vào.',
    choices: [
      {
        text: 'Khẩn cấp xuất kho dự trữ ngoại tệ nhà nước, giao cho 3 công ty ngoại thương đầu mối trực tiếp đàm phán nhập phân bón số lượng lớn từ khu vực Trung Đông.',
        effects: { economy: 20, confidence: 15, adaptability: 20, solidarity: 10 },
        outcome: 'Nguồn cung phân bón Urea ổn định trở lại, giá phân giảm sâu giúp nông dân phấn khởi xuống giống đúng thời vụ, bảo đảm thắng lợi vụ mùa.',
        lesson1991: 'Bài học 1991 (Phản ứng nhanh vĩ mô): Khi đứt gãy vật tư nông nghiệp cốt lõi, nhà nước phải chủ động dùng ngoại tệ can thiệp kịp thời bảo vệ sức sản xuất của dân.'
      },
      {
        text: 'Kêu gọi nông dân chuyển hoàn toàn sang tự sản xuất phân bón hữu cơ tại chỗ để khẳng định tinh thần tự lực cánh sinh trong nông nghiệp.',
        effects: { economy: -15, confidence: 5, adaptability: -10, solidarity: 15 },
        outcome: 'Năng suất nông nghiệp giảm mạnh 40% do thiếu đạm vô cơ, đất nước rơi vào tình cảnh khan hiếm lương thực đô thị trầm trọng.',
        lesson1991: 'Bài học 1991 (Tôn trọng tiến bộ kỹ thuật): Tự lực cánh sinh phải dựa trên cơ sở khoa học thực tiễn, không thể áp dụng duy ý chí thay thế vật tư công nghiệp bằng thủ công.'
      },
      {
        text: 'Cấm hoàn toàn việc mua bán phân bón tự do để kiểm soát giá trần hành chính bảo vệ nông dân.',
        effects: { economy: -20, confidence: -15, adaptability: -15, solidarity: 5 },
        outcome: 'Phân bón biến mất khỏi thị trường chính ngạch, chảy hoàn toàn vào chợ đen với giá đắt đỏ hơn, nông dân không thể tiếp cận nguồn cung.',
        lesson1991: 'Bài học 1991 (Quy luật cung cầu): Ép giá hành chính khi nguồn cung thiếu hụt chỉ kích thích đầu cơ tích trữ và bóp nghẹt lưu thông.'
      }
    ]
  },
  {
    id: 28,
    title: 'Quản lý chất lượng vật tư nông nghiệp',
    situation: 'Thị trường phân bón và thuốc trừ sâu tự do phát triển nhanh sau Khoán 10. Do thiếu kiểm soát, nạn phân bón giả trộn đất cát tràn lan ở miền Tây, làm hàng vạn hộ nông dân mất trắng cả cánh đồng lúa, gây phẫn nộ xã hội.',
    choices: [
      {
        text: 'Ban hành pháp lệnh quản lý chất lượng vật tư nông nghiệp, quy định chế tài hình sự nghiêm khắc với hành vi làm giả chất lượng nông nghiệp.',
        effects: { economy: 15, confidence: 20, adaptability: 15, solidarity: 15 },
        outcome: 'Chấn chỉnh lại trật tự thị trường nông nghiệp, bảo vệ người nông dân sản xuất chân chính, khôi phục niềm tin vào thị trường tự do.',
        lesson1991: 'Bài học 1991 (Bảo vệ người sản xuất): Cơ chế thị trường chỉ phát huy hiệu quả khi đi kèm các định chế luật pháp bảo vệ quyền lợi hợp pháp của người dân.'
      },
      {
        text: 'Đóng cửa toàn bộ hệ thống đại lý vật tư tư nhân, giao độc quyền cung cấp phân bón lại cho các hợp tác xã nhà nước quản lý.',
        effects: { economy: -15, confidence: -10, adaptability: -20, solidarity: 10 },
        outcome: 'Hợp tác xã không đủ năng lực cung ứng, nông dân thiếu phân bón canh tác trầm trọng do quy trình phê duyệt hành chính xin-cho rườm rà.',
        lesson1991: 'Bài học 1991 (Tránh tả khuynh cực đoan): Không thể giải quyết khuyết tật của thị trường bằng cách quay lại độc quyền bao cấp bao trùm bóp nghẹt lưu thông.'
      },
      {
        text: 'Xem đây là rủi ro tranh chấp dân sự tự thỏa thuận giữa nông dân và đại lý bán hàng, nhà nước không can thiệp hành chính.',
        effects: { economy: -10, confidence: -25, adaptability: -5, solidarity: -20 },
        outcome: 'Nông dân biểu tình phản đối đại lý, tình trạng mất an ninh trật tự nông thôn lan rộng, chất lượng nông sản xuất khẩu giảm sút nghiêm trọng.',
        lesson1991: 'Bài học 1991 (Vai trò giám sát nhà nước): Nhà nước không thể buông lơi vai trò quản lý chất lượng hàng hóa thiết yếu liên quan trực tiếp đến sinh kế của nhân dân.'
      }
    ]
  },
  {
    id: 29,
    title: 'Nâng cấp cơ sở hạ tầng các cảng biển lớn',
    situation: 'Năm 1993, kim ngạch xuất nhập khẩu của Việt Nam tăng vọt. Tuy nhiên, cảng Hải Phòng và cảng Sài Gòn vẫn dùng công nghệ bốc dỡ thủ công cũ kỹ, luồng lạch bị bồi lắng khiến tàu container lớn không thể cập cảng, hàng hóa bị ứ đọng kéo dài.',
    choices: [
      {
        text: 'Ưu tiên bố trí ngân sách kết hợp vay vốn ODA quốc tế nâng cấp đồng bộ cầu cảng, mua sắm cần cẩu container hiện đại và nạo vét luồng lạch.',
        effects: { economy: 25, confidence: 15, adaptability: 20, solidarity: 10 },
        outcome: 'Năng lực thông quan hàng hóa tăng gấp 5 lần, giảm chi phí logistic xuất khẩu giúp hàng hóa Việt Nam tăng sức cạnh tranh mạnh mẽ trên toàn cầu.',
        lesson1991: 'Bài học 1991 (Khai thông huyết mạch hạ tầng): Cải tạo cảng biển cốt lõi là bước đi chiến lược bắt buộc để nền kinh tế hướng ra xuất khẩu và hội nhập sâu.'
      },
      {
        text: 'Yêu cầu các chủ tàu nước ngoài tự mang theo thiết bị bốc dỡ riêng khi cập cảng Việt Nam để tiết kiệm chi phí đầu tư công cho nhà nước.',
        effects: { economy: -15, confidence: -10, adaptability: -15, solidarity: 5 },
        outcome: 'Các hãng tàu container lớn từ chối cập cảng Việt Nam, hàng hóa phải trung chuyển qua Singapore làm tăng chi phí và thời gian giao hàng gấp đôi.',
        lesson1991: 'Bài học 1991 (Trách nhiệm đầu tư công): Nhà nước phải chịu trách nhiệm xây dựng hạ tầng kỹ thuật cơ bản để tạo sân chơi hấp dẫn cho giao thương quốc tế.'
      },
      {
        text: 'Chỉ tập trung sửa chữa nhỏ thủ công cầu cảng hiện có và tuyển thêm lao động bốc xếp thủ công để giải quyết việc làm cho người nghèo.',
        effects: { economy: -5, confidence: 10, adaptability: -10, solidarity: 15 },
        outcome: 'Giúp giải quyết việc làm ngắn hạn tại cảng nhưng không thể đáp ứng được xu thế container hóa toàn cầu, cảng biển rơi vào tình trạng quá tải nghiêm trọng.',
        lesson1991: 'Bài học 1991 (Công nghệ hóa hạ tầng): Giải quyết việc làm không nghĩa là duy trì phương thức sản xuất lạc hậu thủ công cản trở đà hiện đại hóa quốc gia.'
      }
    ]
  },
  {
    id: 30,
    title: 'Hỗ trợ các thương hiệu tiêu dùng nội địa đầu tiên',
    situation: 'Khi mở cửa kinh tế, các tập đoàn đa quốc gia đổ bộ với nguồn ngân sách quảng cáo khổng lồ. Các thương hiệu nội địa non trẻ (như kem đánh răng Dạ Lan, xà bông Cô Ba) đứng trước nguy cơ bị thâu tóm hoặc bóp nghẹt ngay trên sân nhà.',
    choices: [
      {
        text: 'Hỗ trợ doanh nghiệp nội tiếp cận nguồn tín dụng ưu đãi nâng cấp công nghệ sản xuất, kết hợp hỗ trợ truyền thông quảng bá thương hiệu Việt.',
        effects: { economy: 20, confidence: 20, adaptability: 15, solidarity: 25 },
        outcome: 'Các thương hiệu Dạ Lan, Cô Ba đứng vững trên thị trường, giữ vững thị phần nông thôn và khơi dậy niềm tự hào hàng Việt của người tiêu dùng.',
        lesson1991: 'Bài học 1991 (Bảo tồn năng lực nội tại): Mở cửa hội nhập đi đôi với việc nâng đỡ, tiếp sức chủ động cho các thương hiệu quốc gia tự lớn lên.'
      },
      {
        text: 'Khuyến khích các thương hiệu Việt bán đứt toàn bộ cổ phần và tên thương hiệu cho tập đoàn đa quốc gia để lấy tiền mặt tái đầu tư ngành khác.',
        effects: { economy: 10, confidence: -15, adaptability: 5, solidarity: -15 },
        outcome: 'Các thương hiệu nội địa bị tập đoàn nước ngoài xóa bỏ sau khi mua lại để dọn đường cho sản phẩm ngoại độc quyền, gây tiếc nuối xã hội.',
        lesson1991: 'Bài học 1991 (Giữ gìn thương hiệu nội): Mất đi thương hiệu quốc gia đồng nghĩa với việc mất đi năng lực cạnh tranh cốt lõi lâu dài trên thị trường tiêu dùng.'
      },
      {
        text: 'Ban hành lệnh cấm tuyệt đối các sản phẩm tiêu dùng ngoại nhập khẩu để bảo hộ độc quyền tuyệt đối cho các doanh nghiệp trong nước.',
        effects: { economy: -20, confidence: -10, adaptability: -20, solidarity: 10 },
        outcome: 'Sản phẩm nội địa trì trệ không chịu đổi mới chất lượng do thiếu cạnh tranh, nạn buôn lậu hàng tiêu dùng ngoại qua biên giới lại bùng phát.',
        lesson1991: 'Bài học 1991 (Cạnh tranh thúc đẩy phát triển): Bảo hộ cực đoan triệt tiêu động lực cải tiến chất lượng và đẩy người tiêu dùng vào thế chịu thiệt thòi.'
      }
    ]
  },
  {
    id: 31,
    title: 'Ổn định giá trị đồng tiền Việt Nam (VND)',
    situation: 'Tâm lý người dân sau các đợt đổi tiền cũ vẫn còn e ngại giữ tiền đồng VND, thích tích trữ vàng và USD. Điều này làm cản trở Ngân hàng Nhà nước kiểm soát dòng tiền vĩ mô.',
    choices: [
      {
        text: 'Cam kết duy trì giá trị VND bằng cách kiểm soát chặt chẽ lượng tiền in thêm, thực hiện chính sách bán vàng miếng bình ổn thị trường để củng cố giá trị tiền đồng.',
        effects: { economy: 15, confidence: 25, adaptability: 20, solidarity: 10 },
        outcome: 'Giá trị tiền VND dần ổn định, người dân bắt đầu tin tưởng gửi tiền tiết kiệm bằng VND vào hệ thống ngân hàng nhà nước.',
        lesson1991: 'Bài học 1991 (Khôi phục uy tín nội tệ): Sức mạnh của đồng nội tệ nằm ở kỷ luật phát hành tiền tệ và sự minh bạch trong chính sách dự trữ quốc gia.'
      },
      {
        text: 'Ban hành lệnh trưng thu toàn bộ số vàng tích trữ của cá nhân và cấm tuyệt đối việc tàng trữ, mua bán vàng miếng trong dân.',
        effects: { economy: -25, confidence: -30, adaptability: -15, solidarity: -20 },
        outcome: 'Tâm lý hoảng loạn lan rộng, người dân tìm mọi cách giấu vàng và chuyển tài sản ra nước ngoài, gây suy sụp lòng tin tài chính trầm trọng.',
        lesson1991: 'Bài học 1991 (Tránh biện pháp cực đoan): Lòng tin vào đồng tiền phải được xây dựng bằng các công cụ kinh tế lành mạnh, không thể áp đặt cưỡng chế.'
      },
      {
        text: 'Tiếp tục thả nổi tự do cho thị trường vàng biến động tự phát mà không có bất kỳ can thiệp bình ổn hay dự trữ vàng quốc gia nào.',
        effects: { economy: -5, confidence: -15, adaptability: 5, solidarity: -5 },
        outcome: 'Giá vàng biến động thất thường gây tâm lý đầu cơ tích trữ, làm gia tăng sự bất ổn về giá cả hàng hóa tiêu dùng vĩ mô khác.',
        lesson1991: 'Bài học 1991 (Vai trò điều tiết vàng): Vàng ảnh hưởng trực tiếp đến tâm lý tiền tệ vĩ mô, nhà nước cần có năng lực điều tiết dự trữ vàng khi cần.'
      }
    ]
  },
  {
    id: 32,
    title: 'Đề án xây dựng Thị trường chứng khoán Việt Nam',
    situation: 'Năm 1993, nền kinh tế phát triển nhanh nhưng các doanh nghiệp thiếu kênh huy động vốn trung và dài hạn (hầu hết phụ thuộc vào vốn vay ngắn hạn ngân hàng). Xuất hiện đề xuất chuẩn bị đề án xây dựng sàn giao dịch chứng khoán đầu tiên.',
    choices: [
      {
        text: 'Thành lập Ban chuẩn bị thị trường chứng khoán, cử cán bộ đi học tập mô hình quốc tế và xây dựng hệ thống quy chế pháp lý công bố thông tin chặt chẽ.',
        effects: { economy: 20, confidence: 15, adaptability: 25, solidarity: 10 },
        outcome: 'Đặt nền móng pháp lý vững chắc cho sự ra đời của thị trường chứng khoán sau này, mở ra kênh huy động vốn dài hạn văn minh cho đất nước.',
        lesson1991: 'Bài học 1991 (Chuẩn bị thể chế bài bản): Tiếp cận các công cụ tài chính hiện đại đòi hỏi sự chuẩn bị kỹ lưỡng về hạ tầng kỹ thuật và pháp lý.'
      },
      {
        text: 'Từ chối thành lập thị trường chứng khoán vì lo ngại đây là công cụ đầu cơ tư bản chủ nghĩa không phù hợp định hướng xã hội chủ nghĩa.',
        effects: { economy: -20, confidence: -10, adaptability: -20, solidarity: 5 },
        outcome: 'Doanh nghiệp Việt Nam tiếp tục khát vốn dài hạn để mở rộng quy mô sản xuất lớn, phụ thuộc hoàn toàn vào nguồn tín dụng ngân hàng đắt đỏ.',
        lesson1991: 'Bài học 1991 (Đổi mới tư duy tài chính): Mạnh dạn tiếp thu các công cụ quản trị tài chính tiên tiến của thế giới để phục vụ cho sự thịnh vượng đất nước.'
      },
      {
        text: 'Cấp phép thành lập sàn giao dịch chứng khoán tự do ngay lập tức mà không cần xây dựng hệ thống luật doanh nghiệp công chúng và quy chế giám sát thông tin.',
        effects: { economy: 10, confidence: -25, adaptability: 10, solidarity: -15 },
        outcome: 'Sàn chứng khoán tự phát trở thành sới bạc đầu cơ thông tin nội bộ, các vụ lừa đảo phát hành khống làm sụp đổ niềm tin của nhà đầu tư.',
        lesson1991: 'Bài học 1991 (Trật tự thị trường tài chính): Tự do hóa tài chính không đồng nghĩa với buông lỏng quản lý nhà nước trước các hành vi thao túng.'
      }
    ]
  },
  {
    id: 33,
    title: 'Quy hoạch xây dựng các Khu công nghiệp tập trung (KCN)',
    situation: 'Dòng vốn FDI bắt đầu đổ vào nước ta năm 1993, nhưng các dự án FDI nằm rải rác trong khu dân cư đô thị gây ô nhiễm môi trường và gặp khó khăn lớn về mặt bằng sạch. Cần có giải pháp quy hoạch đất đai khu công nghiệp tập trung.',
    choices: [
      {
        text: 'Quy hoạch xây dựng các Khu công nghiệp tập trung (như Sông Thần, Biên Hòa 2), đầu tư hạ tầng đồng bộ điện nước và xử lý nước thải chung.',
        effects: { economy: 25, confidence: 20, adaptability: 20, solidarity: 15 },
        outcome: 'Thu hút hàng loạt dự án FDI sản xuất quy mô lớn, di dời thành công các nhà máy ô nhiễm ra khỏi đô thị, tạo việc làm tập trung hiệu quả.',
        lesson1991: 'Bài học 1991 (Quy hoạch đất đai công nghiệp): Tạo quỹ đất sạch và hạ tầng đồng bộ tại các KCN tập trung là giải pháp thu hút FDI bài bản, lâu dài.'
      },
      {
        text: 'Để các nhà đầu tư nước ngoài tự thỏa thuận đền bù giải phóng mặt bằng với người dân tại bất kỳ địa điểm nào họ muốn.',
        effects: { economy: -15, confidence: -20, adaptability: -10, solidarity: -20 },
        outcome: 'Tranh chấp đất đai kéo dài nhiều năm khiến các dự án FDI bị đình trệ, gây xung đột lợi ích gay gắt giữa người dân mất đất và doanh nghiệp ngoại.',
        lesson1991: 'Bài học 1991 (Vai trò giải phóng mặt bằng): Nhà nước phải đóng vai trò chủ trì quy hoạch và đền bù giải phóng mặt bằng để bảo vệ quyền lợi hài hòa các bên.'
      },
      {
        text: 'Không quy hoạch khu công nghiệp tập trung, yêu cầu các nhà đầu tư ngoại tự xây dựng hệ thống tự cung tự cấp điện nước biệt lập.',
        effects: { economy: -10, confidence: -10, adaptability: -15, solidarity: 10 },
        outcome: 'Chi phí đầu tư ban đầu quá đắt đỏ khiến Việt Nam mất lợi thế cạnh tranh thu hút FDI so với các nước láng giềng trong khu vực.',
        lesson1991: 'Bài học 1991 (Lợi thế hạ tầng dùng chung): Đầu tư hạ tầng dùng chung tại các KCN giúp giảm chi phí cho doanh nghiệp và tối ưu hóa tài nguyên quốc gia.'
      }
    ]
  },
  {
    id: 34,
    title: 'Chấn chỉnh khủng hoảng ngành khai thác Than Quảng Ninh',
    situation: 'Năm 1993-1994, ngành khai thác than tại Quảng Ninh rơi vào hỗn loạn. Nạn khai thác than lậu hoành hành phá hủy môi trường, các xí nghiệp nhà nước thua lỗ nặng nề, công nhân than bị nợ lương triền miên dẫn đến nguy cơ bãi công.',
    choices: [
      {
        text: 'Giải thể các xí nghiệp nhỏ lẻ yếu kém, thành lập Tổng công ty Than Việt Nam để thống nhất quản lý tài nguyên và chấn chỉnh nạn khai thác lậu.',
        effects: { economy: 20, confidence: 15, adaptability: 15, solidarity: 20 },
        outcome: 'Khôi phục lại kỷ cương khai thác khoáng sản, bảo đảm thu nhập ổn định cho công nhân mỏ, tăng nguồn thu ngân sách từ xuất khẩu than đá chính ngạch.',
        lesson1991: 'Bài học 1991 (Quản lý tập trung tài nguyên): Đối với tài nguyên khoáng sản chiến lược quốc gia, cần có sự quản lý thống nhất, tránh chia cắt manh mún phá hủy môi trường.'
      },
      {
        text: 'Tiếp tục cho phép các xí nghiệp nhà nước cấp quận/huyện tự do cấp phép khai thác than cho tư nhân để tăng thu ngân sách địa phương.',
        effects: { economy: -20, confidence: -15, adaptability: -15, solidarity: -10 },
        outcome: 'Nạn khai thác than lậu ngày càng nghiêm trọng, tài nguyên bị khai thác kiệt quệ, ô nhiễm môi trường vịnh Hạ Long vấp phải sự phản đối gay gắt.',
        lesson1991: 'Bài học 1991 (Lợi ích cục bộ địa phương): Sự buông lỏng quản lý và chia cắt địa giới hành chính trong khai thác tài nguyên sẽ gây tổn hại lớn cho quốc gia.'
      },
      {
        text: 'Đóng cửa toàn bộ các mỏ than trong nước để giải quyết triệt để nạn khai thác lậu, chuyển sang nhập khẩu than từ nước ngoài phục vụ nhiệt điện.',
        effects: { economy: -25, confidence: -25, adaptability: -20, solidarity: -25 },
        outcome: 'Hàng vạn công nhân mỏ Quảng Ninh rơi vào cảnh thất nghiệp khốn cùng, đất nước bị thiếu hụt nhiên liệu phát điện nghiêm trọng.',
        lesson1991: 'Bài học 1991 (Giải quyết tận gốc khủng hoảng): Cải cách phải đi liền với tổ chức sắp xếp lại sản xuất và bảo vệ sinh kế của người lao động trực tiếp.'
      }
    ]
  },
  {
    id: 35,
    title: 'Khai thông thị trường xuất khẩu Dệt may sang Châu Âu (EU)',
    situation: 'Mất thị trường Liên Xô cũ, các doanh nghiệp dệt may trong nước khát đơn hàng xuất khẩu lớn. Năm 1992, cơ hội đàm phán ký Hiệp định dệt may với Cộng đồng châu Âu (EC) mở ra nhưng đòi hỏi đáp ứng các tiêu chuẩn xuất xứ chặt chẽ.',
    choices: [
      {
        text: 'Nỗ lực đàm phán ký kết Hiệp định dệt may Việt Nam - EC, chấp nhận hệ thống hạn ngạch và khuyến khích doanh nghiệp cải tiến quy trình công nghệ.',
        effects: { economy: 25, confidence: 15, adaptability: 25, solidarity: 10 },
        outcome: 'Mở rộng thành công cánh cửa xuất khẩu sang thị trường châu Âu cao cấp, tạo công ăn việc làm cho hàng triệu lao động nữ và nâng cao trình độ quản lý.',
        lesson1991: 'Bài học 1991 (Hội nhập thị trường khó tính): Chủ động tiếp cận các tiêu chuẩn chất lượng quốc tế là bàn đạp để nâng cao vị thế dệt may Việt Nam.'
      },
      {
        text: 'Từ chối đàm phán hạn ngạch vì lo ngại các quy định kiểm toán nhân quyền và xuất xứ khắt khe của EC vi phạm chủ quyền tự quyết.',
        effects: { economy: -20, confidence: -10, adaptability: -20, solidarity: 15 },
        outcome: 'Hàng dệt may Việt Nam bị áp thuế cao kịch trần, không thể thâm nhập thị trường châu Âu, các nhà máy dệt tiếp tục hoạt động cầm chừng.',
        lesson1991: 'Bài học 1991 (Vượt qua rào cản hội nhập): E ngại các điều khoản chuẩn mực thương mại quốc tế sẽ tự tước đi cơ hội phát triển công nghiệp của đất nước.'
      },
      {
        text: 'Cho phép doanh nghiệp tự do xuất khẩu dệt may sang châu Âu bằng cách giả mạo nhãn mác xuất xứ của nước thứ ba (như Thái Lan, Trung Quốc).',
        effects: { economy: -10, confidence: -20, adaptability: -10, solidarity: -15 },
        outcome: 'Bị EC phát hiện và áp lệnh cấm nhập khẩu dệt may toàn diện đối với Việt Nam, gây thiệt hại nặng nề cho uy tín thương mại quốc gia trên toàn cầu.',
        lesson1991: 'Bài học 1991 (Chính trực thương mại): Gian lận xuất xứ trong thương mại quốc tế chỉ mang lại cái lợi ngắn hạn và sẽ phá hủy cơ hội xuất khẩu bền vững.'
      }
    ]
  },
  {
    id: 36,
    title: 'Chống dịch bệnh chăn nuôi để bảo đảm an ninh lương thực',
    situation: 'Năm 1992, dịch tả lợn châu Phi bùng phát mạnh tại các tỉnh đồng bằng sông Hồng. Nguồn cung thịt lợn cho Hà Nội bị thiếu hụt nghiêm trọng, đẩy giá thực phẩm đô thị tăng vọt 50%, đe dọa sự ổn định đời sống nhân dân lao động.',
    choices: [
      {
        text: 'Hỗ trợ tài chính từ ngân sách để tiêu hủy lợn bệnh, lập chốt kiểm dịch liên tỉnh chặt chẽ kết hợp điều phối thịt đông lạnh dự trữ quốc gia ra bình ổn giá.',
        effects: { economy: 15, confidence: 25, adaptability: 20, solidarity: 20 },
        outcome: 'Dập tắt thành công dịch bệnh sau 2 tháng, ổn định tâm lý và giữ vững giá cả thực phẩm cơ bản cho nhân dân các đô thị lớn.',
        lesson1991: 'Bài học 1991 (An sinh gắn liền ổn định): Khi dịch hại đe dọa thực phẩm cơ bản, sự can thiệp hỗ trợ tài chính nhanh của nhà nước là điểm tựa vững chắc cho lòng dân.'
      },
      {
        text: 'Cấm tuyệt đối việc vận chuyển, mua bán lợn trên toàn quốc để dập dịch, không hỗ trợ tài chính tiêu hủy cho người chăn nuôi.',
        effects: { economy: -20, confidence: -25, adaptability: -15, solidarity: 5 },
        outcome: 'Người chăn nuôi giấu dịch, lén lút bán chạy lợn bệnh ra thị trường chợ đen khiến dịch bệnh lan rộng hơn, nguồn cung thịt lợn sụp đổ hoàn toàn.',
        lesson1991: 'Bài học 1991 (Hài hòa chính sách dập dịch): Cấm đoán cực đoan không hỗ trợ chỉ đẩy người dân vào thế đối phó, phá vỡ mọi kiểm soát hành chính.'
      },
      {
        text: 'Để mặc dịch bệnh tự phát triển và tự suy yếu theo tự nhiên, để thị trường tự do quyết định giá cả thịt lợn tăng theo cung cầu.',
        effects: { economy: -10, confidence: -15, adaptability: 5, solidarity: -20 },
        outcome: 'Giá thịt lợn tăng cao phi lý kéo dài, đời sống công nhân viên chức nghèo bị ảnh hưởng nặng nề, gây phản ứng xã hội bất bình.',
        lesson1991: 'Bài học 1991 (Vai trò kiểm soát an toàn sinh học): Nhà nước không thể buông lơi trách nhiệm quản lý an toàn dịch bệnh động vật liên quan trực tiếp sức khỏe dân.'
      }
    ]
  },
  {
    id: 37,
    title: 'Quy định nội địa hóa công nghiệp lắp ráp xe máy',
    situation: 'Đầu thập niên 1990, làn sóng xe máy Cub cũ nhập lậu và xe máy lắp ráp linh kiện nhập khẩu (dưới dạng CKD) bùng nổ. Nhu cầu xe máy lớn tiêu tốn lượng lớn ngoại tệ nhập khẩu nhưng không giúp ích gì cho công nghiệp cơ khí trong nước phát triển.',
    choices: [
      {
        text: 'Ban hành quy định biểu thuế nhập khẩu linh kiện xe máy lũy tiến theo tỷ lệ nội địa hóa: Khuyến khích doanh nghiệp tự sản xuất khung sườn, lốp xe trong nước.',
        effects: { economy: 20, confidence: 15, adaptability: 20, solidarity: 10 },
        outcome: 'Đặt nền móng cho ngành công nghiệp phụ trợ cơ khí chế tạo phát triển, thu hút các hãng xe lớn (Honda, Yamaha) vào đầu tư nhà máy sản xuất tại Việt Nam.',
        lesson1991: 'Bài học 1991 (Công cụ thuế định hướng công nghiệp): Sử dụng hàng rào thuế quan thông minh để hướng dòng vốn đầu tư vào sản xuất thực chất trong nước.'
      },
      {
        text: 'Cấm hoàn toàn việc nhập khẩu linh kiện xe máy để bảo vệ các xí nghiệp xe đạp quốc doanh trong nước khỏi bị cạnh tranh.',
        effects: { economy: -20, confidence: -20, adaptability: -20, solidarity: 5 },
        outcome: 'Nhu cầu giao thông bị bóp nghẹt, xe máy lậu biên giới Tây Nam hoạt động rầm rộ hơn, ngành cơ khí trong nước tiếp tục lạc hậu lỗi thời.',
        lesson1991: 'Bài học 1991 (Chống bảo thủ phương tiện): Cấm đoán phương tiện giao thông tiên tiến để bảo vệ sản xuất xe đạp lạc hậu chỉ cản trở tốc độ phát triển chung.'
      },
      {
        text: 'Cho phép nhập khẩu tự do không giới hạn linh kiện xe máy với thuế suất 0% mà không yêu cầu bất kỳ tỷ lệ nội địa hóa nào.',
        effects: { economy: -5, confidence: 10, adaptability: -10, solidarity: -15 },
        outcome: 'Xe máy giá rẻ ngập tràn đường phố nhưng đất nước mất lượng lớn ngoại tệ mạnh nhập khẩu, ngành cơ khí trong nước chỉ dừng lại ở khâu vặn ốc vít thuê.',
        lesson1991: 'Bài học 1991 (Chuyển giao công nghệ thực chất): Thu hút đầu tư lắp ráp phải đi đôi với các chính sách ép buộc chuyển giao công nghệ nâng cao nội lực.'
      }
    ]
  },
  {
    id: 38,
    title: 'Đào tạo lại lao động dôi dư từ xí nghiệp giải thể',
    situation: 'Khi nhà nước kiên quyết xóa bao cấp kinh tế, hàng trăm xí nghiệp nhà nước thua lỗ đã phải giải thể hoặc thu hẹp sản xuất. Hàng vạn công nhân đột ngột rơi vào cảnh mất việc làm, gây áp lực an sinh xã hội cực lớn lên các đô thị.',
    choices: [
      {
        text: 'Trích ngân sách thành lập các Trung tâm dạy nghề ngắn hạn miễn phí, hỗ trợ vốn vay nhỏ tự tạo việc làm và khuyến khích kinh tế hộ gia đình phát triển.',
        effects: { economy: 15, confidence: 25, adaptability: 20, solidarity: 25 },
        outcome: 'Chuyển đổi thành công hàng vạn công nhân dôi dư sang các công việc mới năng động ở khu vực tư nhân, ổn định trật tự xã hội bền vững.',
        lesson1991: 'Bài học 1991 (Lưới đỡ an sinh cải cách): Cải cách cơ cấu kinh tế tàn nhẫn bắt buộc phải đi kèm các chính sách nâng đỡ và đào tạo nhân lực chủ động.'
      },
      {
        text: 'Yêu cầu các xí nghiệp thua lỗ tiếp tục giữ lại toàn bộ số lượng công nhân và vay nợ ngân hàng nhà nước để chi trả lương cào bằng.',
        effects: { economy: -25, confidence: -10, adaptability: -25, solidarity: 15 },
        outcome: 'Xí nghiệp quốc doanh lún sâu vào nợ nần không lối thoát, triệt tiêu động lực đổi mới và đe dọa làm đổ vỡ cả hệ thống tài chính quốc gia.',
        lesson1991: 'Bài học 1991 (Chống trì trệ bao cấp nhân sự): Giữ người cào bằng trong xí nghiệp hoạt động yếu kém chỉ kéo dài sự trì trệ và làm kiệt quệ tài chính quốc gia.'
      },
      {
        text: 'Mặc kệ công nhân tự bơi theo quy luật đào thải tự nhiên của thị trường, nhà nước không hỗ trợ đào tạo hay cho vay vốn.',
        effects: { economy: -10, confidence: -30, adaptability: -10, solidarity: -25 },
        outcome: 'Tỷ lệ tội phạm và tệ nạn xã hội tăng cao tại các đô thị, gây chia rẽ sâu sắc lòng dân đối với các chính sách đổi mới của Đảng và Nhà nước.',
        lesson1991: 'Bài học 1991 (Đổi mới gắn liền lòng dân): Mọi cải cách kinh tế đều phải hướng tới mục tiêu ổn định cuộc sống nhân dân, không bỏ rơi người lao động.'
      }
    ]
  },
  {
    id: 39,
    title: 'Khai thông luồng lạch xuất khẩu lúa gạo sông Hậu',
    situation: 'Nông sản miền Tây Nam Bộ dồi dào nhưng cửa biển sông Hậu (luồng Định An) bị bồi lắng nghiêm trọng. Tàu tải trọng lớn không thể vào sông Hậu ăn hàng trực tiếp, phải trung chuyển lên cảng Sài Gòn bằng sà lan nhỏ làm tăng chi phí xuất khẩu gạo thêm 20 USD/tấn.',
    choices: [
      {
        text: 'Bố trí nguồn vốn khẩn cấp nạo vét luồng Định An, xây dựng hệ thống phao tiêu biển dẫn đường cho tàu container lớn vào ăn hàng trực tiếp cảng Cần Thơ.',
        effects: { economy: 20, confidence: 15, adaptability: 20, solidarity: 10 },
        outcome: 'Giảm đáng kể chi phí vận chuyển xuất khẩu gạo, tăng trực tiếp giá thu mua lúa cho nông dân miền Tây, thúc đẩy nông sản vùng phát triển mạnh.',
        lesson1991: 'Bài học 1991 (Khai thông điểm nghẽn hạ tầng): Nhận diện đúng điểm nghẽn logistic của vùng sản xuất trọng điểm để đầu tư cải tạo dứt điểm.'
      },
      {
        text: 'Yêu cầu các tỉnh miền Tây tự cân đối ngân sách địa phương để nạo vét luồng lạch mà không có sự hỗ trợ vốn đầu tư từ trung ương.',
        effects: { economy: -10, confidence: -10, adaptability: -15, solidarity: 10 },
        outcome: 'Địa phương không có đủ kinh phí, dự án nạo vét đắp chiếu kéo dài nhiều năm, gạo xuất khẩu tiếp tục gánh chi phí trung chuyển đắt đỏ.',
        lesson1991: 'Bài học 1991 (Liên kết vùng vĩ mô): Các dự án hạ tầng mang tính liên tỉnh, liên vùng bắt buộc phải có sự đầu tư điều phối quy hoạch của trung ương.'
      },
      {
        text: 'Bỏ qua việc nâng cấp cảng sông, tiếp tục duy trì phương thức trung chuyển sà lan cũ để tận dụng đội ngũ bốc xếp thủ công đông đảo.',
        effects: { economy: -15, confidence: 5, adaptability: -10, solidarity: 15 },
        outcome: 'Năng lực thông quan xuất khẩu lúa gạo bị giới hạn, gạo Việt Nam mất sức cạnh tranh về giá so với gạo xuất khẩu trực tiếp của Thái Lan.',
        lesson1991: 'Bài học 1991 (Hiện đại hóa vận tải): Tránh duy trì phương thức vận tải lạc hậu chỉ để bảo vệ việc làm thủ công cản trở sức cạnh tranh kinh tế chung.'
      }
    ]
  },
  {
    id: 40,
    title: 'Đóng cửa rừng tự nhiên bảo vệ tài nguyên',
    situation: 'Đầu thập niên 1990, nạn phá rừng Tây Nguyên lấy gỗ tròn xuất khẩu thu ngoại tệ tự phát diễn ra ồ ạt. Độ che phủ rừng sụt giảm nghiêm trọng đe dọa an ninh nguồn nước và gây lũ lụt lịch sử ở miền Trung. Đề xuất đóng cửa rừng tự nhiên được đưa ra.',
    choices: [
      {
        text: 'Ban hành lệnh đóng cửa rừng tự nhiên, cấm tuyệt đối xuất khẩu gỗ tròn thô, chuyển sang khuyến khích trồng rừng sản xuất và chế biến gỗ sâu.',
        effects: { economy: 15, confidence: 20, adaptability: 15, solidarity: 20 },
        outcome: 'Bảo vệ được tài nguyên rừng phòng hộ chiến lược, ngăn chặn suy thoái sinh thái lâu dài mặc dù kim ngạch xuất khẩu gỗ thô sụt giảm ngắn hạn.',
        lesson1991: 'Bài học 1991 (Phát triển bền vững): Không thể đánh đổi tài nguyên sinh thái sinh tồn để lấy nguồn thu ngoại tệ ngắn hạn bằng mọi giá.'
      },
      {
        text: 'Tiếp tục cho phép khai thác và xuất khẩu gỗ thô không giới hạn để tối đa hóa nguồn thu ngoại tệ cho ngân sách nhà nước đang cạn kiệt.',
        effects: { economy: -25, confidence: -20, adaptability: -20, solidarity: -15 },
        outcome: 'Tây Nguyên bị sa mạc hóa nhanh chóng, lũ quét tàn phá miền Trung năm sau gây thiệt hại hàng ngàn tỷ đồng và sinh mạng của hàng trăm người dân.',
        lesson1991: 'Bài học 1991 (Cái giá phá hủy sinh thái): Khai thác cạn kiệt tài nguyên thô không kiểm soát sẽ đẩy nền kinh tế gánh chịu chi phí khắc phục thiên tai khổng lồ.'
      },
      {
        text: 'Cho phép khai thác gỗ tự do nhưng thu phí bảo vệ môi trường cực cao tính trực tiếp vào mỗi mét khối gỗ khai thác.',
        effects: { economy: 5, confidence: -10, adaptability: 5, solidarity: -10 },
        outcome: 'Phí cao đẩy lâm tặc chuyển sang khai thác lậu vào ban đêm và hối lộ kiểm lâm để trốn phí, nạn tàn phá rừng vẫn diễn ra âm ỉ mất kiểm soát.',
        lesson1991: 'Bài học 1991 (Quản trị rừng thực chất): Dùng phí kinh tế không thể thay thế cho các biện pháp hành lệnh cấm khai thác trực tiếp bảo vệ rừng tự nhiên đầu nguồn.'
      }
    ]
  },
  {
    id: 41,
    title: 'Hợp tác Viễn thông quốc tế bằng hợp đồng BCC',
    situation: 'Năm 1991, mạng lưới điện thoại của Việt Nam lạc hậu bậc nhất thế giới, tỷ lệ lắp máy chỉ đạt 0.1%. Nước ta không có vốn và công nghệ cáp quang, nhưng lo sợ an toàn thông tin quốc gia khi để nước ngoài sở hữu hạ tầng viễn thông.',
    choices: [
      {
        text: 'Áp dụng hình thức Hợp đồng hợp tác kinh doanh (BCC) ký với tập đoàn Telstra (Úc): Phía đối tác bỏ 100% vốn đầu tư và công nghệ, phía Việt Nam vận hành và chia sẻ doanh thu.',
        effects: { economy: 25, confidence: 15, adaptability: 25, solidarity: 10 },
        outcome: 'Hiện đại hóa mạng viễn thông cực nhanh bằng cáp quang số hóa, Việt Nam trở thành điểm sáng viễn thông khu vực mà không mất quyền sở hữu hạ tầng.',
        lesson1991: 'Bài học 1991 (Sáng tạo hình thức đầu tư): Sử dụng hợp đồng BCC giúp khai thác vốn và công nghệ tiên tiến của phương Tây mà vẫn bảo vệ an ninh hạ tầng quốc gia.'
      },
      {
        text: 'Từ chối mọi liên doanh hợp tác nước ngoài, tự nghiên cứu và chế tạo thiết bị chuyển mạch viễn thông bằng nguồn lực cơ khí trong nước.',
        effects: { economy: -20, confidence: -10, adaptability: -20, solidarity: 15 },
        outcome: 'Mạng viễn thông Việt Nam dậm chân tại chỗ ở công nghệ tương tự (analog) lạc hậu, cản trở việc liên lạc của các doanh nghiệp FDI đầu tư vào nước.',
        lesson1991: 'Bài học 1991 (Tránh cô lập kỹ thuật): Không thể tự nghiên cứu chế tạo từ đầu các ngành công nghệ cao khi thế giới đã đi trước; cần đi tắt đón đầu.'
      },
      {
        text: 'Bán đứt quyền sở hữu và khai thác mạng điện thoại quốc gia cho một nhà mạng nước ngoài duy nhất để lấy tiền mặt tái cấu trúc ngành điện.',
        effects: { economy: 10, confidence: -25, adaptability: 5, solidarity: -20 },
        outcome: 'Thu được dòng tiền lớn nhưng an toàn thông tin quốc gia bị đe dọa, nhà mạng ngoại độc quyền đẩy cước phí điện thoại của dân lên quá cao.',
        lesson1991: 'Bài học 1991 (Giữ vững quyền kiểm soát viễn thông): Viễn thông là hạ tầng huyết mạch quốc gia, hợp tác quốc tế phải bảo đảm quyền làm chủ vận hành cuối cùng.'
      }
    ]
  },
  {
    id: 42,
    title: 'Tách biệt quản lý nhà nước và kinh doanh Hàng không',
    situation: 'Trước năm 1993, ngành hàng không dân dụng trực thuộc quân đội quản lý trực tiếp cả về hành chính và vận tải. Cơ chế này cản trở việc thành lập hãng hàng không thương mại quốc gia độc lập để mở các đường bay quốc tế thương mại.',
    choices: [
      {
        text: 'Thành lập hãng Hàng không Quốc gia Vietnam Airlines độc lập kinh doanh thương mại, tách biệt hoàn toàn vai trò quản lý nhà nước của Cục Hàng không Dân dụng.',
        effects: { economy: 20, confidence: 15, adaptability: 25, solidarity: 10 },
        outcome: 'Vietnam Airlines nhanh chóng hiện đại hóa đội bay bằng máy bay Boeing/Airbus thuê mua tài chính, mở rộng các đường bay quốc tế chuyên nghiệp.',
        lesson1991: 'Bài học 1991 (Tách bạch quản lý và kinh doanh): Tách chức năng quản lý hành chính nhà nước ra khỏi hoạt động sản xuất kinh doanh là điều kiện tiên quyết để doanh nghiệp năng động phát triển.'
      },
      {
        text: 'Duy trì mô hình hàng không trực thuộc quân đội điều hành cào bằng để bảo đảm an ninh quốc phòng tuyệt đối trong mọi chuyến bay.',
        effects: { economy: -15, confidence: -10, adaptability: -20, solidarity: 15 },
        outcome: 'Không thể ký kết các hiệp định hàng không thương mại song phương quốc tế, hàng không dân dụng Việt Nam lạc hậu với dàn máy bay cũ kỹ.',
        lesson1991: 'Bài học 1991 (Năng lực cạnh tranh dịch vụ): Duy trì cơ chế bao cấp hành chính quân sự trong dịch vụ thương mại dân dụng làm tự tước đi cơ hội hội nhập của đất nước.'
      },
      {
        text: 'Thả nổi thị trường hàng không cho các hãng bay tư nhân nước ngoài tự do mở đường bay nội địa không cần xin phép để tiết kiệm chi phí đầu tư bay quốc gia.',
        effects: { economy: 10, confidence: -25, adaptability: 10, solidarity: -20 },
        outcome: 'Hãng ngoại độc quyền khai tàn hạ tầng hàng không nội địa, quốc gia không xây dựng được đội bay dự bị chiến lược cho các tình huống khẩn cấp.',
        lesson1991: 'Bài học 1991 (Chủ quyền bầu trời): Hội nhập hàng không dân dụng phải đi liền với việc xây dựng hãng hàng không quốc gia mạnh làm trụ cột bảo vệ lợi ích kinh tế.'
      }
    ]
  },
  {
    id: 43,
    title: 'Nâng cao tiêu chuẩn xuất khẩu Thủy hải sản',
    situation: 'Nông dân miền Nam bắt đầu chuyển dịch mạnh sang nuôi tôm, xuất khẩu thủy sản thu ngoại tệ lớn. Tuy nhiên, do chế biến thủ công lạc hậu, nhiều lô hàng xuất khẩu tôm sang Nhật Bản bị trả về do phát hiện nhiễm kháng sinh, đe dọa uy tín thủy sản Việt.',
    choices: [
      {
        text: 'Áp dụng hệ thống quản lý chất lượng theo tiêu chuẩn quốc tế HACCP, hỗ trợ các nhà máy chế biến đầu tư công nghệ đông lạnh sâu và kiểm soát vùng nuôi.',
        effects: { economy: 25, confidence: 20, adaptability: 20, solidarity: 10 },
        outcome: 'Thủy sản Việt Nam vượt qua hàng rào kỹ thuật khắt khe của Nhật Bản, Mỹ, vươn lên trở thành ngành xuất khẩu tỷ USD chủ lực.',
        lesson1991: 'Bài học 1991 (Chất lượng tạo thương hiệu): Không thể xuất khẩu bền vững bằng các sản phẩm thô sơ giá rẻ thiếu tiêu chuẩn; phải tuân thủ chuẩn mực vệ sinh thế giới.'
      },
      {
        text: 'Gửi công hàm phản đối chính phủ Nhật Bản dựng hàng rào kỹ thuật phân biệt đối xử và kêu gọi nông dân tẩy chay hàng công nghệ Nhật.',
        effects: { economy: -20, confidence: -10, adaptability: -20, solidarity: 15 },
        outcome: 'Phía Nhật Bản thắt chặt kiểm dịch 100% lô hàng từ Việt Nam, xuất khẩu tôm cá đóng băng, nông dân nuôi tôm miền Tây lâm vào cảnh nợ nần phá sản.',
        lesson1991: 'Bài học 1991 (Thái độ ngoại giao thương mại): Tránh phản ứng duy ý chí chính trị trước các tranh chấp kỹ thuật thương mại; phải giải quyết bằng nâng cao chất lượng.'
      },
      {
        text: 'Chấp nhận giảm giá bán tôm xuống 50% để bán tôm kém chất lượng sang các thị trường dễ tính vùng biên giới.',
        effects: { economy: 5, confidence: -15, adaptability: 5, solidarity: -10 },
        outcome: 'Gỡ gạc được vốn ngắn hạn nhưng ngành thủy sản Việt Nam bị mang danh sản phẩm giá rẻ kém chất lượng, kìm hãm hoàn toàn giá trị gia tăng ngành.',
        lesson1991: 'Bài học 1991 (Tầm nhìn thương hiệu): Chấp nhận hạ chuẩn chất lượng để bán rẻ chỉ triệt tiêu năng lực nâng cấp công nghệ lâu dài của nền công nghiệp.'
      }
    ]
  },
  {
    id: 44,
    title: 'Huy động vốn nâng cấp tuyến Quốc lộ 1A',
    situation: 'Năm 1993, nền kinh tế phát triển nhanh nhưng trục giao thông huyết mạch Quốc lộ 1A xuống cấp trầm trọng, mặt đường hẹp đầy ổ gà khiến xe tải đi từ Hà Nội vào Sài Gòn mất 5-7 ngày, làm đứt gãy lưu thông hàng hóa liên vùng.',
    choices: [
      {
        text: 'Vay vốn ODA quy mô lớn từ Ngân hàng Thế giới (WB) và ADB để đấu thầu quốc tế nâng cấp, thảm nhựa toàn bộ trục Quốc lộ 1A.',
        effects: { economy: 25, confidence: 15, adaptability: 20, solidarity: 15 },
        outcome: 'Rút ngắn thời gian vận tải Bắc-Nam xuống còn 2 ngày, khơi thông dòng chảy thương mại toàn quốc và thúc đẩy các tỉnh miền Trung phát triển theo trục quốc lộ.',
        lesson1991: 'Bài học 1991 (Nguồn lực hạ tầng chiến lược): Dũng cảm vay nợ phát triển từ các định chế đa phương lớn để đầu tư nâng cấp dứt điểm hạ tầng giao thông xương sống.'
      },
      {
        text: 'Áp dụng cơ chế dân tự làm đường: Chia nhỏ các đoạn quốc lộ giao cho từng huyện tự huy động sức dân đóng góp ngày công đắp đá phối sạn.',
        effects: { economy: -15, confidence: -25, adaptability: -15, solidarity: 10 },
        outcome: 'Chất lượng đường không đồng bộ, mặt đường nhanh chóng sụt lún sau mùa mưa, gây kiệt quệ sức lao động của nông dân địa phương nghèo.',
        lesson1991: 'Bài học 1991 (Quy chuẩn hạ tầng quốc gia): Không thể xây dựng hạ tầng kỹ thuật cao cấp quy mô quốc gia bằng các phương pháp thủ công manh mún.'
      },
      {
        text: 'Để mặc quốc lộ xuống cấp và khuyến khích các doanh nghiệp chuyển sang vận chuyển bằng đường biển nội địa để tiết kiệm ngân sách đầu tư bộ.',
        effects: { economy: -10, confidence: -10, adaptability: -10, solidarity: 5 },
        outcome: 'Vận tải đường biển quá tải, các tỉnh sâu trong nội địa không thể tiếp cận hàng hóa tiêu dùng, gây mất cân đối cung cầu và sốt giá hàng liên tỉnh.',
        lesson1991: 'Bài học 1991 (Đồng bộ hạ tầng giao thông): Giao thông đường bộ là huyết mạch xương sống, không thể thay thế khiên cưỡng bằng đường thủy.'
      }
    ]
  },
  {
    id: 45,
    title: 'Kiểm soát Cơn sốt đất nền đô thị lần thứ nhất (1993-1994)',
    situation: 'Sau khi Luật Đất đai 1993 cho phép chuyển nhượng quyền sử dụng đất, cơn sốt đất đai bùng nổ dữ dội tại Hà Nội và TP.HCM năm 1994. Giá đất bị đầu cơ đẩy lên cao gấp 10 lần, đẩy chi phí mặt bằng sản xuất lên mây, đe dọa dòng vốn FDI.',
    choices: [
      {
        text: 'Ban hành Nghị định 18 và Luật Thuế chuyển quyền sử dụng đất, áp thuế cao đối với hành vi đầu cơ mua đi bán lại ngắn hạn để hạ nhiệt bong bóng.',
        effects: { economy: 20, confidence: 15, adaptability: 20, solidarity: 10 },
        outcome: 'Hạ nhiệt thành công cơn sốt đất đầu cơ, đưa giá bất động sản về quỹ đạo thực chất phục vụ nhu cầu xây dựng nhà máy và văn phòng.',
        lesson1991: 'Bài học 1991 (Công cụ thuế điều tiết tài sản): Sử dụng thuế chuyển nhượng và quy hoạch đất đai thông minh để ngăn chặn các cơn lốc đầu cơ phá hủy hạ tầng sản xuất.'
      },
      {
        text: 'Cấm hoàn toàn việc chuyển nhượng, mua bán quyền sử dụng đất giữa các cá nhân, quy tất cả giao dịch đất đai về dạng xin-cho hành chính.',
        effects: { economy: -25, confidence: -25, adaptability: -20, solidarity: 5 },
        outcome: 'Giao dịch đất rút vào hoạt động ngầm (chợ đen) không có sự bảo hộ của luật pháp, gây tranh chấp pháp lý tràn lan và làm tê liệt thị trường vốn.',
        lesson1991: 'Bài học 1991 (Thừa nhận thị trường tài sản): Không thể xóa bỏ thị trường bất động sản bằng lệnh cấm; chỉ đẩy nó vào bóng tối chợ đen hỗn loạn.'
      },
      {
        text: 'Để mặc cho cơn sốt đất tự do phát triển hoàn toàn để kích thích các ngân hàng cho vay thế chấp bất động sản tăng trưởng tín dụng nhanh.',
        effects: { economy: -15, confidence: -20, adaptability: 5, solidarity: -20 },
        outcome: 'Bong bóng bất động sản vỡ lở sau đó kéo theo hàng loạt khoản nợ xấu ngân hàng đe dọa an toàn toàn bộ hệ thống tài chính quốc gia.',
        lesson1991: 'Bài học 1991 (Ngăn chặn bong bóng tài sản): Sự buông lơi quản lý bong bóng tài sản đất đai sẽ dẫn đến các hậu quả tài chính vĩ mô nghiêm trọng lâu dài.'
      }
    ]
  },
  {
    id: 46,
    title: 'Mở cửa ngành Du lịch quốc tế',
    situation: 'Năm 1993-1994, Việt Nam trở thành điểm đến tò mò của du khách quốc tế sau khi cấm vận được nới lỏng. Tuy nhiên, quy trình cấp thị thực (visa) của ta lúc này vô cùng rườm rà (phải qua phê duyệt an ninh nhiều tuần), làm nản lòng du khách.',
    choices: [
      {
        text: 'Đơn giản hóa thủ tục cấp visa du lịch, cho phép cấp visa tại cửa khẩu quốc tế cho các đoàn khách đi theo công ty lữ hành uy tín.',
        effects: { economy: 20, confidence: 20, adaptability: 20, solidarity: 15 },
        outcome: 'Lượng khách du lịch quốc tế tăng vọt 300% ngay trong năm sau, mang lại nguồn thu ngoại tệ dịch vụ lớn và quảng bá hình ảnh Việt Nam đổi mới.',
        lesson1991: 'Bài học 1991 (Cải cách hành chính đối ngoại): Mở cửa phải bắt đầu từ cởi trói các rào cản thủ tục đi lại, tạo sự thân thiện, an toàn đón bạn bè quốc tế.'
      },
      {
        text: 'Giữ nguyên quy trình xét duyệt an ninh nghiêm ngặt nhiều tuần để phòng ngừa tuyệt đối các hoạt động phá hoại, gián điệp từ bên ngoài.',
        effects: { economy: -15, confidence: -10, adaptability: -15, solidarity: 10 },
        outcome: 'Khách du lịch chuyển hướng sang Thái Lan, Indonesia, Việt Nam lỡ cơ hội vàng xây dựng thương hiệu điểm đến du lịch mới nổi của châu Á.',
        lesson1991: 'Bài học 1991 (Tầm nhìn an ninh phát triển): An ninh quốc gia vững chắc nhất khi đi liền với sự phát triển kinh tế tự lực tự cường và hội nhập rộng mở.'
      },
      {
        text: 'Miễn visa hoàn toàn không giới hạn cho mọi công dân nước ngoài nhập cảnh mà không có bất kỳ hàng rào quản lý hay khai báo lưu trú nào.',
        effects: { economy: 10, confidence: -15, adaptability: 5, solidarity: -20 },
        outcome: 'Gây khó khăn cho công tác kiểm soát lưu trú, tạo kẽ hở cho tội phạm xuyên quốc gia xâm nhập hoạt động phi pháp ảnh hưởng an ninh xã hội.',
        lesson1991: 'Bài học 1991 (Mở cửa có quản lý): Mở cửa đối ngoại phải đi đôi với việc nâng cao năng lực quản lý hành chính khoa học của lực lượng quản lý biên giới.'
      }
    ]
  },
  {
    id: 47,
    title: 'Hội nhập luật chơi sở hữu trí tuệ (Công ước Bern)',
    situation: 'Năm 1994, để chuẩn bị bình thường hóa hoàn toàn quan hệ với Mỹ và tham gia các hiệp định thương mại tự do, Việt Nam đối mặt áp lực lớn phải bảo vệ bản quyền phần mềm, sách, tác phẩm nghệ thuật nước ngoài (lúc này đang bị in lậu tự do tràn lan trong nước).',
    choices: [
      {
        text: 'Chủ động xây dựng lộ trình chuẩn bị tham gia Công ước Bern về bảo hộ quyền tác giả, khuyến khích doanh nghiệp sử dụng phần mềm có bản quyền.',
        effects: { economy: 15, confidence: 20, adaptability: 25, solidarity: 10 },
        outcome: 'Tạo lòng tin pháp lý vững chắc cho các tập đoàn công nghệ lớn (như Microsoft, Intel) yên tâm đổ vốn đầu tư trung tâm nghiên cứu tại Việt Nam.',
        lesson1991: 'Bài học 1991 (Tôn trọng luật chơi quốc tế): Muốn hội nhập sân chơi lớn toàn cầu bắt buộc phải thừa nhận và tuân thủ các quy tắc bảo vệ trí tuệ văn minh.'
      },
      {
        text: 'Từ chối bảo hộ bản quyền nước ngoài để người dân và doanh nghiệp trong nước tiếp tục sao chép sử dụng phần mềm, sách dịch miễn phí.',
        effects: { economy: -20, confidence: -10, adaptability: -20, solidarity: 15 },
        outcome: 'Bị đưa vào danh sách đen vi phạm bản quyền nghiêm trọng, đất nước bị áp lệnh trừng phạt thương mại công nghệ cao làm chậm đà số hóa.',
        lesson1991: 'Bài học 1991 (Tác hại của sở hữu lậu): Sao chép phi pháp có thể mang lại cái lợi nhỏ ngắn hạn nhưng sẽ triệt tiêu khả năng sáng tạo công nghệ tự thân.'
      },
      {
        text: 'Chỉ bảo hộ bản quyền cho các tác phẩm của các quốc gia đồng minh truyền thống, còn các tác phẩm từ các nước khác vẫn cho phép sao chép tự do.',
        effects: { economy: 5, confidence: -15, adaptability: 5, solidarity: -15 },
        outcome: 'Gây ra sự phân biệt đối xử pháp lý phức tạp, bị các định chế thương mại quốc tế cự tuyệt xem xét gia nhập vì vi phạm nguyên tắc tối huệ quốc.',
        lesson1991: 'Bài học 1991 (Nguyên tắc bình đẳng thương mại): Pháp luật quốc tế đòi hỏi sự đối xử công bằng phi chính trị giữa tất cả các thành viên tham gia giao thương.'
      }
    ]
  },
  {
    id: 48,
    title: 'Địa điểm xây dựng Nhà máy Lọc dầu đầu tiên',
    situation: 'Năm 1994, Việt Nam xuất khẩu hàng triệu tấn dầu thô nhưng phải nhập khẩu 100% xăng dầu thành phẩm. Có hai luồng ý kiến xây dựng nhà máy lọc dầu đầu tiên: Xây ở Vũng Tàu gần nguồn dầu để tối ưu chi phí, hoặc xây ở Dung Quất (Quảng Ngãi) để thúc đẩy kinh tế miền Trung nghèo khó.',
    choices: [
      {
        text: 'Quyết định xây dựng tại Dung Quất (Quảng Ngãi) kết hợp quy hoạch Khu kinh tế mở Chu Lai để tạo động lực phát triển kinh tế cho dải đất miền Trung.',
        effects: { economy: 20, confidence: 20, adaptability: 20, solidarity: 25 },
        outcome: 'Tạo bước ngoặt phát triển công nghiệp làm thay đổi hoàn toàn diện mạo miền Trung, củng cố sâu sắc khối đoàn kết đồng thuận xã hội liên vùng.',
        lesson1991: 'Bài học 1991 (Hài hòa phát triển vùng miền): Quyết sách kinh tế vĩ mô đôi khi phải cân nhắc mục tiêu an sinh xã hội và nâng đỡ các vùng miền khó khăn.'
      },
      {
        text: 'Quyết định xây dựng tại Vũng Tàu để tối ưu hóa hoàn toàn chi phí vận chuyển thương mại ngắn hạn của dự án lọc dầu.',
        effects: { economy: 25, confidence: 10, adaptability: 15, solidarity: -15 },
        outcome: 'Dự án lọc dầu đạt hiệu quả tài chính doanh nghiệp cao hơn, nhưng miền Trung tiếp tục nghèo khó kéo dài do thiếu đòn bẩy công nghiệp nặng.',
        lesson1991: 'Bài học 1991 (Tầm nhìn tổng thể quốc gia): Phát triển kinh tế không chỉ là tính toán tài chính đơn lẻ của một dự án, mà phải đặt trong quy hoạch phát triển quốc gia.'
      },
      {
        text: 'Hủy bỏ dự án nhà máy lọc dầu trong nước, tiếp tục duy trì phương thức bán dầu thô thô và nhập khẩu xăng dầu thành phẩm lâu dài.',
        effects: { economy: -25, confidence: -20, adaptability: -20, solidarity: -10 },
        outcome: 'Đất nước hoàn toàn phụ thuộc vào biến động giá xăng dầu thế giới, không tự chủ được nguồn nhiên liệu chiến lược cho an ninh quốc phòng.',
        lesson1991: 'Bài học 1991 (Tự chủ năng lượng vĩ mô): Xây dựng năng lực tinh chế dầu trong nước là bước đi chiến lược bảo vệ nền độc lập tự chủ kinh tế quốc gia.'
      }
    ]
  },
  {
    id: 49,
    title: 'Chương trình 1 triệu tấn đường bảo vệ mía đường nội địa',
    situation: 'Năm 1994, ngành mía đường Việt Nam thô sơ, chi phí sản xuất cao. Đường nhập lậu giá rẻ từ Thái Lan tràn ngập thị trường. Nhà nước xem xét triển khai chương trình "1 triệu tấn đường" kết hợp hàng rào thuế bảo hộ nông dân trồng mía.',
    choices: [
      {
        text: 'Triển khai chương trình: Áp dụng thuế tự vệ đối với đường nhập khẩu có lộ trình, hỗ trợ vốn cho nông dân trồng mía và đầu tư nhà máy đường hiện đại.',
        effects: { economy: 20, confidence: 15, adaptability: 15, solidarity: 25 },
        outcome: 'Việt Nam tự chủ được nguồn đường tiêu dùng trong nước, bảo vệ sinh kế cho hàng vạn hộ nông dân trồng mía ở miền Trung và miền Tây.',
        lesson1991: 'Bài học 1991 (Nâng đỡ sinh kế nông dân): Bảo hộ có lộ trình kết hợp nâng cấp công nghệ chế biến giúp ngành nông nghiệp chuyển đổi bền vững.'
      },
      {
        text: 'Thả nổi hoàn toàn thị trường đường để đường ngoại tự do tràn vào bóp nghẹt ngành mía đường nội địa lạc hậu.',
        effects: { economy: -15, confidence: -20, adaptability: 10, solidarity: -20 },
        outcome: 'Nông dân trồng mía chặt bỏ mía ồ ạt chuyển sang trồng ngô sắn, các nhà máy đường nội địa phá sản hàng loạt, gây nợ xấu lớn cho ngân hàng.',
        lesson1991: 'Bài học 1991 (Bảo vệ nông sản thiết thực): Buông xuôi nông sản thô sơ trước cơn lốc hàng ngoại giá rẻ khi chưa kịp nâng cấp công nghệ sẽ gây tổn thương lòng dân.'
      },
      {
        text: 'Áp đặt cấm nhập khẩu đường tuyệt đối vĩnh viễn và trợ cấp bù lỗ 100% chi phí sản xuất cho các nhà máy đường lạc hậu.',
        effects: { economy: -20, confidence: -10, adaptability: -20, solidarity: 10 },
        outcome: 'Giá đường trong nước bị đẩy lên cao gấp 3 lần giá thế giới, tạo gánh nặng lớn cho người tiêu dùng và các ngành sản xuất bánh kẹo, giải khát.',
        lesson1991: 'Bài học 1991 (Tránh bảo hộ mù quáng): Trợ cấp bao cấp vô thời hạn cho công nghệ yếu kém chỉ nuôi dưỡng sự trì trệ và phá vỡ kỷ cương tài chính.'
      }
    ]
  },
  {
    id: 50,
    title: 'Chuẩn bị gia nhập Hiệp định thương mại GATT/WTO',
    situation: 'Đầu năm 1995, sau khi bình thường hóa quan hệ với các đối tác lớn, Việt Nam nhận được lời mời nộp đơn xin gia nhập Hiệp định chung về thuế quan và thương mại (GATT/WTO). Việc tham gia mang lại cơ hội xuất khẩu lớn nhưng buộc phải cam kết cắt giảm sâu thuế quan bảo hộ.',
    choices: [
      {
        text: 'Nộp đơn xin gia nhập ngay lập tức, thành lập Ủy ban đàm phán quốc gia và chủ động xây dựng lộ trình cắt giảm thuế quan nâng cấp doanh nghiệp.',
        effects: { economy: 25, confidence: 20, adaptability: 25, solidarity: 15 },
        outcome: 'Mở ra chương mới cho tiến trình hội nhập kinh tế quốc tế sâu rộng, đưa Việt Nam tham gia trực tiếp vào chuỗi cung ứng toàn cầu hóa.',
        lesson1991: 'Bài học 1991 (Dũng cảm hội nhập toàn cầu): Chủ động gia nhập luật chơi chung quốc tế để buộc các doanh nghiệp trong nước phải tự đổi mới nâng cao sức cạnh tranh.'
      },
      {
        text: 'Từ chối gia nhập WTO để bảo vệ tuyệt đối hệ thống kinh tế độc lập tự chủ của quốc gia, tiếp tục áp dụng hàng rào thuế bảo hộ vĩnh viễn.',
        effects: { economy: -20, confidence: -15, adaptability: -25, solidarity: 10 },
        outcome: 'Việt Nam bị đứng ngoài lề làn sóng toàn cầu hóa dòng vốn FDI, các doanh nghiệp xuất khẩu trong nước gặp rào cản thuế quan đắt đỏ ở nước ngoài.',
        lesson1991: 'Bài học 1991 (Tránh tự cô lập kinh tế): Cô lập khỏi hệ thống thương mại đa phương toàn cầu sẽ tự triệt tiêu các cơ hội bứt phá công nghiệp của quốc gia.'
      },
      {
        text: 'Chỉ xin gia nhập làm quan sát viên lâu dài để lấy tiếng vang đối ngoại mà không thực hiện bất kỳ cam kết mở cửa thị trường hay cắt giảm thuế nào.',
        effects: { economy: 5, confidence: 5, adaptability: -10, solidarity: 5 },
        outcome: 'Không tạo được sức hút thực chất đối với các dòng vốn FDI chất lượng cao, các đối tác thương mại lớn trì hoãn trao quy chế tối huệ quốc cho ta.',
        lesson1991: 'Bài học 1991 (Hội nhập thực chất): Đổi mới và hội nhập phải đi vào chiều sâu hành động thực tế, không thể dừng lại ở khẩu hiệu hình thức đối ngoại.'
      }
    ]
  }
];
