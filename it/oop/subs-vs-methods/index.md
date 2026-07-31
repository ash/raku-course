---
title: Subroutine e metodi
translations_gpt:
---

{% include menu.html %}

Ora hai due modi per impacchettare un comportamento: una _subroutine_ e un _metodo_. Si somigliano ma si usano in modo diverso.

Una subroutine sta da sola. La chiami per nome e le passi come argomenti tutto ciò che le serve:

```raku
sub area-of($radius) {
    π * $radius * $radius;
}

say area-of(2); # 12.566370614359172
```

Un metodo appartiene a una classe e viene chiamato su un oggetto con il punto. Può usare i dati dell'oggetto stesso attraverso `self` e gli accessori degli attributi, quindi quei dati non glieli passi:

```raku
class Circle {
    has $.radius;

    method area {
        π * $.radius * $.radius;
    }
}

say Circle.new(radius => 2).area; # 12.566370614359172
```

Entrambi calcolano lo stesso numero. La differenza è da dove arrivano i dati: la subroutine riceve il raggio come argomento, mentre il metodo lo legge dall'oggetto su cui è stato chiamato.

Come regola pratica, usa una subroutine per un'operazione a sé stante che si limita a trasformare i suoi argomenti, e un metodo quando il comportamento appartiene naturalmente a un oggetto e lavora con lo stato di quell'oggetto. Per routine specifiche della classe ma generiche, usa i metodi di classe.

{% include nav.html %}
