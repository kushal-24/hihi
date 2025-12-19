import bgV from "./assets/ininfiteloop.mp4";

function BgVid() {
  return (
    <>
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          zIndex: -1,
          pointerEvents: "none",
        }}
      >
        <source src={bgV} type="video/mp4" />
      </video>
      <div
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(255, 182, 193, 0.75)", // tweak number 0.1 → 0.8
          zIndex: -1,
        }}
      ></div>
    </>
  );
}

export default BgVid;
