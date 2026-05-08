export default function LoginForm() {
  return (
    <>
      <div className="mb-5">
        <h2 className="text-2xl font-bold text-gray-900">Welcome back</h2>
        <p className="text-sm text-gray-600 mt-1">Enter your details to sign in.</p>
      </div>

      <form className="space-y-3">
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1.5">
            EMAIL
          </label>
          <input
            type="email"
            placeholder="name@company.com"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          />
        </div>

        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label className="block text-xs font-semibold text-gray-700">PASSWORD</label>
            <a href="#" className="text-xs text-blue-600 hover:text-blue-700 font-semibold">
              Forgot?
            </a>
          </div>
          <input
            type="password"
            placeholder="••••••••"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          />
        </div>

        <label className="flex items-center gap-2">
          <input type="checkbox" className="w-3 h-3 rounded border-gray-300" />
          <span className="text-xs text-gray-600">Remember me</span>
        </label>

        <button
          type="submit"
          className="w-full py-2 bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold rounded-lg transition duration-200 mt-1"
        >
          Log In
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
        Don't have an account?{' '}
        <a href="/signup" className="text-blue-600 font-semibold hover:text-blue-700">
          Sign up
        </a>
      </p>

      <div className="mt-3 pt-3 border-t border-gray-200 flex items-center justify-center gap-2 text-xs text-gray-500">
        <a href="#" className="hover:text-gray-700">
          Privacy
        </a>
        <span>•</span>
        <span>© 2024 KisaFres</span>
      </div>
    </>
  )
}
