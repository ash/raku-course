---
title: Malfermi kontaktskatolon
translations_gpt:
---

{% include menu.html %}

_Kontaktskatolo_ estas konekto inter du programoj tra reto. La baza klaso de Raku por TCP-kontaktskatoloj estas `IO::Socket::INET`, kaj vi bezonas nenion kroman instalitan por uzi ĝin.

Por konektiĝi al fora servilo, kreu kontaktskatolon kun la gastiganto kaj pordo, kiujn vi volas atingi:

```raku
my $conn = IO::Socket::INET.new(:host('raku.org'), :port(80));
say 'connected';
$conn.close;
```

`IO::Socket::INET.new` malfermas la konekton tuj. Pordo `80` estas la norma pordo por HTTP, do ĉi tio konektiĝas al la retservilo ĉe `raku.org`. Kiam vi finis, `.close` liberigas la konekton.

> Ĉi tiu ekzemplo bezonas funkciantan retan konekton por plenumiĝi. Kiam ĝi sukcese konektiĝas, ĝi presas `connected`.

La sama klaso estas uzata en du reĝimoj: kiel **kliento**, konektiĝanta eksteren al servilo, kiel montrite ĉi tie, kaj kiel **servilo**, aŭskultanta konektojn envenantajn (kion vi vidos poste). Nuntempe la kunportenda ideo estas, ke `IO::Socket::INET.new(:host, :port)` donas al vi vivan duflankan kanalon al alia maŝino.

{% include nav.html %}
