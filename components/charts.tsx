'use client';

import { useEffect, useState } from 'react';

export function LineChart() {
  const [isVisible, setIsVisible] = useState(false);
  
  const data = [
    { month: "Jan", value: 32000 },
    { month: "Feb", value: 41000 },
    { month: "Mar", value: 36000 },
    { month: "Apr", value: 48000 },
    { month: "May", value: 55000 },
    { month: "Jun", value: 52000 },
  ];

  const maxValue = Math.max(...data.map(d => d.value));
  const width = 700;
  const height = 200;
  const padding = { top: 20, right: 20, bottom: 30, left: 50 };
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;

  const points = data.map((d, i) => ({
    x: padding.left + (i / (data.length - 1)) * chartWidth,
    y: padding.top + ((maxValue - d.value) / maxValue) * chartHeight,
  }));

  const pathD = points.map((p, i) => (i === 0 ? `M ${p.x} ${p.y}` : `L ${p.x} ${p.y}`)).join(' ');
  const areaD = pathD + ` L ${points[points.length - 1].x} ${height - padding.bottom} L ${padding.left} ${height - padding.bottom} Z`;
  const horizontalLines = 5;

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full overflow-x-auto">
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full min-w-[500px]">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#6366f1" />
          </linearGradient>
          <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(99, 102, 241, 0.3)" />
            <stop offset="100%" stopColor="rgba(99, 102, 241, 0.0)" />
          </linearGradient>
        </defs>

        {Array.from({ length: horizontalLines + 1 }).map((_, i) => {
          const y = padding.top + (i / horizontalLines) * chartHeight;
          const value = Math.round((maxValue * (horizontalLines - i)) / horizontalLines / 1000);
          return (
            <g key={i}>
              <line x1={padding.left} y1={y} x2={width - padding.right} y2={y} stroke="#e2e8f0" strokeWidth="1" />
              <text x={padding.left - 10} y={y + 4} textAnchor="end" className="fill-gray-400 text-xs font-medium">${value}k</text>
            </g>
          );
        })}

        {points.map((p, i) => (
          <text key={i} x={p.x} y={height - 8} textAnchor="middle" className="fill-gray-500 text-xs font-medium">
            {data[i].month}
          </text>
        ))}

        {isVisible && (
          <>
            <path d={areaD} fill="url(#areaGradient)" className="animate-fade-in" style={{ animationDelay: '0.3s' }} />
            <path
              d={pathD}
              fill="none"
              stroke="url(#lineGradient)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="chart-enter"
              style={{ transformOrigin: 'center' }}
            />
            {points.map((p, i) => (
              <circle
                key={i}
                cx={p.x}
                cy={p.y}
                r="5"
                fill="#ffffff"
                stroke="url(#lineGradient)"
                strokeWidth="2"
                className="scale-in"
                style={{ animationDelay: `${0.5 + i * 0.1}s` }}
              />
            ))}
          </>
        )}
      </svg>
    </div>
  );
}

export function BarChart() {
  const [isVisible, setIsVisible] = useState(false);
  
  const stages = [
    { name: "Prospect", deals: 12, revenue: 24000, color: "#3b82f6" },
    { name: "Proposal", deals: 18, revenue: 36000, color: "#f59e0b" },
    { name: "Negotiation", deals: 15, revenue: 45000, color: "#8b5cf6" },
    { name: "Closed", deals: 8, revenue: 64000, color: "#10b981" },
  ];

  const maxDeals = Math.max(...stages.map(s => s.deals));
  const width = 500;
  const height = 220;
  const padding = { top: 30, right: 20, bottom: 50, left: 50 };
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;
  const barWidth = chartWidth / stages.length * 0.5;

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full overflow-x-auto">
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full min-w-[400px]">
        <defs>
          <linearGradient id="barGrad0" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={stages[0].color} />
            <stop offset="100%" stopColor={stages[0].color + '99'} />
          </linearGradient>
          <linearGradient id="barGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={stages[1].color} />
            <stop offset="100%" stopColor={stages[1].color + '99'} />
          </linearGradient>
          <linearGradient id="barGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={stages[2].color} />
            <stop offset="100%" stopColor={stages[2].color + '99'} />
          </linearGradient>
          <linearGradient id="barGrad3" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={stages[3].color} />
            <stop offset="100%" stopColor={stages[3].color + '99'} />
          </linearGradient>
        </defs>

        {stages.map((stage, i) => {
          const barHeight = (stage.deals / maxDeals) * chartHeight;
          const x = padding.left + (i + 0.25) * (chartWidth / stages.length);
          const y = padding.top + chartHeight - barHeight;

          return (
            <g key={i}>
              {isVisible && (
                <rect
                  x={x}
                  y={y}
                  width={barWidth}
                  height={barHeight}
                  rx="8"
                  ry="8"
                  fill={`url(#barGrad${i})`}
                  className="chart-enter"
                  style={{ animationDelay: `${i * 0.15}s`, transformOrigin: `${x + barWidth / 2}px ${padding.top + chartHeight}px` }}
                />
              )}

              <text x={x + barWidth / 2} y={height - 15} textAnchor="middle" className="fill-gray-600 text-xs font-semibold">
                {stage.name}
              </text>
              <text x={x + barWidth / 2} y={y - 10} textAnchor="middle" className="fill-gray-800 text-sm font-bold">
                {stage.deals}
              </text>
              <text x={x + barWidth / 2} y={y - 22} textAnchor="middle" className="fill-gray-500 text-[10px] font-medium">
                deals
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

export function PieChart() {
  const [isVisible, setIsVisible] = useState(false);
  
  const segments = [
    { label: "Completed", value: 45, color: "#10b981" },
    { label: "In Progress", value: 30, color: "#f59e0b" },
    { label: "Pending", value: 25, color: "#6366f1" },
  ];

  const total = segments.reduce((sum, s) => sum + s.value, 0);
  const cx = 100;
  const cy = 100;
  const radius = 70;
  const innerRadius = 45;

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  let cumulativeAngle = -90;

  const getPath = (startAngle: number, endAngle: number, isLargeArc: boolean) => {
    const x1 = cx + radius * Math.cos((startAngle * Math.PI) / 180);
    const y1 = cy + radius * Math.sin((startAngle * Math.PI) / 180);
    const x2 = cx + radius * Math.cos((endAngle * Math.PI) / 180);
    const y2 = cy + radius * Math.sin((endAngle * Math.PI) / 180);
    const x3 = cx + innerRadius * Math.cos((endAngle * Math.PI) / 180);
    const y3 = cy + innerRadius * Math.sin((endAngle * Math.PI) / 180);
    const x4 = cx + innerRadius * Math.cos((startAngle * Math.PI) / 180);
    const y4 = cy + innerRadius * Math.sin((startAngle * Math.PI) / 180);
    return `M ${x1} ${y1} A ${radius} ${radius} 0 ${isLargeArc ? 1 : 0} 1 ${x2} ${y2} L ${x3} ${y3} A ${innerRadius} ${innerRadius} 0 ${isLargeArc ? 1 : 0} 0 ${x4} ${y4} Z`;
  };

  return (
    <div className="flex items-center gap-4 flex-wrap">
      <svg viewBox="0 0 200 200" className="w-44 h-44">
        {segments.map((segment, i) => {
          const angle = (segment.value / total) * 360;
          const startAngle = cumulativeAngle;
          const endAngle = cumulativeAngle + angle;
          const isLargeArc = angle > 180;
          cumulativeAngle = endAngle;

          return (
            <path
              key={i}
              d={getPath(startAngle, endAngle, isLargeArc)}
              fill={segment.color}
              className="chart-enter"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          );
        })}
        <text x={cx} y={cy} textAnchor="middle" dy="-5" className="fill-gray-800 text-base font-bold">
          {total}
        </text>
        <text x={cx} y={cy} textAnchor="middle" dy="15" className="fill-gray-500 text-xs">
          total
        </text>
      </svg>
      <div className="space-y-2">
        {segments.map((segment, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full" style={{ backgroundColor: segment.color }} />
            <span className="text-sm text-gray-700">{segment.label}</span>
            <span className="text-sm font-bold text-gray-900">{segment.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function AreaChart() {
  const [isVisible, setIsVisible] = useState(false);
  
  const data = [
    { month: "Mon", visits: 120, signups: 80 },
    { month: "Tue", visits: 180, signups: 120 },
    { month: "Wed", visits: 150, signups: 95 },
    { month: "Thu", visits: 200, signups: 140 },
    { month: "Fri", visits: 170, signups: 110 },
    { month: "Sat", visits: 130, signups: 85 },
    { month: "Sun", visits: 90, signups: 60 },
  ];

  const maxValue = Math.max(...data.map(d => d.visits));
  const width = 500;
  const height = 180;
  const padding = { top: 20, right: 20, bottom: 30, left: 40 };
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;

  const createPath = (key: 'visits' | 'signups') => {
    return data.map((d, i) => ({
      x: padding.left + (i / (data.length - 1)) * chartWidth,
      y: padding.top + ((maxValue - d[key]) / maxValue) * chartHeight,
    }));
  };

  const visitsPoints = createPath('visits');
  const signupsPoints = createPath('signups');

  const getSmoothPath = (pts: { x: number; y: number }[]) => {
    if (pts.length < 2) return '';
    let d = `M ${pts[0].x} ${pts[0].y}`;
    for (let i = 1; i < pts.length; i++) {
      const prev = pts[i - 1];
      const curr = pts[i];
      const cpx1 = prev.x + (curr.x - prev.x) / 3;
      const cpy1 = prev.y;
      const cpx2 = prev.x + (2 * (curr.x - prev.x)) / 3;
      const cpy2 = curr.y;
      d += ` C ${cpx1} ${cpy1} ${cpx2} ${cpy2} ${curr.x} ${curr.y}`;
    }
    return d;
  };

  const visitsPath = getSmoothPath(visitsPoints);
  const visitsArea = visitsPath + ` L ${visitsPoints[visitsPoints.length - 1].x} ${height - padding.bottom} L ${padding.left} ${height - padding.bottom} Z`;
  const signupsPath = getSmoothPath(signupsPoints);
  const signupsArea = signupsPath + ` L ${signupsPoints[signupsPoints.length - 1].x} ${height - padding.bottom} L ${padding.left} ${height - padding.bottom} Z`;

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full overflow-x-auto">
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full min-w-[400px]">
        <defs>
          <linearGradient id="visitsGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(99, 102, 241, 0.3)" />
            <stop offset="100%" stopColor="rgba(99, 102, 241, 0.0)" />
          </linearGradient>
          <linearGradient id="signupsGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(245, 158, 11, 0.25)" />
            <stop offset="100%" stopColor="rgba(245, 158, 11, 0.0)" />
          </linearGradient>
        </defs>

        {Array.from({ length: 4 }).map((_, i) => {
          const y = padding.top + (i / 3) * chartHeight;
          return (
            <line key={i} x1={padding.left} y1={y} x2={width - padding.right} y2={y} stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4,4" />
          );
        })}

        {data.map((d, i) => (
          <text key={i} x={padding.left + (i / (data.length - 1)) * chartWidth} y={height - 10} textAnchor="middle" className="fill-gray-500 text-[10px] font-medium">
            {d.month}
          </text>
        ))}

        <div className="flex items-center gap-4 mb-3">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-0.5 rounded" style={{ background: '#6366f1' }} />
            <span className="text-xs text-gray-600 font-medium">Visits</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-0.5 rounded" style={{ background: '#f59e0b' }} />
            <span className="text-xs text-gray-600 font-medium">Signups</span>
          </div>
        </div>

        {isVisible && (
          <>
            <path d={visitsArea} fill="url(#visitsGrad)" className="animate-fade-in" />
            <path d={visitsPath} fill="none" stroke="#6366f1" strokeWidth="2.5" strokeLinecap="round" className="chart-enter" />
            <path d={signupsArea} fill="url(#signupsGrad)" className="animate-fade-in" style={{ animationDelay: '0.2s' }} />
            <path d={signupsPath} fill="none" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" className="chart-enter" style={{ animationDelay: '0.2s' }} />
            {visitsPoints.map((p, i) => (
              <circle key={`v${i}`} cx={p.x} cy={p.y} r="2" fill="#6366f1" />
            ))}
            {signupsPoints.map((p, i) => (
              <circle key={`s${i}`} cx={p.x} cy={p.y} r="2" fill="#f59e0b" />
            ))}
          </>
        )}
      </svg>
    </div>
  );
}