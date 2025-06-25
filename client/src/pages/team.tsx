import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, User, Code, Palette, BarChart3 } from "lucide-react";

export default function Team() {
  const leadership = [
    {
      name: "두강명",
      role: "CEO",
      education: "부산대학교 조선해양공학과 학사",
      phone: "010-7684-5650",
      email: "cloudbike99@naver.com",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      description: "혁신적인 기술로 지속가능한 미래를 만들어가는 비전을 가진 리더"
    },
    {
      name: "윤기창",
      role: "CTO",
      education: "울산대학교 산업공학, 컴퓨터공학과 학사",
      phone: "010-5364-3587",
      email: "rlckd3587@naver.com",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      description: "첨단 기술 개발과 시스템 아키텍처를 책임지는 기술 전문가"
    }
  ];

  const teams = [
    {
      title: "Development Team",
      icon: Code,
      color: "bg-[var(--drive-primary)]",
      members: [
        { name: "김정권", role: "FE Developer", email: "wjdrnjs112987@gmail.com" },
        { name: "김기윤", role: "FE Developer", email: "gykim_kr@naver.com" },
        { name: "정종길", role: "BE Developer", email: "jonggil.jeong24@gmail.com" }
      ]
    },
    {
      title: "Design & Marketing Team",
      icon: Palette,
      color: "bg-[var(--drive-secondary)]",
      members: [
        { name: "이주애", role: "UI/UX Designer/Performance Marketer", email: "ljuae0124@naver.com" },
        { name: "박재원", role: "BX Designer", email: "lena8810@naver.com" }
      ]
    },
    {
      title: "Business Team",
      icon: BarChart3,
      color: "bg-[var(--drive-accent)]",
      members: [
        { name: "김민재", role: "PM/AI Engineer", email: "ljsmd0703@kaist.ac.kr" },
        { name: "정우진", role: "Accountant", email: "wj031025@gmail.com" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <section className="tech-gradient py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-[var(--drive-primary)]/10 text-[var(--drive-primary)] text-sm font-medium mb-6"
            >
              <span>팀 소개</span>
            </motion.div>
            <h1 className="text-white mb-6">Team D.rive</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              지속가능한 미래를 만들어가는 전문가들이 모인 혁신적인 팀
            </p>
          </motion.div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-[var(--drive-dark)] mb-6">리더십</h2>
            <p className="text-xl text-[var(--drive-gray)] max-w-3xl mx-auto leading-relaxed">
              비전과 기술력을 바탕으로 혁신을 이끌어가는 경영진
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {leadership.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
                  <CardContent className="p-8">
                    <div className="flex flex-col items-center text-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                        viewport={{ once: true }}
                        className="relative mb-6"
                      >
                        <img
                          src={leader.image}
                          alt={leader.name}
                          className="w-32 h-32 rounded-full object-cover shadow-lg group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-[var(--drive-primary)] rounded-full flex items-center justify-center">
                          <User className="w-6 h-6 text-white" />
                        </div>
                      </motion.div>
                      
                      <Badge className="bg-[var(--drive-primary)] text-white mb-4 text-sm px-4 py-1">
                        {leader.role}
                      </Badge>
                      
                      <h3 className="text-2xl font-bold text-[var(--drive-dark)] mb-3 group-hover:text-[var(--drive-primary)] transition-colors duration-300">
                        {leader.name}
                      </h3>
                      
                      <p className="text-[var(--drive-gray)] mb-6 leading-relaxed">
                        {leader.description}
                      </p>
                      
                      <div className="space-y-3 w-full">
                        <div className="flex items-center justify-center text-sm text-[var(--drive-gray)]">
                          <span className="font-medium">{leader.education}</span>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                          <a
                            href={`tel:${leader.phone}`}
                            className="flex items-center justify-center px-4 py-2 bg-[var(--drive-light-gray)] rounded-lg hover:bg-[var(--drive-primary)]/10 transition-colors duration-300 group"
                          >
                            <Phone className="w-4 h-4 mr-2 text-[var(--drive-primary)]" />
                            <span className="text-sm font-medium text-[var(--drive-gray)]">{leader.phone}</span>
                          </a>
                          
                          <a
                            href={`mailto:${leader.email}`}
                            className="flex items-center justify-center px-4 py-2 bg-[var(--drive-light-gray)] rounded-lg hover:bg-[var(--drive-primary)]/10 transition-colors duration-300 group"
                          >
                            <Mail className="w-4 h-4 mr-2 text-[var(--drive-primary)]" />
                            <span className="text-sm font-medium text-[var(--drive-gray)]">{leader.email}</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Teams */}
      <section className="py-24 bg-[var(--drive-light-gray)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-[var(--drive-dark)] mb-6">팀 구성</h2>
            <p className="text-xl text-[var(--drive-gray)] max-w-3xl mx-auto leading-relaxed">
              각 분야의 전문성을 가진 팀원들이 협력하여 최고의 결과를 만들어냅니다
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {teams.map((team, teamIndex) => (
              <motion.div
                key={teamIndex}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: teamIndex * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full group">
                  <CardContent className="p-8">
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.6, delay: teamIndex * 0.2 + 0.3 }}
                      viewport={{ once: true }}
                      className={`w-16 h-16 ${team.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <team.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    
                    <h3 className="text-xl font-bold text-[var(--drive-dark)] mb-6 group-hover:text-[var(--drive-primary)] transition-colors duration-300">
                      {team.title}
                    </h3>
                    
                    <div className="space-y-4">
                      {team.members.map((member, memberIndex) => (
                        <motion.div
                          key={memberIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: teamIndex * 0.2 + memberIndex * 0.1 + 0.5 }}
                          viewport={{ once: true }}
                          className="border-l-2 border-[var(--drive-primary)]/20 pl-4 py-2 hover:border-[var(--drive-primary)]/60 transition-colors duration-300"
                        >
                          <div className="font-semibold text-[var(--drive-dark)]">{member.name}</div>
                          <div className="text-sm text-[var(--drive-primary)] font-medium mb-1">{member.role}</div>
                          <a
                            href={`mailto:${member.email}`}
                            className="text-sm text-[var(--drive-gray)] hover:text-[var(--drive-primary)] transition-colors duration-300"
                          >
                            {member.email}
                          </a>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}