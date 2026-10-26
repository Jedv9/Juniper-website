# Juniper website

The website for Juniper, Faith's hair studio in Waupaca, WI.

## How to edit the site yourself (no coding)

All the words, prices, hours, photos and the booking link are in **one file: `config.js`**.

### Editing from a phone or computer (on GitHub)
1. Go to the repository on github.com and tap **`config.js`**.
2. Tap the **pencil icon** ("Edit this file").
3. Change the text between the quotes, for example a price: `"$45"` → `"$50"`.
4. Tap **Commit changes**. If the site is hosted on Netlify or Cloudflare Pages (see below), it updates by itself in about a minute.

Tips:
- Keep the quotes `" "` and the commas at the end of lines.
- To add a service, review or photo, copy an existing line and change it.
- If the page breaks after an edit, a quote or comma is usually missing. Undo it from the file's **History**.

### Changing photos
1. Open the **`images`** folder → **Add file** → **Upload files**.
2. In `config.js`, point to the new file, e.g. `"images/new-photo.jpg"`.
Use photos under ~1 MB if you can, so the site stays fast.

### Changing colors or fonts
At the top of `styles.css`, the colors are listed with plain names (`--butter`, `--sage`, `--moss`...). Change a color code there and it updates everywhere.

## Booking

In `config.js`, under `booking`, set `provider` to one of:

| provider | What visitors see | What to paste |
|---|---|---|
| `"glossgenius"` (current) | A "Book online" button | Your GlossGenius link |
| `"calendly"` | The Calendly calendar, built into the page | Your Calendly link, e.g. `https://calendly.com/juniper-hair` |
| `"google"` | The Google booking calendar, built into the page | Google Calendar → *Appointment schedule* → **Share** → **Website embed** → copy the link inside `src="..."` |

## Putting it online (free)

1. Make a free account at **netlify.com** (or Cloudflare Pages) and choose **Import from GitHub** → pick this repository. No build settings needed.
2. In Netlify, go to **Domain settings** and add `juniper-hair.com`. Follow its steps to point the domain there (done where the domain is registered, which may be Wix).
3. After that, every change saved in GitHub goes live automatically.

## Preview
Open `index.html` in any browser.
