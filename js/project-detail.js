const PROJECT_DETAIL = {
  'bottom-up': {
    title: 'Guiding Bottom-Up Generative Modelling with Machine Learning',
    sub: 'A unified framework using machine learning to translate design intent into controlled emergent behaviour in agent-based and multi-agent generative systems.',
    meta: [ ['role','Research Lead'], ['status','In progress'], ['focus','Generative Modelling · ML-guided Design'], ['collab','Monash · SensiLab'] ],
    tags: ['Generative','Agent-based','ML'],
    overview: [
      'This project aims to develop a unified computational design framework that guides the emergent, bottom-up behaviour of generative systems — such as agent-based and multi-agent models — through machine learning-driven, top-down control.',
      'By training deep learning models (e.g., Vision Transformers) to map high-level, design-centred criteria to low-level generative parameters, the framework conditions and directs emergent outcomes. This enables designers to intuitively navigate and control expansive generative design spaces, allowing top-down intention to inform bottom-up processes. <em>Publications and code will be posted here when available.</em>'
    ],
    approachLede: 'An initial proof-of-concept uses a parametric Harmongraph system where a Vision Transformer ranks generations against specific criteria, providing a fitness signal for evolutionary search.',
    archItems: [
      { tag:'01', title:'Harmongraph System',  body:'A parametric generative system producing complex visual patterns from sine-wave combinations, used as the initial testbed for the ML-guided design framework.' },
      { tag:'02', title:'ViT-Based Ranking',   body:'A Vision Transformer (ViT) is trained to rank generated designs based on designer-specified criteria, providing a differentiable fitness signal for the evolutionary search process.' },
      { tag:'03', title:'Evolutionary Search', body:'Designs are evolved using ViT fitness scores as guidance, iteratively discovering parameter settings that produce outputs matching the designer\'s goals.' },
      { tag:'04', title:'Top-Down Control',    body:'Machine learning acts as a translator of design intent: high-level criteria map to low-level generative parameters, redefining AI\'s role from stylistic automation to active guidance of emergent systems.' },
    ],
  },

  'arch': {
    title: 'Exploring the Role of AI in Architecture',
    sub: 'Investigating how architects want to collaborate with generative AI tools during early-stage iterative ideation.',
    meta: [ ['role','Research Lead'], ['status','In progress'], ['focus','AI · Architecture · Design Tools'], ['collab','Monash · SensiLab'] ],
    tags: ['HCI','Architecture','Qualitative'],
    overview: [
      'Recent reports highlight the growing impact of AI on architectural design, from generative design tools to predictive modelling. However, within academia, the study of AI in architectural practice is limited, with most work focusing on design as a whole.',
      'This project explores how architects use AI in the early stages of design, focusing on iterative ideation and understanding what is needed from modern tools to support their practice. The project is currently in its early stages — this page will be updated as the research progresses.'
    ],
  },

  'rhapsody': {
    title: 'Rhapsody Refiner',
    sub: 'A deep-learning symbolic music variator that supports creative ownership rather than replacing the musician.',
    meta: [ ['role','Research Lead / PhD'], ['status','Completed · 2024'], ['focus','Music AI · Deep Learning · Creative Tools'], ['collab','Monash · SensiLab'], ['venues','NeurIPS Creative AI 2025'] ],
    tags: ['Music','Transformer','Tool'],
    overview: [
      'This project investigates the design and evaluation of a deep learning-based music variation system that supports <em>creative ownership</em> and active co-creation rather than replacing the musician. The central focus is preserving personal ownership and artistic identity in AI-assisted composition.',
      'Rather than generating complete songs from prompts, this work explores how AI can extend and vary a musician\'s own ideas through fine-grained control over musical attributes, using masked prediction with MusicBERT. The primary users are <strong>practising musicians</strong> — songwriters, producers, jazz musicians, composers, and instrumentalists.'
    ],
    rqs: [
      'How can AI systems support musicians while preserving creative ownership?',
      'How does a variation-based AI system function in ecological (real-world) composition settings?',
      'What tensions arise between technological capability and artistic identity?',
      'How can masked prediction enable controllable variation with strict attribute control?'
    ],
    approachLede: 'Rhapsody Refiner uses MusicBERT — a bidirectional transformer for symbolic music — combined with masked token prediction to enable controllable music variation.',
    archItems: [
      { tag:'01', title:'Octuple Encoding',        body:'Each MIDI note is represented by 8 attributes (bar, instrument, pitch, position, velocity, duration, time signature, key), enabling attribute-level control without entanglement.' },
      { tag:'02', title:'Masked Token Prediction', body:'The system masks selected note attributes and predicts them autoregressively using MusicBERT. Masking is governed by a variation parameter determining how many notes are modified.' },
      { tag:'03', title:'Strict Attribute Control', body:'Users selectively vary pitch, beat placement, beat span, and dynamics. Only explicitly selected attributes are masked and predicted.' },
      { tag:'04', title:'Logit Filtering',          body:'Ensures correct token types, with optional pitch-range constraints and optional key-fixing via soft scaling.' }
    ],
    evalText: 'Eight practising musicians (songwriters, jazz, producers) used Rhapsody Refiner for <strong>four weeks</strong> to compose a song. They kept reflective journals; system logs recorded usage; post-study semi-structured interviews were conducted. Data was analysed via inductive thematic analysis, prioritising ecological validity over lab control.',
    findings: [
      { tag:'finding 01', title:'A tool for moments, not complete ideas', body:'Participants rarely used full variations — they extracted small moments that sparked inspiration. The system worked as a spark generator, not a finished-composition engine.' },
      { tag:'finding 02', title:'Strong creative ownership',              body:'Because the system depends on the musician\'s input and refinement, ownership remained human-centred. Participants felt full control over compositional direction.' },
      { tag:'finding 03', title:'Imperfection drove co-creation',         body:'Messy outputs forced musicians to filter, refine, and shape — reinforcing authorship. Tools that require skill may better support practising musicians.' },
      { tag:'finding 04', title:'Identity &amp; humanity in music',       body:'Participants were uncomfortable with prompt-based systems that threatened their sense of worth. Variation-based design avoided this by requiring human seed material.' }
    ],
    links: [
      { title:'NeurIPS Creative AI 2025 · Paper',       sub:'openreview.net/forum?id=k9HOf7NBLp',        action:'read →',  url:'https://openreview.net/forum?id=k9HOf7NBLp' },
      { title:'SensiLab/MusicVariationBert · Code',     sub:'github.com/SensiLab/MusicVariationBert',    action:'clone →', url:'https://github.com/SensiLab/MusicVariationBert' }
    ]
  },

  'ai-mus': {
    title: 'Designing AI Tools for Practising Musicians',
    sub: 'A co-design case study with 13 practising musicians exploring how AI can be meaningfully integrated into composition and rehearsal practice.',
    meta: [ ['role','Research Lead / PhD'], ['status','Completed · 2024'], ['focus','Co-creative AI · Music · HCI'], ['collab','Monash · SensiLab'], ['venues','CHI 2025 · NeurIPS Creative AI 2025'] ],
    tags: ['HCI','Music','Co-design'],
    overview: [
      'This project investigates how co-creative AI systems for music composition can be designed <em>in collaboration</em> with practising musicians. Rather than evaluating a finished AI tool, this work takes a co-design approach to identify the needs, values, and concerns of practising musicians regarding AI in music.',
      'The research involves 13 musicians across two workshops and a two-week ecological evaluation, using the insights gathered to develop a musical AI variation tool alongside the musicians themselves.'
    ],
    rqs: [
      'What role could co-creative AI meaningfully play in practising musicians\' workflows?',
      'How do practising musicians perceive AI as collaborator vs. tool?',
      'What design features are required for AI systems to align with musicians\' creative practices?',
      'How can co-design methodologies help uncover deeper needs beyond usability feedback?'
    ],
    approachLede: 'A co-design case study with 13 practising musicians across two workshops and a two-week ecological evaluation, iteratively developing a MusicBERT-based variation tool.',
    archItems: [
      { tag:'01', title:'Workshop 1 · Perceptions of AI',  body:'Musicians composed a piece beforehand, then engaged in human-human and human-AI collaboration tasks using Music Transformer. Strong resistance emerged to framing AI as a collaborator; openness to AI as a variation tool.' },
      { tag:'02', title:'Workshop 2 · Variation Tool Design', body:'Musicians tested a prototype variation system, confirming variation is most valuable during ideation and should support control over pitch, rhythm, and harmony, and integrate into DAWs.' },
      { tag:'03', title:'MusicBERT System Design',         body:'Based on workshop insights, a new system was developed using MusicBERT with Octuple encoding (8 note attributes). Users mask selected attributes; the model predicts replacements — more masking creates more variation.' },
      { tag:'04', title:'Two-Week Ecological Evaluation',  body:'Six musicians used the system in their own creative environments, keeping reflective journals and concluding with a focus group. Outputs were primarily used as ideation sparks — filtered, refined, and chained iteratively.' },
    ],
    findings: [
      { tag:'finding 01', title:'AI Tool vs. AI Collaborator',        body:'Musicians strongly resisted AI being framed as a collaborator, preferring terminology that positions it as a creative tool or idea generator.' },
      { tag:'finding 02', title:'Ownership of the creative process',  body:'Musicians value maintaining authorship and decision-making authority, with AI supporting ideation rather than automating full compositions.' },
      { tag:'finding 03', title:'Variation as a productive model',    body:'Variation generation encourages exploration, disrupts habitual compositional patterns, and produces unexpected ideas without replacing initial authorship.' },
      { tag:'finding 04', title:'Terminology gap',                    body:'A disconnect exists between MIDI-based machine representation and traditional music terminology — parameters should be translated into musician-friendly language.' },
      { tag:'finding 05', title:'Musical background influences needs', body:'Drummers, electronic musicians, and traditionally trained musicians prefer different controls, indicating no universal musician profile for AI tool design.' },
      { tag:'finding 06', title:'DAW integration is critical',        body:'Integration into existing digital audio workstations and practical deployment considerations are critical for real-world adoption by practising musicians.' },
    ],
    links: [
      { title:'CHI 2025 · Co-Design Paper (Honourable Mention)', sub:'dl.acm.org/doi/full/10.1145/3706598.3713894',    action:'read →',  url:'https://dl.acm.org/doi/full/10.1145/3706598.3713894' },
      { title:'NeurIPS Creative AI 2025 · Paper',                sub:'openreview.net/forum?id=k9HOf7NBLp',             action:'read →',  url:'https://openreview.net/forum?id=k9HOf7NBLp' },
      { title:'CHI 2025 · Presentation Video',                   sub:'dl.acm.org/doi/suppl/10.1145/3706598.3713894',  action:'watch →', url:'https://dl.acm.org/doi/suppl/10.1145/3706598.3713894/suppl_file/pn4114-talk-video.mp4' },
    ]
  },

  'ar-var': {
    title: 'Creative Discovery with AR-VAR-Diffusion',
    sub: 'Combining fine-grained generative control (AR-VAE-Diffusion) with diversity-aware exploration (Quality-Diversity Search) for AI-assisted creative discovery.',
    meta: [ ['role','Research Lead / PhD'], ['status','Completed · 2024'], ['focus','Generative Models · Diffusion · Creative AI'], ['collab','Monash · SensiLab'], ['venues','GECCO 2023 · CREAI/ECAI 2024'] ],
    tags: ['Diffusion','VAE','Generative'],
    overview: [
      'This project investigates how AI systems can better support creative exploration by combining <em>fine-grained controllability</em> (Attribute-Regularised VAE-Diffusion) with <em>diversity-aware search</em> (Quality-Diversity Search).',
      'The overarching goal is to move beyond black-box generative systems toward tools that allow artists and designers to explore large creative spaces, control meaningful aesthetic attributes, and discover multiple high-quality alternatives rather than a single optimal output.'
    ],
    rqs: [
      'How can we introduce meaningful, fine-grained control into deep generative models for complex images?',
      'How can we explore creative design spaces in a way that preserves both quality and diversity?',
      'How can AI systems support creative discovery rather than merely optimisation?'
    ],
    approachLede: 'Two complementary systems: AR-VAE-Diffusion for controllable high-fidelity generation, and a Quality-Diversity Search framework for diverse creative exploration of generative design spaces.',
    archItems: [
      { tag:'01', title:'AR-VAE-Diffusion Architecture', body:'Combines an Attribute-Regularised VAE (ALSR) that embeds interpretable attributes into specific latent dimensions with a DDPM that enhances generative quality. Training is two-stage: first the AR-VAE, then the diffusion model conditioned on VAE reconstructions.' },
      { tag:'02', title:'Datasets &amp; Evaluation',     body:'Tested on the Curl Noise Dataset (68k abstract line drawings, attributes: pixel density and generation size) and the Kaggle Abstract Art Dataset (28k abstract paintings, attributes: colour diversity and structural complexity).' },
      { tag:'03', title:'Quality-Diversity Search',      body:'A four-stage pipeline (Generation, Evaluation, Classification, Breeding) applied to a 14-parameter agent-based line drawing system. Fitness: structural complexity (r = 0.72 with human preference). Diversity: ratio of populated VAE latent clusters.' },
      { tag:'04', title:'MAP-Elites Implementation',     body:'The design space is partitioned into clusters; each maintains its elite (highest fitness). Mutation-based breeding explores nearby space. QD Search produced significantly more diverse and high-quality outputs than fitness-only genetic search.' },
    ],
    findings: [
      { tag:'finding 01', title:'Controllability extends to high-fidelity images', body:'AR-VAE-Diffusion preserves attribute control while dramatically improving image quality over standard VAE, broadening the applicability of attribute-based latent space regularisation to complex artistic datasets.' },
      { tag:'finding 02', title:'QD beats fitness-only search',                    body:'Fitness-only search collapses toward visually similar solutions, while Quality-Diversity Search maintains diverse, high-quality alternatives that better mirror real creative exploration.' },
      { tag:'finding 03', title:'Attribute design is crucial',                     body:'Simpler attributes (e.g., pixel density) produce clearer latent control, while complex attributes reduce disentanglement. Attribute definition shapes emergent generative behaviours.' },
      { tag:'finding 04', title:'AI as co-creative partner',                       body:'The systems preserve some unpredictability, introduce new elements during manipulation, and balance user control with generative agency — supporting discovery rather than optimisation.' },
      { tag:'finding 05', title:'Trade-offs &amp; limitations',                    body:'Diffusion adds computational cost, simple fitness metrics bias results toward measurable aesthetics, and latent reduction techniques (PCA, t-SNE) may distort cluster boundaries.' },
    ],
    links: [
      { title:'GECCO 2023 · Creative Discovery Paper',      sub:'dl.acm.org/doi/abs/10.1145/3583133.3590567', action:'read →', url:'https://dl.acm.org/doi/abs/10.1145/3583133.3590567' },
      { title:'CREAI/ECAI 2024 · AR-VAE-Diffusion Paper',   sub:'ceur-ws.org/Vol-3810/paper3.pdf',            action:'read →', url:'https://ceur-ws.org/Vol-3810/paper3.pdf' },
    ]
  },

  'sounds': {
    title: 'Accessible Soundscapes for Visual Art',
    sub: 'Automatically generated musical soundscapes that enhance the aesthetic experience of visual art for blind and low-vision gallery visitors.',
    meta: [ ['role','Lead Researcher / Honours'], ['status','Completed · 2023'], ['focus','Accessibility · Generative Soundscapes · Visual Art'], ['collab','Monash · SensiLab'] ],
    tags: ['Accessibility','Audio','HCI'],
    overview: [
      'This project investigates how automatically generated musical soundscapes can enhance access to the <em>aesthetic experience of visual art</em> for people who are blind or have low vision (BLV).',
      'Traditional museum accessibility tools focus on factual description but often fail to convey the emotional and atmospheric qualities that sighted patrons experience. This work explores whether AI-generated soundscapes can bridge that gap, evaluated with 10 BLV participants in a qualitative study.'
    ],
    rqs: [
      'How do automatic musical soundscapes affect BLV users\' aesthetic experience of artworks?',
      'What system and interaction design requirements are needed to ensure soundscapes are meaningful, accurate, and enjoyable?'
    ],
    approachLede: 'A two-stage prototype — emotion-based music generation and contextual sound effects — evaluated in a 33-participant pilot study, then an in-depth qualitative study with 10 BLV participants.',
    archItems: [
      { tag:'01', title:'Emotion-Based Music Generation', body:'A deep learning classifier predicts the painting\'s perceived emotion, mapped onto the valence-arousal model. Magenta\'s Music Transformer then generates symbolic music matching that emotional tone from an annotated MIDI database.' },
      { tag:'02', title:'Contextual Sound Effects',       body:'YOLOv3 detects foreground objects in the painting; corresponding sound effects are retrieved from a custom database and mixed into the musical output to convey scene-setting and object awareness beyond emotion.' },
      { tag:'03', title:'Pilot Study',                   body:'33 participants (mostly sighted, 5 low vision) validated the prototype: emotional accuracy 60%, foreground sound effect accuracy 92%. Positive results motivated the in-depth study with BLV users.' },
      { tag:'04', title:'In-Depth Qualitative Study',    body:'10 BLV participants (5 blind, 5 low vision) engaged in semi-structured interviews after interacting with the system, exploring emotional impact, contextual accuracy, and preferences for combining soundscapes with traditional accessibility methods.' },
    ],
    findings: [
      { tag:'finding 01', title:'Immersive emotional engagement', body:'Musical soundscapes added a more immersive, emotionally engaging layer than description alone, helping build stronger connections to artworks through mood and atmosphere.' },
      { tag:'finding 02', title:'Support narrative storytelling', body:'Participants wanted soundscapes that conveyed the narrative of the painting — not just emotional tone but also story and scene context that description alone could not capture.' },
      { tag:'finding 03', title:'Improve contextual accuracy',   body:'Both musical emotion matching and foreground sound effects need higher accuracy; mismatches between the painting\'s content and generated sounds broke immersion and reduced trust.' },
      { tag:'finding 04', title:'Customisation is important',    body:'BLV users have diverse needs — allowing adjustment of music type, sound effect prominence, and playback style would significantly improve the experience for different users.' },
      { tag:'finding 05', title:'Complement other methods',      body:'Soundscapes are most effective when used alongside audio descriptions and other accessibility tools, not as a standalone replacement for existing accessibility infrastructure.' },
    ],
    links: [
      { title:'ICCC 2024 · Paper',                  sub:'computationalcreativity.net/iccc24',           action:'read →',   url:'https://computationalcreativity.net/iccc24/papers/ICCC24_paper_103.pdf' },
      { title:'Vision Australia · Interview',       sub:'omny.fm/shows/vision-australia-radio',         action:'listen →', url:'https://omny.fm/shows/vision-australia-radio/focal-point-30-jun-2021' },
      { title:'Generated Soundscapes · Playlist',  sub:'youtube.com/playlist',                         action:'listen →', url:'https://www.youtube.com/playlist?list=PLJXhSHZOX4QwkaqoS-o-cTdc90dM_aFKh' },
    ]
  },
};
