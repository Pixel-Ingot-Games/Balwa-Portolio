'use client';
import PixelBlast from './PixelBlast';

export default function BackgroundPixelBlast() {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-auto bg-gray-900" style={{ zIndex: 1 }}>
      <PixelBlast
        variant="circle"
        pixelSize={6}
        color="#333333"
        patternScale={3}
        patternDensity={1.2}
        pixelSizeJitter={0.5}
        enableRipples={true}
        rippleSpeed={0.4}
        rippleThickness={0.12}
        rippleIntensityScale={1.5}
        liquid={true}
        liquidStrength={0.12}
        liquidRadius={1.2}
        liquidWobbleSpeed={5}
        speed={0.6}
        edgeFade={0.25}
        transparent={false}
      />
    </div>
  );
}
