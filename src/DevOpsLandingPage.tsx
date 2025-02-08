import React from 'react';
import { 
  PlusCircle, Box, Code, Database, Layers, Activity, Clock, BarChart2, Monitor, Cpu 
} from 'lucide-react';

const applications = [
  { 
    id: 1, 
    name: 'CI/CD 요청 시스템', 
    description: 'CI 파이프라인 장애 및 신규 요청 접수', 
    icon: <PlusCircle className="w-12 h-12 text-green-500" />, 
    link: '/ci-request' 
  },
  { 
    id: 2, 
    name: '빌드 캐시 관리', 
    description: '빌드 캐시 운영 및 최적화', 
    icon: <Box className="w-12 h-12 text-blue-500" />, 
    link: '/build-cache' 
  },
  { 
    id: 3, 
    name: 'Copilot 코드 리뷰', 
    description: 'AI 기반 코드 리뷰 시스템', 
    icon: <Code className="w-12 h-12 text-purple-500" />, 
    link: '/code-review' 
  },
  { 
    id: 4, 
    name: 'CI 프로젝트 데이터센터', 
    description: 'CI 프로젝트 정보 관리', 
    icon: <Database className="w-12 h-12 text-indigo-500" />, 
    link: '/ci-datacenter' 
  },
  { 
    id: 5, 
    name: '파이프라인 관리', 
    description: '파이프라인 수행 관리', 
    icon: <Layers className="w-12 h-12 text-amber-500" />, 
    link: '/pipeline-management' 
  },
  { 
    id: 6, 
    name: '서비스 상태', 
    description: '전체 서비스 상태 확인', 
    icon: <Activity className="w-12 h-12 text-green-500" />, 
    link: '/service-status' 
  },
  { 
    id: 7, 
    name: 'CI 진행 상황', 
    description: 'CI 지원 프로젝트 진행 상황 추적', 
    icon: <Clock className="w-12 h-12 text-yellow-500" />, 
    link: '/ci-timeline' 
  },
  { 
    id: 8, 
    name: 'Grafana', 
    description: '대시보드 및 모니터링', 
    icon: <BarChart2 className="w-12 h-12 text-purple-500" />, 
    link: '/grafana' 
  },
  { 
    id: 9, 
    name: 'Prometheus', 
    description: '메트릭 모니터링', 
    icon: <Monitor className="w-12 h-12 text-red-500" />, 
    link: '/prometheus' 
  },
  { 
    id: 10, 
    name: 'ArgoCD', 
    description: 'GitOps 지속적 배포', 
    icon: <Cpu className="w-12 h-12 text-cyan-500" />, 
    link: '/argocd' 
  }
];

const DevOpsLandingPage: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-white">
      <main className="container mx-auto px-4 py-8 max-w-[2000px]">
        <h1 className="text-4xl font-bold text-gray-800 mb-12 text-center">DevOps 대시보드</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6">
          {applications.map(app => (
            <a 
              key={app.id} 
              href={app.link} 
              className="
                group 
                bg-white 
                rounded-xl 
                shadow-lg 
                hover:shadow-xl 
                transition-all 
                duration-300 
                transform 
                hover:-translate-y-2 
                p-6 
                text-center 
                block
                hover:bg-blue-50
                relative
                overflow-hidden
              "
            >
              <div className="mb-4 flex justify-center items-center">
                {app.icon}
              </div>
              <h2 className="text-lg font-semibold text-gray-800 mb-2">{app.name}</h2>
              <p className="text-sm text-gray-500">{app.description}</p>
              
              <div className="
                absolute 
                inset-0 
                bg-blue-500 
                opacity-0 
                group-hover:opacity-10 
                transition-opacity 
                duration-300 
                pointer-events-none
              "></div>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
};

export default DevOpsLandingPage;