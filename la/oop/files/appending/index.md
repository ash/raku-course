---
title: Ad plicam addere
translations_gpt:
---

{% include menu.html %}

Ex more `spurt` substituit quidquid in archivo erat. Ut fini archivi exsistentis loco eius addas, trade argumentum nominatum `:append`:

```raku
spurt 'log.txt', "line1\n";
spurt 'log.txt', "line2\n", :append;

print slurp 'log.txt';
```

Secundum `spurt` contentum exsistens servat et novam lineam post illud addit, itaque archivum utraque linea desinit:

```
line1
line2
```

Sine `:append`, secunda vocatio archivum superscripsisset, sola `line2` relicta. Apponere utile est rebus qualia sunt archiva annalium, ubi unusquisque programmatis cursus ad tabulam crescentem addit potius quam a principio incipiat.

{% include nav.html %}
