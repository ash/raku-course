---
title: Foramen aperire
translations_gpt:
---

{% include menu.html %}

_Foramen_ coniunctio inter duo programmata per rete est. Classis Raku nuclearis pro foraminibus TCP est `IO::Socket::INET`, et nihil extra installatum tibi opus est ut ea utaris.

Ut ad servitorem remotum te coniungas, crea foramen cum hospite et portu quos attingere vis:

```raku
my $conn = IO::Socket::INET.new(:host('raku.org'), :port(80));
say 'connected';
$conn.close;
```

`IO::Socket::INET.new` coniunctionem statim aperit. Portus `80` portus normalis pro HTTP est, itaque hoc ad servitorem retialem apud `raku.org` se coniungit. Cum finivisti, `.close` coniunctionem dimittit.

> Hoc exemplum coniunctione retiali ad currendum eget. Cum feliciter coniungitur, `connected` imprimit.

Eadem classis duobus modis adhibetur: ut **cliens**, ad servitorem se coniungens ut hic ostensum, et ut **servitor**, coniunctiones advenientes auscultans (quod postea videbis). Nunc, idea tenenda est quod `IO::Socket::INET.new(:host, :port)` tibi canalem bilaterem vivum ad aliam machinam dat.

{% include nav.html %}
