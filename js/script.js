  document.querySelectorAll('.section').forEach((section) => {
    const form      = section.querySelector('form');
    const checks    = [...form.querySelectorAll('input[type="checkbox"]')];
    const percentEl = section.querySelector('.percent');
    const countEl   = section.querySelector('.countText');
    const barFill   = section.querySelector('.bar > i');

    function update() {
      const done  = checks.filter(c => c.checked).length;
      const total = checks.length || 1;
      const pct   = Math.round((done / total) * 100);

      percentEl.textContent = pct + '%';
      countEl.textContent   = `（${done} / ${total} 完了）`;
      barFill.style.width   = pct + '%';
    }

    // 初期化
    update();

    // チェックが変わるたびに更新
    form.addEventListener('change', (e) => {
      if (e.target && e.target.type === 'checkbox') update();
    });
  });
