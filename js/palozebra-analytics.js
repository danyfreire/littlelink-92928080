(() => {
  const ENDPOINT = 'https://caso01.197832.xyz/event';
  const CASES = {
    'caso-01-diagnostico': 'consultoria',
    'caso-02-project-management': 'project-management',
    'caso-03-ventas': 'ventas',
    'caso-04-servicio-cliente': 'servicio-cliente'
  };

  function visitorId() {
    const key = 'pz_visitor_id';
    let id = localStorage.getItem(key);
    if (!id) {
      id = (crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).slice(2) + Date.now().toString(36));
      localStorage.setItem(key, id);
    }
    return id;
  }

  function caseId(path = location.pathname) {
    for (const [needle, id] of Object.entries(CASES)) {
      if (path.includes(needle)) return id;
    }
    return '';
  }

  function send(event, extra = {}) {
    const payload = {
      event,
      path: location.pathname,
      case_id: extra.case_id || caseId(),
      visitor: visitorId(),
      referrer: document.referrer || ''
    };
    fetch(ENDPOINT, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(payload),
      keepalive: true,
      mode: 'cors'
    }).catch(() => {});
  }

  window.pzTrack = send;
  send('page_view');

  document.addEventListener('click', (e) => {
    const a = e.target.closest && e.target.closest('a[href]');
    if (!a) return;
    const href = a.getAttribute('href') || '';
    const m = href.match(/caso-(0[1-4])-[^/]+/);
    if (m) {
      const map = {'01':'consultoria','02':'project-management','03':'ventas','04':'servicio-cliente'};
      send('case_open', {case_id: map[m[1]] || ''});
    }
  });
})();
