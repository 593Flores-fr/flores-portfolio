/* ─────────────────────────────────────────────────────────────
   contact-form.js — Drag & Drop + validation + service pills
   ───────────────────────────────────────────────────────────── */

(function () {

    /* ── Config ─────────────────────────────────────────── */
    const MAX_FILES = 3;
    const MAX_MB    = 50;
    const MAX_BYTES = MAX_MB * 1024 * 1024;

    let selectedFiles = [];

    /* ── DOM refs ────────────────────────────────────────── */
    const dropZone  = document.getElementById('cfDropZone');
    const fileInput = document.getElementById('cfFileInput');
    const pickBtn   = document.getElementById('cfPickBtn');
    const fileList  = document.getElementById('cfFileList');
    const dropError = document.getElementById('cfDropError');
    const form      = document.getElementById('cf-form');
    const feedback  = document.getElementById('cf-feedback');

    if (!dropZone || !fileInput) return;

    /* ── Helpers ─────────────────────────────────────────── */
    function formatSize(bytes) {
        return (bytes / 1024 / 1024).toFixed(1) + ' Mo';
    }

    function showError(msg) {
        dropError.textContent = msg;
        dropError.style.display = 'block';
        setTimeout(() => { dropError.style.display = 'none'; }, 4000);
    }

    function renderFileList() {
        fileList.innerHTML = '';
        selectedFiles.forEach(function (file, i) {
            const item = document.createElement('div');
            item.className = 'cf-file-item';
            item.innerHTML =
                '<i class="fa-solid fa-file-image"></i>' +
                '<span class="cf-file-name">' + file.name + '</span>' +
                '<span class="cf-file-size">' + formatSize(file.size) + '</span>' +
                '<button type="button" class="cf-file-remove" data-i="' + i + '" aria-label="Supprimer">×</button>';
            fileList.appendChild(item);
        });
        dropZone.classList.toggle('has-files', selectedFiles.length > 0);
        dropZone.classList.toggle('is-full',   selectedFiles.length >= MAX_FILES);

        /* Sync the real input via DataTransfer */
        try {
            const dt = new DataTransfer();
            selectedFiles.forEach(function (f) { dt.items.add(f); });
            fileInput.files = dt.files;
        } catch (e) { /* Safari < 15 doesn't support DataTransfer constructor */ }
    }

    function addFiles(rawFiles) {
        let added = 0;
        for (let i = 0; i < rawFiles.length; i++) {
            const f = rawFiles[i];
            if (selectedFiles.length >= MAX_FILES) {
                showError('Maximum ' + MAX_FILES + ' fichiers autorisés.');
                break;
            }
            if (f.size > MAX_BYTES) {
                showError('"' + f.name + '" dépasse ' + MAX_MB + ' Mo.');
                continue;
            }
            const exists = selectedFiles.some(function (x) { return x.name === f.name && x.size === f.size; });
            if (!exists) {
                selectedFiles.push(f);
                added++;
            }
        }
        if (added > 0) renderFileList();
    }

    /* ── Drag & Drop events ──────────────────────────────── */
    dropZone.addEventListener('dragover', function (e) {
        e.preventDefault();
        dropZone.classList.add('drag-over');
    });
    dropZone.addEventListener('dragleave', function (e) {
        if (!dropZone.contains(e.relatedTarget)) {
            dropZone.classList.remove('drag-over');
        }
    });
    dropZone.addEventListener('drop', function (e) {
        e.preventDefault();
        dropZone.classList.remove('drag-over');
        addFiles(e.dataTransfer.files);
    });

    /* ── Bouton parcourir ────────────────────────────────── */
    pickBtn.addEventListener('click', function (e) {
        e.preventDefault();
        fileInput.click();
    });
    fileInput.addEventListener('change', function () {
        addFiles(fileInput.files);
        fileInput.value = ''; /* reset so same file can be re-selected */
    });

    /* ── Supprimer un fichier ────────────────────────────── */
    fileList.addEventListener('click', function (e) {
        const btn = e.target.closest('.cf-file-remove');
        if (!btn) return;
        const idx = parseInt(btn.dataset.i, 10);
        selectedFiles.splice(idx, 1);
        renderFileList();
    });

    /* ── Submit via fetch (Formspree) ────────────────────── */
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const submitBtn = document.getElementById('cf-submit');
        submitBtn.disabled = true;
        submitBtn.textContent = 'Envoi en cours...';

        const data = new FormData(form);
        /* Re-attach selected files manually (for browsers that block DataTransfer) */
        data.delete('files');
        selectedFiles.forEach(function (f) { data.append('files', f); });

        fetch(form.action, {
            method: 'POST',
            body: data,
            headers: { 'Accept': 'application/json' }
        })
        .then(function (res) {
            if (res.ok) {
                feedback.innerHTML =
                    '<div class="cf-success">' +
                    '<i class="fa-solid fa-circle-check"></i>' +
                    ' Message envoyé — je vous réponds dans les 24h !' +
                    '</div>';
                form.reset();
                selectedFiles = [];
                renderFileList();
            } else {
                return res.json().then(function (d) {
                    throw new Error(d.error || 'Erreur envoi');
                });
            }
        })
        .catch(function (err) {
            feedback.innerHTML =
                '<div class="cf-error">' +
                '<i class="fa-solid fa-circle-xmark"></i>' +
                ' Une erreur est survenue. Réessayez ou contactez-moi directement.' +
                '</div>';
        })
        .finally(function () {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Envoyer le message';
        });
    });

})();
