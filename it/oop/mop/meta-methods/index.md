---
title: Metametodi
translations_gpt:
---

{% include menu.html %}

Un _metametodo_ si chiama con `.^` invece che con `.`. Il `.method` ordinario esegue un metodo dell'oggetto; il `.^method` chiama un metodo sul **metaoggetto** dell'oggetto — chiede qualcosa sul tipo invece di agire come il tipo.

Hai incontrato `.^name`, che restituisce il nome del tipo:

```raku
say 42.^name; # Int
```

Altri metametodi ispezionano la struttura di un tipo. `.^attributes` elenca i suoi attributi e `.^find_method` ti dice se un metodo esiste:

```raku
class Animal {
    has $.name;
    method speak { 'generic' }
}

say Animal.^attributes.elems;          # 1
say so Animal.^find_method('speak');   # True
say so Animal.^find_method('fly');     # False
```

`.^mro` restituisce il _method resolution order_ — la catena di tipi che Raku percorre, nell'ordine, quando cerca un metodo. È la linea di ereditarietà di una classe:

```raku
class A {}
class B is A {}

say B.^mro.map(*.^name); # (B A Any Mu)
```

`B` eredita da `A`, e ogni tipo in ultima analisi da `Any` e `Mu`, quindi la chiamata di un metodo su un `B` viene cercata esattamente lungo quel percorso. Questi metametodi trasformano la struttura dei tuoi tipi in dati che puoi interrogare a runtime.

{% include nav.html %}
