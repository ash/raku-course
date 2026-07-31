---
title: start et await
translations_gpt:
---

{% include menu.html %}

Clavis `start` blocum in fundo currit et statim `Promise` reddit:

```raku
my $p = start { 2 + 2 };
```

Opus in stagno filorum Raku fit dum programma tuum pergit. Ut effectum accipias, utere `await`, quod promissum finire exspectat valoremque eius tibi dat:

```raku
my $p = start { 2 + 2 };
say await $p; # 4
```

`await` tam diu moratur quam promisso opus est ut perficiat, deinde reddit quidquid blocus produxit — hic, `4`. Si opus iam perfectum est cum exspectas, effectum statim recipis.

Hoc par — `start` ad lanciandum, `await` ad colligendum — nucleus est simultaneitatis promissis fundatae. Plura opera lanciare potes, ea eodem tempore currere sinere, et effectus eorum exspectare cum paratus es, quod est exacte id super quo argumentum sequens aedificat.

{% include nav.html %}
