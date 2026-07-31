---
title: start kaj await
translations_gpt:
---

{% include menu.html %}

La ŝlosilvorto `start` plenumas blokon fone kaj tuj redonas `Promise`:

```raku
my $p = start { 2 + 2 };
```

La laboro okazas en la fadenaro de Raku dum via programo daŭrigas. Por akiri la rezulton, uzu `await`, kiu atendas, ke la promeso finiĝu, kaj donas al vi ĝian valoron:

```raku
my $p = start { 2 + 2 };
say await $p; # 4
```

`await` blokas ĝuste sufiĉe longe por ke la promeso kompletiĝu, poste redonas tion, kion la bloko produktis — ĉi tie, `4`. Se la laboro jam estas farita en la momento, kiam vi atendas, vi ricevas la rezulton tuj.

Ĉi tiu paro — `start` por lanĉi, `await` por kolekti — estas la kerno de promes-bazita samtempeco. Vi povas lanĉi plurajn pecojn da laboro, lasi ilin kuri samtempe kaj atendi iliajn rezultojn, kiam vi estas preta, kio estas ĝuste tio, sur kio konstruas la sekva temo.

{% include nav.html %}
