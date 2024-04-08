import 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.0.0/dist/cookieconsent.umd.js';

var styleElement = document.createElement('style');
styleElement.innerHTML = `
  .btn.btn-cookiePreferences {
    position: fixed;
    bottom: 0;
    top: auto;
    height: 46px;
    left: 20px;
  }
  #cc-main .cm__btn[data-role="all"] {
    background: #50ac58;
    border-color: #50ac58;
  }
`;
document.head.appendChild(styleElement);

CookieConsent.run({
    guiOptions: {
        consentModal: {
            layout: "cloud",
            position: "bottom center",
            equalWeightButtons: false,
            flipButtons: false
        },
        preferencesModal: {
            layout: "box",
            position: "right",
            equalWeightButtons: true,
            flipButtons: false
        }
    },
    categories: {
        necessary: {
            readOnly: true
        },
        analytics: {},
        marketing: {}
    },
    language: {
        default: "cs",  // Change the language code to "cs" for Czech
        autoDetect: "browser",
        translations: {
            cs: {  // Translation for Czech language
                consentModal: {
                    title: "Informace o cookies",
                    description: "Používáme cookies, abychom Vám umožnili pohodlné prohlížení webu a díky analýze provozu webu neustále zlepšovali jeho funkce, výkon a použitelnost.",
                    acceptAllBtn: "Přijmout vše",
                    acceptNecessaryBtn: "Odmítnout vše",
                    showPreferencesBtn: "Spravovat preference",

                },
                preferencesModal: {
                    title: "Centrum preferencí souhlasu",
                    acceptAllBtn: "Přijmout vše",
                    acceptNecessaryBtn: "Odmítnout vše",
                    savePreferencesBtn: "Uložit preference",
                    closeIconLabel: "Zavřít modální okno",
                    serviceCounterLabel: "Služba|Služby",
                    sections: [
                        {
                            title: "Používání cookies",
                            description: "Používáme cookies, abychom Vám umožnili pohodlné prohlížení webu a díky analýze provozu webu neustále zlepšovali jeho funkce, výkon a použitelnost"
                        },
                        {
                            title: "Nezbytné cookies <span class=\"pm__badge\">Vždy povolené</span>",
                            description: "Tyto cookies jsou potřeba, aby web fungoval správně.",
                            linkedCategory: "necessary"
                        },
                        {
                            title: "Analytické cookies",
                            description: "Pomáhají nám pochopit, jak web používáte. S jejich pomocí ho můžeme zlepšovat.",
                            linkedCategory: "analytics"
                        },
                        {
                            title: "Reklamní cookies",
                            description: "Díky těmto cookies vám můžeme zobrazovat relevantní obsah a reklamy, které pro vás mohou být zajímavé a užitečné.",
                            linkedCategory: "marketing"
                        }
                    ]
                }
            },
            sk: {  // Preklad pre slovenský jazyk
                consentModal: {
                    title: "Informácie o cookies",
                    description: "Používame cookies, aby sme vám umožnili pohodlné prezeranie webovej stránky a prostredníctvom analýzy prevádzky neustále zlepšovali jej funkcie, výkon a použiteľnosť.",
                    acceptAllBtn: "Prijímať všetko",
                    acceptNecessaryBtn: "Odmietnuť všetko",
                    showPreferencesBtn: "Spravovať preferencie",
                },
                preferencesModal: {
                    title: "Centrum preferencií súhlasu",
                    acceptAllBtn: "Prijímať všetko",
                    acceptNecessaryBtn: "Odmietnuť všetko",
                    savePreferencesBtn: "Uložiť preferencie",
                    closeIconLabel: "Zavrieť modálne okno",
                    serviceCounterLabel: "Služba|Služby",
                    sections: [
                        {
                            title: "Používanie cookies",
                            description: "Používame cookies, aby sme vám umožnili pohodlné prezeranie webovej stránky a prostredníctvom analýzy prevádzky neustále zlepšovali jej funkcie, výkon a použiteľnosť."
                        },
                        {
                            title: "Nevyhnutné cookies <span class=\"pm__badge\">Vždy povolené</span>",
                            description: "Tieto cookies sú potrebné, aby webová stránka správne fungovala.",
                            linkedCategory: "necessary"
                        },
                        {
                            title: "Analytické cookies",
                            description: "Pomáhajú nám pochopiť, ako používate webovú stránku. S ich pomocou ju môžeme zlepšovať.",
                            linkedCategory: "analytics"
                        },
                        {
                            title: "Reklamné cookies",
                            description: "Vďaka týmto cookies vám môžeme zobrazovať relevantný obsah a reklamy, ktoré pre vás môžu byť zaujímavé a užitočné.",
                            linkedCategory: "marketing"
                        }
                    ]
                }
            }
        }
    }
});
