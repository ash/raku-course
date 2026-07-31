---
title: Directorium enumerare
translations_gpt:
---

{% include menu.html %}

Procedura `dir` ingressus directoriae reddit — unumquemque ut obiectum semitae. Ordo eorum non est fixus, itaque solet effectus ordinari ut exitus praedici possit.

```raku
mkdir 'box';
spurt 'box/a.txt', '';
spurt 'box/b.txt', '';

for dir('box').sort -> $entry {
    say $entry.basename;
}
```

Hoc nomina archivorum in directoria `box` ordine imprimit:

```
a.txt
b.txt
```

Unusquisque ingressus plenum obiectum semitae est; methodus `basename` solum nomen ultimum dat, sine parte directoriae. Ex obiecto semitae easdem quaestiones ac prius petere potes — `.f`, `.d`, `.e` — itaque potes, exempli gratia, per directoriam ambulare et sola archiva eligere.

{% include nav.html %}
