
// Game data for Hello Kitty Island Adventure companion app

export interface Character {
  id: string;
  name: string;
  series: string;
  location: string;
  favoriteTags: string[];
  favoriteGifts: string[];
  giftGiven: string;
  friendshipLevel: number;
  maxFriendshipLevel: number;
  description: string;
}

export interface Gift {
  id: string;
  name: string;
  category: string;
  friendshipPoints: number;
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
    "id": "hello-kitty",
    "name": "Hello Kitty",
    "series": "Sanrio",
    "location": "Seaside Resort (Cafe)",
    "favoriteTags": ["fruity", "baked", "fancy"],
    "favoriteGifts": [
      "red-bow-apple-pie",
      "mamas-apple-pie",
      "strawberry-shortcake",
      "candied-banana-coffee"
    ],
    "giftGiven": "Mama's Apple Pie",
    "friendshipLevel": 1,
    "maxFriendshipLevel": 20,
    "description": "Hello Kitty is the first character you meet when starting the game. Described as a great listener, thoughtful gift-giver, and someone who loves to chat. Found in the cafe, she provides helpful baking tips. Likes gifts tagged with Fruity, Baked, and Fancy."
  },
  {
    "id": "chococat",
    "name": "Chococat",
    "series": "Hello Kitty",
    "location": "Seaside Resort",
    "favoriteTags": ["Book", "Device", "Chocolate"],
    "favoriteGifts": [
      "interactive-history-of-chocolate",
      "ancient-inventions",
      "glitchy-book",
      "meditations-on-resilience",
      "mocha-item",
      "hot-cocoa",
      "boulder-bits-ice-cream",
      "volcano-cake",
      "blank-book"
    ],
    "giftGiven": "Gizmo",
    "friendshipLevel": 0,
    "maxFriendshipLevel": 15,
    "description": "Chococat tends to be a little scatterbrained at times, but he has a curious mind and is always up on the latest news. He is a DIY genius and can help you craft tools and all sorts of trinkets. With you and Chococat on the case, there’s nothing you can’t solve together!"
  },
  {
    "id": "cinnamoroll",
    "name": "Cinnamoroll",
    "series": "Hello Kitty Island Adventure",
    "location": "Unlocked during the Delivery Service quest after befriending Kuromi in Spooky Swamp",
    "favoriteTags": ["Coffee", "Chocolate", "Spicy"],
    "favoriteGifts": [
      "chocolate-chai-latte",
      "mocha",
      "chai",
      "volcano-cake",
      "hot-cocoa",
      "espresso",
      "molten-frappe",
      "spicy-pumpkin-cake"
    ],
    "giftGiven": "",
    "friendshipLevel": 1,
    "maxFriendshipLevel": 20,
    "description": "Cinnamoroll is a shy but helpful pup who runs the mail delivery service on the island. He’s not on the plane at the beginning, but becomes available through the Delivery Service quest. Cinnamoroll loves cozy drinks, spicy treats, and all things chocolatey."
  },
  {
    id: 'my-melody',
    name: 'My Melody',
    series: 'My Melody',
    location: 'Flower Garden',
    favoriteTags: ['cute', 'pink', 'flowers'],
    favoriteGifts: ['strawberry-cake', 'flower-crown', 'pink-bow'],
    friendshipLevel: 2,
    maxFriendshipLevel: 5,
    description: 'A gentle rabbit who adores flowers and sweet strawberry treats.',
    giftGiven: 'strawberry-cake'
  },
  {
    id: 'kuromi',
    name: 'Kuromi',
    series: 'My Melody',
    location: 'Spooky Swamp',
    favoriteTags: ['dark', 'mischievous', 'gothic'],
    favoriteGifts: ['dark-chocolate', 'skull-ring', 'gothic-dress'],
    friendshipLevel: 1,
    maxFriendshipLevel: 5,
    description: 'A mischievous rabbit with a tough exterior but a soft heart inside.',
    giftGiven: 'dark-chocolate'
  },
  {
    id: 'pompompurin',
    name: 'Pompompurin',
    series: 'Pompompurin',
    location: 'Cozy Cafe',
    favoriteTags: ['comfy', 'yellow', 'foodie'],
    favoriteGifts: ['custard-pudding', 'golden-hat', 'comfy-cushion'],
    friendshipLevel: 4,
    maxFriendshipLevel: 5,
    description: 'A laid-back golden retriever who loves napping and delicious pudding.',
    giftGiven: 'custard-pudding'
  },
  {
    id: 'cinnamoroll',
    name: 'Cinnamoroll',
    series: 'Cinnamoroll',
    location: 'Cloud Kingdom',
    favoriteTags: ['cute', 'fluffy', 'blue'],
    favoriteGifts: ['cinnamon-roll', 'fluffy-cloud', 'blue-bow'],
    friendshipLevel: 2,
    maxFriendshipLevel: 5,
    description: 'A puppy who can fly through the sky and loves sweet cinnamon treats.',
    giftGiven: 'cinnamon-roll'
  },
  {
    id: 'badtz-maru',
    name: 'Badtz-Maru',
    series: 'Badtz-Maru',
    location: 'Mischief Bay',
    favoriteTags: ['mischievous', 'cool', 'rebellious'],
    favoriteGifts: ['fish-burger', 'cool-sunglasses', 'rock-collection'],
    friendshipLevel: 1,
    maxFriendshipLevel: 5,
    description: 'A mischievous penguin who dreams of being the boss of everything!',
    giftGiven: 'fish-burger'
  }
];

export const gifts: Gift[] = [
  {
    "id": "red-bow-apple-pie",
    "name": "Red Bow Apple Pie",
    "category": "Bakery Fruit Fancy",
    "friendshipPoints": 3,
    "rarity": "Rare",
    "description": "A special apple pie topped with a red bow, combining bakery, fruity, and fancy flavors.",
    "craftingMaterials": [
      { "name": "Flour", "quantity": 1, "source": "Oven" },
      { "name": "Apple", "quantity": 1, "source": "Oven" },
      { "name": "Magma Bloom", "quantity": 1, "source": "Oven" }
    ],
    "foundAt": ["Oven"]
  },
  {
    "id": "mamas-apple-pie",
    "name": "Mama’s Apple Pie",
    "category": "Bakery Fruit",
    "friendshipPoints": 2,
    "rarity": "Uncommon",
    "description": "A classic apple pie made with love. A great starter gift.",
    "craftingMaterials": [
      { "name": "Flour", "quantity": 1, "source": "Oven" },
      { "name": "Apple", "quantity": 1, "source": "Oven" }
    ],
    "foundAt": ["Oven"]
  },
  {
    "id": "strawberry-shortcake",
    "name": "Strawberry Shortcake",
    "category": "Bakery Fruit",
    "friendshipPoints": 2,
    "rarity": "Uncommon",
    "description": "A sweet and fruity shortcake with strawberries.",
    "craftingMaterials": [
      { "name": "Flour", "quantity": 1, "source": "Oven" },
      { "name": "Strawberry", "quantity": 1, "source": "Oven" }
    ],
    "foundAt": ["Oven"]
  },
  {
    "id": "fruity-cheesecake",
    "name": "Fruity Cheesecake",
    "category": "Bakery Cheese Fruit",
    "friendshipPoints": 2,
    "rarity": "Uncommon",
    "description": "A rich cheesecake topped with a choice of fresh fruit.",
    "craftingMaterials": [
      { "name": "Flour", "quantity": 1, "source": "Oven" },
      { "name": "Moon Cheese", "quantity": 1, "source": "Oven" },
      { "name": "Fruit (Apple/Banana/Pineapple/Starfruit)", "quantity": 1, "source": "Oven" }
    ],
    "foundAt": ["Oven"]
  },
  {
    "id": "strawberry-cheesecake",
    "name": "Strawberry Cheesecake",
    "category": "Bakery Cheese Fruit",
    "friendshipPoints": 2,
    "rarity": "Uncommon",
    "description": "A creamy cheesecake topped with strawberries.",
    "craftingMaterials": [
      { "name": "Flour", "quantity": 1, "source": "Oven" },
      { "name": "Moon Cheese", "quantity": 1, "source": "Oven" },
      { "name": "Strawberry", "quantity": 1, "source": "Oven" }
    ],
    "foundAt": ["Oven"]
  },
  {
    "id": "beignets-with-pineapple-dip",
    "name": "Beignets with Pineapple Dip",
    "category": "Bakery Sweet Fancy Tropical",
    "friendshipPoints": 2,
    "rarity": "Uncommon",
    "description": "Fluffy beignets paired with a sweet tropical pineapple dip.",
    "craftingMaterials": [
      { "name": "Flour", "quantity": 1, "source": "Oven" },
      { "name": "Pineapple", "quantity": 1, "source": "Oven" },
      { "name": "Candy Cloud", "quantity": 1, "source": "Oven" }
    ],
    "foundAt": ["Oven"]
  },
  {
    "id": "candied-banana-coffee",
    "name": "Candied Banana Coffee",
    "category": "Cozy Beverage Fruit Fancy Dessert",
    "friendshipPoints": 2,
    "rarity": "Rare",
    "description": "A cozy beverage blending sweet banana with fancy coffee and candy notes.",
    "craftingMaterials": [
      { "name": "Candlenut", "quantity": 1, "source": "Espresso Machine" },
      { "name": "Banana", "quantity": 1, "source": "Espresso Machine" },
      { "name": "Candy Cloud", "quantity": 1, "source": "Espresso Machine" }
    ],
    "foundAt": ["Espresso Machine"]
  },
  {
    "id": "fruit-tart",
    "name": "Fruit Tart",
    "category": "Bakery Egg Fruit",
    "friendshipPoints": 2,
    "rarity": "Rare",
    "description": "A delicate tart filled with custard and topped with a selection of fresh fruits.",
    "craftingMaterials": [
      { "name": "Flour", "quantity": 1, "source": "Oven" },
      { "name": "Egg", "quantity": 1, "source": "Oven" },
      { "name": "Fruit (Apple/Banana/Pineapple/Starfruit/Strawberry)", "quantity": 1, "source": "Oven" }
    ],
    "foundAt": ["Oven"]
  },
  {
    "id": "chocolate-chai-latte",
    "name": "Chocolate Chai Latte",
    "category": "Coffee Chocolate Spicy",
    "friendshipPoints": 3,
    "rarity": "Rare",
    "description": "Cinnamoroll's favorite drink — a cozy blend of chocolate and spicy chai. Requires Espresso Station upgrade.",
    "craftingMaterials": [
      { "name": "Candlenut", "quantity": 1, "source": "Espresso Station" },
      { "name": "Chocolate Coin", "quantity": 1, "source": "Crafted or Found" },
      { "name": "Spice", "quantity": 1, "source": "Unknown or Wild Pickup" }
    ],
    "foundAt": ["Espresso Station"]
  },
  {
    "id": "mocha",
    "name": "Mocha",
    "category": "Coffee Chocolate",
    "friendshipPoints": 2,
    "rarity": "Uncommon",
    "description": "A reliable coffee gift with a sweet chocolate touch.",
    "craftingMaterials": [
      { "name": "Candlenut", "quantity": 1, "source": "Espresso Station" },
      { "name": "Chocolate Coin", "quantity": 1, "source": "Crafted or Found" }
    ],
    "foundAt": ["Espresso Station"]
  },
  {
    "id": "chai",
    "name": "Chai",
    "category": "Coffee Spicy",
    "friendshipPoints": 2,
    "rarity": "Uncommon",
    "description": "A spicy and comforting tea with bold flavor.",
    "craftingMaterials": [
      { "name": "Candlenut", "quantity": 1, "source": "Espresso Station" },
      { "name": "Spice", "quantity": 1, "source": "Wild Ingredient" }
    ],
    "foundAt": ["Espresso Station"]
  },
  {
    "id": "volcano-cake",
    "name": "Volcano Cake",
    "category": "Chocolate Spicy Dessert",
    "friendshipPoints": 2,
    "rarity": "Uncommon",
    "description": "A molten dessert with spicy chocolate filling.",
    "craftingMaterials": [
      { "name": "Chocolate Coin", "quantity": 1, "source": "Crafted or Found" },
      { "name": "Spicy Ingredient", "quantity": 1, "source": "Wild Ingredient" }
    ],
    "foundAt": ["Oven"]
  },
  {
    "id": "hot-cocoa",
    "name": "Hot Cocoa",
    "category": "Chocolate Cozy Beverage",
    "friendshipPoints": 2,
    "rarity": "Uncommon",
    "description": "Warm and sweet — perfect for chilly adventures.",
    "craftingMaterials": [
      { "name": "Chocolate Coin", "quantity": 1, "source": "Crafted or Found" },
      { "name": "Milk", "quantity": 1, "source": "Farm or Vendor" }
    ],
    "foundAt": ["Espresso Station"]
  },
  {
    "id": "espresso",
    "name": "Espresso",
    "category": "Coffee",
    "friendshipPoints": 2,
    "rarity": "Common",
    "description": "A strong shot of coffee — perfect to impress Cinnamoroll.",
    "craftingMaterials": [
      { "name": "Candlenut", "quantity": 1, "source": "Espresso Station" }
    ],
    "foundAt": ["Espresso Station"]
  },
  {
    "id": "molten-frappe",
    "name": "Molten Frappe",
    "category": "Chocolate Coffee Spicy",
    "friendshipPoints": 2,
    "rarity": "Uncommon",
    "description": "A cold and spicy-sweet coffee drink with molten chocolate.",
    "craftingMaterials": [
      { "name": "Candlenut", "quantity": 1, "source": "Espresso Station" },
      { "name": "Chocolate Coin", "quantity": 1, "source": "Crafted or Found" },
      { "name": "Spice", "quantity": 1, "source": "Wild Ingredient" }
    ],
    "foundAt": ["Espresso Station"]
  },
  {
    "id": "spicy-pumpkin-cake",
    "name": "Spicy Pumpkin Cake",
    "category": "Spicy Dessert",
    "friendshipPoints": 2,
    "rarity": "Uncommon",
    "description": "A seasonal spiced dessert — warm, fluffy, and loved by mail pups.",
    "craftingMaterials": [
      { "name": "Pumpkin", "quantity": 1, "source": "Farm or Wild" },
      { "name": "Spice", "quantity": 1, "source": "Wild Ingredient" },
      { "name": "Flour", "quantity": 1, "source": "Oven" }
    ],
    "foundAt": ["Oven"]
  },
  {
    "id": "interactive-history-of-chocolate",
    "name": "Interactive History of Chocolate",
    "category": "Book Device Chocolate",
    "friendshipPoints": 10,
    "rarity": "Rare",
    "description": "A highly crafted book combining Chococat's favorite tags: Book, Device, and Chocolate.",
    "craftingMaterials": [
      { "name": "Blank Book", "quantity": 1, "source": "Crafting" },
      { "name": "Mechanism", "quantity": 1, "source": "Crafting" },
      { "name": "Spark", "quantity": 1, "source": "Crafting" },
      { "name": "Chocolate Coin", "quantity": 3, "source": "Crafting" }
    ]
  },
  {
    "id": "ancient-inventions",
    "name": "Ancient Inventions",
    "category": "Book Device",
    "friendshipPoints": 7,
    "rarity": "Rare",
    "description": "An insightful gift tapping into Chococat’s love for books and devices.",
    "craftingMaterials": [
      { "name": "Blank Book", "quantity": 1, "source": "Crafting" },
      { "name": "Mechanism", "quantity": 1, "source": "Crafting" }
    ]
  },
  {
    "id": "glitchy-book",
    "name": "Glitchy Book",
    "category": "Book",
    "friendshipPoints": 4,
    "rarity": "Uncommon",
    "description": "A quirky book with a corrupted twist — Chococat finds it oddly fascinating.",
    "craftingMaterials": [
      { "name": "Blank Book", "quantity": 1, "source": "Crafting" },
      { "name": "Glitch", "quantity": 1, "source": "Crafting" }
    ]
  },
  {
    "id": "meditations-on-resilience",
    "name": "Meditations on Resilience",
    "category": "Book",
    "friendshipPoints": 4,
    "rarity": "Uncommon",
    "description": "A thoughtful read, ideal for Chococat's reflective moods.",
    "craftingMaterials": [
      { "name": "Blank Book", "quantity": 1, "source": "Crafting" },
      { "name": "Little Challenge", "quantity": 1, "source": "Crafting" }
    ]
  },
  {
    "id": "mocha-item",
    "name": "Mocha (Item)",
    "category": "Beverage Chocolate",
    "friendshipPoints": 4,
    "rarity": "Uncommon",
    "description": "A sweet beverage made with candlenut and chocolate — delicious and tag-friendly.",
    "craftingMaterials": [
      { "name": "Candlenut", "quantity": 1, "source": "Gathering" },
      { "name": "Chocolate Coin", "quantity": 1, "source": "Crafting" }
    ]
  },
  {
    id: 'apple-pie',
    name: 'Apple Pie',
    category: 'Food',
    friendshipPoints: 15,
    rarity: 'Common',
    description: 'A warm, delicious apple pie that fills hearts with comfort and joy.',
    craftingMaterials: [
      { name: 'Red Apple', quantity: 3, source: 'Apple Trees in Gemstone Mountain' },
      { name: 'Flour', quantity: 2, source: 'Windmill in Flower Garden' },
      { name: 'Sugar', quantity: 1, source: 'Sugar Cane in Tropical Beach' }
    ]
  },
  {
    id: 'rainbow-cupcake',
    name: 'Rainbow Cupcake',
    category: 'Food',
    friendshipPoints: 20,
    rarity: 'Uncommon',
    description: 'A magical cupcake with all the colors of the rainbow!',
    craftingMaterials: [
      { name: 'Rainbow Sprinkles', quantity: 1, source: 'Candy Shop in Sweet Valley' },
      { name: 'Vanilla Cake', quantity: 1, source: 'Bakery in Cozy Cafe' },
      { name: 'Whipped Cream', quantity: 2, source: 'Dairy Farm in Green Meadows' }
    ]
  },
  {
    id: 'friendship-bracelet',
    name: 'Friendship Bracelet',
    category: 'Accessory',
    friendshipPoints: 25,
    rarity: 'Rare',
    description: 'A handmade bracelet that symbolizes eternal friendship.',
    craftingMaterials: [
      { name: 'Colorful Thread', quantity: 5, source: 'Craft Shop in Art District' },
      { name: 'Heart Charm', quantity: 1, source: 'Jewelry Box in Treasure Cove' },
      { name: 'Silver Clasp', quantity: 1, source: 'Metalwork Station in Industrial Zone' }
    ]
  },
  {
    id: 'strawberry-cake',
    name: 'Strawberry Cake',
    category: 'Food',
    friendshipPoints: 18,
    rarity: 'Common',
    description: 'A sweet cake topped with fresh strawberries and cream.',
    craftingMaterials: [
      { name: 'Fresh Strawberries', quantity: 4, source: 'Berry Bushes in Flower Garden' },
      { name: 'Sponge Cake', quantity: 1, source: 'Bakery in Cozy Cafe' },
      { name: 'Whipped Cream', quantity: 2, source: 'Dairy Farm in Green Meadows' }
    ]
  },
  {
    id: 'flower-crown',
    name: 'Flower Crown',
    category: 'Accessory',
    friendshipPoints: 22,
    rarity: 'Uncommon',
    description: 'A beautiful crown made of fresh, colorful flowers.',
    craftingMaterials: [
      { name: 'Pink Roses', quantity: 3, source: 'Rose Garden in Flower Garden' },
      { name: 'White Daisies', quantity: 3, source: 'Daisy Field in Green Meadows' },
      { name: 'Vine Twine', quantity: 1, source: 'Forest Grove in Woodland Area' }
    ]
  },
  {
    id: 'pink-bow',
    name: 'Pink Bow',
    category: 'Accessory',
    friendshipPoints: 12,
    rarity: 'Common',
    description: 'A cute pink bow that adds charm to any outfit.',
    foundAt: ['Gift Shop in Rainbow Reef', 'Accessory Store in Fashion District']
  },
  {
    id: 'dark-chocolate',
    name: 'Dark Chocolate',
    category: 'Food',
    friendshipPoints: 16,
    rarity: 'Common',
    description: 'Rich, bittersweet chocolate for those with sophisticated tastes.',
    craftingMaterials: [
      { name: 'Cacao Beans', quantity: 5, source: 'Chocolate Trees in Tropical Beach' },
      { name: 'Sugar', quantity: 1, source: 'Sugar Cane in Tropical Beach' }
    ]
  },
  {
    id: 'skull-ring',
    name: 'Skull Ring',
    category: 'Accessory',
    friendshipPoints: 28,
    rarity: 'Rare',
    description: 'A cool gothic ring that shows your rebellious side.',
    foundAt: ['Treasure Chest in Spooky Swamp', 'Goth Shop in Dark Alley']
  },
  {
    id: 'gothic-dress',
    name: 'Gothic Dress',
    category: 'Clothing',
    friendshipPoints: 35,
    rarity: 'Epic',
    description: 'An elegant black dress with lace details and a mysterious charm.',
    craftingMaterials: [
      { name: 'Black Fabric', quantity: 3, source: 'Fabric Store in Fashion District' },
      { name: 'Lace Trim', quantity: 2, source: 'Craft Shop in Art District' },
      { name: 'Silver Buttons', quantity: 5, source: 'Button Collection in Treasure Cove' }
    ]
  },
  {
    id: 'custard-pudding',
    name: 'Custard Pudding',
    category: 'Food',
    friendshipPoints: 20,
    rarity: 'Uncommon',
    description: 'A smooth, creamy pudding that melts in your mouth.',
    craftingMaterials: [
      { name: 'Fresh Eggs', quantity: 3, source: 'Chicken Coop in Green Meadows' },
      { name: 'Milk', quantity: 2, source: 'Dairy Farm in Green Meadows' },
      { name: 'Vanilla Extract', quantity: 1, source: 'Spice Rack in Cozy Cafe' }
    ]
  },
  {
    id: 'golden-hat',
    name: 'Golden Hat',
    category: 'Accessory',
    friendshipPoints: 30,
    rarity: 'Rare',
    description: 'A shiny golden hat that makes anyone look distinguished.',
    foundAt: ['Golden Chest in Treasure Cove', 'Luxury Shop in Rich District']
  },
  {
    id: 'comfy-cushion',
    name: 'Comfy Cushion',
    category: 'Furniture',
    friendshipPoints: 15,
    rarity: 'Common',
    description: 'A soft, fluffy cushion perfect for afternoon naps.',
    craftingMaterials: [
      { name: 'Soft Fabric', quantity: 2, source: 'Fabric Store in Fashion District' },
      { name: 'Cotton Stuffing', quantity: 3, source: 'Cotton Plants in Green Meadows' }
    ]
  },
  {
    id: 'cinnamon-roll',
    name: 'Cinnamon Roll',
    category: 'Food',
    friendshipPoints: 17,
    rarity: 'Common',
    description: 'A warm, sweet roll with cinnamon swirls and glaze.',
    craftingMaterials: [
      { name: 'Cinnamon Sticks', quantity: 2, source: 'Spice Trees in Tropical Beach' },
      { name: 'Sweet Dough', quantity: 1, source: 'Bakery in Cozy Cafe' },
      { name: 'Honey Glaze', quantity: 1, source: 'Beehive in Flower Garden' }
    ]
  },
  {
    id: 'fluffy-cloud',
    name: 'Fluffy Cloud',
    category: 'Decoration',
    friendshipPoints: 25,
    rarity: 'Rare',
    description: 'A magical cloud that floats gently and brings sweet dreams.',
    foundAt: ['Sky Castle in Cloud Kingdom', 'Weather Station in Windy Heights']
  },
  {
    id: 'blue-bow',
    name: 'Blue Bow',
    category: 'Accessory',
    friendshipPoints: 12,
    rarity: 'Common',
    description: 'A lovely blue bow as gentle as the sky.',
    foundAt: ['Gift Shop in Rainbow Reef', 'Accessory Store in Fashion District']
  },
  {
    id: 'fish-burger',
    name: 'Fish Burger',
    category: 'Food',
    friendshipPoints: 19,
    rarity: 'Uncommon',
    description: 'A delicious burger made with fresh fish and secret sauce.',
    craftingMaterials: [
      { name: 'Fresh Fish', quantity: 1, source: 'Fishing Spot in Rocky Shore' },
      { name: 'Burger Bun', quantity: 1, source: 'Bakery in Cozy Cafe' },
      { name: 'Special Sauce', quantity: 1, source: 'Recipe Book in Cozy Cafe' }
    ]
  },
  {
    id: 'cool-sunglasses',
    name: 'Cool Sunglasses',
    category: 'Accessory',
    friendshipPoints: 24,
    rarity: 'Uncommon',
    description: 'Stylish sunglasses that make anyone look incredibly cool.',
    foundAt: ['Surf Shop in Tropical Beach', 'Cool Store in Fashion District']
  },
  {
    id: 'rock-collection',
    name: 'Rock Collection',
    category: 'Collection',
    friendshipPoints: 14,
    rarity: 'Common',
    description: 'A collection of interesting rocks and minerals.',
    foundAt: ['Rocky Shore', 'Gemstone Mountain', 'Cave Entrance in Underground']
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
