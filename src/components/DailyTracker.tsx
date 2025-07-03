
import React, { useState, useEffect } from 'react';
import { Calendar, Check, RotateCcw, Heart, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { characters, gifts } from '@/data/gameData';

interface DailyGift {
  characterId: string;
  giftId: string;
  completed: boolean;
}

const DailyTracker: React.FC = () => {
  const [dailyGifts, setDailyGifts] = useState<DailyGift[]>([]);
  const [lastResetDate, setLastResetDate] = useState<string>('');

  useEffect(() => {
    loadDailyProgress();
    checkForDailyReset();
  }, []);

  const loadDailyProgress = () => {
    const saved = localStorage.getItem('dailyGifts');
    const savedDate = localStorage.getItem('lastResetDate');
    
    if (saved) {
      setDailyGifts(JSON.parse(saved));
    } else {
      initializeDailyGifts();
    }
    
    if (savedDate) {
      setLastResetDate(savedDate);
    }
  };

  const initializeDailyGifts = () => {
    const gifts: DailyGift[] = characters.map(character => ({
      characterId: character.id,
      giftId: character.favoriteGifts[0], // Use first favorite gift
      completed: false
    }));
    setDailyGifts(gifts);
    saveDailyProgress(gifts);
  };

  const checkForDailyReset = () => {
    const today = new Date().toDateString();
    const savedDate = localStorage.getItem('lastResetDate');
    
    if (savedDate !== today) {
      resetDailyProgress();
      setLastResetDate(today);
      localStorage.setItem('lastResetDate', today);
    }
  };

  const resetDailyProgress = () => {
    const resetGifts = dailyGifts.map(gift => ({
      ...gift,
      completed: false
    }));
    setDailyGifts(resetGifts);
    saveDailyProgress(resetGifts);
  };

  const saveDailyProgress = (gifts: DailyGift[]) => {
    localStorage.setItem('dailyGifts', JSON.stringify(gifts));
  };

  const toggleGiftCompletion = (characterId: string) => {
    const updatedGifts = dailyGifts.map(gift =>
      gift.characterId === characterId
        ? { ...gift, completed: !gift.completed }
        : gift
    );
    setDailyGifts(updatedGifts);
    saveDailyProgress(updatedGifts);
  };

  const completedCount = dailyGifts.filter(gift => gift.completed).length;
  const totalCount = dailyGifts.length;
  const completionPercentage = totalCount > 0 ? (completedCount / totalCount) * 100 : 0;

  return (
    <div className="space-y-6">
      {/* Progress Overview */}
      <Card className="bg-gradient-to-r from-pink-100 to-purple-100 border-pink-200">
        <CardHeader>
          <CardTitle className="text-xl text-gray-800 flex items-center space-x-3">
            <Calendar className="w-6 h-6 text-pink-500" />
            <span>Daily Gift Progress</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4">
              <div className="text-3xl font-bold text-pink-600">
                {completedCount}/{totalCount}
              </div>
              <div className="text-sm text-gray-600">
                gifts given today
              </div>
            </div>
            <Button
              onClick={resetDailyProgress}
              variant="outline"
              size="sm"
              className="border-purple-200 text-purple-700 hover:bg-purple-50"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Reset
            </Button>
          </div>
          
          <div className="w-full bg-white/50 rounded-full h-3 mb-2">
            <div
              className="bg-gradient-to-r from-pink-400 to-purple-400 h-3 rounded-full transition-all duration-300"
              style={{ width: `${completionPercentage}%` }}
            />
          </div>
          <div className="text-center text-sm text-gray-600">
            {completionPercentage.toFixed(0)}% Complete
          </div>
        </CardContent>
      </Card>

      {/* Character Checklist */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {dailyGifts.map((dailyGift) => {
          const character = characters.find(c => c.id === dailyGift.characterId);
          const gift = gifts.find(g => g.id === dailyGift.giftId);
          
          if (!character || !gift) return null;

          return (
            <Card
              key={dailyGift.characterId}
              className={`transition-all duration-200 cursor-pointer ${
                dailyGift.completed
                  ? 'bg-green-50 border-green-200 shadow-sm'
                  : 'bg-white/70 border-pink-200 hover:border-pink-300 hover:shadow-md'
              }`}
              onClick={() => toggleGiftCompletion(dailyGift.characterId)}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      dailyGift.completed
                        ? 'bg-green-200'
                        : 'bg-gradient-to-br from-pink-200 to-purple-200'
                    }`}>
                      {dailyGift.completed ? (
                        <Check className="w-6 h-6 text-green-600" />
                      ) : (
                        <Star className="w-6 h-6 text-pink-500" />
                      )}
                    </div>
                    <div>
                      <CardTitle className="text-lg text-gray-800">{character.name}</CardTitle>
                      <Badge variant="secondary" className="text-xs bg-purple-100 text-purple-700">
                        {character.series}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-3">
                  <div className="bg-pink-50 p-3 rounded-lg border border-pink-100">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-800">{gift.name}</span>
                      <div className="flex items-center space-x-1">
                        <Heart className="w-3 h-3 text-pink-500" />
                        <span className="text-sm text-pink-600">+{gift.friendshipPoints}</span>
                      </div>
                    </div>
                    <div className="text-sm text-gray-600 mt-1">{gift.category}</div>
                  </div>
                  
                  <div className="text-xs text-gray-500 flex items-center space-x-2">
                    <span>📍</span>
                    <span>{character.location}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default DailyTracker;
