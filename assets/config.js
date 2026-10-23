/* Nexora configuration — edit this file for branding, tools, modules, and UI policy. */
(function(root,factory){
  "use strict";
  var config=factory();
  if(typeof module==="object"&&module.exports)module.exports=config;
  if(root)root.NexoraConfig=config;
})(typeof window!=="undefined"?window:null,function(){
  "use strict";
  var config={
  "version": "6.4.0",
  "brand": {
    "name": "All Tools Nexora",
    "shortName": "Nexora",
    "owner": "Developer Dika",
    "title": "All Tools Nexora — Developer Dika",
    "description": "Kumpulan downloader, maker, AI, dan utilitas web Nexora dalam satu tempat.",
    "canonicalUrl": "https://all-tools-kall.vercel.app/",
    "logoUrl": "https://all-tools-kall.vercel.app/favicon.svg",
    "aiName": "Nexora AI"
  },
  "ui": {
    "mobileBreakpoint": 900,
    "catalogPageSize": 12,
    "desktopMotion": false,
    "customCursor": false,
    "heroVideo": {
      "url": "https://files.catbox.moe/4ijdle.mp4",
      "playOnMobile": true,
      "playOnDesktop": true,
      "showStaticOnDesktop": true
    }
  },
  "modules": {
    "safelinku-bypass": {
      "css": [
        "assets/css/features/safelinku-bypass.css"
      ],
      "js": [
        "assets/js/features/safelinku-bypass.js"
      ]
    },
    "get-code": {
      "css": [
        "assets/css/features/get-code.css"
      ],
      "js": [
        "assets/js/features/get-code.js"
      ]
    },
    "tiktok-quote": {
      "css": [
        "assets/css/features/tiktok-quote.css"
      ],
      "js": [
        "assets/js/features/tiktok-quote.js"
      ]
    },
    "virus-scan": {
      "css": [
        "assets/css/features/virus-scan.css"
      ],
      "js": [
        "assets/js/features/virus-scan.js"
      ]
    },
    "crypto-market": {
      "css": [
        "assets/css/features/crypto-market.css"
      ],
      "js": [
        "assets/js/features/crypto-market.js"
      ]
    },
    "web-intelligence": {
      "css": [
        "assets/css/features/web-intelligence.css"
      ],
      "js": [
        "assets/js/features/web-intelligence.js"
      ]
    },
    "ip-intelligence": {
      "css": [
        "assets/css/features/ip-intelligence.css"
      ],
      "js": [
        "assets/js/features/ip-intelligence.js"
      ]
    },
    "space-explorer": {
      "css": [
        "assets/css/features/space-explorer.css"
      ],
      "js": [
        "assets/js/features/space-explorer.js"
      ]
    },
    "ocr-intelligence": {
      "css": [
        "assets/css/features/ocr-intelligence.css"
      ],
      "js": [
        "assets/js/features/ocr-intelligence.js"
      ]
    },
    "document-ai": {
      "css": [
        "assets/css/features/document-ai.css"
      ],
      "js": [
        "assets/js/features/document-ai.js"
      ]
    },
    "text-to-pdf": {
      "css": [
        "assets/css/features/text-to-pdf.css"
      ],
      "js": [
        "assets/js/features/text-to-pdf.js"
      ]
    },
    "pdf-lab": {
      "css": [
        "assets/pdf-lab/pdf-lab-v1.css"
      ],
      "js": [
        "assets/js/features/pdf-lab.js"
      ]
    },
    "prompt-generator": {
      "css": [
        "assets/css/features/prompt-generator.css"
      ],
      "js": [
        "assets/js/features/prompt-generator.js"
      ]
    },
    "puter-image": {
      "css": [
        "assets/css/features/puter-image.css"
      ],
      "js": [
        "assets/js/features/puter-image.js"
      ]
    },
    "puter-video": {
      "css": [
        "assets/css/features/puter-video.css"
      ],
      "js": [
        "assets/js/features/puter-runtime.js",
        "assets/js/features/puter-video.js"
      ]
    },
    "genmail": {
      "css": [
        "assets/css/features/genmail.css"
      ],
      "js": [
        "assets/js/features/genmail.js"
      ]
    },
    "photo-to-link": {
      "css": [
        "assets/css/features/photo-to-link.css"
      ],
      "js": [
        "assets/js/features/photo-to-link.js"
      ]
    },
    "danbooru-search": {
      "css": [
        "assets/css/features/danbooru-search.css"
      ],
      "js": [
        "assets/js/features/danbooru-search.js"
      ]
    },
    "anime-to-real": {
      "css": [
        "assets/css/features/anime-to-real.css"
      ],
      "js": [
        "assets/js/features/anime-to-real.js"
      ]
    },
    "ai-song": {
      "css": [
        "assets/css/features/ai-song.css"
      ],
      "js": [
        "assets/js/features/ai-song.js"
      ]
    },
    "elevenlabs-studio": {
      "css": [
        "assets/css/features/elevenlabs-studio.css"
      ],
      "js": [
        "assets/js/features/elevenlabs-studio.js"
      ]
    },
    "hd4-enhancer": {
      "css": [
        "assets/css/features/image-lab-shell.css",
        "assets/css/features/hd4-enhancer.css"
      ],
      "js": [
        "assets/js/features/image-lab-shell.js",
        "assets/js/features/hd4-enhancer.js"
      ]
    },
    "remove-background-v4": {
      "css": [
        "assets/css/features/image-lab-shell.css"
      ],
      "js": [
        "assets/js/features/image-lab-shell.js",
        "assets/js/features/remove-background-v4.js"
      ]
    },
    "image-vectorizer": {
      "css": [
        "assets/css/features/image-vectorizer.css"
      ],
      "js": [
        "assets/js/features/image-vectorizer.js"
      ]
    },
    "html-video": {
      "css": [
        "assets/css/features/html-video.css"
      ],
      "js": [
        "assets/js/features/html-video.js"
      ]
    },
    "smart-cutout": {
      "css": [
        "assets/css/features/smart-cutout.css"
      ],
      "js": [
        "assets/js/features/smart-cutout-core.js",
        "assets/js/features/smart-cutout.js"
      ]
    },
    "placeholder-studio": {
      "css": [
        "assets/css/features/placeholder-studio.css"
      ],
      "js": [
        "assets/js/features/placeholder-studio.js"
      ]
    },
    "comic-reader": {
      "css": [
        "assets/css/features/comic-reader.css"
      ],
      "js": [
        "assets/js/shared/supabase-client.js",
        "assets/js/features/comic-reader.js"
      ]
    },
    "preset-finder": {
      "css": [
        "assets/css/features/preset-finder.css"
      ],
      "js": [
        "assets/js/features/preset-finder.js"
      ]
    },
    "multi-ai": {
      "css": [
        "assets/css/features/multi-ai.css"
      ],
      "js": [
        "assets/js/features/multi-ai-layout.js",
        "assets/js/features/multi-ai.js"
      ]
    },
    "imported-tools": {
      "css": [
        "assets/css/features/imported-tools.css"
      ],
      "js": [
        "assets/js/features/imported-tools.js"
      ]
    },
    "generator-pack": {
      "css": [],
      "js": [
        "assets/js/features/generator-pack.js"
      ]
    },
    "web-encryption": {
      "css": [
        "assets/css/features/web-encryption.css"
      ],
      "js": [
        "assets/js/features/web-encryption.js"
      ]
    },
    "svg-alight": {
      "css": [
        "assets/css/features/svg-alight.css"
      ],
      "js": [
        "assets/js/features/svg-alight.js"
      ]
    },
    "bmkg-open-data": {
      "css": [
        "assets/css/features/bmkg-open-data.css"
      ],
      "js": [
        "assets/js/features/bmkg-open-data.js"
      ]
    },
    "alight-premium": {
      "css": [
        "assets/css/features/alight-premium.css"
      ],
      "js": [
        "assets/js/features/alight-premium.js"
      ]
    },
    "nexora-text-2d": {
      "css": [
        "assets/css/features/nexora-generators.css"
      ],
      "js": [
        "assets/vendor/nexora/text-2d-presets.js",
        "assets/vendor/nexora/text-style-data.js",
        "assets/vendor/nexora/text-2d-engine.js",
        "assets/js/features/nexora/nexora-runtime.js"
      ]
    },
    "nexora-text-3d": {
      "css": [
        "assets/css/features/nexora-generators.css"
      ],
      "js": [
        "assets/vendor/nexora/3d-engine.js",
        "assets/js/features/nexora/nexora-runtime.js"
      ]
    },
    "nexora-text-fx-animation": {
      "css": [
        "assets/css/features/nexora-generators.css"
      ],
      "js": [
        "assets/vendor/nexora/text-fx-animation-engine.js",
        "assets/js/features/nexora/nexora-runtime.js"
      ]
    },
    "nexora-text-vector": {
      "css": [
        "assets/css/features/nexora-generators.css"
      ],
      "js": [
        "assets/js/features/nexora/nexora-runtime.js"
      ]
    },
    "nexora-trimpath": {
      "css": [
        "assets/css/features/nexora-generators.css"
      ],
      "js": [
        "assets/vendor/nexora/trimpath-font-metrics.js",
        "assets/vendor/nexora/trimpath-letters.js",
        "assets/vendor/nexora/trimpath-engine.js",
        "assets/js/features/nexora/nexora-runtime.js"
      ]
    },
    "nexora-logo-animate": {
      "css": [
        "assets/css/features/nexora-generators.css"
      ],
      "js": [
        "assets/js/features/nexora/logo-engine.js",
        "assets/js/features/nexora/nexora-runtime.js"
      ]
    },
    "maker-originals": {
      "css": [
        "assets/css/features/maker-originals.css"
      ],
      "js": [
        "assets/js/features/maker-originals.js"
      ]
    },
    "avatar-studio": {
      "css": [
        "assets/css/features/avatar-studio.css"
      ],
      "js": [
        "assets/js/features/avatar-studio.js"
      ]
    },
    "world-classics": {
      "css": [
        "assets/css/world-classics.css"
      ],
      "js": [
        "assets/js/shared/supabase-client.js",
        "assets/js/features/world-classics/state.js",
        "assets/js/features/world-classics/reader.js"
      ]
    },
    "nexora-auto-cut": {
      "css": [
        "assets/css/features/nexora-auto-cut.css"
      ],
      "js": [
        "assets/js/features/remove-background-v4.js",
        "assets/js/features/nexora-auto-cut-core.js",
        "assets/js/features/nexora-auto-cut.js"
      ]
    },
    "social-downloader": {
      "css": [
        "assets/css/features/social-downloader.css"
      ],
      "js": [
        "assets/js/features/social-downloader.js"
      ]
    },
    "motion-control-directory": {
      "css": [
        "assets/css/features/motion-control-directory.css"
      ],
      "js": [
        "assets/js/features/motion-control-directory.js"
      ]
    }
  },
  "tools": {
    "downloader": [],
    "maker": [
      {
        "id": "htmlvideo",
        "icon": "fa-solid fa-film",
        "name": "HTML / WebGL to MP4",
        "description": "Render HTML lengkap, shader WebGL, dan Three.js menjadi MP4 lokal 8 detik",
        "badge": "LOCAL MP4",
        "aliases": [
          "html to video",
          "webgl to mp4",
          "html video"
        ],
        "runtime": {
          "mode": "module",
          "module": "html-video",
          "handler": "openHtmlVideo",
          "opener": "openHtmlVideo"
        },
        "health": {
          "key": "module-html-video",
          "type": "module",
          "path": "/assets/js/features/html-video.js",
          "method": "HEAD",
          "strict": true,
          "checks": [
            { "label": "launcher", "path": "/assets/js/features/html-video.js", "method": "HEAD" },
            { "label": "app", "path": "/assets/apps/html-video/index.html", "method": "HEAD" },
            { "label": "engine", "path": "/assets/apps/html-video/app.c2d0910b.bundle.js", "method": "HEAD" }
          ]
        }
      },
      {
        "id": "avatarstudio",
        "icon": "fa-solid fa-user-astronaut",
        "name": "Nexora Avatar Studio",
        "description": "Buat avatar SVG unik dengan puluhan style dan editor visual.",
        "badge": "SVG",
        "aliases": [
          "avatar studio",
          "dicebear",
          "avatar generator",
          "svg avatar"
        ],
        "runtime": {
          "mode": "module",
          "module": "avatar-studio",
          "handler": "renderAvatarStudio",
          "dependency": "https://api.dicebear.com/10.x/"
        },
        "health": {
          "key": "module-avatar-studio",
          "type": "module",
          "path": "/assets/js/features/avatar-studio.js",
          "method": "HEAD",
          "strict": true
        }
      },
      {
        "id": "sertifikat",
        "icon": "fa-solid fa-certificate",
        "name": "Sertifikat Custom",
        "description": "Sertifikat meme dari sumber original; tanpa template lokal palsu",
        "badge": "ORIGINAL",
        "runtime": {
          "mode": "api",
          "module": "maker-originals",
          "handler": "renderSertifikatTololSource",
          "dependency": "https://api.siputzx.my.id/"
        },
        "health": {
          "key": "module-maker-originals",
          "type": "module",
          "path": "/assets/js/features/maker-originals.js",
          "method": "HEAD",
          "strict": true
        }
      },
      {
        "id": "ektp",
        "icon": "fa-solid fa-id-card",
        "name": "E-KTP Generator",
        "description": "Full form demo",
        "badge": "Full",
        "runtime": {
          "mode": "local",
          "handler": "renderEktp"
        },
        "health": {
          "key": "core-app",
          "type": "module",
          "path": "/assets/js/core/app.js",
          "method": "HEAD",
          "strict": true
        }
      },
      {
        "id": "fakelobby",
        "icon": "fa-solid fa-gamepad",
        "name": "Fake Lobby",
        "description": "FF & ML lobby palsu",
        "badge": "Game",
        "runtime": {
          "mode": "api",
          "handler": "renderFakeLobby",
          "dependency": "https://api.nexray.eu.cc/"
        },
        "health": {
          "key": "nexray-api",
          "type": "external-api",
          "url": "https://api.nexray.eu.cc/",
          "method": "HEAD"
        }
      },
      {
        "id": "winquotes",
        "icon": "fa-brands fa-windows",
        "name": "Windows Quotes",
        "description": "Quote ala Windows — 2 style",
        "badge": "2 STYLE",
        "runtime": {
          "mode": "api",
          "module": "generator-pack",
          "handler": "renderWinquotes2",
          "dependency": "https://apii.nexadev.my.id/"
        },
        "health": {
          "key": "nexadev-api",
          "type": "external-api",
          "url": "https://apii.nexadev.my.id/",
          "method": "HEAD"
        }
      },
      {
        "id": "nokiamsg",
        "icon": "fa-solid fa-mobile-retro",
        "name": "Nokia Message",
        "description": "Buat gambar SMS jadul Nokia",
        "badge": "RETRO",
        "runtime": {
          "mode": "api",
          "module": "generator-pack",
          "handler": "renderNokiaMsg",
          "dependency": "https://apii.nexadev.my.id/"
        },
        "health": {
          "key": "nexadev-api",
          "type": "external-api",
          "url": "https://apii.nexadev.my.id/",
          "method": "HEAD"
        }
      }
    ],
    "tools": [
      {
        "id": "socialdownloader",
        "icon": "fa-solid fa-cloud-arrow-down",
        "name": "Social Downloader",
        "description": "Download video TikTok dan Instagram dalam kualitas terbaik yang tersedia, lengkap dengan audio asli tanpa membebani server Nexora.",
        "badge": "TIKTOK + INSTAGRAM",
        "aliases": ["social downloader", "tiktok downloader", "instagram downloader", "download reels", "download audio"],
        "runtime": {
          "mode": "api",
          "module": "social-downloader",
          "handler": "renderSocialDownloader",
          "dependency": "/api/audit?mode=social-downloader"
        },
        "health": {
          "key": "module-social-downloader",
          "type": "module",
          "path": "/assets/js/features/social-downloader.js",
          "method": "HEAD",
          "strict": true,
          "checks": [
            { "label": "ui", "path": "/assets/js/features/social-downloader.js", "method": "HEAD" },
            { "label": "style", "path": "/assets/css/features/social-downloader.css", "method": "HEAD" }
          ]
        }
      },

      {
        "id": "nexoraautocut",
        "icon": "fa-solid fa-scissors",
        "name": "NEXORA Auto Cut",
        "description": "Reuse engine Remove BG V4 NEXORA secara utuh, pecah alpha mask menjadi layer PNG transparan, pertahankan timing/transform XML Alight, lalu bungkus hasil dalam satu Group.",
        "badge": "REMOVE BG V4 · ALIGHT",
        "aliases": ["auto cut", "character cut", "alight auto cut", "nexora auto cut"],
        "runtime": {
          "mode": "module",
          "module": "nexora-auto-cut",
          "handler": "renderNexoraAutoCut"
        },
        "health": {
          "key": "module-nexora-auto-cut",
          "type": "module",
          "path": "/assets/js/features/nexora-auto-cut.js",
          "method": "HEAD",
          "strict": true,
          "checks": [
            { "label": "ui", "path": "/assets/js/features/nexora-auto-cut.js", "method": "HEAD" },
            { "label": "core", "path": "/assets/js/features/nexora-auto-cut-core.js", "method": "HEAD" },
            { "label": "remove-bg-v4", "path": "/assets/js/features/remove-background-v4.js", "method": "HEAD" }
          ]
        }
      },

      {
        "id": "fftools",
        "icon": "fa-solid fa-fire",
        "name": "FF Tools Nexora",
        "description": "Search pemain, Combat Stats BR/CS, Ban Check, Winrate lokal, dan Account Intelligence Free Fire multi-provider.",
        "badge": "FREE FIRE · OVERDRIVE",
        "aliases": ["ff", "free fire", "ff tools", "stalk ff", "ban check ff", "free fire tools", "ff stats", "search ff"],
        "runtime": {
          "mode": "module",
          "module": "imported-tools",
          "handler": "renderFfTools"
        },
        "health": {
          "key": "module-ff-tools",
          "type": "module",
          "path": "/assets/apps/ff-tools/index.html",
          "method": "HEAD",
          "strict": true,
          "checks": [
            { "label": "ui", "path": "/assets/apps/ff-tools/index.html", "method": "HEAD" },
            { "label": "engine", "path": "/assets/apps/ff-tools/engine.js", "method": "HEAD" }
          ]
        }
      },
      {
        "id": "safelinku",
        "icon": "fa-solid fa-link-slash",
        "name": "Safelinku Bypass",
        "description": "Temukan link tujuan dari Safelinku atau sfl.gl secara otomatis.",
        "badge": "DIRECT LINK",
        "aliases": [
          "bypass safelinku",
          "sfl gl",
          "direct link resolver"
        ],
        "runtime": {
          "mode": "api",
          "module": "safelinku-bypass",
          "handler": "renderSafelinkuBypass"
        },
        "health": {
          "key": "safelinku-bypass-module",
          "type": "module",
          "path": "/assets/js/features/safelinku-bypass.js",
          "method": "HEAD",
          "strict": true
        }
      },
      {
        "id": "mltools",
        "icon": "fa-solid fa-crosshairs",
        "name": "ML Tools Nexora",
        "description": "Script ML, Winrate dan Stalk MLBB",
        "badge": "MLBB",
        "runtime": {
          "mode": "module",
          "module": "imported-tools",
          "handler": "renderMlTools"
        },
        "health": {
          "key": "module-imported",
          "type": "module",
          "path": "/assets/js/features/imported-tools.js",
          "method": "HEAD",
          "strict": true
        }
      },
      {
        "id": "comicreader",
        "icon": "fa-solid fa-book-open-reader",
        "name": "Baca Komik",
        "description": "Manga, manhwa, manhua + reader",
        "badge": "FULL",
        "runtime": {
          "mode": "module",
          "module": "comic-reader",
          "handler": "renderComicReader"
        },
        "health": {
          "key": "module-comic-reader",
          "type": "module",
          "path": "/assets/js/features/comic-reader.js",
          "method": "HEAD",
          "strict": true
        }
      },
      {
        "id": "presetfinder",
        "icon": "fa-solid fa-link",
        "name": "Cari Preset AM",
        "description": "Cari link preset Alight Motion atau XML dari deskripsi, profil, dan komentar TikTok",
        "badge": "TIKTOK → AM",
        "aliases": [
          "cari preset",
          "find preset",
          "preset alight motion",
          "preset am",
          "tiktok preset"
        ],
        "runtime": {
          "mode": "api",
          "module": "preset-finder",
          "handler": "renderAmPresetFinder",
          "dependency": "https://www.tikwm.com/"
        },
        "health": {
          "key": "preset-finder-api",
          "type": "internal-api",
          "path": "/api/audit?mode=preset-finder&health=1",
          "method": "GET",
          "strict": true
        }
      },
      {
        "id": "multiai",
        "icon": "fa-solid fa-diagram-project",
        "name": "Nexora Multi-AI",
        "description": "Ask multiple AIs at once. Chat, image, audio, dan utility dalam satu hub.",
        "badge": "27 AI",
        "aliases": ["nexora ai", "multi ai", "ai hub", "ask all ai"],
        "runtime": {
          "mode": "api",
          "module": "multi-ai",
          "handler": "renderMultiAi",
          "dependency": "https://all-tools-kall.vercel.app/api/ai/provider"
        },
        "health": {
          "key": "module-multi-ai",
          "type": "module",
          "path": "/assets/js/features/multi-ai.js",
          "method": "HEAD",
          "strict": true
        }
      },
      {
        "id": "aiimage",
        "icon": "fa-solid fa-paintbrush",
        "name": "Nexora AI Image",
        "description": "Buat gambar AI memakai akun dan allowance Puter milikmu",
        "badge": "PUTER AI",
        "aliases": [
          "ai image"
        ],
        "runtime": {
          "mode": "module",
          "module": "puter-image",
          "handler": "renderPuterImage"
        },
        "health": {
          "key": "module-puter-image",
          "type": "module",
          "path": "/assets/js/features/puter-image.js",
          "method": "HEAD",
          "strict": true
        }
      },
      {
        "id": "aivideo",
        "icon": "fa-solid fa-clapperboard",
        "name": "Nexora AI Video Generator",
        "description": "Buat video dari prompt atau gambar melalui akun Puter milikmu",
        "badge": "AI VIDEO",
        "aliases": [
          "ai video generator",
          "text to video",
          "image to video"
        ],
        "runtime": {
          "mode": "module",
          "module": "puter-video",
          "handler": "renderPuterVideo"
        },
        "health": {
          "key": "module-puter-video",
          "type": "module",
          "path": "/assets/js/features/puter-video.js",
          "method": "HEAD",
          "strict": true
        }
      },
      {
        "id": "genmail",
        "icon": "fa-solid fa-envelope-open-text",
        "name": "GenMail",
        "description": "Buat email sementara, periksa inbox, dan baca pesan dengan aman",
        "badge": "TEMP MAIL",
        "aliases": [
          "advanced temp mail",
          "temp mail nexora"
        ],
        "runtime": {
          "mode": "api",
          "module": "genmail",
          "handler": "renderGenMail",
          "dependency": "https://all-tools-kall.vercel.app/api/genmail"
        },
        "health": {
          "key": "module-genmail",
          "type": "module",
          "path": "/assets/js/features/genmail.js",
          "method": "HEAD",
          "strict": true
        }
      },
      {
        "id": "danbooru",
        "icon": "fa-solid fa-photo-film",
        "name": "Danbooru Search",
        "description": "Cari ilustrasi anime berdasarkan tag dalam gallery ringan",
        "badge": "SAFE DEFAULT",
        "aliases": [
          "danbooru",
          "anime art search"
        ],
        "runtime": {
          "mode": "api",
          "module": "danbooru-search",
          "handler": "renderDanbooruSearch",
          "dependency": "https://all-tools-kall.vercel.app/api/search/danbooru"
        },
        "health": {
          "key": "module-danbooru-search",
          "type": "module",
          "path": "/assets/js/features/danbooru-search.js",
          "method": "HEAD",
          "strict": true
        }
      },
      {
        "id": "animegallery",
        "icon": "fa-regular fa-images",
        "name": "Nexora Anime Discover",
        "description": "Visual discovery anime, artist, source, dan reaction GIF dari Waifu.im + NEKOSBEST",
        "badge": "NEW · SFW",
        "aliases": [
          "anime gallery",
          "anime discover",
          "waifu im",
          "nekosbest",
          "reaction gif"
        ],
        "runtime": {
          "mode": "api",
          "handler": "openAnimeGallery",
          "dependency": "https://all-tools-kall.vercel.app/api/audit?mode=anime-gallery&provider=nekosbest&action=endpoints"
        },
        "health": {
          "key": "route-anime-gallery",
          "type": "module",
          "path": "/anime-gallery",
          "method": "HEAD",
          "strict": true
        }
      },
      {
        "id": "animetoreal",
        "icon": "fa-solid fa-person-rays",
        "name": "Anime to Real",
        "description": "Ubah ilustrasi anime dari URL menjadi gambar realistis",
        "badge": "AI TRANSFORM",
        "aliases": [
          "anime realistic"
        ],
        "runtime": {
          "mode": "api",
          "module": "anime-to-real",
          "handler": "renderAnimeToReal",
          "dependency": "https://all-tools-kall.vercel.app/api/ai/anime-to-real"
        },
        "health": {
          "key": "module-anime-to-real",
          "type": "module",
          "path": "/assets/js/features/anime-to-real.js",
          "method": "HEAD",
          "strict": true
        }
      },
      {
        "id": "aisong",
        "icon": "fa-solid fa-music",
        "name": "Nexora AI Song Generator",
        "description": "Ubah ide, cerita, dan suasana menjadi lagu yang siap diputar",
        "badge": "AI MUSIC",
        "aliases": [
          "ai song generator",
          "song generator"
        ],
        "runtime": {
          "mode": "api",
          "module": "ai-song",
          "handler": "renderAiSong",
          "dependency": "https://all-tools-kall.vercel.app/api/ai/song"
        },
        "health": {
          "key": "module-ai-song",
          "type": "module",
          "path": "/assets/js/features/ai-song.js",
          "method": "HEAD",
          "strict": true
        }
      },
      {
        "id": "elevenlabs",
        "icon": "fa-solid fa-wave-square",
        "name": "Nexora ElevenLabs Studio",
        "description": "Text to Speech, Voice Changer, Speech to Text, dan Sound FX dalam satu studio audio AI",
        "badge": "AUDIO AI",
        "aliases": [
          "elevenlabs studio",
          "text to speech",
          "voice changer",
          "speech to text",
          "sound effect generator"
        ],
        "runtime": {
          "mode": "api",
          "module": "elevenlabs-studio",
          "handler": "renderElevenLabsStudio",
          "dependency": "https://all-tools-kall.vercel.app/api/elevenlabs"
        },
        "health": {
          "key": "module-elevenlabs-studio",
          "type": "module",
          "path": "/assets/js/features/elevenlabs-studio.js",
          "method": "HEAD",
          "strict": true
        }
      },
      {
        "id": "promptgenerate",
        "icon": "fa-solid fa-pen-ruler",
        "name": "Nexora Prompt Studio",
        "description": "Susun blueprint dan prompt produksi profesional untuk image, edit, reference, dan video AI",
        "badge": "VISION AI",
        "aliases": [
          "prompt generator"
        ],
        "runtime": {
          "mode": "module",
          "module": "prompt-generator",
          "handler": "renderPromptGenerator"
        },
        "health": {
          "key": "prompt-generator-api",
          "type": "internal-api",
          "path": "/api/prompt-generator",
          "method": "HEAD",
          "strict": true
        }
      },
      {
        "id": "fakeovo",
        "icon": "fa-solid fa-wallet",
        "name": "Fake OVO",
        "description": "Simulasi OVO dari provider original dengan watermark permanen",
        "badge": "SIMULASI",
        "runtime": {
          "mode": "api",
          "module": "maker-originals",
          "handler": "renderFakeOvo",
          "dependency": "https://www.keyrafara.com/"
        },
        "health": {
          "key": "module-maker-originals",
          "type": "module",
          "path": "/assets/js/features/maker-originals.js",
          "method": "HEAD",
          "strict": true
        }
      },
      {
        "id": "quotegenerator",
        "icon": "fa-solid fa-quote-left",
        "name": "Quote Generator",
        "description": "Buat gambar quote monokrom",
        "badge": "JPG",
        "runtime": {
          "mode": "module",
          "module": "imported-tools",
          "handler": "renderQuoteGenerator"
        },
        "health": {
          "key": "module-imported",
          "type": "module",
          "path": "/assets/js/features/imported-tools.js",
          "method": "HEAD",
          "strict": true
        }
      },
      {
        "id": "carifakta",
        "icon": "fa-solid fa-magnifying-glass-chart",
        "name": "CariFakta",
        "description": "Analisis klaim dan berita menggunakan AI",
        "badge": "AI",
        "runtime": {
          "mode": "module",
          "module": "imported-tools",
          "handler": "renderCariFakta"
        },
        "health": {
          "key": "module-imported",
          "type": "module",
          "path": "/assets/js/features/imported-tools.js",
          "method": "HEAD",
          "strict": true
        }
      },
      {
        "id": "virusscan",
        "icon": "fa-solid fa-shield-virus",
        "name": "Nexora Virus Scan",
        "description": "Scan URL, file, hash, domain & IP",
        "badge": "SECURITY",
        "runtime": {
          "mode": "module",
          "module": "virus-scan",
          "handler": "renderVirusScan"
        },
        "health": {
          "key": "module-virus-scan",
          "type": "module",
          "path": "/assets/js/features/virus-scan.js",
          "method": "HEAD",
          "strict": true
        }
      },
      {
        "id": "cryptomarket",
        "icon": "fa-solid fa-chart-line",
        "name": "Crypto Market Scanner",
        "description": "Analisis candle 15m, 1 jam, mikro, makro, indikator dan risiko crypto",
        "badge": "MTF LIVE",
        "runtime": {
          "mode": "api",
          "module": "crypto-market",
          "handler": "renderCryptoMarket",
          "dependency": "https://api.coingecko.com/"
        },
        "health": {
          "key": "crypto-market-api",
          "type": "internal-api",
          "path": "/api/crypto-market?currency=usd&limit=10",
          "method": "HEAD",
          "strict": true
        }
      },
      {
        "id": "webintel",
        "icon": "fa-solid fa-satellite-dish",
        "name": "Nexora Web Intelligence",
        "description": "Audit SEO, security, performa, aksesibilitas dan teknologi website",
        "badge": "INTEL",
        "runtime": {
          "mode": "hybrid",
          "module": "web-intelligence",
          "handler": "renderWebIntelligence",
          "dependency": "https://pagespeedonline.googleapis.com/"
        },
        "health": {
          "key": "web-intelligence-api",
          "type": "internal-api",
          "path": "/api/web-intelligence?health=1",
          "method": "GET",
          "strict": true
        }
      },
      {
        "id": "ipintel",
        "icon": "fa-solid fa-network-wired",
        "name": "IP & ASN Intelligence",
        "description": "Lookup IPv4/IPv6, ASN, organisasi, negara dan benua via IPinfo Lite",
        "badge": "IPINFO",
        "aliases": [
          "ip asn intelligence"
        ],
        "runtime": {
          "mode": "api",
          "module": "ip-intelligence",
          "handler": "renderIpIntelligence",
          "dependency": "https://api.ipinfo.io/"
        },
        "health": {
          "key": "ip-intelligence-api",
          "type": "internal-api",
          "path": "/api/ip-intelligence?health=1",
          "method": "GET",
          "strict": true
        }
      },
      {
        "id": "bmkg",
        "icon": "fa-solid fa-cloud-sun-rain",
        "name": "BMKG Indonesia",
        "description": "Gempa terkini, prakiraan cuaca 3 hari dan peringatan dini cuaca dari BMKG",
        "badge": "BMKG",
        "aliases": [
          "bmkg"
        ],
        "runtime": {
          "mode": "api",
          "module": "bmkg-open-data",
          "handler": "renderBmkgIndonesia",
          "dependency": "https://data.bmkg.go.id/"
        },
        "health": {
          "key": "bmkg-open-data-api",
          "type": "internal-api",
          "path": "/api/bmkg?health=1",
          "method": "GET",
          "strict": true
        }
      },
      {
        "id": "spaceexplorer",
        "icon": "fa-solid fa-user-astronaut",
        "name": "Space Explorer",
        "description": "APOD, galeri Mars, asteroid dekat Bumi dan cuaca antariksa NASA",
        "badge": "NASA",
        "runtime": {
          "mode": "api",
          "module": "space-explorer",
          "handler": "renderSpaceExplorer",
          "dependency": "https://api.nasa.gov/"
        },
        "health": {
          "key": "space-explorer-api",
          "type": "internal-api",
          "path": "/api/space-explorer?health=1",
          "method": "GET",
          "strict": true
        }
      },
      {
        "id": "ocrintel",
        "icon": "fa-solid fa-file-lines",
        "name": "Nexora OCR Intelligence",
        "description": "Ekstrak teks dari gambar dan PDF, analisis dokumen, lalu buat searchable PDF",
        "badge": "OCR",
        "aliases": [
          "ocr intelligence"
        ],
        "runtime": {
          "mode": "api",
          "module": "ocr-intelligence",
          "handler": "renderOcrIntelligence",
          "dependency": "https://api.ocr.space/"
        },
        "health": {
          "key": "ocr-intelligence-api",
          "type": "internal-api",
          "path": "/api/ocr-intelligence?health=1",
          "method": "GET",
          "strict": true
        }
      },
      {
        "id": "documentai",
        "icon": "fa-solid fa-file-waveform",
        "name": "Nexora Document AI",
        "description": "Ringkas, analisis, ekstrak tabel, dan tanya isi dokumen dengan Nexora AI",
        "badge": "AI",
        "aliases": [
          "document ai"
        ],
        "runtime": {
          "mode": "api",
          "module": "document-ai",
          "handler": "renderDocumentAi",
          "dependency": "https://generativelanguage.googleapis.com/"
        },
        "health": {
          "key": "document-ai-api",
          "type": "internal-api",
          "path": "/api/document-ai",
          "method": "GET",
          "strict": true
        }
      },
      {
        "id": "autopdf",
        "icon": "fa-solid fa-file-pdf",
        "name": "Nexora Auto PDF",
        "description": "Ubah teks panjang menjadi PDF A5/A4 langsung di perangkat dengan pagination otomatis",
        "badge": "LOCAL PDF",
        "aliases": [
          "auto pdf",
          "text to pdf",
          "teks ke pdf"
        ],
        "runtime": {
          "mode": "module",
          "module": "text-to-pdf",
          "handler": "renderTextToPdf"
        },
        "health": {
          "key": "module-text-to-pdf",
          "type": "module",
          "path": "/assets/js/features/text-to-pdf.js",
          "method": "HEAD",
          "strict": true
        }
      },
      {
        "id": "pdflab",
        "icon": "fa-solid fa-file-circle-plus",
        "name": "PDF Lab Local",
        "description": "Merge, split, organize, rotate, watermark, isi form, metadata, dan Images → PDF langsung di perangkat",
        "badge": "100% LOCAL",
        "aliases": [
          "pdf lab",
          "merge pdf",
          "split pdf",
          "organize pdf",
          "rotate pdf",
          "watermark pdf",
          "images to pdf",
          "fill pdf form",
          "edit pdf metadata",
          "extract pdf pages"
        ],
        "runtime": {
          "mode": "module",
          "module": "pdf-lab",
          "handler": "renderPdfLab"
        },
        "health": {
          "key": "module-pdf-lab", "type": "module", "path": "/assets/js/features/pdf-lab.js", "method": "HEAD", "strict": true,
          "checks": [
            { "label": "loader", "path": "/assets/js/features/pdf-lab.js", "method": "HEAD" },
            { "label": "manifest", "path": "/assets/pdf-lab/manifest.json", "method": "HEAD" },
            { "label": "pdf-lib", "path": "/assets/pdf-lab/vendor/pdf-lib/1.17.1/pdf-lib.min.js", "method": "HEAD" },
            { "label": "pdfjs", "path": "/assets/pdf-lab/vendor/pdfjs/6.3.289/pdf.mjs", "method": "HEAD" },
            { "label": "worker", "path": "/assets/pdf-lab/vendor/pdfjs/6.3.289/pdf.worker.mjs", "method": "HEAD" }
          ]
        }
      },
      {
        "id": "svgalight",
        "icon": "fa-solid fa-vector-square",
        "name": "SVG → Alight XML",
        "description": "Konversi SVG ke XML Alight Motion melalui engine asli SVG2XML v3: Maximum Fidelity, Smart Color Groups, dan Small Patch Cleanup",
        "badge": "ENGINE v3",
        "aliases": [
          "svg alight xml",
          "anime vector atelier"
        ],
        "runtime": {
          "mode": "api",
          "module": "svg-alight",
          "handler": "renderSvgAlight",
          "dependency": "https://svgtoxml-zeta.vercel.app/"
        },
        "health": {
          "key": "svg-alight-api",
          "type": "internal-api",
          "path": "/api/svg-alight",
          "method": "GET",
          "strict": true
        }
      },
      {
        "id": "alightpremium",
        "icon": "fa-solid fa-bolt",
        "name": "Alight Motion Premium 1 Tahun",
        "description": "Request magic link lalu proses aktivasi Premium melalui API reseller",
        "badge": "1 YEAR",
        "aliases": [
          "alight premium"
        ],
        "runtime": {
          "mode": "api",
          "module": "alight-premium",
          "handler": "renderAlightPremium",
          "dependency": "/api/alight-premium"
        },
        "health": {
          "key": "alight-premium-api",
          "type": "internal-api",
          "path": "/api/alight-premium",
          "method": "HEAD",
          "strict": true
        }
      },
      {
        "id": "imagevectorizer",
        "icon": "fa-solid fa-bezier-curve",
        "name": "AUTO TRACE",
        "description": "Trace PNG, JPG, atau WEBP menjadi SVG vector dengan mode Color dan Black & White serta Ungroup path",
        "badge": "DUAL SVG",
        "aliases": [
          "auto trace",
          "image vectorizer",
          "raster to vector"
        ],
        "runtime": {
          "mode": "module",
          "module": "image-vectorizer",
          "handler": "renderImageVectorizer"
        },
        "health": {
          "key": "module-image-vectorizer",
          "type": "module",
          "path": "/assets/js/features/image-vectorizer.js",
          "method": "HEAD",
          "strict": true
        }
      },
      {
        "id": "fotolink",
        "icon": "fa-solid fa-image",
        "name": "Foto To Link",
        "description": "Upload gambar menjadi link langsung",
        "badge": "NO API KEY",
        "aliases": [
          "image upload",
          "photo link"
        ],
        "runtime": {
          "mode": "module",
          "module": "photo-to-link",
          "handler": "renderPhotoToLink"
        },
        "health": {
          "key": "module-photo-to-link",
          "type": "module",
          "path": "/assets/js/features/photo-to-link.js",
          "method": "HEAD",
          "strict": true
        }
      },
      {
        "id": "smartcutout",
        "icon": "fa-solid fa-object-ungroup",
        "name": "Nexora Smart Cutout",
        "description": "Tap objek, refine mask, lalu ekspor PNG transparan dengan MagicTouch lokal di browser",
        "badge": "LOCAL AI",
        "aliases": [
          "smart cutout",
          "magic object selector",
          "object cutout",
          "sam image"
        ],
        "runtime": {
          "mode": "module",
          "module": "smart-cutout",
          "handler": "renderNexoraSmartCutout",
          "dependency": "https://storage.googleapis.com/mediapipe-models/interactive_segmenter/magic_touch/float32/1/magic_touch.tflite"
        },
        "health": {
          "key": "module-smart-cutout",
          "type": "module",
          "path": "/assets/js/features/smart-cutout.js",
          "method": "HEAD",
          "strict": true
        }
      },
      {
        "id": "placeholderstudio",
        "icon": "fa-regular fa-image",
        "name": "Nexora Placeholder Studio",
        "description": "Buat placeholder Classic atau berbasis prompt melalui URL CDN publik",
        "badge": "NO API KEY",
        "aliases": [
          "placeholder studio",
          "placeholder image",
          "classic placeholder",
          "prompt placeholder",
          "placeholdr"
        ],
        "runtime": {
          "mode": "hybrid",
          "module": "placeholder-studio",
          "handler": "renderNexoraPlaceholderStudio",
          "dependency": "https://placeholderimage.co/"
        },
        "health": {
          "key": "module-placeholder-studio",
          "type": "module",
          "path": "/assets/js/features/placeholder-studio.js",
          "method": "HEAD",
          "strict": true
        }
      },
      {
        "id": "text2d",
        "icon": "fa-solid fa-font",
        "name": "2D Text Animate / Text FX",
        "description": "Buat XML animasi teks 2D dengan preset dan Style FX lokal",
        "badge": "XML",
        "aliases": [
          "2d text animate"
        ],
        "runtime": {
          "mode": "module",
          "module": "nexora-text-2d",
          "handler": "renderNexoraText2D"
        },
        "health": {
          "key": "module-nexora-runtime",
          "type": "module",
          "path": "/assets/js/features/nexora/nexora-runtime.js",
          "method": "HEAD",
          "strict": true
        }
      },
      {
        "id": "text3d",
        "icon": "fa-solid fa-cube",
        "name": "3D Text Animate",
        "description": "Buat XML teks 3D, extrude, offset, dan long shadow",
        "badge": "7 PRESET",
        "runtime": {
          "mode": "module",
          "module": "nexora-text-3d",
          "handler": "renderNexoraText3D"
        },
        "health": {
          "key": "module-nexora-3d",
          "type": "module",
          "path": "/assets/vendor/nexora/3d-engine.js",
          "method": "HEAD",
          "strict": true
        }
      },
      {
        "id": "textfxanimation",
        "icon": "fa-solid fa-text-height",
        "name": "Text FX Animation",
        "description": "Preset efek teks native untuk Alight Motion",
        "badge": "5 PRESET",
        "runtime": {
          "mode": "module",
          "module": "nexora-text-fx-animation",
          "handler": "renderNexoraTextFxAnimation"
        },
        "health": {
          "key": "module-nexora-fx",
          "type": "module",
          "path": "/assets/vendor/nexora/text-fx-animation-engine.js",
          "method": "HEAD",
          "strict": true
        }
      },
      {
        "id": "textvector",
        "icon": "fa-solid fa-draw-polygon",
        "name": "Text to Vector",
        "description": "Ubah font lokal menjadi path vector Alight Motion",
        "badge": "OPENTYPE",
        "runtime": {
          "mode": "module",
          "module": "nexora-text-vector",
          "handler": "renderNexoraTextVector"
        },
        "health": {
          "key": "module-nexora-vector",
          "type": "module",
          "path": "/assets/js/workers/nexora-vector-worker.js",
          "method": "HEAD",
          "strict": true
        }
      },
      {
        "id": "trimpath",
        "icon": "fa-solid fa-route",
        "name": "Trimpath Generator",
        "description": "Generator trimpath huruf dengan style, timing, dan color mapping",
        "badge": "LOCAL XML",
        "runtime": {
          "mode": "module",
          "module": "nexora-trimpath",
          "handler": "renderNexoraTrimpath"
        },
        "health": {
          "key": "module-nexora-trimpath",
          "type": "module",
          "path": "/assets/vendor/nexora/trimpath-engine.js",
          "method": "HEAD",
          "strict": true
        }
      },
      {
        "id": "logoanimate",
        "icon": "fa-solid fa-shapes",
        "name": "Logo Animate",
        "description": "Template animasi logo dan text block Alight Motion",
        "badge": "8.33S",
        "runtime": {
          "mode": "module",
          "module": "nexora-logo-animate",
          "handler": "renderNexoraLogoAnimate"
        },
        "health": {
          "key": "module-nexora-logo",
          "type": "module",
          "path": "/assets/js/features/nexora/logo-engine.js",
          "method": "HEAD",
          "strict": true
        }
      },
      {
        "id": "pwgen",
        "icon": "fa-solid fa-key",
        "name": "Password Generator",
        "description": "Password aman",
        "badge": "Secure",
        "runtime": {
          "mode": "local",
          "handler": "renderPwgen"
        },
        "health": {
          "key": "core-app",
          "type": "module",
          "path": "/assets/js/core/app.js",
          "method": "HEAD",
          "strict": true
        }
      },
      {
        "id": "morse",
        "icon": "fa-solid fa-tower-broadcast",
        "name": "Morse Code",
        "description": "Konversi morse",
        "badge": "Audio",
        "runtime": {
          "mode": "local",
          "handler": "renderMorse"
        },
        "health": {
          "key": "core-app",
          "type": "module",
          "path": "/assets/js/core/app.js",
          "method": "HEAD",
          "strict": true
        }
      },
      {
        "id": "removebg",
        "icon": "fa-solid fa-eraser",
        "name": "Remove Background",
        "description": "Hapus background",
        "badge": "AI",
        "runtime": {
          "mode": "module",
          "module": "remove-background-v4",
          "handler": "renderRemovebg"
        },
        "health": {
          "key": "module-remove-background-v4",
          "type": "module",
          "path": "/assets/js/features/remove-background-v4.js",
          "method": "HEAD",
          "strict": true
        }
      },
      {
        "id": "enhancer",
        "icon": "fa-solid fa-sliders",
        "name": "Nexora Image HD Enhancer V4",
        "description": "Upscale dan tingkatkan kualitas gambar dari link atau galeri",
        "badge": "UPSCALE",
        "aliases": [
          "image hd enhancer v4",
          "image enhancer",
          "image upscaler",
          "upscale image",
          "upscale"
        ],
        "runtime": {
          "mode": "api",
          "module": "hd4-enhancer",
          "handler": "renderHd4Enhancer",
          "dependency": "https://all-tools-kall.vercel.app/api/tools/hd4"
        },
        "health": {
          "key": "module-hd4-enhancer",
          "type": "module",
          "path": "/assets/js/features/hd4-enhancer.js",
          "method": "HEAD",
          "strict": true
        }
      },
      {
        "id": "bigjpg-nexora",
        "icon": "fa-solid fa-up-right-and-down-left-from-center",
        "name": "Big JPG Nexora",
        "description": "Upscale JPG, PNG, atau WebP 2× atau 4× dengan BigJPG langsung di dalam Nexora",
        "badge": "BIGJPG AI",
        "aliases": [
          "big jpg",
          "bigjpg",
          "bigjpg nexora",
          "ai upscaler"
        ],
        "runtime": {
          "mode": "api",
          "dependency": "https://all-tools-kall.vercel.app/api/tools/bigjpg"
        },
        "health": {
          "key": "module-bigjpg-nexora",
          "type": "module",
          "path": "/assets/js/features/bigjpg-nexora-native.js",
          "method": "HEAD",
          "strict": true
        }
      },
      {
        "id": "worldclassics",
        "name": "World Classics Reader",
        "icon": "fa-solid fa-book-open",
        "description": "Sastra klasik China, Jepang, dan Korea dengan terjemahan Indonesia, bookmark, dan riwayat membaca.",
        "badge": "NEW",
        "runtime": {
          "mode": "module",
          "module": "world-classics",
          "handler": "renderWorldClassics"
        },
        "health": {
          "key": "module-world-classics",
          "type": "module",
          "path": "/assets/js/features/world-classics/reader.js",
          "method": "HEAD",
          "strict": true
        }
      }
    ],
    "vault": [
      {
        "id": "ttquote",
        "icon": "fa-solid fa-comment-dots",
        "name": "Quote TikTok Nexora",
        "description": "Buat fake TikTok chat versi Nexora",
        "badge": "NEXORA",
        "runtime": {
          "mode": "module",
          "module": "tiktok-quote",
          "handler": "renderTiktokQuote"
        },
        "health": {
          "key": "module-tiktok-quote",
          "type": "module",
          "path": "/assets/js/features/tiktok-quote.js",
          "method": "HEAD",
          "strict": true
        }
      },
      {
        "id": "qrgen",
        "icon": "fa-solid fa-qrcode",
        "name": "QR Generator",
        "description": "Buat QR langsung di sini",
        "badge": "QR",
        "runtime": {
          "mode": "local",
          "handler": "renderQrGenerator"
        },
        "health": {
          "key": "core-app",
          "type": "module",
          "path": "/assets/js/core/app.js",
          "method": "HEAD",
          "strict": true
        }
      }
    ],
    "external": [
      {
        "id": "motioncontrol",
        "icon": "fa-solid fa-person-running",
        "name": "NEXORA Motion Control",
        "description": "Direktori layanan AI eksternal untuk transfer gerakan karakter",
        "badge": "EXTERNAL AI",
        "aliases": [
          "motion control",
          "wan animate",
          "character animation"
        ],
        "runtime": {
          "mode": "module",
          "module": "motion-control-directory",
          "handler": "renderMotionControl"
        },
        "health": {
          "key": "module-motion-control-directory",
          "type": "module",
          "path": "/assets/js/features/motion-control-directory.js",
          "method": "HEAD",
          "strict": true
        }
      },
      {
        "id": "getcode",
        "icon": "fa-solid fa-code",
        "name": "Get Code HTML",
        "description": "Extract, preview, copy & download source",
        "badge": "PRO",
        "runtime": {
          "mode": "module",
          "module": "get-code",
          "handler": "openGetCodeRoom",
          "opener": "openGetCodeRoom"
        },
        "health": {
          "key": "module-get-code",
          "type": "module",
          "path": "/assets/js/features/get-code.js",
          "method": "HEAD",
          "strict": true
        }
      },
      {
        "id": "webencryption",
        "icon": "fa-solid fa-lock",
        "name": "Web Encryption",
        "description": "Encrypt & protect HTML",
        "badge": "SECURE",
        "runtime": {
          "mode": "module",
          "module": "web-encryption",
          "handler": "renderWebEncryption"
        },
        "health": {
          "key": "module-web-encryption",
          "type": "module",
          "path": "/assets/js/features/web-encryption.js",
          "method": "HEAD",
          "strict": true
        }
      }
    ]
  }
};

  function deepFreeze(value){
    if(!value||typeof value!=="object"||Object.isFrozen(value))return value;
    Object.keys(value).forEach(function(key){deepFreeze(value[key]);});
    return Object.freeze(value);
  }

  return deepFreeze(config);
});


