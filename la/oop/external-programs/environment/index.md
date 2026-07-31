---
title: Ambitus
translations_gpt:
---

{% include menu.html %}

Omne programma cum serie _variabilium ambitus_ incipitur — valoribus nominatis qualia `HOME`, `PATH` vel `USER` quos systema operativum praebet. In Raku in mappa dynamica `%*ENV` praesto sunt:

```raku
say %*ENV<HOME>; # directoria domestica, exempli gratia /home/anna
```

Variabilem ambitus legis `%*ENV` nomine eius indicans. Quia mappa ordinaria est, etiam inspicere potes utrum variabilis posita sit, vel eam mutare pro programmatibus quae lancias:

```raku
%*ENV<GREETING> = 'Hello';
say %*ENV<GREETING>; # Hello
```

Clavem in `%*ENV` ponens eam ambitui addis quem quodlibet programma quod deinde per `run` vel `shell` incipis heredabit, quo modo configurationem ad programma filium transmittis:

```raku
%*ENV<GREETING> = 'Hello';

my $proc = run 'sh', '-c', 'echo $GREETING', :out;
say $proc.out.slurp(:close).chomp; # Hello
```

Variabilis in ambitu programmatis tui ponitur *antequam* filius lanciatur, itaque interpres quem `run` incipit iam `GREETING` in proprio ambitu habet et illud reddere potest. Quaelibet variabilis quam ita ponis ad omne programma quod postea incipis pervenit.

Twigil `*` tibi indicat `%*ENV` variabilem dynamicam esse, sicut `$*OUT` ex parte de introitu et exitu. Paucae aliae variabiles stellatae mundum programmatis currentis describunt — `@*ARGS` argumenta lineae imperandi continet, et `$*PROGRAM-NAME` est proprium scripti nomen. Simul programmati permittunt contextum in quo lanciatum est intellegere.

{% include nav.html %}
