---
title: Textum litteralem congruere
translations_gpt:
---

{% include menu.html %}

Simplicissimum exemplar est series litterarum et cifrarum. Tale exemplar exacte illos characteres, illo ordine, ubicumque in catena congruit:

```raku
say 'the cat sat' ~~ /cat/; # ｢cat｣
say 'Hello'       ~~ /ell/; # ｢ell｣
```

Congruentia ab initio catenae incipere non debet — machina regex exemplar in omni loco quaerit donec illud inveniat.

Congruentia felix obiectum `Match` producit. Illud `｢cat｣` in primo exemplo est quomodo tale obiectum impressum appareat: `say` `Match` ut textum quem congruit ostendit, uncis angularibus `｢ ｣` involutum. Si exemplar non adest, congruentia loco eius deficit: congruentia sagax `Nil` producit, valorem indefinitum qui in probatione Booleana pro falso habetur:

```raku
say ('the cat sat' ~~ /dog/);       # Nil
say ('the cat sat' ~~ /dog/).Bool;  # False
```

Intra regex spatia ex more **non** sunt significantia — ibi sunt solum ut exemplar legibile reddant. Itaque `/ ell /` exacte id congruit quod `/ell/` congrueret; spatia circumstantia simpliciter neglecta sunt:

```raku
say 'Hello' ~~ / ell /; # ｢ell｣
```

Quia spatium in exemplari neglegitur, spatium *verum* congruere **virgulas** poscit: quidquid in virgulas ponis litteraliter congruitur. Eadem citatio est quomodo characterem interpunctionis congruas qui aliter significationem specialem in regex haberet:

```raku
say 'a b'       ~~ / 'a b' /; # ｢a b｣
say 'price: $5' ~~ / '$' /;   # ｢$｣
```

(Pro spatiis albis etiam classe `\s` uti potes, cui mox occurres.)

{% include nav.html %}
