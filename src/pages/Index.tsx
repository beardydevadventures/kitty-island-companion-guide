
import React, { useState } from 'react';
import { Search, Heart, Gift, Star, Calendar } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import CharacterCard from '@/components/CharacterCard';
import GiftDetailModal from '@/components/GiftDetailModal';
import DailyTracker from '@/components/DailyTracker';
import { characters, gifts, locations } from '@/data/gameData';

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGift, setSelectedGift] = useState(null);
  const [activeTab, setActiveTab] = useState('characters');

  const filteredCharacters = characters.filter(character =>
    character.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    character.favoriteGifts.some(fav =>
      gifts.find(gift => gift.id === fav.giftId)?.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const handleGiftClick = (giftId: string) => {
    const gift = gifts.find(g => g.id === giftId);
    setSelectedGift(gift);
  };

  const closeModal = () => {
    setSelectedGift(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-blue-50 to-purple-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-pink-100 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                  Hello Kitty Island Adventure
                </h1>
                <p className="text-sm text-gray-600">Gift Companion</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1 bg-pink-100 px-3 py-1 rounded-full">
                <Star className="w-4 h-4 text-pink-500" />
                <span className="text-sm font-medium text-pink-700">BF Made</span>
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search characters or gifts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-white/50 border-pink-200 focus:border-pink-300 rounded-full"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-white/60 backdrop-blur-sm border border-pink-200">
            <TabsTrigger
              value="characters"
              className="data-[state=active]:bg-pink-200 data-[state=active]:text-pink-800"
            >
              <Heart className="w-4 h-4 mr-2" />
              Characters
            </TabsTrigger>
            <TabsTrigger
              value="gifts"
              className="data-[state=active]:bg-blue-200 data-[state=active]:text-blue-800"
            >
              <Gift className="w-4 h-4 mr-2" />
              Gifts
            </TabsTrigger>
          </TabsList>

          <TabsContent value="characters" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCharacters.map((character) => (
                <CharacterCard
                  key={character.id}
                  character={character}
                  onGiftClick={handleGiftClick}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="gifts" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {gifts.map((gift) => (
                <Card
                  key={gift.id}
                  className="bg-white/60 backdrop-blur-sm border-pink-200 hover:border-pink-300 transition-all duration-200 cursor-pointer hover:shadow-lg"
                  onClick={() => handleGiftClick(gift.id)}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg text-gray-800">{gift.name}</CardTitle>
                      <div className="flex items-center space-x-1">
                        <Heart className="w-4 h-4 text-pink-500" />
                        <span className="text-sm font-medium text-pink-600">+</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                        {gift.category}
                      </Badge>
                      <span className="text-sm text-gray-600">{gift.rarity}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="daily" className="mt-6">
            <DailyTracker />
          </TabsContent>
        </Tabs>
      </div>

      {/* Gift Detail Modal */}
      {selectedGift && (
        <GiftDetailModal
          gift={selectedGift}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default Index;
