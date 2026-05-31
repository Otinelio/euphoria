import { jsxs } from "react/jsx-runtime";
import { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";
function CountUp({ end, duration = 1.6, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const tick = (t) => {
      const p = Math.min(1, (t - start) / (duration * 1e3));
      setVal(Math.round(end * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, end, duration]);
  return /* @__PURE__ */ jsxs("span", { ref, children: [
    val,
    suffix
  ] });
}
export {
  CountUp as C
};
