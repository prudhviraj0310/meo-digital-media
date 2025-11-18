// Google Analytics Utilities
// Source: https://nextjs.org/docs/app/building-your-application/optimizing/analytics

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

// Initialize Google Analytics
export const initGA = () => {
  if (!GA_MEASUREMENT_ID) {
    console.warn('Google Analytics ID not found');
    return;
  }

  // Load Google Analytics script
  const script1 = document.createElement('script');
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script1);

  const script2 = document.createElement('script');
  script2.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA_MEASUREMENT_ID}', {
      page_path: window.location.pathname,
    });
  `;
  document.head.appendChild(script2);
};

// Track page views
export const pageview = (url) => {
  if (!GA_MEASUREMENT_ID) return;
  
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
  });
};

// Track custom events
export const event = ({ action, category, label, value }) => {
  if (!GA_MEASUREMENT_ID) return;

  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

// Predefined event helpers
export const trackButtonClick = (buttonName, location) => {
  event({
    action: 'button_click',
    category: 'engagement',
    label: `${buttonName} - ${location}`,
  });
};

export const trackFormSubmit = (formName) => {
  event({
    action: 'form_submit',
    category: 'conversion',
    label: formName,
  });
};

export const trackVideoPlay = (videoName) => {
  event({
    action: 'video_play',
    category: 'engagement',
    label: videoName,
  });
};

export const trackProjectView = (projectName) => {
  event({
    action: 'project_view',
    category: 'engagement',
    label: projectName,
  });
};

export const trackDownload = (fileName) => {
  event({
    action: 'download',
    category: 'engagement',
    label: fileName,
  });
};

export const trackExternalLink = (linkUrl) => {
  event({
    action: 'external_link',
    category: 'engagement',
    label: linkUrl,
  });
};

export const trackScrollDepth = (depth) => {
  event({
    action: 'scroll_depth',
    category: 'engagement',
    label: `${depth}%`,
    value: depth,
  });
};
