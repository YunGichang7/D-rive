import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

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
    <section className="tech-gradient py-24 lg:py-32 mt-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-12 lg:mb-0"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-[var(--drive-primary)]/10 text-[var(--drive-primary)] text-sm font-medium mb-6"
            >
              <span>AI 기반 운전 개선 솔루션</span>
              <ArrowRight className="ml-2 w-4 h-4" />
            </motion.div>
            
            <h1 className="text-white mb-6">
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="block"
              >
                지속가능한
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="block text-[var(--drive-primary)]"
              >
                운전 점수
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="block"
              >
                시스템
              </motion.span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="text-xl text-gray-300 leading-relaxed mb-8"
            >
              실시간 운전 점수를 통한 환경보호, 안전, 경제운전 유도 시스템으로 
              더 나은 운전 문화를 만들어갑니다.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                onClick={() => scrollToSection("about")}
                className="eco-gradient text-white px-8 py-4 text-lg font-semibold hover:opacity-90 transition-all duration-300 transform hover:scale-105"
                size="lg"
              >
                자세히 알아보기
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                onClick={() => scrollToSection("technology")}
                variant="outline"
                className="border-2 border-gray-300 text-gray-300 px-8 py-4 text-lg font-semibold hover:bg-gray-300 hover:text-[var(--drive-dark)] transition-all duration-300"
                size="lg"
              >
                <Play className="mr-2 w-5 h-5" />
                기술 데모
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="glass-card rounded-3xl p-8 backdrop-blur-lg"
              >
                <img
                  src="https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                  alt="Modern car dashboard with digital display"
                  className="rounded-2xl w-full h-auto"
                />
              </motion.div>
              
              {/* Floating Elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="absolute -top-4 -right-4 bg-[var(--drive-primary)] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
              >
                16% 연비 향상
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="absolute -bottom-4 -left-4 bg-[var(--drive-secondary)] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
              >
                실시간 분석
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
