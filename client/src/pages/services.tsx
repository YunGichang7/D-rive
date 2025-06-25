import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Route, Shield, TrendingUp, BarChart3, ArrowRight, CheckCircle, Star } from "lucide-react";
import { useState } from "react";

export default function Services() {
  const services = [
    {
      id: "yellow-way",
      title: "Yellow Way",
      subtitle: "친환경 경로 안내 서비스",
      description: "AI 기반 친환경 경로 추천으로 연비 효율성을 극대화하는 내비게이션 서비스",
      icon: Route,
      color: "bg-yellow-500",
      benefits: [
        "연비 최적화된 경로 추천",
        "실시간 교통 상황 반영",
        "탄소 배출량 최소화",
        "연료비 절약 효과 측정"
      ],
      features: [
        "스마트 경로 알고리즘",
        "실시간 연비 모니터링",
        "친환경 운전 가이드",
        "통계 및 리포트 제공"
      ],
      target: "개인 운전자, 운송업체",
      pricing: "월 9,900원부터"
    },
    {
      id: "3-driving",
      title: "3직중 (3가지 직업 중심) 서비스",
      subtitle: "직업별 맞춤 운전 솔루션",
      description: "택시, 배송, 대리운전 등 전문 운전직 종사자를 위한 특화된 운전 관리 서비스",
      icon: Star,
      color: "bg-blue-500",
      benefits: [
        "직업별 특화된 운전 패턴 분석",
        "수익 최적화 운전 가이드",
        "차량 관리 비용 절감",
        "운전자 안전성 향상"
      ],
      features: [
        "직업별 맞춤 대시보드",
        "수익성 분석 리포트",
        "차량 상태 모니터링",
        "운전 습관 개선 코칭"
      ],
      target: "택시기사, 배송기사, 대리운전기사",
      pricing: "월 19,900원부터"
    },
    {
      id: "insurance",
      title: "보험사 연계 서비스",
      subtitle: "운전 점수 기반 보험료 할인",
      description: "실시간 운전 데이터를 바탕으로 개인화된 보험료 할인 혜택을 제공하는 서비스",
      icon: Shield,
      color: "bg-green-500",
      benefits: [
        "운전 점수별 보험료 할인",
        "사고 위험도 사전 알림",
        "안전 운전 인센티브",
        "보험료 최대 20% 절약"
      ],
      features: [
        "실시간 위험도 평가",
        "개인화된 할인율 적용",
        "사고 예방 알림 시스템",
        "보험사 직접 연동"
      ],
      target: "개인 차량 소유자, 법인 차량 관리자",
      pricing: "보험료 할인으로 실질적 무료"
    },
    {
      id: "prediction",
      title: "예측 서비스",
      subtitle: "AI 기반 차량 상태 예측",
      description: "머신러닝을 활용한 차량 부품 교체 시기 예측 및 유지보수 최적화 서비스",
      icon: TrendingUp,
      color: "bg-purple-500",
      benefits: [
        "예방적 차량 관리",
        "부품 교체 시기 예측",
        "유지보수 비용 절감",
        "차량 다운타임 최소화"
      ],
      features: [
        "AI 기반 예측 알고리즘",
        "부품별 상태 모니터링",
        "유지보수 일정 자동화",
        "비용 절감 효과 분석"
      ],
      target: "차량 관리 업체, 공유차 서비스",
      pricing: "차량당 월 29,900원부터"
    }
  ];

  const [selectedService, setSelectedService] = useState<string | null>(null);

  const handleServiceSelect = (serviceId: string) => {
    setSelectedService(selectedService === serviceId ? null : serviceId);
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
              <span>서비스 소개</span>
            </motion.div>
            <h1 className="text-white mb-6">Our Services</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              지속가능한 운전 문화를 위한 다양한 맞춤형 서비스를 제공합니다
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-[var(--drive-dark)] mb-6">서비스 라인업</h2>
            <p className="text-xl text-[var(--drive-gray)] max-w-3xl mx-auto leading-relaxed">
              다양한 운전자 니즈에 맞춘 전문적이고 차별화된 솔루션
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
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
                <Card className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full group cursor-pointer ${
                  selectedService === service.id ? 'ring-2 ring-[var(--drive-primary)]' : ''
                }`}>
                  <CardContent className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                        viewport={{ once: true }}
                        className={`w-16 h-16 ${service.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      >
                        <service.icon className="w-8 h-8 text-white" />
                      </motion.div>
                      <Badge className="bg-[var(--drive-primary)]/10 text-[var(--drive-primary)] border-0">
                        {service.pricing}
                      </Badge>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-[var(--drive-dark)] mb-2 group-hover:text-[var(--drive-primary)] transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-[var(--drive-primary)] font-semibold mb-4">
                      {service.subtitle}
                    </p>
                    
                    <p className="text-[var(--drive-gray)] leading-relaxed mb-6">
                      {service.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-[var(--drive-dark)] mb-3">주요 혜택</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.benefits.slice(0, 4).map((benefit, i) => (
                          <div key={i} className="flex items-center text-sm">
                            <CheckCircle className="w-4 h-4 text-[var(--drive-primary)] mr-2 flex-shrink-0" />
                            <span className="text-[var(--drive-gray)]">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-[var(--drive-gray)]">
                        대상: {service.target}
                      </span>
                      <Button
                        onClick={() => handleServiceSelect(service.id)}
                        variant="ghost"
                        className="text-[var(--drive-primary)] hover:bg-[var(--drive-primary)]/10 p-2"
                      >
                        {selectedService === service.id ? '간략히' : '자세히'}
                        <ArrowRight className={`w-4 h-4 ml-2 transition-transform duration-300 ${
                          selectedService === service.id ? 'rotate-90' : ''
                        }`} />
                      </Button>
                    </div>
                    
                    {/* Expanded Details */}
                    <motion.div
                      initial={false}
                      animate={{
                        height: selectedService === service.id ? 'auto' : 0,
                        opacity: selectedService === service.id ? 1 : 0
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      {selectedService === service.id && (
                        <div className="mt-6 pt-6 border-t border-gray-200">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <h5 className="font-semibold text-[var(--drive-dark)] mb-3">핵심 기능</h5>
                              <ul className="space-y-2">
                                {service.features.map((feature, i) => (
                                  <li key={i} className="flex items-center text-sm">
                                    <div className="w-2 h-2 bg-[var(--drive-primary)] rounded-full mr-3"></div>
                                    <span className="text-[var(--drive-gray)]">{feature}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h5 className="font-semibold text-[var(--drive-dark)] mb-3">추가 혜택</h5>
                              <ul className="space-y-2">
                                {service.benefits.map((benefit, i) => (
                                  <li key={i} className="flex items-center text-sm">
                                    <CheckCircle className="w-4 h-4 text-[var(--drive-primary)] mr-2 flex-shrink-0" />
                                    <span className="text-[var(--drive-gray)]">{benefit}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          <div className="mt-6">
                            <Button className="eco-gradient text-white px-6 py-2 hover:opacity-90 transition-opacity duration-300">
                              서비스 문의하기
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Comparison */}
      <section className="py-24 bg-[var(--drive-light-gray)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-[var(--drive-dark)] mb-6">서비스 비교</h2>
            <p className="text-xl text-[var(--drive-gray)] max-w-3xl mx-auto leading-relaxed">
              각 서비스의 특징을 비교하여 최적의 솔루션을 선택하세요
            </p>
          </motion.div>

          <Card className="border-0 shadow-lg overflow-hidden">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-[var(--drive-primary)]">
                    <tr>
                      <th className="px-6 py-4 text-left text-white font-semibold">서비스</th>
                      <th className="px-6 py-4 text-center text-white font-semibold">대상 고객</th>
                      <th className="px-6 py-4 text-center text-white font-semibold">주요 기능</th>
                      <th className="px-6 py-4 text-center text-white font-semibold">가격</th>
                    </tr>
                  </thead>
                  <tbody>
                    {services.map((service, index) => (
                      <motion.tr
                        key={service.id}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300"
                      >
                        <td className="px-6 py-6">
                          <div className="flex items-center">
                            <div className={`w-10 h-10 ${service.color} rounded-lg flex items-center justify-center mr-4`}>
                              <service.icon className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <div className="font-semibold text-[var(--drive-dark)]">{service.title}</div>
                              <div className="text-sm text-[var(--drive-gray)]">{service.subtitle}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-6 text-center text-[var(--drive-gray)]">
                          {service.target}
                        </td>
                        <td className="px-6 py-6 text-center text-[var(--drive-gray)]">
                          {service.features[0]}
                        </td>
                        <td className="px-6 py-6 text-center">
                          <Badge className="bg-[var(--drive-primary)]/10 text-[var(--drive-primary)] border-0">
                            {service.pricing}
                          </Badge>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[var(--drive-dark)] mb-6">서비스 도입 문의</h2>
            <p className="text-xl text-[var(--drive-gray)] mb-8 leading-relaxed">
              귀하의 비즈니스에 최적화된 디라이브 서비스를 경험해보세요
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="eco-gradient text-white px-8 py-4 text-lg hover:opacity-90 transition-opacity duration-300">
                무료 상담 신청
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" className="border-2 border-[var(--drive-primary)] text-[var(--drive-primary)] px-8 py-4 text-lg hover:bg-[var(--drive-primary)] hover:text-white">
                서비스 데모 보기
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}