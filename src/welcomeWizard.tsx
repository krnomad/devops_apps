import React, { useEffect, useRef, useState } from 'react';
import { Container, ChevronDown, HelpCircle } from 'lucide-react';

interface Role {
  id: string;
  label: string;
  description: string;
}

const RoleSelectionPage = () => {
  // 목업 데이터
  const systemRoles: Role[] = [
    { 
      id: 'user', 
      label: 'User', 
      description: '일반 사용자 권한으로 기본적인 CI/CD 파이프라인 조회 및 실행이 가능합니다.' 
    },
    { 
      id: 'admin', 
      label: 'Admin', 
      description: '관리자 권한으로 모든 CI/CD 파이프라인 관리 및 설정이 가능합니다.' 
    },
    { 
      id: 'guest', 
      label: 'Guest', 
      description: '게스트 권한으로 제한된 파이프라인 조회만 가능합니다.' 
    }
  ];

  const productRoles: Role[] = [
    { 
      id: 'developer', 
      label: 'Developer', 
      description: '개발자 역할로 코드 개발 및 테스트를 담당합니다.' 
    },
    { 
      id: 'pl', 
      label: 'PL', 
      description: '프로젝트 리더로 프로젝트 전반의 관리를 담당합니다.' 
    },
    { 
      id: 'cm', 
      label: 'CM', 
      description: '형상 관리자로 배포 및 버전 관리를 담당합니다.' 
    },
    { 
      id: 'tester', 
      label: 'Tester', 
      description: '테스터 역할로 품질 검증을 담당합니다.' 
    }
  ];

  const [selectedRole, setSelectedRole] = useState('');
  const [selectedProduct, setSelectedProduct] = useState('');
  const [isRoleDropdownOpen, setIsRoleDropdownOpen] = useState(false);
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
  const [showRoleHelp, setShowRoleHelp] = useState(false);
  const [showProductHelp, setShowProductHelp] = useState(false);

  const roleDropdownRef = useRef<HTMLDivElement>(null);
  const productDropdownRef = useRef<HTMLDivElement>(null);

  // 외부 클릭 감지를 위한 useEffect
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (roleDropdownRef.current && !roleDropdownRef.current.contains(event.target as Node)) {
        setIsRoleDropdownOpen(false);
      }
      if (productDropdownRef.current && !productDropdownRef.current.contains(event.target as Node)) {
        setIsProductDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleRoleSelect = (roleId: string) => {
    setSelectedRole(roleId);
    setIsRoleDropdownOpen(false);
  };

  const handleProductSelect = (productId: string) => {
    setSelectedProduct(productId);
    setIsProductDropdownOpen(false);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-white">
        <div className="flex items-center gap-2">
          <Container className="w-5 h-5 text-blue-600" />
          <span className="text-lg font-bold text-slate-900">DevOps Portal</span>
        </div>
      </header>
      
      <main className="flex-1 flex items-center justify-center bg-slate-50">
        <div className="w-full max-w-md px-6 py-8">
          <div className="space-y-8">
            {/* System Role Selection */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-700">
                시스템 역할 선택
              </label>
              <div ref={roleDropdownRef} className="relative">
                <button
                  className="w-full bg-white border border-slate-200 rounded-lg py-3 px-4 text-left flex items-center justify-between hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onClick={() => setIsRoleDropdownOpen(!isRoleDropdownOpen)}
                >
                  <span className="text-slate-900">
                    {systemRoles.find(role => role.id === selectedRole)?.label || 'Select System Role'}
                  </span>
                  <ChevronDown className="w-5 h-5 text-slate-400" />
                </button>
                
                {isRoleDropdownOpen && (
                  <div className="absolute w-full mt-1 bg-white border border-slate-200 rounded-lg shadow-lg z-10">
                    {systemRoles.map((role) => (
                      <button
                        key={role.id}
                        className="w-full px-4 py-2 text-left hover:bg-slate-50 text-slate-700 first:rounded-t-lg last:rounded-b-lg"
                        onClick={() => handleRoleSelect(role.id)}
                      >
                        {role.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              {!selectedRole ? (
                <p className="text-sm text-slate-500">
                  시스템에서 사용할 권한 수준을 선택하세요
                </p>
              ) : (
                <p className="text-sm text-blue-600 bg-blue-50 p-3 rounded-lg mt-2">
                  {systemRoles.find(role => role.id === selectedRole)?.description}
                </p>
              )}
            </div>

            {/* Product Selection */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-700">
                제품 역할 선택
              </label>
              <div ref={productDropdownRef} className="relative">
                <button
                  className="w-full bg-white border border-slate-200 rounded-lg py-3 px-4 text-left flex items-center justify-between hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onClick={() => setIsProductDropdownOpen(!isProductDropdownOpen)}
                >
                  <span className="text-slate-900">
                    {productRoles.find(role => role.id === selectedProduct)?.label || 'Select Product Role'}
                  </span>
                  <ChevronDown className="w-5 h-5 text-slate-400" />
                </button>
                
                {isProductDropdownOpen && (
                  <div className="absolute w-full mt-1 bg-white border border-slate-200 rounded-lg shadow-lg z-10">
                    {productRoles.map((role) => (
                      <button
                        key={role.id}
                        className="w-full px-4 py-2 text-left hover:bg-slate-50 text-slate-700 first:rounded-t-lg last:rounded-b-lg"
                        onClick={() => handleProductSelect(role.id)}
                      >
                        {role.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              {!selectedProduct ? (
                <p className="text-sm text-slate-500">
                  프로젝트에서 담당할 역할을 선택하세요
                </p>
              ) : (
                <p className="text-sm text-blue-600 bg-blue-50 p-3 rounded-lg mt-2">
                  {productRoles.find(role => role.id === selectedProduct)?.description}
                </p>
              )}
            </div>

            {/* Request Button */}
            <div className="flex justify-end pt-4">
              <button 
                className="bg-blue-600 text-white rounded-lg px-6 py-2 font-semibold hover:bg-blue-700 transition-colors"
                onClick={() => {
                  console.log('Selected Role:', selectedRole);
                  console.log('Selected Product:', selectedProduct);
                }}
              >
                Request
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RoleSelectionPage;