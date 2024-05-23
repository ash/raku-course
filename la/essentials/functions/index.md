---
title: Creare et vocare functiones in Raku
---

{% include menu.html %}

Ad ultimam sectionem primae partis cursus pervenisti. Eam perficientes, omnem scientiam necessariam habebitis ad creandum fere _quemlibet_ programmatum in Raku. Argumentum huius sectionis est _functiones_, vel _subroutinae_, vel etiam simpliciter _routinae_.

Functio est pars codicis reutilizabilis cum proprio nomine. Potes _vocare_ functiones ex diversis locis in programmate.

## Creare functionem

Ad functionem creandam, utere verbo `sub` sequente nomine functionis. Corpus functionis includitur in paribus uncis curvis.

```raku
sub saluta {
    dic 'Salve, Mundi!';
}
```

## Utendo functione

Ad functionem utendam, pone nomen eius loco ubi eam vocare debes. In Raku, definitio functionis potest collocari ante vel post locum ubi functio adhibetur.

```raku
dic 'Hoc est quod primum programma plerumque imprimit:';
saluta;    

sub saluta {
    dic 'Salve, Mundi!';
}
```

Programma utrumque nuntium imprimit:

```console
$ raku t.raku
Hoc est quod primum programma plerumque imprimit:
Salve, Mundi!
```

Nunc, alia singularia de creandis et utendis functionibus spectemus.

{% include nav.html %}