import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Globe, Zap } from "lucide-react";

export default function AboutSection() {
  const features = [
    {
      icon: Lightbulb,
      title: "혁신적인 기술",
      description: "OBD2 센서를 통한 실시간 운전 데이터 분석으로 정확한 운전 점수를 제공합니다.",
      bgColor: "bg-[var(--drive-primary)]/10",
      iconColor: "text-[var(--drive-primary)]"
    },
    {
      icon: Globe,
      title: "환경 보호",
      description: "연비 향상과 차량 소모 감소를 통해 지속가능한 환경 보호를 실현합니다.",
      bgColor: "bg-[var(--drive-secondary)]/10",
      iconColor: "text-[var(--drive-secondary)]"
    },
    {
      icon: Zap,
      title: "AI 기반 예측",
      description: "딥러닝을 활용한 차량 부품 수명 예측으로 데이터 기반 비즈니스 모델을 구축합니다.",
      bgColor: "bg-[var(--drive-accent)]/10",
      iconColor: "text-[var(--drive-accent)]"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">회사 소개</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            디라이브는 혁신적인 OBD2 리더기와 실시간 운전 점수 시스템을 통해
            지속가능한 운전 문화를 선도하는 기술 기업입니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Sustainable automotive technology concept"
              className="rounded-2xl shadow-lg w-full h-auto"
            />
          </motion.div>
          <div className="space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="card-hover">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 ${feature.bgColor} rounded-lg flex items-center justify-center mr-4`}>
                        <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                    </div>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
