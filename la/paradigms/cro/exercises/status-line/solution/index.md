---
title: 'Solutio: Status per clientem'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
use Cro::HTTP::Client;

my $response = await Cro::HTTP::Client.get('http://example.com/');
say $response.status;
```

🦋 Inveni codicem fontem in archivo [status-line.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/cro/status-line.raku).

## Exitus

```
200
```

## Commentarii

1. `Cro::HTTP::Client.get` promissum reddit — petitio retialis postea finit — itaque illud `await`.

1. Obiectum responsi `.status` suum iam novit, itaque `200` directe accipimus, sine textu petitionis mittendo vel responso manu resolvendo. Compara hoc cum versione foraminis nudi: modulus omne opus protocolli pro te agit.

{% include nav.html %}
