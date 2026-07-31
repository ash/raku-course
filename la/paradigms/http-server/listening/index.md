---
title: Coniunctiones audire
translations_gpt:
---

{% include menu.html %}

Ut ut servitor agas, crea foramen in modo **auscultandi** per argumentum `:listen`, dans inscriptionem et portum in quibus auscultet:

```raku
my $listener = IO::Socket::INET.new(
    :listen,
    :localhost('127.0.0.1'),
    :localport(8080),
);
```

`:localhost('127.0.0.1')` in machina tua propria auscultat, et `:localport(8080)` portus est ad quem clientes se coniungere debent. Foramen nunc exspectat, sed nullus cliens adhuc advenit.

Ut coniunctionem advenientem proximam capias, voca `.accept`. Illud **moratur** donec cliens se coniungat, deinde foramen novum reddit quod illud unum colloquium repraesentat:

```raku
my $conn = $listener.accept;
say 'a client connected';
```

`$listener` plures clientes auscultare pergit, dum `$conn` canalis tuus est ad hunc unum alloquendum. Servitor verus `.accept` in anulo vocat, unumquemque clientem dum advenit tractans.

> Haec exempla in machina tua propria currunt; coniunge te ad ea ex navigatro vel alio programmate apud `127.0.0.1:8080`.

Itaque servitor mere foramen inversum est: pro `:host`/`:port` ad vocandum, `:listen` cum `:localhost`/`:localport` das ut vocationes exspectes.

{% include nav.html %}
