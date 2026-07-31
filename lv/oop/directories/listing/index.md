---
title: Direktorijas satura uzskaitīšana
translations_gpt:
---

{% include menu.html %}

Rutīna `dir` atgriež direktorijas ierakstus — katru kā ceļa objektu. To secība nav noteikta, tāpēc paredzamas izvades dēļ rezultātu mēdz sakārtot.

```raku
mkdir 'box';
spurt 'box/a.txt', '';
spurt 'box/b.txt', '';

for dir('box').sort -> $entry {
    say $entry.basename;
}
```

Tas secībā izdrukā direktorijā `box` esošo failu nosaukumus:

```
a.txt
b.txt
```

Katrs ieraksts ir pilns ceļa objekts; metode `basename` dod tikai pēdējo nosaukumu, bez direktorijas daļas. Ceļa objektam var uzdot visus tos pašus jautājumus, ko iepriekš — `.f`, `.d`, `.e` —, tāpēc varat, piemēram, iziet cauri direktorijai un atlasīt tikai failus.

{% include nav.html %}
