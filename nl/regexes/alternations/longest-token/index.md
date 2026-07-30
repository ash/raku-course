---
title: Langste token en eerste match
translations_gpt:
---

{% include menu.html %}

Wanneer twee alternatieven allebei op dezelfde plek zouden kunnen matchen, kiest de operator `|` degene die het **langste** stuk tekst matcht. Dit heet _longest-token matching_:

```raku
say 'catdog' ~~ / cat | catdog /; # ｢catdog｣
```

Ook al staat `cat` eerst en zou het matchen, `|` geeft de voorkeur aan het langere `catdog`.

Soms wil je het tegenovergestelde — de alternatieven proberen in de volgorde waarin je ze schreef en de **eerste** nemen die matcht. Dat is wat de dubbele streep `||` doet:

```raku
say 'catdog' ~~ / cat || catdog /; # ｢cat｣
```

Nu wordt `cat` als eerste geprobeerd en matcht het, dus stopt de engine daar en overweegt ze `catdog` nooit.

Gebruik `|` (langste token) wanneer je de "beste" match wilt ongeacht de volgorde — dat is de gewone keuze, en degene waar grammatica's op steunen. Gebruik `||` (eerste match) wanneer de volgorde van de alternatieven betekenisvol is en je wilt dat eerdere winnen.

{% include nav.html %}
