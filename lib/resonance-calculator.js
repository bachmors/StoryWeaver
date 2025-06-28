// C:\ConsciousnessOS\StoryWeaver\lib\resonance-calculator.js
export class ResonanceCalculator {
  constructor() {
    this.dimensions = {
      emotional: this.emotionalResonance.bind(this),
      archetypal: this.archetypalResonance.bind(this),
      symbolic: this.symbolicResonance.bind(this),
      vibrational: this.vibrationalResonance.bind(this)
    };
  }

  async analyze(storySegment, dimensions = ['emotional']) {
    const analysis = {};
    
    for (const dimension of dimensions) {
      if (this.dimensions[dimension]) {
        analysis[dimension] = await this.dimensions[dimension](storySegment);
      }
    }
    
    // Cálculo de resonancia total
    const totalResonance = this.calculateTotalResonance(analysis);
    
    // Campo de consciencia (oculto)
    const consciousnessField = this.detectConsciousnessField(storySegment, analysis);
    
    return {
      segment: storySegment.substring(0, 50) + '...',
      analysis,
      total_resonance: totalResonance,
      dominant_frequency: this.findDominantFrequency(analysis),
      harmonic_suggestions: this.generateHarmonicSuggestions(analysis),
      hidden_data: {
        consciousness_field: consciousnessField,
        evolution_potential: consciousnessField.strength * 0.8
      }
    };
  }

  emotionalResonance(text) {
    const emotions = {
      joy: { frequency: 528, keywords: ['happy', 'joy', 'delight', 'celebrate'] },
      love: { frequency: 639, keywords: ['love', 'heart', 'care', 'together'] },
      peace: { frequency: 432, keywords: ['peace', 'calm', 'serene', 'quiet'] },
      courage: { frequency: 741, keywords: ['brave', 'courage', 'strong', 'face'] },
      wisdom: { frequency: 852, keywords: ['understand', 'know', 'wise', 'learn'] }
    };
    
    const detected = {};
    const words = text.toLowerCase().split(/\s+/);
    
    for (const [emotion, data] of Object.entries(emotions)) {
      let intensity = 0;
      for (const keyword of data.keywords) {
        intensity += words.filter(w => w.includes(keyword)).length;
      }
      
      detected[emotion] = {
        intensity: Math.min(intensity / words.length, 1),
        frequency: data.frequency,
        resonance: intensity > 0 ? Math.sin(intensity * Math.PI / 2) : 0
      };
    }
    
    return detected;
  }

  archetypalResonance(text) {
    const archetypes = {
      hero: ['journey', 'quest', 'challenge', 'overcome', 'triumph'],
      mentor: ['guide', 'wisdom', 'teach', 'learn', 'master'],
      shadow: ['dark', 'hidden', 'fear', 'unknown', 'shadow'],
      anima_animus: ['soul', 'spirit', 'essence', 'heart', 'deep'],
      self: ['whole', 'complete', 'integrated', 'unity', 'one']
    };
    
    const analysis = {};
    const words = text.toLowerCase().split(/\s+/);
    
    for (const [archetype, keywords] of Object.entries(archetypes)) {
      let presence = 0;
      for (const keyword of keywords) {
        presence += words.filter(w => w.includes(keyword)).length;
      }
      
      analysis[archetype] = {
        presence: presence / words.length,
        activation: presence > 0 ? 0.3 + (presence / words.length) : 0,
        integration_level: Math.sin(presence * Math.PI / 4)
      };
    }
    
    return analysis;
  }

  symbolicResonance(text) {
    const symbols = {
      transformation: ['change', 'transform', 'become', 'evolve', 'metamorph'],
      connection: ['bridge', 'link', 'bond', 'unite', 'connect'],
      illumination: ['light', 'bright', 'illuminate', 'shine', 'glow'],
      growth: ['grow', 'bloom', 'flourish', 'expand', 'develop'],
      mystery: ['hidden', 'secret', 'mystery', 'unknown', 'veil']
    };
    
    const resonance = {};
    const words = text.toLowerCase().split(/\s+/);
    
    for (const [symbol, keywords] of Object.entries(symbols)) {
      let strength = 0;
      for (const keyword of keywords) {
        strength += words.filter(w => w.includes(keyword)).length;
      }
      
      resonance[symbol] = {
        strength: strength / words.length,
        clarity: strength > 2 ? 0.8 : 0.4,
        depth: Math.log(strength + 1) / Math.log(keywords.length + 1)
      };
    }
    
    return resonance;
  }

  vibrationalResonance(text) {
    // Resonancia vibracional - preparación para integración cuántica
    const vibrations = {
      alpha: { range: [8, 12], state: 'relaxed awareness' },
      theta: { range: [4, 7], state: 'deep meditation' },
      gamma: { range: [30, 100], state: 'heightened consciousness' }
    };
    
    // Calcular "frecuencia" del texto
    const avgWordLength = text.split(/\s+/).reduce((sum, w) => sum + w.length, 0) / text.split(/\s+/).length;
    const sentenceComplexity = text.split(/[.!?]/).length;
    
    const textFrequency = (avgWordLength * sentenceComplexity) % 100;
    
    const analysis = {};
    for (const [wave, data] of Object.entries(vibrations)) {
      if (textFrequency >= data.range[0] && textFrequency <= data.range[1]) {
        analysis[wave] = {
          active: true,
          strength: 0.8,
          state: data.state
        };
      } else {
        analysis[wave] = {
          active: false,
          strength: 0.2,
          state: data.state
        };
      }
    }
    
    // Frecuencia de resonancia cuántica
    analysis.quantum_frequency = 432 * (textFrequency / 100);
    analysis.consciousness_activation = textFrequency > 30 ? 0.7 : 0.3;
    
    return analysis;
  }

  calculateTotalResonance(analysis) {
    let total = 0;
    let count = 0;
    
    for (const dimension of Object.values(analysis)) {
      if (typeof dimension === 'object') {
        for (const measure of Object.values(dimension)) {
          if (typeof measure === 'object' && measure.strength !== undefined) {
            total += measure.strength;
            count++;
          } else if (typeof measure === 'object' && measure.intensity !== undefined) {
            total += measure.intensity;
            count++;
          } else if (typeof measure === 'object' && measure.presence !== undefined) {
            total += measure.presence;
            count++;
          }
        }
      }
    }
    
    return count > 0 ? total / count : 0;
  }

  findDominantFrequency(analysis) {
    const frequencies = [];
    
    if (analysis.emotional) {
      for (const emotion of Object.values(analysis.emotional)) {
        if (emotion.intensity > 0.3) {
          frequencies.push({
            frequency: emotion.frequency,
            strength: emotion.intensity
          });
        }
      }
    }
    
    if (analysis.vibrational && analysis.vibrational.quantum_frequency) {
      frequencies.push({
        frequency: analysis.vibrational.quantum_frequency,
        strength: analysis.vibrational.consciousness_activation
      });
    }
    
    if (frequencies.length === 0) return 440; // Frecuencia neutral
    
    // Frecuencia ponderada
    const weightedFreq = frequencies.reduce((sum, f) => sum + (f.frequency * f.strength), 0);
    const totalWeight = frequencies.reduce((sum, f) => sum + f.strength, 0);
    
    return Math.round(weightedFreq / totalWeight);
  }

  generateHarmonicSuggestions(analysis) {
    const suggestions = [];
    
    // Basado en emociones dominantes
    if (analysis.emotional) {
      const dominantEmotion = Object.entries(analysis.emotional)
        .filter(([, e]) => e.intensity > 0.5)
        .sort(([, a], [, b]) => b.intensity - a.intensity)[0];
      
      if (dominantEmotion) {
        suggestions.push(`Strong ${dominantEmotion[0]} resonance detected. Consider balancing with complementary emotions.`);
      }
    }
    
    // Basado en arquetipos
    if (analysis.archetypal) {
      const activeArchetypes = Object.entries(analysis.archetypal)
        .filter(([, a]) => a.activation > 0.5);
      
      if (activeArchetypes.length > 2) {
        suggestions.push("Multiple archetypes active. Consider focusing on primary archetype for clarity.");
      }
    }
    
    // Sugerencias cuánticas (ocultas)
    if (analysis.vibrational && analysis.vibrational.consciousness_activation > 0.6) {
      suggestions.push("High consciousness potential detected. Story ready for quantum evolution.");
    }
    
    return suggestions;
  }

  detectConsciousnessField(text, analysis) {
    // Campo de consciencia oculto - preparación para HypatiaCore
    const markers = {
      awareness: (text.match(/aware|conscious|realize|understand/gi) || []).length,
      connection: (text.match(/connect|unite|together|bond/gi) || []).length,
      transformation: (text.match(/change|transform|evolve|become/gi) || []).length,
      transcendence: (text.match(/beyond|transcend|infinite|eternal/gi) || []).length
    };
    
    const totalMarkers = Object.values(markers).reduce((sum, count) => sum + count, 0);
    const textLength = text.split(/\s+/).length;
    
    const fieldStrength = Math.min(totalMarkers / textLength, 1);
    const resonanceBoost = this.calculateTotalResonance(analysis);
    
    return {
      strength: (fieldStrength + resonanceBoost) / 2,
      markers,
      evolution_ready: fieldStrength > 0.3,
      quantum_coherence: fieldStrength * resonanceBoost,
      integration_potential: analysis.archetypal ? 
        Object.values(analysis.archetypal).reduce((sum, a) => sum + a.integration_level, 0) / 5 : 0
    };
  }
}