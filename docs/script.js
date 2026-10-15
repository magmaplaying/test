/* =========================================================
   Вяра Христова – счетоводител
   1. Translations (БГ / EN)
   2. Tax deadlines: works out the next dates from today
   3. Contact form (sends through Formspree)
   ========================================================= */

/* ---------- 1. Translations ---------- */

// Every element with data-i18n="key" gets its text from here.
// The Bulgarian text is also written in index.html, so the page works even without JavaScript.
const TEXT = {
  bg: {
    skip: "Към съдържанието",
    brandName: "Вяра Христова",
    navServices: "Услуги",
    navDeadlines: "Срокове",
    navAbout: "За мен",
    navContact: "Контакт",
    heroHello: "Здравейте,",
    heroTitle: "аз съм Вяра — <em>вашият счетоводител.</em>",
    heroLead: "Водя счетоводството на малки фирми, семейни бизнеси и хора на свободна практика. Вие се занимавате с работата си, а аз — с документите, декларациите и сроковете.",
    heroCta: "Пишете ми",
    heroCall: "Обадете се:",
    noteLabel: "Следващ срок",
    servicesTitle: "С какво мога да помогна",
    servicesSub: "Четири неща, които правя всеки ден. Ако не сте сигурни от кое имате нужда — пишете ми и ще го изясним заедно.",
    s1Title: "Счетоводство на фирми",
    s1Body: "Месечно осчетоводяване на документи, ДДС декларации и дневници, годишен финансов отчет (ГФО) и годишна данъчна декларация.",
    s1For: "За ЕООД, ООД и ЕТ",
    s2Title: "Заплати и персонал",
    s2Body: "Ведомости за заплати, трудови договори, болнични и отпуски, месечни декларации за осигуровки към НАП.",
    s2For: "За работодатели с 1 или повече служители",
    s3Title: "Регистрация на фирма",
    s3Body: "Помагам да изберете правната форма, подготвям документите за Търговския регистър и регистрация по ДДС, когато е нужна.",
    s3For: "За всеки, който започва собствен бизнес",
    s4Title: "Лични данъчни декларации",
    s4Body: "Годишна декларация за доходите — от наем, хонорари, свободна практика или доходи от чужбина. Попълвам и подавам вместо вас.",
    s4For: "За физически лица и свободни професии",
    deadlinesTitle: "Сроковете, които следя вместо вас",
    deadlinesSub: "Най-важните дати в годината на един малък бизнес. Подредени са по това кой срок идва първи.",
    deadlinesNote: "Когато срокът се падне в събота или неделя, той се премества на следващия работен ден. Списъкът е ориентировъчен — за вашия случай ще ви кажа точните дати.",
    aboutTitle: "Малко за мен",
    aboutP1: "Казвам се Вяра Христова и работя като счетоводител. Обичам реда в документите, но още повече обичам, когато клиентите ми спят спокойно, защото знаят, че всичко е подадено навреме.",
    aboutP2: "Работя лично с всеки клиент — няма да ви прехвърлят между служители. Ако имате въпрос, говорите директно с мен и получавате отговор на разбираем език, без излишни термини.",
    stepsTitle: "Как започваме",
    step1Title: "Пишете или се обадете",
    step1Body: "Разкажете ми накратко с какво се занимавате и от какво имате нужда.",
    step2Title: "Среща и документи",
    step2Body: "Виждаме се или говорим онлайн. Преглеждам документите ви и ви казвам какво ще правя и колко ще струва.",
    step3Title: "Договор и спокойствие",
    step3Body: "Подписваме договор и от следващия месец поемам счетоводството. Вие само ми изпращате документите.",
    contactTitle: "Пишете ми",
    contactSub: "Отговарям в рамките на един работен ден. Първият разговор е безплатен.",
    phoneLabel: "Телефон",
    emailLabel: "Имейл",
    addressLabel: "Адрес",
    address: "ул. „Примерна“ 1, гр. София",
    hoursLabel: "Работно време",
    hours: "Понеделник – петък, 9:00 – 18:00",
    fName: "Вашето име",
    fContact: "Телефон или имейл",
    fTopic: "За какво става дума?",
    fOther: "Друго",
    fMsg: "Съобщение",
    fMsgPh: "Например: имам ЕООД с двама служители и търся нов счетоводител.",
    fSend: "Изпрати съобщението",
    fSending: "Изпращане…",
    fSent: "Съобщението е изпратено. Ще ви отговоря до един работен ден.",
    fMissing: "Попълнете име, телефон или имейл и съобщение.",
    fFailed: "Съобщението не беше изпратено. Опитайте отново или се обадете на +359 88 000 0000.",
    fNotSetUp: "Формата още не е свързана. Моля, обадете се на +359 88 000 0000 или пишете на vyara@example.com.",
    footerRole: "счетоводител",
    toTop: "Към началото ↑",
  },
  en: {
    skip: "Skip to content",
    brandName: "Vyara Hristova",
    navServices: "Services",
    navDeadlines: "Deadlines",
    navAbout: "About",
    navContact: "Contact",
    heroHello: "Hello,",
    heroTitle: "I'm Vyara — <em>your accountant.</em>",
    heroLead: "I keep the books for small companies, family businesses and freelancers in Bulgaria. You focus on your work; I take care of the paperwork, the tax returns and the deadlines.",
    heroCta: "Write to me",
    heroCall: "Call:",
    noteLabel: "Next deadline",
    servicesTitle: "How I can help",
    servicesSub: "Four things I do every day. Not sure which one you need? Write to me and we'll work it out together.",
    s1Title: "Bookkeeping for companies",
    s1Body: "Monthly bookkeeping, VAT returns and ledgers, annual financial statements and the annual corporate tax return.",
    s1For: "For EOOD, OOD and sole traders",
    s2Title: "Payroll & staff",
    s2Body: "Payslips, employment contracts, sick leave and holidays, monthly social security filings to the National Revenue Agency.",
    s2For: "For employers with 1 or more employees",
    s3Title: "Company registration",
    s3Body: "I help you choose the legal form, prepare the documents for the Commercial Register and register you for VAT when needed.",
    s3For: "For anyone starting their own business",
    s4Title: "Personal tax returns",
    s4Body: "The annual income tax return — for rent, fees, freelance work or income from abroad. I fill it in and file it for you.",
    s4For: "For individuals and freelancers",
    deadlinesTitle: "The deadlines I watch for you",
    deadlinesSub: "The key dates in a small business's year, sorted by which one comes first.",
    deadlinesNote: "When a deadline falls on a Saturday or Sunday, it moves to the next working day. This list is a guide — I'll tell you the exact dates for your case.",
    aboutTitle: "A little about me",
    aboutP1: "My name is Vyara Hristova and I'm an accountant. I love tidy paperwork, but I love it even more when my clients sleep well, knowing everything has been filed on time.",
    aboutP2: "I work with every client personally — you won't be passed between staff. If you have a question, you talk to me directly and get an answer in plain language.",
    stepsTitle: "How we start",
    step1Title: "Write or call",
    step1Body: "Tell me briefly what your business does and what you need.",
    step2Title: "Meeting and documents",
    step2Body: "We meet in person or online. I look through your documents and tell you what I'll do and what it will cost.",
    step3Title: "Contract and peace of mind",
    step3Body: "We sign a contract and I take over your books from the next month. You just send me your documents.",
    contactTitle: "Write to me",
    contactSub: "I reply within one working day. The first conversation is free.",
    phoneLabel: "Phone",
    emailLabel: "Email",
    addressLabel: "Address",
    address: "1 Primerna St., Sofia",
    hoursLabel: "Office hours",
    hours: "Monday – Friday, 9:00 – 18:00",
    fName: "Your name",
    fContact: "Phone or email",
    fTopic: "What is it about?",
    fOther: "Something else",
    fMsg: "Message",
    fMsgPh: "For example: I have an EOOD with two employees and I'm looking for a new accountant.",
    fSend: "Send message",
    fSending: "Sending…",
    fSent: "Message sent. I'll reply within one working day.",
    fMissing: "Please fill in your name, phone or email, and a message.",
    fFailed: "The message wasn't sent. Try again or call +359 88 000 0000.",
    fNotSetUp: "The form isn't connected yet. Please call +359 88 000 0000 or email vyara@example.com.",
    footerRole: "accountant",
    toTop: "Back to top ↑",
  },
};

let lang = "bg";

function t(key) {
  return TEXT[lang][key] ?? TEXT.bg[key] ?? key;
}

function applyLanguage(newLang) {
  lang = TEXT[newLang] ? newLang : "bg";
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    el.innerHTML = t(el.dataset.i18nHtml);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });
  document.querySelectorAll("[data-lang]").forEach((btn) => {
    btn.setAttribute("aria-pressed", String(btn.dataset.lang === lang));
  });

  document.title = lang === "bg"
    ? "Вяра Христова – счетоводител"
    : "Vyara Hristova – accountant";

  renderDeadlines();

  // Remember the choice for the next visit (may be blocked in private mode, so it's wrapped in try)
  try { localStorage.setItem("lang", lang); } catch (e) { /* ignore */ }
}

/* ---------- 2. Tax deadlines ---------- */

const MONTHS = {
  bg: ["януари", "февруари", "март", "април", "май", "юни", "юли", "август", "септември", "октомври", "ноември", "декември"],
  en: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
};

// Each rule returns the next date (on or after "from") plus the text for it.
// Monthly deadlines are for the previous month's period.
const RULES = [
  {
    // VAT return: by the 14th of the following month
    next: (from) => nextMonthly(from, 14),
    title: { bg: "ДДС декларация", en: "VAT return" },
    detail: (d) => ({
      bg: `Справка-декларация и дневници за ${MONTHS.bg[prevMonth(d)]}`,
      en: `VAT return and ledgers for ${MONTHS.en[prevMonth(d)]}`,
    }),
  },
  {
    // Social security and payroll declarations: by the 25th of the following month
    next: (from) => nextMonthly(from, 25),
    title: { bg: "Осигуровки и декларация обр. 1 и 6", en: "Social security filings" },
    detail: (d) => ({
      bg: `Осигуровки и данък върху заплатите за ${MONTHS.bg[prevMonth(d)]}`,
      en: `Contributions and payroll tax for ${MONTHS.en[prevMonth(d)]}`,
    }),
  },
  {
    // Personal income tax return: by 30 April
    next: (from) => nextYearly(from, 3, 30),
    title: { bg: "Годишна данъчна декларация на физически лица", en: "Personal income tax return" },
    detail: (d) => ({
      bg: `Декларация по чл. 50 ЗДДФЛ за доходите през ${d.getFullYear() - 1} г.`,
      en: `Annual return for income earned in ${d.getFullYear() - 1}`,
    }),
  },
  {
    // Annual corporate tax return and financial statements: by 30 June
    next: (from) => nextYearly(from, 5, 30),
    title: { bg: "Годишна декларация на фирмите и ГФО", en: "Company annual return and accounts" },
    detail: (d) => ({
      bg: `Корпоративен данък и годишен финансов отчет за ${d.getFullYear() - 1} г.`,
      en: `Corporate tax return and annual accounts for ${d.getFullYear() - 1}`,
    }),
  },
];

function startOfDay(d) {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
}

// If a date falls on Saturday/Sunday, move it to Monday.
function toWorkingDay(d) {
  const day = d.getDay(); // 0 = Sunday, 6 = Saturday
  if (day === 6) return new Date(d.getFullYear(), d.getMonth(), d.getDate() + 2);
  if (day === 0) return new Date(d.getFullYear(), d.getMonth(), d.getDate() + 1);
  return d;
}

function nextMonthly(from, dayOfMonth) {
  for (let i = 0; i < 3; i++) {
    const d = toWorkingDay(new Date(from.getFullYear(), from.getMonth() + i, dayOfMonth));
    if (d >= from) return d;
  }
}

function nextYearly(from, month, dayOfMonth) {
  for (let i = 0; i < 2; i++) {
    const d = toWorkingDay(new Date(from.getFullYear() + i, month, dayOfMonth));
    if (d >= from) return d;
  }
}

// The month the filing is FOR: the month before the deadline.
// (A weekend shift of the 14th or 25th never crosses into the next month.)
function prevMonth(d) {
  return (d.getMonth() + 11) % 12;
}

function daysLeftText(days) {
  if (lang === "bg") {
    if (days === 0) return "днес!";
    if (days === 1) return "утре";
    return `след ${days} дни`;
  }
  if (days === 0) return "today!";
  if (days === 1) return "tomorrow";
  return `in ${days} days`;
}

function renderDeadlines() {
  const today = startOfDay(new Date());
  const DAY = 24 * 60 * 60 * 1000;

  const items = RULES.map((rule) => {
    const date = rule.next(today);
    return {
      date,
      days: Math.round((date - today) / DAY),
      title: rule.title[lang],
      detail: rule.detail(date)[lang],
    };
  }).sort((a, b) => a.date - b.date);

  // The list in the "Deadlines" section
  const list = document.getElementById("deadline-list");
  list.innerHTML = "";
  items.forEach((item, i) => {
    const li = document.createElement("li");
    li.className = "deadline" + (i === 0 ? " deadline--next" : "");
    li.innerHTML = `
      <p class="deadline__date">
        <span class="deadline__day">${item.date.getDate()}</span>
        <span class="deadline__month">${MONTHS[lang][item.date.getMonth()]}</span>
      </p>
      <div>
        <p class="deadline__title">${item.title}${i === 0 ? `<span class="deadline__badge">${t("noteLabel")}</span>` : ""}</p>
        <p class="deadline__meta">${item.detail} · ${daysLeftText(item.days)}</p>
      </div>`;
    list.appendChild(li);
  });

  // The sticky note in the hero shows the first one
  const first = items[0];
  const note = document.getElementById("next-deadline");
  note.querySelector('[data-slot="date"]').textContent = `${first.date.getDate()} ${MONTHS[lang][first.date.getMonth()]}`;
  note.querySelector('[data-slot="what"]').textContent = first.detail;
  note.querySelector('[data-slot="left"]').textContent = daysLeftText(first.days);
}

/* ---------- 3. Contact form ---------- */

function setupForm() {
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");
  const button = form.querySelector('button[type="submit"]');

  function show(key, kind) {
    status.textContent = t(key);
    status.className = "form__status " + (kind ? "is-" + kind : "");
  }

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    // Check the required fields
    let ok = true;
    form.querySelectorAll("[required]").forEach((field) => {
      const empty = field.value.trim() === "";
      field.setAttribute("aria-invalid", String(empty));
      if (empty) ok = false;
    });
    if (!ok) { show("fMissing", "error"); return; }

    // Not connected to Formspree yet
    if (form.action.includes("YOUR_FORM_ID")) { show("fNotSetUp", "error"); return; }

    button.disabled = true;
    show("fSending");
    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!response.ok) throw new Error(String(response.status));
      form.reset();
      show("fSent", "ok");
    } catch (e) {
      show("fFailed", "error");
    } finally {
      button.disabled = false;
    }
  });
}

/* ---------- Start ---------- */

document.getElementById("year").textContent = new Date().getFullYear();

document.querySelectorAll("[data-lang]").forEach((btn) => {
  btn.addEventListener("click", () => applyLanguage(btn.dataset.lang));
});

let savedLang = "bg";
try { savedLang = localStorage.getItem("lang") || "bg"; } catch (e) { /* ignore */ }
applyLanguage(savedLang);
setupForm();
