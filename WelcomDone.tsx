import React, { useEffect, useState } from 'react';
import { Container } from 'lucide-react';

const RequestPendingPage = () => {
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          // 로그인 페이지로 리다이렉트
          window.location.href = '/login';
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <header className="flex items-center justify-between px-6 py-4 border-b border-slate-200">
        <div className="flex items-center gap-2">
          <Container className="w-5 h-5 text-blue-600" />
          <span className="text-lg font-bold text-slate-900">DevOps Portal</span>
        </div>
      </header>
      
      <main className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-md px-6 text-center">
          {/* 메인 컨텐츠 */}
          <div className="space-y-8">
            <h1 className="text-2xl font-bold text-slate-900">
              요청중입니다.
            </h1>
            
            <p className="text-slate-600 text-base">
              Lorem ipsum dolor sit amet,<br />
              consectetur adipisicing elit, sed do<br />
              eiusmod tempor incididunt ut labore<br />
              et dolore magna alique.
            </p>

            {/* 처리 과정 안내 */}
            <div className="bg-blue-50 rounded-xl p-6 text-left">
              <p className="text-slate-700 mb-4">처리 과정 안내:</p>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li>• 담당자가 요청하신 권한을 검토합니다.</li>
                <li>• 승인이 완료되면 등록된 이메일로 알림이 발송됩니다.</li>
                <li>• 승인 후 로그인하여 서비스를 이용하실 수 있습니다.</li>
              </ul>
            </div>

            {/* 카운트다운 & 리다이렉트 안내 */}
            <div className="text-slate-500 text-sm animate-pulse">
              <p>{countdown}초 후 로그인 페이지로 이동합니다...</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RequestPendingPage;