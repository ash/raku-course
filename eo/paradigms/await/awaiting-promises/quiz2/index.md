---
title: Kvizo — await kaj sleep
translations_gpt:
---

{% include menu.html %}

Kion faras la jena programo?

```raku
my $p = start { sleep 2; 42 };
say 'waiting';
say await $p;
```

{:.quiz}
1 | Presas `waiting` tuj, poste presas `42` ĉirkaŭ du sekundojn poste
0 | Paŭzas dum du sekundoj, poste presas `waiting` kaj `42` kune
0 | Presas `waiting` kaj `42` tuj — la dormo okazas fone
0 | Presas `waiting`, poste `Promise` — vi ne povas atendi dormantan promeson

{% include quiz.html %}

<div class="extended-explanation">

`start` redonas promeson **tuj** — la bloko, kun sia `sleep`, kuras sur fona fadeno. Do `say 'waiting'` plenumiĝas senprokraste. Estas `await`, kiu blokas: la programo paŭzas tie, ĝis la fona bloko finas sian dusekundan dormeton kaj produktas `42`, kiu tiam estas presata. La paŭzo apartenas al la linio `await`, ne al la linio `start`.

</div>

{% include nav.html %}
