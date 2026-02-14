// Publications data - ordered from newest to oldest
const publicationsData = [
    {
        title: "Supporting Creative Ownership through Deep Learning-Based Music Variation",
        url: "https://openreview.net/forum?id=k9HOf7NBLp",
        authors: ["Stephen James Krol", "Maria Teresa Llano", "Jon McCormack"],
        venue: "NeurIPS Creative AI Track 2025",
        abstract: "This paper investigates the importance of personal ownership in musical AI design, examining how practising musicians can maintain creative control over the compositional process. Through a four-week ecological evaluation, we examined how a music variation tool, reliant on the skill of musicians, functioned within a composition setting. Our findings demonstrate that the dependence of the tool on the musician's ability, to provide a strong initial musical input and to turn moments into complete musical ideas, promoted ownership of both the process and artefact. Qualitative interviews further revealed the importance of this personal ownership, highlighting tensions between technological capability and artistic identity. These findings provide insight into how musical AI can support rather than replace human creativity, highlighting the importance of designing tools that preserve the humanness of musical expression."
    },
    {
        title: "Exploring the Needs of Practising Musicians in Co-Creative AI Through Co-Design",
        url: "https://dl.acm.org/doi/full/10.1145/3706598.3713894",
        authors: ["Stephen James Krol", "Maria Teresa Llano", "Miguel Loor Paredes"],
        venue: "CHI Conference on Human Factors in Computing Systems 2025",
        abstract: "Recent advances in generative AI music have resulted in new technologies that are being framed as co-creative tools for musicians with early work demonstrating their potential to add to music practice. While the field has seen many valuable contributions, work that involves practising musicians in the design and development of these tools is limited, with the majority of work including them only once a tool has been developed. In this paper, we present a case study that explores the needs of practising musicians through the co-design of a musical variation system, highlighting the importance of involving a diverse range of musicians throughout the design process and uncovering various design insights. This was achieved through two workshops and a two week ecological evaluation, where musicians from different musical backgrounds offered valuable insights not only on a musical system's design but also on how a musical AI could be integrated into their musical practices."
    },
    {
        title: "From Simple to Complex: Extending the Generative Capabilities of Attribute-Based Latent Space Regularization through AR-VAE-Diffusion",
        url: "https://ceur-ws.org/Vol-3810/paper3.pdf",
        authors: ["Stephen James Krol", "Abhinav Sood", "Maria Teresa Llano"],
        venue: "CREAI 2024 Workshop at ECAI 2024",
        abstract: "Progress in deep learning has driven the development of diverse creativity support tools (CST) capable of producing a range of creative artefacts. However, deep generative models are not inherently controllable, posing challenges in their guidance and prompting research focused on incorporating control mechanisms into models. One such method, Attribute-Based Latent Space Regularisation (ALSR), has demonstrated notable controllability when implemented within an Attribute-Regularised Variational Autoencoder (AR-VAE) for music and simple image generation. However, ALSR's effectiveness is constrained by the generative capabilities of the AR-VAE and is unable to control generations for high-fidelity images. In this work, we add a Denoising Diffusion Probabilistic Model (DDPM) to the AR-VAE and demonstrate that the resulting AR-VAE-Diffusion model is capable of generating and controlling high fidelity images, thus broadening the applicability of ALSR and providing a new pathway for introducing controllability into future deep learning CSTs."
    },
    {
        title: "Design Considerations for Automatic Musical Soundscapes of Visual Art for People with Blindeness or Low Vision",
        url: "https://computationalcreativity.net/iccc24/papers/ICCC24_paper_103.pdf",
        authors: ["Stephen James Krol", "Maria Teresa Llano", "Matthew Butler", "Cagatay Goncu"],
        venue: "International Conference on Computational Creativity 2024",
        abstract: "Music has been identified as a promising medium to enhance the accessibility and experience of visual art for people who are blind or have low vision (BLV). However, composing music and designing soundscapes for visual art is a time-consuming, resource intensive process - limiting its scalability for large exhibitions. In this paper, we investigate the use of automated soundscapes to increase the accessibility of visual art. We built a prototype system and ran a qualitative study to evaluate the aesthetic experience provided by the automated soundscapes with 10 BLV participants. From the study, we identified a set of design considerations that reveal requirements from BLV people for the development of automated soundscape systems, setting new directions in which creative systems could enrich the aesthetic experience conveyed by these."
    },
    {
        title: "No Longer Trending on Artstation: Prompt Analysis of Generative AI Art",
        url: "https://link.springer.com/chapter/10.1007/978-3-031-56992-0_18",
        authors: ["Jon McCormack", "Maria Teresa Llano", "Stephen James Krol", "Nina Rajcic"],
        venue: "International Conference on Computational Intelligence in Music, Sound, Art and Design EvoMUSART 2024",
        abstract: "Image generation using generative AI is rapidly becoming a major new source of visual media, with billions of AI generated images created using diffusion models such as Stable Diffusion and Midjourney over the last few years. In this paper we collect and analyse over 3 million prompts and the images they generate. Using natural language processing, topic analysis and visualisation methods we aim to understand collectively how people are using text prompts, the impact of these systems on artists, and more broadly on the visual cultures they promote. Our study shows that prompting focuses largely on surface aesthetics, reinforcing cultural norms, popular conventional representations and imagery. We also find that many users focus on popular topics (such as making colouring books, fantasy art, or Christmas cards), suggesting that the dominant use for the systems analysed is recreational rather than artistic."
    },
    {
        title: "Infinite Colours",
        url: "https://dl.acm.org/doi/pdf/10.1145/3610537",
        authors: ["Xavier Ho", "Stephen James Krol"],
        venue: "Sigraph Asia Art Gallery 2023",
        abstract: "Infinite Colours\" brings 2,499 videogame titles into a slow canvas of accumulative light. Each game adds a unique shape and colour onto the canvas and plays a unique string of notes. Over 8 hours, the canvas will be filled with infinite colours to celebrate LGBTQIA+ independent videogames. History has always been queer. Through this generative visual and sound work, we aim to demonstrate the collective activism, movement, and creative expressions that queer folks are making to be visible, heard, and to say that we are here. But queer movement does not happen overnight; queer resistance is accumulative and built over generations of selfsacrifice and self-acceptance. The multitude intersectionality of the unruly times slowly bleeds colour into the world, blends motion into the landscape, and accumulatively becomes a canvas of evermoving colourful light."
    },
    {
        title: "Creative Discovery using Quality-Diversity Search",
        url: "https://dl.acm.org/doi/abs/10.1145/3583133.3590567",
        authors: ["Jon McCormack", "Camilo Cruz Gambardella", "Stephen James Krol"],
        venue: "GECCO Conference on Genetic and Evolutionary Computation 2023",
        abstract: "In creative design, where aesthetics play a crucial role in determining the quality of outcomes, there are often multiple worthwhile possibilities, rather than a single \"best\" design. This challenge is compounded in the use of computational generative systems, where the sheer number of potential outcomes can be overwhelming. This paper introduces a method that combines evolutionary optimisation with AI-based image classification to perform quality-diversity search, allowing for the creative exploration of complex design spaces. The process begins by randomly sampling the genotype space, followed by mapping the generated phenotypes to a reduced representation of the solution space, as well as evaluating them based on their visual characteristics. This results in an elite group of diverse outcomes that span the solution space. The elite is then progressively updated via sampling and simple mutation. We tested our method on a generative system that produces abstract drawings. The results demonstrate that the system can effectively evolve populations of phenotypes with high aesthetic value and greater visual diversity compared to traditional optimisation-focused evolutionary approaches."
    },
    {
        title: "Is Writing Prompts Really Making Art?",
        url: "https://link.springer.com/chapter/10.1007/978-3-031-29956-8_13",
        authors: ["Jon McCormack", "Camilo Cruz Gambardella", "Nina Rajcic", "Stephen James Krol", "Maria Teresa Llano", "Meng Yang"],
        venue: "International Conference on Computational Intelligence in Music, Sound, Art and Design EvoMUSART 2023",
        abstract: "In recent years Generative Machine Learning systems have advanced significantly. A current wave of generative systems use text prompts to create complex imagery, video, even 3D datasets. The creators of these systems claim a revolution in bringing creativity and art to anyone who can type a prompt. In this position paper, we question the basis for these claims, dividing our analysis into three areas: the limitations of linguistic descriptions, implications of the dataset, and lastly, matters of materiality and embodiment. We conclude with an analysis of the creative possibilities enabled by prompt-based systems, asking if they can be considered a new artistic medium."
    },
    {
        title: "Towards the Generation of Musical Explanations with GPT-3",
        url: "https://link.springer.com/chapter/10.1007/978-3-031-03789-4_9",
        authors: ["Stephen James Krol", "Maria Teresa Llano", "Jon McCormack"],
        venue: "International Conference on Computational Intelligence in Music, Sound, Art and Design EvoMUSART 2022",
        abstract: "Open AI's language model, GPT-3, has shown great potential for many NLP tasks, with applications in many different domains. In this work we carry out a first study on GPT-3's capability to communicate musical decisions through textual explanations when prompted with a textual representation of a piece of music. Enabling a dialogue in human-AI music partnerships is an important step towards more engaging and creative human-AI interactions. Our results show that GPT-3 lacks the necessary intelligence to really understand musical decisions. A major barrier to reach a better performance is the lack of data that includes explanations of the creative process carried out by artists for musical pieces. We believe such a resource would aid the understanding and collaboration with AI music systems."
    },
    {
        title: "Framing through Music: A Pilot Study",
        url: "https://computationalcreativity.net/iccc21/wp-content/uploads/2021/09/ICCC_2021_paper_130.pdf",
        authors: ["Stephen James Krol", "Maria Teresa Llano", "Cagatay Goncu"],
        venue: "International Conference on Computational Creativity ICCC 2021",
        abstract: "We present a system that automatically generates music from visual art based on the perceived emotion of the given input. We propose the generated music as a framing device that can enhance the aesthetic experience of people viewing Computational Creativity (CC) outputs. In this paper, we carry out a first study to test this by comparing the aesthetic experience of viewing paintings generated by CC systems accompanied by either textual framing, our proposed musical framing or both. We evaluate our system by means of qualitative user evaluations, which require participants to rank their aesthetic experience from best to worst. The results from the study demonstrated that the musical framing generated by our system provided a better aesthetic experience for users compared to the textual framing. Furthermore, the results suggest that with more work, a combination of textual and musical framing could be used to further improve the aesthetic experience for people viewing visual CC art."
    }
];

// Configuration
const PUBLICATIONS_PER_PAGE = 5;
