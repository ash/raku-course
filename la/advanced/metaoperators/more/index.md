---
title: Crux, hyper, et negati
translations_gpt:
---

{% include menu.html %}

Praeter reductionem et zip, Raku plures alios meta-operatores habet. Tres eorum hic cognoscendi sunt.

## Cross — `X`

Meta-operator cross `X` **omne** elementum unius listae cum **omni** elemento alterius coniungit — productum Cartesianum:

```raku
say <a b> X <1 2>; # ((a 1) (a 2) (b 1) (b 2))
```

Sicut zip, operatorem involvere potest ut in unoquoque pare agat. `X~` unumquodque par in filum coniungit, et `X*` multiplicat:

```raku
say <a b> X~ <1 2>;         # (a1 a2 b1 b2)
say (1, 2, 3) X* (10, 100); # (10 100 20 200 30 300)
```

Ubi zip duas listas simul percurrit, cross eas omni modo possibili combinat.

## Hyper — `»…«`

Meta-operator hyper operatorem ad **unumquodque elementum** listae applicat. Operator in acutis `»…«` (vel ASCII `>>…<<`) involvitur. Cum duabus listis elementum per elementum operatur, sicut zip; cum uno valore ab una parte, illum valorem per totam listam extendit:

```raku
say (1, 2, 3) »+» (10, 20, 30); # (11 22 33)
say (1, 2, 3) »*» 2;            # (2 4 6)
```

Duae sagittae non necesse est eandem partem spectent, et eorum directio decernit quid fiat cum listae longitudine differunt — apex **ad** listam spectans eam listam repeti permittit ut alteri respondeat. In scriptura ASCII `<<`/`>>`, quattuor combinationes sunt:

* `>>op<<` — neutra pars extenditur; listae iam eiusdem longitudinis esse debent, aut error est;
* `>>op>>` — lista **dextra** repetitur ut sinistrae respondeat;
* `<<op<<` — lista **sinistra** repetitur ut dextrae respondeat;
* `<<op>>` — lista **brevior** repetitur ut longiori respondeat.

```raku
say (1, 2, 3, 4) <<+>> (10, 20); # (11 22 13 24)  — 10, 20 repetitur ad 10, 20, 10, 20
```

Forma unaria quoque est, quae methodum in omni elemento vocat. `>>.uc` unumquodque filum in maiusculas convertit:

```raku
say <raku perl>>>.uc; # (RAKU PERL)
```

Operationes hyper etiam significant opus *fortasse* paralleliter fieri posse — methodum coniunctam `.hyper` postea invenies, in [sectione de programmatione concurrenti](/la/paradigms/hyper-race).

## Negatus — `!`

Ponens `!` ante operatorem comparationis eventum eius negat. Familiaris `!=` (non aequalis) est exacte hic meta-operator ad `==` applicatus, et idem operatur pro aliis operatoribus Booleanis ut `eq` et `%%`:

```raku
say 3 != 4;      # True
say 'a' !eq 'b'; # True  — non aequales ut fila
say 5 !%% 2;     # True  — 5 non est divisibilis per 2
```

Breviter, `$a !op $b` est tantum elegantior modus scribendi `!($a op $b)`.

Hoc de industria est. Dissimilis linguae deliberate minimae ut Esperanto, quae unum regularem modum exprimendi unamquamque rem quaerit, Raku libenter tibi plures dat — ergo negatus `!eq` iuxta dedicatum operatorem `ne` vivit, et ambo exacte idem significant:

```raku
say 'a' ne 'b'; # True — idem experimentum ac 'a' !eq 'b'
```

{% include nav.html %}
