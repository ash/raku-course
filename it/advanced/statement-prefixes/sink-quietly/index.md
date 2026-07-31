---
title: sink e quietly
translations_gpt:
---

{% include menu.html %}

Altri due prefissi riguardano l'esecuzione di codice per i suoi effetti piuttosto che per il suo valore.

Il prefisso `sink` valuta qualcosa in _contesto sink_ — esclusivamente per i suoi effetti collaterali, scartando il risultato. È utile con un'operazione lazy che volete forzare ad eseguire:

```raku
sink (1..3).map({ print "$_ " });
print "\n"; # 1 2 3
```

Il `map` qui viene eseguito solo per la stampa che produce; `sink` si assicura che venga effettivamente eseguito e scarta la lista risultante. Senza forzarlo, un `map` lazy il cui risultato non viene mai usato potrebbe non essere eseguito affatto.

Il prefisso `quietly` esegue un blocco con i suoi **avvisi soppressi**. Il codice che normalmente stamperebbe un avviso sul flusso di errore rimane silenzioso:

```raku
my $value;
quietly {
    say $value + 1; # 1, with no "uninitialized value" warning
}
```

Sommare `1` a un `$value` non definito normalmente genera un avviso sull'uso di un valore non inizializzato, ma all'interno di `quietly` quell'avviso viene nascosto. Usatelo quando fate consapevolmente qualcosa che genera avvisi e non volete il disturbo — ma con parsimonia, poiché gli avvisi di solito indicano un errore reale.

{% include nav.html %}
