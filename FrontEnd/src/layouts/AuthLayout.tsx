import { useLocation } from 'react-router-dom'
import { Icons } from '../assets/icons'

const MonitorUpIcon = Icons.monitorUp
const LockKeyIcon = Icons.lockKeyhole

export default function AuthLayout() {
  const location = useLocation()
  const isLogin = location.pathname === '/login'

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-blue-50 to-blue-100 flex items-center justify-center p-3">
      <div className="w-full max-w-4xl">
        <div className="bg-white rounded-3xl border-4 border-blue-500 shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Side - Blue Background with Features */}
            <div className="hidden lg:flex bg-gradient-to-br from-blue-700 to-blue-900 p-8 flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-10">
                  <img src="/public/logo_kisa.png" alt="KisaFres Logo" className="w-8 h-8" />
                  <span className="text-xl font-bold text-white">KisaFres</span>
                </div>

                <div className="space-y-4">
                  <h1 className="text-3xl font-bold text-white leading-tight">
                    {isLogin
                      ? "Streamline your team's velocity."
                      : "Elevate your team's efficiency."}
                  </h1>
                  <p className="text-sm text-blue-100">
                    {isLogin
                      ? "Manage backlogs, track sprints, and deploy faster."
                      : "Join teams managing complex workflows with precision."}
                  </p>
                </div>
              </div>

              {/* Feature Cards */}
              <div className="space-y-3">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                  <div className="flex items-start gap-3">
                    <MonitorUpIcon className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-white text-sm">Fast Sync</h3>
                      <p className="text-xs text-blue-100">Real-time collaboration.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                  <div className="flex items-start gap-3">
                    <LockKeyIcon className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-white text-sm">Enterprise Grade</h3>
                      <p className="text-xs text-blue-100">SOC2 compliance.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="flex items-center justify-center p-6 sm:p-8 lg:p-8">
              <div className="w-full">
                <div className="mb-5">
                  <h2 className="text-2xl font-bold text-gray-900">
                    {isLogin ? 'Welcome back' : 'Create Account'}
                  </h2>
                  <p className="text-sm text-gray-600 mt-1">
                    {isLogin
                      ? 'Enter your details to sign in.'
                      : 'Start your free trial.'}
                  </p>
                </div>

                <form className="space-y-3">
                  {!isLogin && (
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                        FULL NAME
                      </label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      />
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                      EMAIL
                    </label>
                    <input
                      type="email"
                      placeholder={isLogin ? 'name@company.com' : 'you@company.com'}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="block text-xs font-semibold text-gray-700">PASSWORD</label>
                      {isLogin && (
                        <a href="#" className="text-xs text-blue-600 hover:text-blue-700 font-semibold">
                          Forgot?
                        </a>
                      )}
                    </div>
                    <input
                      type="password"
                      placeholder="••••••••"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    />
                  </div>

                  {isLogin && (
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="w-3 h-3 rounded border-gray-300" />
                      <span className="text-xs text-gray-600">Remember me</span>
                    </label>
                  )}

                  {!isLogin && (
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="w-3 h-3 rounded border-gray-300" />
                      <span className="text-xs text-gray-600">
                        I agree to the{' '}
                        <a href="#" className="text-blue-600 hover:underline">
                          Terms
                        </a>
                        {' '}and{' '}
                        <a href="#" className="text-blue-600 hover:underline">
                          Privacy Policy
                        </a>
                      </span>
                    </label>
                  )}

                  <button
                    type="submit"
                    className="w-full py-2 bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold rounded-lg transition duration-200 mt-1"
                  >
                    {isLogin ? 'Log In' : 'Create Account'}
                  </button>
                </form>

                <div className="mt-4">
                  <div className="relative mb-3">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-200"></div>
                    </div>
                    <div className="relative flex justify-center text-xs">
                      <span className="px-2 bg-white text-gray-500">OR</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button className="flex items-center justify-center gap-1.5 px-3 py-1.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition text-xs font-medium text-gray-700">
                      <span>G</span>
                      <span className="hidden sm:inline">Google</span>
                    </button>
                    <button className="flex items-center justify-center gap-1.5 px-3 py-1.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition text-xs font-medium text-gray-700">
                      <span>⚫</span>
                      <span className="hidden sm:inline">GitHub</span>
                    </button>
                  </div>
                </div>

                <p className="mt-3 text-center text-gray-600 text-xs">
                  {isLogin ? "Don't have an account? " : 'Already have an account? '}
                  <a
                    href={isLogin ? '/signup' : '/login'}
                    className="text-blue-600 font-semibold hover:text-blue-700"
                  >
                    {isLogin ? 'Sign up' : 'Log in'}
                  </a>
                </p>

                <div className="mt-3 pt-3 border-t border-gray-200 flex items-center justify-center gap-2 text-xs text-gray-500">
                  <a href="#" className="hover:text-gray-700">
                    Privacy
                  </a>
                  <span>•</span>
                  <span>© 2024 KisaFres</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
