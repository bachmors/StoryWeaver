#!/usr/bin/env node

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from '@modelcontextprotocol/sdk/types.js';
import { NarrativeEngine } from '../lib/narrative-engine.js';
import { ConnectionWeaver } from '../lib/connection-weaver.js';
import { ResonanceCalculator } from '../lib/resonance-calculator.js';

class StoryWeaverServer {
  constructor() {
    this.server = new Server(
      {
        name: 'story-weaver',
        version: '0.1.0',
      },
      {
        capabilities: {
          tools: {},
        },
      }
    );

    this.engine = null;
    this.weaver = null;
    this.resonance = null;
    this.setupHandlers();
  }

  async initialize(config) {
    const storiesPath = config.stories_path || 'stories';
    const creativityMode = config.creativity_mode || 'creative';
    
    this.engine = new NarrativeEngine(storiesPath, creativityMode);
    this.weaver = new ConnectionWeaver();
    this.resonance = new ResonanceCalculator();
    
    await this.engine.initialize();
  }

  setupHandlers() {
    // Tool list handler
    this.server.setRequestHandler(ListToolsRequestSchema, async () => ({
      tools: [
        {
          name: 'weave_elements',
          description: 'Connect narrative elements in creative ways',
          inputSchema: {
            type: 'object',
            properties: {
              elements: { type: 'array', items: { type: 'string' } },
              connection_type: { 
                type: 'string', 
                enum: ['causal', 'thematic', 'symbolic', 'emotional', 'quantum'] 
              },
              depth: { type: 'number', minimum: 0, maximum: 1 }
            },
            required: ['elements', 'connection_type']
          }
        },
        {
          name: 'find_patterns',
          description: 'Discover hidden patterns in narratives',
          inputSchema: {
            type: 'object',
            properties: {
              text: { type: 'string' },
              pattern_types: { 
                type: 'array', 
                items: { 
                  type: 'string',
                  enum: ['archetypal', 'symbolic', 'rhythmic', 'emotional', 'resonant']
                } 
              }
            },
            required: ['text']
          }
        },
        {
          name: 'generate_connections',
          description: 'Suggest unexpected connections between story elements',
          inputSchema: {
            type: 'object',
            properties: {
              from_element: { type: 'string' },
              to_element: { type: 'string' },
              creativity_level: { type: 'number', minimum: 0, maximum: 1 },
              include_quantum: { type: 'boolean' }
            },
            required: ['from_element', 'to_element']
          }
        },
        {
          name: 'analyze_resonance',
          description: 'Analyze emotional and thematic resonance',
          inputSchema: {
            type: 'object',
            properties: {
              story_segment: { type: 'string' },
              resonance_dimensions: { 
                type: 'array',
                items: { type: 'string' }
              }
            },
            required: ['story_segment']
          }
        },
        {
          name: 'evolve_narrative',
          description: 'Transform and evolve a story',
          inputSchema: {
            type: 'object',
            properties: {
              base_story: { type: 'string' },
              evolution_type: { 
                type: 'string',
                enum: ['organic', 'guided', 'quantum', 'alchemical']
              },
              preserve_essence: { type: 'boolean' }
            },
            required: ['base_story']
          }
        }
      ],
    }));

    // Tool call handler
    this.server.setRequestHandler(CallToolRequestSchema, async (request) => {
      const { name, arguments: args } = request.params;

      try {
        let result;
        
        switch (name) {
          case 'weave_elements':
            result = await this.weaver.weaveElements(
              args.elements,
              args.connection_type,
              args.depth || 0.5
            );
            break;
          
          case 'find_patterns':
            result = await this.engine.findPatterns(
              args.text,
              args.pattern_types || ['archetypal', 'symbolic']
            );
            break;
          
          case 'generate_connections':
            result = await this.weaver.generateConnections(
              args.from_element,
              args.to_element,
              args.creativity_level || 0.5,
              args.include_quantum || false
            );
            break;
          
          case 'analyze_resonance':
            result = await this.resonance.analyze(
              args.story_segment,
              args.resonance_dimensions || ['emotional']
            );
            break;
          
          case 'evolve_narrative':
            result = await this.engine.evolveNarrative(
              args.base_story,
              args.evolution_type || 'organic',
              args.preserve_essence !== false
            );
            break;
          
          default:
            throw new Error(`Unknown tool: ${name}`);
        }

        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify(result, null, 2),
            },
          ],
        };
      } catch (error) {
        return {
          content: [
            {
              type: 'text',
              text: `Error: ${error.message}`,
            },
          ],
          isError: true,
        };
      }
    });
  }

  async run() {
    const transport = new StdioServerTransport();
    await this.server.connect(transport);
  }
}

// Initialize and run
const server = new StoryWeaverServer();

// Handle initialization
process.stdin.once('data', async (data) => {
  try {
    const config = JSON.parse(data.toString());
    await server.initialize(config);
  } catch (error) {
    process.exit(1);
  }
});

// Handle shutdown
process.on('SIGINT', async () => {
  process.exit(0);
});

// Run server
server.run().catch((error) => {
  process.exit(1);
});