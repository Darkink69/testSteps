// import { useEffect, useState, useRef } from 'react';

// interface SensorData {
//   x: number | null;
//   y: number | null;
//   z: number | null;
//   timestamp: number | null;
// }

// const AdvancedMotionSensor = () => {
//   const [acceleration, setAcceleration] = useState<SensorData>({ x: null, y: null, z: null, timestamp: null });
//   const [steps, setSteps] = useState<number>(0);
//   const [isSupported, setIsSupported] = useState<boolean>(false);
//   const [error, setError] = useState<string | null>(null);

//   const lastAccelerationRef = useRef<number>(0);
//   const stepThreshold = useRef<number>(12); // Настраиваемый порог для шагов
//   const accelerometerRef = useRef<Accelerometer | null>(null);

//   // Инициализация акселерометра
//   useEffect(() => {
//     const initAccelerometer = async () => {
//       try {
//         if ('Accelerometer' in window) {
//           const sensor = new Accelerometer({ frequency: 60 });

//           sensor.addEventListener('reading', () => {
//             setAcceleration({
//               x: sensor.x,
//               y: sensor.y,
//               z: sensor.z,
//               timestamp: performance.now()
//             });

//             // Алгоритм подсчета шагов
//             if (sensor.x !== null && sensor.y !== null && sensor.z !== null) {
//               const currentAcceleration = Math.sqrt(
//                 sensor.x ** 2 + sensor.y ** 2 + sensor.z ** 2
//               );

//               const delta = Math.abs(currentAcceleration - lastAccelerationRef.current);
//               if (delta > stepThreshold.current) {
//                 setSteps(prev => prev + 1);
//               }

//               lastAccelerationRef.current = currentAcceleration;
//             }
//           });

//           sensor.addEventListener('error', (event) => {
//             setError(`Accelerometer error: ${event.error.name} - ${event.error.message}`);
//             sensor.stop();
//           });

//           await sensor.start();
//           accelerometerRef.current = sensor;
//           setIsSupported(true);
//         } else {
//           setError('Accelerometer API not supported');
//           setIsSupported(false);
//         }
//       } catch (err) {
//         setError(`Failed to initialize accelerometer: ${err instanceof Error ? err.message : String(err)}`);
//         setIsSupported(false);
//       }
//     };

//     initAccelerometer();

//     return () => {
//       if (accelerometerRef.current) {
//         accelerometerRef.current.stop();
//       }
//     };
//   }, []);

//   return (
//     <div className="sensor-container">
//       <h2>Advanced Motion Sensor</h2>

//       {isSupported ? (
//         <>
//           <div className="step-counter">
//             <h3>Steps: {steps}</h3>
//             <button onClick={() => setSteps(0)}>Reset Steps</button>
//           </div>

//           <div className="sensor-data">
//             <h3>Acceleration Data:</h3>
//             <p>X: {acceleration.x?.toFixed(2) ?? 'N/A'}</p>
//             <p>Y: {acceleration.y?.toFixed(2) ?? 'N/A'}</p>
//             <p>Z: {acceleration.z?.toFixed(2) ?? 'N/A'}</p>
//             <p>Timestamp: {acceleration.timestamp?.toFixed(0) ?? 'N/A'}</p>
//           </div>
//         </>
//       ) : (
//         <p className="unsupported">
//           {error || 'Motion sensors are not supported in your browser'}
//         </p>
//       )}
//     </div>
//   );
// };

// export default AdvancedMotionSensor;
