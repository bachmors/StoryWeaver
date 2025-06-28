# StoryWeaver 🌟

A creative storytelling MCP server for Claude Desktop that helps writers discover hidden connections in their narratives.

![Version](https://img.shields.io/badge/version-0.1.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![MCP](https://img.shields.io/badge/MCP-Compatible-purple)

## What is StoryWeaver?

StoryWeaver is a Model Context Protocol (MCP) server that enhances Claude's ability to help with creative writing. It provides tools for analyzing narrative patterns, creating meaningful connections between story elements, and evolving narratives in unexpected ways.

## Features ✨

- **Element Weaving**: Connect narrative elements through various relationship types (causal, thematic, symbolic, emotional)
- **Pattern Discovery**: Find hidden patterns in your writing (archetypal, symbolic, rhythmic)
- **Connection Generation**: Discover unexpected links between characters, themes, or plot points
- **Resonance Analysis**: Analyze the emotional and thematic depth of your stories
- **Narrative Evolution**: Transform and evolve stories through different approaches

## Installation 📦

### Option 1: Install via DXT (Recommended)

1. Download the latest `StoryWeaver.dxt` from [Releases](https://github.com/bachmors/StoryWeaver/releases)
2. Open Claude Desktop
3. Go to Settings → Extensions
4. Drag and drop the `.dxt` file
5. Configure your stories directory
6. Start creating!

### Option 2: Manual Installation

1. Clone this repository:
```bash
git clone https://github.com/bachmors/StoryWeaver.git
cd StoryWeaver
```

2. Install dependencies:
```bash
npm install
```

3. Build the DXT package:
```bash
npm run build
```

4. Follow Option 1 with the generated `.dxt` file

## Usage 🚀

Once installed, StoryWeaver provides several tools within Claude:

### weave_elements
Connect multiple story elements to discover relationships:
```
Connect the elements: protagonist, antagonist, magical artifact
Connection type: symbolic
```

### find_patterns
Analyze text for narrative patterns:
```
Find archetypal and symbolic patterns in: "The hero journeyed into the dark forest..."
```

### generate_connections
Discover creative links between concepts:
```
Generate connections between: "ancient library" and "quantum computer"
Creativity level: high
```

### analyze_resonance
Examine emotional and thematic depth:
```
Analyze the resonance of: "She stood at the crossroads, knowing that each path would forge a different destiny"
```

### evolve_narrative
Transform stories in creative ways:
```
Evolve this story: "Once upon a time, in a kingdom far away..."
Evolution type: organic
```

## Configuration ⚙️

StoryWeaver can be configured through Claude Desktop:

- **Stories Path**: Where to save your story analyses
- **Creativity Mode**: Default creativity level (grounded/creative/quantum)
- **Enable Evolution**: Allow stories to grow and transform

## Development 🛠️

### Project Structure
```
StoryWeaver/
├── manifest.json       # Extension manifest
├── server/            # MCP server implementation
├── lib/               # Core libraries
│   ├── narrative-engine.js
│   ├── connection-weaver.js
│   └── resonance-calculator.js
└── package.json
```

### Building from Source

```bash
# Install dependencies
npm install

# Run tests
npm test

# Build DXT package
npm run build
```

## Contributing 🤝

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Roadmap 🗺️

- [ ] Additional pattern recognition algorithms
- [ ] Export story analysis to various formats
- [ ] Integration with popular writing tools
- [ ] Multi-language support
- [ ] Collaborative story weaving
- [ ] Story structure templates

## License 📄

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments 💖

- Built with [Model Context Protocol](https://modelcontextprotocol.io/)
- Inspired by the intersection of creativity and technology
- Special thanks to the Claude Desktop team

## Support 💬

For questions, issues, or suggestions:
- Open an [issue](https://github.com/bachmors/StoryWeaver/issues)
- Check out the [discussions](https://github.com/bachmors/StoryWeaver/discussions)

---

*Made with ❤️ for storytellers everywhere*