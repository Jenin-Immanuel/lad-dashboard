export default function RestrictedDomainPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="mb-6">
          <svg
            className="mx-auto h-16 w-16 text-red-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Access Restricted
        </h1>
        <p className="text-gray-600 mb-6">
          This application is exclusively available for KCT students and staff.
          Please use your KCT email address (@kct.ac.in) to sign up.
        </p>
        <div className="text-sm text-gray-500">
          <p>If you are a KCT member and facing issues,</p>
          <p>please contact your administrator for assistance.</p>
        </div>
      </div>
    </main>
  );
}
