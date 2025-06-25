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
    <section id="advantages" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">경쟁력 분석</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            디라이브만의 차별화된 경쟁력과 시장 기회를 분석합니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {swotAnalysis.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`${item.bgColor} border-none`}>
                <CardContent className="p-8">
                  <h3 className={`text-2xl font-bold ${item.textColor} mb-6 flex items-center`}>
                    <item.icon className="w-8 h-8 mr-3" />
                    {item.title}
                  </h3>
                  <ul className="space-y-3">
                    {item.items.map((listItem, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <span className={`w-2 h-2 ${item.bulletColor} rounded-full mt-2 mr-3 flex-shrink-0`}></span>
                        <span className={`${item.textColor.replace('800', '700')}`}>{listItem}</span>
                      </li>
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
