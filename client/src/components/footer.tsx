import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  const services = [
    "운전 점수 시스템",
    "OBD2 리더기",
    "모바일 앱",
    "데이터 분석"
  ];

  const support = [
    "고객 지원",
    "기술 문의",
    "파트너십",
    "투자 문의"
  ];

  return (
    <footer className="tech-gradient text-white py-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20v20h20z'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <span className="text-3xl font-bold text-[var(--drive-primary)] mr-4">D.rive</span>
              <span className="text-sm text-gray-300 bg-gray-800/50 px-3 py-1 rounded-full">지속가능한 운전 점수 시스템</span>
            </div>
            <p className="text-gray-300 mb-8 max-w-md text-lg leading-relaxed">
              실시간 운전 점수를 통한 환경보호, 안전, 경제운전 유도 시스템으로
              더 나은 운전 문화를 만들어갑니다.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-[var(--drive-primary)] transition-all duration-300 transform hover:scale-110">
                <span className="sr-only">Facebook</span>
                <Facebook className="w-7 h-7" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[var(--drive-primary)] transition-all duration-300 transform hover:scale-110">
                <span className="sr-only">Instagram</span>
                <Instagram className="w-7 h-7" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[var(--drive-primary)] transition-all duration-300 transform hover:scale-110">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="w-7 h-7" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-bold text-gray-200 tracking-wider uppercase mb-6">
              서비스
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-[var(--drive-primary)] transition-all duration-300 hover:translate-x-1 block">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold text-gray-200 tracking-wider uppercase mb-6">
              지원
            </h3>
            <ul className="space-y-3">
              {support.map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-[var(--drive-primary)] transition-all duration-300 hover:translate-x-1 block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-700/50">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 D.rive. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-[var(--drive-primary)] transition-colors duration-300">
                개인정보처리방침
              </a>
              <a href="#" className="text-gray-400 hover:text-[var(--drive-primary)] transition-colors duration-300">
                이용약관
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
