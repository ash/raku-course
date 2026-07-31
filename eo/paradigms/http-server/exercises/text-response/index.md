---
title: La vojo per majuskloj
translations_gpt:
---

{% include menu.html %}

## Problemo

Igu la servilon fari veran laboron per la enigo de la kliento, prefere ol redoni fiksitan ĉenon. Verku servilon, kiu, en **buklo** (kiel sur la antaŭa paĝo), legas ĉiun peton, prenas la petitan **vojon** kaj resendas ĝin **majuskligita** — do peto pri `/hello` respondas per `HELLO`. La vojo estas la dua vorto de la unua linio de la peto (`GET /hello HTTP/1.0`); forigu la komencan `/` antaŭ ol majuskligi ĝin. Ĝi daŭre servas peton post peto; haltigu ĝin per Ctrl-C.

## Ekzemplo

Peti vojon per `curl` redonas ĝin en majuskloj:

```console
$ curl http://127.0.0.1:8080/hello
HELLO
```

## Solvo

✅ [Vidu la solvon](solution)

{% include nav.html %}
