/* ==========================================================================
   EMC Chatbot - mascot launcher, chat window, quick-help tab, forms
   Works with: css/chatbot.css  and  backend  POST /api/chat
   ========================================================================== */
(function () {
  'use strict';
  if (window.__emcChatbotLoaded) return;
  window.__emcChatbotLoaded = true;

  var API = '/api';
  var MASCOT = 'assets/images/mascot.png';
  var QUICK_START = ['Company Info', 'Our Services', 'Apply for Job / Upload CV', 'Schedule Visit / Meeting'];

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  // very small markdown: **bold** and new lines (input is escaped first)
  function fmt(s) {
    return esc(s).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br>');
  }

  /* ---------- build DOM ---------- */
  var root = document.createElement('div');
  root.innerHTML =
    '<div class="emc-kiit-quick-help-tab" id="emcQhTab" role="button" tabindex="0" aria-label="Quick help">' +
      '<span class="tab-icon">⚡</span> QUICK HELP</div>' +
    '<div class="emc-quickhelp-modal" id="emcQhModal">' +
      '<div class="emc-quickhelp-header"><div class="emc-quickhelp-title">⚡ Quick Help</div>' +
      '<button class="emc-quickhelp-close" id="emcQhClose" aria-label="Close">✕</button></div>' +
      '<a class="emc-quickhelp-item" href="our-services.html"><span class="icon">🛠️</span> Our Services</a>' +
      '<a class="emc-quickhelp-item" href="careers.html"><span class="icon">💼</span> Careers</a>' +
      '<a class="emc-quickhelp-item" href="contact.html"><span class="icon">📞</span> Contact Us</a>' +
      '<a class="emc-quickhelp-item" href="about.html"><span class="icon">🏢</span> About EMC</a>' +
    '</div>' +
    '<div class="emc-mascot-container" id="emcMascot">' +
      '<div class="emc-mascot-speech-bubble" id="emcBubble"><span class="pulse-dot"></span>' +
        '<span id="emcBubbleText">Hi! Need help?</span><span class="emc-typing-cursor">|</span></div>' +
      '<button class="emc-mascot-btn" id="emcMascotBtn" aria-label="Open chat assistant">' +
        '<img class="emc-mascot-img" src="' + MASCOT + '" alt="EMC Assistant"></button>' +
    '</div>' +
    '<div class="emc-chat-window" id="emcChatWin" role="dialog" aria-label="EMC Assistant">' +
      '<div class="emc-chat-header"><div class="emc-chat-header-info">' +
        '<div class="emc-header-avatar"><img src="' + MASCOT + '" alt=""></div>' +
        '<div class="emc-header-text"><span class="emc-header-title">EMC Assistant</span>' +
        '<span class="emc-header-status">● Online</span></div></div>' +
        '<button class="emc-chat-close-btn" id="emcChatClose" aria-label="Close chat">✕</button></div>' +
      '<div class="emc-chat-messages" id="emcMsgs"></div>' +
      '<div class="emc-chat-input-bar"><input class="emc-chat-input" id="emcInput" type="text" ' +
        'placeholder="Type your question..." autocomplete="off">' +
        '<button class="emc-chat-send-btn" id="emcSend" aria-label="Send">➤</button></div>' +
    '</div>';
  while (root.firstChild) document.body.appendChild(root.firstChild);

  var $ = function (id) { return document.getElementById(id); };
  var win = $('emcChatWin'), msgs = $('emcMsgs'), input = $('emcInput');
  var started = false;

  /* ---------- helpers ---------- */
  function scrollDown() { msgs.scrollTop = msgs.scrollHeight; }

  function addMsg(who, html) {
    var d = document.createElement('div');
    d.className = 'emc-chat-msg ' + who;
    d.innerHTML = (who === 'bot'
      ? '<div class="emc-msg-avatar"><img src="' + MASCOT + '" alt=""></div>' : '') +
      '<div class="emc-msg-content">' + html + '</div>';
    msgs.appendChild(d);
    scrollDown();
    return d;
  }

  function addOptions(list) {
    clearOptions();
    if (!list || !list.length) return;
    var box = document.createElement('div');
    box.className = 'emc-chat-options';
    list.forEach(function (label) {
      var b = document.createElement('button');
      b.className = 'emc-option-btn';
      b.type = 'button';
      b.textContent = label.replace(/^Form:\s*/i, '');
      b.addEventListener('click', function () { handle(label); });
      box.appendChild(b);
    });
    msgs.appendChild(box);
    scrollDown();
  }
  function clearOptions() {
    msgs.querySelectorAll('.emc-chat-options').forEach(function (n) { n.remove(); });
  }

  /* ---------- offline fallback (if backend not reachable) ---------- */
  function localReply(text) {
    var t = text.toLowerCase();
    if (/job|career|cv|resume|apply/.test(t))
      return { response: 'We are always looking for passionate engineers and planners! You can apply right here.', options: ['Form: Apply for Job / Upload CV', 'Company Info'] };
    if (/visit|meeting|appointment/.test(t))
      return { response: 'You can request a formal meeting or office visit using our form.', options: ['Form: Schedule Visit / Meeting', 'Contact Info'] };
    if (/contact|phone|email|address|location/.test(t))
      return { response: '**Ecometrix Consultants Pvt. Ltd.**\n📍 DCB 119, DLF Cybercity, Patia, Bhubaneswar – 751024\n📞 +91 674 2973849\n✉️ info@ecometrix.co.in', options: QUICK_START };
    return { response: 'Ecometrix Consultants provides engineering, environmental consulting and infrastructure services across India. How can I help?', options: QUICK_START };
  }

  /* ---------- main flow ---------- */
  function handle(text) {
    text = (text || '').trim();
    if (!text) return;
    clearOptions();
    if (/^form:\s*schedule/i.test(text) || /^schedule visit/i.test(text)) { addMsg('user', esc(text.replace(/^Form:\s*/i, ''))); return showForm('meeting'); }
    if (/^form:\s*apply/i.test(text) || /^apply for job/i.test(text)) { addMsg('user', esc(text.replace(/^Form:\s*/i, ''))); return showForm('job'); }
    addMsg('user', esc(text));
    var typing = addMsg('bot', '<span class="emc-typing-cursor">●●●</span>');
    fetch(API + '/chat', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: text })
    }).then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); })
      .catch(function () { return localReply(text); })
      .then(function (d) {
        typing.remove();
        addMsg('bot', fmt(d.response || ''));
        addOptions(d.options);
      });
  }

  /* ---------- forms ---------- */
  function showForm(kind) {
    var isJob = kind === 'job';
    var f = document.createElement('form');
    f.className = 'emc-chat-form';
    f.innerHTML =
      '<div class="emc-chat-form-title">' + (isJob ? '📄 Apply for a Job' : '📅 Schedule Visit / Meeting') + '</div>' +
      field('name', isJob ? 'Full Name *' : 'Name *', 'text', true) +
      field('email', 'Email *', 'email', true) +
      field('phone', 'Phone', 'tel', false) +
      (isJob
        ? field('domain', 'Domain / Role', 'text', false) + field('experience', 'Experience (years)', 'text', false) +
          '<div class="emc-form-field"><label>Upload CV</label><input class="emc-form-input" type="file" name="cv" accept=".pdf,.doc,.docx"></div>' +
          field('note', 'Cover note', 'textarea', false)
        : field('purpose', 'Purpose', 'text', false) + field('date', 'Preferred date', 'date', false) +
          field('time', 'Preferred time', 'time', false) + field('note', 'Notes', 'textarea', false)) +
      '<button class="emc-form-submit-btn" type="submit">Submit</button>';
    msgs.appendChild(f);
    scrollDown();

    f.addEventListener('submit', function (e) {
      e.preventDefault();
      var v = function (n) { var el = f.elements[n]; return el ? el.value.trim() : ''; };
      var cv = f.elements.cv && f.elements.cv.files[0];
      var url = API + (isJob ? '/chatbot/job-application' : '/chatbot/meeting-request');
      var body = isJob
        ? { full_name: v('name'), email: v('email'), phone: v('phone'), domain: v('domain'),
            experience: v('experience'), cover_note: v('note'), cv_file_name: cv ? cv.name : 'Not attached' }
        : { name: v('name'), email: v('email'), phone: v('phone'), purpose: v('purpose'),
            preferred_date: v('date'), preferred_time: v('time'), notes: v('note') };
      var btn = f.querySelector('.emc-form-submit-btn');
      btn.disabled = true; btn.textContent = 'Sending...';
      fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) })
        .then(function (r) { return r.json().then(function (d) { return { ok: r.ok, d: d }; }); })
        .then(function (res) {
          f.remove();
          addMsg('bot', fmt(res.ok ? res.d.message : ('⚠️ ' + (res.d.error || 'Something went wrong.'))));
          addOptions(QUICK_START);
        })
        .catch(function () {
          btn.disabled = false; btn.textContent = 'Submit';
          addMsg('bot', '⚠️ Server not reachable. Please email us at info@ecometrix.co.in');
        });
    });
  }
  function field(name, label, type, req) {
    var c = 'emc-form-input';
    var inner = type === 'textarea'
      ? '<textarea class="emc-form-textarea ' + c + '" name="' + name + '" rows="3"></textarea>'
      : '<input class="' + c + '" name="' + name + '" type="' + type + '"' + (req ? ' required' : '') + '>';
    return '<div class="emc-form-field"><label>' + label + '</label>' + inner + '</div>';
  }

  /* ---------- open / close ---------- */
  function openChat() {
    win.classList.add('open');
    $('emcBubble').style.display = 'none';
    if (!started) {
      started = true;
      addMsg('bot', 'Hello! Welcome to <strong>Ecometrix Consultants Pvt. Ltd.</strong> How can I assist you today?');
      addOptions(QUICK_START);
    }
    setTimeout(function () { input.focus(); }, 300);
  }
  function closeChat() { win.classList.remove('open'); }

  $('emcMascotBtn').addEventListener('click', function () { win.classList.contains('open') ? closeChat() : openChat(); });
  $('emcBubble').addEventListener('click', openChat);
  $('emcChatClose').addEventListener('click', closeChat);
  $('emcSend').addEventListener('click', function () { var t = input.value; input.value = ''; handle(t); });
  input.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') { var t = input.value; input.value = ''; handle(t); }
  });

  /* quick help drawer */
  var qh = $('emcQhModal');
  $('emcQhTab').addEventListener('click', function () { qh.classList.toggle('open'); });
  $('emcQhClose').addEventListener('click', function () { qh.classList.remove('open'); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { closeChat(); qh.classList.remove('open'); }
  });

  /* rotating speech-bubble text */
  var tips = ['Hi! Need help?', 'Ask about our services', 'Apply for a job here'], i = 0;
  setInterval(function () {
    if (win.classList.contains('open')) return;
    i = (i + 1) % tips.length;
    $('emcBubbleText').textContent = tips[i];
  }, 5000);
})();
