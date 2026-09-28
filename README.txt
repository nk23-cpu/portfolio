V&A Studio Portfolio - static site (no build step)
Upload the whole folder to your server root (WinSCP).
Project links: index.html me example.com/orcoffee, /edupulse, /school ko apne real links se replace karo.
Security headers (nginx): add_header X-Content-Type-Options nosniff; add_header X-Frame-Options DENY; add_header Referrer-Policy strict-origin-when-cross-origin; enable gzip/brotli.
