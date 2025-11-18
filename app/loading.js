export default function Loading() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center">
        {/* Animated Logo/Spinner */}
        <div className="relative w-32 h-32 mx-auto mb-8">
          {/* Outer Ring */}
          <div className="absolute inset-0 rounded-full border-4 border-white/10 animate-spin">
            <div className="absolute top-0 left-1/2 w-4 h-4 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
          </div>

          {/* Inner Ring */}
          <div className="absolute inset-4 rounded-full border-4 border-white/20 animate-spin" style={{ animationDirection: 'reverse' }} />

          {/* Center Dot */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
          </div>
        </div>

        {/* Loading Text */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">Loading</h2>
          <div className="flex items-center justify-center gap-1">
            <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
            <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
            <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
          </div>
        </div>
      </div>
    </div>
  );
}
