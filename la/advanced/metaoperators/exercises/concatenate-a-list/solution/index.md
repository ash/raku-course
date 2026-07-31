---
title: 'Solutio: URL construere'
translations_gpt:
---

{% include menu.html %}

Hic est possibilis solutio.

## Codex

```raku
my @parts = <http :// example .com>;

my $url = [~] @parts;
say $url;
say $url.chars;
```

🦋 Inveni codicem fontem in archivo [concatenate-a-list.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/metaoperators/concatenate-a-list.raku).

## Exitus

```
http://example.com
18
```

## Commentarii

1. Ordo cum forma citationis angularis `<...>` scribitur, quae eadem est ac `'http', '://', 'example', '.com'`.

1. Meta-operator reductionis `[~]` operatorem concatenationis filorum `~` inter omnia elementa ponit, ergo `[~] @parts` quattuor partes in unum filum `http://example.com` conglutiat.

1. Eventum in `$url` reponens nos eum reutilizare permittit: `$url.chars` deinde refert URL compositam `18` characteres longam esse.

{% include nav.html %}
