
import React from 'react';
import { Heart, Star, Gift, Tag } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { gifts, tags } from '@/data/gameData';

interface Character {
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
  image?: string;
}

interface CharacterCardProps {
  character: Character;
  onGiftClick: (giftId: string) => void;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character, onGiftClick }) => {
  const renderHearts = () => (
    <div className="flex items-center space-x-1">
      <Heart className="w-4 h-4 text-pink-500 fill-current" />
      <span className="text-sm text-gray-700 font-medium">{character.maxFriendshipLevel}</span>
    </div>
  );

  // Categorize gifts by friendship points
  const categorizeGifts = () => {
    const threeHeartGifts: any[] = [];
    const twoHeartGifts: any[] = [];

    character.favoriteGifts.forEach(({ giftId, hearts }) => {
      const gift = gifts.find(g => g.id === giftId);
      if (gift) {
        if (hearts >= 3) {
          threeHeartGifts.push(gift);
        } else {
          twoHeartGifts.push(gift);
        }
      }
    });

    return { threeHeartGifts, twoHeartGifts };
  };

  const { threeHeartGifts, twoHeartGifts } = categorizeGifts();

  const renderGiftCategory = (gifts: any[], heartCount: number, title: string) => {
    if (gifts.length === 0) return null;

    return (
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <div className="flex items-center">
            {Array.from({ length: heartCount }, (_, i) => (
              <Heart key={i} className="w-3 h-3 text-pink-500 fill-current" />
            ))}
          </div>
          <span className="text-sm font-medium text-gray-700">{title}:</span>
        </div>
        <div className="grid grid-cols-1 gap-2">
          {gifts.map((gift) => (
            <Button
              key={gift.id}
              variant="outline"
              size="sm"
              onClick={() => onGiftClick(gift.id)}
              className="justify-start bg-pink-50 border-pink-200 hover:bg-pink-100 text-pink-800 hover:text-pink-900"
            >
              <span>{gift.name}</span>
            </Button>
          ))}
        </div>
      </div>
    );
  };

  return (
    <Card className="bg-white/70 backdrop-blur-sm border-pink-200 hover:border-pink-300 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-xl text-gray-800 mb-1">{character.name}</CardTitle>
            <Badge variant="secondary" className="bg-purple-100 text-purple-700 text-xs mb-1">
              {character.series}
            </Badge>
            <div className="flex items-center space-x-2 text-xs text-gray-600">
              <span>📍</span>
              <span>{character.location}</span>
            </div>
          </div>
          <div className="w-16 h-16 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full flex items-center justify-center">
            <Star className="w-8 h-8 text-pink-500" />
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-sm text-gray-600 leading-relaxed">{character.description}</p>

        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-700">Max Friendship Level:</span>
          <div className="flex space-x-1">
            {renderHearts()}
          </div>
        </div>

        {/* Favorite Tags Section */}
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Tag className="w-4 h-4 text-purple-500" />
            <span className="text-sm font-medium text-gray-700">Favorite Tags:</span>
          </div>
          <div className="flex flex-wrap gap-1">
            {character.favoriteTags.map((tagId) => {
              const tag = tags.find(t => t.id === tagId);
              return tag ? (
                <Badge
                  key={tagId}
                  variant="outline"
                  className="text-xs bg-purple-50 border-purple-200 text-purple-700 hover:bg-purple-100"
                >
                  {tag.name}
                </Badge>
              ) : null;
            })}
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Gift className="w-4 h-4 text-pink-500" />
            <span className="text-sm font-medium text-gray-700">Favorite Gifts:</span>
          </div>

          {renderGiftCategory(threeHeartGifts, 3, "Three Heart Gifts")}
          {renderGiftCategory(twoHeartGifts, 2, "Two Heart Gifts")}
        </div>
      </CardContent>
    </Card>
  );
};

export default CharacterCard;
