import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ExternalLink, Calendar, Globe, Plus, Link as LinkIcon } from "lucide-react";
import { useState } from "react";

export default function News() {
  const [newsLinks, setNewsLinks] = useState([
    {
      id: 1,
      title: "디라이브, 친환경 운전 솔루션으로 ESG 경영 선도",
      url: "https://example.com/news1",
      date: "2024-06-20",
      source: "테크비즈뉴스",
      summary: "디라이브가 개발한 실시간 운전 점수 시스템이 ESG 경영의 새로운 패러다임을 제시하며 주목받고 있다.",
      category: "기술"
    },
    {
      id: 2,
      title: "부산대 스타트업 디라이브, 16% 연비 절약 기술 특허 출원",
      url: "https://example.com/news2",
      date: "2024-06-15",
      source: "부산일보",
      summary: "차량 ECU 데이터를 활용한 혁신적인 운전 개선 알고리즘으로 연비 절약 효과를 입증했다.",
      category: "특허"
    },
    {
      id: 3,
      title: "공유자동차 업계 주목, 디라이브의 차량 수명 연장 솔루션",
      url: "https://example.com/news3",
      date: "2024-06-10",
      source: "모빌리티투데이",
      summary: "공유자동차 차량 수명을 30% 연장하는 디라이브의 기술이 업계에 큰 반향을 일으키고 있다.",
      category: "산업"
    }
  ]);

  const [formData, setFormData] = useState({
    title: "",
    url: "",
    source: "",
    summary: "",
    category: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.title && formData.url) {
      const newNews = {
        id: newsLinks.length + 1,
        title: formData.title,
        url: formData.url,
        date: new Date().toISOString().split('T')[0],
        source: formData.source || "직접 추가",
        summary: formData.summary || "요약 정보가 제공되지 않았습니다.",
        category: formData.category || "기타"
      };
      setNewsLinks([newNews, ...newsLinks]);
      setFormData({ title: "", url: "", source: "", summary: "", category: "" });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const categories = ["기술", "특허", "산업", "투자", "수상", "기타"];
  const categoryColors: { [key: string]: string } = {
    "기술": "bg-[var(--drive-primary)]",
    "특허": "bg-[var(--drive-secondary)]",
    "산업": "bg-[var(--drive-accent)]",
    "투자": "bg-blue-500",
    "수상": "bg-purple-500",
    "기타": "bg-gray-500"
  };

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <section className="tech-gradient py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
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
      <section className="py-16 bg-[var(--drive-light-gray)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Plus className="w-6 h-6 text-[var(--drive-primary)] mr-3" />
                  <h3 className="text-2xl font-bold text-[var(--drive-dark)]">뉴스 추가</h3>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="title" className="text-sm font-semibold text-[var(--drive-dark)] mb-2 block">
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
                      <Label htmlFor="url" className="text-sm font-semibold text-[var(--drive-dark)] mb-2 block">
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
                      <Label htmlFor="source" className="text-sm font-semibold text-[var(--drive-dark)] mb-2 block">
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
                      <Label htmlFor="category" className="text-sm font-semibold text-[var(--drive-dark)] mb-2 block">
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
                    <Label htmlFor="summary" className="text-sm font-semibold text-[var(--drive-dark)] mb-2 block">
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
            </Card>
          </motion.div>
        </div>
      </section>

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
              디라이브의 혁신적인 기술과 성과가 언론에 보도된 내용들을 확인하세요
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
                  stiffness: 100
                }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full group">
                  <CardContent className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <Badge className={`${categoryColors[news.category] || categoryColors["기타"]} text-white`}>
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
            <h3 className="text-xl font-bold text-[var(--drive-dark)] mb-8">뉴스 카테고리</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Badge className={`${categoryColors[category]} text-white px-4 py-2 text-sm font-medium hover:scale-105 transition-transform duration-300 cursor-pointer`}>
                    {category} ({newsLinks.filter(news => news.category === category).length})
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}