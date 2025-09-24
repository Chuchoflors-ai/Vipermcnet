Frozen Web Template - Configuration Guide


IMPORTANT: This website template cannot be run by simply double-clicking index.html. You must run it through a local server or upload it to a web hosting platform for it to work properly.

How to run locally:
- Use a simple local server. Here are some easy options:
  - If you have Python installed, open a terminal in this folder and run:
    python -m http.server 8000
    Then visit http://localhost:8000 in your browser.
  - If you have Node.js installed, you can use the 'http-server' package:
    npx http-server
    Then visit the shown address in your browser.
- Do NOT just open index.html directly, as some features will not work.

How to run on your hosting platform:
- Upload all files in this folder to your web hosting provider (e.g. cPanel, Plesk, Netlify, Vercel, etc.).
- Make sure your host supports static sites (HTML/CSS/JS).
- Once uploaded, visit your domain to see your site live.



If you get stuck, please open a ticket here and we'll be helping you in under 24 hours. 
https://discord.gg/wdnkNS62mJ

If you want to remove the watermark, purchase the 'no watermark' addon from the BuiltByBit page for a cheap price.
If you would like the unobsfucated version of the code to make your own changes with ease, feel free to purchase it from our BuiltByBit page too (no watermark in this version aswell)
https://builtbybit.com/resources/frozen-free-blue-minecraft-lander.71644/



Here’s what each option does:

logo
- Path to your logo image (e.g. logo.png).

favicon
- Path to your browser tab icon (e.g. favicon.ico).

site_title
- The text that appears in the browser tab.

player_counter
- text: The words shown after the player count (e.g. players conquering the frost).
- demo_ip: The Minecraft server IP to fetch the player count from (e.g. mc.hypixel.net).

nav_buttons
- List of buttons at the top of the site.
- Each button has:
  - text: The button’s label (e.g. Join Discord).
  - icon: Font Awesome icon class (e.g. fab fa-discord).
  - link: Where the button goes (URL).
  - target: _blank for new tab, _self for same tab.

hero
- title: Big title at the top.
- subtitle: Description under the title.
- cta_text: Text for the main button.
- cta_icon: Font Awesome icon for the button.

features_title & features_subtitle
- Title and subtitle for the features section.

features
- List of features to show.
- Each feature has:
  - icon: Font Awesome icon class.
  - title: Feature name.
  - description: Short description.

final_cta
- title: Big call-to-action at the bottom.
- subtitle: Description under the title.
- ip: The server IP to display and copy.
- copy_hint: Hint text below the IP.

vote_popup
- title: Title for the vote popup.
- links: List of voting sites. Each has:
  - text: Button label.
  - url: Link to the voting site.

footer
- Text at the very bottom of the site.


Tips:
- All images and icons should be in your project folder.
- Use Font Awesome (https://fontawesome.com/icons) for icons.


We'd greatly appreciate a review if you're happy with the site!
Please let us know how we can improve here aswell! https://discord.gg/wdnkNS62mJ
