
// Game data for Hello Kitty Island Adventure companion app

export interface Character {
  id: string;
  name: string;
  series: string;
  location: string;
  favoriteTags: string[];
  favoriteGifts: { giftId: string; hearts: number }[];
  giftGiven: string;
  friendshipLevel: number;
  maxFriendshipLevel: number;
  description: string;
}

export interface Gift {
  id: string;
  name: string;
  category: string;
  rarity: string;
  description: string;
  craftingMaterials?: { name: string; quantity: number; source: string }[];
  foundAt?: string[];
}

export interface Tag {
  id: string;
  name: string;
  description: string;
  color: string;
}

export interface Location {
  id: string;
  name: string;
  description: string;
  availableResources: string[];
}

export const characters: Character[] = [
  {
    "id": "chococat",
    "name": "Chococat",
    "series": "Hello Kitty Island Adventure",
    "location": "Seaside Resort",
    "favoriteTags": ["device", "book", "chocolate"],
    "favoriteGifts": [
      {
        "giftId": "interactive-history-of-chocolate",
        "hearts": 3
      },
      {
        "giftId": "ancient-inventions",
        "hearts": 2
      }
    ],
    "giftGiven": "gizmo",
    "friendshipLevel": 0,
    "maxFriendshipLevel": 15,
    "description": "Chococat loves going on adventures on the island, and is always eager to help! He tends to be a little scatterbrained at times, but he has a curious mind and is always up on the latest news. He is a DIY genius and can help you craft tools and all sorts of trinkets. With you and Chococat on the case, there’s nothing you can’t solve together!"
  },
  {
    "id": "badtz-maru",
    "name": "Badtz-maru",
    "series": "Hello Kitty Island Adventure",
    "location": "Seaside Resort",
    "favoriteTags": ["joke", "tropical", "pizza"],
    "favoriteGifts": [
      {
        "giftId": "ultimate-joke-pizza",
        "hearts": 3
      },
      {
        "giftId": "pineapple-pizza",
        "hearts": 2
      }
    ],
    "giftGiven": "paper",
    "friendshipLevel": 0,
    "maxFriendshipLevel": 20,
    "description": "Badtz-maru is the trickster of the group and is quick with a practical joke. When not playing video games, he likes to relax on the beach and go fishing. He runs the Comic and Bait Shop on the pier of Seaside Resort, helping players craft fishing tools and rewarding them for releasing fish."
  },
  {
    "id": "cinnamoroll",
    "name": "Cinnamoroll",
    "series": "Hello Kitty Island Adventure",
    "location": "Friendship Island",
    "favoriteTags": ["cozy-beverage", "chocolate", "spice"],
    "favoriteGifts": [
      {
        "giftId": "chocolate-chai",
        "hearts": 3
      },
      {
        "giftId": "chai",
        "hearts": 2
      },
      {
        "giftId": "espresso",
        "hearts": 2
      },
      {
        "giftId": "hot-cocoa",
        "hearts": 2
      },
      {
        "giftId": "mocha",
        "hearts": 2
      },
      {
        "giftId": "molten-frappe",
        "hearts": 2
      },
      {
        "giftId": "spicy-pumpkin-latte",
        "hearts": 2
      },
      {
        "giftId": "volcano-cake",
        "hearts": 2
      },
      {
        "giftId": "cinnamorolls-cocoa",
        "hearts": 2
      }
    ],
    "giftGiven": "candy cloud",
    "friendshipLevel": 0,
    "maxFriendshipLevel": 20,
    "description": "Cinnamoroll is a sweet pup who always wants to help his friends when needed. He is quite shy but very friendly, and amazingly he can fly through the air by floating with his huge ears. He’s so fast, he can pick up and deliver anything around the island in a blink of an eye (even you)!"
  },
  {
    "id": "hangyodon",
    "name": "Hangyodon",
    "series": "Hello Kitty Island Adventure",
    "location": "rainbow-reef",
    "favoriteTags": ["aquatic", "fish", "cloth"],
    "favoriteGifts": [
      {
        "giftId": "mermaid-figure",
        "hearts": 3
      },
      {
        "giftId": "aquatic-material",
        "hearts": 2
      },
      {
        "giftId": "any-aquatic-fish-cloth-item",
        "hearts": 1
      }
    ],
    "giftGiven": "candlenut",
    "friendshipLevel": 0,
    "maxFriendshipLevel": 15,
    "description": "Hangyodon is found around the Rainbow Reef, cleaning up the Rainbow Reef, and working on his \"tight ten\" for the next Open-Mic Comedy Night at Atlantis. Hangyodon runs the Comedy Club and helps you learn to explore the Rainbow Reef. He also helps you learn to use the Espresso Machine."
  },
  {
    "id": "hello-kitty",
    "name": "Hello Kitty",
    "series": "Hello Kitty Island Adventure",
    "location": "seaside-resort",
    "favoriteTags": ["fruit", "bakery", "fancy"],
    "favoriteGifts": [
      {
        "giftId": "red-bow-apple-pie",
        "hearts": 3
      },
      {
        "giftId": "mamas-apple-pie",
        "hearts": 2
      },
      {
        "giftId": "strawberry-shortcake",
        "hearts": 2
      },
      {
        "giftId": "fruity-cheesecake",
        "hearts": 2
      },
      {
        "giftId": "strawberry-cheesecake",
        "hearts": 2
      },
      {
        "giftId": "beignets-with-pineapple-dip",
        "hearts": 2
      },
      {
        "giftId": "candied-banana-coffee",
        "hearts": 2
      },
      {
        "giftId": "fruit-tart",
        "hearts": 2
      }
    ],
    "giftGiven": "tofu",
    "friendshipLevel": 0,
    "maxFriendshipLevel": 25,
    "description": "Hello Kitty has chosen to run the Cafe on the island. A great listener, a thoughtful gift-giver, and someone who loves a chat -- the Cafe is the right spot for her!"
  },
  {
    "id": "keroppi",
    "name": "Keroppi",
    "series": "Hello Kitty Island Adventure",
    "location": "spooky-swamp",
    "favoriteTags": ["critters", "swampy", "wood"],
    "favoriteGifts": [
      {
        "giftId": "critter-totem",
        "hearts": 3
      },
      {
        "giftId": "swampy-souvenir-doll",
        "hearts": 2
      },
      {
        "giftId": "swampy-lamb-plush",
        "hearts": 2
      },
      {
        "giftId": "any-critters-swampy-wood-item",
        "hearts": 1
      }
    ],
    "giftGiven": "sugarkelp",
    "friendshipLevel": 0,
    "maxFriendshipLevel": 15,
    "description": "Keroppi is so excited to be here with all the Critters. Always jumping from activity to activity, Keroppi's energy and enthusiasm have found a purpose here on the island."
  },
  {
    "id": "kuromi",
    "name": "Kuromi",
    "series": "Hello Kitty Island Adventure",
    "location": "spooky-swamp",
    "favoriteTags": ["soda", "fall", "spooky"],
    "favoriteGifts": [
      {
        "giftId": "pumpkin-spice-soda",
        "hearts": 3
      },
      {
        "giftId": "spicy-pumpkin-latte",
        "hearts": 2
      },
      {
        "giftId": "any-spooky-fall-soda-item",
        "hearts": 1
      }
    ],
    "giftGiven": "light-stone",
    "friendshipLevel": 0,
    "maxFriendshipLevel": 20,
    "description": "Kuromi is a master of the mystical, arcane, and mischievous. She hangs out in the Spooky Swamp, helps you restore the Haunted Mansion, and teaches potion brewing. She likes soda, fall, and spooky items."
  },
  {
    "id": "my-melody",
    "name": "My Melody",
    "series": "Hello Kitty Island Adventure",
    "location": "seaside-resort",
    "favoriteTags": ["sweet", "pink", "dreamy"],
    "favoriteGifts": [
      {
        "giftId": "pink-clouds-ice-cream",
        "hearts": 3
      },
      {
        "giftId": "strawberry-almond-galette",
        "hearts": 3
      },
      {
        "giftId": "almond-pound-cake",
        "hearts": 2
      },
      {
        "giftId": "pink-latte",
        "hearts": 2
      },
      {
        "giftId": "pink-cloud",
        "hearts": 2
      },
      {
        "giftId": "sweet-dreams-stories",
        "hearts": 2
      }
    ],
    "giftGiven": "flour",
    "friendshipLevel": 0,
    "maxFriendshipLevel": 20,
    "description": "My Melody runs the island’s gift shop and is passionate about handmade crafts and sweet gifts. She’ll help you restore bridges and cabins and offers dreamy, heartfelt decor at her store."
  },
  {
    "id": "pekkle",
    "name": "Pekkle",
    "series": "Hello Kitty Island Adventure",
    "location": "gemstone-mountain",
    "favoriteTags": ["music", "rocky", "relax"],
    "favoriteGifts": [
      {
        "giftId": "mountain-soundtrack",
        "hearts": 3
      },
      {
        "giftId": "rocky-music-box",
        "hearts": 2
      },
      {
        "giftId": "stacked-stones",
        "hearts": 2
      }
    ],
    "giftGiven": "feather",
    "friendshipLevel": 0,
    "maxFriendshipLevel": 15,
    "description": "A kind-natured fellow, Pekkle loves to sing and dance. You’ll find him in Gemstone Mountain trying to restore the Dance Hall and bring life back to the town with music and joy."
  },
  {
    "id": "pochacco",
    "name": "Pochacco",
    "series": "Hello Kitty Island Adventure",
    "location": "seaside-resort",
    "favoriteTags": ["sports", "healthy", "veggie"],
    "favoriteGifts": [
      {
        "giftId": "pochacco-energy-pop",
        "hearts": 3
      },
      {
        "giftId": "everything-pizza",
        "hearts": 2
      },
      {
        "giftId": "veggie-crepe",
        "hearts": 2
      }
    ],
    "giftGiven": "strawberry",
    "friendshipLevel": 0,
    "maxFriendshipLevel": 20,
    "description": "Pochacco loves athletics! Ever since finding the obstacle courses he's been obsessed with getting the best time on all of them! He’s a playful and curious pup who enjoys running, eating healthy treats, and helping you discover fun island activities like photography and challenges."
  },
  {
    "id": "pompompurin",
    "name": "Pompompurin",
    "series": "Hello Kitty Island Adventure",
    "location": "gemstone-mountain",
    "favoriteTags": ["dessert", "relax", "dairy"],
    "favoriteGifts": [
      {
        "giftId": "mamas-pudding",
        "hearts": 3
      },
      {
        "giftId": "cheese-ice-cream",
        "hearts": 2
      },
      {
        "giftId": "any-dessert-relax-dairy-item",
        "hearts": 1
      }
    ],
    "giftGiven": "banana",
    "friendshipLevel": 0,
    "maxFriendshipLevel": 20,
    "description": "Pompompurin's good nature makes him an easy friend, and he loves to try out new foods or go on adventures. He runs the Dessert Boat and helps you explore the Mines and use the Dessert Machine to make tasty treats."
  },
  {
    "id": "retsuko",
    "name": "Retsuko",
    "series": "Hello Kitty Island Adventure",
    "location": "mount-hothead",
    "favoriteTags": ["fire", "music", "metal"],
    "favoriteGifts": [
      {
        "giftId": "volcanic-guitar",
        "hearts": 3
      },
      {
        "giftId": "volcano-soundtrack",
        "hearts": 2
      },
      {
        "giftId": "any-fire-music-metal-item",
        "hearts": 1
      }
    ],
    "giftGiven": "dough",
    "friendshipLevel": 0,
    "maxFriendshipLevel": 20,
    "description": "Retsuko is a mild-mannered office worker, that is, until it's time to rock. Then all bets are off. She wanders Mount Hothead searching for her lost luggage. Though easily frustrated, she brings fiery energy and unforgettable rage-karaoke to her vacation."
  },
  {
    "id": "tuxedosam",
    "name": "Tuxedosam",
    "series": "Hello Kitty Island Adventure",
    "location": "seaside-resort",
    "favoriteTags": ["cloth", "tropical", "fancy"],
    "favoriteGifts": [
      {
        "giftId": "designer-island-doll",
        "hearts": 3
      },
      {
        "giftId": "tropical-gift",
        "hearts": 2
      },
      {
        "giftId": "any-cloth-tropical-fancy-item",
        "hearts": 1
      }
    ],
    "giftGiven": "thread",
    "friendshipLevel": 0,
    "maxFriendshipLevel": 15,
    "description": "Tuxedosam is an avid collector of bow ties and has set up the clothing shop on the island. He runs a shop where you can buy clothes, change appearance, and eventually dye outfits. He has a keen eye for tropical, cloth, and fancy items."
  },
  {
    "id": "wish-me-mell",
    "name": "Wish me mell",
    "series": "Hello Kitty Island Adventure",
    "location": "Merry Meadow",
    "favoriteTags": ["fire", "flower", "rare"],
    "favoriteGifts": [
      { "giftId": "rare-candle", "hearts": 3 },
      { "giftId": "flower-candle", "hearts": 2 }
    ],
    "giftGiven": "Honeycomb",
    "friendshipLevel": 0,
    "maxFriendshipLevel": 20,
    "description": "Wish me mell is friendly, with a good heart. She's a little clumsy, loves to write letters, and to garden in the Merry Meadow."
  },
  {
    "id": "my-sweet-piano",
    "name": "My Sweet Piano",
    "series": "Hello Kitty Island Adventure",
    "location": "Seaside Resort, City Town",
    "favoriteTags": ["cloud", "wood", "creative"],
    "favoriteGifts": [
      { "giftId": "colorful-lamb-plush", "hearts": 3 },
      { "giftId": "lamb-plush", "hearts": 2 }
    ],
    "giftGiven": "Wool",
    "friendshipLevel": 0,
    "maxFriendshipLevel": 20,
    "description": "My Sweet Piano is a kind and gentle sheep with fluffy pink wool. She's best friends with My Melody and she plays the piano! She helps run the Small Gift Big Smile store and later opens a customization shop for Visitor Cabins and Plush Pals. Creative and cheerful, she loves to spread joy through crafts and music."
  },
  {
    "id": "big-challenges",
    "name": "Big Challenges",
    "series": "Hello Kitty Island Adventure",
    "location": "Seaside Resort",
    "favoriteTags": ["volcanic", "resilience", "book"],
    "favoriteGifts": [
      {
        "giftId": "the-greatest-challenge",
        "hearts": 3
      },
      {
        "giftId": "meditations-on-resilience",
        "hearts": 2
      },
      {
        "giftId": "any-volcanic-resilience-book-item",
        "hearts": 1
      }
    ],
    "giftGiven": "Little Challenge",
    "friendshipLevel": 0,
    "maxFriendshipLevel": 20,
    "description": "Big Challenges mysteriously disappeared years ago, waiting to be discovered by a wandering adventurer. Adventurous and outgoing, he dreams of building a roller coaster on Icy Peak and loves trying bold, daring things—often with his best friend TOPHAT by his side."
  },
  {
    "id": "tophat",
    "name": "TOPHAT",
    "series": "Hello Kitty Island Adventure",
    "location": "Seaside Resort",
    "favoriteTags": ["digital", "fancy", "stars"],
    "favoriteGifts": [
      {
        "giftId": "the-future-of-everything",
        "hearts": 3
      },
      {
        "giftId": "computer",
        "hearts": 2
      },
      {
        "giftId": "any-digital-fancy-stars-item",
        "hearts": 1
      }
    ],
    "giftGiven": "Glitch",
    "friendshipLevel": 0,
    "maxFriendshipLevel": 10,
    "description": "A mysterious supercomputer who deeply cares about his friend Big Challenges. He often worries and is still recovering lost memories after the Power Crystals restoration. Despite his missing feet, he's known for his unique backstroke swimming style."
  },
  {
    "id": "lala",
    "name": "Lala",
    "series": "Little Twin Stars",
    "location": "Cloud Island",
    "favoriteTags": ["creative", "dreamy", "cheese"],
    "favoriteGifts": [
      { "giftId": "quattro-formaggi-pizza", "hearts": 3 },
      { "giftId": "cheese-cloud", "hearts": 2 },
      { "giftId": "three-cheese-pizza", "hearts": 2 },
      { "giftId": "art-supplies", "hearts": 2 }
    ],
    "giftGiven": "stardust",
    "friendshipLevel": 0,
    "maxFriendshipLevel": 20,
    "description": "Lala is the older sister of Kiki, the two being the inseparable Little Twin Stars and benefactors of the island. Lala can be a little timid, and she loves drawing, writing poems, and cooking! She tries to plan ahead to avoid trouble. Even when she and Kiki fight, they always make up quickly."
  },
  {
    "id": "kiki",
    "name": "Kiki",
    "series": "Little Twin Stars",
    "location": "Cloud Island",
    "favoriteTags": ["stars", "dreamy", "frozen"],
    "favoriteGifts": [
      { "giftId": "starry-skies-shake", "hearts": 3 },
      { "giftId": "dreamy-star", "hearts": 2 },
      { "giftId": "art-supplies", "hearts": 2 },
      { "giftId": "pastel-rainbow-banister", "hearts": 2 },
      { "giftId": "decorative-cloud-cart", "hearts": 2 }
    ],
    "giftGiven": "stardust",
    "friendshipLevel": 0,
    "maxFriendshipLevel": 20,
    "description": "Kiki is the younger brother of Lala and one of the inseparable Little Twin Stars. Curious and inventive, he loves star-fishing and exploring. Despite his cheekiness, he looks out for Lala and tries to protect her, though his curiosity sometimes gets them into trouble."
  }
];

export const gifts: Gift[] = [
  {
    "id": "interactive-history-of-chocolate",
    "name": "Interactive History of Chocolate",
    "category": "Book",
    "rarity": "Rare",
    "description": "A rare crafted book combining chocolate and historical inventions.",
    "craftingMaterials": [
      { "name": "Blank Book", "quantity": 1, "source": "Crafting Table" },
      { "name": "Mechanism", "quantity": 1, "source": "Crafting Table" },
      { "name": "Spark", "quantity": 1, "source": "Crafting Table" },
      { "name": "Chocolate Coin", "quantity": 3, "source": "Various" }
    ]
  },
  {
    "id": "ancient-inventions",
    "name": "Ancient Inventions",
    "category": "Book",
    "rarity": "Rare",
    "description": "A compendium of old-world devices and ideas.",
    "craftingMaterials": [
      { "name": "Blank Book", "quantity": 1, "source": "Crafting Table" },
      { "name": "Mechanism", "quantity": 1, "source": "Crafting Table" }
    ]
  },
  {
    "id": "ultimate-joke-pizza",
    "name": "Ultimate Joke Pizza",
    "category": "Pizza",
    "rarity": "Legendary",
    "description": "The funniest pizza with tropical ingredients.",
    "craftingMaterials": [
      { "name": "Dough", "quantity": 1, "source": "Pizza Oven" },
      { "name": "Tofu", "quantity": 1, "source": "Various" },
      { "name": "Pineapple", "quantity": 1, "source": "Tropical Areas" }
    ]
  },
  {
    "id": "pineapple-pizza",
    "name": "Pineapple Pizza",
    "category": "Food",
    "rarity": "Uncommon",
    "description": "A tropical twist on a classic dish.",
    "craftingMaterials": [
      { "name": "Dough", "quantity": 1, "source": "Pizza Oven" },
      { "name": "Pineapple", "quantity": 1, "source": "Tropical Areas" }
    ]
  },
  {
    "id": "chocolate-chai",
    "name": "Chocolate Chai",
    "category": "cozy beverage",
    "rarity": "Uncommon",
    "description": "A warm and rich drink combining the sweetness of chocolate with spiced chai flavors. One of Cinnamoroll’s top favorites.",
    "craftingMaterials": [
      { "name": "Candlenut", "quantity": 1, "source": "Found near hot springs or purchased from visitors" },
      { "name": "Chocolate Coin", "quantity": 1, "source": "Found around Cozy Islands or crafted" },
      { "name": "Magma Bloom", "quantity": 1, "source": "Harvested from volcanic biomes" }
    ],
    "foundAt": ["Espresso Machine"]
  },
  {
    "id": "chai",
    "name": "Chai",
    "category": "cozy beverage",
    "rarity": "Uncommon",
    "description": "A comforting blend of spices and warmth. A strong 2-heart gift for Cinnamoroll.",
    "craftingMaterials": [
      { "name": "Candlenut", "quantity": 1, "source": "Found near hot springs or purchased from visitors" },
      { "name": "Magma Bloom", "quantity": 1, "source": "Harvested from volcanic biomes" }
    ],
    "foundAt": ["Espresso Machine"]
  },
  {
    "id": "espresso",
    "name": "Espresso",
    "category": "cozy beverage",
    "rarity": "Uncommon",
    "description": "A strong, spicy boost for chilly days. Cinnamoroll enjoys this fiery drink.",
    "craftingMaterials": [
      { "name": "Candlenut", "quantity": 1, "source": "Found near hot springs or purchased from visitors" },
      { "name": "Cinna Bloom", "quantity": 1, "source": "Grown in cozy climates" },
      { "name": "Magma Bloom", "quantity": 1, "source": "Harvested from volcanic biomes" }
    ],
    "foundAt": ["Espresso Machine"]
  },
  {
    "id": "hot-cocoa",
    "name": "Hot Cocoa",
    "category": "cozy beverage",
    "rarity": "Uncommon",
    "description": "A relaxing, chocolatey drink that warms the heart. Well liked by Cinnamoroll.",
    "craftingMaterials": [
      { "name": "Candlenut", "quantity": 1, "source": "Found near hot springs or purchased from visitors" },
      { "name": "Coral Milk", "quantity": 1, "source": "Harvested from coral environments" },
      { "name": "Chocolate Coin", "quantity": 1, "source": "Found around Cozy Islands or crafted" }
    ],
    "foundAt": ["Espresso Machine"]
  },
  {
    "id": "mocha",
    "name": "Mocha",
    "category": "cozy beverage",
    "rarity": "Uncommon",
    "description": "A rich blend of coffee and chocolate that Cinnamoroll finds comforting.",
    "craftingMaterials": [
      { "name": "Candlenut", "quantity": 1, "source": "Found near hot springs or purchased from visitors" },
      { "name": "Chocolate Coin", "quantity": 1, "source": "Found around Cozy Islands or crafted" }
    ],
    "foundAt": ["Espresso Machine"]
  },
  {
    "id": "molten-frappe",
    "name": "Molten Frappe",
    "category": "cozy beverage",
    "rarity": "Uncommon",
    "description": "A spicy frozen drink with volcanic flare. Popular with Cinnamoroll.",
    "craftingMaterials": [
      { "name": "Candlenut", "quantity": 1, "source": "Found near hot springs or purchased from visitors" },
      { "name": "Snowcicle", "quantity": 1, "source": "Found in snowy zones" },
      { "name": "Magma Bloom", "quantity": 1, "source": "Harvested from volcanic biomes" }
    ],
    "foundAt": ["Espresso Machine"]
  },
  {
    "id": "spicy-pumpkin-latte",
    "name": "Spicy Pumpkin Latte",
    "category": "cozy beverage",
    "rarity": "Rare",
    "description": "A cozy, spicy seasonal drink. A big hit with Cinnamoroll.",
    "craftingMaterials": [
      { "name": "Candlenut", "quantity": 1, "source": "Found near hot springs or purchased from visitors" },
      { "name": "Cinna Bloom", "quantity": 1, "source": "Grown in cozy climates" },
      { "name": "Pumpkin", "quantity": 1, "source": "Harvested in autumn areas" }
    ],
    "foundAt": ["Espresso Machine"]
  },
  {
    "id": "volcano-cake",
    "name": "Volcano Cake",
    "category": "bakery",
    "rarity": "Rare",
    "description": "A decadent, chocolatey treat with a molten twist. Cinnamoroll enjoys this sweet option.",
    "craftingMaterials": [
      { "name": "Flour", "quantity": 1, "source": "Crafted or found near Bakery areas" },
      { "name": "Chocolate Coin", "quantity": 1, "source": "Found around Cozy Islands or crafted" },
      { "name": "Magma Bloom", "quantity": 1, "source": "Harvested from volcanic biomes" }
    ],
    "foundAt": ["Oven"]
  },
  {
    "id": "cinnamorolls-cocoa",
    "name": "Cinnamoroll’s Cocoa",
    "category": "chocolate beverage",
    "rarity": "Rare",
    "description": "Cinnamoroll’s signature drink made with Hot Cocoa, Swampmallows, and Stardust. A rare and heartfelt gift.",
    "craftingMaterials": [
      { "name": "Hot Cocoa", "quantity": 1, "source": "Crafted via Espresso Machine" },
      { "name": "Swampmallow", "quantity": 5, "source": "Found in marshy areas" },
      { "name": "Stardust", "quantity": 10, "source": "Collected from star-themed biomes or events" }
    ],
    "foundAt": ["Creation Station"]
  },
  {
    "id": "mermaid-figure",
    "name": "Mermaid Figure",
    "category": "Crafted",
    "rarity": "Rare",
    "description": "A beautifully made figure of a mermaid, loved by Hangyodon.",
    "craftingMaterials": [
      { "name": "Seashell", "quantity": 5, "source": "Gathering" },
      { "name": "Pineapple", "quantity": 3, "source": "Harvesting" },
      { "name": "Fabric", "quantity": 2, "source": "Crafting" }
    ]
  },
  {
    "id": "aquatic-material",
    "name": "Aquatic Material",
    "category": "Crafted",
    "rarity": "Uncommon",
    "description": "A soft material inspired by the ocean, perfect for Hangyodon.",
    "craftingMaterials": [
      { "name": "Seashell", "quantity": 5, "source": "Gathering" },
      { "name": "Feather", "quantity": 3, "source": "Gathering" },
      { "name": "Fabric", "quantity": 2, "source": "Crafting" }
    ]
  },
  {
    "id": "red-bow-apple-pie",
    "name": "Red Bow Apple Pie",
    "category": "Bakery",
    "rarity": "Rare",
    "description": "A beautifully baked apple pie with Hello Kitty's signature red bow.",
    "craftingMaterials": [
      { "name": "Flour", "quantity": 1, "source": "Oven" },
      { "name": "Apple", "quantity": 1, "source": "Harvesting" },
      { "name": "Magma Bloom", "quantity": 1, "source": "Gathering" }
    ]
  },
  {
    "id": "mamas-apple-pie",
    "name": "Mama’s Apple Pie",
    "category": "Bakery",
    "rarity": "Uncommon",
    "description": "A warm, comforting pie just like Mama used to make.",
    "craftingMaterials": [
      { "name": "Flour", "quantity": 1, "source": "Oven" },
      { "name": "Apple", "quantity": 1, "source": "Harvesting" }
    ]
  },
  {
    "id": "strawberry-shortcake",
    "name": "Strawberry Shortcake",
    "category": "Bakery",
    "rarity": "Uncommon",
    "description": "A soft and sweet dessert topped with fresh strawberries.",
    "craftingMaterials": [
      { "name": "Flour", "quantity": 1, "source": "Oven" },
      { "name": "Strawberry", "quantity": 1, "source": "Harvesting" }
    ]
  },
  {
    "id": "fruity-cheesecake",
    "name": "Fruity Cheesecake",
    "category": "Bakery",
    "rarity": "Uncommon",
    "description": "A creamy cheesecake topped with your favorite fruit.",
    "craftingMaterials": [
      { "name": "Flour", "quantity": 1, "source": "Oven" },
      { "name": "Moon Cheese", "quantity": 1, "source": "Crafting" },
      { "name": "Fruit (Starfruit / Banana / Apple / Pineapple)", "quantity": 1, "source": "Harvesting" }
    ]
  },
  {
    "id": "strawberry-cheesecake",
    "name": "Strawberry Cheesecake",
    "category": "Bakery",
    "rarity": "Uncommon",
    "description": "A smooth cheesecake with a sweet strawberry topping.",
    "craftingMaterials": [
      { "name": "Flour", "quantity": 1, "source": "Oven" },
      { "name": "Moon Cheese", "quantity": 1, "source": "Crafting" },
      { "name": "Strawberry", "quantity": 1, "source": "Harvesting" }
    ]
  },
  {
    "id": "beignets-with-pineapple-dip",
    "name": "Beignets with Pineapple Dip",
    "category": "Bakery",
    "rarity": "Uncommon",
    "description": "Fluffy beignets served with a sweet and tropical dip.",
    "craftingMaterials": [
      { "name": "Flour", "quantity": 1, "source": "Oven" },
      { "name": "Pineapple", "quantity": 1, "source": "Harvesting" },
      { "name": "Candy Cloud", "quantity": 1, "source": "Crafting" }
    ]
  },
  {
    "id": "candied-banana-coffee",
    "name": "Candied Banana Coffee",
    "category": "Beverage",
    "rarity": "Rare",
    "description": "A rich, sweet coffee blend with hints of banana and candy.",
    "craftingMaterials": [
      { "name": "Candlenut", "quantity": 1, "source": "Crafting" },
      { "name": "Banana", "quantity": 1, "source": "Harvesting" },
      { "name": "Candy Cloud", "quantity": 1, "source": "Crafting" }
    ]
  },
  {
    "id": "fruit-tart",
    "name": "Fruit Tart",
    "category": "Bakery",
    "rarity": "Rare",
    "description": "A colorful tart topped with a variety of fresh fruits.",
    "craftingMaterials": [
      { "name": "Flour", "quantity": 1, "source": "Oven" },
      { "name": "Egg", "quantity": 1, "source": "Gathering" },
      { "name": "Fruit (Apple / Banana / Pineapple / Starfruit / Strawberry)", "quantity": 1, "source": "Harvesting" }
    ]
  },
  {
    "id": "critter-totem",
    "name": "Critter Totem",
    "category": "Crafting",
    "rarity": "Rare",
    "description": "A hand-carved wooden totem honoring swamp critters.",
    "craftingMaterials": [
      { "name": "Woodblock", "quantity": 1, "source": "Crafting" },
      { "name": "Coconut", "quantity": 3, "source": "Harvesting" },
      { "name": "Mushroom", "quantity": 5, "source": "Foraging" }
    ]
  },
  {
    "id": "swampy-souvenir-doll",
    "name": "Swampy Souvenir Doll",
    "category": "Crafting",
    "rarity": "Uncommon",
    "description": "A small wooden doll made from swampy materials.",
    "craftingMaterials": [
      { "name": "Fabric", "quantity": 1, "source": "Crafting" },
      { "name": "Woodblock", "quantity": 1, "source": "Crafting" },
      { "name": "Mushroom", "quantity": 5, "source": "Foraging" }
    ]
  },
  {
    "id": "swampy-lamb-plush",
    "name": "Swampy Lamb Plush",
    "category": "Crafting",
    "rarity": "Rare",
    "description": "A soft and cozy plush made with swampy fabric.",
    "craftingMaterials": [
      { "name": "Lamb Plush", "quantity": 1, "source": "Crafting" },
      { "name": "Swampy Material", "quantity": 1, "source": "Crafting" }
    ]
  },
  {
    "id": "pumpkin-spice-soda",
    "name": "Pumpkin Spice Soda",
    "category": "Soda Machine",
    "rarity": "Rare",
    "description": "A fizzy spooky soda with the perfect fall flavor.",
    "craftingMaterials": [
      { "name": "Pumpkin", "quantity": 1, "source": "Harvesting" },
      { "name": "Fizzy Crystal", "quantity": 1, "source": "Crafting" },
      { "name": "Cinna Bloom", "quantity": 1, "source": "Foraging" }
    ]
  },
  {
    "id": "spicy-pumpkin-latte",
    "name": "Spicy Pumpkin Latte",
    "category": "Espresso Machine",
    "rarity": "Rare",
    "description": "A warm and spicy latte full of fall flavors.",
    "craftingMaterials": [
      { "name": "Candlenut", "quantity": 1, "source": "Harvesting" },
      { "name": "Cinna Bloom", "quantity": 1, "source": "Foraging" },
      { "name": "Pumpkin", "quantity": 1, "source": "Harvesting" }
    ]
  },
  {
    "id": "pink-clouds-ice-cream",
    "name": "Pink Clouds Ice Cream",
    "category": "Dessert Machine",
    "rarity": "Uncommon",
    "description": "A fluffy, dreamy dessert made with clouds and pink sweetness.",
    "craftingMaterials": [
      { "name": "Cactus Cream", "quantity": 1, "source": "Crafting" },
      { "name": "Candy Cloud", "quantity": 1, "source": "Harvesting" },
      { "name": "Sakura", "quantity": 1, "source": "Foraging" }
    ]
  },
  {
    "id": "strawberry-almond-galette",
    "name": "Strawberry Almond Galette",
    "category": "Oven",
    "rarity": "Rare",
    "description": "A beautiful pastry with a fruity and nutty filling.",
    "craftingMaterials": [
      { "name": "Flour", "quantity": 1, "source": "Crafting" },
      { "name": "Strawberry", "quantity": 1, "source": "Foraging" },
      { "name": "Toasted Almond", "quantity": 1, "source": "Foraging" }
    ]
  },
  {
    "id": "almond-pound-cake",
    "name": "Almond Pound Cake",
    "category": "Oven",
    "rarity": "Uncommon",
    "description": "A dense dreamy cake with almond notes and sweet icing.",
    "craftingMaterials": [
      { "name": "Flour", "quantity": 1, "source": "Crafting" },
      { "name": "Candy Cloud", "quantity": 1, "source": "Harvesting" },
      { "name": "Toasted Almond", "quantity": 1, "source": "Foraging" }
    ]
  },
  {
    "id": "pink-latte",
    "name": "Pink Latte",
    "category": "Espresso Machine",
    "rarity": "Uncommon",
    "description": "A warm beverage with a sweet pink twist.",
    "craftingMaterials": [
      { "name": "Candlenut", "quantity": 1, "source": "Foraging" },
      { "name": "Strawberry or Sakura", "quantity": 1, "source": "Foraging" }
    ]
  },
  {
    "id": "pink-cloud",
    "name": "Pink Cloud",
    "category": "Candy Cloud Machine",
    "rarity": "Uncommon",
    "description": "A sugary cloud of pink sweetness.",
    "craftingMaterials": [
      { "name": "Candy Cloud", "quantity": 1, "source": "Harvesting" },
      { "name": "Strawberry or Sakura", "quantity": 1, "source": "Foraging" }
    ]
  },
  {
    "id": "sweet-dreams-stories",
    "name": "Sweet Dreams Stories",
    "category": "Crafting",
    "rarity": "Rare",
    "description": "A dreamy storybook filled with gentle tales.",
    "craftingMaterials": [
      { "name": "Blank Book", "quantity": 1, "source": "Crafting" },
      { "name": "Feather", "quantity": 5, "source": "Foraging" },
      { "name": "Star", "quantity": 1, "source": "Exploration" }
    ]
  },
  {
    "id": "mountain-soundtrack",
    "name": "Mountain Soundtrack",
    "category": "Crafting",
    "rarity": "Rare",
    "description": "A musical track inspired by the peacefulness and strength of the mountains.",
    "craftingMaterials": [
      { "name": "Mechanism", "quantity": 1, "source": "Crafting" },
      { "name": "Feather", "quantity": 5, "source": "Gift Reward" },
      { "name": "Shiny", "quantity": 5, "source": "Exploration" }
    ]
  },
  {
    "id": "rocky-music-box",
    "name": "Rocky Music Box",
    "category": "Crafting",
    "rarity": "Rare",
    "description": "A music box that plays rocky tunes — perfect for relaxing by the mountain.",
    "craftingMaterials": [
      { "name": "Mechanism", "quantity": 1, "source": "Crafting" },
      { "name": "Ingot", "quantity": 1, "source": "Forging" },
      { "name": "Shiny", "quantity": 5, "source": "Exploration" }
    ]
  },
  {
    "id": "stacked-stones",
    "name": "Stacked Stones",
    "category": "Crafting",
    "rarity": "Rare",
    "description": "A tranquil rock sculpture meant to inspire calm and balance.",
    "craftingMaterials": [
      { "name": "Calming Crystal", "quantity": 3, "source": "Foraging" }
    ]
  },
  {
    "id": "pochacco-energy-pop",
    "name": "Pochacco Energy Pop",
    "category": "Soda Machine",
    "rarity": "Uncommon",
    "description": "A fizzy drink packed with veggie power and energy, perfect for an athletic boost.",
    "craftingMaterials": [
      { "name": "Fizzy Crystal", "quantity": 1, "source": "Soda Machine" },
      { "name": "Tofu", "quantity": 1, "source": "Cooking" },
      { "name": "Spinip", "quantity": 1, "source": "Gardening" }
    ]
  },
  {
    "id": "everything-pizza",
    "name": "Everything Pizza",
    "category": "Pizza Oven",
    "rarity": "Rare",
    "description": "A delicious and balanced pizza packed with veggies and nutrition.",
    "craftingMaterials": [
      { "name": "Dough", "quantity": 1, "source": "Cooking" },
      { "name": "Spinip", "quantity": 1, "source": "Gardening" },
      { "name": "Tofu", "quantity": 1, "source": "Cooking" }
    ]
  },
  {
    "id": "veggie-crepe",
    "name": "Veggie Crepe",
    "category": "Egg Pan Station",
    "rarity": "Rare",
    "description": "A light and healthy crepe filled with fresh garden vegetables.",
    "craftingMaterials": [
      { "name": "Egg", "quantity": 1, "source": "Foraging" },
      { "name": "Flour", "quantity": 1, "source": "Cooking" },
      { "name": "Spinip", "quantity": 1, "source": "Gardening" }
    ]
  },
  {
    "id": "mamas-pudding",
    "name": "Mama's Pudding",
    "category": "Dessert Machine",
    "rarity": "Uncommon",
    "description": "A creamy pudding made with love, soft and soothing—just like Pompompurin prefers.",
    "craftingMaterials": [
      { "name": "Cactus Cream", "quantity": 1, "source": "Dessert Machine" },
      { "name": "Coral Milk", "quantity": 1, "source": "Foraging" },
      { "name": "Banana", "quantity": 1, "source": "Foraging" }
    ]
  },
  {
    "id": "cheese-ice-cream",
    "name": "Cheese Ice Cream",
    "category": "Dessert Machine",
    "rarity": "Uncommon",
    "description": "A dreamy scoop of cheese-flavored ice cream, chilled to perfection.",
    "craftingMaterials": [
      { "name": "Cactus Cream", "quantity": 1, "source": "Dessert Machine" },
      { "name": "Moon Cheese", "quantity": 1, "source": "Foraging" }
    ]
  },
  {
    "id": "volcanic-guitar",
    "name": "Volcanic Guitar",
    "category": "Crafting",
    "rarity": "Rare",
    "description": "A blazing-hot guitar perfect for metal solos by the lava flow.",
    "craftingMaterials": [
      { "name": "Ingot", "quantity": 2, "source": "Crafting" },
      { "name": "Spark", "quantity": 2, "source": "Crafting" },
      { "name": "Mechanism", "quantity": 1, "source": "Crafting" }
    ]
  },
  {
    "id": "volcano-soundtrack",
    "name": "Volcano Soundtrack",
    "category": "Crafting",
    "rarity": "Rare",
    "description": "The roaring soundtrack of molten rock and guitar riffs.",
    "craftingMaterials": [
      { "name": "Mechanism", "quantity": 1, "source": "Crafting" },
      { "name": "Toasted Almond", "quantity": 5, "source": "Foraging" },
      { "name": "Obsidian Shard", "quantity": 5, "source": "Mining" }
    ]
  },
  {
    "id": "designer-island-doll",
    "name": "Designer Island Doll",
    "category": "Crafting",
    "rarity": "Rare",
    "description": "A classy collectible doll made from fine materials.",
    "craftingMaterials": [
      { "name": "Sand Dollar", "quantity": 5, "source": "Foraging" },
      { "name": "Fabric", "quantity": 2, "source": "Crafting" },
      { "name": "Gift Box", "quantity": 1, "source": "Crafting" }
    ]
  },
  {
    "id": "tropical-gift",
    "name": "Tropical Gift",
    "category": "Crafting",
    "rarity": "Uncommon",
    "description": "A vibrant gift box filled with tropical charm and elegance.",
    "craftingMaterials": [
      { "name": "Gift Box", "quantity": 1, "source": "Crafting" },
      { "name": "Sand Dollar", "quantity": 10, "source": "Foraging" }
    ]
  },
  {
    "id": "rare-candle",
    "name": "Rare Candle",
    "category": "Crafted",
    "rarity": "Rare",
    "description": "A candle made with rare patterned flowers, radiating a gentle warmth.",
    "craftingMaterials": [
      {
        "name": "Beeswax",
        "quantity": 5,
        "source": "Creation Station"
      },
      {
        "name": "Patterned Flowers",
        "quantity": 5,
        "source": "Creation Station"
      }
    ]
  },
  {
    "id": "flower-candle",
    "name": "Flower Candle",
    "category": "Crafted",
    "rarity": "Rare",
    "description": "A soothing candle infused with floral scents, handcrafted for relaxing vibes.",
    "craftingMaterials": [
      {
        "name": "Beeswax",
        "quantity": 5,
        "source": "Creation Station"
      },
      {
        "name": "Flowers",
        "quantity": 5,
        "source": "Creation Station"
      }
    ]
  },
  {
    "id": "colorful-lamb-plush",
    "name": "Colorful Lamb Plush",
    "category": "Crafting",
    "rarity": "Rare",
    "description": "A colorful version of the lamb plush made with rainbow materials. My Sweet Piano’s favorite!",
    "craftingMaterials": [
      { "name": "Lamb Plush", "quantity": 1, "source": "Crafting" },
      { "name": "Art Supplies", "quantity": 1, "source": "Crafting" }
    ]
  },
  {
    "id": "lamb-plush",
    "name": "Lamb Plush",
    "category": "Crafting",
    "rarity": "Rare",
    "description": "A fluffy lamb plush with a cloud-soft touch.",
    "craftingMaterials": [
      { "name": "Basic Plush", "quantity": 1, "source": "Crafting" },
      { "name": "Stick", "quantity": 1, "source": "Crafting" }
    ]
  },
  {
    "id": "the-greatest-challenge",
    "name": "The Greatest Challenge",
    "category": "Crafting",
    "rarity": "Rare",
    "description": "A book that chronicles daring feats and bold adventures. Perfect for Big Challenges.",
    "craftingMaterials": [
      { "name": "Ingot", "quantity": 2, "source": "Crafting" },
      { "name": "Spark", "quantity": 2, "source": "Crafting" },
      { "name": "Little Challenge", "quantity": 2, "source": "Gift Reward" }
    ]
  },
  {
    "id": "meditations-on-resilience",
    "name": "Meditations on Resilience",
    "category": "Crafting",
    "rarity": "Rare",
    "description": "A book focused on inner strength and mental fortitude.",
    "craftingMaterials": [
      { "name": "Little Challenge", "quantity": 1, "source": "Gift Reward" },
      { "name": "Blank Book", "quantity": 1, "source": "Crafting" }
    ]
  },
  {
    "id": "the-future-of-everything",
    "name": "The Future of Everything",
    "category": "Crafting",
    "rarity": "Rare",
    "description": "A visionary book about the future, filled with hope and tech. Perfect for a digital mind like TOPHAT.",
    "craftingMaterials": [
      { "name": "Little Challenge", "quantity": 3, "source": "Gift Reward" },
      { "name": "Glitch", "quantity": 3, "source": "Gift Reward" },
      { "name": "Star", "quantity": 2, "source": "Collectible" }
    ]
  },
  {
    "id": "computer",
    "name": "Computer",
    "category": "Crafting",
    "rarity": "Rare",
    "description": "A sleek and stylish computing device. Digital, fancy, and very TOPHAT.",
    "craftingMaterials": [
      { "name": "Glitch", "quantity": 1, "source": "Gift Reward" },
      { "name": "Mechanism", "quantity": 2, "source": "Crafting" },
      { "name": "Spark", "quantity": 2, "source": "Crafting" }
    ]
  },
  {
    "id": "quattro-formaggi-pizza",
    "name": "Quattro Formaggi Pizza",
    "category": "Pizza Oven",
    "rarity": "Rare",
    "description": "A rich and dreamy cheese pizza with creative flair, made with coral milk and moon cheese.",
    "craftingMaterials": [
      { "name": "Dough", "quantity": 1, "source": "Crafting" },
      { "name": "Coral Milk", "quantity": 1, "source": "Gathering" },
      { "name": "Moon Cheese", "quantity": 1, "source": "Gathering" }
    ]
  },
  {
    "id": "cheese-cloud",
    "name": "Cheese Cloud",
    "category": "Candy Cloud Machine",
    "rarity": "Uncommon",
    "description": "A fluffy cloud infused with dreamy cheese essence.",
    "craftingMaterials": [
      { "name": "Candy Cloud", "quantity": 1, "source": "Candy Cloud Machine" },
      { "name": "Moon Cheese", "quantity": 1, "source": "Gathering" }
    ]
  },
  {
    "id": "three-cheese-pizza",
    "name": "Three Cheese Pizza",
    "category": "Pizza Oven",
    "rarity": "Uncommon",
    "description": "A cozy pizza topped with a trio of dreamy cheeses.",
    "craftingMaterials": [
      { "name": "Dough", "quantity": 1, "source": "Crafting" },
      { "name": "Moon Cheese", "quantity": 1, "source": "Gathering" }
    ]
  },
  {
    "id": "art-supplies",
    "name": "Art Supplies",
    "category": "Crafting",
    "rarity": "Rare",
    "description": "Creative tools filled with dreamy stardust for the most imaginative projects.",
    "craftingMaterials": [
      { "name": "Paper", "quantity": 10, "source": "Crafting" },
      { "name": "Rubber", "quantity": 3, "source": "Crafting" },
      { "name": "Stick", "quantity": 5, "source": "Crafting" },
      { "name": "Star", "quantity": 1, "source": "Collectible" }
    ]
  },
  {
    "id": "starry-skies-shake",
    "name": "Starry Skies Shake",
    "category": "Dessert Machine",
    "rarity": "Rare",
    "description": "A dreamy, frozen dessert with a cosmic touch, perfect for starry nights.",
    "craftingMaterials": [
      { "name": "Cactus Cream", "quantity": 1, "source": "Dessert Machine" },
      { "name": "Snowcicle", "quantity": 1, "source": "Gathering" },
      { "name": "Starfruit", "quantity": 1, "source": "Gathering" }
    ]
  },
  {
    "id": "dreamy-star",
    "name": "Dreamy Star",
    "category": "Crafting",
    "rarity": "Rare",
    "description": "A handcrafted star imbued with dreamy energy.",
    "craftingMaterials": [
      { "name": "Star", "quantity": 3, "source": "Crafting" }
    ]
  },
  {
    "id": "art-supplies",
    "name": "Art Supplies",
    "category": "Crafting",
    "rarity": "Rare",
    "description": "Creative tools filled with dreamy stardust for the most imaginative projects.",
    "craftingMaterials": [
      { "name": "Paper", "quantity": 10, "source": "Crafting" },
      { "name": "Rubber", "quantity": 3, "source": "Crafting" },
      { "name": "Stick", "quantity": 5, "source": "Crafting" },
      { "name": "Star", "quantity": 1, "source": "Collectible" }
    ]
  },
  {
    "id": "pastel-rainbow-banister",
    "name": "Pastel Rainbow Banister",
    "category": "Crafting",
    "rarity": "Rare",
    "description": "A colorful, dreamy banister perfect for cloud castles.",
    "craftingMaterials": [
      { "name": "Star", "quantity": 10, "source": "Crafting" },
      { "name": "Pink Dye", "quantity": 10, "source": "Crafting" },
      { "name": "Green Dye", "quantity": 10, "source": "Crafting" },
      { "name": "Yellow Dye", "quantity": 10, "source": "Crafting" }
    ]
  },
  {
    "id": "decorative-cloud-cart",
    "name": "Decorative Cloud Cart",
    "category": "Crafting",
    "rarity": "Rare",
    "description": "A cloud-themed decorative cart that floats on dreams.",
    "craftingMaterials": [
      { "name": "Candy Cloud", "quantity": 100, "source": "Candy Cloud Machine" },
      { "name": "Star", "quantity": 5, "source": "Crafting" },
      { "name": "Fabric", "quantity": 5, "source": "Crafting" },
      { "name": "Pink Dye", "quantity": 5, "source": "Crafting" }
    ]
  }
];

export const tags: Tag[] = [
  {
    "id": "aquatic",
    "name": "Aquatic",
    "description": "",
    "color": "#cccccc"
  },
  {
    "id": "bakery",
    "name": "Bakery",
    "description": "",
    "color": "#cccccc"
  },
  {
    "id": "book",
    "name": "Book",
    "description": "",
    "color": "#cccccc"
  },
  {
    "id": "cheese",
    "name": "Cheese",
    "description": "",
    "color": "#cccccc"
  },
  {
    "id": "chocolate",
    "name": "Chocolate",
    "description": "",
    "color": "#cccccc"
  },
  {
    "id": "cloth",
    "name": "Cloth",
    "description": "",
    "color": "#cccccc"
  },
  {
    "id": "cloud",
    "name": "Cloud",
    "description": "",
    "color": "#cccccc"
  },
  {
    "id": "cozy-beverage",
    "name": "Cozy Beverage",
    "description": "",
    "color": "#cccccc"
  },
  {
    "id": "creative",
    "name": "Creative",
    "description": "",
    "color": "#cccccc"
  },
  {
    "id": "critters",
    "name": "Critters",
    "description": "",
    "color": "#cccccc"
  },
  {
    "id": "dairy",
    "name": "Dairy",
    "description": "",
    "color": "#cccccc"
  },
  {
    "id": "dessert",
    "name": "Dessert",
    "description": "",
    "color": "#cccccc"
  },
  {
    "id": "device",
    "name": "Device",
    "description": "",
    "color": "#cccccc"
  },
  {
    "id": "digital",
    "name": "Digital",
    "description": "",
    "color": "#cccccc"
  },
  {
    "id": "dreamy",
    "name": "Dreamy",
    "description": "",
    "color": "#cccccc"
  },
  {
    "id": "fall",
    "name": "Fall",
    "description": "",
    "color": "#cccccc"
  },
  {
    "id": "fancy",
    "name": "Fancy",
    "description": "",
    "color": "#cccccc"
  },
  {
    "id": "fire",
    "name": "Fire",
    "description": "",
    "color": "#cccccc"
  },
  {
    "id": "fish",
    "name": "Fish",
    "description": "",
    "color": "#cccccc"
  },
  {
    "id": "flower",
    "name": "Flower",
    "description": "",
    "color": "#cccccc"
  },
  {
    "id": "frozen",
    "name": "Frozen",
    "description": "",
    "color": "#cccccc"
  },
  {
    "id": "fruit",
    "name": "Fruit",
    "description": "",
    "color": "#cccccc"
  },
  {
    "id": "healthy",
    "name": "Healthy",
    "description": "",
    "color": "#cccccc"
  },
  {
    "id": "imagination",
    "name": "Imagination",
    "description": "",
    "color": "#cccccc"
  },
  {
    "id": "joke",
    "name": "Joke",
    "description": "",
    "color": "#cccccc"
  },
  {
    "id": "metal",
    "name": "Metal",
    "description": "",
    "color": "#cccccc"
  },
  {
    "id": "mochi",
    "name": "Mochi",
    "description": "",
    "color": "#cccccc"
  },
  {
    "id": "music",
    "name": "Music",
    "description": "",
    "color": "#cccccc"
  },
  {
    "id": "pink",
    "name": "Pink",
    "description": "",
    "color": "#cccccc"
  },
  {
    "id": "pizza",
    "name": "Pizza",
    "description": "",
    "color": "#cccccc"
  },
  {
    "id": "rainbow",
    "name": "Rainbow",
    "description": "",
    "color": "#cccccc"
  },
  {
    "id": "rare",
    "name": "Rare",
    "description": "",
    "color": "#cccccc"
  },
  {
    "id": "relax",
    "name": "Relax",
    "description": "",
    "color": "#cccccc"
  },
  {
    "id": "resilience",
    "name": "Resilience",
    "description": "",
    "color": "#cccccc"
  },
  {
    "id": "rocky",
    "name": "Rocky",
    "description": "",
    "color": "#cccccc"
  },
  {
    "id": "soda",
    "name": "Soda",
    "description": "",
    "color": "#cccccc"
  },
  {
    "id": "spice",
    "name": "Spice",
    "description": "",
    "color": "#cccccc"
  },
  {
    "id": "spooky",
    "name": "Spooky",
    "description": "",
    "color": "#cccccc"
  },
  {
    "id": "sports",
    "name": "Sports",
    "description": "",
    "color": "#cccccc"
  },
  {
    "id": "stars",
    "name": "Stars",
    "description": "",
    "color": "#cccccc"
  },
  {
    "id": "swampy",
    "name": "Swampy",
    "description": "",
    "color": "#cccccc"
  },
  {
    "id": "sweet",
    "name": "Sweet",
    "description": "",
    "color": "#cccccc"
  },
  {
    "id": "tropical",
    "name": "Tropical",
    "description": "",
    "color": "#cccccc"
  },
  {
    "id": "veggie",
    "name": "Veggie",
    "description": "",
    "color": "#cccccc"
  },
  {
    "id": "volcanic",
    "name": "Volcanic",
    "description": "",
    "color": "#cccccc"
  },
  {
    "id": "wood",
    "name": "Wood",
    "description": "",
    "color": "#cccccc"
  }
];

export const locations: Location[] = [
  {
    id: 'rainbow-reef',
    name: 'Rainbow Reef',
    description: 'A colorful underwater paradise where Hello Kitty loves to play.',
    availableResources: ['Colorful Coral', 'Sea Shells', 'Rainbow Pearls']
  },
  {
    id: 'flower-garden',
    name: 'Flower Garden',
    description: 'A beautiful garden filled with blooming flowers and buzzing bees.',
    availableResources: ['Pink Roses', 'White Daisies', 'Honey', 'Fresh Strawberries']
  },
  {
    id: 'spooky-swamp',
    name: 'Spooky Swamp',
    description: 'A mysterious swamp where Kuromi likes to hang out.',
    availableResources: ['Mysterious Herbs', 'Glow Mushrooms', 'Dark Crystals']
  },
  {
    id: 'cozy-cafe',
    name: 'Cozy Cafe',
    description: 'A warm and welcoming cafe where friends gather for treats.',
    availableResources: ['Fresh Coffee', 'Sweet Pastries', 'Baking Ingredients']
  },
  {
    id: 'cloud-kingdom',
    name: 'Cloud Kingdom',
    description: 'A magical kingdom floating high in the sky.',
    availableResources: ['Fluffy Clouds', 'Stardust', 'Sky Crystals']
  },
  {
    id: 'gemstone-mountain',
    name: 'Gemstone Mountain',
    description: 'A majestic mountain rich with precious gems and fruit trees.',
    availableResources: ['Red Apples', 'Precious Gems', 'Mountain Herbs']
  }
];
