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
    <section ref={sectionRef} className="py-20 bg-[var(--drive-light-gray)] relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-[var(--drive-primary)]/5 rounded-full -translate-x-16 -translate-y-16"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-[var(--drive-secondary)]/5 rounded-full translate-x-24 translate-y-24"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              className="text-center"
            >
              <div className="glass-card p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isVisible ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                  className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: `${metric.color}20` }}
                >
                  <div
                    className="text-2xl font-bold"
                    style={{ color: metric.color }}
                  >
                    {index === 0 ? '16' : index === 1 ? '30' : '21'}
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.6 }}
                  className="text-4xl lg:text-5xl font-bold mb-3"
                  style={{ color: metric.color }}
                >
                  {metric.value}
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.8 }}
                  className="text-lg font-semibold text-[var(--drive-dark)] mb-2"
                >
                  {metric.title}
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 1 }}
                  className="text-sm text-[var(--drive-gray)]"
                >
                  {metric.description}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
