---
title: gather piger
translations_gpt:
---

{% include menu.html %}

Blocus `gather` _piger_ est: non totus simul currit. Valores solum tunc producit cum extrahuntur, quod significat `gather` seriem **infinitam** describere posse et tamen utilem esse — simpliciter valores sumere desinis cum satis habes.

Ars est effectum pigrum servare. Illum in simplici `@array` reponens conareris omnes valores simul colligere, et pro serie infinita id numquam finiret. Loco eius sequentiam in scalari serva (ubi `Seq` piger manet) et ex ea partem extrahe:

```raku
my $naturals = gather {
    my $n = 1;
    loop {
        take $n++;
    }
}

say $naturals[^5]; # (1 2 3 4 5)
```

`loop` numquam finit, sed soli quinque valores umquam producuntur, quia tot per `[^5]` petivimus. Ex fronte etiam per `.head` extrahere potes:

```raku
say (gather { my $n = 1; loop { take $n++ } }).head(3); # (1 2 3)
```

Pigritia est id quod `gather` permittit fluenta infinita tuto exemplare: nihil computatur donec opus sit, et exacte tantum sumis quantum vis.

{% include nav.html %}
