/* The Final Test — a self-contained, static, 100-question quiz over Parts 1–5.
 *
 * No server. Questions come from window.FINAL_TEST_QUESTIONS (final-test-questions.js).
 * The user answers one item at a time, gets immediate right/wrong feedback with an
 * explanation, cannot change a checked answer, and can only move forward. At the end
 * they see their score, an optional shake easter egg at 67, and a shareable link that
 * encodes the per-question results behind a checksum (so a better score is not trivial
 * to forge) and reopens in a read-only review mode.
 */
(function () {
  'use strict';

  // ---- interface strings ---------------------------------------------------
  // The question bank is loaded per language (final-test-questions[-xx].js);
  // these are the strings the engine itself prints. A page selects them by
  // setting window.FINAL_TEST_LANG before this script runs.
  var STRINGS = {
    en: {
      yes: 'True', no: 'False',
      part: function (n) { return 'Part ' + n; },
      counter: function (i, n) { return 'Question ' + i + ' of ' + n; },
      inputPlaceholder: 'Type your answer…',
      check: 'Check answer',
      correct: '✓ Correct', incorrect: '✗ Not quite',
      next: 'Next question →', seeResult: 'See your result →',
      answerIs: 'Answer: ',
      shareLabel: 'Your shareable result link',
      copy: 'Copy', copied: 'Copied!',
      shareNote: 'The link carries your per-question results behind a checksum, and reopens in review mode.',
      review: 'Review your answers',
      reviewIntro: 'Review — every question with the correct answer. Green means you got it right.',
      gotIt: '✓ correct', missedIt: '✗ missed',
      correctAnswer: 'Correct answer: ', youAnswered: 'You answered: ',
      backToTop: '↑ Back to top',
      noQuestions: 'The Final Test could not load its questions.',
      badLink: 'That result link is not valid, so here is a fresh test.',
      verdicts: [
        'A perfect run. You know your Raku.',
        'Outstanding — a firm command of the whole course.',
        'Strong result. A few topics to revisit.',
        'A solid pass. Review the ones you missed.',
        'A start — worth another pass through the material.',
        'Early days. Work back through the parts and try again.'
      ]
    },
    ru: {
      yes: 'Верно', no: 'Неверно',
      part: function (n) { return 'Часть ' + n; },
      counter: function (i, n) { return 'Вопрос ' + i + ' из ' + n; },
      inputPlaceholder: 'Введите ответ…',
      check: 'Проверить ответ',
      correct: '✓ Правильно', incorrect: '✗ Не совсем',
      next: 'Следующий вопрос →', seeResult: 'Посмотреть результат →',
      answerIs: 'Ответ: ',
      shareLabel: 'Ссылка на ваш результат',
      copy: 'Копировать', copied: 'Скопировано!',
      shareNote: 'Ссылка несёт ваши ответы по каждому вопросу за контрольной суммой и открывается в режиме разбора.',
      review: 'Разобрать свои ответы',
      reviewIntro: 'Разбор — все вопросы с правильными ответами. Зелёный означает, что вы ответили верно.',
      gotIt: '✓ верно', missedIt: '✗ мимо',
      correctAnswer: 'Правильный ответ: ', youAnswered: 'Вы ответили: ',
      backToTop: '↑ Наверх',
      noQuestions: 'Финальному тесту не удалось загрузить свои вопросы.',
      badLink: 'Эта ссылка на результат недействительна, поэтому вот новый тест.',
      verdicts: [
        'Безупречный проход. Вы знаете свой Raku.',
        'Великолепно — уверенное владение всем курсом.',
        'Сильный результат. Есть пара тем, к которым стоит вернуться.',
        'Уверенный зачёт. Просмотрите то, что не далось.',
        'Начало положено — материал стоит пройти ещё раз.',
        'Пока рановато. Вернитесь к частям курса и попробуйте снова.'
      ]
    },
    uk: {
      yes: 'Правда', no: 'Неправда',
      part: function (n) { return 'Частина ' + n; },
      counter: function (i, n) { return 'Запитання ' + i + ' з ' + n; },
      inputPlaceholder: 'Уведіть відповідь…',
      check: 'Перевірити відповідь',
      correct: '✓ Правильно', incorrect: '✗ Не зовсім',
      next: 'Наступне запитання →', seeResult: 'Побачити результат →',
      answerIs: 'Відповідь: ',
      shareLabel: 'Посилання на ваш результат',
      copy: 'Копіювати', copied: 'Скопійовано!',
      shareNote: 'Посилання несе ваші відповіді на кожне запитання за контрольною сумою й відкривається в режимі розбору.',
      review: 'Розібрати свої відповіді',
      reviewIntro: 'Розбір — усі запитання з правильними відповідями. Зелений означає, що ви відповіли правильно.',
      gotIt: '✓ правильно', missedIt: '✗ повз',
      correctAnswer: 'Правильна відповідь: ', youAnswered: 'Ви відповіли: ',
      backToTop: '↑ Нагору',
      noQuestions: 'Фінальному тестові не вдалося завантажити свої запитання.',
      badLink: 'Це посилання на результат недійсне, тож ось свіжий тест.',
      verdicts: [
        'Бездоганний прохід. Ви знаєте свій Raku.',
        'Блискуче — упевнене володіння всім курсом.',
        'Сильний результат. Є кілька тем, до яких варто повернутися.',
        'Впевнений залік. Перегляньте те, що не далося.',
        'Початок покладено — матеріал варто пройти ще раз.',
        'Поки зарано. Поверніться до частин курсу й спробуйте знову.'
      ]
    },
    bg: {
      yes: 'Вярно', no: 'Невярно',
      part: function (n) { return 'Част ' + n; },
      counter: function (i, n) { return 'Въпрос ' + i + ' от ' + n; },
      inputPlaceholder: 'Въведете отговор…',
      check: 'Проверка на отговора',
      correct: '✓ Правилно', incorrect: '✗ Не съвсем',
      next: 'Следващ въпрос →', seeResult: 'Вижте резултата си →',
      answerIs: 'Отговор: ',
      shareLabel: 'Връзка към вашия резултат',
      copy: 'Копиране', copied: 'Копирано!',
      shareNote: 'Връзката носи отговорите ви по всеки въпрос зад контролна сума и се отваря в режим на преглед.',
      review: 'Прегледайте отговорите си',
      reviewIntro: 'Преглед — всички въпроси с верните отговори. Зеленото означава, че сте отговорили правилно.',
      gotIt: '✓ правилно', missedIt: '✗ пропуснато',
      correctAnswer: 'Верен отговор: ', youAnswered: 'Вие отговорихте: ',
      backToTop: '↑ Нагоре',
      noQuestions: 'Финалният тест не успя да зареди въпросите си.',
      badLink: 'Тази връзка към резултат е невалидна, затова ето нов тест.',
      verdicts: [
        'Безупречно преминаване. Знаете своя Raku.',
        'Отлично — уверено владеене на целия курс.',
        'Силен резултат. Има няколко теми, към които си струва да се върнете.',
        'Уверено покритие. Прегледайте онова, което сте пропуснали.',
        'Начало е поставено — материалът заслужава още едно преминаване.',
        'Все още е рано. Върнете се към частите на курса и опитайте отново.'
      ]
    },
    nl: {
      yes: 'Waar', no: 'Onwaar',
      part: function (n) { return 'Deel ' + n; },
      counter: function (i, n) { return 'Vraag ' + i + ' van ' + n; },
      inputPlaceholder: 'Typ je antwoord…',
      check: 'Antwoord controleren',
      correct: '✓ Juist', incorrect: '✗ Net niet',
      next: 'Volgende vraag →', seeResult: 'Bekijk je resultaat →',
      answerIs: 'Antwoord: ',
      shareLabel: 'Link naar je resultaat',
      copy: 'Kopiëren', copied: 'Gekopieerd!',
      shareNote: 'De link draagt je antwoord op elke vraag achter een controlesom mee en opent in overzichtsmodus.',
      review: 'Bekijk je antwoorden',
      reviewIntro: 'Overzicht — alle vragen met de juiste antwoorden. Groen betekent dat je goed antwoordde.',
      gotIt: '✓ goed', missedIt: '✗ gemist',
      correctAnswer: 'Juiste antwoord: ', youAnswered: 'Jij antwoordde: ',
      backToTop: '↑ Naar boven',
      noQuestions: 'De eindtoets kon haar vragen niet laden.',
      badLink: 'Deze resultaatlink is ongeldig, dus hier is een nieuwe toets.',
      verdicts: [
        'Vlekkeloos gedaan. Je kent je Raku.',
        'Uitstekend — je beheerst de hele cursus met vertrouwen.',
        'Sterk resultaat. Er zijn een paar onderwerpen waar je op terug kunt komen.',
        'Solide dekking. Kijk nog eens naar wat je gemist hebt.',
        'Een begin is gemaakt — de stof verdient nog een ronde.',
        'Nog wat vroeg. Ga terug naar de delen van de cursus en probeer het opnieuw.'
      ]
    },
    de: {
      yes: 'Wahr', no: 'Falsch',
      part: function (n) { return 'Teil ' + n; },
      counter: function (i, n) { return 'Frage ' + i + ' von ' + n; },
      inputPlaceholder: 'Antwort eingeben…',
      check: 'Antwort prüfen',
      correct: '✓ Richtig', incorrect: '✗ Nicht ganz',
      next: 'Nächste Frage →', seeResult: 'Ergebnis ansehen →',
      answerIs: 'Antwort: ',
      shareLabel: 'Link zu Ihrem Ergebnis',
      copy: 'Kopieren', copied: 'Kopiert!',
      shareNote: 'Der Link trägt Ihre Antwort auf jede Frage hinter einer Prüfsumme mit sich und öffnet sich im Rückblickmodus.',
      review: 'Ihre Antworten durchsehen',
      reviewIntro: 'Rückblick — alle Fragen mit den richtigen Antworten. Grün bedeutet, dass Sie richtig lagen.',
      gotIt: '✓ richtig', missedIt: '✗ daneben',
      correctAnswer: 'Richtige Antwort: ', youAnswered: 'Sie antworteten: ',
      backToTop: '↑ Nach oben',
      noQuestions: 'Der Abschlusstest konnte seine Fragen nicht laden.',
      badLink: 'Dieser Ergebnislink ist ungültig, hier ist also ein frischer Test.',
      verdicts: [
        'Ein makelloser Durchgang. Sie können Ihr Raku.',
        'Hervorragend — Sie beherrschen den ganzen Kurs sicher.',
        'Starkes Ergebnis. Ein paar Themen sind einen zweiten Blick wert.',
        'Solide bestanden. Sehen Sie sich noch einmal an, was Sie verpasst haben.',
        'Ein Anfang — der Stoff verdient noch einen Durchgang.',
        'Noch früh. Gehen Sie die Teile noch einmal durch und versuchen Sie es erneut.'
      ]
    },
    it: {
      yes: 'Vero', no: 'Falso',
      part: function (n) { return 'Parte ' + n; },
      counter: function (i, n) { return 'Domanda ' + i + ' di ' + n; },
      inputPlaceholder: 'Scrivi la tua risposta…',
      check: 'Controlla la risposta',
      correct: '✓ Giusto', incorrect: '✗ Non proprio',
      next: 'Domanda successiva →', seeResult: 'Vedi il tuo risultato →',
      answerIs: 'Risposta: ',
      shareLabel: 'Link al tuo risultato',
      copy: 'Copia', copied: 'Copiato!',
      shareNote: 'Il link porta con sé la tua risposta a ogni domanda dietro una somma di controllo e si riapre in modalità revisione.',
      review: 'Rivedi le tue risposte',
      reviewIntro: 'Revisione — tutte le domande con le risposte corrette. Il verde significa che avevi ragione.',
      gotIt: '✓ giusto', missedIt: '✗ mancata',
      correctAnswer: 'Risposta corretta: ', youAnswered: 'Hai risposto: ',
      backToTop: '↑ Torna su',
      noQuestions: 'La prova finale non è riuscita a caricare le sue domande.',
      badLink: 'Questo link al risultato non è valido, quindi ecco una prova nuova.',
      verdicts: [
        'Un percorso impeccabile. Il tuo Raku lo sai.',
        'Eccellente — padroneggi con sicurezza tutto il corso.',
        'Buon risultato. Qualche argomento merita un altro sguardo.',
        'Solidamente superata. Rivedi ciò che ti è sfuggito.',
        'Un inizio — la materia merita ancora un giro.',
        'Ancora presto. Ripercorri le parti e riprova.'
      ]
    },
    es: {
      yes: 'Verdadero', no: 'Falso',
      part: function (n) { return 'Parte ' + n; },
      counter: function (i, n) { return 'Pregunta ' + i + ' de ' + n; },
      inputPlaceholder: 'Escribe tu respuesta…',
      check: 'Comprobar la respuesta',
      correct: '✓ Correcto', incorrect: '✗ No exactamente',
      next: 'Pregunta siguiente →', seeResult: 'Ver tu resultado →',
      answerIs: 'Respuesta: ',
      shareLabel: 'Enlace a tu resultado',
      copy: 'Copiar', copied: '¡Copiado!',
      shareNote: 'El enlace lleva consigo tu respuesta a cada pregunta tras una suma de comprobación y se vuelve a abrir en modo de revisión.',
      review: 'Revisa tus respuestas',
      reviewIntro: 'Revisión: todas las preguntas con las respuestas correctas. El verde significa que acertaste.',
      gotIt: '✓ acertada', missedIt: '✗ fallada',
      correctAnswer: 'Respuesta correcta: ', youAnswered: 'Respondiste: ',
      backToTop: '↑ Volver arriba',
      noQuestions: 'La prueba final no ha podido cargar sus preguntas.',
      badLink: 'Este enlace de resultado no es válido, así que aquí tienes una prueba nueva.',
      verdicts: [
        'Un recorrido impecable. Sabes tu Raku.',
        'Excelente: dominas con soltura el curso entero.',
        'Buen resultado. Algunos temas merecen otra ojeada.',
        'Aprobada con solidez. Repasa lo que se te escapó.',
        'Un comienzo: la materia todavía merece otra vuelta.',
        'Aún es pronto. Vuelve a recorrer las partes e inténtalo de nuevo.'
      ]
    },
    lv: {
      yes: 'Patiess', no: 'Aplams',
      part: function (n) { return 'Daļa ' + n; },
      counter: function (i, n) { return i + '. jautājums no ' + n; },
      inputPlaceholder: 'Ierakstiet savu atbildi…',
      check: 'Pārbaudīt atbildi',
      correct: '✓ Pareizi', incorrect: '✗ Ne gluži',
      next: 'Nākamais jautājums →', seeResult: 'Skatīt rezultātu →',
      answerIs: 'Atbilde: ',
      shareLabel: 'Saite uz jūsu rezultātu',
      copy: 'Kopēt', copied: 'Nokopēts!',
      shareNote: 'Saite aiz kontrolsummas nes līdzi jūsu atbildi uz katru jautājumu un atveras atkal pārskata režīmā.',
      review: 'Pārskatiet savas atbildes',
      reviewIntro: 'Pārskats: visi jautājumi ar pareizajām atbildēm. Zaļš nozīmē, ka atbildējāt pareizi.',
      gotIt: '✓ pareizi', missedIt: '✗ nepareizi',
      correctAnswer: 'Pareizā atbilde: ', youAnswered: 'Jūs atbildējāt: ',
      backToTop: '↑ Atpakaļ uz augšu',
      noQuestions: 'Noslēguma pārbaudījumam neizdevās ielādēt savus jautājumus.',
      badLink: 'Šī rezultāta saite nav derīga, tāpēc lūk jauns pārbaudījums.',
      verdicts: [
        'Nevainojams gājiens. Jūs zināt savu Raku.',
        'Izcili — viss kurss jums padodas viegli.',
        'Labs rezultāts. Dažas tēmas ir vērts apskatīt vēlreiz.',
        'Droši nokārtots. Atkārtojiet to, kas paslīdēja garām.',
        'Sākums ir. Vielu vēl ir vērts iziet vēlreiz.',
        'Vēl par agru. Izejiet daļas vēlreiz un mēģiniet no jauna.'
      ]
    },
    eo: {
      yes: 'Vera', no: 'Malvera',
      part: function (n) { return 'Parto ' + n; },
      counter: function (i, n) { return 'Demando ' + i + ' el ' + n; },
      inputPlaceholder: 'Tajpu vian respondon…',
      check: 'Kontroli la respondon',
      correct: '✓ Ĝuste', incorrect: '✗ Ne tute',
      next: 'Sekva demando →', seeResult: 'Vidi vian rezulton →',
      answerIs: 'Respondo: ',
      shareLabel: 'Via kunhavigebla ligilo al la rezulto',
      copy: 'Kopii', copied: 'Kopiita!',
      shareNote: 'La ligilo portas viajn rezultojn por ĉiu demando malantaŭ kontrolsumo kaj remalfermiĝas en la reviza reĝimo.',
      review: 'Revizu viajn respondojn',
      reviewIntro: 'Revizo — ĉiu demando kun la ĝusta respondo. Verdo signifas, ke vi trafis ĝuste.',
      gotIt: '✓ ĝuste', missedIt: '✗ maltrafite',
      correctAnswer: 'Ĝusta respondo: ', youAnswered: 'Vi respondis: ',
      backToTop: '↑ Reen supren',
      noQuestions: 'La fina testo ne povis ŝargi siajn demandojn.',
      badLink: 'Tiu rezulta ligilo ne validas, do jen freŝa testo.',
      verdicts: [
        'Senmakula trairo. Vi konas vian Raku.',
        'Elstare — firma regado de la tuta kurso.',
        'Forta rezulto. Kelkaj temoj revizitindaj.',
        'Solida trapaso. Revizu tiujn, kiujn vi maltrafis.',
        'Komenco — indas trairi la materialon ankoraŭfoje.',
        'Ankoraŭ frue. Relaboru tra la partoj kaj provu denove.'
      ]
    },
    la: {
      yes: 'Verum', no: 'Falsum',
      part: function (n) { return 'Pars ' + n; },
      counter: function (i, n) { return 'Quaestio ' + i + ' ex ' + n; },
      inputPlaceholder: 'Responsum tuum scribe…',
      check: 'Responsum examinare',
      correct: '✓ Recte', incorrect: '✗ Non prorsus',
      next: 'Quaestio proxima →', seeResult: 'Effectum tuum videre →',
      answerIs: 'Responsum: ',
      shareLabel: 'Nexus ad effectum tuum communicandum',
      copy: 'Exscribere', copied: 'Exscriptum!',
      shareNote: 'Nexus effectus tuos per singulas quaestiones post summam custodem fert, et in modo recognoscendi rursus aperitur.',
      review: 'Responsa tua recognosce',
      reviewIntro: 'Recognitio — omnis quaestio cum responso recto. Viride significat te recte respondisse.',
      gotIt: '✓ recte', missedIt: '✗ perperam',
      correctAnswer: 'Responsum rectum: ', youAnswered: 'Respondisti: ',
      backToTop: '↑ Ad summum redi',
      noQuestions: 'Probatio finalis quaestiones suas onerare non potuit.',
      badLink: 'Ille nexus effectus validus non est, itaque ecce probatio nova.',
      verdicts: [
        'Cursus sine menda. Raku tuum nosti.',
        'Egregie — totum cursum firme tenes.',
        'Effectus fortis. Pauca argumenta iterum inspicienda.',
        'Successus solidus. Recognosce ea quae te fefellerunt.',
        'Initium — materia altero transitu digna est.',
        'Adhuc mane est. Partes iterum percurre et denuo conare.'
      ]
    }
  };
  var T = STRINGS[window.FINAL_TEST_LANG] || STRINGS.en;

  function shuffled(n) {
    var a = []; for (var i = 0; i < n; i++) a.push(i);
    for (var i = n - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  var Q = (window.FINAL_TEST_QUESTIONS || []).map(function (q) {
    var c = {}; for (var k in q) c[k] = q[k];
    // Normalise a boolean into a two-option choice so the rest of the engine
    // only ever deals with option indices. True/False keep their usual order.
    if (c.type === 'boolean') {
      c.type = 'choice'; c.options = [T.yes, T.no]; c.answer = q.answer ? 0 : 1;
      c._order = [0, 1];
      return c;
    }
    // Give choice/multi a shuffled *display* order (options and answer stay as
    // authored). Rendering follows `_order` but each option keeps its original
    // index, so the correct answer's on-screen position carries no pattern and
    // cannot be shared as "it's option B".
    if ((c.type === 'choice' || c.type === 'multi') && c.options) {
      c._order = shuffled(c.options.length);
    }
    return c;
  });
  var VERSION = 1;                 // bump if the question set changes meaningfully
  var SALT = 'raku-final-test-v1'; // deters casual link forgery (not real security)
  var root = document.getElementById('final-test');
  if (!root) return;

  // ---- small helpers -------------------------------------------------------

  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
  // Inline `code` spans in prompts/explanations; everything else is escaped text.
  function fmt(s) {
    return esc(s).replace(/`([^`]+)`/g, function (_, c) { return '<code>' + c + '</code>'; });
  }
  function el(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }
  function norm(s) {
    return String(s).trim().replace(/\s+/g, ' ').toLowerCase();
  }

  // 53-bit string hash (cyrb53) — used only for the link checksum.
  function cyrb53(str, seed) {
    var h1 = 0xdeadbeef ^ seed, h2 = 0x41c6ce57 ^ seed;
    for (var i = 0, ch; i < str.length; i++) {
      ch = str.charCodeAt(i);
      h1 = Math.imul(h1 ^ ch, 2654435761);
      h2 = Math.imul(h2 ^ ch, 1597334677);
    }
    h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
    h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
    return 4294967296 * (2097151 & h2) + (h1 >>> 0);
  }

  // base64url for a Uint8Array
  function b64uEnc(bytes) {
    var s = '';
    for (var i = 0; i < bytes.length; i++) s += String.fromCharCode(bytes[i]);
    return btoa(s).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  }
  function b64uDec(str) {
    str = str.replace(/-/g, '+').replace(/_/g, '/');
    while (str.length % 4) str += '=';
    var bin = atob(str), out = new Uint8Array(bin.length);
    for (var i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
    return out;
  }

  var N = Q.length;
  var BITMAP_BYTES = Math.ceil(N / 8);

  function checksumBytes(payload) {
    // 4-byte checksum over the payload + SALT
    var s = '';
    for (var i = 0; i < payload.length; i++) s += String.fromCharCode(payload[i]);
    var h = cyrb53(s + SALT, 0x9e3779b1) >>> 0;
    return [(h >>> 24) & 255, (h >>> 16) & 255, (h >>> 8) & 255, h & 255];
  }

  function encodeResult(correctFlags) {
    var bitmap = new Uint8Array(BITMAP_BYTES);
    for (var i = 0; i < N; i++) if (correctFlags[i]) bitmap[i >> 3] |= (1 << (i & 7));
    var payload = new Uint8Array(1 + BITMAP_BYTES);
    payload[0] = VERSION;
    payload.set(bitmap, 1);
    var chk = checksumBytes(payload);
    var full = new Uint8Array(payload.length + 4);
    full.set(payload, 0);
    full.set(chk, payload.length);
    return b64uEnc(full);
  }

  function decodeResult(str) {
    try {
      var bytes = b64uDec(str);
      if (bytes.length !== 1 + BITMAP_BYTES + 4) return null;
      if (bytes[0] !== VERSION) return null;
      var payload = bytes.slice(0, 1 + BITMAP_BYTES);
      var chk = checksumBytes(payload);
      for (var i = 0; i < 4; i++) if (bytes[1 + BITMAP_BYTES + i] !== chk[i]) return null;
      var flags = [];
      for (var j = 0; j < N; j++) flags.push((bytes[1 + (j >> 3)] >> (j & 7)) & 1 ? true : false);
      return flags;
    } catch (e) { return null; }
  }

  // ---- state ---------------------------------------------------------------

  var state = {
    i: 0,                              // current question index
    answers: Q.map(function () { return { done: false, correct: false, chosen: null }; }),
    finished: false
  };

  // ---- answer checking per type -------------------------------------------

  function isCorrect(q, chosen) {
    if (q.type === 'input') {
      var accepts = Array.isArray(q.answer) ? q.answer : [q.answer];
      return accepts.some(function (a) { return norm(a) === norm(chosen == null ? '' : chosen); });
    }
    if (q.type === 'multi') {
      if (!Array.isArray(chosen)) return false;
      var want = q.answer.slice().sort().join(',');
      var got = chosen.slice().sort().join(',');
      return want === got;
    }
    // choice / boolean
    return chosen === q.answer;
  }

  // ---- rendering -----------------------------------------------------------

  function progressHtml() {
    var pct = Math.round((state.i) / N * 100);
    return '<div class="ft-progress"><div class="ft-bar"><span style="width:' + pct + '%"></span></div>' +
      '<div class="ft-count">' + esc(T.counter(state.i + 1, N)) + '</div></div>';
  }

  function optionsHtml(q) {
    if (q.type === 'input') {
      return '<div class="ft-input-wrap"><input type="text" class="ft-input" autocomplete="off" ' +
        'autocapitalize="off" spellcheck="false" placeholder="' + esc(T.inputPlaceholder) + '"></div>';
    }
    var input = q.type === 'multi' ? 'checkbox' : 'radio';
    // Render in the shuffled display order; each option keeps its ORIGINAL index
    // in data-k, so scoring and reveal work against the authored answer unchanged.
    var order = q._order || q.options.map(function (_, i) { return i; });
    var html = '<ul class="ft-options">';
    order.forEach(function (oi) {
      html += '<li class="ft-opt" data-k="' + oi + '"><label>' +
        '<input type="' + input + '" name="ft-opt"> <span class="ft-opt-text">' + fmt(q.options[oi]) + '</span>' +
        '</label></li>';
    });
    return html + '</ul>';
  }

  function renderQuestion() {
    var q = Q[state.i];
    root.innerHTML = '';
    root.appendChild(el('div', null, progressHtml()));

    var card = el('div', 'ft-card');
    card.appendChild(el('div', 'ft-meta', esc(T.part(q.part)) + (q.topic ? ' · ' + esc(q.topic) : '')));
    card.appendChild(el('div', 'ft-q', fmt(q.q)));
    if (q.code) card.appendChild(el('pre', 'ft-code', '<code>' + esc(q.code) + '</code>'));
    card.appendChild(el('div', 'ft-answer-area', optionsHtml(q)));
    var fb = el('div', 'ft-feedback');
    fb.style.display = 'none';
    card.appendChild(fb);

    var actions = el('div', 'ft-actions');
    var checkBtn = el('button', 'ft-btn ft-btn-primary', esc(T.check));
    actions.appendChild(checkBtn);
    card.appendChild(actions);
    root.appendChild(card);

    // interaction
    var chosen = q.type === 'multi' ? [] : null;

    if (q.type !== 'input') {
      card.querySelectorAll('.ft-opt').forEach(function (li) {
        li.addEventListener('click', function (e) {
          if (state.answers[state.i].done) return;
          var k = +li.getAttribute('data-k');
          if (q.type === 'multi') {
            var pos = chosen.indexOf(k);
            if (pos >= 0) { chosen.splice(pos, 1); li.classList.remove('sel'); }
            else { chosen.push(k); li.classList.add('sel'); }
            li.querySelector('input').checked = chosen.indexOf(k) >= 0;
          } else {
            chosen = k;
            card.querySelectorAll('.ft-opt').forEach(function (o) { o.classList.remove('sel'); o.querySelector('input').checked = false; });
            li.classList.add('sel');
            li.querySelector('input').checked = true;
          }
          if (e.target.tagName !== 'INPUT') e.preventDefault();
        });
      });
    }

    function doCheck() {
      var a = state.answers[state.i];
      if (a.done) return;
      if (q.type === 'input') chosen = card.querySelector('.ft-input').value;
      // require an answer
      var empty = (q.type === 'input') ? (String(chosen).trim() === '')
        : (q.type === 'multi') ? (chosen.length === 0) : (chosen === null);
      if (empty) { card.querySelector('.ft-answer-area').classList.add('ft-nudge');
        setTimeout(function () { card.querySelector('.ft-answer-area').classList.remove('ft-nudge'); }, 400); return; }

      var ok = isCorrect(q, chosen);
      a.done = true; a.correct = ok; a.chosen = chosen;
      revealAnswer(card, q, chosen, ok);

      // lock
      if (q.type === 'input') card.querySelector('.ft-input').disabled = true;

      fb.style.display = '';
      fb.className = 'ft-feedback ' + (ok ? 'ok' : 'bad');
      fb.innerHTML = '<strong>' + esc(ok ? T.correct : T.incorrect) + '</strong>' +
        (q.explain ? '<div class="ft-explain">' + fmt(q.explain) + '</div>' : '');

      actions.innerHTML = '';
      var last = state.i === N - 1;
      var nextBtn = el('button', 'ft-btn ft-btn-primary', esc(last ? T.seeResult : T.next));
      nextBtn.addEventListener('click', function () {
        if (last) { finish(); } else { state.i++; renderQuestion(); window.scrollTo(0, 0); }
      });
      actions.appendChild(nextBtn);
      nextBtn.focus();
    }

    checkBtn.addEventListener('click', doCheck);
    // Enter submits the current step
    card.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') { e.preventDefault();
        var b = actions.querySelector('button'); if (b) b.click(); }
    });
    var inp = card.querySelector('.ft-input');
    if (inp) inp.focus();
  }

  // Highlight correct/incorrect options after a check.
  function revealAnswer(card, q, chosen, ok) {
    if (q.type === 'input') {
      var wrap = card.querySelector('.ft-input-wrap');
      wrap.classList.add(ok ? 'ok' : 'bad');
      if (!ok) {
        var want = Array.isArray(q.answer) ? q.answer[0] : q.answer;
        wrap.appendChild(el('div', 'ft-correct-note', esc(T.answerIs) + '<code>' + esc(want) + '</code>'));
      }
      return;
    }
    var correctSet = q.type === 'multi' ? q.answer : [q.answer];
    card.querySelectorAll('.ft-opt').forEach(function (li) {
      var k = +li.getAttribute('data-k');
      var isRight = correctSet.indexOf(k) >= 0;
      var picked = q.type === 'multi' ? chosen.indexOf(k) >= 0 : chosen === k;
      if (isRight) li.classList.add('correct');
      if (picked && !isRight) li.classList.add('wrong');
      li.classList.add('locked');
    });
  }

  // ---- finish + result -----------------------------------------------------

  function score() { return state.answers.reduce(function (n, a) { return n + (a.correct ? 1 : 0); }, 0); }

  // The shareable-link box (input + copy button), with the copy handler wired.
  function shareBox(link) {
    var share = el('div', 'ft-share');
    share.innerHTML = '<label>' + esc(T.shareLabel) + '</label>' +
      '<div class="ft-share-row"><input type="text" readonly class="ft-link" value="' + esc(link) + '">' +
      '<button class="ft-btn ft-copy">' + esc(T.copy) + '</button></div>' +
      '<p class="ft-share-note">' + esc(T.shareNote) + '</p>';
    share.querySelector('.ft-copy').addEventListener('click', function () {
      var inp = share.querySelector('.ft-link');
      inp.select();
      try { navigator.clipboard.writeText(inp.value); } catch (e) { document.execCommand('copy'); }
      this.textContent = T.copied;
      var b = this; setTimeout(function () { b.textContent = T.copy; }, 1500);
    });
    return share;
  }

  function finish() {
    state.finished = true;
    var s = score();
    var flags = state.answers.map(function (a) { return a.correct; });
    var hash = encodeResult(flags);
    var base = location.origin + location.pathname;
    var link = base + '#r=' + hash;

    root.innerHTML = '';
    var box = el('div', 'ft-result');
    box.appendChild(el('div', 'ft-score', s + ' <span>/ ' + N + '</span>'));
    box.appendChild(el('div', 'ft-verdict', verdict(s)));

    box.appendChild(shareBox(link));

    var reviewBtn = el('button', 'ft-btn ft-btn-ghost', esc(T.review));
    // Keep the share link on the review page for your own finished run.
    reviewBtn.addEventListener('click', function () { enterReview(flags, state.answers, link); });
    box.appendChild(reviewBtn);

    root.appendChild(box);
    window.scrollTo(0, 0);

    // Easter egg: a perfect-storm 67 shakes the page for a second.
    if (s === 67) {
      document.body.classList.add('ft-shake');
      setTimeout(function () { document.body.classList.remove('ft-shake'); }, 1000);
    }

    // Put the hash in the URL so a refresh keeps the result.
    try { history.replaceState(null, '', link); } catch (e) {}
  }

  function verdict(s) {
    var p = s / N;
    if (p === 1) return T.verdicts[0];
    if (p >= 0.9) return T.verdicts[1];
    if (p >= 0.75) return T.verdicts[2];
    if (p >= 0.5) return T.verdicts[3];
    if (p >= 0.3) return T.verdicts[4];
    return T.verdicts[5];
  }

  // ---- review mode ---------------------------------------------------------

  function enterReview(flags, answers, shareLink) {
    root.innerHTML = '';
    var s = flags.reduce(function (n, f) { return n + (f ? 1 : 0); }, 0);
    root.appendChild(el('div', 'ft-review-head', '<div class="ft-score small">' + s + ' <span>/ ' + N + '</span></div>' +
      '<p>' + esc(T.reviewIntro) + '</p>'));

    // Show the share link when reviewing your own finished run, but not when a
    // visitor has arrived via a shared link (no shareLink passed then).
    if (shareLink) root.appendChild(shareBox(shareLink));

    // The 67 easter egg fires whenever a 67 result is shown — including a shared
    // 67 link — so it shakes here too, not only on the finish screen.
    if (s === 67) {
      document.body.classList.add('ft-shake');
      setTimeout(function () { document.body.classList.remove('ft-shake'); }, 1000);
    }

    Q.forEach(function (q, idx) {
      var correct = flags[idx];
      var item = el('div', 'ft-review-item ' + (correct ? 'ok' : 'bad'));
      item.appendChild(el('div', 'ft-meta', '#' + (idx + 1) + ' · ' + esc(T.part(q.part)) + (q.topic ? ' · ' + esc(q.topic) : '') +
        ' · ' + esc(correct ? T.gotIt : T.missedIt)));
      item.appendChild(el('div', 'ft-q', fmt(q.q)));
      if (q.code) item.appendChild(el('pre', 'ft-code', '<code>' + esc(q.code) + '</code>'));
      item.appendChild(el('div', 'ft-review-ans', answerText(q, answers && answers[idx])));
      if (q.explain) item.appendChild(el('div', 'ft-explain', fmt(q.explain)));
      root.appendChild(item);
    });

    var back = el('button', 'ft-btn ft-btn-ghost', esc(T.backToTop));
    back.addEventListener('click', function () { window.scrollTo(0, 0); });
    root.appendChild(back);
    window.scrollTo(0, 0);
  }

  function answerText(q, ans) {
    function show(v) {
      if (q.type === 'boolean') return (v ? T.yes : T.no);
      if (q.type === 'input') return v;
      if (q.type === 'multi') return (Array.isArray(v) ? v : []).map(function (k) { return q.options[k]; }).join(', ');
      return q.options ? q.options[v] : v;
    }
    var right = esc(T.correctAnswer) + '<strong>' + fmt(String(show(q.answer))) + '</strong>';
    if (ans && ans.done && ans.chosen != null && !ans.correct) {
      right += '<br>' + esc(T.youAnswered) + '<span class="ft-you">' + fmt(String(show(ans.chosen))) + '</span>';
    }
    return right;
  }

  // ---- boot ----------------------------------------------------------------

  if (!N) { root.innerHTML = '<p>' + esc(T.noQuestions) + '</p>'; return; }

  var m = location.hash.match(/[#&]r=([A-Za-z0-9_-]+)/);
  if (m) {
    var flags = decodeResult(m[1]);
    if (flags) { enterReview(flags, null); return; }
    root.appendChild(el('div', 'ft-badlink', esc(T.badLink)));
  }
  renderQuestion();
})();
