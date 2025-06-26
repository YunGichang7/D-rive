import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data to a server
    toast({
      title: "문의가 접수되었습니다",
      description: "빠른 시일 내에 연락드리겠습니다.",
    });
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "이메일",
      value: "chilldrive99@gmail.com",
      bgColor: "bg-[var(--drive-primary)]/10",
      iconColor: "text-[var(--drive-primary)]"
    },
    {
      icon: Phone,
      title: "전화번호",
      value: "010-7684-5650",
      bgColor: "bg-[var(--drive-secondary)]/10",
      iconColor: "text-[var(--drive-secondary)]"
    },
    {
      icon: MapPin,
      title: "주소",
      value: "부산광역시 문현금융로 40 부산 국제 금융센터 55층",
      bgColor: "bg-[var(--drive-accent)]/10",
      iconColor: "text-[var(--drive-accent)]"
    },
    {
      icon: ExternalLink,
      title: "웹사이트",
      value: "Notion 페이지 바로가기",
      link: "https://fantastic-bowler-bf3.notion.site/D-rive_main-1fdfe48148808190b8a2ea559322ee75",
      bgColor: "bg-[var(--drive-primary)]/10",
      iconColor: "text-[var(--drive-primary)]"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--drive-primary)]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[var(--drive-secondary)]/5 rounded-full blur-2xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-[var(--drive-secondary)]/10 text-[var(--drive-secondary)] text-sm font-medium mb-6"
          >
            <span>파트너십 및 문의</span>
          </motion.div>
          <h2 className="text-[var(--drive-dark)] mb-6">문의하기</h2>
          <p className="text-xl text-[var(--drive-gray)] max-w-3xl mx-auto leading-relaxed">
            디라이브와 함께 지속가능한 미래를 만들어갈 파트너를 찾습니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-10">
                <h3 className="text-2xl font-bold text-[var(--drive-dark)] mb-8">연락처 정보</h3>
                <div className="space-y-8">
                  {contactInfo.map((info, index) => (
                    <motion.div 
                      key={index} 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center group hover:transform hover:translate-x-2 transition-all duration-300"
                    >
                      <motion.div 
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                        viewport={{ once: true }}
                        className={`w-14 h-14 ${info.bgColor} rounded-xl flex items-center justify-center mr-6 flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <info.icon className={`w-7 h-7 ${info.iconColor}`} />
                      </motion.div>
                      <div>
                        <div className="font-bold text-[var(--drive-dark)] mb-1">{info.title}</div>
                        {info.link ? (
                          <a
                            href={info.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[var(--drive-primary)] hover:text-[var(--drive-primary)]/80 transition-colors duration-200 font-medium"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <div className="text-[var(--drive-gray)] font-medium">{info.value}</div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-10">
                <h3 className="text-2xl font-bold text-[var(--drive-dark)] mb-8">문의 양식</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Label htmlFor="name" className="text-sm font-semibold text-[var(--drive-dark)] mb-2 block">
                      이름
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="이름을 입력해주세요"
                      className="h-12 text-base border-2 border-gray-200 focus:border-[var(--drive-primary)] transition-colors duration-300"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <Label htmlFor="email" className="text-sm font-semibold text-[var(--drive-dark)] mb-2 block">
                      이메일
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="이메일을 입력해주세요"
                      className="h-12 text-base border-2 border-gray-200 focus:border-[var(--drive-primary)] transition-colors duration-300"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <Label htmlFor="company" className="text-sm font-semibold text-[var(--drive-dark)] mb-2 block">
                      회사명
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="회사명을 입력해주세요"
                      className="h-12 text-base border-2 border-gray-200 focus:border-[var(--drive-primary)] transition-colors duration-300"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <Label htmlFor="message" className="text-sm font-semibold text-[var(--drive-dark)] mb-2 block">
                      문의 내용
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="문의 내용을 입력해주세요"
                      rows={5}
                      className="text-base border-2 border-gray-200 focus:border-[var(--drive-primary)] transition-colors duration-300 resize-none"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <Button
                      type="submit"
                      className="w-full h-14 eco-gradient text-white hover:opacity-90 transition-all duration-300 transform hover:scale-[1.02] text-lg font-semibold"
                      size="lg"
                    >
                      문의 보내기
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
