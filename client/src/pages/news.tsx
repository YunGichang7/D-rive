import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  ExternalLink,
  Calendar,
  Globe,
  Plus,
  Link as LinkIcon,
} from "lucide-react";
import { useState } from "react";
import Navigation from "@/components/navigation";

export default function News() {
  const [newsLinks, setNewsLinks] = useState([
    {
      id: 1,
      title: "부산창조경제혁신센터, 스타트업 혁신 지원 ‘솔루션 리빙랩’ 본격화",
      url: "https://www.metroseoul.co.kr/article/20240621500046",
      date: "2024-06-21",
      source: "메트로신문",
      summary:
        "부산의 혁신 스타트업 디라이브가 아이템의 기능성에 대한 잠재 고객층의 솔직하고 다채로운 의견을 직접 듣고자 한다.",
      category: "기타",
    },
    {
      id: 2,
      title: "부산창경센터, 초격차·딥테크 스타트업 육성 교육",
      url: "https://www.newsis.com/view/NISX20240822_0002858414",
      date: "2024-08-22",
      source: "공감언론 뉴시스",
      summary:
        "지역 초격차·딥테크 분야 우수 창업기업 육성을 위한 '2024년 부산 창업기업 액셀러레이팅 프로그램'을 추진.",
      category: "기타",
    },
    {
      id: 3,
      title: "태국서 발명·혁신 한국위상 떨쳤다",
      url: "https://www.naeil.com/news/read/537339?ref=naver",
      date: "2025-02-07",
      source: "내일신문",
      summary:
        "디라이브(대표 두강명)는 ‘온보드 진단(OBD)을 이용하는 실시간 운전점수산정시스템’으로 금상을 받았다. 특히 태국교통부와 협상을 통해 태국시장 진출의 교두보를 마련했다.",
      category: "수상",
    },
    {
      id: 3,
      title: "[STAR:T UP] 운전 점수의 혁신을 선도하는 '디라이브'",
      url: "https://blog.naver.com/pnustartup/223715934971",
      date: "2025-01-06",
      source: "부산대학교창업지원단",
      summary:
        "디라이브(D,rive)는 그들만의 독창적인 기술로 운전자의 운전 점수를 매겨 △지속가능한 환경 △안전 △경제적 효율성을 융합한 미래를 선도한다.",
      category: "기타",
    },
  ]);

  const [formData, setFormData] = useState({
    title: "",
    url: "",
    source: "",
    summary: "",
    category: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.title && formData.url) {
      const newNews = {
        id: newsLinks.length + 1,
        title: formData.title,
        url: formData.url,
        date: new Date().toISOString().split("T")[0],
        source: formData.source || "직접 추가",
        summary: formData.summary || "요약 정보가 제공되지 않았습니다.",
        category: formData.category || "기타",
      };
      setNewsLinks([newNews, ...newsLinks]);
      setFormData({
        title: "",
        url: "",
        source: "",
        summary: "",
        category: "",
      });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const categories = ["기술", "특허", "산업", "투자", "수상", "기타"];
  const categoryColors: { [key: string]: string } = {
    기술: "bg-[var(--drive-primary)]",
    특허: "bg-[var(--drive-secondary)]",
    산업: "bg-[var(--drive-accent)]",
    투자: "bg-blue-500",
    수상: "bg-purple-500",
    기타: "bg-gray-500",
  };

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white pt-16">
        {/* Hero Section */}
        <section className="tech-gradient py-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-[var(--drive-primary)]/10 text-[var(--drive-primary)] text-sm font-medium mb-6"
              >
                <span>뉴스 & 미디어</span>
              </motion.div>
              <h1 className="text-white mb-6">News & Media</h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                디라이브의 최신 소식과 미디어 보도를 한눈에 확인하세요
              </p>
            </motion.div>
          </div>
        </section>

        {/* Add News Form */}
        {/* <section className="py-16 bg-[var(--drive-light-gray)]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            > */}
              {/* <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Plus className="w-6 h-6 text-[var(--drive-primary)] mr-3" />
                    <h3 className="text-2xl font-bold text-[var(--drive-dark)]">
                      뉴스 추가
                    </h3>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label
                          htmlFor="title"
                          className="text-sm font-semibold text-[var(--drive-dark)] mb-2 block"
                        >
                          뉴스 제목 *
                        </Label>
                        <Input
                          id="title"
                          name="title"
                          required
                          value={formData.title}
                          onChange={handleChange}
                          placeholder="뉴스 제목을 입력하세요"
                          className="h-12 border-2 border-gray-200 focus:border-[var(--drive-primary)]"
                        />
                      </div>

                      <div>
                        <Label
                          htmlFor="url"
                          className="text-sm font-semibold text-[var(--drive-dark)] mb-2 block"
                        >
                          뉴스 링크 *
                        </Label>
                        <Input
                          id="url"
                          name="url"
                          type="url"
                          required
                          value={formData.url}
                          onChange={handleChange}
                          placeholder="https://example.com/news"
                          className="h-12 border-2 border-gray-200 focus:border-[var(--drive-primary)]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label
                          htmlFor="source"
                          className="text-sm font-semibold text-[var(--drive-dark)] mb-2 block"
                        >
                          출처
                        </Label>
                        <Input
                          id="source"
                          name="source"
                          value={formData.source}
                          onChange={handleChange}
                          placeholder="예: 테크크런치, 조선일보"
                          className="h-12 border-2 border-gray-200 focus:border-[var(--drive-primary)]"
                        />
                      </div>

                      <div>
                        <Label
                          htmlFor="category"
                          className="text-sm font-semibold text-[var(--drive-dark)] mb-2 block"
                        >
                          카테고리
                        </Label>
                        <Input
                          id="category"
                          name="category"
                          value={formData.category}
                          onChange={handleChange}
                          placeholder="예: 기술, 특허, 산업"
                          className="h-12 border-2 border-gray-200 focus:border-[var(--drive-primary)]"
                        />
                      </div>
                    </div>

                    <div>
                      <Label
                        htmlFor="summary"
                        className="text-sm font-semibold text-[var(--drive-dark)] mb-2 block"
                      >
                        요약
                      </Label>
                      <Textarea
                        id="summary"
                        name="summary"
                        value={formData.summary}
                        onChange={handleChange}
                        placeholder="뉴스 내용을 간단히 요약해주세요"
                        rows={3}
                        className="border-2 border-gray-200 focus:border-[var(--drive-primary)] resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="eco-gradient text-white px-8 py-3 hover:opacity-90 transition-all duration-300 transform hover:scale-105"
                    >
                      <Plus className="w-5 h-5 mr-2" />
                      뉴스 추가
                    </Button>
                  </form>
                </CardContent>
              </Card> */}
            {/* </motion.div>
          </div>
        </section> */}

        {/* News List */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-[var(--drive-dark)] mb-6">최신 뉴스</h2>
              <p className="text-xl text-[var(--drive-gray)] max-w-3xl mx-auto leading-relaxed">
                디라이브의 혁신적인 기술과 성과가 언론에 보도된 내용들을
                확인하세요
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {newsLinks.map((news, index) => (
                <motion.div
                  key={news.id}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100,
                  }}
                  viewport={{ once: true }}
                >
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full group">
                    <CardContent className="p-8">
                      <div className="flex items-start justify-between mb-4">
                        <Badge
                          className={`${
                            categoryColors[news.category] ||
                            categoryColors["기타"]
                          } text-white`}
                        >
                          {news.category}
                        </Badge>
                        <div className="flex items-center text-sm text-[var(--drive-gray)]">
                          <Calendar className="w-4 h-4 mr-1" />
                          {news.date}
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-[var(--drive-dark)] mb-4 group-hover:text-[var(--drive-primary)] transition-colors duration-300 line-clamp-2">
                        {news.title}
                      </h3>

                      <p className="text-[var(--drive-gray)] leading-relaxed mb-6 line-clamp-3">
                        {news.summary}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-[var(--drive-gray)]">
                          <Globe className="w-4 h-4 mr-2" />
                          {news.source}
                        </div>

                        <a
                          href={news.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center px-4 py-2 bg-[var(--drive-primary)]/10 text-[var(--drive-primary)] rounded-lg hover:bg-[var(--drive-primary)] hover:text-white transition-all duration-300 group-hover:scale-105"
                        >
                          <LinkIcon className="w-4 h-4 mr-2" />
                          원문 보기
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-16 bg-[var(--drive-light-gray)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-xl font-bold text-[var(--drive-dark)] mb-8">
                뉴스 카테고리
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {categories.map((category, index) => (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Badge
                      className={`${categoryColors[category]} text-white px-4 py-2 text-sm font-medium hover:scale-105 transition-transform duration-300 cursor-pointer`}
                    >
                      {category} (
                      {
                        newsLinks.filter((news) => news.category === category)
                          .length
                      }
                      )
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
