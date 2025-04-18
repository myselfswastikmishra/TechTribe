
import { useState, useEffect, useRef } from "react";
import { Users, Award, UserPlus } from "lucide-react";

type StatProps = {
  icon: React.ReactNode;
  value: number;
  label: string;
  duration?: number;
};

const StatCounter = ({ icon, value, label, duration = 2000 }: StatProps) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const observer = useRef<IntersectionObserver | null>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!countRef.current) return;

    observer.current = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting && !hasAnimated.current) {
        hasAnimated.current = true;
        animateCount();
      }
    });

    observer.current.observe(countRef.current);

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  const animateCount = () => {
    const startTime = Date.now();
    const endValue = value;

    const updateCount = () => {
      const currentTime = Date.now();
      const elapsedTime = currentTime - startTime;
      
      if (elapsedTime < duration) {
        const progress = elapsedTime / duration;
        const easedProgress = easeOutCubic(progress);
        const nextCount = Math.floor(easedProgress * endValue);
        setCount(nextCount);
        requestAnimationFrame(updateCount);
      } else {
        setCount(endValue);
      }
    };

    requestAnimationFrame(updateCount);
  };

  // Easing function for smoother animation
  const easeOutCubic = (x: number): number => {
    return 1 - Math.pow(1 - x, 3);
  };

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-shadow">
      <div className="text-techtribe-red mb-4 p-3 bg-red-50 dark:bg-red-900/20 rounded-full">
        {icon}
      </div>
      <span 
        ref={countRef} 
        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 text-gray-900 dark:text-white"
      >
        {count.toLocaleString()}
      </span>
      <span className="text-gray-600 dark:text-gray-400 text-lg">{label}</span>
    </div>
  );
};

export function StatsSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tech Tribe <span className="text-techtribe-red">Impact</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Our community is growing and making an impact in the tech world.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StatCounter 
            icon={<Users size={32} />} 
            value={800} 
            label="Active Members" 
          />
          <StatCounter 
            icon={<Award size={32} />} 
            value={120} 
            label="Events Organized" 
            duration={2500}
          />
          <StatCounter 
            icon={<UserPlus size={32} />} 
            value={45} 
            label="Team Members" 
            duration={1500}
          />
        </div>
      </div>
    </section>
  );
}
