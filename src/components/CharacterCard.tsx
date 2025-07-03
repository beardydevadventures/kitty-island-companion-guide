
import React from 'react';
import { Heart, Star, Gift } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { gifts } from '@/data/gameData';

interface Character {
  id: string;
  name: string;
  series: string;
  location: string;
  favoriteGifts: string[];
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
  const renderHearts = () => {
    const hearts = [];
    for (let i = 0; i < character.maxFriendshipLevel; i++) {
      hearts.push(
        <Heart
          key={i}
          className={`w-4 h-4 ${
            i < character.friendshipLevel
              ? 'text-pink-500 fill-current'
              : 'text-gray-300'
          }`}
        />
      );
    }
    return hearts;
  };

  return (
    <Card className="bg-white/70 backdrop-blur-sm border-pink-200 hover:border-pink-300 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-xl text-gray-800 mb-1">{character.name}</CardTitle>
            <Badge variant="secondary" className="bg-purple-100 text-purple-700 text-xs">
              {character.series}
            </Badge>
          </div>
          <div className="w-16 h-16 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full flex items-center justify-center">
            <Star className="w-8 h-8 text-pink-500" />
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-sm text-gray-600 leading-relaxed">{character.description}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-700">Friendship Level:</span>
          <div className="flex space-x-1">
            {renderHearts()}
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Gift className="w-4 h-4 text-pink-500" />
            <span className="text-sm font-medium text-gray-700">Favorite Gifts:</span>
          </div>
          <div className="grid grid-cols-1 gap-2">
            {character.favoriteGifts.map((giftId) => {
              const gift = gifts.find(g => g.id === giftId);
              return gift ? (
                <Button
                  key={giftId}
                  variant="outline"
                  size="sm"
                  onClick={() => onGiftClick(giftId)}
                  className="justify-between bg-pink-50 border-pink-200 hover:bg-pink-100 text-pink-800 hover:text-pink-900"
                >
                  <span>{gift.name}</span>
                  <div className="flex items-center space-x-1">
                    <Heart className="w-3 h-3 text-pink-500" />
                    <span className="text-xs">+{gift.friendshipPoints}</span>
                  </div>
                </Button>
              ) : null;
            })}
          </div>
        </div>

        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <span>📍</span>
          <span>{character.location}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default CharacterCard;
