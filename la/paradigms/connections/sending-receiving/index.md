---
title: Mittere et accipere
translations_gpt:
---

{% include menu.html %}

Simul atque foramen apertum est, data per illud permutas. Mitte textum per `.print`, et lege quod redit per `.recv`:

```raku
my $conn = IO::Socket::INET.new(:host('raku.org'), :port(80));

$conn.print("GET / HTTP/1.0\r\nHost: raku.org\r\n\r\n");
my $response = $conn.recv;

$conn.close;
say $response.lines.first;
```

Hoc petitionem HTTP minimam mittit et responsum servitoris in `$response` legit. Prima linea responsi a servitore retiali linea status eius est.

> Hoc exemplum coniunctione retiali eget. Cum curritur, lineam status responsi imprimit. Quia `raku.org` HTTP simplex ad sedem securam HTTPS redirigit, illa linea redirectio est, ut `HTTP/1.1 308 Permanent Redirect`, potius quam `200 OK`. Dominium speciale `example.com` non redirigit, itaque eandem petitionem illuc dirigere simplex `HTTP/1.1 200 OK` imprimit.

Duae res in colloquio cum servitoribus referunt. Primum, protocolla retialia lineas plerumque per `\r\n` (reditum carri cum linea nova) separant, non per simplex `\n`, quapropter petitio cum `\r\n` scribitur. Secundum, `.recv` reddit quaecumque data hactenus advenerunt; pro responsis maioribus in anulo legis donec coniunctio claudatur.

Bytes mittere et bytes accipere est omne quod foramen re vera agit. Cetera omnia — HTTP, et instrumenta superioris gradus in sectionibus venientibus — super hoc simplex mittere-et-accipere aedificata sunt.

{% include nav.html %}
