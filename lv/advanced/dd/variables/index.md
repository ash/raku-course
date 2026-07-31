---
title: Mainīgo izgūšana
translations_gpt:
---

{% include menu.html %}

Izsauciet `dd`, lai redzētu, kas ir mainīgajā, gluži tāpat kā to darītu ar `say`:

```raku
my $var = 42;
dd $var;
```

Līdz ar vērtību `dd` parāda arī mainīgā nosaukumu:

```console
$var = 42
```

Ja mainīgajam ir deklarēts tips, parādās arī tips. Salīdziniet šīs programmas izvadi ar iepriekšējo:

```raku
my Int $var = 42;
dd $var;
```

```console
Int $var = 42
```

Šī ir galvenā atšķirība no `say`: viens `dd`, izsaukts skalāram, pasaka nosaukumu un — kad zināms — datu tipu, tā ka varat programmā iemest vairākus `dd` izsaukumus un joprojām atpazīt, kura izvade pieder kuram mainīgajam.

Var izmest arī sarežģītākas datu struktūras, piemēram, masīvus vai jaukteklus. Šeit `dd` izdrukā kodam līdzīgu vērtības atveidojumu:

```raku
my @arr = 10, 20, [1, 2, 3], 30;
dd @arr;
```

```console
[10, 20, [1, 2, 3], 30]
```

Ievērojiet, ka ligzdotais masīvs paliek skaidri saredzams (gan bez izdrukāta mainīgā nosaukuma). Tas pats darbojas ar jaukterņiem, kuru atslēgas `dd` izdrukā sakārtotā secībā:

```raku
my %hash =
    gamma => 'g',
    alpha => 'a',
    beta  => 'b';
dd %hash;
```

```console
{:alpha("a"), :beta("b"), :gamma("g")}
```

{% include nav.html %}
