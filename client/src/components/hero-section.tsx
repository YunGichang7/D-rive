import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };

  return (
    <section className="gradient-bg py-20 lg:py-32 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12 lg:mb-0"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              지속가능한<br/>
              <span className="text-[var(--drive-primary)]">운전 점수</span><br/>
              시스템
            </h1>
            <p className="mt-6 text-xl text-gray-600 leading-relaxed">
              실시간 운전 점수를 통한 환경보호, 안전, 경제운전 유도 시스템으로 
              더 나은 운전 문화를 만들어갑니다.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection("about")}
                className="bg-[var(--drive-primary)] text-white px-8 py-3 text-lg font-semibold hover:bg-[var(--drive-primary)]/90"
                size="lg"
              >
                자세히 알아보기
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                variant="outline"
                className="border-2 border-[var(--drive-primary)] text-[var(--drive-primary)] px-8 py-3 text-lg font-semibold hover:bg-[var(--drive-primary)] hover:text-white"
                size="lg"
              >
                문의하기
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Modern car dashboard with digital display"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--drive-primary)]/20 to-[var(--drive-secondary)]/20 rounded-2xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
