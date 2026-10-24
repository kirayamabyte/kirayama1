/**
 * 赤城ユタカードバトル - カードデータベース
 * 
 * カードの種類(type): 
 *  - "monster" : モンスター (costMp, atk, hp, elem 必須)
 *  - "weapon"  : 武器 (costMp, atk, elem 必須)
 *  - "magic"   : 魔法 (costMp, heal または mpRecover, elem 必須)
 */

const ELEMENTS = {
  fire: { name: "火", icon: "🔥", class: "elem-fire", strongTo: "wood" },
  water: { name: "水", icon: "💧", class: "elem-water", strongTo: "fire" },
  wood:  { name: "木", icon: "🍃", class: "elem-wood", strongTo: "water" }
};

const CARD_DATABASE = [
  // --- モンスターカード ---
  { id: "m1", name: "赤城の竜神", type: "monster", costMp: 5, atk: 8, hp: 15, elem: "fire", desc: "火のドラゴン守護神", icon: "🐉" },
  { id: "m2", name: "水鏡のこう", type: "monster", costMp: 4, atk: 5, hp: 20, elem: "water", desc: "高耐久の水精霊", icon: "🧜‍♀️" },
  { id: "m3", name: "森のこう",   type: "monster", costMp: 4, atk: 6, hp: 16, elem: "wood",  desc: "バランス型守護者", icon: "🧓" },
  
  // 新しいモンスターをここに追加できます（例）
  // { id: "m4", name: "鳳凰", type: "monster", costMp: 6, atk: 10, hp: 12, elem: "fire", desc: "伝説の火鳥", icon: "🦅" },

  // --- 武器カード ---
  { id: "w1", name: "名言の剣",   type: "weapon",  costMp: 0, atk: 6,  elem: "wood",  desc: "装備: 攻撃力+6", icon: "⚔️" },
  { id: "w2", name: "火炎の言葉", type: "weapon",  costMp: 3, atk: 12, elem: "fire",  desc: "装備: 攻撃力+12", icon: "🔥" },
  { id: "w3", name: "水流の智恵", type: "weapon",  costMp: 3, atk: 12, elem: "water", desc: "装備: 攻撃力+12", icon: "🌊" },
  { id: "w4", name: "風刃の閃き", type: "weapon",  costMp: 3, atk: 12, elem: "wood",  desc: "装備: 攻撃力+12", icon: "🍃" },

  // --- 魔法カード ---
  { id: "h1", name: "恵みの光",   type: "magic",   costMp: 4, heal: 15, elem: "wood", desc: "自分のHPを15回復", icon: "✨" },
  { id: "h2", name: "瞑想",       type: "magic",   costMp: 0, mpRecover: 6, elem: "water", desc: "自分のMPを6回復", icon: "🧘" }
];

// 初期デッキ定義 (20枚)
function getDefault20CardDeck() {
  return [
    "m1", "m1", "m1", "m2", "m2", "m2", "m3", "m3",
    "w1", "w1", "w2", "w2", "w3", "w3", "w4", "w4",
    "h1", "h1", "h2", "h2"
  ];
}