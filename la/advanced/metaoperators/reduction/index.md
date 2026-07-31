---
title: Reductionis meta-operatores
translations_gpt:
---

{% include menu.html %}

Meta-operator reductionis scribitur ut operator regularis uncis quadratis involutus, ut `[+]` vel `[*]`. Listam valorum accipit et operatorem inter omne par eorum inserit, totam listam ad unum valorem reducens.

Exempli gratia, `[+]` omnia elementa listae addit:

```raku
my @data = 3, 5, 7, 9, 11;
say [+] @data; # 35
```

Constructio `[+] @data` aequivalet operatorem manu scribendo:

```raku
say 3 + 5 + 7 + 9 + 11; # 35
```

Quilibet idoneus operator infixus eodem modo operatur. Cum `[*]` productum listae obtines, ergo eum ad intervallum `1..$n` applicare commodus modus est factorialem computandi:

```raku
my $n = 5;
say [*] 1..$n; # 120
```

Hic, intervallum `1..$n` numeros ab 1 ad 5 producit, et `[*]` eos multiplicat: `1 * 2 * 3 * 4 * 5`, quod est _5!_.

Concatenatio filorum quoque operatur. Reductio `[~]` listam filorum in unum coniungit:

```raku
my @strings = <neun hundert fünf und zwanzig>;
say [~] @strings; # neunhundertfünfundzwanzig
```

Etiam operatores comparationis reduci possunt. `[<]` refert an valores in ordine stricte crescente sint:

```raku
say [<] 1, 2, 3; # True
```

## Reductio triangularis

Si lineam obliquam inversam intra uncos ponis, _reductionem triangularem_ obtines, quae omnes eventus intermedios servat loco solius ultimi:

```raku
say [\+] 1..5; # (1 3 6 10 15)
```

Unumquodque elementum eventus est summa partialis: `1`, deinde `1+2`, deinde `1+2+3`, et ita porro usque ad summam totius listae.

{% include nav.html %}
