# BKU Parking Frontend

Static frontend implementation for the BKU Parking designs:

- `index.html`: landing page with the Gate 3 landscape parking map
- `login.html`: login screen
- `settings-home.html`: profile settings page
- `settings-bill.html`: billing history page

## Run locally

This project uses plain HTML, CSS, and JavaScript, so you do not need Node.js.

From the project folder:

```powershell
python -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000).

## Notes

- The parking map is interactive: click available slots to change the selected space.
- The login form stores demo profile data in `localStorage` and redirects back to the landing page.
- The original PNG mockups plus copied design assets are stored in `assets/images` for reference.
