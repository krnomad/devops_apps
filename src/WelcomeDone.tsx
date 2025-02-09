import React, { useEffect, useState } from 'react';
import { Container, CheckCircle, Clock, Mail, ArrowRight } from 'lucide-react';

const RequestPendingPage = () => {
  const [countdown, setCountdown] = useState(20);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          window.location.href = '/login';
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="flex items-center justify-between px-6 py-4 border-b border-slate-200">
        <div className="flex items-center gap-3">
          <Container className="w-5 h-5 text-blue-600" />
          <span className="text-lg font-bold text-slate-900">DevOps Portal</span>
        </div>
      </header>
      
      <main className="flex-1 flex items-center justify-center p-6 bg-slate-50">
        <div className="w-full max-w-md">
          <div className="space-y-8">
            {/* 메인 컨텐츠 */}
            <div className="text-center">
              <h1 className="text-2xl font-bold text-slate-900 mb-4">
                권한 요청이 접수되었습니다
              </h1>
              
              <p className="text-slate-600">
                담당자가 요청하신 내용을 검토 중입니다.<br />
                승인이 완료되면 이메일로 알림을 보내드립니다.
              </p>
            </div>

            {/* 처리 과정 안내 */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="space-y-6">
                {/* 처리 과정 안내를 가운데 정렬 */}
                <div className="flex items-center gap-2 justify-center text-center">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                  <h2 className="text-lg font-semibold text-slate-900">처리 과정 안내</h2>
                </div>
                <div className="space-y-3">
                  {/* 숫자와 문구 사이 간격 올바르게 적용 */}
                  <div className="flex items-center text-blue-600">
                    <span className="w-6 text-right">1&nbsp;</span>
                    <span className="ml-2 text-slate-600 flex-1">
                      담당자가 요청하신 권한을 검토합니다
                    </span>
                  </div>
                  <div className="flex items-center text-blue-600">
                    <span className="w-6 text-right">2&nbsp;</span>
                    <span className="ml-2 text-slate-600 flex-1">
                      승인이 완료되면 이메일로 알림이 발송됩니다
                    </span>

                  </div>
                  <div className="flex items-center text-blue-600">
                    <span className="w-6 text-right">3&nbsp;</span>
                    <span className="ml-2 text-slate-600 flex-1">
                      승인 후 로그인하여 서비스를 이용하실 수 있습니다
                    </span>

                  </div>
                </div>
              </div>
            </div>

            {/* 이메일 알림 안내 */}
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex items-center gap-2 justify-center text-center">
                <Mail className="w-6 h-6 text-slate-600 mr-6" />
                <h2 className="text-lg font-semibold text-slate-900">
                  승인 결과는 등록하신 이메일로 발송됩니다
                </h2>
              </div>
            </div>

            {/* 카운트다운 & 리다이렉트 안내 */}
            <div className="flex items-center justify-center gap-3 text-slate-500">
              <ArrowRight className="w-4 h-4" />
              <span className="text-sm">
                {countdown}초 후 로그인 페이지로 이동합니다
              </span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RequestPendingPage;