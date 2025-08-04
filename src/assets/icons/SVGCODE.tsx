export const AddPatientIcon = ({ size = 24, color = 'currentColor', ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size} // Set width dynamically based on 'size' prop
      height={size} // Set height dynamically based on 'size' prop
      viewBox="0 0 24 24"
      fill="none" // SVG is designed with strokes, not fill
      stroke={color} // Set stroke color dynamically based on 'color' prop
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      // Pass any additional props (like className, onClick) to the SVG element
      {...props}
      // You can add a default class name here if you have global icon styles
      // className="lucide lucide-user-plus-icon lucide-user-plus"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <line x1="19" x2="19" y1="8" y2="14" />
      <line x1="22" x2="16" y1="11" y2="11" />
    </svg>
  );
};

export const HomeIcon = ({ size = 24, color = 'currentColor', ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size} // Dynamic width based on 'size' prop
      height={size} // Dynamic height based on 'size' prop
      viewBox="0 0 24 24"
      fill="none" // The original SVG uses strokes, not fill for the main shape
      stroke={color} // Dynamic stroke color based on 'color' prop
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      // Pass any additional HTML/React props to the SVG element
      {...props}
      // Optional: Add a default class name if you have global styling for icons
      // className="lucide lucide-house-icon lucide-house"
    >
      <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
      <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    </svg>
  );
};

export const PendingAppointmentIcon = ({ size = 24, color = 'currentColor', ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size} // Dynamic width based on 'size' prop
      height={size} // Dynamic height based on 'size' prop
      viewBox="0 0 24 24"
      fill="none" // The original SVG uses strokes for its lines
      stroke={color} // Dynamic stroke color based on 'color' prop
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      // Pass any additional HTML/React props to the SVG element
      {...props}
      // Optional: Add a default class name if you have global styling for icons
      // className="lucide lucide-clipboard-clock-icon lucide-clipboard-clock"
    >
      <path d="M16 14v2.2l1.6 1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v.832" />
      <path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2" />
      <circle cx="16" cy="16" r="6" />
      <rect x="8" y="2" width="8" height="4" rx="1" />
    </svg>
  );
};

export const FinishedAppointmentIcon = ({ size = 24, color = 'currentColor', ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size} // Dynamic width based on 'size' prop
      height={size} // Dynamic height based on 'size' prop
      viewBox="0 0 24 24"
      fill="none" // The original SVG uses strokes for its lines
      stroke={color} // Dynamic stroke color based on 'color' prop
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      // Pass any additional HTML/React props to the SVG element
      {...props}
      // Optional: Add a default class name if you have global styling for icons
      // className="lucide lucide-book-check-icon lucide-book-check"
    >
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
      <path d="m9 9.5 2 2 4-4" />
    </svg>
  );
};

export const PatientHistoryIcon = ({ size = 24, color = 'currentColor', ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size} // Dynamic width based on 'size' prop
      height={size} // Dynamic height based on 'size' prop
      viewBox="0 0 24 24"
      fill="none" // The original SVG uses strokes for its lines
      stroke={color} // Dynamic stroke color based on 'color' prop
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      // Pass any additional HTML/React props to the SVG element
      {...props}
      // Optional: Add a default class name if you have global styling for icons
      // className="lucide lucide-history-icon lucide-history"
    >
      <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
      <path d="M3 3v5h5" />
      <path d="M12 7v5l4 2" />
    </svg>
  );
};

export const RevenueAnalysisIcon = ({ size = 24, color = 'currentColor', ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size} // Dynamic width based on 'size' prop
      height={size} // Dynamic height based on 'size' prop
      viewBox="0 0 24 24"
      fill="none" // The original SVG uses strokes for its lines
      stroke={color} // Dynamic stroke color based on 'color' prop
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      // Pass any additional HTML/React props to the SVG element
      {...props}
      // Optional: Add a default class name if you have global styling for icons
      // className="lucide lucude-chart-no-axes-combined-icon lucide-chart-no-axes-combined"
    >
      <path d="M12 16v5" />
      <path d="M16 14v7" />
      <path d="M20 10v11" />
      <path d="m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15" />
      <path d="M4 18v3" />
      <path d="M8 14v7" />
    </svg>
  );
};

export const DoctorPerformanceIcon = ({ size = 24, color = 'currentColor', ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size} // Dynamic width based on 'size' prop
      height={size} // Dynamic height based on 'size' prop
      viewBox="0 0 24 24"
      fill="none" // The original SVG uses strokes for its lines
      stroke={color} // Dynamic stroke color based on 'color' prop
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      // Pass any additional HTML/React props to the SVG element
      {...props}
      // Optional: Add a default class name if you have global styling for icons
      // className="lucide lucide-circle-gauge-icon lucide-circle-gauge"
    >
      <path d="M15.6 2.7a10 10 0 1 0 5.7 5.7" />
      <circle cx="12" cy="12" r="2" />
      <path d="M13.4 10.6 19 5" />
    </svg>
  );
};

export const BellIconOff = ({ size = 24, color = 'currentColor', ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M10.268 21a2 2 0 0 0 3.464 0" />
      <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" />
    </svg>
  );
};
export const BellIconOn = ({ size = 24, color = 'currentColor', ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M10.268 21a2 2 0 0 0 3.464 0" />
      <path d="M22 8c0-2.3-.8-4.3-2-6" />
      <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" />
      <path d="M4 2C2.8 3.7 2 5.7 2 8" />
    </svg>
  );
};
export const UserIcon = ({ size = 24, color = 'currentColor', ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
};

export const VitalsIcon = ({ size = 24, color = 'currentColor', ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
      <path d="M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" />
    </svg>
  );
};

export const StethoscopeIcon = ({ size = 24, color = 'currentColor', ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M11 2v2" />
      <path d="M5 2v2" />
      <path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1" />
      <path d="M8 15a6 6 0 0 0 12 0v-3" />
      <circle cx="20" cy="10" r="2" />
    </svg>
  );
};
