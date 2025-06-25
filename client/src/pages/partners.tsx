import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Shield, Lightbulb, GraduationCap, Rocket, Home } from "lucide-react";

export default function Partners() {
  const partners = [
    {
      name: "Ucar-EMS",
      category: "기술 파트너",
      type: "Technology",
      icon: Building2,
      color: "bg-[var(--drive-primary)]",
      description: "차량 관리 시스템 분야의 선도 기업으로 EMS(Energy Management System) 기술을 통한 협업",
      image: "https://images.unsplash.com/photo-1558618666-fcd43c7cd028?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    },
    {
      name: "한국도로교통공단",
      category: "정부 기관",
      type: "Government",
      icon: Shield,
      color: "bg-[var(--drive-secondary)]",
      description: "교통안전 및 운전자 교육 분야의 전문 기관으로 안전운전 문화 확산을 위한 파트너십",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    },
    {
      name: "부산 창조경제혁신센터",
      category: "혁신 지원",
      type: "Innovation",
      icon: Lightbulb,
      color: "bg-[var(--drive-accent)]",
      description: "스타트업 육성과 혁신 생태계 조성을 통한 창업 지원 및 비즈니스 성장 동반자",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    },
    {
      name: "부산대학교",
      category: "교육 기관",
      type: "Academic",
      icon: GraduationCap,
      color: "bg-[var(--drive-primary)]",
      description: "산학협력을 통한 연구개발 및 인재 양성, 기술 혁신을 위한 학술적 파트너십",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    },
    {
      name: "부산대학교 창업지원단",
      category: "창업 지원",
      type: "Startup Support",
      icon: Rocket,
      color: "bg-[var(--drive-secondary)]",
      description: "창업 초기 단계부터 성장까지 전 과정을 지원하는 창업 생태계의 핵심 파트너",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    },
    {
      name: "꿈터 플러스",
      category: "공간 지원",
      type: "Space Support",
      icon: Home,
      color: "bg-[var(--drive-accent)]",
      description: "창업 공간 및 인프라 제공을 통한 실질적 사업 운영 지원과 네트워킹 기회 제공",
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    }
  ];

  const categories = [
    { name: "Technology", count: partners.filter(p => p.type === "Technology").length, color: "bg-[var(--drive-primary)]" },
    { name: "Government", count: partners.filter(p => p.type === "Government").length, color: "bg-[var(--drive-secondary)]" },
    { name: "Innovation", count: partners.filter(p => p.type === "Innovation").length, color: "bg-[var(--drive-accent)]" },
    { name: "Academic", count: partners.filter(p => p.type === "Academic").length, color: "bg-[var(--drive-primary)]" },
    { name: "Support", count: partners.filter(p => p.type.includes("Support")).length, color: "bg-[var(--drive-secondary)]" }
  ];

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
              <span>파트너십</span>
            </motion.div>
            <h1 className="text-white mb-6">파트너사</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              디라이브와 함께 지속가능한 미래를 만들어가는 신뢰할 수 있는 파트너들
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[var(--drive-light-gray)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl font-bold text-[var(--drive-dark)] mb-4">파트너십 현황</h2>
          </motion.div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Badge className={`${category.color} text-white px-4 py-2 text-sm font-semibold`}>
                  {category.name} {category.count > 0 && `(${category.count})`}
                </Badge>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-[var(--drive-dark)] mb-6">협력 기관</h2>
            <p className="text-xl text-[var(--drive-gray)] max-w-3xl mx-auto leading-relaxed">
              다양한 분야의 전문 기관들과의 협력을 통해 더 나은 서비스를 제공합니다
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
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
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full group overflow-hidden">
                  <div className="relative">
                    <img
                      src={partner.image}
                      alt={partner.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                      viewport={{ once: true }}
                      className={`absolute top-4 left-4 w-12 h-12 ${partner.color} rounded-xl flex items-center justify-center`}
                    >
                      <partner.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <Badge className={`absolute top-4 right-4 ${partner.color} text-white`}>
                      {partner.category}
                    </Badge>
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-[var(--drive-dark)] mb-3 group-hover:text-[var(--drive-primary)] transition-colors duration-300">
                      {partner.name}
                    </h3>
                    
                    <p className="text-[var(--drive-gray)] leading-relaxed">
                      {partner.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-24 bg-[var(--drive-light-gray)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-[var(--drive-dark)] mb-6">파트너십의 가치</h2>
            <p className="text-xl text-[var(--drive-gray)] max-w-3xl mx-auto leading-relaxed">
              강력한 파트너십을 통해 실현하는 상호 성장과 혁신
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-[var(--drive-primary)]/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <Building2 className="w-8 h-8 text-[var(--drive-primary)]" />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--drive-dark)] mb-4">기술 혁신</h3>
                  <p className="text-[var(--drive-gray)] leading-relaxed">
                    각 분야 전문가들과의 협력을 통한 기술적 시너지 창출
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-[var(--drive-secondary)]/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <Shield className="w-8 h-8 text-[var(--drive-secondary)]" />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--drive-dark)] mb-4">안정성 확보</h3>
                  <p className="text-[var(--drive-gray)] leading-relaxed">
                    정부 기관 및 대학과의 협력을 통한 사업 안정성 강화
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-[var(--drive-accent)]/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <Rocket className="w-8 h-8 text-[var(--drive-accent)]" />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--drive-dark)] mb-4">성장 가속화</h3>
                  <p className="text-[var(--drive-gray)] leading-relaxed">
                    다양한 지원 프로그램을 통한 빠른 사업 성장 실현
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}