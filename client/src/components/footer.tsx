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
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-[var(--drive-primary)] mr-3">D.rive</span>
              <span className="text-sm text-gray-400">지속가능한 운전 점수 시스템</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              실시간 운전 점수를 통한 환경보호, 안전, 경제운전 유도 시스템으로
              더 나은 운전 문화를 만들어갑니다.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[var(--drive-primary)] transition-colors duration-200">
                <span className="sr-only">Facebook</span>
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[var(--drive-primary)] transition-colors duration-200">
                <span className="sr-only">Instagram</span>
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[var(--drive-primary)] transition-colors duration-200">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase mb-4">
              서비스
            </h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-[var(--drive-primary)] transition-colors duration-200">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase mb-4">
              지원
            </h3>
            <ul className="space-y-2">
              {support.map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-[var(--drive-primary)] transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 D.rive. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
