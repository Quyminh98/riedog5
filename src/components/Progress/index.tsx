interface ProgressProps {
  progress: string;
}

function Progress({ progress }: ProgressProps) {
  const Parentdiv = {
    height: "16px",
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 40,
  };

  const Childdiv = {
    height: "100%",
    width: progress,
    backgroundColor: "#FFA943",
    borderRadius: 40,
    textAlign: "right" as const,  // Specify the correct type
  };

  const progresstext = {
    padding: 10,
    color: "black",
    fontWeight: 900,
  };

  return (
    <div style={Parentdiv}>
      <div style={Childdiv}>
        <span style={progresstext} />
      </div>
    </div>
  );
}

export default Progress;
