/**
 * 赤城ユタカードバトル - カードデータベース
 * 
 * カードの種類(type): 
 *  - "monster" : モンスター (costMp, atk, hp, elem 必須)
 *  - "weapon"  : 武器 (costMp, atk, elem 必須)
 *  - "magic"   : 魔法 (costMp, heal または mpRecover, elem 必須)
 * 
 * 拡張プロパティ:
 *  - image : イラスト画像のファイルパス (例: "images/cards/m1.png")
 *  - voice : 使用時・攻撃時のボイス音声ファイルパス (例: "audio/voices/m1.mp3")
 */

// ⭕ const / let / var を付けずに直接プロパティを設定・上書きします
ELEMENTS.fire = { name: "火", icon: "🔥", class: "elem-fire", strongTo: "wood" };
ELEMENTS.water = { name: "水", icon: "💧", class: "elem-water", strongTo: "fire" };
ELEMENTS.wood = { name: "木", icon: "🌿", class: "elem-wood", strongTo: "water" };
ELEMENTS.light = { name: "光", icon: "✨", class: "elem-light", strongTo: "dark" };
ELEMENTS.dark = { name: "闇", icon: "💀", class: "elem-dark", strongTo: "light" };

const CARD_DATABASE = [
  // --- モンスターカード ---
  { 
    id: "m1", 
    name: "赤城の竜神", 
    type: "monster", 
    costMp: 5, 
    atk: 8, 
    hp: 15, 
    elem: "fire", 
    desc: "火のドラゴン守護神", 
    icon: "🐉",
    image: "", // 例: "images/cards/m1.png"
    voice: ""  // 例: "audio/voices/m1.mp3"
  },
  { 
    id: "m2", 
    name: "水鏡のこう", 
    type: "monster", 
    costMp: 4, 
    atk: 5, 
    hp: 20, 
    elem: "water", 
    desc: "高耐久の水精霊", 
    icon: "🧜‍♀️",
    image: "", 
    voice: "" 
  },
  { 
    id: "m3", 
    name: "どんぐりこう",   
    type: "monster", 
    costMp: 6, 
    atk: 6, 
    hp: 16, 
    elem: "wood",
    rarity: 2,
    desc: "攻撃時、選ばなかった他の敵にランダムで5ダメージ！", 
    flavor: "「りんちしてやる」",
    icon: "森",
    splashDamage: 5, // ⚡ 追加効果: 攻撃対象以外の敵に与えるダメージ量
    image: "M_Dongurikou.png", 
    voice: "" 
  },
{ 
    id: "m4", 
    name: " フィーバーこうくん(こう神)", 
    type: "monster", 
    costMp: 10, 
    atk: 10, 
    hp: 27,
    elem: "fire", 
    rarity: 2,
    desc: "【防御力】受けるダメージを半減する！", 
    flavor: "「欲張った奴から消えていく、配信者なんてそんなもんだ！！」", 
    icon: "🛡️",
    halfDamage: true, // 🛡️ 追加能力: 被ダメージ半減
    image: "", 
    voice: "" 

  },
  {
  id: "m5",
  name: "でぃあぼろす",
  type: "monster",      // もしくは魔法カード(magic)でも可
  elem: "water",
  rarity: 2,
  costMp: 6,
  atk: 5,
  hp: 20,
  icon: "🧙‍♂️",
  buffAtk: 5,           // 召喚時に味方全体（または自分以外）のATKを+5する値
  desc: "召喚時、味方全員の攻撃力を+5する。",
flavor: "「お前の青春応援するぜ！...俺も青春したかったな！」", 
 image: "M_diaseisyunn.png", 
voice: "",
  },
// cards1.js の CARD_DATABASE に追加

// ① 特殊能力を持つモンスター
{
  id: "m6",
  name: "アシンメトリーユタ",
  type: "monster",
  elem: "wood",
  rarity: 3,
  costMp: 10,
  atk: 10,
  hp: 20,
  icon: "🧙‍♂️",
  desc: "召喚時:相手の場に[拘束体]を2体出す。相手の場に[拘束体]がいる数×5 ATKアップ。3ターン後[拘束体]は消滅。",
  
  // フラグ設定
  spawnEnemyTokens: true // トークン生成フラグ
},

// ② 相手の場に生成される攻撃不能トークン
{
  id: "token_blocker",
  name: "拘束体",
  type: "monster",
  elem: "wood",
  rarity: 1,
  costMp: 0,
  atk: 0,
  hp: 10,
  icon: "🗿",
  desc: "攻撃不可。発生から3ターン後に消滅する。",
  
  // フラグ設定
  cannotAttack: true, // 攻撃不可フラグ
  tokenLifetime: 3     // 生存ターン数（3ターン）
},



  // --- 武器カード ---
  { 
    id: "w1", 
    name: "名言の剣",   
    type: "weapon",  
    costMp: 0, 
    atk: 6,  
    elem: "wood",  
    desc: "装備: 攻撃力+6", 
    icon: "⚔️",
    image: "", 
    voice: "" 
  },
  { 
    id: "w2", 
    name: "火炎の言葉", 
    type: "weapon",  
    costMp: 3, 
    atk: 12, 
    elem: "fire",  
    desc: "装備: 攻撃力+12", 
    icon: "🔥",
    image: "", 
    voice: "" 
  },
  { 
    id: "w3", 
    name: "水流の智恵", 
    type: "weapon",  
    costMp: 3, 
    atk: 12, 
    elem: "water", 
    desc: "装備: 攻撃力+12", 
    icon: "🌊",
    image: "", 
    voice: "" 
  },
  { 
    id: "w4", 
    name: "風刃の閃き", 
    type: "weapon",  
    costMp: 3, 
    atk: 12, 
    elem: "wood",  
    desc: "装備: 攻撃力+12", 
    icon: "🍃",
    image: "", 
    voice: "" 
  },

  // --- 魔法カード ---
  { 
    id: "h1", 
    name: "恵みの光",   
    type: "magic",   
    costMp: 4, 
    heal: 15, 
    elem: "wood", 
    desc: "自分のHPを15回復", 
    icon: "✨",
    image: "", 
    voice: "" 
  },
  
  { 
    id: "h2", 
    name: "瞑想",       
    type: "magic",   
    costMp: 0, 
    mpRecover: 6, 
    elem: "water", 
    desc: "自分のMPを6回復", 
    icon: "🧘",
    image: "", 
    voice: "" 
  },
  { 
    id: "h3", 
    name: "タイムアウト",   
    type: "magic",   
    costMp: 4, 
    elem: "wood",
    rarity: 2, 
    desc: "発動時、相手モンスターを1ターン行動不能にする！", 
    icon: "✨",
    applyStun: true,
    image: "", 
    voice: "" 
  },
  {
  id: "h4", 
    name: "こうくんトークン", 
    type: "magic", 
    costMp: 4, 
    rarity:1,
    desc: "山札からランダムでモンスター1体を召喚！(召喚酔いなし)", 
    flavor: "「おれのともだち出てこいこうくん！！」", 
    icon: "🌀",
    summonFromDeck: true, // 🔮 追加能力: 山札からランダム召喚
    image: "M_kounotomodachi.pmg", 
    voice: ""
  }
];
// userProfile の初期化部分またはロジックで ownedCards を持たせます
window.userProfile = {
  name: "あなた",
  wins: 0,
  losses: 0,
  bestGauntletStage: 0,
  points: 1000, // 🪙 ガチャ用ポイント（初期1000pt）
  deck: typeof getDefault20CardDeck === 'function' ? getDefault20CardDeck() : [],
  ownedCards: [] // 🎴 所持カードIDリスト
};
// 初期デッキ定義 (20枚)
function getDefault20CardDeck() {
  return [
    "m1", "m1", "m1", "m2", "m2", "m2", "m3", "m3",
    "w1", "w1", "w2", "w2", "w3", "w3", "w4", "w4",
    "h1", "h1", "h2", "h2"
  ];
  
}