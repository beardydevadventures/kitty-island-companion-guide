
// Game data for Hello Kitty Island Adventure companion app

export interface Character {
  id: string;
  name: string;
  series: string;
  location: string;
  favoriteGifts: string[];
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

export interface Location {
  id: string;
  name: string;
  description: string;
  availableResources: string[];
}

export const characters: Character[] = [
  {
    id: 'hello-kitty',
    name: 'Hello Kitty',
    series: 'Hello Kitty',
    location: 'Rainbow Reef',
    favoriteGifts: ['apple-pie', 'rainbow-cupcake', 'friendship-bracelet'],
    friendshipLevel: 3,
    maxFriendshipLevel: 5,
    description: 'The sweetest kitty who loves making friends and baking delicious treats!'
  },
  {
    id: 'my-melody',
    name: 'My Melody',
    series: 'My Melody',
    location: 'Flower Garden',
    favoriteGifts: ['strawberry-cake', 'flower-crown', 'pink-bow'],
    friendshipLevel: 2,
    maxFriendshipLevel: 5,
    description: 'A gentle rabbit who adores flowers and sweet strawberry treats.'
  },
  {
    id: 'kuromi',
    name: 'Kuromi',
    series: 'My Melody',
    location: 'Spooky Swamp',
    favoriteGifts: ['dark-chocolate', 'skull-ring', 'gothic-dress'],
    friendshipLevel: 1,
    maxFriendshipLevel: 5,
    description: 'A mischievous rabbit with a tough exterior but a soft heart inside.'
  },
  {
    id: 'pompompurin',
    name: 'Pompompurin',
    series: 'Pompompurin',
    location: 'Cozy Cafe',
    favoriteGifts: ['custard-pudding', 'golden-hat', 'comfy-cushion'],
    friendshipLevel: 4,
    maxFriendshipLevel: 5,
    description: 'A laid-back golden retriever who loves napping and delicious pudding.'
  },
  {
    id: 'cinnamoroll',
    name: 'Cinnamoroll',
    series: 'Cinnamoroll',
    location: 'Cloud Kingdom',
    favoriteGifts: ['cinnamon-roll', 'fluffy-cloud', 'blue-bow'],
    friendshipLevel: 2,
    maxFriendshipLevel: 5,
    description: 'A puppy who can fly through the sky and loves sweet cinnamon treats.'
  },
  {
    id: 'badtz-maru',
    name: 'Badtz-Maru',
    series: 'Badtz-Maru',
    location: 'Rocky Shore',
    location: 'Mischief Bay',
    favoriteGifts: ['fish-burger', 'cool-sunglasses', 'rock-collection'],
    friendshipLevel: 1,
    maxFriendshipLevel: 5,
    description: 'A mischievous penguin who dreams of being the boss of everything!'
  }
];

export const gifts: Gift[] = [
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
