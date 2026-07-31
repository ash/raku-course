---
title: Kas ir Cro
translations_gpt:
---

{% include menu.html %}

Cro ir bibliotēku kopums **pakalpojumu** būvēšanai — programmām, kas tīklā runā ar citām programmām. Vislabāk tas pazīstams ar HTTP, bet tas prot arī WebSocket, un tas visu būvē uz šīs daļas agrākajiem reaktīvajiem rīkiem: [supply](/lv/paradigms/supplies), `react` un `whenever`. Cro pieprasījumu apstrādātājs būtībā ir reakcija uz ienākošo pieprasījumu straumi. Tā mājasvietne ar pilnu dokumentāciju un piemēriem ir [cro.services](https://cro.services).

Ko Cro dod salīdzinājumā ar neapstrādātām ligzdām:

* **Maršrutēšanu** — URL ceļus var sasaistīt ar kodu, kas tos apstrādā, nevis parsēt pieprasījumus ar rokām.
* **Pieprasījuma un atbildes objektus** — vaicājuma parametrus var nolasīt un JSON nosūtīt, neliekot kopā tekstu.
* **Konkurenci** — daudzi klienti tiek apkalpoti vienlaikus, pavedienu baseinā, automātiski.
* **Saliekamību** — pakalpojumi tiek būvēti no maziem gabaliem, ko var testēt un apvienot.

To uzstāda no ekosistēmas:

```
zef install cro
```

Cro ir liels ietvars ar daudzām atkarībām, tāpēc tas prasa dažas minūtes. Ja uzstādīšana apstājas pie atkarības identitātes, ko tā nespēj atrast — kļūda, kas piemin kaut ko līdzīgu `JSON::Fast:ver<0.19+>:auth<cpan:TIMOTIMO>` —, jūsu `zef` eksemplārs ir pārāk vecs, lai pazītu arhīvu, kas apkalpo šādas vēsturiskas moduļu identitātes. Uzlabojiet pašu uzstādītāju ar `zef install zef`, atveriet svaigu termināli un palaidiet Cro uzstādīšanu vēlreiz.

Cro savij kopā visu kursu: objektorientēto projektēšanu saviem tipiem, funkcionālo stilu apstrādātājos un reaktīvo modeli savām pieprasījumu straumēm. Nākamais temats parāda mazāko iespējamo Cro pakalpojumu, lai jūs redzētu, kā šīs domas satiekas īstā tīmekļa kodā.

{% include nav.html %}
