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
// cards1.js の一番上にこれを追加してください
// cards1.js の一番上に追記

const ELEMENTS = {
  fire:  { name: "火", icon: "🔥", class: "elem-fire",  strongTo: "wood" },
  water: { name: "水", icon: "💧", class: "elem-water", strongTo: "fire" },
  wood:  { name: "木", icon: "🌿", class: "elem-wood",  strongTo: "water" },
  light: { name: "光", icon: "✨", class: "elem-light", strongTo: "dark" },
  dark:  { name: "闇", icon: "💀", class: "elem-dark",  strongTo: "light" }
};
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
    atk: 2,  
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
    atk: 4, 
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
    atk: 4, 
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
    atk: 4, 
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
  },
  // 例：CARD_DATABASE 内に追加
{
  id: "h5",
  name: "がめおの財布",
  type: "magic",
  elem: "light",
  rarity: 1,
  costMp: 3,
  drawCount: 2, // 👈 引く枚数を指定
  icon: "🏺",
  desc: "山札からカードを2枚引く。",
  flavor:"大丈夫大丈夫がめおさんが出してくれるよ",
  image:"M_gameowallet.jpg"
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
},

// --- 新規追加カード 5枚 ---
{
  id: "m_volcano_dragon",
  name: "ヴォルカノドラゴン",
  type: "monster",
  elem: "fire",
  rarity: 3,
  costMp: 12,
  atk: 22,
  hp: 25,
  splashDamage: 6, // 攻撃時、他の敵1体に6の追撃ダメージ
  icon: "🐉",
  desc: "攻撃時、他の敵1体にも6ダメージの追撃を与える。",
  flavor: "赤城のマグマから解き放たれた深紅の暴竜。"
},
{
  id: "m_frost_guardian",
  name: "氷結の守護像",
  type: "monster",
  elem: "water",
  rarity: 2,
  costMp: 8,
  atk: 10,
  hp: 30,
  halfDamage: true, // 受けるダメージを半減
  icon: "🗿",
  desc: "受けたダメージを常に半減する鉄壁の守護者。",
  flavor: "絶対零度の氷で身を包み、あらゆる打撃を跳ね返す。"
},
{
  id: "m_shadow_assassin",
  name: "シャドウアサシン",
  type: "monster",
  elem: "dark",
  rarity: 2,
  costMp: 7,
  atk: 18,
  hp: 12,
  applyStun: true, // 攻撃した対象を1ターン行動不能にする
  icon: "🥷",
  desc: "攻撃した対象を1ターンの間【行動不能】にする。",
  flavor: "影から忍び寄り、一撃で獲物の動きを封じる闇の刺客。"
},
{
  id: "w_excalibur",
  name: "聖剣エクスカリバー",
  type: "weapon",
  elem: "light",
  rarity: 3,
  costMp: 10,
  atk: 7,
  icon: "⚔️",
  desc: "装備モンスターの攻撃力を+15する伝説の聖剣。",
  flavor: "選ばれし勇者のみが扱うことを許される光の宝剣。"
},
{
  id: "sp_elixir",
  name: "赤城の霊薬",
  type: "magic",
  elem: "wood",
  rarity: 1,
  costMp: 6,
  heal: 20,
  mpRecover: 10,
  icon: "🧪",
  desc: "自分のHPを20回復し、MPを10回復する。",
  flavor: "赤城山に自生する希少な薬草から精製された秘薬。"
},
{
  id: "w_brass_knuckles",
  name: "メリケンサック",
  type: "weapon",
  elem: "fire",
  rarity: 1,
  costMp: 2,
  atk: 3,
  icon: "👊",
  desc: "装備モンスターの攻撃力を+3する金属製の拳具。",
  flavor:"いいえ、殴るときに使います",
  image:"SmartSelect_20261027_012152_Discord.jpg"
},
{
  id: "m_k7",
  name: "k7",
  type: "monster",
  elem: "light",       // 属性（fire, water, wood, light, dark から選択）
  rarity: 3,          // レア度（1〜3）
  costMp: 12,          // 消費MP
  atk: 18,            // 攻撃力
  hp: 27,             // HP
  hasHaste: true,     // ★ 召喚酔い無視（速攻）フラグ
  icon: "⚡",
  desc: "召喚ターンからすぐに攻撃可能（召喚酔いなし）。",
  flavor: "k7システム起動！！",
  image:"01331163e2c1231a.jpg"
},
[
  {
    id: "m_iron_golem",
    name: "アイアンゴーレム",
    type: "monster",
    elem: "wood",
    rarity: 1,
    costMp: 4,
    atk: 5,
    hp: 25,
    halfDamage: true,
    icon: "🗿",
    desc: "受けたダメージを常に半減する低コストな壁モンスター。",
    flavor: "頑丈な鉄で造られた自動人形。城門の防衛に用いられる。"
  },
  {
    id: "m_aegis_knight",
    name: "イージス・ナイト",
    type: "monster",
    elem: "light",
    rarity: 2,
    costMp: 6,
    atk: 8,
    hp: 22,
    taunt: true, // 挑発（攻撃誘引）
    icon: "🛡️",
    desc: "【挑発】敵は他の味方モンスターを攻撃できず、このカードを優先攻撃しなければならない。",
    flavor: "神盾の加護を受けし騎士。身を賭して仲間を護り抜く。"
  },
  {
    id: "m_barrier_sprite",
    name: "結界の妖精",
    type: "monster",
    elem: "water",
    rarity: 1,
    costMp: 3,
    atk: 3,
    hp: 12,
    shieldOnSummon: 10, // 召喚時プレイヤー/味方にシールド付与等
    icon: "🧚",
    desc: "召喚時、自分のHPを10回復（またはシールド獲得）する。",
    flavor: "清らかな水で結界を張り、傷ついた者を包み込む小さな精霊。"
  },
  {
    id: "m_phoenix_guardian",
    name: "不死鳥のガーディアン",
    type: "monster",
    elem: "fire",
    rarity: 3,
    costMp: 9,
    atk: 14,
    hp: 20,
    indestructibleOnce: true, // 1度だけHP1で耐える
    icon: "🦅",
    desc: "HPが0になるダメージを受けた時、1度だけHP1で耐える。",
    flavor: "何度でも不屈の焔となって甦る、伝説の聖鳥の化身。"
  },
  {
    id: "m_abyssal_turtle",
    name: "深淵の玄武タートル",
    type: "monster",
    elem: "dark",
    rarity: 2,
    costMp: 7,
    atk: 6,
    hp: 35,
    reflectDamage: 4, // 攻撃してきた敵に反射ダメージ
    icon: "🐢",
    desc: "攻撃を受けた際、攻撃してきた敵に4ダメージの反撃を与える。",
    flavor: "漆黒の甲羅に攻撃を受けると、呪いの波動が相手を蝕む。"
  }
]
// 初期デッキ定義 (20枚)
function getDefault20CardDeck() {
  return [
    "m1", "m1", "m1", "m2", "m2", "m2", "m3", "m3",
    "w1", "w1", "w2", "w2", "w3", "w3", "w4", "w4",
    "h1", "h1", "h2", "h2"
  ];
  
}