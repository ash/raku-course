---
title: Labori kun dosierujoj
translations_gpt:
---

{% include menu.html %}

Por labori kun la dosiersistemo mem — kontroli, kio ekzistas, kaj krei dosierujojn — Raku uzas _vojobjektojn_. Ĉiu ĉeno povas esti transformita en unu per la metodo `.IO`, kaj la vojobjekto tiam respondas demandojn pri tiu vojo.

La plej oftaj demandoj estas, ĉu vojo ekzistas, kaj kia aĵo ĝi estas:

```raku
spurt 'greeting.txt', 'hi';

say 'greeting.txt'.IO.e; # True  — ĉu ĝi ekzistas?
say 'greeting.txt'.IO.f; # True  — ĉu ĝi estas dosiero?
say 'greeting.txt'.IO.d; # False — ĉu ĝi estas dosierujo?
```

`.e` testas ekziston, `.f` testas ordinaran dosieron, kaj `.d` testas dosierujon.

Por krei novan dosierujon, uzu `mkdir`:

```raku
mkdir 'reports';
say 'reports'.IO.d; # True
```

La sekva temo montras, kiel listigi tion, kion dosierujo enhavas.

{% include nav.html %}
