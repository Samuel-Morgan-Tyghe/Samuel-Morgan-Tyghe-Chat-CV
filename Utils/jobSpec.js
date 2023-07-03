const bidfx = `BidFX Systems Limited. York House, 23 Kingsway, London WC2B 6UJ. BidFX is a Singapore Stock Exchange company.
Europe +44 20 7149 3100 Americas +1 212 3359 4100 Asia +65 6486 7980
Senior Frontend JS Developer
Overview
Job title Senior Frontend JS Developer
Job type Full time, Permanent
Location London
Minimum Experience Relevant BSc degree and 5 years’ post graduate experience
About BidFX
BidFX is an industry leading provider of electronic Foreign Exchange (FX) trading solutions for the global financial
marketplace. FX is one of the oldest professions in the world. For as long as there has been cross border trade
in goods there has been a requirement to exchange currency. This was as true for the merchants of ancient
times exchanging gold for silver, or shells for beads, as it is today for investors dealing in Renminbi, Euro or
Bitcoin. We still trade precious metal as currency, and FX bloomed into the world’s largest financial market with
$6.6 trillion average daily volume. Approximately 45% of global FX business is conducted in London.
Founded as a start up in 2017, BidFX is a UK-based FinTech that deploys market leading, cloud-based, trading
technology to provide an Execution Management System (EMS) as a service for institutional clients. BidFX are
centred in London – where most development is focused – and operate globally with regional offices in
Singapore, New York, and Sydney. In 2020 BidFX became part of the Singapore Exchange (SGX).
The Role
BidFX have an exciting opportunity for Senior Frontend JavaScript Engineers to join our development team and
create feature-rich user interfaces for FX trading. Our frontend applications are beautifully designed and
engineered for high-touch, professional traders. Our UI components are sophisticated real-time, single page
webapps build on HTML5 technology. We use OpenFin containers to deploy our apps as a secure and highly
integrated, multi-window desktop trading experience.
Your contributions could involve anything from engineering primary trading tickets, trading blotters, order
shaping, broker algos, trade alerts, push notifications, real-time price charts and trade cost data visualisations,
desktop window management, support/self-service administration UIs, or frontend interoperability with client
systems. You will collaborate with your peers, product team, UI designers, backends, QA and SCRUM masters to
build a world leading FX EMS. You will need to be product driven, enthusiastic for change, self-motivated, well
organised, adaptable and a quick learner. FX is a complex business with many obscure market conventions that
you will need to master to be proficient. BidFX will provide training and give you the opportunity to build highquality, data-intensive applications that help keep the global economy running smoothly.
BidFX currently operate hybrid working where IT staff can optionally spend 60% of their work hours remote.
Responsibilities
• Directly contribute to the development of a world leading FX trading platform.
• Create, improve, optimise and maintain all elements of BidFX frontend software and associated APIs.
• Operate within a full-stack development squad and drive high quality products to production.
• Partner with all teams and all levels to achieve business aims in a cost effective and timely manner.
• Provide line management and mentoring and assist in recruitment for team growth (for senior roles).
BidFX Systems Limited. York House, 23 Kingsway, London WC2B 6UJ. BidFX is a Singapore Stock Exchange company.
Europe +44 20 7149 3100 Americas +1 212 3359 4100 Asia +65 6486 7980
• Remove technical obstacles to enhance processes and maintain continuous business operations.
• Safeguard the privacy, integrity, resilience, and security of client and company data.
• Maintain good documentation for all projects and systems line with company standards.
• Follow best development practice in compliance with IT governance and controls.
• Troubleshoot relevant production issues and support incident response.
Knowledge and Experience
• Expert, hands-on modern syntax JavaScript and TypeScript.
• Experience with the React framework and ideally Rx.js.
• Well versed in the use of CSS3 to style frontend applications.
• Good knowledge of browsers and containers, including Chrome, Chromium and Electron.
• Experience of OpenFin would be ideal.
• Excellent knowledge of using and designing REST APIs and web-socket solutions.
• Agile practices such as XP, pair programming, test driven development and SCRUM.
• An understanding of efficient programming and frontend performance tuning.
• This is a frontend role but full-stack developers with Java, C#, Kotlin or Swift are also welcome.
• Demonstrated team leadership experience with line management potential (for senior roles).
• Linux OS environments, ideally including cloud based VMs, containers and Kubernetes.
• IT security techniques including MFA, SSO, RBAC, and data encryption.
• Knowledge of the data needs for FX and related financial markets would be an advantage.
To apply, please email dev-jobs@bidfx.com.`;

export const getJobSpec = (jobId) =>
  ({
    bidfx: bidfx,
  }[jobId] ?? "No job spec found");
