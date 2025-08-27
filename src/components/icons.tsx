import React from 'react'

interface IconProps {
  className?: string
  size?: number
}

export const SwordIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
    <defs>
      <linearGradient id="swordGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8B4513" />
        <stop offset="50%" stopColor="#D2691E" />
        <stop offset="100%" stopColor="#F4A460" />
      </linearGradient>
      <linearGradient id="swordBlade" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#C0C0C0" />
        <stop offset="50%" stopColor="#FFFFFF" />
        <stop offset="100%" stopColor="#C0C0C0" />
      </linearGradient>
    </defs>
    {/* Sword handle */}
    <path d="M12 18L10 20L8 18L10 16L12 18Z" fill="url(#swordGradient)" />
    {/* Sword blade */}
    <path d="M10 4L12 6L14 4L12 2L10 4Z" fill="url(#swordBlade)" />
    <path d="M10 6L12 8L14 6L12 4L10 6Z" fill="url(#swordBlade)" />
    <path d="M10 8L12 10L14 8L12 6L10 8Z" fill="url(#swordBlade)" />
    <path d="M10 10L12 12L14 10L12 8L10 10Z" fill="url(#swordBlade)" />
    <path d="M10 12L12 14L14 12L12 10L10 12Z" fill="url(#swordBlade)" />
    <path d="M10 14L12 16L14 14L12 12L10 14Z" fill="url(#swordBlade)" />
    {/* Sword guard */}
    <rect x="8" y="16" width="8" height="2" fill="#FFD700" rx="1" />
  </svg>
)

export const ShieldIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
    <defs>
      <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4169E1" />
        <stop offset="50%" stopColor="#6495ED" />
        <stop offset="100%" stopColor="#87CEEB" />
      </linearGradient>
      <linearGradient id="shieldBorder" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#FFD700" />
        <stop offset="100%" stopColor="#FFA500" />
      </linearGradient>
    </defs>
    {/* Shield body */}
    <path d="M12 2L20 6V12C20 16.55 16.84 21.74 12 23C7.16 21.74 4 16.55 4 12V6L12 2Z" 
          fill="url(#shieldGradient)" stroke="url(#shieldBorder)" strokeWidth="1" />
    {/* Shield emblem */}
    <circle cx="12" cy="12" r="3" fill="#FFD700" />
    <path d="M12 9L13 12L16 12L13.5 14L14.5 17L12 15L9.5 17L10.5 14L8 12L11 12L12 9Z" 
          fill="#FF4500" />
  </svg>
)

export const PotionIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
    <defs>
      <linearGradient id="potionBottle" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F5DEB3" />
        <stop offset="50%" stopColor="#DEB887" />
        <stop offset="100%" stopColor="#D2B48C" />
      </linearGradient>
      <linearGradient id="potionLiquid" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00CED1" />
        <stop offset="50%" stopColor="#40E0D0" />
        <stop offset="100%" stopColor="#87CEEB" />
      </linearGradient>
    </defs>
    {/* Potion bottle body */}
    <path d="M8 4H16L17 6H15V8H17V10H15V12H17V14H15V16H17V18H15V20H17V22H7V20H9V18H7V16H9V14H7V12H9V10H7V8H9V6H7L8 4Z" 
          fill="url(#potionBottle)" stroke="#8B4513" strokeWidth="1" />
    
    {/* Potion liquid */}
    <path d="M9 6H15V18H9V6Z" fill="url(#potionLiquid)" />
    
    {/* Liquid surface (meniscus) */}
    <path d="M9 6H15L14 7H10L9 6Z" fill="url(#potionLiquid)" />
    
    {/* Bubbles/reflections */}
    <circle cx="11" cy="9" r="1" fill="#FFFFFF" opacity="0.8" />
    <circle cx="13" cy="11" r="0.8" fill="#FFFFFF" opacity="0.6" />
    <circle cx="12" cy="14" r="1.2" fill="#FFFFFF" opacity="0.7" />
    
    {/* Cork stopper */}
    <rect x="10" y="2" width="4" height="2" fill="#8B4513" rx="1" />
    
    {/* Bottle highlights */}
    <path d="M8 4L9 6L8 8" fill="none" stroke="#FFFFFF" strokeWidth="0.5" opacity="0.6" />
  </svg>
)

export const ScrollIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
    <defs>
      <linearGradient id="scrollGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F5DEB3" />
        <stop offset="50%" stopColor="#DEB887" />
        <stop offset="100%" stopColor="#D2B48C" />
      </linearGradient>
      <linearGradient id="scrollSeal" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#DC143C" />
        <stop offset="100%" stopColor="#B22222" />
      </linearGradient>
    </defs>
    {/* Scroll body */}
    <path d="M6 4H18V20H6V4Z" fill="url(#scrollGradient)" stroke="#8B4513" strokeWidth="1" />
    {/* Scroll rolled part */}
    <path d="M6 4H18V8H6V4Z" fill="#DEB887" />
    {/* Scroll seal */}
    <circle cx="12" cy="6" r="2" fill="url(#scrollSeal)" />
    <path d="M12 5L12.5 6.5L14 7L12.5 7.5L12 9L11.5 7.5L10 7L11.5 6.5L12 5Z" 
          fill="#FFD700" />
    {/* Text lines */}
    <rect x="8" y="12" width="8" height="1" fill="#8B4513" rx="0.5" />
    <rect x="8" y="14" width="6" height="1" fill="#8B4513" rx="0.5" />
    <rect x="8" y="16" width="7" height="1" fill="#8B4513" rx="0.5" />
  </svg>
)

export const GemIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
    <defs>
      <linearGradient id="gemGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00CED1" />
        <stop offset="50%" stopColor="#40E0D0" />
        <stop offset="100%" stopColor="#87CEEB" />
      </linearGradient>
      <linearGradient id="gemHighlight" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="100%" stopColor="#E0FFFF" />
      </linearGradient>
    </defs>
    {/* Gem facets */}
    <path d="M12 2L16 8L20 8L16 14L12 20L8 14L4 8L8 8L12 2Z" fill="url(#gemGradient)" />
    {/* Gem highlights */}
    <path d="M12 4L14 8L12 12L10 8L12 4Z" fill="url(#gemHighlight)" opacity="0.6" />
    <path d="M12 6L13 9L12 12L11 9L12 6Z" fill="url(#gemHighlight)" opacity="0.4" />
  </svg>
)

export const GunIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
    <defs>
      <linearGradient id="gunGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFD700" />
        <stop offset="50%" stopColor="#FFA500" />
        <stop offset="100%" stopColor="#DAA520" />
      </linearGradient>
      <linearGradient id="gunHandle" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#DAA520" />
        <stop offset="100%" stopColor="#B8860B" />
      </linearGradient>
    </defs>
    {/* Gun barrel */}
    <rect x="4" y="10" width="12" height="4" fill="url(#gunGradient)" rx="2" />
    {/* Gun handle */}
    <path d="M16 10L18 12L16 14L14 12L16 10Z" fill="url(#gunHandle)" />
    {/* Gun trigger */}
    <circle cx="17" cy="12" r="1" fill="#FF4500" />
    {/* Gun sights */}
    <rect x="6" y="9" width="2" height="6" fill="#FFD700" rx="1" />
    <rect x="16" y="9" width="2" height="6" fill="#FFD700" rx="1" />
    {/* Gun details */}
    <rect x="14" y="11" width="1" height="2" fill="#FFD700" rx="0.5" />
  </svg>
)

export const RifleIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
    <defs>
      <linearGradient id="rifleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#2F4F4F" />
        <stop offset="50%" stopColor="#696969" />
        <stop offset="100%" stopColor="#808080" />
      </linearGradient>
      <linearGradient id="rifleStock" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8B4513" />
        <stop offset="100%" stopColor="#A0522D" />
      </linearGradient>
    </defs>
    {/* Rifle barrel */}
    <rect x="2" y="11" width="16" height="2" fill="url(#rifleGradient)" rx="1" />
    {/* Rifle stock */}
    <path d="M18 10L22 12L18 14L16 12L18 10Z" fill="url(#rifleStock)" />
    {/* Rifle scope */}
    <circle cx="8" cy="12" r="2" fill="#FFD700" stroke="#000000" strokeWidth="1" />
    <circle cx="8" cy="12" r="1" fill="#000000" />
    {/* Rifle magazine */}
    <rect x="14" y="13" width="2" height="4" fill="#FF4500" rx="1" />
  </svg>
)

export const GrenadeIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
    <defs>
      <linearGradient id="grenadeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#2F4F4F" />
        <stop offset="50%" stopColor="#696969" />
        <stop offset="100%" stopColor="#808080" />
      </linearGradient>
      <linearGradient id="grenadePin" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFD700" />
        <stop offset="100%" stopColor="#FFA500" />
      </linearGradient>
    </defs>
    {/* Grenade body */}
    <circle cx="12" cy="12" r="8" fill="url(#grenadeGradient)" />
    {/* Grenade texture */}
    <circle cx="12" cy="12" r="6" fill="none" stroke="#000000" strokeWidth="1" opacity="0.3" />
    <circle cx="12" cy="12" r="4" fill="none" stroke="#000000" strokeWidth="1" opacity="0.2" />
    {/* Grenade pin */}
    <path d="M20 8L22 10L20 12L18 10L20 8Z" fill="url(#grenadePin)" />
    <circle cx="21" cy="10" r="1" fill="#FF4500" />
  </svg>
)

export const ArmorIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
    <defs>
      <linearGradient id="armorGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4169E1" />
        <stop offset="50%" stopColor="#6495ED" />
        <stop offset="100%" stopColor="#87CEEB" />
      </linearGradient>
      <linearGradient id="armorAccent" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#FFD700" />
        <stop offset="100%" stopColor="#FFA500" />
      </linearGradient>
    </defs>
    {/* Armor chest plate */}
    <path d="M8 6H16L18 8V16L16 18H8L6 16V8L8 6Z" fill="url(#armorGradient)" />
    {/* Armor details */}
    <rect x="10" y="8" width="4" height="8" fill="url(#armorAccent)" rx="2" />
    <circle cx="12" cy="10" r="1" fill="#4169E1" />
    <circle cx="12" cy="14" r="1" fill="#4169E1" />
  </svg>
)

export const HelmetIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
    <defs>
      <linearGradient id="helmetGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#C0C0C0" />
        <stop offset="50%" stopColor="#A9A9A9" />
        <stop offset="100%" stopColor="#808080" />
      </linearGradient>
      <linearGradient id="helmetVisor" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#000000" />
        <stop offset="100%" stopColor="#2F4F4F" />
      </linearGradient>
      <linearGradient id="hornGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F5DEB3" />
        <stop offset="100%" stopColor="#DEB887" />
      </linearGradient>
    </defs>
    {/* Helmet dome */}
    <path d="M6 12C6 8 8.5 5 12 5C15.5 5 18 8 18 12V16H6V12Z" fill="url(#helmetGradient)" />
    {/* Helmet horns */}
    <path d="M8 8C8 6.9 8.9 6 10 6C11.1 6 12 6.9 12 8C12 9.1 11.1 10 10 10C8.9 10 8 9.1 8 8Z" fill="url(#hornGradient)" />
    <path d="M12 8C12 6.9 12.9 6 14 6C15.1 6 16 6.9 16 8C16 9.1 15.1 10 14 10C12.9 10 12 9.1 12 8Z" fill="url(#hornGradient)" />
    {/* Helmet visor */}
    <path d="M8 12H16V14H8V12Z" fill="url(#helmetVisor)" />
    {/* Helmet details */}
    <rect x="10" y="7" width="4" height="2" fill="#FFD700" rx="1" />
    <circle cx="12" cy="9" r="1" fill="#FFD700" />
    {/* Helmet studs */}
    <circle cx="9" cy="15" r="0.5" fill="#F5DEB3" />
    <circle cx="11" cy="15" r="0.5" fill="#F5DEB3" />
    <circle cx="13" cy="15" r="0.5" fill="#F5DEB3" />
    <circle cx="15" cy="15" r="0.5" fill="#F5DEB3" />
  </svg>
)

export const KnifeIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
    <defs>
      <linearGradient id="knifeBlade" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#C0C0C0" />
        <stop offset="50%" stopColor="#FFFFFF" />
        <stop offset="100%" stopColor="#C0C0C0" />
      </linearGradient>
      <linearGradient id="knifeHandle" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFFF00" />
        <stop offset="100%" stopColor="#FFA500" />
      </linearGradient>
    </defs>
    {/* Knife blade */}
    <path d="M4 8L12 16L20 8L12 0L4 8Z" fill="url(#knifeBlade)" />
    {/* Knife handle (banana-like) */}
    <path d="M10 16C10 14.9 10.9 14 12 14C13.1 14 14 14.9 14 16C14 17.1 13.1 18 12 18C10.9 18 10 17.1 10 16Z" fill="url(#knifeHandle)" />
    {/* Knife guard */}
    <rect x="8" y="14" width="8" height="2" fill="#FFD700" rx="1" />
    {/* Blade highlight */}
    <path d="M8 8L12 12L16 8L12 4L8 8Z" fill="#FFFFFF" opacity="0.3" />
  </svg>
)

export const RopeIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
    <defs>
      <linearGradient id="ropeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8B4513" />
        <stop offset="50%" stopColor="#A0522D" />
        <stop offset="100%" stopColor="#CD853F" />
      </linearGradient>
    </defs>
    {/* Rope coils */}
    <path d="M8 6C8 4.9 8.9 4 10 4C11.1 4 12 4.9 12 6C12 7.1 11.1 8 10 8C8.9 8 8 7.1 8 6Z" fill="url(#ropeGradient)" />
    <path d="M12 10C12 8.9 12.9 8 14 8C15.1 8 16 8.9 16 10C16 11.1 15.1 12 14 12C12.9 12 12 11.1 12 10Z" fill="url(#ropeGradient)" />
    <path d="M8 14C8 12.9 8.9 12 10 12C11.1 12 12 12.9 12 14C12 15.1 11.1 16 10 16C8.9 16 8 15.1 8 14Z" fill="url(#ropeGradient)" />
    <path d="M12 18C12 16.9 12.9 16 14 16C15.1 16 16 16.9 16 18C16 19.1 15.1 20 14 20C12.9 20 12 19.1 12 18Z" fill="url(#ropeGradient)" />
    {/* Rope connections */}
    <path d="M10 6L14 10" stroke="url(#ropeGradient)" strokeWidth="2" />
    <path d="M10 14L14 18" stroke="url(#ropeGradient)" strokeWidth="2" />
  </svg>
)

export const FlashlightIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
    <defs>
      <linearGradient id="flashlightGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#2F4F4F" />
        <stop offset="50%" stopColor="#696969" />
        <stop offset="100%" stopColor="#808080" />
      </linearGradient>
      <linearGradient id="flashlightLight" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFFF00" />
        <stop offset="100%" stopColor="#FFD700" />
      </linearGradient>
    </defs>
    {/* Flashlight body */}
    <rect x="8" y="6" width="8" height="12" fill="url(#flashlightGradient)" rx="4" />
    {/* Flashlight lens */}
    <circle cx="12" cy="8" r="3" fill="url(#flashlightLight)" />
    {/* Flashlight switch */}
    <rect x="10" y="16" width="4" height="2" fill="#FF4500" rx="1" />
    {/* Light beam */}
    <path d="M12 5L8 1L16 1L12 5Z" fill="url(#flashlightLight)" opacity="0.6" />
  </svg>
)

export const CrownIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
    <defs>
      <linearGradient id="crownGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFD700" />
        <stop offset="50%" stopColor="#FFA500" />
        <stop offset="100%" stopColor="#DAA520" />
      </linearGradient>
      <linearGradient id="gemGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#DC143C" />
        <stop offset="100%" stopColor="#B22222" />
      </linearGradient>
    </defs>
    {/* Crown base */}
    <rect x="4" y="18" width="16" height="2" fill="url(#crownGradient)" rx="1" />
    {/* Crown spires */}
    <path d="M6 18L8 8L12 12L16 8L18 18H6Z" fill="url(#crownGradient)" />
    {/* Crown orbs */}
    <circle cx="8" cy="8" r="1.5" fill="url(#crownGradient)" />
    <circle cx="12" cy="12" r="1.5" fill="url(#crownGradient)" />
    <circle cx="16" cy="8" r="1.5" fill="url(#crownGradient)" />
    {/* Crown gems */}
    <path d="M12 16L13 18L11 18L12 16Z" fill="url(#gemGradient)" />
    <circle cx="10" cy="17" r="0.8" fill="url(#gemGradient)" />
    <circle cx="14" cy="17" r="0.8" fill="url(#gemGradient)" />
    <circle cx="9" cy="17" r="0.8" fill="url(#gemGradient)" />
    <circle cx="15" cy="17" r="0.8" fill="url(#gemGradient)" />
  </svg>
)

export const StatsIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
    <defs>
      <linearGradient id="statsGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#32CD32" />
        <stop offset="50%" stopColor="#00FF00" />
        <stop offset="100%" stopColor="#90EE90" />
      </linearGradient>
    </defs>
    {/* Chart bars */}
    <rect x="2" y="21" width="4" height="1" fill="url(#statsGradient)" />
    <rect x="6" y="17" width="4" height="5" fill="url(#statsGradient)" />
    <rect x="10" y="13" width="4" height="9" fill="url(#statsGradient)" />
    <rect x="14" y="9" width="4" height="13" fill="url(#statsGradient)" />
    <rect x="18" y="5" width="4" height="17" fill="url(#statsGradient)" />
    {/* Chart grid */}
    <path d="M2 3H22" stroke="#C0C0C0" strokeWidth="1" opacity="0.5" />
    <path d="M2 7H22" stroke="#C0C0C0" strokeWidth="1" opacity="0.5" />
    <path d="M2 11H22" stroke="#C0C0C0" strokeWidth="1" opacity="0.5" />
    <path d="M2 15H22" stroke="#C0C0C0" strokeWidth="1" opacity="0.5" />
    <path d="M2 19H22" stroke="#C0C0C0" strokeWidth="1" opacity="0.5" />
  </svg>
)

export const AddIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
    <defs>
      <linearGradient id="addGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#32CD32" />
        <stop offset="50%" stopColor="#00FF00" />
        <stop offset="100%" stopColor="#90EE90" />
      </linearGradient>
    </defs>
    {/* Plus symbol */}
    <rect x="11" y="5" width="2" height="14" fill="url(#addGradient)" rx="1" />
    <rect x="5" y="11" width="14" height="2" fill="url(#addGradient)" rx="1" />
    {/* Glow effect */}
    <rect x="11" y="5" width="2" height="14" fill="url(#addGradient)" rx="1" opacity="0.3" />
    <rect x="5" y="11" width="14" height="2" fill="url(#addGradient)" rx="1" opacity="0.3" />
  </svg>
) 
