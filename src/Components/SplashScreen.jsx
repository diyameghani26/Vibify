const SplashScreen = ({ showBeats }) => {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">

      <div className="relative flex items-center justify-center">

{showBeats && (
  <div className="absolute flex items-center justify-center gap-0.5 w-150 z-0">

    {[4,6,10,16,24,34,46,34,24,16,10,6,4,8,14,28,18,12,18,28,14,8,4,6,10,16,24,34,46,34,24,16,10,6,4].map((height, index) => (
      <div
        key={index}
        className="beat"
        style={{ height: `${height}px` }}
      />
    ))}

  </div>
)}

  <img
    src="/covers/splashscreen-logo.png"
     className="w-52 relative z-10"
  />

</div>

    </div>
  )
}

export default SplashScreen