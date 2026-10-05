/*
 * BelMath English / Russian switch.
 *
 * English is the default text written in the HTML. The language itself is
 * decided by the small inline script in every page's <head> (same logic as the
 * other BelSO sites), which sets <html lang="en|ru">.
 *
 * When the language is Russian, this script replaces:
 *   - every text node whose English text (whitespace collapsed) is a key of RU
 *     or matches one of PATTERNS;
 *   - the alt, aria-label, placeholder and title attributes the same way;
 *   - <title> and <meta name="description">;
 *   - the inner HTML of elements with data-i18n-html="key" (RU_HTML[key]),
 *     used for text that contains math.
 *
 * To add a page or change English text, add or update the matching entry here.
 * Pages with generated content can use window.BelMathI18n.t(text).
 */
(function () {
  'use strict';

  var lang = document.documentElement.lang === 'ru' ? 'ru' : 'en';

  var RU = {
    // Header, menu, footer
    'Home': 'Главная',
    'Archive': 'Архив',
    'Language': 'Язык',
    'Open menu': 'Открыть меню',
    'Close menu': 'Закрыть меню',
    'BelMath Logo': 'Логотип BelMath',
    'Making olympiad mathematics in Belarus fair and accessible': 'Делаем олимпиадную математику в Беларуси честной и доступной',
    'Olympiad problems and team selection tests': 'Олимпиадные задачи и отборы в сборную',
    'Archive since 1995': 'Архив с 1995 года',
    'Math as the foundation': 'Математика как основа',
    'Supporting physics and informatics success': 'Опора для успехов в физике и информатике',
    '© 2024 BelMath. All materials provided for educational purposes.': '© 2024 BelMath. Все материалы предоставлены в образовательных целях.',

    // Home page
    'BelMath — Belarus Olympiad Mathematics': 'BelMath: Белорусская математическая олимпиада',
    'BelMath — Belarus Mathematics Olympiad': 'BelMath: Белорусская математическая олимпиада',
    'Archive of the Belarusian Mathematical Olympiad: problems of the Republican Olympiad since 1995 and national team selection tests.':
      'Архив Белорусской математической олимпиады: задания республиканской олимпиады с 1995 года и отборы в национальную сборную.',
    'Problems of the Belarusian Mathematical Olympiad since 1995 and national team selection tests, collected in one archive.':
      'Задания Белорусской математической олимпиады с 1995 года и отборы в национальную сборную, собранные в одном архиве.',
    'Browse the Archive': 'Открыть архив',
    'Team Selection 2025': 'Отбор в сборную 2025',
    'Belarus Math Team Selection': 'Отбор в сборную Беларуси по математике',
    'RMM 2025 and IMO 2025 selection tests • 24 problems': 'Отборы на RMM 2025 и IMO 2025 • 24 задачи',
    'View': 'Смотреть',
    'Problem of the Week': 'Задача недели',
    'Weekly challenge problems to enhance your problem-solving skills': 'Каждую неделю новая задача для развития навыков решения',
    'Past Years Archive': 'Архив прошлых лет',
    'Problems of the Republican Olympiad and its third stage, as PDF files': 'Задания республиканской олимпиады и её третьего этапа в формате PDF',
    'All Years': 'Все годы',
    'BelMath by the Numbers': 'BelMath в цифрах',
    'Years in the Archive': 'Лет в архиве',
    'PDF Files': 'Файлов PDF',
    'Earliest Year': 'Самый ранний год',
    'Team Selection Problems 2025': 'Задач отбора в сборную 2025',

    // Archive
    'Problems of the Republican Olympiad, its third stage and team selection tests, as PDF files':
      'Задания республиканской олимпиады, её третьего этапа и отборов в сборную в формате PDF',
    'Back to Archive': 'Назад к архиву',
    'View PDF': 'Открыть PDF',
    'Download Problem Set': 'Скачать задания',
    'Problem Set': 'Задания',
    'Republican Olympiad': 'Республиканская олимпиада',
    'Republican Olympiad (from problems)': 'Республиканская олимпиада (другая версия)',
    'IMO Selection': 'Отбор на IMO',
    'Final Stage (Republican)': 'Заключительный этап (республиканский)',
    'Third Stage': 'Третий этап (областной)',
    'Solutions for Jury': 'Решения для жюри',
    'Round 1': '1 тур',
    'Round 2': '2 тур',
    'RMM 2025 selection test (4 problems) • IMO 2025 selection, five days (20 problems) • Algebra, Geometry, Combinatorics, Number Theory':
      'Отбор на RMM 2025 (4 задачи) • Отбор на IMO 2025, пять дней (20 задач) • Алгебра, геометрия, комбинаторика, теория чисел',

    // Geometry problems page
    'Belarus Geometry Movement': 'Белорусское геометрическое движение',
    'Search and practice olympiad geometry problems': 'Поиск и решение олимпиадных задач по геометрии',
    'Browse our collection of olympiad geometry problems': 'Наша коллекция олимпиадных задач по геометрии',
    'Search problems...': 'Поиск задач...',
    'All Topics': 'Все темы',
    'Geometry': 'Геометрия',
    'Algebra': 'Алгебра',
    'All Levels': 'Все уровни',
    'Grade 7-8': '7-8 класс',
    'Grade 9-10': '9-10 класс',
    'Grade 11': '11 класс',
    'Advanced': 'Продвинутый уровень',
    'Show more': 'Показать ещё',
    'Follow authors of "Belarus Geometry Movement":': 'Следите за авторами «Белорусского геометрического движения»:',
    'Proposed by:': 'Автор:',
    'Source:': 'Источник:',
    // Problem authors and sources (personal names stay as written)
    'Folklore': 'Фольклор',
    'Admin': 'Администратор канала',
    'Sharygin Olympiad': 'Олимпиада Шарыгина',
    'VSOSH': 'ВсОШ',
    'BSU Open Olympiad': 'Открытая олимпиада БГУ',
    'Tournament of Towns': 'Турнир городов',
    'IMO Shortlist': 'Шортлист IMO',
    'Jacobi': 'Якоби',
    'Kulinin': 'Кулинин',
    'Lemoine': 'Лемуан',
    'Yauheni Sheshukou & Igor Shmygalev': 'Yauheni Sheshukou и Igor Shmygalev',
    'Nika Maslyonchanka (discovered)': 'Nika Maslyonchanka (обнаружила)',
    'EGMO 2024, Problem 2': 'EGMO 2024, задача 2',
    'Sharygin Geometry Olympiad 2024, 8-9, Oral, P4': 'Олимпиада Шарыгина 2024, 8-9 классы, устный тур, задача 4',
    'Zubronok 2022': 'Зубрёнок 2022',
    'Original observation': 'Авторское наблюдение',
    'All-Russian Olympiad 2024, 11.4': 'Всероссийская олимпиада 2024, задача 11.4',
    'All-Russian Olympiad 2024, 9.6': 'Всероссийская олимпиада 2024, задача 9.6',
    'BSU Open Mathematical Olympiad 2024, P5': 'Открытая математическая олимпиада БГУ 2024, задача 5',
    'Classical theorem': 'Классическая теорема',
    'Classical fact': 'Классический факт',
    'EGMO observation': 'Наблюдение из EGMO',
    'Based on USA TSTST 2024': 'По мотивам USA TSTST 2024',
    'IGO 2021 Elementary, P3': 'IGO 2021, начальный уровень, задача 3',
    'Generalization of MGO 2024': 'Обобщение задачи MGO 2024',
    'Boring Problems 210': 'Boring Problems, № 210',
    'New Year problem': 'Новогодняя задача',
    'One Problem Contest': 'Олимпиада одной задачи',
    'Grade 7 Olympiad': 'Олимпиада для 7 класса',
    'Wonderful Geometry Olympiad, Junior Group, Problem 3': 'Wonderful Geometry Olympiad, младшая группа, задача 3',
    'RMM TST P4': 'Отбор на RMM, задача 4',
    'Dabromat Beauty Contest': 'Конкурс красоты Dabromat',
    'Republican Tournament of Young Mathematicians': 'Республиканский турнир юных математиков',
    'School Olympiad, Grade 8': 'Школьная олимпиада, 8 класс',
    'Multi-profile Olympiad': 'Многопрофильная олимпиада',

    // 404
    '404 — Page Not Found': 'Страница не найдена (404)',
    'URL not found': 'Страница не найдена',
    'The page you’re looking for doesn’t exist or was moved.': 'Страница, которую вы ищете, не существует или была перемещена.',
    'You will be redirected to the home page in a few seconds.': 'Через несколько секунд откроется главная страница.',
    'Go to Home': 'На главную',
    'Go Back': 'Назад',
    'Team photo (IMO 2023)': 'Фото команды (IMO 2023)'
  };

  // Text that contains math: translated as HTML so $...$ stays intact.
  var RU_HTML = {
    potw: '<strong>Задача.</strong> Для натурального числа $$m=2^k\\cdot t,$$ где $k$ является неотрицательным целым числом, а $t$ нечётно, положим $$f(m)=t^{1-k}.$$ Докажите, что для любого натурального $n$ и любого нечётного натурального $a\\le n$ число $$\\prod_{m=1}^n f(m)$$ кратно $a$.'
  };

  function plural(n, one, few, many) {
    var d10 = n % 10, d100 = n % 100;
    if (d10 === 1 && d100 !== 11) return one;
    if (d10 >= 2 && d10 <= 4 && (d100 < 12 || d100 > 14)) return few;
    return many;
  }

  var PATTERNS = [
    [/^(.+) — BelMath$/, function (m) { return t(m[1]) + ' | BelMath'; }],
    [/^(\d{4}) Archive$/, function (m) { return 'Архив ' + m[1] + ' года'; }],
    [/^Problem sets from (\d{4}) olympiads$/, function (m) { return 'Задания олимпиад ' + m[1] + ' года'; }],
    [/^Problem sets from (\d{4})-(\d{4}) academic year olympiads$/, function (m) { return 'Задания олимпиад ' + m[1] + '/' + m[2] + ' учебного года'; }],
    [/^Problem sets from the (\d{4}) Republican Mathematics Olympiad$/, function (m) { return 'Задания республиканской математической олимпиады ' + m[1] + ' года'; }],
    [/^(\d{4}) Republican Olympiad$/, function (m) { return 'Республиканская олимпиада ' + m[1] + ' года'; }],
    [/^Final Stage \(Republican\) - (\d{4})-(\d{4})$/, function (m) { return 'Заключительный этап (республиканский), ' + m[1] + '/' + m[2]; }],
    [/^Third Stage - (\d{4})-(\d{4})$/, function (m) { return 'Третий этап (областной), ' + m[1] + '/' + m[2]; }],
    [/^Grade (\d+), Round (\d+), Variant (\d+)$/, function (m) { return m[1] + ' класс, ' + m[2] + ' тур, вариант ' + m[3]; }],
    [/^Grade (\d+), Round (\d+), Belarusian, Variant (\d+)$/, function (m) { return m[1] + ' класс, ' + m[2] + ' тур, на белорусском языке, вариант ' + m[3]; }],
    [/^Grade (\d+), Round (\d+), Solutions$/, function (m) { return m[1] + ' класс, ' + m[2] + ' тур, решения'; }],
    [/^Grade (\d+), Round (\d+), Participants (\d{4})$/, function (m) { return m[1] + ' класс, ' + m[2] + ' тур, задания для участников ' + m[3]; }],
    [/^Round (\d+), Variant (\d+), Grade (\d+)( \(Blank\))?$/, function (m) {
      return m[3] + ' класс, ' + m[1] + ' тур, вариант ' + m[2] + (m[4] ? ', бланк для жюри' : '');
    }],
    [/^(\d+) PDF files?$/, function (m) { var n = +m[1]; return n + ' ' + plural(n, 'файл', 'файла', 'файлов') + ' PDF'; }],
    [/^Problem #(\d+)$/, function (m) { return 'Задача №' + m[1]; }],
    [/^Problem (\d+)$/, function (m) { return 'Задача ' + m[1]; }],
    [/^BelMO stage (III|IV), Problem ([\d.]+)$/, function (m) { return 'БелМО, ' + m[1] + ' этап, задача ' + m[2]; }],
    [/^Olympiad 239, Problem ([\d.-]+)$/, function (m) { return 'Олимпиада 239, задача ' + m[1]; }],
    [/^(IMO \d{4}|IZhO \d{4}|USA TSTST \d{4}|Taiwan TST \d{4}), P(\d+)$/, function (m) { return m[1] + ', задача ' + m[2]; }]
  ];

  function t(text) {
    if (lang !== 'ru' || text == null) return text;
    var key = String(text).replace(/\s+/g, ' ').trim();
    if (!key) return text;
    if (Object.prototype.hasOwnProperty.call(RU, key)) return RU[key];
    for (var i = 0; i < PATTERNS.length; i++) {
      var m = key.match(PATTERNS[i][0]);
      if (m) return PATTERNS[i][1](m);
    }
    return text;
  }

  var SKIP = { SCRIPT: 1, STYLE: 1, NOSCRIPT: 1, TEXTAREA: 1, 'MJX-CONTAINER': 1 };

  function translateTextNodes(root) {
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: function (node) {
        for (var el = node.parentNode; el && el !== root.parentNode; el = el.parentNode) {
          if (el.nodeType === 1 && (SKIP[el.nodeName.toUpperCase()] || el.hasAttribute('data-i18n-html'))) {
            return NodeFilter.FILTER_REJECT;
          }
        }
        return /\S/.test(node.nodeValue) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
      }
    });
    var nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    for (var i = 0; i < nodes.length; i++) {
      var v = nodes[i].nodeValue;
      var out = t(v);
      if (out !== v) {
        var lead = v.match(/^\s*/)[0], trail = v.match(/\s*$/)[0];
        nodes[i].nodeValue = lead + out + trail;
      }
    }
  }

  function translateAttributes(root) {
    var attrs = ['alt', 'aria-label', 'placeholder', 'title'];
    for (var a = 0; a < attrs.length; a++) {
      var els = root.querySelectorAll('[' + attrs[a] + ']');
      for (var i = 0; i < els.length; i++) {
        var v = els[i].getAttribute(attrs[a]);
        var out = t(v);
        if (out !== v) els[i].setAttribute(attrs[a], out);
      }
    }
  }

  function translate(root) {
    if (lang !== 'ru') return;
    root = root || document.body;
    translateTextNodes(root);
    translateAttributes(root);
  }

  function translatePage() {
    document.title = t(document.title);
    var desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', t(desc.getAttribute('content')));
    var htmlEls = document.querySelectorAll('[data-i18n-html]');
    var changed = [];
    for (var i = 0; i < htmlEls.length; i++) {
      var html = RU_HTML[htmlEls[i].getAttribute('data-i18n-html')];
      if (html) { htmlEls[i].innerHTML = html; changed.push(htmlEls[i]); }
    }
    translate(document.body);
    if (changed.length && window.MathJax && typeof window.MathJax.typesetPromise === 'function') {
      window.MathJax.typesetPromise(changed).catch(function () {});
    }
  }

  function setupSwitch() {
    var buttons = document.querySelectorAll('[data-set-lang]');
    for (var i = 0; i < buttons.length; i++) {
      var b = buttons[i];
      b.setAttribute('aria-pressed', b.getAttribute('data-set-lang') === lang ? 'true' : 'false');
      b.addEventListener('click', function () {
        var chosen = this.getAttribute('data-set-lang');
        try { localStorage.setItem('lang', chosen); } catch (e) {}
        if (chosen === lang) return;
        // Drop a ?lang= parameter so the stored choice wins after reload.
        var params = new URLSearchParams(location.search);
        if (!params.has('lang')) { location.reload(); return; }
        params.delete('lang');
        var q = params.toString();
        location.href = location.pathname + (q ? '?' + q : '') + location.hash;
      });
    }
  }

  window.BelMathI18n = { lang: lang, t: t, translate: translate };

  try {
    if (lang === 'ru') translatePage();
    setupSwitch();
  } finally {
    var h = document.documentElement;
    h.className = h.className.replace(/\s*i18n-pending/g, '');
  }
})();
