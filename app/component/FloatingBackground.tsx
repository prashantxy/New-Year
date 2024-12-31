import React from 'react';

const FloatingBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-red-100 to-blue-100 opacity-50" />
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float-slow"
          style={{
            backgroundColor: `hsl(${Math.random() * 360}, 70%, 70%)`,
            width: `${Math.random() * 300 + 50}px`,
            height: `${Math.random() * 300 + 50}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 10 + 10}s`,
            animationDelay: `${Math.random() * -20}s`,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingBackground;

