import React from 'react';
import { Mail, Lock, Container } from 'lucide-react';

const DevOpsLoginPage = () => {
  const [imageError, setImageError] = React.useState(false);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <header className="flex items-center justify-between px-6 py-4 border-b border-slate-200">
        <div className="flex items-center gap-2">
          <Container className="w-5 h-5 text-blue-600" />
          <span className="text-lg font-bold text-slate-900">DevOps Portal</span>
        </div>
      </header>
      
      <main className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-md px-6 py-8">
          {/* 이미지 또는 대체 아이콘 영역 */}
          <div className="flex justify-center mb-8">
            {imageError ? (
              <div className="w-32 h-32 rounded-full bg-blue-50 flex items-center justify-center">
                <Container className="w-16 h-16 text-blue-600" />
              </div>
            ) : (
              <div className="w-32 h-32 relative">
                <img
                  src="/path/to/your/devops-image.png"
                  alt="DevOps Illustration"
                  className="w-full h-full object-contain"
                  onError={() => setImageError(true)}
                />
              </div>
            )}
          </div>

          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-slate-900 mb-2">Welcome to DevOps Portal</h1>
            <p className="text-slate-600">Please sign in with your AD account</p>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-700">
                Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  type="email"
                  placeholder="username@company.com"
                  className="block w-full pl-10 pr-4 py-3 rounded-xl bg-slate-100 border-none focus:ring-2 focus:ring-blue-500 text-slate-900 placeholder:text-slate-400"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-700">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="block w-full pl-10 pr-4 py-3 rounded-xl bg-slate-100 border-none focus:ring-2 focus:ring-blue-500 text-slate-900 placeholder:text-slate-400"
                />
              </div>
            </div>

            <button className="w-full bg-blue-600 text-white rounded-xl py-3 font-semibold hover:bg-blue-700 transition-colors">
              Sign in
            </button>

            <p className="text-center text-sm text-slate-500 mt-4">
              Active Directory Authentication Only
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DevOpsLoginPage;