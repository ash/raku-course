---
title: Oggetti di tipo e istanze
translations_gpt:
---

{% include menu.html %}

Quando scrivi il nome di una classe come `Dog`, ti stai riferendo all'_oggetto di tipo_ della classe. L'oggetto di tipo rappresenta il tipo in sé, non un oggetto particolare di quel tipo. Un'_istanza_, creata con `new`, è un oggetto vero e proprio.

Raku sa distinguere i due. Il metodo `defined` restituisce `False` per un oggetto di tipo e `True` per un'istanza:

```raku
class Dog {
}

say Dog.defined;     # False
say Dog.new.defined; # True
```

Un oggetto di tipo è considerato _non definito_ perché non contiene dati concreti: è solo la descrizione di un tipo. Un'istanza è _definita_: è un oggetto vero.

Entrambi riferiscono lo stesso tipo tramite `WHAT`, che hai incontrato nella [sezione sui contenitori](/it/advanced/containers):

```raku
class Dog {
}

say Dog.WHAT;     # (Dog)
say Dog.new.WHAT; # (Dog)
```

Le parentesi attorno a `(Dog)` sono il modo in cui Raku mostra un tipo. Quindi `Dog` e `Dog.new` condividono il tipo `Dog`; la differenza è che uno è il tipo stesso e l'altro è un oggetto di quel tipo.

{% include nav.html %}
