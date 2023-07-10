import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
// import { everything } from "./Utils/FullCV";
import { PineconeClient } from "@pinecone-database/pinecone";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { PineconeStore } from "langchain/vectorstores/pinecone";
// const { PineconeClient } = require("@pinecone-database/pinecone");
// const { CSVLoader } = require("langchain/document_loaders/fs/csv");
// const { Document } = require("langchain/document");
const qaList = [
  `Can you tell me more about your experience at hedgehog lab, especially about your role as a Web Developer and Front End Developer?

  Samuel's answer: As a Web Developer and Front-End Developer at hedgehog lab, my responsibilities span across multiple aspects of the development process. I've been instrumental in developing websites and applications, ensuring they are coded to high standards. I've also tackled security vulnerabilities to make sure the applications we build are secure and reliable. I served as the main point of contact between the international team, coordinating with team members across different geographical locations. My role also requires me to conduct tests on SEO and Accessibility, ensuring that the websites and apps built are optimized for search engines and are accessible to users with various disabilities.`,
  `Can you tell us about a project you're particularly proud of and why?

Samuel's answer: I am particularly proud of the "How Busy Is Toon" project, which was a unique experience for me for a variety of reasons. I was the sole developer on this project, which began as a contract but eventually led to a full-time position. The project gave me the opportunity to learn and implement the Jamstack architecture, using Gatsby and Contentful. I also researched into datasets to be incorporated into the information hub, a key part of the project. My primary goal was to create a site architecture that could be extended to other city councils, ensuring the application we built could continue to evolve and adapt to new needs and contexts beyond the initial scope of the project.`,
  `Could you provide examples of how you managed to optimize components and improve user experience during your time as a React Developer at In-House?

  Samuel's answer: During my time at In-House, I was involved in fixing bugs, updating styling, and optimizing components to improve overall website performance. One of my key accomplishments was updating a sliding component using a custom throttle function to facilitate a smoother scrolling action, which greatly enhanced the user experience and improved the functional efficiency of the website components.`,
  `Can you tell me about Automated Art and how you manage the responsibilities of owning your own venture while also working as a developer?

  Samuel's answer: Automated Art is my own venture that intertwines the realms of art and technology. As the owner, I oversee all operations, from the development and design of creative products to their promotion. This involves strategic planning, management, and marketing skills. I utilize my creativity in graphic design and my knowledge in automated systems to create unique artwork. While it can be challenging to balance these responsibilities with my work as a developer, I've found that the skills I've gained from each role have complemented and enhanced my abilities in the other.`,
  `how have your experiences as a chef at Greenbird Cafe influenced your approach to web development, if at all?

  Samuel's answer: My role as a Chef at Greenbird Cafe involved managing multiple responsibilities in a fast-paced environment, thus demonstrating adaptability, teamwork, and a high level of culinary skill. These experiences have influenced my approach to web development in several ways. Like in a kitchen, developing web applications also requires a high degree of coordination and teamwork. In both fields, attention to detail is crucial, and you need to be adaptable, able to troubleshoot under pressure, and manage your time effectively. So, I would say that my time in the culinary world has taught me valuable transferable skills that have greatly benefited my career in web development.`,
  `Can you share a bit more about how your degree in Digital Arts has helped shape your career as a Web Developer?

  Samuel's answer: My degree in Digital Arts from Bath Spa University has been instrumental in shaping my career as a Web Developer. It provided a solid foundation in design principles and the use of digital tools, which are integral to my work today. The blend of creativity and technology in my course work has helped me understand how to design and develop applications that are not only functional but also aesthetically pleasing and user-friendly.`,
  `You've worked on quite a few projects throughout your career. Could you tell us about a time when you faced significant challenges during a project and how you overcame them?

  Samuel's answer: One of the most significant challenges I faced was during the development of the "How Busy Is Toon" project. As the sole developer on this project, I had to manage all aspects of the development process. One particular challenge was implementing the Jamstack architecture using Gatsby and Contentful. Despite having limited prior experience with these technologies, I devoted myself to learning and implementing them effectively. I also had to research datasets to be incorporated into the information hub, which was a key part of the project. Despite the challenges, my dedication and commitment to learning helped me overcome them, and the project was a success.`,
  `In your resume, you mention being proficient in React, TypeScript, HTML, and CSS. Are there any other languages or frameworks you have experience with or are currently learning?

  Samuel's answer: Apart from being proficient in React, TypeScript, HTML, and CSS, I'm also knowledgeable in SEO, Security, Accessibility, Jamstack (Hugo, Gatsby) + Contentful, SQL, and GraphQL. I believe in continuous learning and keep myself updated with the latest trends and technologies in the field. I am currently focusing on deepening my knowledge in GraphQL and exploring other frameworks to expand my skill set.`,

  `How have you used your skills in SEO, Security, and Accessibility in your past roles?

Samuel's answer: In my past roles, especially at hedgehog lab, I conducted tests on SEO and Accessibility to ensure the websites and apps we built were optimized for search engines and accessible to all users. For security, I worked on identifying and fixing security vulnerabilities to ensure that the applications we developed were secure and reliable. I believe these aspects are crucial to creating high-quality web applications that can reach a wide audience and provide a safe and enjoyable user experience.`,
  `Can you tell us more about your process for staying organized and meeting deadlines, especially when working on multiple projects simultaneously?

Samuel's answer: Staying organized and meeting deadlines is crucial in web development. I use project management tools to keep track of tasks, deadlines, and progress. I also prioritize tasks based on their urgency and importance. Regular communication with my team and stakeholders helps to ensure everyone is on the same page and to manage expectations. For larger projects, I break down the work into manageable chunks and set milestones to help keep the project on track. I believe clear communication, effective prioritization, and efficient use of project management tools are key to successfully managing multiple projects.`,
  `Can you share your approach towards problem-solving, particularly when you face a complex technical issue in your projects?

Samuel's answer: When I encounter a complex technical issue, I first aim to fully understand the problem. This often involves reproducing the issue and analyzing the code to find where the problem originates. Once I understand the issue, I research potential solutions, leveraging online resources, documentation, and my network of fellow developers. I then evaluate the best approach based on the specific situation and try to implement the solution. If the first approach doesn't solve the problem, I continue with others until it is resolved. I also believe in learning from the problem-solving process, documenting the issues, and their solutions for future reference.`,
  `How do you ensure that the applications you develop are user-friendly and provide a positive user experience?

Samuel's answer: I believe a positive user experience is key to the success of any application. I strive to create applications that are not just functionally sound but also user-friendly. I involve end-users in the development process through user testing and feedback, which helps me understand their needs and improve the application. I also prioritize usability in my design and development process, ensuring the application is intuitive, easy-to-navigate, and visually appealing. Additionally, I focus on performance, ensuring the application loads quickly and functions smoothly.`,
  `Can you elaborate on your role as a liaison between the international team at hedgehog lab? How did you manage communication and coordination?

Samuel's answer: As the main point of contact between the international team at hedgehog lab, I was responsible for ensuring clear and effective communication across different geographical locations. This involved organizing regular team meetings to discuss progress, resolve issues, and align our work. I also utilized collaboration tools to share information and updates efficiently. Additionally, I worked to understand the work styles and communication preferences of different team members to facilitate effective collaboration.`,
  `What are some of your professional achievements that you are most proud of?

Samuel's answer: I am proud of several achievements in my career. One that stands out is the development of a feature at hedgehog lab that was initially predicted to take 12 weeks, but I was able to deliver it in just 2 weeks. This showcased my ability to work under tight deadlines and deliver efficient solutions. I was also proud to receive two promotions within a span of 6 months at hedgehog lab, recognizing my growth and competency. Another achievement I'm proud of is the successful launch of my own creative venture, Automated Art, where I could blend my passion for art with my technical skills.`,
  `Looking towards the future, where do you see yourself professionally? What are your career goals?

Samuel's answer: I see myself continuing to grow as a Web Developer, taking on more complex projects and responsibilities. I am also interested in leadership roles where I can mentor and guide other developers. I plan to keep learning and stay updated with the latest technologies and trends in web development. As for my creative venture, Automated Art, I hope to expand it further and reach a wider audience. Ultimately, my goal is to create digital solutions that make a positive impact and continue to challenge and fulfill me professionally.`,
  `How do you stay updated with the latest trends and technologies in web development?

Samuel's answer: Staying updated in the rapidly changing field of web development is indeed crucial. I regularly follow tech blogs, online forums, and social media groups dedicated to web development. Websites like Stack Overflow, GitHub, and Medium are my go-to resources. I also take online courses on platforms like Udemy and Coursera to learn new technologies. Attending webinars, tech meetups, and conferences also provides opportunities to learn from experts and network with other professionals in the field.`,
  `In your CV, you mentioned that you have strong abilities to troubleshoot and solve complex problems. Can you give an example that demonstrates these skills?

Samuel's answer: During my tenure at hedgehog lab, I was tasked with developing a complex feature within a tight deadline. During the development process, I encountered an issue where the feature was not interacting properly with other parts of the application. After thorough debugging and analysis, I discovered a conflict between different parts of the code. To resolve the issue, I restructured a portion of the feature's code to avoid the conflict, which successfully resolved the issue and allowed the feature to function as expected. This instance demonstrated my ability to troubleshoot complex problems and devise effective solutions.`,
  `What methods do you use to ensure the quality of your code?

Samuel's answer: Ensuring code quality is paramount in my workflow. I adhere strictly to coding standards and best practices. I make sure my code is clean, well-commented, and modular to ensure maintainability. I perform regular code reviews and refactoring to improve code quality and remove any redundancies. I also use tools like linters for static code analysis and unit testing to verify the functionality of individual components. Moreover, I believe in the principle of continuous integration to detect and fix issues early.`,
  `How do you handle feedback and criticism related to your work?

Samuel's answer: I value feedback as it is an excellent opportunity for growth. Whether it is positive or constructive, I believe it contributes to my personal and professional development. When I receive criticism, I try to understand the perspective of the person providing it, reflect on it, and see how I can improve. I am always open to dialogue and discussion to resolve any misunderstandings and find ways to improve.`,
  `Could you elaborate on your experience with the Jamstack architecture, using Gatsby and Contentful in your "How Busy Is Toon" project?

Samuel's answer: The "How Busy Is Toon" project gave me a valuable opportunity to delve into Jamstack architecture. I used Gatsby, a modern static site generator for React, which helped in developing a fast, secure, and high-performing site. Gatsby's data layer was particularly useful, providing a unified data source irrespective of where the data came from. In addition to Gatsby, I used Contentful, a headless CMS. It allowed me to manage and distribute content, making it easy to update and change the site's content. I found the Jamstack approach to be efficient and effective, particularly for a project where performance, scalability, and security were of the utmost importance.`,
];

const fullname = "Full Name : Samuel Morgan-Tyghe";
const profession = "Profession : Web Developer";
const address = "Address : Leith, EH64AG, Edinburgh";
const phone = "Phone : 07376080332";
const email = "E-mail : samuelmorganvisual@gmail.com";
const linkedIn = "LinkedIn : linkedin.com/in/samuel-morgan-tyghe";
const languages = "Languages : Proficient in React, TypeScript, HTML, CSS.";
const education =
  "Education : Bachelor's degree: Digital Arts, Bath Spa University (2012 - 2015)";
const summary =
  "Professional Summary : Solution-driven Web Developer with over two years of experience in developing web applications, mobile applications and collaborating with cross-functional teams. Proven experience in leveraging the latest technology stacks and web development frameworks to build user-centric digital solutions. Proficient in managing all stages of the development cycle for dynamic web projects and strong ability to troubleshoot and solve complex problems.";

const skills =
  "Skills : Proficient in React (Functional + Class), CSS (Modules, Bootstrap, Tailwind), JS-IN-CSS (ChakraUI, MaterialUI, Styled Components), Webpack, Gulp, Redux (Connect, Toolkit), TypeScript. Knowledgeable in SEO, Security, Accessibility, Jamstack (Hugo, Gatsby) + Contentful, SQL, GraphQL.";

const webDeveloperExperience =
  "Web Developer Experience : Web Developer, Front End Developer, hedgehog lab, Newcastle, NET (Oct 2021 - Present). Responsibilities include developing websites and apps, maintaining high coding standards, identifying and fixing security vulnerabilities. Also, act as the main point of contact between the international team, coordinating tasks and communications. Developed a feature that was initially predicted to take 12 weeks in just 2 weeks. This achievement showcased the ability to deliver projects under tight deadlines. Proven growth and competency resulted in receiving 2 promotions within a span of 6 months.";

const reactDeveloperExperience =
  "React Developer Experience : React Developer, In-House (Jun 2021 - Nov 2021). Responsibilities include bridging the gap between Graphic Design and Front-end developer Teams, bug fixing, updating styling, optimizing components. Updated a sliding component by implementing a custom throttle function which enhanced the smoothness of the scrolling action, improving overall user experience.";

const ownerExperience =
  "Owner Experience : Owner, Automated Art (Jan 2020 - Present). Managing a creative venture focused on automated designs and artwork. Involved in the development, design, and promotion of creative products.";

const chefExperience =
  "Chef Experience : Chef, Greenbird Cafe (May 2017 - Mar 2020). Managed multiple responsibilities in a fast-paced environment demonstrating adaptability, and teamwork.";

const projects =
  "Projects : https://cmspi.com/ (Internal). Worked on this project using Typescript, Node, React-query, Tanstack, Chart.js, React-Select. This project demanded advanced understanding of these tools to create a comprehensive web solution. https://cotytrip.com/ (Internal). Utilized a combination of technologies including React functional + class components, Redux + toolkit + Persist, Typescript, PWA, Html2Canvas, MarkerJs2, React-Select to build this feature-rich website. https://halosystem.halosolutions.com/login (Internal). Involved in Scaling up (Pagination of data, Optimising performance), SPA. This project required an understanding of optimization techniques to ensure the website performs well even with large volumes of data. https://www.securityforum.org/solutions-and-insights/standard-of-good-practice-for-information-security-2020/. Worked with React Context, husky (lint & test git hooks), SPA to ensure the web application adheres to the standard of good practice for information security. https://admin.lugmety.com/login (Internal). Used GraphQL, React Awesome Query Builder to build a user-friendly, efficient admin interface. https://howbusyistoon.com/. Utilized Gatsby, CSS Modules, Atom methodology, Contentful to create a dynamic website with a focus on high-performance and user-centric design. https://in-house.com/. Utilized Next.js, Jira, Scrum, Storybook, Styled Components to create a seamless, interactive website.";

const fullProjects =
  "Full Projects : The 'How Busy Is Toon' project was a unique experience for me for a variety of reasons. Firstly, I was the sole developer on this project, which was the first one I undertook for Hedgehog Lab. This project began as a contract but eventually led to a full-time position. Naturally, this was an exciting but nerve-wracking assignment. Secondly, this project gave me the opportunity to learn and implement the Jamstack architecture, using Gatsby and Contentful. The site was built using the atomic design methodology, which allows for the development of complex, robust interfaces by combining smaller and simpler components. This methodology played a crucial role in structuring the application and improving its maintainability. Thirdly, I also took the initiative to research into datasets that could be incorporated into the information hub, a key part of the project. This involved setting up the account for Emoticon and creating detailed documentation on how the site was run and structured. The documentation also included a breakdown of how to use Contentful and the CMS tree. Finally, my primary goal with this project was not only to meet its business requirements but also to create a site architecture that could be extended to other city councils. I dedicated significant time and effort into ensuring the site was developed according to best practices and with a focus on handover to future developers. This approach ensured that the application we built could continue to evolve and adapt to new needs and contexts beyond the initial scope of the project. The experience taught me a great deal about project management, initiative, and the importance of thorough documentation and forward-thinking design in web development.";
const fullRoles =
  "Full Roles : Experience: Web Developer, Front End Developer, hedgehog lab, Newcastle, NET (Oct 2021 - Present). Company Brief: hedgehog lab is a renowned technology company that focuses on creating innovative digital solutions. The company is known for its wide range of services including web development, mobile application development, and digital strategy services. hedgehog lab is distinguished by its commitment to high coding standards, security, and international collaboration. Role Elaboration: As a Web Developer and Front-End Developer at hedgehog lab, Samuel's responsibilities span across multiple aspects of the development process. He has been instrumental in developing websites and applications, ensuring they are coded to high standards. Samuel also tackles security vulnerabilities, thus making sure that the applications are secure and reliable. He also serves as the main point of contact between the international team, coordinating with team members across different geographical locations. His role also requires him to conduct tests on SEO and Accessibility, which ensures that the websites and apps built are optimized for search engines and are accessible to users with various disabilities. React Developer, In-House (Jun 2021 - Nov 2021). Company Brief: In-House is a company that specializes in bridging the gap between graphic design and front-end development. They aim to create visually appealing and functionally superior websites that ensure a seamless user experience. They emphasize the optimization of website components to provide smooth and engaging interactions. Role Elaboration: As a React Developer at In-House, Samuel played a crucial role in merging the realms of graphic design and front-end development. He was involved in fixing bugs, updating styling, and optimizing components to improve overall website performance. One of his key accomplishments in this role was updating a sliding component using a custom throttle function to facilitate a smoother scrolling action. This showcased his skills in enhancing user experience and improving the functional efficiency of website components. Owner, Automated Art (Jan 2020 - Present). Company Brief: Automated Art is Samuel's own venture that intertwines the realms of art and technology. It focuses on creating automated designs and artwork, which showcases the beautiful amalgamation of creativity and automation. Role Elaboration: As the owner of Automated Art, Samuel takes on numerous roles. He is responsible for overseeing all operations, from the development and design of creative products to their promotion. This involves strategic planning, management, and marketing skills. His role allows him to utilize his creativity in graphic design and his knowledge in automated systems to create unique artwork. Chef, Greenbird Cafe (May 2017 - Mar 2020). Company Brief: Greenbird Cafe is a popular establishment known for its excellent food and inviting atmosphere. It strives to provide high-quality culinary experiences to its customers while maintaining a comfortable and enjoyable environment. Role Elaboration: In his role as a Chef at Greenbird Cafe, Samuel was entrusted with preparing meals to the cafe's high standards. This role involved managing multiple responsibilities in a fast-paced environment, thus demonstrating adaptability, teamwork, and a high level of culinary skill. His responsibilities also likely included menu planning, food preparation, and maintaining cleanliness and safety in the kitchen.";

const responsibilities =
  "Responsibilities : Web Developer, Front End Developer, hedgehog lab, Newcastle, NET (Oct 2021 - Present). Conducting regular code reviews to ensure code quality and adherence to coding standards. Collaborating with designers and product owners to translate visual mock-ups into responsive and interactive websites. Keeping up-to-date with emerging trends and technologies in the field of web development. Conducting performance audits to improve page loading speed and overall user experience. Training and mentoring junior developers, helping them understand code structure and guiding them in their projects. Assisting in the documentation of the project details, including the coding and design processes, for reference and future projects. React Developer, In-House (Jun 2021 - Nov 2021). Conducting usability tests and rectifying the issues found for a more intuitive user interface. Regular collaboration with the back-end team to understand and implement their APIs and databases for seamless interaction between the front-end and back-end. Implementing site tracking analytics to gather insights on user behaviour and suggest changes accordingly. Utilising version control tools, such as Git, for collaborative work and to ensure the safe, systematic, and traceable changes to the project codebase. Prioritizing tasks and bugs based on the business needs and project timelines. Owner, Automated Art (Jan 2020 - Present). Conducting market research to understand current trends in art and design. Utilizing digital marketing strategies to promote products and drive online traffic and sales. Keeping financial records and managing budgets to ensure profitability. Networking with other industry professionals and potential clients. Providing excellent customer service, addressing queries, and handling customer complaints to ensure a high level of customer satisfaction. Chef, Greenbird Cafe (May 2017 - Mar 2020). Developing new recipes and dishes that appeal to the cafe's clientele. Managing inventory and placing orders for kitchen supplies and ingredients. Implementing and enforcing health and safety protocols in the kitchen. Collaborating with other kitchen staff to ensure timely preparation and presentation of meals. Handling any customer dietary restrictions, allergies, and special requests.";

const isfProject = `Challenges with ISF Supplychain Project:

  The ISF project involved building a list of widgets, each introducing a new SVG image, component, and block of text. As the list of widgets grew, it became necessary to reformat the code to make it easier, quicker, and more consistent for adding new widgets. Initially, I utilized object mapping as the method to render widgets on the page. However, as the list lengthened, we experienced performance issues due to unhandled re-rendering. Even after managing these unnecessary renderings, we continued to face performance issues.
  
  The challenge was that the object mapping of a large amount of data did not function well. My solution involved creating a memoized version of the entire list. At first, I planned on using the useMemo hook for memoization, but I ran into issues when trying to use the hook outside of the component. Given that this needed to be a constant state, I implemented manual memoization by saving it to the cache and then retrieving it. This significantly improved the site's performance. Without this solution, the continued development of the project would have been challenging.
  `;
const haloProject = `Challenges with Halo Solutions Project:

The Halo Solutions project presented different challenges. We encountered scalability issues with certain areas of the application, mainly where lists were becoming too long. To mitigate this, I proposed the implementation of pagination. This solution proved efficient in handling long lists, ensuring smooth functionality, and enhancing the user experience. The process taught me valuable lessons in scalability and efficiency, emphasizing the importance of anticipating potential issues in the early stages of development and proactively addressing them.
`;
const cotyProject = `Challenges with COTY Project:

The COTY project posed a unique set of challenges, largely due to the age of the code base. It was outdated, which led to multiple complications throughout the project. The first solution I implemented was upgrading from webpack version 3 to webpack version 4. This update was necessary to improve compatibility and maintainability with newer JavaScript features and concepts.

Another major hurdle we faced was with a feature we introduced called 'visibility share.' Towards the end of its implementation, we realized that the amount of data we were dealing with was much larger than initially expected. This led to slow testing endpoints, which significantly hampered the user experience. To address this, I suggested breaking down the data and making more API calls with smaller data sets. This change resulted in a smoother user experience.

In a turn of events, I was invited to Heathrow to get firsthand user feedback. The main takeaway from this experience was the need to enhance the mobile experience and make the website available offline, converting it into a Progressive Web App (PWA). The irony was that the increased API usage, while smoothing the user experience, also complicated the implementation of offline capabilities. Nevertheless, these challenges provided me with opportunities to innovate and improve the overall product while enhancing my problem-solving skills.
`;
const cmspiProject = `Challenges with CMSPI Project:

The CMSPI project was overall a successful one, with the product being delivered well ahead of schedule. This led to the creation of a retain team, marking a significant achievement for our company. However, during the development phase, we encountered issues with work efficiency, particularly due to our initial use of react query and resort validation. In retrospect, we created more work for ourselves than was necessary.

For instance, we manually created Zod schemas, whereas we could have automated this process using swagger. Additionally, I found the need to define a use query in each file repetitious and time-consuming. The lessons learned from this project were not implemented until the next project, the Caroline Girvan web app.

I wanted to explore a solution that didn't rely on Session storage, due to its potential management complexities. React context appeared to be an interesting alternative, but it presented its own challenges, particularly in terms of defining types. This is where my proficiency in understanding different libraries and problem-solving skills came in handy.

To overcome this hurdle, I essentially had to recreate a Redux-like solution using React Context. This involved identifying and defining the necessary types, a task that took considerable time and effort. It was a challenging process but also an enriching learning experience.

As I continued to refine the solution, I eventually moved the state to the URL. This ended up being the best solution for this problem - it simplified the management of the dynamic page names and significantly cleaned up the code, making it easier to maintain.

In the end, I managed to build a functioning solution that met our project requirements. This experience has allowed me to deepen my understanding of React and Redux, and it reinforced my belief in the importance of exploring different methods and technologies to achieve the best solution. Moreover, it emphasized the value of iterative refinement in the development process, as the best solution may not always be the first one you implement.
`;
const carolineProject = `Challenges with Caroline Girvan Project

In the Caroline Girvan web app project, I implemented a react query helper function, which significantly reduced repetitive coding and made it quicker and easier to implement. This well-structured approach was especially beneficial for junior developers, who found it easier to grasp and work with. In this project, I also took on a mentoring role for a junior developer, with a focus on accessibility for developer experience. This experience helped me grow not just technically but also in terms of my leadership and mentorship skills.
`;
const howBusyProject = `Challenges with How Busy Is Toon Project

The "How Busy Is Toon" project presented a unique set of challenges, which stemmed mainly from the fact that I was the only developer on the project. It was the first project I undertook for Hedgehog Lab, initially as a contract that later turned into a full-time position. This was a high-pressure situation, but it also offered a valuable learning opportunity.

The website was built using the Jamstack (Gatsby - Contentful) methodology, adopting the atomic design methodology and utilizing CSS modules. The first challenge was to quickly ramp up on this technology stack, as I had limited prior exposure to it. To overcome this, I fully immersed myself in learning and understanding these technologies, focusing on practical application rather than just theoretical understanding.

An important aspect of the project was researching and incorporating datasets into the information hub. I took the initiative to identify relevant data sources, set up an account for Emoticon, and integrate it into our system. To ensure smooth operations, I created detailed documentation outlining how the site was run and structured, including a breakdown of how to use Contentful and the CMS tree.

Finally, my ambition for this project went beyond just meeting its business requirements. I aimed to architect the site in a way that it could be extended to other city councils. Therefore, a key challenge was ensuring the scalability of the project and maintaining best practices. I focused on writing clean, maintainable, and scalable code. I also prioritized the developer handover process, ensuring that any future developers on the project would have a smooth transition.

In summary, this project was a challenging yet rewarding experience that allowed me to grow as a developer, hone my problem-solving skills, and gain valuable hands-on experience with new technologies.
`;
const challengeArray = [
  isfProject,
  haloProject,
  cotyProject,
  cmspiProject,
  carolineProject,
  howBusyProject,
];

export const chunkedCV = [
  fullname,
  profession,
  address,
  phone,
  email,
  linkedIn,
  summary,
  skills,
  languages,
  webDeveloperExperience,
  reactDeveloperExperience,
  ownerExperience,
  chefExperience,
  education,
  projects,
  fullProjects,
  fullRoles,
  responsibilities,
  ...qaList,
  ...challengeArray,
];

export const everything = chunkedCV;
const openAIApiKey = "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";

const embeddings = new OpenAIEmbeddings({
  openAIApiKey: openAIApiKey,
  // modelName: "text-embedding-ada-002",
});

// async function splitAndStoreMassiveString() {
//   // Create a RecursiveCharacterTextSplitter instance
//   const splitter = new RecursiveCharacterTextSplitter();

//   const massiveString = everything;

//   // Split the massive string into smaller chunks
//   const chunks = await splitter.splitText(massiveString);
//   // console.log(chunks);
//   const ids = chunks.map((_string, index) => {
//     id: index;
//   });

//   const vectorStore = await SingleStoreVectorStore.fromTexts(
//     chunks,
//     ids,
//     embeddings,
//     {
//       connectionOptions: {
//         port: 3306,
//         host: "svc-778aca06-f0ea-41ea-8ea4-fc70da72dd5d-dml.aws-ireland-2.svc.singlestore.com",
//         user: "admin",
//         password: "K2XrheoqPq2GSxQyk0Adfbz7DRhWAcy2",
//         database: "Chat-CV",
//         table: "Chat_CV_Database",
//       },
//     }
//   );

//   // Add the chunks as documents to the SingleStore vector store
//   await vectorStore.addDocuments(chunks);

//   // Close the connection pool when you're done
//   await vectorStore.end();
// }

async function splitAndStoreMassiveString() {
  const client = new PineconeClient();
  await client.init({
    apiKey: "52be664a-a555-4a86-8d6f-6ec9d666c7be",
    environment: "asia-southeast1-gcp-free",
  });

  // 1536 dimensions
  const pineconeIndex = client.Index("chat-cv");

  // Add the chunks as documents to the SingleStore vector store
  await PineconeStore.fromTexts(chunkedCV, {}, embeddings, {
    pineconeIndex,
  });
}

splitAndStoreMassiveString();
