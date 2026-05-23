// Magic Bridge — line icons (1.5px gold stroke, 24×24 viewBox)
// ES Module — Vite 빌드용
const Ic = ({ d, size = 20, stroke = 'currentColor', sw = 1.5, children, viewBox = '0 0 24 24', ...rest }) => (
  <svg width={size} height={size} viewBox={viewBox} fill="none" stroke={stroke} strokeWidth={sw}
       strokeLinecap="round" strokeLinejoin="round" {...rest}>
    {d ? <path d={d} /> : children}
  </svg>
);

const IconBulb = (p) => <Ic {...p}><path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.5.4.8.9.9 1.5l.1.6h5l.1-.6c.1-.6.4-1.1.9-1.5A6 6 0 0 0 12 3Z"/></Ic>;
const IconGear = (p) => <Ic {...p}><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z"/></Ic>;
const IconLoop = (p) => <Ic {...p}><path d="M17 2l4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14"/><path d="M7 22l-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/></Ic>;
const IconCompass = (p) => <Ic {...p}><circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5.5-5.5 2 2-5.5 5.5-2Z"/></Ic>;
const IconTrendingDown = (p) => <Ic {...p}><path d="M22 17 13.5 8.5 8.5 13.5 2 7"/><path d="M16 17h6v-6"/></Ic>;
const IconShield = (p) => <Ic {...p}><path d="M12 2 4 5v7c0 4.5 3.5 8.5 8 10 4.5-1.5 8-5.5 8-10V5l-8-3Z"/></Ic>;
const IconLayers = (p) => <Ic {...p}><path d="m12 2 10 6-10 6L2 8l10-6Z"/><path d="m2 17 10 6 10-6"/><path d="m2 12 10 6 10-6"/></Ic>;
const IconArrowRight = (p) => <Ic {...p}><path d="M5 12h14M13 5l7 7-7 7"/></Ic>;
const IconPlus = (p) => <Ic {...p}><path d="M12 5v14M5 12h14"/></Ic>;
const IconMinus = (p) => <Ic {...p}><path d="M5 12h14"/></Ic>;
const IconCheck = (p) => <Ic {...p}><path d="M20 6 9 17l-5-5"/></Ic>;
const IconX = (p) => <Ic {...p}><path d="M18 6 6 18M6 6l12 12"/></Ic>;
const IconLock = (p) => <Ic {...p}><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 1 1 8 0v4"/></Ic>;
const IconPlay = (p) => <Ic {...p}><path d="M6 4v16l14-8L6 4Z"/></Ic>;
const IconPause = (p) => <Ic {...p}><rect x="6" y="5" width="4" height="14"/><rect x="14" y="5" width="4" height="14"/></Ic>;
const IconHome = (p) => <Ic {...p}><path d="M3 11 12 3l9 8v10a1 1 0 0 1-1 1h-5v-7h-6v7H4a1 1 0 0 1-1-1V11Z"/></Ic>;
const IconBook = (p) => <Ic {...p}><path d="M4 4h9a4 4 0 0 1 4 4v14H7a3 3 0 0 1-3-3V4Z"/><path d="M20 4h-3a4 4 0 0 0-4 4v14h7V4Z"/></Ic>;
const IconProgress = (p) => <Ic {...p}><circle cx="12" cy="12" r="9"/><path d="M12 3a9 9 0 0 1 9 9"/></Ic>;
const IconFolder = (p) => <Ic {...p}><path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z"/></Ic>;
const IconChat = (p) => <Ic {...p}><path d="M21 12a8 8 0 1 1-3.1-6.3L21 5l-1 4a8 8 0 0 1 1 3Z"/></Ic>;
const IconHeadset = (p) => <Ic {...p}><path d="M4 14v-2a8 8 0 1 1 16 0v2"/><path d="M4 14h3v5H5a1 1 0 0 1-1-1v-4ZM20 14h-3v5h2a1 1 0 0 0 1-1v-4Z"/></Ic>;
const IconSearch = (p) => <Ic {...p}><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></Ic>;
const IconBell = (p) => <Ic {...p}><path d="M6 8a6 6 0 1 1 12 0c0 6 2 7 2 7H4s2-1 2-7Z"/><path d="M10 20a2 2 0 0 0 4 0"/></Ic>;
const IconDoc = (p) => <Ic {...p}><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9l-6-6Z"/><path d="M14 3v6h6M8 13h8M8 17h6"/></Ic>;
const IconClock = (p) => <Ic {...p}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></Ic>;
const IconArrowUpRight = (p) => <Ic {...p}><path d="M7 17 17 7M8 7h9v9"/></Ic>;
const IconBridge = ({ size = 40, ...p }) => (
  <svg width={size} height={(size * 40) / 120} viewBox="0 0 120 40" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" {...p}>
    <path d="M4 32 Q 60 8 116 32" />
    <path d="M4 32 H 116" />
    <path d="M20 32 V 24 M36 32 V 20 M52 32 V 17 M60 32 V 16 M68 32 V 17 M84 32 V 20 M100 32 V 24" opacity="0.6"/>
    <path d="M14 32 V 6 M106 32 V 6" />
    <path d="M14 10 H 106" opacity="0.4"/>
  </svg>
);
const IconWordmark = ({ size = 28, ...p }) => (
  <svg width={size * 5.5} height={size} viewBox="0 0 165 30" fill="none" {...p}>
    <defs>
      <linearGradient id="abg" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0" stopColor="#E8C37A"/>
        <stop offset="1" stopColor="#B8893A"/>
      </linearGradient>
    </defs>
    <path d="M4 22 Q 16 6 28 22" stroke="url(#abg)" strokeWidth="1.3" fill="none" strokeLinecap="round"/>
    <path d="M4 22 H 28" stroke="url(#abg)" strokeWidth="1.3" strokeLinecap="round"/>
    <circle cx="16" cy="22" r="1.4" fill="url(#abg)"/>
    <text x="38" y="21" fontFamily="Inter, sans-serif" fontWeight="600" fontSize="13" letterSpacing="0.08em" fill="#F5F2E8">MAGIC</text>
    <text x="93" y="21" fontFamily="Inter, sans-serif" fontWeight="300" fontSize="13" letterSpacing="0.08em" fill="url(#abg)">BRIDGE</text>
  </svg>
);

export {
  IconBulb, IconGear, IconLoop, IconCompass, IconTrendingDown, IconShield, IconLayers,
  IconArrowRight, IconPlus, IconMinus, IconCheck, IconX, IconLock, IconPlay, IconPause,
  IconHome, IconBook, IconProgress, IconFolder, IconChat, IconHeadset, IconSearch,
  IconBell, IconDoc, IconClock, IconArrowUpRight, IconBridge, IconWordmark,
};
