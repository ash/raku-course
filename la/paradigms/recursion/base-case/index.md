---
title: Casus fundamentalis
translations_gpt:
---

{% include menu.html %}

Omne subprogramma recursivum _casu fundamentali_ eget: condicione sub qua responsum reddit **sine** eo quod se iterum vocet. Sine illo subprogramma se in perpetuum vocaret.

In factoriali casus fundamentalis erat «`$n` est `1` vel minus». Ecce aliud exemplum, ad nihil deorsum numerans:

```raku
sub countdown($n) {
    return if $n < 1;   # casus fundamentalis: consiste
    say $n;
    countdown($n - 1);  # gradus recursivus
}

countdown(3);
```

Programma imprimit:

```
3
2
1
```

Prima linea est casus fundamentalis: cum `$n` infra `1` cadit, subprogramma statim redit et catena vocationum finit. Gradus recursivus semper **ad** casum fundamentalem movetur `countdown` cum numero minore vocans.

Si casum fundamentalem obliviscaris, vel si gradus ad eum numquam perveniunt, recursio numquam consistit et programma tandem deficit. Subprogramma recursivum rectum semper duo habet: casum fundamentalem qui recursionem finit, et gradum qui unamquamque vocationem ei propiorem facit.

{% include nav.html %}
