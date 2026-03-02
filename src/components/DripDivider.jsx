import React from 'react';

const DripDivider = ({ color = '#FF85A2', position = 'bottom', height = 60, ...props }) => {
  const isTop = position === 'top';
  
  return (
    <div 
      style={{
        position: 'relative',
        width: '100%',
        height: height,
        overflow: 'hidden',
        lineHeight: 0,
        zIndex: 2,
        marginTop: isTop ? -1 : 0,
        marginBottom: isTop ? 0 : -1,
        transform: isTop ? 'rotate(180deg)' : 'none'
      }}
      {...props}
    >
      <svg 
        viewBox="0 0 1440 320" 
        preserveAspectRatio="none" 
        style={{ width: '100%', height: '100%' }}
      >
        <path 
          fill={color} 
          fillOpacity="1" 
          d="M0,160L40,149.3C80,139,160,117,240,128C320,139,400,181,480,181.3C560,181,640,139,720,112C800,85,880,75,960,90.7C1040,107,1120,149,1200,144C1280,139,1360,85,1400,58.7L1440,32L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
        />
        {/* Drops */}
        <ellipse cx="240" cy="180" rx="10" ry="30" fill={color} />
        <ellipse cx="480" cy="230" rx="12" ry="45" fill={color} />
        <ellipse cx="720" cy="190" rx="8" ry="35" fill={color} />
        <ellipse cx="960" cy="210" rx="11" ry="40" fill={color} />
        <ellipse cx="1200" cy="170" rx="9" ry="25" fill={color} />
      </svg>
    </div>
  );
};

export default DripDivider;
