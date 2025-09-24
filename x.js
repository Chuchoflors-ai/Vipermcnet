// Config-driven site with error handling (modificado)
(async function () {
    try {
        const a = await fetch('config.json?v=' + Date.now()), b = await a.json(); 
        let c; 
        try { 
            c = document.querySelector("link[rel~='icon']"); 
            if (!c) { 
                c = document.createElement('link'); 
                c.rel = 'icon'; 
                document.head.appendChild(c) 
            } 
            c.href = b.favicon 
        } catch (e) { console.warn('Favicon could not be loaded:', e) }

        try { document.title = b.site_title } catch (e) { console.warn('Title error:', e) }
        try { const d = document.getElementById('a'); d.src = b.logo; d.alt = '' } catch (e) { console.warn('Logo error:', e) }
        try { document.getElementById('c').textContent = b.player_counter.text } catch (e) { console.warn('Player counter text error:', e) }

        try { 
            const e = document.getElementById('d'); 
            e.innerHTML = ''; 
            b.nav_buttons.forEach(f => { 
                const g = document.createElement('a'); 
                g.className = 'k', f.icon ? g.innerHTML = `<i class="${f.icon}"></i> ${f.text}` : g.textContent = f.text, 
                g.href = f.link, 
                f.target && (g.target = f.target), 
                f.text.toLowerCase().includes('vote') && g.classList.add('m'), 
                f.text.toLowerCase().includes('discord') && g.classList.add('l'), 
                f.text.toLowerCase().includes('shop') && g.classList.add('n'), 
                e.appendChild(g) 
            }) 
        } catch (e) { console.warn('Nav buttons error:', e) }

        try { document.getElementById('e').textContent = b.hero.title } catch (e) { console.warn('Hero title error:', e) }
        try { document.getElementById('f').textContent = b.hero.subtitle } catch (e) { console.warn('Hero subtitle error:', e) }
        try { document.getElementById('i').textContent = b.hero.cta_text } catch (e) { console.warn('Hero CTA text error:', e) }
        try { document.getElementById('h').className = b.hero.cta_icon } catch (e) { console.warn('Hero CTA icon error:', e) }

        try { document.getElementById('j').textContent = b.features_title } catch (e) { console.warn('Features title error:', e) }
        try { document.getElementById('k').textContent = b.features_subtitle } catch (e) { console.warn('Features subtitle error:', e) }
        try { 
            const h = document.getElementById('l'); 
            h.innerHTML = ''; 
            b.features.forEach(i => { 
                const j = document.createElement('div'); 
                j.className = 'u', 
                j.innerHTML = `<div class=\"v\"><i class=\"${i.icon}\"></i></div><h3 class=\"w\">${i.title}</h3><p class=\"x\">${i.description}</p>`, 
                h.appendChild(j) 
            }) 
        } catch (e) { console.warn('Features error:', e) }

        try { document.getElementById('m').textContent = b.final_cta.title } catch (e) { console.warn('Final CTA title error:', e) }
        try { document.getElementById('n').textContent = b.final_cta.subtitle } catch (e) { console.warn('Final CTA subtitle error:', e) }
        try { document.getElementById('p').textContent = b.final_cta.ip } catch (e) { console.warn('Final CTA IP error:', e) }
        try { document.getElementById('q').textContent = b.final_cta.copy_hint } catch (e) { console.warn('Final CTA copy hint error:', e) }
        try { document.getElementById('o').onclick = function () { r(b.final_cta.ip) } } catch (e) { console.warn('Final CTA copy click error:', e) }

        try { document.getElementById('u').textContent = b.vote_popup.title } catch (e) { console.warn('Vote popup title error:', e) }
        try { 
            const i = document.getElementById('v'); 
            i.innerHTML = ''; 
            b.vote_popup.links.forEach(j => { 
                const k = document.createElement('a'); 
                k.className = 'Q', k.href = j.url, k.target = '_blank', k.textContent = j.text, 
                i.appendChild(k) 
            }) 
        } catch (e) { console.warn('Vote links error:', e) }

        try { document.getElementById('r').textContent = b.footer } catch (e) { console.warn('Footer error:', e) }
        try { document.getElementById('copyNotifText').textContent = b.copy_notification } catch (e) { console.warn('Copy notification text error:', e) }

        // Player counter
        window.s = async function () { 
            try { 
                const l = await fetch(`https://api.mcsrvstat.us/2/${b.player_counter.demo_ip}`), 
                      m = await l.json(); 
                m && m.players && 'number' == typeof m.players.online 
                    ? document.getElementById('b').textContent = m.players.online.toLocaleString() 
                    : document.getElementById('b').textContent = 'N/A' 
            } catch (l) { 
                console.warn('Player count fetch error:', l); 
                document.getElementById('b').textContent = 'N/A' 
            } 
        }; 
        try { s(); setInterval(s, 45e3) } catch (e) { console.warn('Player count interval error:', e) }

        // --- Cambiado de KODE a vipermc ---
        try { 
            const lI = document.getElementById("kode-footer"); 
            if (lI) { 
                const ll = "Made by "; 
                const II = "Vlyl"; 
                const I0 = "https://discord.gg/Y5gmcwJWtT"; 
                const lO = document.createElement("span"); 
                lO.style.cssText = "color:#9ca3af;font-size:0.9em;text-align:center;cursor:pointer;display:inline;"; 
                lO.innerHTML = ll + "<strong>" + II + "</strong>"; 
                lO.addEventListener("click", () => window.open(I0, "_blank")); 
                lI.appendChild(lO); 
            } 
        } catch (e) { }

        try { 
            const I1l = document.createElement('div'); 
            I1l.style.cssText = 'position:fixed;bottom:20px;right:20px;background:rgba(255,255,255,0.75);backdrop-filter:blur(8px);color:#666;padding:10px 14px;border-radius:8px;font-size:0.75em;cursor:pointer;z-index:9999;box-shadow:0 1px 8px rgba(0,0,0,0.05);border:1px solid rgba(255,255,255,0.3);transition:all 0.3s ease;max-width:240px;user-select:none;opacity:0.8;'; 
            let O1O = false; 
            const lO1l = '<div class="widget-content" style="display:flex;align-items:center;gap:6px;width:100%;height:100%;">Made by <strong style="color:#555;">Vlyl</strong></div>'; 
            const I1O1 = '<div style="position:relative;margin-top:10px;padding-top:10px;border-top:1px solid rgba(0,0,0,0.08);font-size:0.7em;opacity:0.75;line-height:1.3;color:#666;"><div class="close-btn" style="position:absolute;top:-35px;right:-10px;width:26px;height:26px;background:rgba(0,0,0,0.08);border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:14px;color:#888;font-weight:bold;z-index:10000;">×</div>Professional web development & design services.<br><br>Click to join our Discord community!</div>'; 
            I1l.className = 'widget-root'; 
            I1l.innerHTML = lO1l; 
            I1l.addEventListener('click', function (e) { 
                e.preventDefault(); 
                e.stopPropagation(); 
                if (e.target.classList.contains('close-btn') || e.target.textContent === '×') { 
                    if (O1O) { 
                        I1l.innerHTML = lO1l; 
                        I1l.style.maxWidth = '240px'; 
                        O1O = false; 
                    } 
                    return false; 
                } 
                if (!O1O) { 
                    I1l.innerHTML = lO1l + I1O1; 
                    I1l.style.maxWidth = '280px'; 
                    O1O = true; 
                } else { 
                    window.open("https://discord.gg/Y5gmcwJWtT", '_blank'); 
                } 
                return false; 
            }); 
            document.body.appendChild(I1l); 
        } catch (e) { }

        // Copy IP
        function r(n) { 
            try { 
                navigator.clipboard.writeText(n).then(() => { 
                    const o = document.getElementById('s'); 
                    const t = document.getElementById('copyNotifText'); 
                    if (t) { t.textContent = b.copy_notification; } 
                    o.classList.add('G'), setTimeout(() => { o.classList.remove('G') }, 3e3) 
                }) 
            } catch (e) { console.warn('Copy to clipboard error:', e) } 
        }

        // Particles
        function t() { 
            try { 
                const n = document.querySelector('.b'); 
                for (let o = 0; o < 50; o++) { 
                    const p = document.createElement('div'); 
                    p.classList.add('c'), 
                    p.style.left = 100 * Math.random() + "%", 
                    p.style.top = 100 * Math.random() + "%", 
                    p.style.animationDelay = 6 * Math.random() + "s", 
                    p.style.animationDuration = 4 * Math.random() + 4 + "s", 
                    n.appendChild(p) 
                } 
            } catch (e) { console.warn('Particles error:', e) } 
        } 
        t();

    } catch (e) { console.error('Config load or main error:', e) }
})();