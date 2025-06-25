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
      value: "contact@d-rive.co.kr",
      bgColor: "bg-[var(--drive-primary)]/10",
      iconColor: "text-[var(--drive-primary)]"
    },
    {
      icon: Phone,
      title: "전화번호",
      value: "02-1234-5678",
      bgColor: "bg-[var(--drive-secondary)]/10",
      iconColor: "text-[var(--drive-secondary)]"
    },
    {
      icon: MapPin,
      title: "주소",
      value: "서울특별시 강남구 테헤란로 123",
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
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">문의하기</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            디라이브와 함께 지속가능한 미래를 만들어갈 파트너를 찾습니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">연락처 정보</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center">
                      <div className={`w-12 h-12 ${info.bgColor} rounded-lg flex items-center justify-center mr-4 flex-shrink-0`}>
                        <info.icon className={`w-6 h-6 ${info.iconColor}`} />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{info.title}</div>
                        {info.link ? (
                          <a
                            href={info.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[var(--drive-primary)] hover:text-[var(--drive-primary)]/80 transition-colors duration-200"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <div className="text-gray-600">{info.value}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">문의 양식</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-sm font-medium text-gray-700">
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
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-sm font-medium text-gray-700">
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
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="company" className="text-sm font-medium text-gray-700">
                      회사명
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="회사명을 입력해주세요"
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                      문의 내용
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="문의 내용을 입력해주세요"
                      rows={4}
                      className="mt-2"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-[var(--drive-primary)] text-white hover:bg-[var(--drive-primary)]/90"
                    size="lg"
                  >
                    문의 보내기
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
