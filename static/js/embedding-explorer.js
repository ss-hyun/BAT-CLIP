/* ============================================================
 * BAT-CLIP — Embedding Explorer (progressive-enhancement stub)
 * ------------------------------------------------------------
 * PHASE 1 (current): no-op. The static placeholder card defined in
 * index.html (#embedding-explorer .explorer-shell) is what visitors
 * see. This file documents the data contract and the boot sequence
 * so PHASE 3 can be dropped in without redesigning the page.
 *
 * PHASE 3 (planned): interactive 3D t-SNE viewer.
 *   - rotate (drag) / zoom (wheel/pinch) — 3D scatter per model
 *   - hover  -> tooltip (word, sentence, speaker)
 *   - click  -> select a word; highlight its sentence
 *   - linked selection across the four model panels (shared point id)
 *   - k-NN highlight -> emphasize precomputed nearest neighbours
 *
 * Suggested libs: start with Plotly.js (scatter3d) for the rotate/
 * click MVP; move to three.js / deck.gl / regl if linked selection
 * + k-NN across 4 synced panels needs finer control.
 *
 * DATA CONTRACT — static/data/tsne_<model>.json  (one file per model:
 *   diver1, ba_clip, bt_clip, batclip). All four share point ids so
 *   selections/among panels can be linked.
 *
 *   {
 *     "model": "BAT-CLIP",
 *     "subject": "Sub03",
 *     "dims": 3,
 *     "sentences": [ { "id": 12, "text": "..." }, ... ],   // color legend
 *     "speakers":  [ "A", "B" ],                            // shape legend
 *     "points": [
 *       {
 *         "id": 0,                // shared across all 4 model files
 *         "xyz": [x, y, z],
 *         "word": "brain",
 *         "sentence": 12,         // -> color
 *         "speaker": "A",         // -> marker shape
 *         "knn": [3, 88, 120]     // precomputed nearest-neighbour ids
 *       }
 *     ]
 *   }
 *
 * To go live in PHASE 3: implement boot() to fetch the JSON, render
 * the panels, and hide .explorer-placeholder. Until the data files
 * exist, boot() stays a no-op and the placeholder remains.
 * ============================================================ */
(function () {
  "use strict";

  var MODELS = ["diver1", "ba_clip", "bt_clip", "batclip"];
  var DATA_DIR = "static/data/";

  function dataAvailable() {
    // PHASE 3: flip on once static/data/tsne_*.json are committed.
    return false;
  }

  function boot() {
    if (!dataAvailable()) return; // PHASE 1: keep the static placeholder
    // PHASE 3 implementation goes here:
    //   Promise.all(MODELS.map(m => fetch(DATA_DIR + "tsne_" + m + ".json").then(r => r.json())))
    //     .then(render);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
