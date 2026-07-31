---
title: Skatiens atpakaļ
translations_gpt:
---

{% include menu.html %}

_Lūkošanās atpakaļ_ pārbauda, kas nāk tūlīt **pirms** pašreizējās pozīcijas:

* `<?after …>` — izdodas, ja teksts aizmugurē sakrīt (pozitīva lūkošanās atpakaļ)
* `<!after …>` — izdodas, ja teksts aizmugurē **nesakrīt** (negatīva lūkošanās atpakaļ)

Tas ļauj kaut ko piemeklēt tikai tāpēc, kas ir pirms tā, neiekļaujot šo priedēkli rezultātā. Piemēram, satveriet ciparus, kas seko dolāra zīmei, taču atstājiet `$` ārpus sakritības:

```raku
if '$100' ~~ / <?after '$'> \d+ / {
    say $/; # ｢100｣
}
```

Apgalvojums `<?after '$'>` pieprasa `$` tieši pirms pašreizējās pozīcijas, un tad `\d+` piemeklē ciparus. Sakritība ir `100`, bez dolāra zīmes.

Lūkošanos uz priekšu un atpakaļ bieži apvieno. Teksta gabals, ietīts `<?after …>` un `<?before …>`, sakrīt tikai tad, kad tas atrodas starp prasītajiem kaimiņiem — ērts veids, kā izvilkt vērtību no zināma konteksta.

{% include nav.html %}
