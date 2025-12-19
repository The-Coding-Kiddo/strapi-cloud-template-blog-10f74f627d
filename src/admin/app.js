const config = {
  translations: {
    en: {
      'Auth.form.welcome.title': 'Login to SYL Admin',
      'Auth.form.welcome.subtitle': 'POWERED by InnovateX',
      'app.components.LeftMenu.navbrand.title': 'InnovateX Dashboard',
      'app.components.LeftMenu.navbrand.workplace': 'SYL Admin',
      'Settings.application.header': 'SYL Admin',
    },
  },
  locales: [
    // 'ar',
    // 'fr',
    // 'cs',
    // 'de',
    // 'dk',
    // 'es',
    // 'he',
    // 'id',
    // 'it',
    // 'ja',
    // 'ko',
    // 'ms',
    // 'nl',
    // 'no',
    // 'pl',
    // 'pt-BR',
    // 'pt',
    // 'ru',
    // 'sk',
    // 'sv',
    // 'th',
    // 'tr',
    // 'uk',
    // 'vi',
    // 'zh-Hans',
    // 'zh',
  ],
  // InnovateX Color Palette - Green, Teal & Smokey White
  theme: {
    light: {
      colors: {
        // Primary colors - Vibrant Green (main brand color)
        primary100: '#e6f7f1',
        primary200: '#ccefe3', 
        primary500: '#10b981', // Emerald green
        primary600: '#059669',
        primary700: '#047857',
        
        // Secondary colors - Teal accents
        secondary100: '#e0f5f5',
        secondary200: '#c2ebeb',
        secondary500: '#14b8a6', // Teal
        secondary600: '#0d9488',
        secondary700: '#0f766e',
        
        // Danger colors - Muted red for InnovateX
        danger100: '#fee2e2',
        danger200: '#fecaca',
        danger500: '#ef4444',
        danger600: '#dc2626',
        danger700: '#b91c1c',
        
        // Success colors - Matching primary green
        success100: '#d1fae5',
        success200: '#a7f3d0',
        success500: '#10b981',
        success600: '#059669',
        success700: '#047857',
        
        // Warning colors - Warm accent
        warning100: '#fef3c7',
        warning200: '#fde68a',
        warning500: '#f59e0b',
        warning600: '#d97706',
        warning700: '#b45309',
        
        // Neutral colors - Smokey white palette
        neutral0: '#ffffff',
        neutral100: '#f7f8f9', // Smokey white
        neutral150: '#eceff1',
        neutral200: '#e1e5e8',
        neutral300: '#cfd4d9',
        neutral400: '#a8b1ba',
        neutral500: '#6b7780',
        neutral600: '#4a5560',
        neutral700: '#35404a',
        neutral800: '#252d35',
        neutral900: '#1a2128',
        
        // Alternative colors - Deep teal
        alternative100: '#e0f5f5',
        alternative200: '#b3e5e5',
        alternative500: '#0d9488',
        alternative600: '#0f766e',
        alternative700: '#115e59',
      },
    },
    // Dark mode theme with InnovateX palette
    dark: {
      colors: {
        primary100: '#064e3b',
        primary200: '#065f46',
        primary500: '#10b981',
        primary600: '#34d399',
        primary700: '#6ee7b7',
        
        secondary100: '#134e4a',
        secondary200: '#115e59',
        secondary500: '#14b8a6',
        secondary600: '#2dd4bf',
        secondary700: '#5eead4',
        
        danger100: '#7f1d1d',
        danger200: '#991b1b',
        danger500: '#ef4444',
        danger600: '#f87171',
        danger700: '#fca5a5',
        
        success100: '#064e3b',
        success200: '#065f46',
        success500: '#10b981',
        success600: '#34d399',
        success700: '#6ee7b7',
        
        warning100: '#78350f',
        warning200: '#92400e',
        warning500: '#f59e0b',
        warning600: '#fbbf24',
        warning700: '#fcd34d',
        
        neutral0: '#1a2128', // Dark smokey
        neutral100: '#252d35',
        neutral150: '#35404a',
        neutral200: '#4a5560',
        neutral300: '#6b7780',
        neutral400: '#a8b1ba',
        neutral500: '#cfd4d9',
        neutral600: '#e1e5e8',
        neutral700: '#eceff1',
        neutral800: '#f7f8f9',
        neutral900: '#ffffff',
        
        alternative100: '#134e4a',
        alternative200: '#115e59',
        alternative500: '#14b8a6',
        alternative600: '#2dd4bf',
        alternative700: '#5eead4',
      },
    },
  },
};

const bootstrap = () => {
  // Change the document title
  document.title = 'SYL Admin';
  
  // Change the favicon dynamically
  let link = document.querySelector("link[rel~='icon']");
  if (!link) {
    link = document.createElement('link');
    document.head.appendChild(link);
  }
  link.rel = 'icon';
  link.href = '/favicon.png';
};

export default {
  config,
  bootstrap,
};
