---
title: Figurae partem communem habentes
translations_gpt:
---

{% include menu.html %}

## Problema

Defini partem communem `Shape` quae methodum `area` postulat, deinde fac classes `Circle` et
`Square` quae illam partem agunt.

Scribe subprogramma `describe` cuius parametrum *genere* `Shape` notatum est, ita ut
quamlibet figuram accipiat et quidquid figura non est recuset. Aream figurae
nomine classis eius notatam imprimere debet. Voca illud pro circulo radii `2` et quadrato
lateris `3`.

Subprogramma numquam inspicit quale genus figurae acceperit: quia parametrum eius
`Shape` est, obiectum certo methodum `area` habet, itaque eadem
vocatio `.area` in quacumque figura advenit operatur. Hoc est quod pars communis tibi dat —
unum genus quod postulare potes, et unum frustum codicis quod omnem classem illam agentem
uniformiter tractat.

## Exemplum

Programma imprimit:

```
Circle: 12.56636
Square: 9
```

## Solutio

✅ [Vide solutionem](solution)

{% include nav.html %}
