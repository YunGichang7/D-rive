import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function MetricsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const metrics = [
    {
      value: "16%",
      title: "유류비 절감",
      description: "연 평균 유류비 절약",
      color: "var(--drive-primary)"
    },
    {
      value: "30%",
      title: "차량 수명 증가",
      description: "차량 부품 수명 연장",
      color: "var(--drive-secondary)"
    },
    {
      value: "21조원",
      title: "경제적 이익",
      description: "전체 운전자 대상 연간",
      color: "var(--drive-accent)"
    }
  ];

  return (
    <section ref={sectionRef} className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="text-center counter-animation"
            >
              <div
                className="text-4xl lg:text-5xl font-bold mb-2"
                style={{ color: metric.color }}
              >
                {metric.value}
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-1">
                {metric.title}
              </div>
              <div className="text-sm text-gray-600">
                {metric.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
