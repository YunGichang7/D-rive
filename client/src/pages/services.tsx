import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Route,
  Shield,
  TrendingUp,
  BarChart3,
  ArrowRight,
  CheckCircle,
  Star,
} from "lucide-react";
import { useState } from "react";
import Navigation from "@/components/navigation";

export default function Services() {
  const services = [
    {
      id: "yellow-way",
      title: "Yellow Way",
      subtitle: "통학차량 안전 통합 관리 서비스",
      description:
        "디라이브는 통학버스 안전 문제를 해결하기 위해 AI 기반 실시간 탑승 확인, 채팅, 운전 점수 시스템을 제공하여 차량 내부 및 외부 사고를 예방합니다.",
      icon: Route,
      color: "bg-yellow-500",
      benefits: [
        "실시간 탑승 상태 확인",
        "학부모·선생님·기사 간 실시간 채팅",
        "탑승/하차 알림 기능",
        "운전 점수 기반 안전 운행 유도",
      ],
      features: [
        "학생 탑승 명단 및 상태 확인 기능",
        "실시간 휘발성 채팅창 제공",
        "알림 설정 및 위치 정보 전달",
        "운행 데이터 기반 차량 효율 향상",
      ],
      target: "학부모, 선생님, 통학차량 운전자",
      pricing: "월 9,900원부터",
    },
    {
      id: "3-driving",
      title: "3.직.중",
      subtitle: "초보·장롱면허자를 위한 운전습관 개선 솔루션",
      description:
        "디라이브의 실시간 운전 점수 시스템을 바탕으로 운전 습관 개선이 필요한 초보자와 장롱면허 운전자에게 맞춤형 피드백을 제공하는 어플리케이션 기반 서비스입니다.",
      icon: Star,
      color: "bg-blue-500",
      benefits: [
        "운전 습관 개선을 위한 실시간 점수 제공",
        "어플리케이션 기반 자가 피드백 가능",
        "주행 중 안전 운전 유도",
        "초보자를 위한 간편한 인터페이스",
      ],
      features: [
        "실시간 주행 점수 시스템",
        "운전 피드백 및 코칭",
        "직관적인 사용자 인터페이스",
        "안전 운전 가이드",
      ],
      target: "초보운전자, 장롱면허자",
      pricing: "월 19,900원부터",
    },
    {
      id: "insurance",
      title: "보험사 연계 서비스",
      subtitle: "운전 점수를 통해 보험료 할인 및 사고 분석 지원",
      description:
        "운전 습관 점수를 기반으로 보험료를 할인받고, 사고 발생 시 차량 주행 데이터를 바탕으로 사고 원인 분석을 도와주는 서비스입니다.",
      icon: Shield,
      color: "bg-green-500",
      benefits: [
        "운전 점수 기반 보험료 할인",
        "사고 시 데이터 기반 분석 지원",
        "개인 맞춤형 보험 설계 가능",
        "보험사와의 직접 연동",
      ],
      features: [
        "실시간 운전 점수 수집 및 전송",
        "사고 발생 시 데이터 리포트 생성",
        "보험사 연동 API 지원",
        "운전 습관 개선 유도",
      ],
      target: "일반 운전자, 법인 차량 관리자",
      pricing: "보험료 할인으로 실질적 무료",
    },
    {
      id: "prediction",
      title: "예측 서비스",
      subtitle: "딥러닝 기반 차량 상태 및 사고 예측",
      description:
        "딥러닝·머신러닝 기반 모델을 활용해 차량 부품의 수명, 중고차 가격, 사고 발생 가능성 등을 사전에 예측하는 서비스입니다.",
      icon: TrendingUp,
      color: "bg-purple-500",
      benefits: [
        "부품 교체 시기 예측",
        "사고 가능성 사전 분석",
        "중고차 가치 산정 지원",
        "정비 비용 최적화",
      ],
      features: [
        "딥러닝 기반 예측 알고리즘",
        "부품 소모 상태 모니터링",
        "중고차 가치 예측 시스템",
        "사고 리스크 분석 리포트",
      ],
      target: "차량 소유자, 차량 관리 업체",
      pricing: "예정된 서비스",
    },
  ];

  const [selectedService, setSelectedService] = useState<string | null>(null);

  const handleServiceSelect = (serviceId: string) => {
    setSelectedService(selectedService === serviceId ? null : serviceId);
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
                    stiffness: 100,
                  }}
                  viewport={{ once: true }}
                >
                  <Card
                    className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full group cursor-pointer ${
                      selectedService === service.id
                        ? "ring-2 ring-[var(--drive-primary)]"
                        : ""
                    }`}
                  >
                    <CardContent className="p-8">
                      <div className="flex items-start justify-between mb-6">
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          whileInView={{ scale: 1, rotate: 0 }}
                          transition={{
                            duration: 0.6,
                            delay: index * 0.1 + 0.3,
                          }}
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
                        <h4 className="font-semibold text-[var(--drive-dark)] mb-3">
                          주요 혜택
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {service.benefits.slice(0, 4).map((benefit, i) => (
                            <div key={i} className="flex items-center text-sm">
                              <CheckCircle className="w-4 h-4 text-[var(--drive-primary)] mr-2 flex-shrink-0" />
                              <span className="text-[var(--drive-gray)]">
                                {benefit}
                              </span>
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
                          {selectedService === service.id ? "간략히" : "자세히"}
                          <ArrowRight
                            className={`w-4 h-4 ml-2 transition-transform duration-300 ${
                              selectedService === service.id ? "rotate-90" : ""
                            }`}
                          />
                        </Button>
                      </div>

                      {/* Expanded Details */}
                      <motion.div
                        initial={false}
                        animate={{
                          height: selectedService === service.id ? "auto" : 0,
                          opacity: selectedService === service.id ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        {selectedService === service.id && (
                          <div className="mt-6 pt-6 border-t border-gray-200">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div>
                                <h5 className="font-semibold text-[var(--drive-dark)] mb-3">
                                  핵심 기능
                                </h5>
                                <ul className="space-y-2">
                                  {service.features.map((feature, i) => (
                                    <li
                                      key={i}
                                      className="flex items-center text-sm"
                                    >
                                      <div className="w-2 h-2 bg-[var(--drive-primary)] rounded-full mr-3"></div>
                                      <span className="text-[var(--drive-gray)]">
                                        {feature}
                                      </span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <h5 className="font-semibold text-[var(--drive-dark)] mb-3">
                                  추가 혜택
                                </h5>
                                <ul className="space-y-2">
                                  {service.benefits.map((benefit, i) => (
                                    <li
                                      key={i}
                                      className="flex items-center text-sm"
                                    >
                                      <CheckCircle className="w-4 h-4 text-[var(--drive-primary)] mr-2 flex-shrink-0" />
                                      <span className="text-[var(--drive-gray)]">
                                        {benefit}
                                      </span>
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
                        <th className="px-6 py-4 text-left text-white font-semibold">
                          서비스
                        </th>
                        <th className="px-6 py-4 text-center text-white font-semibold">
                          대상 고객
                        </th>
                        <th className="px-6 py-4 text-center text-white font-semibold">
                          주요 기능
                        </th>
                        <th className="px-6 py-4 text-center text-white font-semibold">
                          가격
                        </th>
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
                              <div
                                className={`w-10 h-10 ${service.color} rounded-lg flex items-center justify-center mr-4`}
                              >
                                <service.icon className="w-5 h-5 text-white" />
                              </div>
                              <div>
                                <div className="font-semibold text-[var(--drive-dark)]">
                                  {service.title}
                                </div>
                                <div className="text-sm text-[var(--drive-gray)]">
                                  {service.subtitle}
                                </div>
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
              <h2 className="text-[var(--drive-dark)] mb-6">
                서비스 도입 문의
              </h2>
              <p className="text-xl text-[var(--drive-gray)] mb-8 leading-relaxed">
                귀하의 비즈니스에 최적화된 디라이브 서비스를 경험해보세요
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="eco-gradient text-white px-8 py-4 text-lg hover:opacity-90 transition-opacity duration-300">
                  무료 상담 신청
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-[var(--drive-primary)] text-[var(--drive-primary)] px-8 py-4 text-lg hover:bg-[var(--drive-primary)] hover:text-white"
                >
                  서비스 데모 보기
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>{" "}
    </>
  );
}
