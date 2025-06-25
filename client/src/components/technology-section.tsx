import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart3, Monitor, Smartphone, CheckCircle } from "lucide-react";

export default function TechnologySection() {
  const technologies = [
    {
      icon: BarChart3,
      title: "실시간 데이터 분석",
      description: "급가속, 급감속, 급정지, 공회전 등 운전 행태를 실시간으로 분석하여 정확한 운전 점수를 제공합니다.",
      bgColor: "bg-[var(--drive-primary)]/10",
      iconColor: "text-[var(--drive-primary)]"
    },
    {
      icon: Monitor,
      title: "OBD2 리더기",
      description: "자체 개발한 OBD2 리더기로 차량 센서 정보를 정밀하게 측정하고 연료소모량과 연비를 실시간 분석합니다.",
      bgColor: "bg-[var(--drive-secondary)]/10",
      iconColor: "text-[var(--drive-secondary)]"
    },
    {
      icon: Smartphone,
      title: "모바일 애플리케이션",
      description: "사용자 친화적인 모바일 앱을 통해 실시간 운전 점수와 개선 방안을 직관적으로 제공합니다.",
      bgColor: "bg-[var(--drive-accent)]/10",
      iconColor: "text-[var(--drive-accent)]"
    }
  ];

  const patents = [
    "OBD2 단자를 통한 실시간 엔진 노즐 연료 분사량 분석 기술",
    "운전자 주행 습관 변화 유도 알고리즘 특허 사업권 이전 보장",
    "2건의 관련 특허 출원 완료로 기술적 견제 방어 가능"
  ];

  return (
    <section id="technology" className="py-24 bg-[var(--drive-light-gray)] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-[var(--drive-primary)]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-[var(--drive-secondary)]/5 rounded-full blur-2xl"></div>
      
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
            <span>첨단 기술 솔루션</span>
          </motion.div>
          <h2 className="text-[var(--drive-dark)] mb-6">기술 소개</h2>
          <p className="text-xl text-[var(--drive-gray)] max-w-3xl mx-auto leading-relaxed">
            첨단 센서 기술과 AI 분석을 통해 운전자의 행동을 실시간으로 모니터링하고
            개선 방안을 제시합니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              className="h-full"
            >
              <Card className="bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 h-full group">
                <CardContent className="p-8 h-full flex flex-col">
                  <motion.div 
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
                    viewport={{ once: true }}
                    className={`w-16 h-16 ${tech.bgColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <tech.icon className={`w-8 h-8 ${tech.iconColor}`} />
                  </motion.div>
                  <h3 className="text-xl font-bold text-[var(--drive-dark)] mb-4 group-hover:text-[var(--drive-primary)] transition-colors duration-300">
                    {tech.title}
                  </h3>
                  <p className="text-[var(--drive-gray)] leading-relaxed flex-grow">
                    {tech.description}
                  </p>
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
          className="bg-gradient-to-r from-[var(--drive-primary)]/5 to-[var(--drive-secondary)]/5 p-8 lg:p-12 rounded-2xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                특허 기술로 보호받는 혁신
              </h3>
              <div className="space-y-4">
                {patents.map((patent, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-[var(--drive-primary)] rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <CheckCircle className="w-3 h-3 text-white" />
                    </div>
                    <p className="text-gray-600">{patent}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                alt="Automotive OBD2 connector and diagnostic technology"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
