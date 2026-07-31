---
title: Listigi dosierujon
translations_gpt:
---

{% include menu.html %}

La rutino `dir` redonas la erojn de dosierujo — ĉiun kiel vojobjekton. Ilia ordo ne estas fiksita, do estas ofte ordigi la rezulton por antaŭvidebla eligo.

```raku
mkdir 'box';
spurt 'box/a.txt', '';
spurt 'box/b.txt', '';

for dir('box').sort -> $entry {
    say $entry.basename;
}
```

Ĉi tio presas la nomojn de la dosieroj en la dosierujo `box`, laŭorde:

```
a.txt
b.txt
```

Ĉiu ero estas plena vojobjekto; la metodo `basename` donas nur la finan nomon, sen la dosieruja parto. El vojobjekto vi povas fari ĉiujn samajn demandojn kiel antaŭe — `.f`, `.d`, `.e` — do vi povas, ekzemple, trairi dosierujon kaj elekti nur la dosierojn.

{% include nav.html %}
