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
    <section id="roadmap" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">사업 로드맵</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            체계적인 단계별 접근을 통해 시장 진입부터 성장까지의 계획을 제시합니다.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {roadmapItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="timeline-item"
              >
                <Card className="shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-2">
                      <Badge 
                        className={`${item.color} text-white px-3 py-1 text-sm font-semibold mr-4`}
                      >
                        {item.date}
                      </Badge>
                      <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                    </div>
                    <p className="text-gray-600">{item.description}</p>
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
