/**
 * 赤城ユタカードバトル - CPU難易度別デッキデータベース
 */

const CPU_PRESETS = {
  // 初級：バランス型・低コスト中心
  easy: {
    name: "見習いデュエリスト",
    elem: "water",
    deck: [
      "m2", "m2", "m2", "m2", "m3", "m3", "m3", "m3",
      "w1", "w1", "w1", "w1", "w3", "w3",
      "h1", "h1", "h2", "h2", "h2", "h2"
    ]
  },
  // 中級：属性シナジー強化型
  normal: {
    name: "赤城の精鋭騎士",
    elem: "wood",
    deck: [
      "m3", "m3", "m3", "m3", "m1", "m1", "m2", "m2",
      "w1", "w1", "w4", "w4", "w4", "w4",
      "h1", "h1", "h1", "h1", "h2", "h2"
    ]
  },
  // 上級：高火力・アグレッシブ強力デッキ
  hard: {
    name: "竜神の覇王",
    elem: "fire",
    deck: [
      "m1", "m1", "m1", "m1", "m3", "m3", "m2", "m2",
      "w2", "w2", "w2", "w2", "w3", "w3", "w4", "w4",
      "h1", "h1", "h2", "h2"
    ]
  }
};

/**
 * 連戦モードの3戦における難易度推移の定義
 * 1回戦: EASY / 2回戦: NORMAL / 3回戦(BOSS): HARD
 */
const GAUNTLET_STAGES = [
  { stage: 1, title: "1回戦", diff: "easy" },
  { stage: 2, title: "2回戦", diff: "normal" },
  { stage: 3, title: "最終決戦 (BOSS)", diff: "hard" }
];