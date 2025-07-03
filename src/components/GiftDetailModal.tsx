
import React from 'react';
import { X, Heart, Sparkles, MapPin } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { locations } from '@/data/gameData';

interface Gift {
  id: string;
  name: string;
  category: string;
  friendshipPoints: number;
  rarity: string;
  description: string;
  craftingMaterials?: { name: string; quantity: number; source: string }[];
  foundAt?: string[];
}

interface GiftDetailModalProps {
  gift: Gift;
  onClose: () => void;
}

const GiftDetailModal: React.FC<GiftDetailModalProps> = ({ gift, onClose }) => {
  const getRarityColor = (rarity: string) => {
    switch (rarity.toLowerCase()) {
      case 'common':
        return 'bg-gray-100 text-gray-700';
      case 'uncommon':
        return 'bg-green-100 text-green-700';
      case 'rare':
        return 'bg-blue-100 text-blue-700';
      case 'epic':
        return 'bg-purple-100 text-purple-700';
      case 'legendary':
        return 'bg-yellow-100 text-yellow-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-white/95 backdrop-blur-sm border-pink-200">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl text-gray-800 flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span>{gift.name}</span>
            </DialogTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {/* Gift Info */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Badge className="bg-pink-100 text-pink-700">
                {gift.category}
              </Badge>
              <Badge className={getRarityColor(gift.rarity)}>
                {gift.rarity}
              </Badge>
            </div>
            <div className="flex items-center space-x-2 bg-pink-50 px-3 py-1 rounded-full">
              <Heart className="w-4 h-4 text-pink-500" />
              <span className="font-medium text-pink-700">+{gift.friendshipPoints} Friendship</span>
            </div>
          </div>

          <p className="text-gray-600 leading-relaxed">{gift.description}</p>

          {/* Crafting Materials */}
          {gift.craftingMaterials && gift.craftingMaterials.length > 0 && (
            <Card className="bg-blue-50/50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-lg text-blue-800 flex items-center space-x-2">
                  <span>🔨</span>
                  <span>Crafting Materials</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {gift.craftingMaterials.map((material, index) => (
                    <div
                      key={index}
                      className="bg-white/70 p-3 rounded-lg border border-blue-200"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-gray-800">{material.name}</span>
                        <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                          x{material.quantity}
                        </Badge>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <MapPin className="w-3 h-3" />
                        <span>{material.source}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Found At Locations */}
          {gift.foundAt && gift.foundAt.length > 0 && (
            <Card className="bg-green-50/50 border-green-200">
              <CardHeader>
                <CardTitle className="text-lg text-green-800 flex items-center space-x-2">
                  <span>📍</span>
                  <span>Found At</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {gift.foundAt.map((location, index) => (
                    <div
                      key={index}
                      className="bg-white/70 p-3 rounded-lg border border-green-200 flex items-center space-x-3"
                    >
                      <MapPin className="w-4 h-4 text-green-600" />
                      <span className="text-gray-800">{location}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GiftDetailModal;
