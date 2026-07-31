---
title: Skaita kvantifikators
translations_gpt:
---

{% include menu.html %}

Kad vajadzīgs precīzs atkārtojumu skaits vai diapazons, izmantojiet kvantoru `**`, kam seko skaitlis:

```raku
say '2025' ~~ / \d ** 4 /; # ｢2025｣
```

`\d ** 4` piemeklē tieši četrus ciparus pēc kārtas.

Diapazons ar diviem punktiem atļauj mainīgu skaitu. Piemēram, `\d ** 2..3` piemeklē divus vai trīs ciparus — tik, cik ir pieejami, līdz trim:

```raku
say '12345' ~~ / \d ** 2..3 /; # ｢123｣
```

Raksturs paņēma trīs ciparus, jo trīs ir visvairāk, cik diapazons `2..3` atļauj.

Augšējo galu var arī atstāt vaļā. `\d ** 2..*` nozīmē «divi vai vairāk cipari», bet `\d ** 1..*` nozīmē to pašu, ko `\d+`.

Kvantors `**` ir vispārīgā forma; `*`, `+` un `?` ir tikai ērti saīsinājumi biežajiem gadījumiem `0..*`, `1..*` un `0..1`.

{% include nav.html %}
