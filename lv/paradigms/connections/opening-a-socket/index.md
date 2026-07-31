---
title: Ligzdas atvēršana
translations_gpt:
---

{% include menu.html %}

_Ligzda_ ir savienojums starp divām programmām tīklā. Raku pamatklase TCP ligzdām ir `IO::Socket::INET`, un tās lietošanai nekas papildus nav jāuzstāda.

Lai pieslēgtos attālinātam serverim, izveidojiet ligzdu ar vēlamo resursdatoru un portu:

```raku
my $conn = IO::Socket::INET.new(:host('raku.org'), :port(80));
say 'connected';
$conn.close;
```

`IO::Socket::INET.new` savienojumu atver uzreiz. Ports `80` ir HTTP standarta ports, tāpēc šis pieslēdzas tīmekļa serverim vietnē `raku.org`. Kad esat pabeidzis, `.close` savienojumu atbrīvo.

> Šim piemēram darbam vajadzīgs tīkla savienojums. Kad tas veiksmīgi pieslēdzas, tas izdrukā `connected`.

Vienu un to pašu klasi izmanto divos režīmos: kā **klientu**, kas pieslēdzas serverim, kā parādīts šeit, un kā **serveri**, kas klausās ienākošos savienojumus (to redzēsiet vēlāk). Pagaidām paņemamā doma ir tāda, ka `IO::Socket::INET.new(:host, :port)` dod jums dzīvu divvirzienu kanālu uz citu mašīnu.

{% include nav.html %}
