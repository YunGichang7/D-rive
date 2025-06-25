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
    <section id="about" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <span>혁신적인 기술력</span>
          </motion.div>
          <h2 className="text-[var(--drive-dark)] mb-6">회사 소개</h2>
          <p className="text-xl text-[var(--drive-gray)] max-w-3xl mx-auto leading-relaxed">
            디라이브는 혁신적인 OBD2 리더기와 실시간 운전 점수 시스템을 통해
            지속가능한 운전 문화를 선도하는 기술 기업입니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="absolute -inset-4 bg-gradient-to-r from-[var(--drive-primary)]/20 to-[var(--drive-secondary)]/20 rounded-3xl blur-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                alt="Sustainable automotive technology concept"
                className="relative rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </motion.div>
          
          <div className="space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <CardContent className="p-8">
                    <div className="flex items-start mb-6">
                      <motion.div 
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                        viewport={{ once: true }}
                        className={`w-14 h-14 ${feature.bgColor} rounded-xl flex items-center justify-center mr-6 flex-shrink-0`}
                      >
                        <feature.icon className={`w-7 h-7 ${feature.iconColor}`} />
                      </motion.div>
                      <div>
                        <h3 className="text-xl font-bold text-[var(--drive-dark)] mb-3">{feature.title}</h3>
                        <p className="text-[var(--drive-gray)] leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
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
