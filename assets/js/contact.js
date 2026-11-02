// Assemble the email address only after a visitor activates an email link.
// This discourages basic source scrapers; it is not a security boundary.
document.querySelectorAll('[data-email-link]').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const mailbox = ['Tingwei', 'Chen'].join('.');
    const domain = ['student', 'uts', 'edu', 'au'].join('.');
    window.location.assign('mailto:' + mailbox + '@' + domain);
  });
});
