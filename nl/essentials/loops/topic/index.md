---
title: Topic variabele
---

{% include menu.html %}

`$_` is een speciale variabele die de _topic variabele_ wordt genoemd.

Overweeg de lus over een bereik:

```raku
for 1..5 -> $n {
    say $n;
}
```

De variabele `$n` kan worden weggelaten, in welk geval deze wordt vervangen door een automatisch gegenereerde variabele `$_`. Het programma is equivalent aan het volgende:

```raku
for 1..5 {
    say $_;
}
```

Zoals je je [herinnert](/nl/essentials/hello-world/), is het mogelijk om `say` als een methode te gebruiken:

```raku
for 1..5 {
    $_.say;
}
```

Het aanroepen van methoden op `$_` vereist niet dat de variabele zelf wordt genoemd. Dus, onze lus kan verder worden vereenvoudigd:

```raku
for 1..5 {
    .say;
}
```

{% include nav.html %}