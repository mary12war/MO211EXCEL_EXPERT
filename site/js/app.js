document.addEventListener('DOMContentLoaded', () => {
  initQuiz();
  initMasteryAccordion();
  initSmoothScroll();
  initStickyNav();
  initCopyCsv();
  initProgressTracker();
});

function initQuiz() {
  const quizzes = document.querySelectorAll('.quiz');

  quizzes.forEach((quiz) => {
    const questions = quiz.querySelectorAll('.quiz-question');
    const status = quiz.querySelector('.quiz-status');
    const summary = quiz.querySelector('.quiz-summary');
    const answered = new Map();

    questions.forEach((question) => {
      const options = question.querySelectorAll('.quiz-option');

      options.forEach((option) => {
        option.addEventListener('click', () => {
          if (question.dataset.answered === 'true') {
            return;
          }

          const correct = option.dataset.correct === 'true';
          question.dataset.answered = 'true';
          answered.set(question.id, correct);

          options.forEach((btn) => {
            btn.disabled = true;
            if (btn.dataset.correct === 'true') {
              btn.classList.add('correct');
            } else if (btn === option) {
              btn.classList.add('incorrect');
            }
          });

          const feedback = question.querySelector('.quiz-feedback');
          if (feedback) {
            feedback.textContent = option.dataset.feedback || '';
            feedback.classList.add('is-visible');
          }

          if (status) {
            status.textContent = `${answered.size} of ${questions.length} answered`;
          }

          if (answered.size === questions.length && summary) {
            const score = Array.from(answered.values()).filter(Boolean).length;
            summary.hidden = false;
            summary.textContent = `You scored ${score} out of ${questions.length}. Review any missed explanations, then try the workbook task again.`;
          }
        });
      });
    });
  });
}

function initMasteryAccordion() {
  const steps = document.querySelectorAll('.mastery-steps li');

  steps.forEach((step, index) => {
    const toggle = step.querySelector('.step-toggle');
    const detail = step.querySelector('.step-detail');

    if (!toggle || !detail) {
      return;
    }

    const detailId = detail.id || `step-detail-${index + 1}`;
    detail.id = detailId;
    toggle.setAttribute('aria-controls', detailId);

    const openByDefault = window.innerWidth > 768;
    toggle.setAttribute('aria-expanded', openByDefault ? 'true' : 'false');
    detail.classList.toggle('is-open', openByDefault);

    toggle.addEventListener('click', () => {
      const isMobile = window.innerWidth <= 768;
      if (!isMobile) {
        return;
      }

      const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!isExpanded));
      detail.classList.toggle('is-open', !isExpanded);
    });
  });

  window.addEventListener('resize', () => {
    document.querySelectorAll('.mastery-steps li').forEach((step) => {
      const toggle = step.querySelector('.step-toggle');
      const detail = step.querySelector('.step-detail');
      if (!toggle || !detail) {
        return;
      }

      if (window.innerWidth > 768) {
        toggle.setAttribute('aria-expanded', 'true');
        detail.classList.add('is-open');
      } else if (!detail.classList.contains('is-open')) {
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  });
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (event) => {
      const targetId = anchor.getAttribute('href');
      if (!targetId || targetId === '#') {
        return;
      }

      const target = document.querySelector(targetId);
      if (!target) {
        return;
      }

      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

function initStickyNav() {
  const nav = document.querySelector('.nav');
  if (!nav) {
    return;
  }

  const toggleScrolled = () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  };

  toggleScrolled();
  window.addEventListener('scroll', toggleScrolled, { passive: true });
}

function initCopyCsv() {
  document.querySelectorAll('[data-copy-target]').forEach((button) => {
    button.addEventListener('click', async () => {
      const target = document.querySelector(button.dataset.copyTarget);
      if (!target) {
        return;
      }

      try {
        await navigator.clipboard.writeText(target.value || target.textContent || '');
        const originalText = button.textContent;
        button.textContent = 'Copied';
        window.setTimeout(() => {
          button.textContent = originalText;
        }, 1500);
      } catch (error) {
        button.textContent = 'Copy failed';
      }
    });
  });
}

function initProgressTracker() {
  const storageKey = 'excel-expert-progress';
  const saved = JSON.parse(localStorage.getItem(storageKey) || '{}');
  const toggles = document.querySelectorAll('[data-progress-id]');

  toggles.forEach((toggle) => {
    const key = toggle.dataset.progressId;
    if (!key) {
      return;
    }

    toggle.checked = Boolean(saved[key]);
    toggle.addEventListener('change', () => {
      saved[key] = toggle.checked;
      localStorage.setItem(storageKey, JSON.stringify(saved));
    });
  });
}
