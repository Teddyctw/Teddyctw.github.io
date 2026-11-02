// Preserve links to sections of the former single-page homepage.
const legacyPages = {
  research: '/research/',
  publications: '/publications/',
  'under-review-title': '/publications/#under-review-title',
  experience: '/experience/',
  service: '/service/',
  contact: '/#email'
};
const destination = legacyPages[window.location.hash.slice(1)];
if (destination) window.location.replace(destination);
