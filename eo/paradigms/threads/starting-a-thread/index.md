---
title: Starti fadenon
translations_gpt:
---

{% include menu.html %}

`Thread.start` prenas blokon kaj plenumas ĝin sur nova fadeno, redonante objekton `Thread`, kiu reprezentas la kurantan laboron:

```raku
my $t = Thread.start({ say 'hello from the thread' });
```

La bloko kuras samtempe kun la kodo, kiu sekvas. La ĉefa programo **ne** atendas ĝin aŭtomate — ĝi daŭrigas tuj, kaj la fadeno faras sian laboron fone.

Unu malgranda sed grava detalo: la argumento devas esti bloko da kodo. Malplena paro da kunigaj krampoj `{ }` estas malplena **haketabelo**, ne malplena bloko, do fadeno ĉiam bezonas korpon, kiu efektive faras ion:

```raku
my $t = Thread.start({ 2 + 2 }); # bone: bloko kun korpo
```

Ĉar la ĉefa programo kaj la fadeno nun kuras samtempe, vi ne povas fidi la ordon, en kiu ilia eligo aperas — krom se vi eksplicite atendas, ke la fadeno finiĝu, kio estas la temo de la sekva paĝo.

{% include nav.html %}
