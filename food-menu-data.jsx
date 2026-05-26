// Food menu data — Stena Scandinavica restaurants
// Mirrors PRODUCTS shape so the menu page can reuse Shop-style filtering.
// Categories double as restaurants/sections of the menu.

const FOOD_MENU = [
  // ===== MAINS — flagship plates served in Taste / Metropolitan =====
  {
    id: 'stena-burger',
    cat: 'mains', sub: 'beef',
    name: { en: 'Stena cheeseburger', sv: 'Stena cheeseburger' },
    desc: {
      en: '180 g Swedish beef patty, aged cheddar, baby gem, vine tomato, house pickles in a brioche bun. Served with golden fries.',
      sv: '180 g svensk nötfärs, lagrad cheddar, romansallad, vintomat och husets pickles i briochebröd. Serveras med pommes.',
    },
    price: { sek: 215 },
    image: 'assets/dish-burger.png',
    tags: ['popular'],
    allergens: { en: 'Gluten · Egg · Milk · Mustard', sv: 'Gluten · Ägg · Mjölk · Senap' },
    venue: { en: 'À la carte · Deck 9', sv: 'À la carte · Däck 9' },
  },
  {
    id: 'grilled-salmon',
    cat: 'mains', sub: 'fish',
    name: { en: 'Grilled Norwegian salmon', sv: 'Grillad norsk lax' },
    desc: {
      en: 'Char-grilled salmon fillet, herb-roasted new potatoes and seasonal asparagus with a chive butter sauce.',
      sv: 'Grillad laxfilé, örtrostad färskpotatis och säsongens sparris med gräslökssmör.',
    },
    price: { sek: 245 },
    image: 'assets/dish-salmon.png',
    tags: ['gf'],
    allergens: { en: 'Fish · Milk', sv: 'Fisk · Mjölk' },
    venue: { en: 'À la carte · Deck 9', sv: 'À la carte · Däck 9' },
  },
  {
    id: 'chicken-alfredo',
    cat: 'mains', sub: 'pasta',
    name: { en: 'Chicken Alfredo fettuccine', sv: 'Kyckling Alfredo med fettuccine' },
    desc: {
      en: 'Slow-cooked fettuccine in a Parmesan cream sauce, char-grilled chicken breast, fresh parsley and cracked black pepper.',
      sv: 'Krämig fettuccine med parmesansås, grillad kycklingfilé, persilja och nymald svartpeppar.',
    },
    price: { sek: 195 },
    image: 'assets/dish-pasta.png',
    tags: [],
    allergens: { en: 'Gluten · Egg · Milk', sv: 'Gluten · Ägg · Mjölk' },
    venue: { en: 'À la carte · Deck 9', sv: 'À la carte · Däck 9' },
  },
  {
    id: 'sirloin-steak',
    cat: 'mains', sub: 'beef',
    name: { en: 'Grilled sirloin, herb butter', sv: 'Grillad entrecôte med örtsmör' },
    desc: {
      en: '220 g Irish sirloin from the grill, finished with parsley butter, served with creamy mashed potato and fine green beans.',
      sv: '220 g irländsk entrecôte från grillen, persiljesmör, krämigt potatismos och haricots verts.',
    },
    price: { sek: 325 },
    image: 'assets/dish-steak.png',
    tags: ['chef-pick', 'gf'],
    allergens: { en: 'Milk', sv: 'Mjölk' },
    venue: { en: 'À la carte · Deck 9', sv: 'À la carte · Däck 9' },
  },
  {
    id: 'pizza-margherita',
    cat: 'mains', sub: 'pizza',
    name: { en: 'Pizza Margherita', sv: 'Pizza Margherita' },
    desc: {
      en: 'Stone-baked sourdough base, San Marzano tomato, fior di latte mozzarella and fresh basil.',
      sv: 'Stenugnsbakad surdegsbotten, San Marzano-tomat, mozzarella fior di latte och färsk basilika.',
    },
    price: { sek: 165 },
    image: 'assets/dish-pizza.png',
    tags: ['veg'],
    allergens: { en: 'Gluten · Milk', sv: 'Gluten · Mjölk' },
    venue: { en: 'Casual Dining · Deck 8', sv: 'Casual Dining · Däck 8' },
  },
  {
    id: 'butter-chicken',
    cat: 'mains', sub: 'world',
    name: { en: 'Butter chicken with naan', sv: 'Butter chicken med naan' },
    desc: {
      en: 'Tandoori-marinated chicken in a creamy tomato and cashew sauce, basmati rice, fresh coriander and warm naan bread.',
      sv: 'Tandoorimarinerad kyckling i krämig tomat- och cashewsås, basmatiris, färsk koriander och varmt naanbröd.',
    },
    price: { sek: 185 },
    image: 'assets/dish-curry.png',
    tags: ['popular'],
    allergens: { en: 'Gluten · Milk · Nuts', sv: 'Gluten · Mjölk · Nötter' },
    venue: { en: 'Casual Dining · Deck 8', sv: 'Casual Dining · Däck 8' },
  },
  {
    id: 'beef-stirfry',
    cat: 'mains', sub: 'world',
    name: { en: 'Wok-fried beef & broccoli', sv: 'Wokad biff med broccoli' },
    desc: {
      en: 'Tender strips of beef with broccoli, peppers and onion in a black-pepper soy glaze, served with steamed jasmine rice.',
      sv: 'Möra strimlor av nötkött med broccoli, paprika och lök i pepparsoja, serveras med ångad jasminris.',
    },
    price: { sek: 175 },
    image: 'assets/dish-stirfry.png',
    tags: [],
    allergens: { en: 'Soy · Gluten · Sesame', sv: 'Soja · Gluten · Sesam' },
    venue: { en: 'Casual Dining · Deck 8', sv: 'Casual Dining · Däck 8' },
  },
  {
    id: 'shrimp-tacos',
    cat: 'mains', sub: 'world',
    name: { en: 'Chilli-lime shrimp tacos', sv: 'Räktacos med chili och lime' },
    desc: {
      en: 'Three soft corn tortillas, chargrilled shrimp, red cabbage slaw, avocado and a fresh lime crema.',
      sv: 'Tre mjuka majstortillas, grillade räkor, rödkålsslaw, avokado och frisk lime-crema.',
    },
    price: { sek: 195 },
    image: 'assets/dish-tacos.png',
    tags: [],
    allergens: { en: 'Shellfish · Milk', sv: 'Skaldjur · Mjölk' },
    venue: { en: 'Casual Dining · Deck 8', sv: 'Casual Dining · Däck 8' },
  },
  {
    id: 'mushroom-risotto',
    cat: 'mains', sub: 'pasta',
    name: { en: 'Wild mushroom risotto', sv: 'Skogssvamp-risotto' },
    desc: {
      en: 'Carnaroli rice slow-cooked with porcini and chestnut mushrooms, finished with aged Parmesan and parsley.',
      sv: 'Carnaroli-ris kokt med karljohan och kastanjechampinjon, toppad med lagrad parmesan och persilja.',
    },
    price: { sek: 175 },
    image: 'assets/dish-risotto.png',
    tags: ['veg', 'gf'],
    allergens: { en: 'Milk · Sulphites', sv: 'Mjölk · Sulfit' },
    venue: { en: 'À la carte · Deck 9', sv: 'À la carte · Däck 9' },
  },
  {
    id: 'buddha-bowl',
    cat: 'mains', sub: 'plant',
    name: { en: 'Roasted veg & quinoa bowl', sv: 'Rostade grönsaker & quinoabowl' },
    desc: {
      en: 'Quinoa, black beans, roasted sweet potato and peppers, charred corn, avocado, red cabbage and fresh coriander.',
      sv: 'Quinoa, svarta bönor, rostad sötpotatis och paprika, grillad majs, avokado, rödkål och koriander.',
    },
    price: { sek: 165 },
    image: 'assets/dish-buddha.png',
    tags: ['vegan', 'gf'],
    allergens: { en: 'No common allergens', sv: 'Inga vanliga allergener' },
    venue: { en: 'Casual Dining · Deck 8', sv: 'Casual Dining · Däck 8' },
  },

  // ===== SIDES =====
  { id: 'side-fries',    cat: 'sides', sub: 'sides', name: { en: 'Hand-cut fries',           sv: 'Handskurna pommes' },        desc: { en: 'Twice-cooked, sea salt, served with aioli.', sv: 'Dubbelfriterade, havssalt, serveras med aioli.' },  price: { sek: 65 },  image: null, tags: ['vegan'], allergens: { en: 'Egg (aioli)', sv: 'Ägg (aioli)' }, venue: { en: 'All restaurants', sv: 'Alla restauranger' } },
  { id: 'side-truffle',  cat: 'sides', sub: 'sides', name: { en: 'Truffle Parmesan fries',   sv: 'Tryffelpommes med parmesan' },desc: { en: 'Crisp fries, truffle oil, aged Parmesan, parsley.', sv: 'Krispiga pommes, tryffelolja, lagrad parmesan, persilja.' }, price: { sek: 95 },  image: null, tags: ['veg'], allergens: { en: 'Milk', sv: 'Mjölk' }, venue: { en: 'À la carte · Deck 9', sv: 'À la carte · Däck 9' } },
  { id: 'side-greens',   cat: 'sides', sub: 'sides', name: { en: 'Buttered seasonal greens', sv: 'Smörade säsongsgrönsaker' },  desc: { en: 'Fine beans, broccolini, and lemon zest.', sv: 'Haricots verts, broccolini och citronzest.' },        price: { sek: 75 },  image: null, tags: ['veg', 'gf'], allergens: { en: 'Milk', sv: 'Mjölk' }, venue: { en: 'All restaurants', sv: 'Alla restauranger' } },
  { id: 'side-onion',    cat: 'sides', sub: 'sides', name: { en: 'Beer-battered onion rings',sv: 'Friterade lökringar' },       desc: { en: 'Sweet onion in crisp lager batter.', sv: 'Söt gul lök i krispig lagersmet.' },                  price: { sek: 65 },  image: null, tags: ['veg'], allergens: { en: 'Gluten', sv: 'Gluten' }, venue: { en: 'Casual Dining · Deck 8', sv: 'Casual Dining · Däck 8' } },
  { id: 'side-salad',    cat: 'sides', sub: 'sides', name: { en: 'House salad',              sv: 'Husets sallad' },             desc: { en: 'Mixed leaves, cucumber, radish, vinaigrette.', sv: 'Blandade salladsblad, gurka, rädisa, vinägrett.' }, price: { sek: 55 },  image: null, tags: ['vegan', 'gf'], allergens: { en: 'No common allergens', sv: 'Inga vanliga allergener' }, venue: { en: 'All restaurants', sv: 'Alla restauranger' } },
  { id: 'side-mash',     cat: 'sides', sub: 'sides', name: { en: 'Buttery mashed potato',    sv: 'Krämigt potatismos' },        desc: { en: 'Whipped with brown butter and cream.', sv: 'Vispat med brynt smör och grädde.' },               price: { sek: 65 },  image: null, tags: ['veg', 'gf'], allergens: { en: 'Milk', sv: 'Mjölk' }, venue: { en: 'À la carte · Deck 9', sv: 'À la carte · Däck 9' } },

  // ===== KIDS =====
  { id: 'kids-meatballs', cat: 'kids', sub: 'kids', name: { en: "Meatballs & mash",      sv: 'Köttbullar & mos' },          desc: { en: 'Swedish meatballs, mashed potato, lingonberry jam.', sv: 'Svenska köttbullar, potatismos, lingonsylt.' }, price: { sek: 75 },  image: null, tags: [], allergens: { en: 'Gluten · Milk · Egg', sv: 'Gluten · Mjölk · Ägg' }, venue: { en: 'All restaurants', sv: 'Alla restauranger' } },
  { id: 'kids-mac',       cat: 'kids', sub: 'kids', name: { en: 'Mac & cheese',           sv: 'Mac & cheese' },              desc: { en: 'Creamy cheddar pasta, soft garlic bread on the side.', sv: 'Krämig pasta med cheddar, mjukt vitlöksbröd vid sidan.' }, price: { sek: 75 },  image: null, tags: ['veg'], allergens: { en: 'Gluten · Milk', sv: 'Gluten · Mjölk' }, venue: { en: 'Casual Dining · Deck 8', sv: 'Casual Dining · Däck 8' } },
  { id: 'kids-fish',      cat: 'kids', sub: 'kids', name: { en: 'Fish goujons & chips',   sv: 'Fiskpinnar & pommes' },       desc: { en: 'Crispy MSC fish goujons, chips, garden peas.', sv: 'Krispiga MSC-fiskpinnar, pommes och gröna ärtor.' }, price: { sek: 75 },  image: null, tags: [], allergens: { en: 'Gluten · Fish · Egg', sv: 'Gluten · Fisk · Ägg' }, venue: { en: 'Casual Dining · Deck 8', sv: 'Casual Dining · Däck 8' } },
  { id: 'kids-pizza',     cat: 'kids', sub: 'kids', name: { en: 'Mini margherita pizza',  sv: 'Mini margheritapizza' },      desc: { en: 'Tomato, mozzarella, fresh basil — small and shareable.', sv: 'Tomat, mozzarella, färsk basilika — litet format.' }, price: { sek: 75 },  image: null, tags: ['veg'], allergens: { en: 'Gluten · Milk', sv: 'Gluten · Mjölk' }, venue: { en: 'Casual Dining · Deck 8', sv: 'Casual Dining · Däck 8' } },

  // ===== DESSERTS =====
  { id: 'dessert-stp',    cat: 'desserts', sub: 'desserts', name: { en: 'Sticky toffee pudding', sv: 'Sticky toffee pudding' },     desc: { en: 'Dark sponge with toffee sauce and vanilla ice cream.', sv: 'Mörk kaka med toffee-sås och vaniljglass.' }, price: { sek: 85 },  image: null, tags: ['veg'], allergens: { en: 'Gluten · Milk · Egg', sv: 'Gluten · Mjölk · Ägg' }, venue: { en: 'À la carte · Deck 9', sv: 'À la carte · Däck 9' } },
  { id: 'dessert-rhubarb',cat: 'desserts', sub: 'desserts', name: { en: 'Rhubarb crumble',       sv: 'Rabarbersmul' },              desc: { en: 'Tart rhubarb compote, oat crumble, soft cream cheese mousse.', sv: 'Syrlig rabarberkompott, havresmul och färskostmousse.' }, price: { sek: 85 },  image: null, tags: ['veg'], allergens: { en: 'Gluten · Milk · Oats', sv: 'Gluten · Mjölk · Havre' }, venue: { en: 'À la carte · Deck 9', sv: 'À la carte · Däck 9' } },
  { id: 'dessert-cheese', cat: 'desserts', sub: 'desserts', name: { en: 'Nordic cheese plate',   sv: 'Nordisk osttallrik' },         desc: { en: 'Three Nordic cheeses, oat crackers, fig jam, walnuts.', sv: 'Tre nordiska ostar, havrekex, fikonsylt, valnötter.' }, price: { sek: 125 }, image: null, tags: ['veg'], allergens: { en: 'Gluten · Milk · Nuts', sv: 'Gluten · Mjölk · Nötter' }, venue: { en: 'À la carte · Deck 9', sv: 'À la carte · Däck 9' } },
  { id: 'dessert-icecream',cat: 'desserts', sub: 'desserts', name: { en: 'Soft serve sundae',     sv: 'Mjukglass sundae' },          desc: { en: 'Vanilla soft serve, choice of chocolate, caramel or berry sauce.', sv: 'Mjukglass med vanilj, choklad-, kola- eller bärsås.' }, price: { sek: 55 },  image: null, tags: ['veg'], allergens: { en: 'Milk', sv: 'Mjölk' }, venue: { en: 'Casual Dining · Deck 8', sv: 'Casual Dining · Däck 8' } },

  // ===== BREAKFAST =====
  { id: 'bf-buffet',     cat: 'breakfast', sub: 'breakfast', name: { en: 'Scandinavian breakfast buffet', sv: 'Skandinavisk frukostbuffé' }, desc: { en: 'Hot dishes, breads, cured meats, cheeses, fruit, yoghurt and pastries.', sv: 'Varma rätter, bröd, charkuterier, ostar, frukt, yoghurt och bakverk.' }, price: { sek: 145 }, image: null, tags: ['popular'], allergens: { en: 'See station labels', sv: 'Se märkning vid stationerna' }, venue: { en: 'Buffé · Deck 9', sv: 'Buffé · Däck 9' } },
  { id: 'bf-pancakes',   cat: 'breakfast', sub: 'breakfast', name: { en: 'Buttermilk pancakes',           sv: 'Amerikanska pannkakor' },     desc: { en: 'Short stack with maple syrup, fresh berries, crème fraîche.', sv: 'Tre pannkakor med lönnsirap, färska bär och crème fraîche.' }, price: { sek: 95 },  image: null, tags: ['veg'], allergens: { en: 'Gluten · Milk · Egg', sv: 'Gluten · Mjölk · Ägg' }, venue: { en: 'À la carte · Deck 9', sv: 'À la carte · Däck 9' } },
  { id: 'bf-avocado',    cat: 'breakfast', sub: 'breakfast', name: { en: 'Avocado on sourdough',          sv: 'Avokado på surdeg' },         desc: { en: 'Smashed avocado, heritage tomato, chilli flakes, poached egg.', sv: 'Mosad avokado, kärnfrisk tomat, chiliflingor och pocherat ägg.' }, price: { sek: 115 }, image: null, tags: ['veg'], allergens: { en: 'Gluten · Egg', sv: 'Gluten · Ägg' }, venue: { en: 'À la carte · Deck 9', sv: 'À la carte · Däck 9' } },
  { id: 'bf-bun',        cat: 'breakfast', sub: 'breakfast', name: { en: 'Cinnamon bun, freshly baked',   sv: 'Kanelbulle, nybakt' },        desc: { en: 'Sweet yeast dough, butter, cinnamon and pearl sugar.', sv: 'Sött jästbröd med smör, kanel och pärlsocker.' },           price: { sek: 39 },  image: null, tags: ['veg'], allergens: { en: 'Gluten · Milk · Egg', sv: 'Gluten · Mjölk · Ägg' }, venue: { en: 'Casual Dining · Deck 8', sv: 'Casual Dining · Däck 8' } },

  // ===== BEVERAGES =====
  { id: 'bev-espresso',  cat: 'beverages', sub: 'coffee', name: { en: 'Espresso / Americano',  sv: 'Espresso / Americano' },  desc: { en: 'Single origin Arabica, brewed to order.', sv: 'Single origin Arabica, bryggd på beställning.' },     price: { sek: 35 }, image: null, tags: [],      allergens: { en: 'No common allergens', sv: 'Inga vanliga allergener' }, venue: { en: 'Casual Dining · Deck 8', sv: 'Casual Dining · Däck 8' } },
  { id: 'bev-latte',     cat: 'beverages', sub: 'coffee', name: { en: 'Flat white / Cappuccino',sv: 'Flat white / Cappuccino' },desc:{ en: 'Double shot with steamed organic milk.', sv: 'Dubbel espresso med ångad ekologisk mjölk.' },          price: { sek: 49 }, image: null, tags: ['veg'], allergens: { en: 'Milk', sv: 'Mjölk' }, venue: { en: 'Casual Dining · Deck 8', sv: 'Casual Dining · Däck 8' } },
  { id: 'bev-juice',     cat: 'beverages', sub: 'soft',   name: { en: 'Fresh orange juice',     sv: 'Färskpressad apelsinjuice' },desc:{ en: 'Pressed onboard each morning.', sv: 'Pressad ombord varje morgon.' },                                price: { sek: 45 }, image: null, tags: ['vegan', 'gf'], allergens: { en: 'No common allergens', sv: 'Inga vanliga allergener' }, venue: { en: 'All restaurants', sv: 'Alla restauranger' } },
  { id: 'bev-water',     cat: 'beverages', sub: 'soft',   name: { en: 'Sparkling / still water',sv: 'Mineralvatten / stilla vatten' },desc:{ en: 'Locally bottled in 500 ml glass.', sv: 'Lokalt buteljerad 500 ml på glas.' },                          price: { sek: 35 }, image: null, tags: ['vegan', 'gf'], allergens: { en: 'No common allergens', sv: 'Inga vanliga allergener' }, venue: { en: 'All restaurants', sv: 'Alla restauranger' } },
];

window.FOOD_MENU = FOOD_MENU;
