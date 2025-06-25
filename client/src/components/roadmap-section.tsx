import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function RoadmapSection() {
  const roadmapItems = [
    {
      date: "2024년 9월",
      title: "MVP 제작 완료",
      description: "MVP 제작 완료 및 데이터 바우처 사업을 통한 10,000시간 이상의 운행 데이터 확보",
      color: "bg-[var(--drive-primary)]"
    },
    {
      date: "2024년 10월",
      title: "POC 검증",
      description: "모회사 및 자문위원단을 통한 시제품 POC 검증 완료",
      color: "bg-[var(--drive-secondary)]"
    },
    {
      date: "2024년 12월",
      title: "시장 진입",
      description: "초기 시장 진입 대상 비즈니스와의 B2B 계약을 통한 시장 진입",
      color: "bg-[var(--drive-accent)]"
    },
    {
      date: "2025년 3월",
      title: "시장 확장",
      description: "초기 시장 이후 유효시장 30% 달성 및 B2G 사업 진행",
      color: "bg-[var(--drive-primary)]"
    },
    {
      date: "2025년 6월",
      title: "목표 달성",
      description: "국내 개인 운전자 대상 목표 점유율 달성",
      color: "bg-[var(--drive-secondary)]"
    }
  ];

  return (
    <section id="roadmap" className="py-24 bg-white relative">
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
            className="inline-flex items-center px-4 py-2 rounded-full bg-[var(--drive-accent)]/10 text-[var(--drive-accent)] text-sm font-medium mb-6"
          >
            <span>단계적 성장 전략</span>
          </motion.div>
          <h2 className="text-[var(--drive-dark)] mb-6">사업 로드맵</h2>
          <p className="text-xl text-[var(--drive-gray)] max-w-3xl mx-auto leading-relaxed">
            체계적인 단계별 접근을 통해 시장 진입부터 성장까지의 계획을 제시합니다.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {roadmapItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                className="timeline-item group"
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group-hover:scale-[1.02]">
                  <CardContent className="p-8">
                    <div className="flex flex-col sm:flex-row sm:items-center mb-4">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                        viewport={{ once: true }}
                      >
                        <Badge 
                          className={`${item.color} text-white px-4 py-2 text-sm font-semibold mb-3 sm:mb-0 sm:mr-6 inline-block`}
                        >
                          {item.date}
                        </Badge>
                      </motion.div>
                      <h3 className="text-xl font-bold text-[var(--drive-dark)] group-hover:text-[var(--drive-primary)] transition-colors duration-300">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-[var(--drive-gray)] leading-relaxed">
                      {item.description}
                    </p>
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
