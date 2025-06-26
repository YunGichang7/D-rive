import Navigation from "@/components/navigation";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, Building, Globe, Target, BarChart3, CheckCircle } from "lucide-react";

export default function BusinessModel() {
  const strategies = [
    {
      type: "B2B 전략",
      title: "공유자동차 & 보험사 연계",
      amount: "200억원",
      color: "bg-[var(--drive-primary)]",
      icon: Building,
      description: "공유자동차 플랫폼과 보험사 파트너십을 통한 B2B 시장 진입"
    },
    {
      type: "B2C 전략",
      title: "데이터 기반 서비스",
      amount: "1,500억원",
      color: "bg-[var(--drive-secondary)]",
      icon: Users,
      description: "차량 컨디션과 제품 데이터 제공을 통한 수익 모델 다각화"
    },
    {
      type: "B2G 전략",
      title: "정부 정책 연계",
      amount: "140억원",
      color: "bg-[var(--drive-accent)]",
      icon: Globe,
      description: "환경보호와 탄소배출 모니터링 관련 정부 및 지자체 정책 연계"
    }
  ];

  const benefits = [
    {
      title: "연료비 절약",
      value: "16%",
      description: "이용자들의 유료비 절약 효과",
      icon: TrendingUp
    },
    {
      title: "차량 수명 증가",
      value: "30%",
      description: "교체주기를 3년에서 5년으로 연장",
      icon: Target
    },
    {
      title: "연간 비용 절감",
      value: "175억원",
      description: "총 예상 비용 절감 효과",
      icon: BarChart3
    }
  ];

  const competitorAdvantages = [
    "네비게이션 출발지/목적지 설정 불필요",
    "네비게이션 안내 경로 제한 없음",
    "실시간 점수 확인 가능",
    "GPS 오차 문제 해결",
    "차량 ECU 데이터 기반 정확한 측정"
  ];

  return (
    <>
      <Navigation />
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
              <span>비즈니스 모델 & 시장 분석</span>
            </motion.div>
            <h1 className="text-white mb-6">BM & Analysis</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              목표시장 분석과 전략적 비즈니스 모델을 통한 지속가능한 성장 방안
            </p>
          </motion.div>
        </div>
      </section>

      {/* Market Benefits */}
      <section className="py-24 bg-[var(--drive-light-gray)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-[var(--drive-dark)] mb-6">시장 효과 분석</h2>
            <p className="text-xl text-[var(--drive-gray)] max-w-3xl mx-auto leading-relaxed">
              공유자동차와 보험시장에서의 실질적 효과 검증
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                  <CardContent className="p-8 text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                      viewport={{ once: true }}
                      className="w-16 h-16 bg-[var(--drive-primary)]/10 rounded-xl flex items-center justify-center mx-auto mb-6"
                    >
                      <benefit.icon className="w-8 h-8 text-[var(--drive-primary)]" />
                    </motion.div>
                    <div className="text-4xl font-bold text-[var(--drive-primary)] mb-3">
                      {benefit.value}
                    </div>
                    <h3 className="text-xl font-bold text-[var(--drive-dark)] mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-[var(--drive-gray)] leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Strategies */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-[var(--drive-dark)] mb-6">비즈니스 전략</h2>
            <p className="text-xl text-[var(--drive-gray)] max-w-3xl mx-auto leading-relaxed">
              다각화된 접근을 통한 시장 진입 및 확장 전략
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {strategies.map((strategy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full group">
                  <CardContent className="p-8">
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                      viewport={{ once: true }}
                      className={`w-16 h-16 ${strategy.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <strategy.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    
                    <Badge className={`${strategy.color} text-white mb-4`}>
                      {strategy.type}
                    </Badge>
                    
                    <h3 className="text-xl font-bold text-[var(--drive-dark)] mb-3 group-hover:text-[var(--drive-primary)] transition-colors duration-300">
                      {strategy.title}
                    </h3>
                    
                    <div className="text-3xl font-bold text-[var(--drive-primary)] mb-4">
                      {strategy.amount}
                    </div>
                    
                    <p className="text-[var(--drive-gray)] leading-relaxed">
                      {strategy.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Competitive Advantages */}
      <section className="py-24 bg-[var(--drive-light-gray)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-[var(--drive-dark)] mb-6">경쟁사 대비 우위점</h2>
            <p className="text-xl text-[var(--drive-gray)] max-w-3xl mx-auto leading-relaxed">
              기존 GPS 기반 시스템의 한계를 극복한 차량 ECU 데이터 기반 솔루션
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-2xl font-bold text-[var(--drive-dark)] mb-6">
                      디라이브의 혁신
                    </h3>
                    <p className="text-[var(--drive-gray)] leading-relaxed mb-8">
                      GPS 오차로 인한 기존 시스템의 한계를 차량 ECU 데이터를 통해 해결하여 
                      더욱 정확하고 실시간적인 운전 점수 측정을 실현합니다.
                    </p>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="space-y-4">
                      {competitorAdvantages.map((advantage, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-center group"
                        >
                          <CheckCircle className="w-6 h-6 text-[var(--drive-primary)] mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                          <span className="text-[var(--drive-gray)] font-medium">
                            {advantage}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Market Size */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-[var(--drive-dark)] mb-6">보험 시장 규모</h2>
            <p className="text-xl text-[var(--drive-gray)] mb-12 max-w-3xl mx-auto leading-relaxed">
              국내 자동차 보험시장 규모와 운전 점수 기반 할인 서비스의 잠재력
            </p>
            
            <Card className="max-w-4xl mx-auto border-0 shadow-lg">
              <CardContent className="p-12 text-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-5xl font-bold text-[var(--drive-primary)] mb-4">20조원</div>
                    <h3 className="text-xl font-bold text-[var(--drive-dark)] mb-2">국내 보험시장 규모</h3>
                    <p className="text-[var(--drive-gray)]">전체 자동차 보험시장의 크기</p>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-5xl font-bold text-[var(--drive-secondary)] mb-4">12만원</div>
                    <h3 className="text-xl font-bold text-[var(--drive-dark)] mb-2">인당 연평균 절약</h3>
                    <p className="text-[var(--drive-gray)]">운전 점수 기반 보험료 할인 효과</p>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
    </>
  );
}