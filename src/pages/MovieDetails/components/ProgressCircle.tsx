import React from "react";

interface ProgressCircleProps {
  percentage: number;
  size?: number;
  strokeWidth?: number;
}

const ProgressCircle: React.FC<ProgressCircleProps> = ({
  percentage,
  size = 98,
  strokeWidth = 10,
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - percentage / 100);

  return (
    <div style={{ width: size, height: size, position: "relative" }}>
      <svg width={size} height={size}>
        {/* Fundo cinza */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#FFFFFF45"
          strokeWidth={strokeWidth}
          fill="none"
        />

        {/* Progresso amarelo */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#FFE000"
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>

      {/* Texto central */}
      <div
        className="text-xl"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontWeight: "bold",
          color: "#FFE000",
        }}
      >
        {`${percentage}`}
        <span className="text-gray-dark-12 text-sm">%</span>
      </div>
    </div>
  );
};

export default ProgressCircle;
