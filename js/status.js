// ─────────────────────────────────────────────────────────────
// Flores — Statut de disponibilité centralisé
// Modifier FLORES_STATUS pour mettre à jour TOUT le site
// ─────────────────────────────────────────────────────────────
// OPTIONS : 'available' | 'limited' | 'off'
window.FLORES_STATUS = 'available';

(function () {
    var STATES = {
        available: {
            emoji: '✅',
            label: 'Disponible',
            color: '#22c55e',
            pulse: true
        },
        limited: {
            emoji: '⏳',
            label: 'Momentanément indisponible',
            color: '#f59e0b',
            pulse: false
        },
        off: {
            emoji: '🔴',
            label: 'Actuellement en OFF',
            color: '#ef4444',
            pulse: false
        }
    };

    function applyStatus() {
        var s = STATES[window.FLORES_STATUS] || STATES.available;

        // Texte complet (emoji + label)
        document.querySelectorAll('[data-status-label]').forEach(function (el) {
            el.textContent = s.emoji + ' ' + s.label;
        });

        // Texte court (label seul, sans emoji)
        document.querySelectorAll('[data-status-short]').forEach(function (el) {
            el.textContent = s.label;
        });

        // Couleur du dot
        document.querySelectorAll('[data-status-dot]').forEach(function (dot) {
            dot.style.backgroundColor = s.color;
            if (!s.pulse) {
                dot.style.animation = 'none';
                dot.style.boxShadow = 'none';
            } else {
                dot.style.animation = '';
                dot.style.boxShadow = '';
            }
        });

        // Classe sur les conteneurs pour adapter la couleur du badge
        document.querySelectorAll('[data-status-badge]').forEach(function (el) {
            el.setAttribute('data-status', window.FLORES_STATUS);
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', applyStatus);
    } else {
        applyStatus();
    }
})();
