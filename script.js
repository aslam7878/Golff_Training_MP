
     (function() {
         const modal = document.getElementById('applyModal');
         if (!modal) return;

         const dialog = modal.querySelector('.apply-modal-dialog');
         const overlay = modal.querySelector('.apply-modal-overlay');
         const body = document.body;
         const jobTitleDisplay = modal.querySelector('[data-job-title]');
         const jobField = modal.querySelector('[data-job-field]');
         const openButtons = document.querySelectorAll('.apply-cta');
         const closeButtons = modal.querySelectorAll('[data-close-modal]');

         function setJobTitle(title) {
             const fallback = 'Open Position';
             const safeTitle = title || fallback;
             if (jobTitleDisplay) jobTitleDisplay.textContent = safeTitle;
             if (jobField) jobField.value = safeTitle;
         }

         function openModal(jobTitle) {
             setJobTitle(jobTitle);
             modal.classList.add('is-visible');
             modal.setAttribute('aria-hidden', 'false');
             body.classList.add('modal-open');
             setTimeout(() => dialog?.focus(), 50);
         }

         function closeModal() {
             modal.classList.remove('is-visible');
             modal.setAttribute('aria-hidden', 'true');
             body.classList.remove('modal-open');
         }

         openButtons.forEach(btn => {
             btn.addEventListener('click', event => {
                 event.preventDefault();
                 const jobCard = btn.closest('.job-card');
                 const jobTitle = jobCard?.querySelector('h3')?.textContent?.trim();
                 openModal(jobTitle);
             });
         });

         closeButtons.forEach(btn => btn.addEventListener('click', closeModal));

         overlay?.addEventListener('click', closeModal);

         document.addEventListener('keydown', event => {
             if (event.key === 'Escape' && modal.classList.contains('is-visible')) {
                 closeModal();
             }
         });
     })();
        window.i18n = {
            validation_failed: "Please fix the highlighted errors.",
            something_wrong: "Something went wrong, please try again.",
            submitting: "apply.submitting",
            submit: "Submit Application"
        };

