---
title: '`if` e `unless` come modificatori di istruzioni'
---

{% include menu.html %}

Raku offre una soluzione molto pratica quando si desidera eseguire una semplice istruzione condizionalmente. In questo caso, non è necessario creare un blocco di codice separato. Basta mettere `if` o `unless` immediatamente dopo l'istruzione. In Raku, tali costrutti sono chiamati _modificatori di istruzione_.

```raku
say 'Buon pomeriggio' if $hours > 12;

say 'Tutti i sistemi funzionano' unless $broken;
```

{% include nav.html %}