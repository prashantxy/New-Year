'use client'

import React, { useState } from 'react';
import { Camera, Sparkles, RefreshCw } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './component/ui/card';
import FloatingBackground from './component/FloatingBackground';

const AnimeNewYearSpirit = () => {
  const [name, setName] = useState('');
  const [outfit, setOutfit] = useState('kimono');
  const [accessory, setAccessory] = useState('none');
  const [showCharacter, setShowCharacter] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [animationStep, setAnimationStep] = useState(0);

  const outfits = {
    kimono: '👘',
    yukata: '🥻',
    festive: '✨',
    formal: '🕴️',
    casual: '👚',
  };

  const accessories = {
    none: '',
    fan: '🎋',
    lantern: '🏮',
    mask: '🎭',
    parasol: '🌂',
  };

  const backgrounds = [
    'from-red-400 via-pink-500 to-purple-500',
    'from-blue-400 via-indigo-500 to-purple-500',
    'from-green-400 via-teal-500 to-blue-500',
  ];

  const generateMessage = (userName: string) => {
    const currentYear = new Date().getFullYear();
    const messages = [
      `✨ Happy New Year ${currentYear}, ${userName}! ✨`,
      `🎉 Wishing ${userName} an Anime-zing ${currentYear}! 🎉`,
      `🌟 ${userName}'s New Year Spirit Shines Bright! 🌟`,
      `🎊 ${userName}, Let's Make ${currentYear} Legendary! 🎊`,
    ];
    return messages[Math.floor(Math.random() * messages.length)];
  };

  const handleGenerate = () => {
    if (name.trim()) {
      setIsGenerating(true);
      setAnimationStep(0);

      const stepDuration = 800;
      for (let i = 1; i <= 5; i++) {
        setTimeout(() => setAnimationStep(i), stepDuration * i);
      }

      setTimeout(() => {
        setShowCharacter(true);
        setIsGenerating(false);
      }, stepDuration * 6);
    }
  };

  const getRandomBackground = () => {
    return backgrounds[Math.floor(Math.random() * backgrounds.length)];
  };

  return (
    <>
      <FloatingBackground />
      <div className="perspective-2000 w-full max-w-3xl mx-auto p-4 relative z-10">
        <div className={`relative transition-all duration-1000 ${isGenerating ? 'scale-110' : ''}`}>
          {/* Input Form */}
          {!showCharacter && !isGenerating && (
            <Card className="bg-white/80 backdrop-filter backdrop-blur-lg animate-float-slow shadow-2xl">
              <CardHeader className="text-center">
                <CardTitle className="text-4xl font-bold text-blue-800 animate-pulse-glow">
                  Create Your New Year Anime Spirit
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="space-y-6 animate-slide-up">
                  <div className="transform transition-all duration-500 hover:scale-105">
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full p-4 text-xl border-2 border-blue-300 rounded-xl focus:ring-4 
                        focus:ring-blue-400 focus:border-transparent bg-white/80 backdrop-blur-sm
                        placeholder:text-blue-300 text-blue-700"
                      placeholder="Enter your name..."
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="group">
                      <select
                        value={outfit}
                        onChange={(e) => setOutfit(e.target.value)}
                        className="w-full p-4 text-lg border-2 border-blue-300 rounded-xl 
                          group-hover:scale-105 transition-all duration-300 bg-white/80 backdrop-blur-sm"
                      >
                        {Object.entries(outfits).map(([key, emoji]) => (
                          <option key={key} value={key}>
                            {emoji} {key.charAt(0).toUpperCase() + key.slice(1)}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="group">
                      <select
                        value={accessory}
                        onChange={(e) => setAccessory(e.target.value)}
                        className="w-full p-4 text-lg border-2 border-blue-300 rounded-xl 
                          group-hover:scale-105 transition-all duration-300 bg-white/80 backdrop-blur-sm"
                      >
                        {Object.entries(accessories).map(([key, emoji]) => (
                          <option key={key} value={key}>
                            {emoji} {key.charAt(0).toUpperCase() + key.slice(1)}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <button
                    onClick={handleGenerate}
                    className="w-full p-6 bg-gradient-to-r from-blue-600 to-red-600 text-white text-xl
                      font-bold rounded-xl shadow-lg transition-all duration-300 hover:scale-105 
                      hover:shadow-blue-500/50 hover:from-blue-700 hover:to-red-700
                      disabled:opacity-50 disabled:cursor-not-allowed
                      flex items-center justify-center gap-3"
                    disabled={!name.trim()}
                  >
                    <Sparkles className="animate-spin-slow" />
                    Generate Your New Year Spirit
                    <Camera className="animate-bounce" />
                  </button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Generation Animation */}
          {isGenerating && (
            <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-md z-50">
              <div className="text-center">
                <div className={`text-8xl transition-all duration-500 ${animationStep >= 1 ? 'scale-150 opacity-100' : 'scale-0 opacity-0'}`}>
                  ✨
                </div>
                <div className={`text-8xl transition-all duration-500 ${animationStep >= 2 ? 'scale-150 opacity-100' : 'scale-0 opacity-0'}`}>
                  {outfits[outfit]}
                </div>
                <div className={`text-8xl transition-all duration-500 ${animationStep >= 3 ? 'scale-150 opacity-100' : 'scale-0 opacity-0'}`}>
                  👤
                </div>
                <div className={`text-8xl transition-all duration-500 ${animationStep >= 4 ? 'scale-150 opacity-100' : 'scale-0 opacity-0'}`}>
                  {accessories[accessory]}
                </div>
                <div className="mt-8 text-white text-2xl font-bold animate-pulse">
                  Materializing your New Year spirit...
                </div>
              </div>
            </div>
          )}

          {/* Character Display */}
          {showCharacter && (
            <Card className={`bg-gradient-to-br ${getRandomBackground()} animate-card-reveal shadow-2xl backdrop-filter backdrop-blur-lg`}>
              <CardHeader className="text-center">
                <CardTitle className="text-4xl font-bold text-white animate-title-reveal">
                  {generateMessage(name)}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <div className="aspect-square max-w-md mx-auto bg-gradient-to-b from-white/20 to-black/20 
                    rounded-2xl p-8 backdrop-blur-sm animate-character-reveal shadow-2xl">
                    <div className="relative w-full h-full flex items-center justify-center">
                      <div className="absolute inset-0 animate-sparkle">
                        <div className="absolute top-0 left-0 w-2 h-2 bg-white rounded-full" />
                        <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-white rounded-full" />
                        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-white rounded-full" />
                      </div>
                      <div className="text-8xl animate-float-character">
                        <span className="block animate-character-spin">👤</span>
                        <span className="block mt-4 animate-outfit-reveal">{outfits[outfit]}</span>
                        {accessories[accessory] && (
                          <span className="block mt-4 animate-accessory-float">{accessories[accessory]}</span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 flex justify-center gap-4">
                    <button
                      onClick={() => setShowCharacter(false)}
                      className="px-6 py-3 bg-white/20 hover:bg-white/30 text-white rounded-xl
                        transition-all duration-300 hover:scale-105 backdrop-blur-sm flex items-center gap-2"
                    >
                      <RefreshCw /> New
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </>
  );
};

export default AnimeNewYearSpirit;
