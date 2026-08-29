import { useEffect, useState } from "react";

export function Cursor() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setInterval(() => setVisible((v) => !v), 530);
    return () => clearInterval(t);
  }, []);

  return (
    <span style={{ opacity: visible ? 1 : 0, color: "#6366F1", fontWeight: 700 }}>|</span>
  );
}
