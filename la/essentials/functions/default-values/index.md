---
title: Valores praedefiniti
---

{% include menu.html %}

Tam parametri positionis quam nominati valores praedefiniti habere possunt. Si functio valorem praedefinitum pro parametro dato habet, ille parameter omitti potest cum functionem vocas.

## Parametri positionis

Exemplum valoris praedefiniti pro functione cum parametris positionis:

```raku
sub saluta($nomen = 'Mundus') {
    dic "Salve, $nomen!";
}

saluta('Merinda');
saluta();
```

Prima vocatio nomen datum ut solum argumentum utitur et sic imprimit `Salve, Merinda!`. Secunda vocatio valorem praedefinitum utitur et imprimit `Salve, Mundus!`.

Si functio plus quam unum parametron habet, tunc valores praedefiniti tantum in fine eorum indicis adhiberi possunt:

```raku
sub f($a, $b, $c = 42, $d = 50) { . . . } # rectum
# sub f($a = 10, $b = 20, $c, $d) { . . . } # FALSUM
```

## Parametri nominati

Eadem syntaxi adhibetur ad valores praedefinitos pro parametris nominatis statuendos:

```raku
sub saluta(:$nomen = 'Mundus') {
    dic "Salve, $nomen!";
}

saluta(nomen => 'Merinda'); # Salve, Merinda!
saluta(); # Salve, Mundus!
```

Ordo parametron nominatorum non refert, ita quilibet eorum valores praedefinitos habere potest, etiam primus in indice:

```raku
sub saluta(:$salutatio = 'Salve', :$nomen) {
    dic "$salutatio, $nomen!";
}

saluta(nomen => 'Alla'); # Salve, Alla!
```

{% include nav.html %}