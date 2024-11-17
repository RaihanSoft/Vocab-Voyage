import  { useState } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const SuccessSection = () => {
  const [hasStartedCounting, setHasStartedCounting] = useState(false);

  // Intersection observer hook
  const { ref, inView } = useInView({
    triggerOnce: true,  // Only trigger once when it appears in the view
    threshold: 0.5,     // Trigger when 50% of the section is in view
  });

  // Trigger counting when the section is in view
  if (inView && !hasStartedCounting) {
    setHasStartedCounting(true);
  }

  return (
    <section ref={ref} className="bg-gray-100 p-10 text-center">
      <h2 className="text-2xl font-bold mb-6">Our Success So Far</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="success-item">
          <h3 className="text-lg font-semibold">User Count</h3>
          <p className="text-3xl font-bold text-blue-500">
            {hasStartedCounting && (
              <CountUp start={0} end={5000} duration={2.5} separator="," />
            )}
          </p>
        </div>
        <div className="success-item">
          <h3 className="text-lg font-semibold">Lesson Count</h3>
          <p className="text-3xl font-bold text-green-500">
            {hasStartedCounting && (
              <CountUp start={0} end={200} duration={2.5} separator="," />
            )}
          </p>
        </div>
        <div className="success-item">
          <h3 className="text-lg font-semibold">Vocabulary Count</h3>
          <p className="text-3xl font-bold text-purple-500">
            {hasStartedCounting && (
              <CountUp start={0} end={15000} duration={2.5} separator="," />
            )}
          </p>
        </div>
        <div className="success-item">
          <h3 className="text-lg font-semibold">Tutorial Count</h3>
          <p className="text-3xl font-bold text-red-500">
            {hasStartedCounting && (
              <CountUp start={0} end={120} duration={2.5} separator="," />
            )}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SuccessSection;
