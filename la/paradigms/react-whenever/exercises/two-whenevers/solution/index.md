---
title: 'Solutio: Duo whenever'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
my $deposits    = Supply.from-list(100, 50, 200);
my $withdrawals = Supply.from-list(30, 120);

my $balance = 0;

react {
    whenever $deposits    { $balance += $_ }
    whenever $withdrawals { $balance -= $_ }
}

say $balance;
```

🦋 Inveni codicem fontem in archivo [two-whenevers.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/react-whenever/two-whenevers.raku).

## Exitus

```
200
```

## Commentarii

1. Duo bloci `whenever` duo supply nominata spectant et **diverse** respondent: depositiones adduntur, retractiones subtrahuntur. Unus blocus react, duo fluxus, duae reactiones distinctae — hoc est propositum habendi unum `whenever` pro fonte.

1. Blocus react solum tunc finit cum utrumque supply perfectum est, itaque ratio ultima est antequam imprimatur: `100 + 50 + 200 - 30 - 120` `200` dat. Quia additio et subtractio commutant, intertextura duorum fluxuum effectum non mutat.

1. Hic utrumque supply valores suos statim tradit, unus fluxus post alterum. In vita vera eventus rationis argentariae per tempus diffusi adveniunt — depositio nunc, retractio hora post — et duo fluxus inter se texuntur, ut in demonstratione [Duo horologia](/la/paradigms/react-whenever/two-timers). Codex idem prorsus manet: blocus react illud corpus `whenever` currit quod ad unumquemque eventum dum advenit pertinet.

{% include nav.html %}
