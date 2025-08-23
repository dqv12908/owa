"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function HomePage() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText('0x1234567890abcdef1234567890abcdef12345678');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const members = [
    {
      name: "Zank",
      role: "CMO",
      description:
        "Đại tư tế của truyền thông. Mỗi cú shill của hắn như một đòn bùa mê, khiến đám đông FOMO nhảy vào pool như quân tốt thí mạng.",
      emoji: "🧙‍♂️",
    },
    {
      name: "Estella May",
      role: "Kế Toán",
      description:
        "Người giữ chìa khoá kho bạc. Dưới đôi mắt lạnh như băng, mọi đồng stable đều được cân đong, mọi ví lạnh đều được niêm phong.",
      emoji: "❄️",
    },
    {
      name: "Hàn Lập",
      role: "Pháp sư",
      description:
        "Kẻ duy nhất có thể đọc được biểu đồ như kinh văn. Hắn triệu hồi các đường MA, RSI, Fibonacci như pháp quyết cổ.",
      emoji: "📊",
    },
    {
      name: "B4ochan",
      role: "Đỡ đần",
      description:
        "Linh hồn lầm lũi của cộng đồng. Lúc nào cũng kêu 'em đỡ được rồi', nhưng thực ra chỉ chuyên đi nhặt xác sau mỗi lần pump & dump.",
      emoji: "🤲",
    },
    {
      name: "Alpha Morty",
      role: "Vinh C98",
      description:
        "Con dao hai lưỡi. Lúc thì được tung hô 'alpha', lúc lại bị chửi 'đồ mồi cá mập'. Nhưng kỳ thực, hắn là kẻ đưa tin mật.",
      emoji: "⚔️",
    },
    {
      name: "Thái Khánh",
      role: "Súc vật bốn chân",
      description:
        "Hình dạng thì mờ mịt, nửa người nửa thú. Chỉ nghe đâu có kèo là phi tới cắn, chấp cả scam lẫn rug, miễn có máu để hút.",
      emoji: "🐺",
    },
    {
      name: "Hùng Vũ",
      role: "Exploiter",
      description:
        "Súc vật always offline. Kẻ săn lùng các lỗ hổng như một con thú hoang, luôn ẩn mình trong bóng tối của mạng lưới.",
      emoji: "🕵️",
    },
    {
      name: "Daenerys Targaryen",
      role: "CA Nam Từ Liêm",
      description:
        "Nữ hoàng của những con rồng lửa, chuyên săn lùng các kẻ phản bội trong cộng đồng. Với ngọn lửa trong tim và sắt trong tay, bà ta thiêu rụi mọi kẻ dám phản bội tộc.",
      emoji: "🐉",
    },
    {
      name: "Kem",
      role: "Jolibee",
      description:
        "Chuyên gia ẩm thực của tộc, luôn mang đến những món ăn ngon nhất cho anh em. Nhưng đừng để bị lừa bởi vẻ ngoài hiền lành, hắn cũng là một tay săn kèo cừ khôi.",
      emoji: "🍗",
    },
  ]

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-blue-900/30 to-blue-800/20">
        <div className="absolute inset-0 bg-[url('/mystical-crypto-universe.png')] bg-cover bg-center opacity-10" />

        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <Badge variant="secondary" className="text-lg px-4 py-2 mb-4 bg-blue-900 text-yellow-300 border-yellow-400">
              😇 🪽
            </Badge>
          </div>

          <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Owacrypto Community
          </h1>

          <p className="text-xl md:text-2xl text-blue-200 mb-4 font-medium">Đạo quân cởi trần hút thuốc</p>

          <div className="w-full max-w-2xl mx-auto mb-8 aspect-video bg-blue-900/20 rounded-lg border-2 border-dashed border-yellow-400 flex items-center justify-center">
            <Image
              src="/logo.png"
              alt="Owacrypto Community Hero Image"
              width={800}
              height={450}
              className="w-full h-full object-cover rounded-lg opacity-80"
            />
          </div>

          <p className="text-lg text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Tận sâu trong vũ trụ on-chain, nơi những con số nhảy múa như ma pháp và những cú nến xanh đỏ chính là thần
            chú, tồn tại một giáo phái kỳ lạ mang tên{" "}
            <span className="text-yellow-300 font-semibold">Owacrypto Community</span>.
          </p>

          {/* Contract Address Copy Section */}
          <div className="mb-8 max-w-2xl mx-auto">
            <div className="bg-blue-900/30 border border-yellow-400/50 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-sm text-blue-200 mb-1">Contract Address</p>
                  <p className="text-yellow-300 font-mono text-sm break-all">0x1234567890abcdef1234567890abcdef12345678</p>
                </div>
                <Button 
                  size="sm" 
                  className="ml-4 bg-blue-800 hover:bg-blue-700 text-white border-yellow-400"
                  onClick={handleCopy}
                >
                  {copied ? "Copied!" : "Copy"}
                </Button>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-3 bg-blue-800 hover:bg-blue-700 text-white border-yellow-400" asChild>
              <a href="https://t.me/owacryptocomm" target="_blank" rel="noopener noreferrer">
                Gia nhập đạo quân 🔥
              </a>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3 bg-transparent border-yellow-400 text-yellow-300 hover:bg-yellow-400/10">
              daosfun đạo quân 💎
            </Button>
          </div>
        </div>
      </section>

      {/* Members Section */}
      <section className="py-20 px-6 bg-blue-950/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
              🧙 Nhân vật chính trong tộc
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Những kẻ nắm giữ sức mạnh vượt trên cả thị trường: niềm tin vào kèo ẩn
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Owa - Tộc trưởng - Full width card */}
            <div className="col-span-1 md:col-span-2 lg:col-span-3">
              <Card className="bg-blue-900/20 border-yellow-400/50 hover:border-yellow-400 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/20">
                <CardHeader className="text-center">
                  <div className="text-4xl mb-4">👑</div>
                  <CardTitle className="font-serif text-2xl text-white">Owa</CardTitle>
                  <Badge variant="secondary" className="w-fit mx-auto bg-blue-800 text-yellow-300 border-yellow-400">
                    Tộc trưởng
                  </Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-blue-100 leading-relaxed">
                    Cu dài, bí ẩn
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
            
            {members.map((member, index) => (
              <Card
                key={index}
                className="bg-blue-900/20 border-yellow-400/50 hover:border-yellow-400 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/20"
              >
                <CardHeader className="text-center">
                  <div className="text-4xl mb-4">{member.emoji}</div>
                  <CardTitle className="font-serif text-2xl text-white">{member.name}</CardTitle>
                  <Badge variant="secondary" className="w-fit mx-auto bg-blue-800 text-yellow-300 border-yellow-400">
                    {member.role}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-blue-100 leading-relaxed">
                    {member.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Oath Section */}
      <section className="py-20 px-6 bg-blue-900/20 border-y border-yellow-400/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-8">⚔️ Lời thề cộng đồng</h2>

          <blockquote className="text-2xl md:text-3xl font-medium text-yellow-300 mb-8 italic">
            &ldquo;Không kèo nào bỏ lỡ, không ví nào trống rỗng. Cởi trần mà vẫn triệu phú.&rdquo;
          </blockquote>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl mb-4">🔥</div>
              <h3 className="font-serif text-xl font-bold text-white mb-2">Hỗn loạn nhưng giàu có</h3>
              <p className="text-blue-200">Trong cõi crypto, chúng ta là dị giáo vừa đáng sợ vừa huyền bí</p>
            </div>

            <div className="text-center">
              <div className="text-3xl mb-4">⛓️</div>
              <h3 className="font-serif text-xl font-bold text-white mb-2">Man rợ nhưng on-chain ngầu đét</h3>
              <p className="text-blue-200">Thân xác loang mùi khói nhưng ví on-chain sở hữu kho báu triệu đô</p>
            </div>

            <div className="text-center">
              <div className="text-3xl mb-4">🐾</div>
              <h3 className="font-serif text-xl font-bold text-white mb-2">Một ngày súc vật, cả đời súc vật</h3>
              <p className="text-blue-200">Đội quân Legion - những kẻ vô danh tạo thành đàn hỗn loạn</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-blue-950 border-t border-yellow-400/30">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-2xl mb-4">😇,🪽</div>
          <h3 className="font-serif text-2xl font-bold text-white mb-4">Owacrypto Community</h3>
          <p className="text-blue-200 mb-6">Tận sâu trong vũ trụ on-chain, nơi ma pháp và thần chú giao thoa</p>

          <div className="flex justify-center gap-6">
            <Button variant="ghost" size="sm" className="text-yellow-300 hover:text-yellow-200 hover:bg-yellow-400/10" asChild>
              <a href="https://t.me/owacryptocomm" target="_blank" rel="noopener noreferrer">
                Telegram
              </a>
            </Button>
            <Button variant="ghost" size="sm" className="text-yellow-300 hover:text-yellow-200 hover:bg-yellow-400/10" asChild>
              <a href="https://x.com/0wacrypto" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}
