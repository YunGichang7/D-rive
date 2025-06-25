import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, TrendingUp, AlertTriangle, Shield } from "lucide-react";

export default function AdvantagesSection() {
  const swotAnalysis = [
    {
      title: "강점 (Strength)",
      icon: CheckCircle,
      items: [
        "환경 친화적 AI 기반 비즈니스 모델",
        "확장 가능한 다각화 전략",
        "특허 기술 보유로 인한 기술적 우위"
      ],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
      bulletColor: "bg-green-600"
    },
    {
      title: "기회 (Opportunity)",
      icon: TrendingUp,
      items: [
        "B2B, B2G, B2C 전체 시장으로의 확장 가능성",
        "환경 규제 강화로 인한 시장 수요 증가",
        "데이터 기반 서비스 확장 기회"
      ],
      bgColor: "bg-blue-50",
      textColor: "text-blue-800",
      bulletColor: "bg-blue-600"
    },
    {
      title: "약점 (Weakness)",
      icon: AlertTriangle,
      items: [
        "큰 규모의 진입 시장 조건 필요",
        "초기 투자 비용 부담",
        "시장 인식 개선 필요"
      ],
      bgColor: "bg-yellow-50",
      textColor: "text-yellow-800",
      bulletColor: "bg-yellow-600"
    },
    {
      title: "위협 (Threat)",
      icon: Shield,
      items: [
        "신생 스타트업의 접근성 용이",
        "대기업의 시장 진입 가능성",
        "기술 표준화 이슈"
      ],
      bgColor: "bg-red-50",
      textColor: "text-red-800",
      bulletColor: "bg-red-600"
    }
  ];

  const visionPoints = [
    {
      title: "환경 보호 선도",
      description: "연비 상승과 차량 소모 감소를 통해 지속 가능한 환경 보호를 선도하며, 기술 재투자를 통한 선순환 구조를 구축합니다."
    },
    {
      title: "상호 강화 관계",
      description: "경제적 성공과 환경 보호의 조화를 넘어 상호 강화하는 관계를 구축하여 사회와 환경의 긍정적 변화를 이끌어냅니다."
    }
  ];

  return (
    <section id="advantages" className="py-24 bg-[var(--drive-light-gray)] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-[var(--drive-primary)]/3 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[var(--drive-secondary)]/3 rounded-full blur-2xl"></div>
      
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
            className="inline-flex items-center px-4 py-2 rounded-full bg-[var(--drive-primary)]/10 text-[var(--drive-primary)] text-sm font-medium mb-6"
          >
            <span>시장 분석 및 경쟁력</span>
          </motion.div>
          <h2 className="text-[var(--drive-dark)] mb-6">경쟁력 분석</h2>
          <p className="text-xl text-[var(--drive-gray)] max-w-3xl mx-auto leading-relaxed">
            디라이브만의 차별화된 경쟁력과 시장 기회를 분석합니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {swotAnalysis.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
            >
              <Card className={`${item.bgColor} border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group`}>
                <CardContent className="p-8">
                  <motion.h3 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                    viewport={{ once: true }}
                    className={`text-2xl font-bold ${item.textColor} mb-8 flex items-center group-hover:scale-105 transition-transform duration-300`}
                  >
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                      viewport={{ once: true }}
                    >
                      <item.icon className="w-8 h-8 mr-4" />
                    </motion.div>
                    {item.title}
                  </motion.h3>
                  <ul className="space-y-4">
                    {item.items.map((listItem, itemIndex) => (
                      <motion.li 
                        key={itemIndex} 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 + itemIndex * 0.1 + 0.6 }}
                        viewport={{ once: true }}
                        className="flex items-start group-hover:translate-x-1 transition-transform duration-300"
                      >
                        <span className={`w-3 h-3 ${item.bulletColor} rounded-full mt-2 mr-4 flex-shrink-0`}></span>
                        <span className={`${item.textColor.replace('800', '700')} leading-relaxed`}>{listItem}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[var(--drive-primary)] to-[var(--drive-secondary)] p-8 lg:p-12 rounded-2xl text-white"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">경영 이념 및 향후 비전</h3>
            <p className="text-lg opacity-90">
              디라이브는 환경과 기술 발전의 상호 강화를 만들어갑니다.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {visionPoints.map((point, index) => (
              <div key={index} className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                <h4 className="text-xl font-semibold mb-3">{point.title}</h4>
                <p className="opacity-90">{point.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
