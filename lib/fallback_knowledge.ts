// Local Knowledge Base for Offline Fallback
// Guarantees answers for common queries when APIs fail.

export const LOCAL_KNOWLEDGE: Record<string, string> = {
    "what is cyber security": "Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks. These cyberattacks are usually aimed at accessing, changing, or destroying sensitive information; extorting money from users; or interrupting normal business processes. Implementing effective cybersecurity measures is particularly challenging today because there are more devices than people, and attackers are becoming more innovative.",
    "what is ai": "Artificial Intelligence (AI) refers to the simulation of human intelligence in machines that are programmed to think like humans and mimic their actions. The term may also be applied to any machine that exhibits traits associated with a human mind such as learning and problem-solving. Key subsets include Machine Learning (ML) and Deep Learning.",
    "what is iot": "The Internet of Things (IoT) describes the network of physical objects—'things'—that are embedded with sensors, software, and other technologies for the purpose of connecting and exchanging data with other devices and systems over the internet. These devices range from ordinary household objects to sophisticated industrial tools.",
    "what is machine learning": "Machine Learning is a subset of artificial intelligence (AI) that focuses on building systems that learn—or improve their performance—based on the data they consume. Artificial Intelligence is a broad term that refers to systems or machines that mimic human intelligence. Machine Learning is how they do it.",
    "what is blockchain": "Blockchain is a shared, immutable ledger that facilitates the process of recording transactions and tracking assets in a business network. An asset can be tangible (a house, car, cash, land) or intangible (intellectual property, patents, copyrights, branding). Virtually anything of value can be tracked and traded on a blockchain network, reducing risk and cutting costs for all involved.",
    "what is cloud computing": "Cloud computing is the delivery of computing services—including servers, storage, databases, networking, software, analytics, and intelligence—over the Internet ('the cloud') to offer faster innovation, flexible resources, and economies of scale. You typically pay only for cloud services you use, helping lower your operating costs.",
    "what is quantum computing": "Quantum computing is a rapidly-emerging technology that harnesses the laws of quantum mechanics to solve problems too complex for classical computers. Quantum computers use quantum bits, or qubits, which can exist in multiple states simultaneously, allowing for exponential processing power in specific applications.",
    "what is 5g": "5G is the fifth generation of mobile network. It is a new global wireless standard after 1G, 2G, 3G, and 4G networks. 5G enables a new kind of network that is designed to connect virtually everyone and everything together including machines, objects, and devices. It delivers higher multi-Gbps peak data speeds, ultra low latency, more reliability, massive network capacity, increased availability, and a more uniform user experience.",
    "what is data science": "Data science is an interdisciplinary field that uses scientific methods, processes, algorithms and systems to extract knowledge and insights from noisy, structured and unstructured data, and apply knowledge and actionable insights from data across a broad range of application domains.",
    "what is devops": "DevOps is a set of practices that combines software development (Dev) and IT operations (Ops). It aims to shorten the systems development life cycle and provide continuous delivery with high software quality.",
    "what is photosynthesis": "Photosynthesis is the process by which green plants and some other organisms use sunlight to synthesize foods from carbon dioxide and water. Photosynthesis in plants generally involves the green pigment chlorophyll and generates oxygen as a byproduct.",
    "what is gravity": "Gravity, or gravitation, is a natural phenomenon by which all things with mass or energy—including planets, stars, galaxies, and even light—are brought toward one another. On Earth, gravity gives weight to physical objects, and the Moon's gravity causes the ocean tides.",
    "what is democracy": "Democracy is a form of government in which the people have the authority to deliberate and decide legislation, or to choose governing officials to do so. It is often described as 'rule by the people'.",
    "what is capitalism": "Capitalism is an economic system based on the private ownership of the means of production and their operation for profit. Central characteristics include capital accumulation, competitive markets, price systems, private property, and the recognition of property rights, voluntary exchange, and wage labor.",
    "what is climate change": "Climate change includes both global warming driven by human-induced emissions of greenhouse gases and the resulting large-scale shifts in weather patterns. Though there have been previous periods of climatic change, since the mid-20th century humans have had an unprecedented impact on Earth's climate system.",
    "what is internet": "The Internet is a global system of interconnected computer networks that uses the Internet protocol suite (TCP/IP) to communicate between networks and devices. It is a network of networks that consists of private, public, academic, business, and government networks of local to global scope.",
    "what is cpu": "A central processing unit (CPU), also called a central processor, main processor or just processor, is the electronic circuitry that executes instructions comprising a computer program. The CPU performs basic arithmetic, logic, controlling, and input/output (I/O) operations specified by the instructions in the program.",
    "what is ram": "Random-access memory (RAM) is a form of computer data storage that stores data and machine code currently being used. A random-access memory device allows data items to be read or written in almost the same amount of time irrespective of the physical location of data inside the memory.",
    "what is python": "Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation. Python is dynamically typed and garbage-collected. It supports multiple programming paradigms, including structured, object-oriented and functional programming.",
    "what is javascript": "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2023, 98.7% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries.",
    "who is albert einstein": "Albert Einstein was a German-born theoretical physicist, widely ranked among the greatest and most influential scientists of all time. Best known for developing the theory of relativity, he also made important contributions to quantum mechanics, and was thus a central figure in the revolutionary reshaping of the scientific understanding of nature that modern physics accomplished in the first decades of the twentieth century.",
    "what is the solar system": "The Solar System is the gravitationally bound system of the Sun and the objects that orbit it. It formed 4.6 billion years ago from the gravitational collapse of a giant interstellar molecular cloud. The vast majority of the system's mass is in the Sun, with most of the remaining mass contained in Jupiter.",
    "why is the sky blue": "The sky is blue due to Rayleigh scattering. As sunlight reaches Earth's atmosphere, it is scattered in all directions by all the gases and particles in the air. Blue light is scattered more than other colors because it travels as shorter, smaller waves. This is why we see a blue sky most of the time."
};

export function searchLocalKnowledge(query: string): string | null {
    const normalized = query.toLowerCase().trim().replace(/[?]/g, "");

    // Direct Match
    if (LOCAL_KNOWLEDGE[normalized]) {
        return LOCAL_KNOWLEDGE[normalized];
    }

    // Fuzzy / Partial Match (Simple inclusion)
    const keys = Object.keys(LOCAL_KNOWLEDGE);
    for (const key of keys) {
        if (normalized.includes(key) || key.includes(normalized)) {
            return LOCAL_KNOWLEDGE[key];
        }
    }

    return null;
}
