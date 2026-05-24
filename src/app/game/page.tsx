'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Gamepad2,
  ArrowUpRight,
  Coins,
  ShieldCheck,
  Cpu,
  Users,
  RotateCcw,
  Sparkles,
  Award,
  AlertTriangle,
  Play,
  ArrowRight,
  HelpCircle,
} from 'lucide-react';
import { Footer } from '@/shared/components/layout';
import { Reveal, ScrollProgress, TiltCard, Stagger, StaggerItem } from '@/shared/components/motion';
import { cn } from '@/shared/utils';

// Game Status Enum
type GameState = 'START' | 'PLAYING' | 'FEEDBACK' | 'GAMEOVER' | 'VICTORY';

interface StatEffects {
  economy: number;
  confidence: number;
  adaptability: number;
  solidarity: number;
}

interface Choice {
  text: string;
  effects: StatEffects;
  outcome: string;
  lesson1991: string;
}

interface Question {
  id: number;
  title: string;
  situation: string;
  choices: Choice[];
}

const QUESTIONS: Question[] = [
  {
    id: 1,
    title: 'AI Thế Chỗ Việc Làm',
    situation: 'Bộ phận của bạn vừa tiếp nhận một công cụ AI thế hệ mới có thể tự động viết báo cáo và phân tích số liệu nhanh gấp 10 lần con người. Sếp thông báo sẽ tái cơ cấu nhân sự vào cuối tháng.',
    choices: [
      {
        text: 'Chủ động học cách làm chủ AI mới để nâng hiệu suất cá nhân và đề xuất quy trình mới cho nhóm.',
        effects: { economy: 15, confidence: 10, adaptability: 25, solidarity: -15 },
        outcome: 'Bạn đã làm chủ công cụ AI mới, tăng hiệu suất vượt bậc, nhưng việc tập trung tự học khiến bạn tạm thời thiếu kết nối với các hoạt động chung của phòng ban.',
        lesson1991: 'Bài học 1991 (Thích nghi & Đổi mới): Khi đối mặt với đổi thay, việc chủ động đổi mới tư duy, nâng cấp năng lực thay vì đóng cửa trốn tránh sẽ giúp định vị bản thân và tự chủ hành động.',
      },
      {
        text: 'Tuyên truyền, kêu gọi đồng nghiệp tẩy chay công nghệ AI để bảo vệ các phương thức làm việc truyền thống.',
        effects: { economy: -15, confidence: -10, adaptability: -20, solidarity: 20 },
        outcome: 'Hành động tăng tính gắn kết bảo vệ lẫn nhau của nhóm đồng nghiệp, nhưng khiến phòng ban bị trì trệ kỹ năng và làm giảm năng suất kinh tế của doanh nghiệp.',
        lesson1991: 'Bài học 1991 (Tránh bảo thủ, giáo điều): Giữ nguyên tư duy cũ và mô hình bao cấp trì trệ bất chấp thực tế biến đổi sẽ làm xói mòn năng lực thích ứng, đẩy hệ thống vào khủng hoảng sâu hơn.',
      },
      {
        text: 'Giữ im lặng và tiếp tục làm việc cũ như bình thường, hy vọng rằng sự chăm chỉ thủ công sẽ giúp bạn được giữ lại.',
        effects: { economy: -10, confidence: -10, adaptability: -15, solidarity: 10 },
        outcome: 'Giữ được quan hệ hòa nhã tạm thời với nhóm, nhưng sự thụ động khiến bạn tụt hậu so với tốc độ số hóa và thu nhập sút giảm.',
        lesson1991: 'Bài học 1991 (Chủ động ứng phó): Thụ động và đứng yên trong bão là tự tước đi cơ hội thích nghi, lịch sử Đổi mới chứng minh cần chủ động tìm giải pháp đột phá thay vì chờ đợi.',
      },
    ],
  },
  {
    id: 2,
    title: 'Khủng Hoảng Tài Chính Cá Nhân',
    situation: 'Kinh tế suy thoái diện rộng khiến công ty cắt giảm 20% lương của toàn bộ nhân viên. Các hóa đơn sinh hoạt của bạn lại đang tăng vọt.',
    choices: [
      {
        text: 'Cắt giảm chi phí không thiết yếu, tự lực học hỏi kỹ năng mới để nhận thêm việc freelance ngoài giờ.',
        effects: { economy: 20, confidence: -10, adaptability: 15, solidarity: -10 },
        outcome: 'Tài chính ổn định trở lại nhờ thu nhập freelance và kỹ năng mới, nhưng cơ thể mệt mỏi khiến tinh thần bạn sa sút và ít thời gian chăm lo gia đình.',
        lesson1991: 'Bài học 1991 (Tự lực cánh sinh): Khi nguồn viện trợ bên ngoài bị cắt đứt, phát huy tối đa nội lực bản thân là giải pháp sinh tồn hàng đầu để giành lại sự chủ động.',
      },
      {
        text: 'Than thở về tình trạng khó khăn trên mạng xã hội và liên tục vay mượn tiền từ bạn bè để duy trì mức sống cũ.',
        effects: { economy: 10, confidence: -15, adaptability: -15, solidarity: -10 },
        outcome: 'Bạn có tiền trang trải hóa đơn trước mắt, nhưng nợ nần tích tụ làm bạn mất động lực phát triển và tạo gánh nặng, làm phiền lòng bạn bè.',
        lesson1991: 'Bài học 1991 (Tránh trông chờ, ỷ lại): Trông chờ vào cứu trợ hay nguồn lực vay mượn bên ngoài mà không tự cải cách nội lực chỉ mang lại sự phụ thuộc và rủi ro tích tụ.',
      },
      {
        text: 'Rủ một nhóm bạn thân cùng thuê nhà chung, chia sẻ chi phí sinh hoạt và mua thực phẩm số lượng lớn giá sỉ.',
        effects: { economy: -10, confidence: 15, adaptability: 5, solidarity: 25 },
        outcome: 'Việc dọn nhà tốn chi phí ban đầu và hạn chế tự do cá nhân, nhưng sự đồng lòng chia sẻ giúp giảm đáng kể chi phí hàng tháng và gắn kết tình bạn.',
        lesson1991: 'Bài học 1991 (Đại đoàn kết toàn dân): Sức mạnh đoàn kết và tương thân tương ái giúp tạo nên điểm tựa tinh thần vững chắc để vượt qua mọi giai đoạn gian khó nhất.',
      },
    ],
  },
  {
    id: 3,
    title: 'Cạnh Tranh Từ Đối Thủ Tự Động Hóa',
    situation: 'Cửa hàng đồ thủ công mỹ nghệ của gia đình bạn đang bị mất thị phần nghiêm trọng do các đối thủ lớn nhập hàng tự động hóa giá rẻ từ nước ngoài về bán phá giá.',
    choices: [
      {
        text: 'Ứng dụng công nghệ vào tiếp thị đa kênh, xây dựng thương hiệu dựa trên câu chuyện di sản và văn hóa độc bản.',
        effects: { economy: 20, confidence: 10, adaptability: 25, solidarity: -15 },
        outcome: 'Khách hàng yêu thích câu chuyện thương hiệu của bạn mang lại doanh thu tốt, nhưng việc tập trung tự doanh làm giảm liên kết liên minh làng nghề truyền thống.',
        lesson1991: 'Bài học 1991 (Kinh tế nhiều thành phần): Thừa nhận quy luật thị trường, đa dạng hóa phương thức kinh doanh và ứng dụng khoa học công nghệ để mở cửa hội nhập.',
      },
      {
        text: 'Quyết định đua giá rẻ bằng cách hạ thấp chất lượng nguyên liệu thô và bớt xén quy trình sản xuất thủ công.',
        effects: { economy: 10, confidence: -25, adaptability: -15, solidarity: -5 },
        outcome: 'Tiết kiệm chi phí thô giúp giữ giá thấp tạm thời, nhưng khách hàng phát hiện sản phẩm lỗi, khiến uy tín lâu đời bị sụt giảm nghiêm trọng.',
        lesson1991: 'Bài học 1991 (Giữ vững nguyên tắc): Linh hoạt trong giải pháp kinh tế nhưng phải kiên định mục tiêu chất lượng và giá trị cốt lõi, không chạy theo lợi nhuận nhất thời.',
      },
      {
        text: 'Liên kết các hộ làm đồ thủ công xung quanh thành một hợp tác xã, chia sẻ chi phí marketing, kho bãi và gian hàng trưng bày.',
        effects: { economy: -10, confidence: 15, adaptability: 10, solidarity: 30 },
        outcome: 'Mất chi phí đầu tư hạ tầng và phân chia lợi ích chung phức tạp hơn, nhưng sự liên kết giúp nhóm có quy mô đủ lớn để thương lượng giá nguyên liệu.',
        lesson1991: 'Bài học 1991 (Liên kết kinh tế tập thể): Tập hợp sức mạnh của nhiều chủ thể nhỏ lẻ thành một khối thống nhất giúp tăng khả năng chống chịu trước sóng gió cạnh tranh.',
      },
    ],
  },
  {
    id: 4,
    title: 'Kỹ Năng Cốt Lõi Lỗi Thời',
    situation: 'Các kỹ năng viết mã nguồn và thiết kế đồ họa mà bạn đã dành nhiều năm tích lũy bỗng bị coi là lỗi thời khi một mô hình AI tạo ảnh và lập trình tự động ra đời.',
    choices: [
      {
        text: 'Giữ vững kiến thức nền tảng (tư duy logic, bố cục) kết hợp học nhanh kỹ thuật viết prompt ứng dụng AI mới.',
        effects: { economy: -10, confidence: 15, adaptability: 25, solidarity: -5 },
        outcome: 'Tốn một khoản chi phí học tập ban đầu, nhưng bạn tối ưu hóa được tốc độ thiết kế lên gấp 3 lần và nắm giữ vị trí quan trọng trong team dự án.',
        lesson1991: 'Bài học 1991 (Kiên định mục tiêu, linh hoạt phương pháp): Giữ vững lý tưởng nền tảng cốt lõi, nhưng phải liên tục cập nhật công cụ và phương thức hành động theo thực tiễn.',
      },
      {
        text: 'Kịch liệt bảo vệ quan điểm thiết kế thuần thủ công, từ chối chạm vào các công cụ AI vì cho rằng chúng làm mất đi tính nghệ thuật.',
        effects: { economy: -15, confidence: -10, adaptability: -25, solidarity: 10 },
        outcome: 'Giữ được sự tôn trọng của một số nghệ nhân truyền thống, nhưng hiệu suất chậm chạp khiến bạn bị khách hàng phàn nàn và sụt giảm thu nhập.',
        lesson1991: 'Bài học 1991 (Chống tự mãn, bảo thủ): Bảo thủ và trì trệ không chịu đổi mới cách làm sẽ biến ta thành lực lượng lạc hậu, đẩy bản thân vào thế bị đào thải.',
      },
      {
        text: 'Bỏ nghề lập trình/thiết kế và chuyển hẳn sang làm tài xế công nghệ hoặc các công việc lao động giản đơn để không phải áp lực học hỏi.',
        effects: { economy: -15, confidence: 10, adaptability: -20, solidarity: -5 },
        outcome: 'Giải tỏa áp lực tinh thần trước mắt do không phải liên tục cập nhật công nghệ, nhưng công việc bấp bênh khiến kinh tế cá nhân sa sút.',
        lesson1991: 'Bài học 1991 (Tinh thần tự cường): Khó khăn đòi hỏi sự kiên cường đối mặt và vươn lên bằng tự lực cánh sinh, trốn tránh thách thức chỉ dời lịch đối đầu khủng hoảng.',
      },
    ],
  },
  {
    id: 5,
    title: 'Kiệt Sức & Mất Định Hướng',
    situation: 'Khối lượng công việc tăng cao kết hợp với áp lực học tập khiến bạn rơi vào tình trạng kiệt sức (burnout) kéo dài, hoang mang về tương lai của bản thân.',
    choices: [
      {
        text: 'Cắt đứt liên lạc với đồng nghiệp và bạn bè, tự nhốt mình trong phòng để tự suy ngẫm giải pháp.',
        effects: { economy: -10, confidence: -25, adaptability: 10, solidarity: -20 },
        outcome: 'Có chút thời gian tự nghiên cứu công nghệ mới, nhưng sự im lặng gây hiểu lầm là thiếu trách nhiệm khiến đồng nghiệp mất lòng tin.',
        lesson1991: 'Bài học 1991 (Tránh chia rẽ, cô lập): Sự cô lập làm suy giảm sức mạnh chống đỡ chung. Mọi sự vượt bão thành công đều cần sự đồng lòng gắn kết tập thể.',
      },
      {
        text: 'Chia sẻ thật lòng về tình trạng sức khỏe với quản lý và gia đình, xin nghỉ phép ngắn hạn để lập kế hoạch tái định vị.',
        effects: { economy: -15, confidence: 25, adaptability: 10, solidarity: 15 },
        outcome: 'Bị trừ lương do nghỉ phép tạm thời, nhưng đổi lại bạn nhận được sự cảm thông lớn từ người thân và tái tạo năng lượng định hướng tương lai.',
        lesson1991: 'Bài học 1991 (Chăm lo đời sống tinh thần & con người): Phát triển phải lấy con người làm trung tâm. Chăm lo đời sống tinh thần và vật chất giúp củng cố niềm tin hành động.',
      },
      {
        text: 'Uống nước tăng lực, cà phê liên tục để làm việc xuyên đêm nhằm kịp tiến độ, tin rằng chỉ cần cố gắng hết sức là bão sẽ qua.',
        effects: { economy: 15, confidence: -20, adaptability: -15, solidarity: -10 },
        outcome: 'Hoàn thành kịp tiến độ dự án được thưởng nóng, nhưng cơ thể suy kiệt hoàn toàn sau đó dẫn tới nhập viện dài ngày vì quá tải.',
        lesson1991: 'Bài học 1991 (Không phát triển nóng vội): Gia tốc tăng trưởng quá đà bất chấp giới hạn chịu đựng thực tế của các nguồn lực sẽ dẫn tới sự đổ vỡ toàn diện.',
      },
    ],
  },
  {
    id: 6,
    title: 'Khủng Hoảng Truyền Thông Ác Ý',
    situation: 'Dự án khởi nghiệp của bạn bị đối thủ cạnh tranh không lành mạnh tung video Deepfake giả mạo lên mạng xã hội, vu khống sản phẩm của bạn đánh cắp dữ liệu người dùng.',
    choices: [
      {
        text: 'Thực hiện đối thoại minh bạch: công bố mã nguồn kiểm toán bảo mật và nhờ cộng đồng người dùng thân thiết chia sẻ giúp sự thật.',
        effects: { economy: -10, confidence: 20, adaptability: 10, solidarity: 25 },
        outcome: 'Tốn chi phí thuê kiểm toán độc lập khẩn cấp, nhưng sự minh bạch giúp củng cố niềm tin và thắt chặt tình cảm cộng đồng bảo vệ bạn.',
        lesson1991: 'Bài học 1991 (Lấy dân làm gốc): Đặt niềm tin vào quần chúng nhân dân. Mọi chính sách minh bạch hướng đến lợi ích chung luôn giành được sự đồng thuận vững chắc nhất.',
      },
      {
        text: 'Thuê ngay một đội ngũ tài khoản ảo để tấn công bôi nhọ lại, tung các tin đồn xấu về đời tư của ban giám đốc đối thủ để trả đũa.',
        effects: { economy: -15, confidence: -25, adaptability: 5, solidarity: -20 },
        outcome: 'Gây chút nhiễu loạn cho đối thủ, nhưng chiến dịch bẩn bị phanh phui khiến doanh nghiệp của bạn mất sạch uy tín và bị pháp luật điều tra.',
        lesson1991: 'Bài học 1991 (Đấu tranh có nguyên tắc): Sử dụng các thủ đoạn phi nguyên tắc sẽ tự hủy hoại uy tín cốt lõi, làm suy yếu nền tảng đạo đức của tổ chức.',
      },
      {
        text: 'Tạm thời khóa trang cá nhân và website doanh nghiệp, im lặng rút lui chờ đợi bão dư luận lắng xuống theo thời gian.',
        effects: { economy: -25, confidence: -15, adaptability: -10, solidarity: 10 },
        outcome: 'Tránh được tranh cãi trực tiếp trên mạng, nhưng sự im lặng bị đối tác coi là ngầm thừa nhận lỗi sai khiến bạn mất sạch đơn hàng xuất khẩu.',
        lesson1991: 'Bài học 1991 (Chủ động đối ngoại rộng mở): Không lựa chọn tự đóng cửa cô lập khi gặp biến cố, mà phải chủ động đối thoại rộng mở để bảo vệ chủ quyền uy tín.',
      },
    ],
  },
  {
    id: 7,
    title: 'Biến Động Nhân Sự Đột Ngột',
    situation: 'Ba nhân sự cốt cán trong dự án phần mềm của bạn đột ngột nộp đơn xin nghỉ việc để đầu quân cho đối thủ cạnh tranh ngay trước ngày bàn giao sản phẩm 2 tuần.',
    choices: [
      {
        text: 'Họp đội ngũ còn lại, phân chia lại công việc công bằng, đào tạo chéo kỹ năng nhanh và hứa tăng quỹ thưởng xứng đáng.',
        effects: { economy: -15, confidence: 20, adaptability: 15, solidarity: 25 },
        outcome: 'Quỹ lương tăng vọt làm ảnh hưởng lợi nhuận ngắn hạn, nhưng sự thấu hiểu giúp ổn định tinh thần và cả team đồng lòng hoàn thành dự án.',
        lesson1991: 'Bài học 1991 (Đoàn kết và khích lệ nội bộ): Củng cố sự đồng thuận nội bộ và chăm lo thiết thực đến quyền lợi của thành viên để tạo nên sức mạnh đồng tâm hiệp lực.',
      },
      {
        text: 'Yêu cầu các thành viên còn lại tăng ca gấp đôi thời gian bình thường mà không hỗ trợ thêm phụ cấp tài chính.',
        effects: { economy: 15, confidence: -25, adaptability: -15, solidarity: -25 },
        outcome: 'Tiết kiệm được ngân sách lương trước mắt, nhưng đồng nghiệp bức xúc và lần lượt viết đơn nghỉ việc hàng loạt khiến dự án đổ bể.',
        lesson1991: 'Bài học 1991 (Tôn trọng sức dân): Phát huy sức mạnh tập thể phải đi đôi với bồi dưỡng sức dân. Ép chỉ tiêu quá sức chịu đựng sẽ dẫn đến tự tan rã từ bên trong.',
      },
      {
        text: 'Thuê gấp ồ ạt các freelancer bên ngoài vào thế chỗ ngay mà không qua đào tạo hay kiểm tra năng lực.',
        effects: { economy: -10, confidence: -15, adaptability: -15, solidarity: 10 },
        outcome: 'Bù đắp đủ số lượng nhân sự nhanh chóng, nhưng nhân sự mới thiếu năng lực làm hỏng quy trình thiết kế khiến chất lượng sản phẩm sụt giảm.',
        lesson1991: 'Bài học 1991 (Đổi mới có lộ trình khoa học): Đổi mới phương thức quản lý vội vã, thiếu chuẩn bị bài bản sẽ gây mất ổn định và phá vỡ cấu trúc sẵn có.',
      },
    ],
  },
  {
    id: 8,
    title: 'Tiêu Chuẩn Tiêu Dùng Xanh',
    situation: 'Nhà phân phối quốc tế yêu cầu dòng sản phẩm may mặc của bạn phải chuyển đổi sang nguyên liệu hữu cơ và đạt chứng chỉ carbon trung tính, nếu không họ sẽ hủy hợp đồng.',
    choices: [
      {
        text: 'Chấp nhận đầu tư lớn chuyển đổi năng lượng mặt trời tại nhà xưởng và liên kết nông dân bản địa trồng bông hữu cơ.',
        effects: { economy: -20, confidence: 15, adaptability: 25, solidarity: 10 },
        outcome: 'Chi phí đầu tư công nghệ nặng nề làm dòng tiền sụt giảm, nhưng đổi lại bạn giữ được hợp đồng lớn và nâng cao giá trị xanh lâu dài.',
        lesson1991: 'Bài học 1991 (Chủ động hội nhập đối ngoại): Chủ động nâng cấp thực lực trong nước để thích ứng với các luật chơi và tiêu chuẩn tiến bộ của thế giới.',
      },
      {
        text: 'Mua lại các chứng nhận trung hòa carbon không rõ nguồn gốc từ chợ đen để hợp thức hóa hồ sơ xuất khẩu mà không sửa quy trình.',
        effects: { economy: 15, confidence: -30, adaptability: -15, solidarity: -10 },
        outcome: 'Tiết kiệm được chi phí đầu tư ban đầu, nhưng gian lận bị đối tác phát hiện khiến thương hiệu của bạn bị cấm xuất khẩu vĩnh viễn.',
        lesson1991: 'Bài học 1991 (Tôn trọng thực tiễn khách quan): Đổi mới phát triển phải dựa trên nền tảng thực chất và thực tiễn, giải pháp đối phó, dối trá sớm muộn cũng thất bại.',
      },
      {
        text: 'Từ bỏ thị trường xuất khẩu, co cụm hoạt động kinh doanh về thị trường nội địa nhỏ hẹp để tránh phải thay đổi hệ thống sản xuất.',
        effects: { economy: -25, confidence: 10, adaptability: -15, solidarity: 5 },
        outcome: 'Tránh được áp lực tiêu chuẩn quốc tế và ổn định quy trình cũ, nhưng doanh thu của bạn sụt giảm mạnh và mất cơ hội mở rộng.',
        lesson1991: 'Bài học 1991 (Tự lực gắn liền mở cửa): Tự lực tự cường là để có thực lực tham gia hội nhập hiệu quả hơn, chứ không phải là đóng cửa tự cô lập rút lui.',
      },
    ],
  },
  {
    id: 9,
    title: 'Nâng Cấp Bản Thân',
    situation: 'Công ty công bố chương trình hỗ trợ 50% học phí cho các khóa học nâng cao năng lực phân tích dữ liệu ngoài giờ làm việc. Bạn phản ứng ra sao?',
    choices: [
      {
        text: 'Chủ động trích ngân sách cá nhân đóng 50% còn lại, sắp xếp thời gian đi học để chuẩn bị cho cơ hội thăng tiến.',
        effects: { economy: -15, confidence: 15, adaptability: 25, solidarity: -5 },
        outcome: 'Mất một khoản chi phí và thời gian cá nhân ban đầu, nhưng bạn nhanh chóng làm chủ công nghệ mới và được bổ nhiệm làm trưởng nhóm dự án.',
        lesson1991: 'Bài học 1991 (Đầu tư cho nguồn lực con người): Sự phát triển bền vững bắt đầu từ nâng cao chất lượng nguồn nhân lực. Tri thức tự thân là tài sản tự chủ bền vững nhất.',
      },
      {
        text: 'Từ chối tham gia vì cho rằng công việc hiện tại đã quá bận rộn và những gì bạn đang làm vẫn đủ đáp ứng yêu cầu.',
        effects: { economy: 10, confidence: -10, adaptability: -20, solidarity: -5 },
        outcome: 'Tiết kiệm được tiền bạc và có thời gian rảnh, nhưng khi công ty chuyển đổi phần mềm quản lý, bạn trở nên lạc hậu và mất cơ hội tăng lương.',
        lesson1991: 'Bài học 1991 (Chống tự mãn, trì trệ): Sự thỏa mãn và lười thích nghi trong môi trường thay đổi nhanh chóng chính là bước lùi đẩy ta vào thế bị đào thải.',
      },
      {
        text: 'Đòi hỏi công ty phải đài thọ 100% học phí và tính giờ học vào giờ làm việc hành chính thì mới tham gia.',
        effects: { economy: -5, confidence: -10, adaptability: -15, solidarity: 10 },
        outcome: 'Tạo được chút tiếng vang đấu tranh đòi quyền lợi cho nhóm, nhưng đề xuất bị từ chối và bạn bỏ lỡ cơ hội vàng nâng cấp kỹ năng.',
        lesson1991: 'Bài học 1991 (Tinh thần chủ động vượt khó): Tư duy trông chờ, đòi hỏi hoàn toàn vào ngoại lực sẽ triệt tiêu động lực tự cường và tính năng động tự quyết.',
      },
    ],
  },
  {
    id: 10,
    title: 'Chia Sẻ Khó Khăn Nội Bộ',
    situation: 'Một đồng nghiệp cùng nhóm thiết kế gặp biến cố lớn về sức khỏe gia đình dẫn đến hiệu suất sụt giảm nghiêm trọng, ảnh hưởng trực tiếp đến kết quả chung của cả team.',
    choices: [
      {
        text: 'Đề xuất lên cấp trên cho người này thôi việc ngay lập tức để bảo vệ bảng thành tích và tiến độ chung của nhóm.',
        effects: { economy: 15, confidence: -20, adaptability: 5, solidarity: -30 },
        outcome: 'Giữ vững hiệu suất kinh tế ngắn hạn của nhóm, nhưng sự lạnh lùng của bạn khiến cả phòng phẫn nộ, tinh thần đoàn kết bị phá vỡ hoàn toàn.',
        lesson1991: 'Bài học 1991 (Ý thức đoàn kết tập thể): Mọi chính sách phát triển phải lấy lòng người làm gốc. Sự ích kỷ cá nhân nhân danh hiệu suất sẽ làm xói mòn lòng tin.',
      },
      {
        text: 'Cùng nhóm họp lại phân công gánh đỡ một phần công việc của họ trong 1 tháng, giúp người đồng nghiệp có thời gian ổn định.',
        effects: { economy: -10, confidence: 20, adaptability: 10, solidarity: 30 },
        outcome: 'Tốn thêm công sức và giờ làm ngoài hành chính không công, nhưng đổi lại tinh thần đồng đội thắt chặt, cả nhóm đồng lòng bứt phá sau đó.',
        lesson1991: 'Bài học 1991 (Đại đoàn kết): Đoàn kết là sức mạnh cội nguồn. Sự sẻ chia, tương thân tương ái lúc khó khăn tạo ra mối liên kết bền chặt vượt mọi giông bão.',
      },
      {
        text: 'Mặc kệ ai làm việc nấy, không hỗ trợ công việc và liên tục phê bình lỗi chậm trễ của họ trong các buổi họp chung.',
        effects: { economy: 5, confidence: -15, adaptability: -5, solidarity: -20 },
        outcome: 'Gây chút áp lực ép tiến độ hoàn thành việc, nhưng không khí căng thẳng khiến người đồng nghiệp nghỉ việc, toàn đội rơi vào chia rẽ.',
        lesson1991: 'Bài học 1991 (Tránh chia rẽ nội bộ): Sự thờ ơ và xung đột nội bộ làm suy yếu khả năng phòng thủ, triệt tiêu sức mạnh hành động chung của cả hệ thống.',
      },
    ],
  },
  {
    id: 11,
    title: 'Lựa Chọn Nguồn Vốn Phát Triển',
    situation: 'Dự án khởi nghiệp của bạn đang cần gấp một nguồn vốn lớn để nâng cấp máy chủ bảo mật. Có 3 đề xuất gọi vốn được đưa ra.',
    choices: [
      {
        text: 'Nhận đầu tư từ quỹ ngoại kèm điều kiện họ được can thiệp vào định hướng và nhân sự của dự án.',
        effects: { economy: 25, confidence: -15, adaptability: 15, solidarity: -10 },
        outcome: 'Có ngân sách nâng cấp công nghệ ngay, nhưng việc mất quyền tự chủ khiến nội bộ tranh cãi, tinh thần tự quyết bị hạn chế.',
        lesson1991: 'Bài học 1991 (Độc lập tự chủ đối ngoại): Hợp tác quốc tế là cần thiết nhưng phải luôn giữ vững nguyên tắc độc lập, chủ quyền tự chủ của quốc gia và tổ chức.',
      },
      {
        text: 'Tự kêu gọi vốn đóng góp nhỏ từ cộng đồng người dùng và người thân, chấp nhận tiến độ nâng cấp chậm hơn.',
        effects: { economy: -15, confidence: 15, adaptability: -10, solidarity: 25 },
        outcome: 'Vốn tích lũy nhỏ làm chậm tiến trình đổi mới công nghệ, nhưng bù lại bạn thắt chặt mối liên kết sở hữu chung với cộng đồng tin cậy.',
        lesson1991: 'Bài học 1991 (Tự lực cánh sinh là gốc): Phát huy nội lực trong nước là cái gốc vững chắc nhất, giúp duy trì chủ quyền phát triển bền vững lâu dài.',
      },
      {
        text: 'Vay ngân hàng thương mại với lãi suất cao và thế chấp bằng toàn bộ tài sản thương hiệu hiện tại.',
        effects: { economy: 15, confidence: -20, adaptability: 10, solidarity: -10 },
        outcome: 'Nâng cấp máy chủ kịp thời, nhưng sức ép nợ vay đè nặng khiến bạn luôn sống trong hoang mang và áp lực tài chính đe dọa sinh tồn.',
        lesson1991: 'Bài học 1991 (Quản trị rủi ro vĩ mô): Sự nóng vội và nợ nần vượt quá khả năng thực tế của nền kinh tế sẽ tích tụ bong bóng khủng hoảng nghiêm trọng.',
      },
    ],
  },
  {
    id: 12,
    title: 'Bảo Vệ Bản Quyền Ý Tưởng',
    situation: 'Ý tưởng phần mềm của nhóm bạn bị một công ty lớn "sao chép" quy trình và đăng ký nhãn hiệu trước. Bạn sẽ xử lý vấn đề này ra sao?',
    choices: [
      {
        text: 'Theo đuổi vụ kiện pháp lý chính thức, công bố các bằng chứng nghiên cứu lịch sử của nhóm ra công luận.',
        effects: { economy: -15, confidence: 15, adaptability: 10, solidarity: 15 },
        outcome: 'Tốn một khoản phí luật sư lớn và thời gian theo đuổi, nhưng bạn bảo vệ được công lý và nhận được sự ủng hộ rộng rãi từ cộng đồng.',
        lesson1991: 'Bài học 1991 (Dùng luật pháp quản lý): Chuyển từ quản trị mệnh lệnh hành chính sang quản lý xã hội bằng luật pháp, cơ chế và chính sách minh bạch.',
      },
      {
        text: 'Công bố mã nguồn mở (Open-source) toàn bộ ý tưởng để ai cũng dùng được, chuyển sang cung cấp dịch vụ tùy biến trả phí.',
        effects: { economy: -20, confidence: 20, adaptability: 25, solidarity: -10 },
        outcome: 'Mất hoàn toàn doanh thu độc quyền từ ý tưởng, nhưng bạn tạo dựng được cộng đồng phát triển khổng lồ và kích hoạt chuyển đổi công nghệ cực nhanh.',
        lesson1991: 'Bài học 1991 (Chủ động đổi mới biện pháp): Thay đổi phương thức kinh doanh linh hoạt để thích nghi với hoàn cảnh thay vì cố chấp giữ mô hình độc quyền khép kín.',
      },
      {
        text: 'Im lặng chấp nhận mất bản quyền và tiếp tục tự phát triển các tính năng nhỏ khác trong âm thầm.',
        effects: { economy: -15, confidence: -15, adaptability: -15, solidarity: 5 },
        outcome: 'Giữ được sự hòa nhã trước mắt với đối thủ lớn, nhưng bạn mất đi động lực sáng tạo và bị coi thường năng lực trong giới chuyên môn.',
        lesson1991: 'Bài học 1991 (Tinh thần tự chủ độc lập): Tự chủ phát triển đòi hỏi phải kiên quyết đấu tranh bảo vệ lợi ích hợp pháp của mình, tránh nhu nhược chịu thiệt.',
      },
    ],
  },
  {
    id: 13,
    title: 'Chuyển Đổi Mô Hình Làm Việc',
    situation: 'Sau đại dịch, nhân viên muốn duy trì làm việc từ xa (Remote), nhưng ban quản lý lo ngại hiệu suất sụt giảm và muốn mọi người quay lại văn phòng 100%.',
    choices: [
      {
        text: 'Thiết lập mô hình làm việc linh hoạt (Hybrid): Lên văn phòng 2 ngày cố định để họp nhóm, 3 ngày làm tại nhà.',
        effects: { economy: 10, confidence: 15, adaptability: 25, solidarity: -15 },
        outcome: 'Doanh nghiệp hoạt động linh hoạt và tiết kiệm chi phí, nhưng việc ít gặp mặt trực tiếp làm giảm tính gắn kết giao lưu thường nhật.',
        lesson1991: 'Bài học 1991 (Linh hoạt trong phương pháp): Giữ vững mục tiêu năng suất lao động (kiên định), nhưng phương thức tổ chức làm việc phải uyển chuyển thay đổi (linh hoạt).',
      },
      {
        text: 'Yêu cầu toàn bộ nhân viên phải có mặt tại văn phòng 100% thời gian để duy trì kỷ luật sắt.',
        effects: { economy: -10, confidence: -10, adaptability: -10, solidarity: 20 },
        outcome: 'Tinh thần kỷ luật và gắn kết tăng nhẹ, nhưng chi phí vận hành văn phòng tăng cao và một số nhân sự giỏi nộp đơn nghỉ việc vì gò bó.',
        lesson1991: 'Bài học 1991 (Tránh giáo điều, mệnh lệnh): Sử dụng mệnh lệnh hành chính áp đặt một chiều mà bỏ qua nguyện vọng thực tế của nhân dân sẽ tạo ra phản ứng ngược.',
      },
      {
        text: 'Cho phép làm việc từ xa (Remote) 100% và đóng cửa văn phòng đại diện để tối ưu hóa chi phí.',
        effects: { economy: 20, confidence: -10, adaptability: 10, solidarity: -25 },
        outcome: 'Tiết kiệm triệt để ngân sách thuê mặt bằng, nhưng việc thiếu kết nối trực tiếp làm xói mòn sâu sắc văn hóa doanh nghiệp và tính đoàn kết nhóm.',
        lesson1991: 'Bài học 1991 (Đại đoàn kết cần chất xúc tác): Đoàn kết đòi hỏi sự kết nối thực chất của các thành viên, cắt đứt giao tiếp trực tiếp làm lỏng lẻo khối thống nhất.',
      },
    ],
  },
  {
    id: 14,
    title: 'Sự Cố Rò Rỉ Dữ Liệu',
    situation: 'Hệ thống lưu trữ của dự án bị tin tặc tấn công làm rò rỉ thông tin cá nhân của 1.000 khách hàng thân thiết. Uy tín doanh nghiệp đứng trước thử thách.',
    choices: [
      {
        text: 'Công khai thừa nhận sự cố, xin lỗi khách hàng và đền bù bằng các gói dịch vụ bảo mật nâng cấp miễn phí.',
        effects: { economy: -20, confidence: 20, adaptability: 15, solidarity: 15 },
        outcome: 'Gây thiệt hại tài chính nặng nề để đền bù, nhưng sự dũng cảm chịu trách nhiệm giúp giữ vững lòng tin khách hàng và nâng cấp hệ thống vá lỗi kịp thời.',
        lesson1991: 'Bài học 1991 (Lấy dân làm gốc, sửa sai thực chất): Nhìn thẳng vào sự thật, đánh giá đúng sự thật và dũng cảm sửa đổi sai lầm là bản lĩnh Đổi mới thực chất.',
      },
      {
        text: 'Âm thầm vá lỗi bảo mật và tìm cách che giấu thông tin rò rỉ để tránh làm ảnh hưởng đến giá trị thương hiệu.',
        effects: { economy: 10, confidence: -30, adaptability: 10, solidarity: -10 },
        outcome: 'Tiết kiệm chi phí xử lý truyền thông trước mắt, nhưng khi sự việc bị phanh phui bởi báo chí, lòng tin của khách hàng sụp đổ hoàn toàn.',
        lesson1991: 'Bài học 1991 (Nguyên tắc chân thật): Mọi giải pháp đối phó thiếu trung thực với thực tiễn chỉ tích tụ mầm mống khủng hoảng lớn hơn trong tương lai.',
      },
      {
        text: 'Tuyên bố sự cố là lỗi hoàn toàn từ phía nhà cung cấp dịch vụ đám mây bên thứ ba và từ chối chịu trách nhiệm trực tiếp.',
        effects: { economy: -5, confidence: -20, adaptability: -15, solidarity: -20 },
        outcome: 'Tránh được trách nhiệm pháp lý tạm thời, nhưng việc đổ lỗi làm rạn nứt quan hệ đối tác và khách hàng đánh giá bạn thiếu đạo đức kinh doanh.',
        lesson1991: 'Bài học 1991 (Tinh thần tự lực tự chịu trách nhiệm): Không thể đổ lỗi hoàn cảnh hay các yếu tố bên ngoài cho sự yếu kém nội tại của hệ thống phòng thủ bản thân.',
      },
    ],
  },
  {
    id: 15,
    title: 'Áp Lực Mở Rộng Quy Mô',
    situation: 'Dự án của bạn đang phát triển tốt. Nhà đầu tư yêu cầu phải mở rộng quy mô kinh doanh gấp 3 lần trong vòng 6 tháng để chiếm lĩnh thị trường.',
    choices: [
      {
        text: 'Đẩy mạnh tuyển dụng và mở rộng chi nhánh ồ ạt bằng nguồn vốn vay lớn.',
        effects: { economy: 25, confidence: -20, adaptability: 15, solidarity: -15 },
        outcome: 'Doanh thu tăng trưởng nóng vượt kỳ vọng, nhưng bộ máy quản trị bị quá tải dẫn đến mâu thuẫn nội bộ và mất kiểm soát chất lượng.',
        lesson1991: 'Bài học 1991 (Tránh nóng vội duy ý chí): Tăng trưởng nóng duy ý chí vượt quá năng lực tích lũy thực tế của bộ máy quản lý sẽ dẫn tới khủng hoảng nội bộ.',
      },
      {
        text: 'Kiên trì lộ trình phát triển ổn định, tập trung tối ưu hóa chất lượng sản phẩm hiện tại và đào tạo chiều sâu.',
        effects: { economy: -15, confidence: 20, adaptability: 5, solidarity: 15 },
        outcome: 'Bỏ lỡ cơ hội chiếm lĩnh thị phần lớn và bị sếp phê bình chậm chạp, nhưng đổi lại bạn giữ được sự ổn định tuyệt đối và lòng trung thành của nhóm.',
        lesson1991: 'Bài học 1991 (Kiên định và từng bước chắc chắn): Phát triển bền vững đòi hỏi sự tích lũy về lượng đủ mới tạo ra sự biến đổi về chất, đi từng bước chắc chắn.',
      },
      {
        text: 'Thực hiện nhượng quyền thương hiệu (Franchise) ồ ạt để mở rộng quy mô nhanh chóng mà không cần tốn nhiều vốn tự có.',
        effects: { economy: 15, confidence: -15, adaptability: 10, solidarity: -10 },
        outcome: 'Thu được nguồn phí nhượng quyền lớn, nhưng sự thiếu đồng đều về chất lượng của các chi nhánh nhượng quyền làm ảnh hưởng hình ảnh chung thương hiệu.',
        lesson1991: 'Bài học 1991 (Kiểm soát chất lượng đổi mới): Đa dạng hóa các thành phần và hình thức phát triển nhưng phải đi kèm năng lực quản lý điều tiết hiệu quả.',
      },
    ],
  },
  {
    id: 16,
    title: 'Liên Doanh Với Tập Đoàn Đa Quốc Gia',
    situation: 'Một tập đoàn đa quốc gia đề xuất liên doanh với dự án của bạn. Họ sẽ đầu tư công nghệ hiện đại nhưng yêu cầu sở hữu 51% cổ phần kiểm soát.',
    choices: [
      {
        text: 'Đồng ý liên doanh để tiếp cận nhanh công nghệ tiên tiến, chấp nhận chịu sự quản lý định hướng của họ.',
        effects: { economy: 20, confidence: -15, adaptability: 25, solidarity: -10 },
        outcome: 'Trình độ công nghệ của dự án tăng vượt bậc, nhưng việc mất quyền tự quyết định hướng phát triển khiến đội ngũ sáng lập ban đầu chán nản.',
        lesson1991: 'Bài học 1991 (Độc lập gắn liền hợp tác): Hợp tác quốc tế là động lực mạnh mẽ nhưng phải luôn giữ vững nguyên tắc bảo vệ lợi ích cốt lõi và quyền tự quyết.',
      },
      {
        text: 'Từ chối cổ phần chi phối, đề xuất chuyển sang hợp tác mua bản quyền công nghệ hoặc thuê chuyên gia chuyển giao.',
        effects: { economy: -25, confidence: 20, adaptability: 10, solidarity: 15 },
        outcome: 'Tốn một khoản kinh phí mua bản quyền công nghệ rất lớn, nhưng bạn bảo toàn được 100% quyền làm chủ định hướng phát triển của đội ngũ.',
        lesson1991: 'Bài học 1991 (Tự lực cánh sinh): Coi nội lực và sự tự chủ trong nước là nhân tố quyết định, ngoại lực là nhân tố quan trọng để bổ trợ sức mạnh phát triển.',
      },
      {
        text: 'Kịch liệt từ chối mọi sự hợp tác ngoại để bảo vệ bản sắc thương hiệu nội địa tuyệt đối.',
        effects: { economy: -20, confidence: 10, adaptability: -15, solidarity: 15 },
        outcome: 'Được cộng đồng yêu nước ủng hộ tinh thần, nhưng sự thiếu thốn về công nghệ tiên tiến khiến dự án tụt hậu và mất năng lực cạnh tranh.',
        lesson1991: 'Bài học 1991 (Tự lực không khép kín): Tự lực tự cường không phải là đóng cửa tự cô lập. Khép kín cơ hội giao thương sẽ triệt tiêu năng lượng đổi mới của tổ chức.',
      },
    ],
  },
  {
    id: 17,
    title: 'Đứt Gãy Chuỗi Cung Ứng Vật Liệu',
    situation: 'Nguồn linh kiện nhập khẩu giá rẻ truyền thống bị gián đoạn hoàn toàn do căng thẳng địa chính trị quốc tế. Dự án đứng trước nguy cơ dừng sản xuất.',
    choices: [
      {
        text: 'Chủ động tìm kiếm và ký hợp đồng với các nhà sản xuất linh kiện nội địa thay thế dù giá thành cao hơn 15%.',
        effects: { economy: -15, confidence: 15, adaptability: 25, solidarity: 10 },
        outcome: 'Giá vốn sản xuất tăng làm giảm biên lợi nhuận ngắn hạn, nhưng bạn tự chủ hoàn toàn được nguồn cung và cứu sống dây chuyền sản xuất.',
        lesson1991: 'Bài học 1991 (Xây dựng nội lực tự chủ): Khơi dậy và phát triển thị trường trong nước, giảm thiểu sự phụ thuộc quá mức vào các nguồn cung đơn lẻ từ bên ngoài.',
      },
      {
        text: 'Tuyên bố tạm dừng dây chuyền sản xuất để chờ đợi tình hình chuỗi cung ứng quốc tế ổn định trở lại.',
        effects: { economy: -25, confidence: -10, adaptability: -15, solidarity: 15 },
        outcome: 'Giữ được sự thông cảm hòa hảo của đối tác cũ, nhưng việc đóng băng hoạt động lâu ngày khiến dòng tiền doanh nghiệp bị cạn kiệt.',
        lesson1991: 'Bài học 1991 (Không thụ động chờ đợi): Đứng yên thụ động trước các biến động quốc tế là tự đẩy mình vào thế bị động, triệt tiêu sức sống của tổ chức.',
      },
      {
        text: 'Nhập nguồn linh kiện thay thế rẻ tiền không rõ chất lượng từ thị trường chợ đen để kịp bàn giao hàng đúng hạn.',
        effects: { economy: 15, confidence: -30, adaptability: -10, solidarity: -10 },
        outcome: 'Kịp bàn giao đơn hàng và giữ được doanh số ngắn hạn, nhưng tỷ lệ sản phẩm lỗi tăng cao khiến khách hàng tẩy chay hàng loạt sau đó.',
        lesson1991: 'Bài học 1991 (Giữ vững uy tín thực chất): Đổi mới linh hoạt biện pháp nhưng phải giữ vững tiêu chuẩn thực chất, giải pháp chắp vá cẩu thả sẽ tự hủy hoại tương lai.',
      },
    ],
  },
  {
    id: 18,
    title: 'Đào Tạo Thế Hệ Kế Cận',
    situation: 'Các nhân sự trẻ mới gia nhập nhóm làm việc lúng túng với hệ thống quy trình phức tạp, làm kéo chậm tiến độ dự án chung.',
    choices: [
      {
        text: 'Dành 20% thời gian làm việc của các nhân sự kinh nghiệm để hướng dẫn, làm mentor đào tạo trực tiếp cho nhân sự trẻ.',
        effects: { economy: -15, confidence: 20, adaptability: 15, solidarity: 25 },
        outcome: 'Năng suất lao động chung bị giảm sút nhẹ trong ngắn hạn, nhưng đội ngũ trẻ tiến bộ vượt bậc và thắt chặt tình gắn kết đồng nghiệp.',
        lesson1991: 'Bài học 1991 (Bồi dưỡng thế hệ cách mạng): Đầu tư đào tạo con người luôn là khoản đầu tư thông thái nhất, tạo nguồn lực kế cận vững chắc cho hệ thống.',
      },
      {
        text: 'Yêu cầu các nhân sự trẻ tự đọc tài liệu hướng dẫn có sẵn ngoài giờ làm việc để tự nâng cao năng lực.',
        effects: { economy: 10, confidence: -10, adaptability: -15, solidarity: -15 },
        outcome: 'Không ảnh hưởng đến thời gian làm việc của nhân sự cũ, nhưng nhân sự trẻ cảm thấy bị bỏ rơi, tiến bộ chậm và nộp đơn xin nghỉ việc.',
        lesson1991: 'Bài học 1991 (Đoàn kết và hỗ trợ thực tế): Sự đoàn kết và phát triển tập thể phải bắt đầu từ hành động dìu dắt, chia sẻ thực tế chứ không chỉ giao trách nhiệm.',
      },
      {
        text: 'Chỉ giao cho nhân sự trẻ những việc vặt không liên quan đến chuyên môn và phân công việc khó cho nhân sự cũ làm hết.',
        effects: { economy: -5, confidence: -15, adaptability: -10, solidarity: -15 },
        outcome: 'Nhân sự cũ quá tải mệt mỏi, nhân sự trẻ chán nản vì không được phát triển năng lực chuyên môn, gây chia rẽ ngầm trong nhóm.',
        lesson1991: 'Bài học 1991 (Tránh phân hóa, mất đồng thuận): Sự phân chia trách nhiệm không hợp lý và thiếu tôn trọng năng lực thành viên sẽ phá vỡ sự thống nhất.',
      },
    ],
  },
  {
    id: 19,
    title: 'Lựa Chọn Hệ Thống Công Nghệ',
    situation: 'Hệ thống phần mềm lưu trữ cũ hoạt động ổn định nhưng chậm chạp. Có đề xuất chuyển đổi toàn diện sang nền tảng điện toán đám mây mới.',
    choices: [
      {
        text: 'Chấp nhận chi ngân sách lớn và thời gian đào tạo để chuyển đổi toàn diện sang nền tảng đám mây hiện đại.',
        effects: { economy: -15, confidence: 10, adaptability: 25, solidarity: -10 },
        outcome: 'Tốn kém chi phí ban đầu và nội bộ lúng túng làm quen hệ thống mới, nhưng sau đó hiệu suất xử lý dữ liệu tăng gấp 5 lần.',
        lesson1991: 'Bài học 1991 (Chủ động đi tắt đón đầu): Mạnh dạn đổi mới tư duy, ứng dụng tiến bộ khoa học công nghệ của thời đại để nâng cấp thực lực cạnh tranh quốc gia.',
      },
      {
        text: 'Duy trì hệ thống phần mềm cũ để tiết kiệm ngân sách và tránh gây xáo trộn cho nhân viên.',
        effects: { economy: 15, confidence: -10, adaptability: -20, solidarity: -5 },
        outcome: 'Tiết kiệm được chi phí chuyển đổi trước mắt, nhưng hệ thống cũ chậm chạp làm sụt giảm năng lực cạnh tranh lâu dài trước đối thủ.',
        lesson1991: 'Bài học 1991 (Tránh an phận, trì trệ): Việc thỏa hiệp giữ lại các mô hình hoạt động cũ đã không còn phù hợp với xu thế sẽ kìm hãm đà phát triển.',
      },
      {
        text: 'Thuê một công ty công nghệ bên ngoài vận hành hệ thống lưu trữ dữ liệu của bạn để tránh áp lực quản trị.',
        effects: { economy: -20, confidence: 10, adaptability: 15, solidarity: -15 },
        outcome: 'Giải phóng được áp lực kỹ thuật cho nhân viên, nhưng chi phí thuê ngoài đắt đỏ làm thâm hụt ngân sách và mất năng lực tự chủ công nghệ.',
        lesson1991: 'Bài học 1991 (Tự lực tự cường công nghệ): Tự lực xây dựng năng lực công nghệ nội tại là chìa khóa để giữ vững quyền tự quyết và bảo mật thông tin.',
      },
    ],
  },
  {
    id: 20,
    title: 'Trách Nhiệm Xã Hội Của Doanh Nghiệp',
    situation: 'Dự án của bạn đang có lãi. Bạn đối mặt với đề xuất trích 5% lợi nhuận để đóng góp xây dựng quỹ nhà tình thương tại địa phương khó khăn.',
    choices: [
      {
        text: 'Trích 5% lợi nhuận thực hiện thiện nguyện thực chất, cử nhân viên đến hỗ trợ xây dựng trực tiếp.',
        effects: { economy: -15, confidence: 25, adaptability: 0, solidarity: 30 },
        outcome: 'Dòng tiền mặt bị giảm sút nhẹ, nhưng hành động thiện nguyện thực chất tạo dựng uy tín xã hội sâu sắc và gia tăng niềm tự hào của nhân viên.',
        lesson1991: 'Bài học 1991 (Ý nghĩa xã hội của phát triển): Đổi mới kinh tế phải luôn đi đôi với giải quyết chính sách xã hội, lấy sự ấm no của nhân dân làm thước đo.',
      },
      {
        text: 'Đóng góp một khoản nhỏ tượng trưng và thuê đội ngũ truyền thông rầm rộ để quảng bá hình ảnh doanh nghiệp lấy tiếng.',
        effects: { economy: 15, confidence: -20, adaptability: -5, solidarity: -15 },
        outcome: 'Doanh số bán hàng tăng nhẹ nhờ chiến dịch quảng cáo, nhưng việc làm từ thiện thiếu thực chất bị dư luận đánh giá là trục lợi truyền thông.',
        lesson1991: 'Bài học 1991 (Thực chất trong chính sách): Chính sách xã hội phải xuất phát từ tấm lòng và hành động thực chất hướng đến dân, tránh chiêu trò mị dân giả dối.',
      },
      {
        text: 'Từ chối tham gia đóng góp để dồn toàn bộ lợi nhuận tái đầu tư tối ưu hóa năng lực sản xuất kinh doanh.',
        effects: { economy: 20, confidence: -15, adaptability: -5, solidarity: -25 },
        outcome: 'Gia tăng nguồn vốn tái sản xuất nhanh chóng, nhưng sự thờ ơ với cộng đồng khiến doanh nghiệp bị đánh giá thiếu trách nhiệm xã hội.',
        lesson1991: 'Bài học 1991 (Phát triển hài hòa): Phát triển kinh tế không được tách rời các mục tiêu tiến bộ và công bằng xã hội, nếu không sẽ gây mất ổn định lâu dài.',
      },
    ],
  },
];

function getRandomStartValue() {
  // Returns a random integer between 30 and 49 inclusive (always under 50 to represent a starting crisis)
  return Math.floor(Math.random() * 20) + 30;
}

export default function GamePage() {
  const [gameState, setGameState] = useState<GameState>('START');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // Indicators state (0 - 100), initialized to 60 (randomized on game start)
  const [economy, setEconomy] = useState(60);
  const [confidence, setConfidence] = useState(60);
  const [adaptability, setAdaptability] = useState(60);
  const [solidarity, setSolidarity] = useState(60);

  // Floating delta tracking
  const [deltas, setDeltas] = useState<StatEffects | null>(null);

  // Active choice consequence state
  const [selectedChoice, setSelectedChoice] = useState<Choice | null>(null);

  // Animate indicator colors dynamically based on value
  const getIndicatorColor = (val: number) => {
    if (val > 60) return 'bg-emerald-500 text-emerald-500';
    if (val > 25) return 'bg-amber-500 text-amber-500';
    return 'bg-flame text-flame animate-pulse';
  };

  const getIndicatorBorder = (val: number) => {
    if (val > 60) return 'border-emerald-500/20 bg-emerald-500/[0.03]';
    if (val > 25) return 'border-amber-500/20 bg-amber-500/[0.03]';
    return 'border-flame/30 bg-flame/[0.05]';
  };

  // Run initial state reset with randomized values
  const handleResetGame = () => {
    setEconomy(getRandomStartValue());
    setConfidence(getRandomStartValue());
    setAdaptability(getRandomStartValue());
    setSolidarity(getRandomStartValue());
    setCurrentQuestionIndex(0);
    setDeltas(null);
    setSelectedChoice(null);
    setGameState('PLAYING');
  };

  // Choice click handler
  const handleChoiceSelect = (choice: Choice) => {
    setSelectedChoice(choice);
    
    // Apply changes with boundary checks
    setEconomy(prev => Math.max(0, Math.min(100, prev + choice.effects.economy)));
    setConfidence(prev => Math.max(0, Math.min(100, prev + choice.effects.confidence)));
    setAdaptability(prev => Math.max(0, Math.min(100, prev + choice.effects.adaptability)));
    setSolidarity(prev => Math.max(0, Math.min(100, prev + choice.effects.solidarity)));

    // Set floating deltas
    setDeltas(choice.effects);
    setGameState('FEEDBACK');
  };

  // Continue to next question or end game
  const handleNextStep = () => {
    // Check lose condition (if any index hits 0)
    if (economy <= 0 || confidence <= 0 || adaptability <= 0 || solidarity <= 0) {
      setGameState('GAMEOVER');
      return;
    }

    const nextIndex = currentQuestionIndex + 1;
    if (nextIndex >= QUESTIONS.length) {
      setGameState('VICTORY');
    } else {
      setCurrentQuestionIndex(nextIndex);
      setDeltas(null);
      setSelectedChoice(null);
      setGameState('PLAYING');
    }
  };

  // Evaluation title based on final stats
  const getVictoryTitle = () => {
    const average = (economy + confidence + adaptability + solidarity) / 4;
    if (average >= 75) return 'Nhà Lãnh Đạo Vượt Bão Xuất Chúng';
    
    const maxVal = Math.max(economy, confidence, adaptability, solidarity);
    if (maxVal === adaptability) return 'Chuyên Gia Công Nghệ Đổi Mới';
    if (maxVal === solidarity) return 'Nhà Kiến Tạo Đồng Thuận Cộng Đồng';
    if (maxVal === economy) return 'Nhà Thực Tiễn Thực Dụng';
    return 'Nhà Hành Động Cân Bằng';
  };

  // Identify which stat caused Game Over
  const getCrashedStatName = () => {
    if (economy <= 0) return 'Kinh Tế';
    if (confidence <= 0) return 'Niềm Tin';
    if (adaptability <= 0) return 'Thích Nghi';
    if (solidarity <= 0) return 'Đoàn Kết';
    return '';
  };

  const getCrashedStatLesson = () => {
    if (economy <= 0) {
      return 'Kinh tế cạn kiệt đồng nghĩa với việc bạn mất đi nguồn thu nhập, việc làm và khả năng duy trì các nguồn lực cơ bản. Hãy nhớ bài học 1991: Đổi mới kinh tế, phát triển nhiều thành phần để khơi thông mọi dòng chảy sức sản xuất.';
    }
    if (confidence <= 0) {
      return 'Niềm tin về 0 đồng nghĩa với sự hoang mang dao động tinh thần tột độ, mất phương hướng dẫn đến tê liệt khả năng hành động. Hãy nhớ bài học 1991: Trong bão giông thử thách, củng cố tư tưởng ổn định và giữ vững niềm tin xã hội là nền tảng sống còn.';
    }
    if (adaptability <= 0) {
      return 'Khả năng thích nghi cạn kiệt đồng nghĩa với sự trì trệ, bảo thủ lỗi thời trước làn sóng công nghệ AI thay đổi vũ bão. Hãy nhớ bài học 1991: Kiên định mục tiêu nhưng phương pháp phải linh hoạt, không giáo điều bảo thủ mới giúp sinh tồn.';
    }
    if (solidarity <= 0) {
      return 'Chỉ số đoàn kết sụp đổ đồng nghĩa tập thể rạn nứt, cô lập và mất đi sự hỗ trợ đồng hành thiết yếu của cộng đồng. Hãy nhớ bài học 1991: Đại đoàn kết toàn dân tộc là sức mạnh cội nguồn, "Khó vạn lần dân liệu cũng xong".';
    }
    return '';
  };

  // Floating delta formatter helper
  const renderDelta = (statName: keyof StatEffects) => {
    if (!deltas || deltas[statName] === 0) return null;
    const isPositive = deltas[statName] > 0;
    return (
      <motion.span
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: -25 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
        className={cn(
          'absolute right-0 -top-5 font-mono text-[11px] font-bold z-10',
          isPositive ? 'text-emerald-600' : 'text-flame'
        )}
      >
        {isPositive ? `+${deltas[statName]}` : deltas[statName]}%
      </motion.span>
    );
  };

  const currentQuestion = QUESTIONS[currentQuestionIndex];

  return (
    <>
      <ScrollProgress />

      <main className="flex flex-1 flex-col pt-28 md:pt-32 min-h-svh">
        
        {/* Main interactive area wrapper */}
        <section className="relative flex-1 flex flex-col justify-center overflow-hidden pb-16 pt-4">
          
          {/* Animated decorative orbs background */}
          <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
            <div
              className="orb-1 absolute -left-28 top-10 h-[32rem] w-[32rem] rounded-full opacity-8 blur-[100px]"
              style={{ background: 'oklch(0.82 0.150 78)' }}
            />
            <div
              className="orb-2 absolute -right-28 bottom-5 h-[34rem] w-[34rem] rounded-full opacity-8 blur-[100px]"
              style={{ background: 'oklch(0.52 0.196 26)' }}
            />
            <div className="grain absolute inset-0 opacity-20" />
          </div>

          <div className="relative mx-auto w-full max-w-4xl px-4 flex-1 flex flex-col justify-center">
            
            {/* Top Eyebrow Section */}
            <div className="text-center mb-7">
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-ink/12 bg-paper/80 px-4 py-1.5 font-display text-[10px] uppercase tracking-[0.35em] text-flame shadow-sm">
                  <Gamepad2 className="h-3.5 w-3.5" strokeWidth={1.8} />
                  Game tương tác · Cơn Bão Thời Đại
                </span>
              </Reveal>
            </div>

            {/* Main Interactive Stage Switcher */}
            <div className="flex-1 flex flex-col justify-center items-center">
              <AnimatePresence mode="wait">
                
                {/* 1. START SCREEN */}
                {gameState === 'START' && (
                  <motion.div
                    key="start-screen"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
                    className="w-full max-w-2xl"
                  >
                    <TiltCard className="bezel-inner rounded-[2rem] border border-ink/10 bg-paper p-8 text-center shadow-[0_32px_64px_-24px_oklch(0.20_0.038_250/0.25)]">
                      <h2 className="font-display text-3xl font-black leading-tight tracking-tight text-ink sm:text-4.5xl">
                        CƠN BÃO <span className="italic text-flame">THỜI ĐẠI</span>
                      </h2>
                      <p className="mt-4.5 text-[15.5px] leading-relaxed text-ink-soft font-sans">
                        Chào mừng bạn đến với phiên bản nâng cấp của trò chơi mô phỏng. Hành trình vượt bão giờ đây
                        đã dài hơn với **20 tình huống thực tế khốc liệt** và đòi hỏi tư duy chiến thuật sâu sắc hơn.
                      </p>
                      <p className="mt-3.5 text-[15.5px] leading-relaxed text-ink/85 font-medium font-sans">
                        ⚠️ **Luật Đánh Đổi Mới (Trade-off)**: Mọi sự lựa chọn đều mang lại cả điểm cộng lẫn điểm trừ.
                        Bạn không thể có một quyết định hoàn hảo không đánh đổi. Hãy khéo léo vận dụng **tư duy vượt bão 1991** để giữ thăng bằng.
                      </p>

                      {/* Rule instruction grid */}
                      <div className="mt-8 grid gap-4 grid-cols-2 text-left text-xs uppercase tracking-wider border-t border-ink/8 pt-6">
                        <div className="flex items-start gap-2.5">
                          <CheckIcon className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                          <div>
                            <span className="font-bold text-ink block font-display">Mục tiêu</span>
                            <span className="normal-case text-ink-soft text-[12.5px] tracking-normal leading-snug mt-0.5 block font-sans">Vượt qua cả 20 tình huống thực tế của thời đại số và AI.</span>
                          </div>
                        </div>
                        <div className="flex items-start gap-2.5">
                          <AlertIcon className="h-4 w-4 text-flame shrink-0 mt-0.5" />
                          <div>
                            <span className="font-bold text-ink block font-display">Luật Sinh Tồn</span>
                            <span className="normal-case text-ink-soft text-[12.5px] tracking-normal leading-snug mt-0.5 block font-sans">Giữ cả 4 chỉ số (xuất phát từ 60%) luôn lớn hơn 0%.</span>
                          </div>
                        </div>
                      </div>

                      {/* Start button */}
                      <button
                        onClick={handleResetGame}
                        className="press group mt-8 inline-flex items-center gap-3.5 rounded-full bg-ink px-8 py-3.5 font-display text-sm font-semibold uppercase tracking-[0.25em] text-paper hover:bg-flame hover:text-paper shadow-lg"
                      >
                        Bắt đầu hành trình (20 Câu)
                        <Play className="h-4 w-4 fill-current" />
                      </button>
                    </TiltCard>
                  </motion.div>
                )}

                {/* 2. GAMEPLAY OR FEEDBACK SCREEN */}
                {(gameState === 'PLAYING' || gameState === 'FEEDBACK') && (
                  <motion.div
                    key="gameplay-stage"
                    initial={{ opacity: 0, scale: 0.985 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.985 }}
                    transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
                    className="w-full grid grid-cols-1 gap-6 lg:grid-cols-12"
                  >
                    
                    {/* Left side: Stats Dashboard Panel (col-span-4) */}
                    <div className="lg:col-span-4 flex flex-col gap-4">
                      <div className="rounded-3xl border border-ink/10 bg-paper/70 p-5 shadow-sm flex flex-col gap-4.5 backdrop-blur-md">
                        <div className="font-display text-[11px] uppercase tracking-[0.28em] text-ink-soft border-b border-ink/8 pb-2.5 flex items-center justify-between">
                          <span>Chỉ số sinh tồn</span>
                          <span className="font-mono font-bold text-flame">
                            Q.{currentQuestion.id} / {QUESTIONS.length}
                          </span>
                        </div>

                        {/* Stats items stack */}
                        <div className="space-y-4">
                          
                          {/* 1. Economy */}
                          <div className={cn('relative rounded-2xl border p-3.5 transition-all duration-300', getIndicatorBorder(economy))}>
                            <div className="flex items-center justify-between mb-1.5">
                              <span className="flex items-center gap-2 font-display text-sm font-bold text-ink">
                                <Coins className="h-4.5 w-4.5 text-flame" />
                                Kinh Tế
                              </span>
                              <span className="font-mono text-sm font-black text-ink">{economy}%</span>
                            </div>
                            <div className="h-2 w-full bg-ink/8 rounded-full overflow-hidden">
                              <div
                                className={cn('h-full rounded-full transition-all duration-500 ease-out-quart', getIndicatorColor(economy))}
                                style={{ width: `${economy}%` }}
                              />
                            </div>
                            <span className="text-[10px] text-ink-mute mt-1.5 block leading-none">Việc làm, thu nhập, dự trữ</span>
                            {renderDelta('economy')}
                          </div>

                          {/* 2. Confidence */}
                          <div className={cn('relative rounded-2xl border p-3.5 transition-all duration-300', getIndicatorBorder(confidence))}>
                            <div className="flex items-center justify-between mb-1.5">
                              <span className="flex items-center gap-2 font-display text-sm font-bold text-ink">
                                <ShieldCheck className="h-4.5 w-4.5 text-flame" />
                                Niềm Tin
                              </span>
                              <span className="font-mono text-sm font-black text-ink">{confidence}%</span>
                            </div>
                            <div className="h-2 w-full bg-ink/8 rounded-full overflow-hidden">
                              <div
                                className={cn('h-full rounded-full transition-all duration-500 ease-out-quart', getIndicatorColor(confidence))}
                                style={{ width: `${confidence}%` }}
                              />
                            </div>
                            <span className="text-[10px] text-ink-mute mt-1.5 block leading-none">Tinh thần, định hướng, động lực</span>
                            {renderDelta('confidence')}
                          </div>

                          {/* 3. Adaptability */}
                          <div className={cn('relative rounded-2xl border p-3.5 transition-all duration-300', getIndicatorBorder(adaptability))}>
                            <div className="flex items-center justify-between mb-1.5">
                              <span className="flex items-center gap-2 font-display text-sm font-bold text-ink">
                                <Cpu className="h-4.5 w-4.5 text-flame" />
                                Thích Nghi
                              </span>
                              <span className="font-mono text-sm font-black text-ink">{adaptability}%</span>
                            </div>
                            <div className="h-2 w-full bg-ink/8 rounded-full overflow-hidden">
                              <div
                                className={cn('h-full rounded-full transition-all duration-500 ease-out-quart', getIndicatorColor(adaptability))}
                                style={{ width: `${adaptability}%` }}
                              />
                            </div>
                            <span className="text-[10px] text-ink-mute mt-1.5 block leading-none">Kỹ năng mới, học công nghệ</span>
                            {renderDelta('adaptability')}
                          </div>

                          {/* 4. Solidarity */}
                          <div className={cn('relative rounded-2xl border p-3.5 transition-all duration-300', getIndicatorBorder(solidarity))}>
                            <div className="flex items-center justify-between mb-1.5">
                              <span className="flex items-center gap-2 font-display text-sm font-bold text-ink">
                                <Users className="h-4.5 w-4.5 text-flame" />
                                Đoàn Kết
                              </span>
                              <span className="font-mono text-sm font-black text-ink">{solidarity}%</span>
                            </div>
                            <div className="h-2 w-full bg-ink/8 rounded-full overflow-hidden">
                              <div
                                className={cn('h-full rounded-full transition-all duration-500 ease-out-quart', getIndicatorColor(solidarity))}
                                style={{ width: `${solidarity}%` }}
                              />
                            </div>
                            <span className="text-[10px] text-ink-mute mt-1.5 block leading-none">Làm việc nhóm, hỗ trợ cộng đồng</span>
                            {renderDelta('solidarity')}
                          </div>

                        </div>
                      </div>
                    </div>

                    {/* Right side: Situation description and decision block (col-span-8) */}
                    <div className="lg:col-span-8 flex flex-col">
                      <div className="rounded-3xl border border-ink/10 bg-paper p-6 sm:p-8 flex-1 flex flex-col justify-between shadow-[0_22px_44px_-24px_oklch(0.20_0.038_250/0.18)]">
                        
                        <AnimatePresence mode="wait">
                          
                          {/* 2a. Gameplay: Active Choice Step */}
                          {gameState === 'PLAYING' && (
                            <motion.div
                              key="active-question"
                              initial={{ opacity: 0, x: 12 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -12 }}
                              transition={{ duration: 0.3, ease: 'easeOut' }}
                              className="flex-1 flex flex-col justify-between"
                            >
                              <div>
                                <div className="flex items-center gap-2.5 mb-3.5">
                                  <span className="h-px w-6 bg-flame" />
                                  <span className="font-display text-[10.5px] font-bold uppercase tracking-widest text-flame">
                                    Tình huống {currentQuestion.id} / {QUESTIONS.length}
                                  </span>
                                </div>
                                <h3 className="font-display text-xl font-black leading-tight tracking-tight text-ink sm:text-2xl mb-4.5">
                                  {currentQuestion.title}
                                </h3>
                                <p className="text-[15px] sm:text-[16px] leading-relaxed text-ink-soft bg-paper-deep/45 p-5 rounded-2xl border border-ink/5 font-sans">
                                  {currentQuestion.situation}
                                </p>
                              </div>

                              {/* Choices buttons stack */}
                              <div className="mt-8 space-y-3">
                                {currentQuestion.choices.map((choice, i) => (
                                  <button
                                    key={i}
                                    onClick={() => handleChoiceSelect(choice)}
                                    className="text-left w-full p-4 rounded-2xl border border-ink/10 bg-paper/50 hover:bg-paper-deep hover:border-flame transition-all duration-300 flex items-center justify-between gap-4 group/btn press"
                                  >
                                    <div className="flex gap-3">
                                      <span className="font-display font-black text-flame/30 group-hover/btn:text-flame transition-colors select-none">
                                        {String.fromCharCode(65 + i)}
                                      </span>
                                      <span className="text-[13.5px] sm:text-[14.5px] font-sans font-medium text-ink group-hover/btn:text-ink leading-snug">
                                        {choice.text}
                                      </span>
                                    </div>
                                    <ArrowRight className="h-4 w-4 shrink-0 text-ink-soft opacity-0 -translate-x-2 transition-all group-hover/btn:opacity-100 group-hover/btn:translate-x-0 group-hover/btn:text-flame" />
                                  </button>
                                ))}
                              </div>
                            </motion.div>
                          )}

                          {/* 2b. Gameplay: Outcome / Lesson Feedback Step */}
                          {gameState === 'FEEDBACK' && selectedChoice && (
                            <motion.div
                              key="consequence-feedback"
                              initial={{ opacity: 0, x: 12 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -12 }}
                              transition={{ duration: 0.3, ease: 'easeOut' }}
                              className="flex-1 flex flex-col justify-between"
                            >
                              <div>
                                <div className="flex items-center gap-2.5 mb-3">
                                  <span className="h-px w-6 bg-flame" />
                                  <span className="font-display text-[10.5px] font-bold uppercase tracking-widest text-flame">
                                    Hệ quả & Phân tích liên hệ
                                  </span>
                                </div>
                                <h3 className="font-display text-xl font-black leading-tight tracking-tight text-ink sm:text-2xl mb-4.5">
                                  {currentQuestion.title}
                                </h3>

                                <div className="space-y-4">
                                  {/* Consequence description */}
                                  <div className="rounded-2xl border border-emerald-500/15 bg-emerald-500/[0.03] p-5">
                                    <h4 className="font-display text-xs font-bold uppercase tracking-wider text-emerald-800 mb-1.5 flex items-center gap-1.5">
                                      <Sparkles className="h-3.5 w-3.5 text-emerald-600" />
                                      Hệ quả quyết định
                                    </h4>
                                    <p className="text-[14px] sm:text-[14.5px] leading-relaxed text-ink font-sans">
                                      {selectedChoice.outcome}
                                    </p>
                                    
                                    {/* Small visual of the effects changed */}
                                    <div className="mt-3 flex flex-wrap gap-2 text-[11px] font-mono font-bold">
                                      {Object.entries(selectedChoice.effects).map(([key, val]) => {
                                        if (val === 0) return null;
                                        const labels: Record<string, string> = {
                                          economy: 'Kinh Tế',
                                          confidence: 'Niềm Tin',
                                          adaptability: 'Thích Nghi',
                                          solidarity: 'Đoàn Kết',
                                        };
                                        return (
                                          <span
                                            key={key}
                                            className={cn(
                                              'px-2 py-0.5 rounded-md border',
                                              val > 0
                                                ? 'bg-emerald-50 border-emerald-200 text-emerald-700'
                                                : 'bg-rose-50 border-rose-200 text-rose-700'
                                            )}
                                          >
                                            {labels[key]}: {val > 0 ? `+${val}` : val}%
                                          </span>
                                        );
                                      })}
                                    </div>
                                  </div>

                                  {/* 1991 mindset connection */}
                                  <div className="rounded-2xl border border-flame/15 bg-flame/[0.04] p-5">
                                    <h4 className="font-display text-xs font-bold uppercase tracking-wider text-flame-deep mb-1.5 flex items-center gap-1.5">
                                      <HelpCircle className="h-3.5 w-3.5 text-flame" />
                                      Tư duy Đổi mới 1991
                                    </h4>
                                    <p className="text-[14px] sm:text-[14.5px] leading-relaxed text-ink-soft italic font-sans">
                                      {selectedChoice.lesson1991}
                                    </p>
                                  </div>
                                </div>
                              </div>

                              {/* Continue button */}
                              <div className="mt-8 flex justify-end">
                                <button
                                  onClick={handleNextStep}
                                  className="press group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 font-display text-xs font-semibold uppercase tracking-[0.2em] text-paper hover:bg-flame"
                                >
                                  Tình huống tiếp theo
                                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                                </button>
                              </div>
                            </motion.div>
                          )}

                        </AnimatePresence>

                      </div>
                    </div>

                  </motion.div>
                )}

                {/* 3. GAME OVER SCREEN */}
                {gameState === 'GAMEOVER' && (
                  <motion.div
                    key="gameover-screen"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
                    className="w-full max-w-xl"
                  >
                    <TiltCard className="bezel-inner rounded-[2rem] border border-flame/20 bg-paper p-8 text-center shadow-[0_32px_64px_-24px_oklch(0.52_0.196_26/0.25)]">
                      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-flame/10 text-flame mb-5 animate-pulse">
                        <AlertTriangle className="h-6 w-6" strokeWidth={1.8} />
                      </div>
                      
                      <h2 className="font-display text-3xl font-black leading-tight tracking-tight text-ink">
                        TRÒ CHƠI <span className="italic text-flame">KẾT THÚC</span>
                      </h2>
                      
                      <p className="mt-4.5 text-[15px] leading-relaxed text-flame-deep font-semibold">
                        Chỉ số {getCrashedStatName()} của bạn đã bị cạn kiệt (0%).
                      </p>
                      
                      <p className="mt-3.5 text-[14.5px] leading-relaxed text-ink-soft bg-paper-deep/65 p-5 rounded-2xl border border-ink/8 font-sans">
                        {getCrashedStatLesson()}
                      </p>

                      <div className="mt-8 border-t border-ink/8 pt-6 flex flex-col sm:flex-row justify-center gap-4">
                        <button
                          onClick={handleResetGame}
                          className="press group inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 font-display text-xs font-semibold uppercase tracking-[0.2em] text-paper hover:bg-flame shadow-md"
                        >
                          <RotateCcw className="h-4.5 w-4.5" />
                          Thử lại cuộc chơi
                        </button>
                        <Link
                          href="/ly-thuyet"
                          className="press inline-flex items-center justify-center gap-2 rounded-full border border-ink/15 bg-paper px-6 py-3 font-display text-xs font-semibold uppercase tracking-[0.2em] text-ink hover:border-ink/40"
                        >
                          Đọc lại lý thuyết
                          <ArrowUpRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </TiltCard>
                  </motion.div>
                )}

                {/* 4. VICTORY SCREEN */}
                {gameState === 'VICTORY' && (
                  <motion.div
                    key="victory-screen"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
                    className="w-full max-w-2xl"
                  >
                    <TiltCard className="bezel-inner rounded-[2rem] border border-emerald-500/20 bg-paper p-8 text-center shadow-[0_32px_64px_-24px_oklch(0.60_0.15_150/0.25)]">
                      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 mb-5">
                        <Award className="h-8 w-8" strokeWidth={1.6} />
                      </div>

                      <h2 className="font-display text-3xl font-black leading-tight tracking-tight text-ink sm:text-4xl">
                        VƯỢT BÃO THÀNH CÔNG!
                      </h2>
                      
                      <div className="mt-4 flex flex-col items-center">
                        <span className="font-display text-[10px] uppercase tracking-[0.25em] text-ink-soft">Danh hiệu đạt được</span>
                        <span className="mt-1.5 rounded-full bg-emerald-500/[0.07] border border-emerald-500/25 px-5 py-2 font-display text-lg font-black text-emerald-800 tracking-tight">
                          {getVictoryTitle()}
                        </span>
                      </div>

                      {/* Display final scores */}
                      <div className="mt-8 grid grid-cols-4 gap-3 bg-paper-deep/60 p-4.5 rounded-2xl border border-ink/8">
                        {[
                          { k: 'Kinh Tế', v: economy, icon: Coins },
                          { k: 'Niềm Tin', v: confidence, icon: ShieldCheck },
                          { k: 'Thích Nghi', v: adaptability, icon: Cpu },
                          { k: 'Đoàn Kết', v: solidarity, icon: Users },
                        ].map(stat => {
                          const Icon = stat.icon;
                          return (
                            <div key={stat.k} className="flex flex-col items-center">
                              <Icon className="h-4.5 w-4.5 text-flame mb-1" />
                              <span className="font-display text-[9.5px] uppercase tracking-wider text-ink-soft">{stat.k}</span>
                              <span className="font-mono text-base font-black text-ink mt-0.5">{stat.v}%</span>
                            </div>
                          );
                        })}
                      </div>

                      <p className="mt-6 text-[15px] leading-relaxed text-ink-soft font-sans">
                        Xuất sắc! Bạn đã vượt qua trọn vẹn **20 tình huống thử thách cực đại**. Cơ chế đánh đổi liên tục buộc bạn phải
                        cân nhắc thiệt hơn giữa Kinh tế - Lòng dân - Công nghệ và Sức mạnh Tập thể. Bằng việc vận dụng tư duy vượt bão năm 1991,
                        bạn đã thành công cân bằng cuộc sống và giữ vững định hướng.
                      </p>

                      <div className="mt-8 border-t border-ink/8 pt-6 flex flex-col sm:flex-row justify-center gap-4">
                        <button
                          onClick={handleResetGame}
                          className="press group inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 font-display text-xs font-semibold uppercase tracking-[0.2em] text-paper hover:bg-flame shadow-md"
                        >
                          <RotateCcw className="h-4.5 w-4.5" />
                          Chơi lại game mới
                        </button>
                        <Link
                          href="/"
                          className="press inline-flex items-center justify-center gap-2 rounded-full border border-ink/15 bg-paper px-6 py-3 font-display text-xs font-semibold uppercase tracking-[0.2em] text-ink hover:border-ink/40"
                        >
                          Về trang chủ
                          <ArrowUpRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </TiltCard>
                  </motion.div>
                )}

              </AnimatePresence>
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}

// Decorative micro icons
function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function AlertIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
  );
}
