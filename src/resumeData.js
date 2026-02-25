// Resume data structure with independent profiles
// Each resume has its own dedicated data for skills, about, experience, hero, and contact

export const resumeProfiles = {
  resume: {
    id: 'resume',
    name: 'Alex Maeda',
    headline: 'Senior Full Stack Engineer | AI/ML & Cloud Infrastructure Expert',
    location: 'Mercer Island, WA',
    tagline: 'Building scalable systems • AI/ML Integration • Distributed Architecture',
    
    hero: {
      subtitle: 'Senior Full Stack Engineer | AI/ML & Cloud Infrastructure Expert',
      tagline: 'Building scalable systems • AI/ML Integration • Distributed Architecture',
      showCta: true,
    },
    
    about: {
      paragraphs: [
        'Senior Full Stack Engineer with 8+ years of experience building scalable, AI - powered distributed systems. I specialize in bridging the gap between backend architecture and frontend experience, delivering end-to-end solutions that handle millions of requests.',
        'Currently building AI/ML platforms at Meta, I\'ve previously led engineering teams at Sofar Ocean (IoT/Ocean Data), Uber (Healthcare & Eats), and interned at Google. My expertise spans Generative AI, LLM orchestration, cloud infrastructure, and full - stack development.',
        'I\'m passionate about building systems that make a real-world impact — from ocean data collection to healthcare logistics to AI that helps people work smarter.'
      ],
      stats: [
        { number: '8+', label: 'Years Experience' },
        { number: '6', label: 'Top Companies' },
        { number: 'AI/ML', label: 'Specialization' },
        { number: 'Full Stack', label: 'Expertise' }
      ]
    },
    
    skills: {
      "Programming Languages": [
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
        { name: "C/C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
        { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" }
      ],
      "Backend Development": [
        { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
        { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
        { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        { name: "NestJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg" },
        { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
        { name: "GraphQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" }
      ],
      "Frontend Development": [
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
        { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
        { name: "TailwindCSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" }
      ],
      "AI / ML & LLMs": [
        { name: "LangChain", icon: "https://avatars.githubusercontent.com/u/126733545?s=200&v=4" },
        { name: "LangGraph", icon: "https://avatars.githubusercontent.com/u/126733545?s=200&v=4" },
        { name: "HuggingFace", icon: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg" },
        { name: "OpenAI/GPT-4", icon: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg" },
        { name: "Claude", icon: "https://www.anthropic.com/images/icons/apple-touch-icon.png" },
        { name: "Llama", icon: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg" },
        { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
        { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" }
      ],
      "Database & Data Engineering": [
        { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
        { name: "DynamoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
        { name: "Kafka", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg" },
        { name: "Snowflake", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/snowflake/snowflake-original.svg" },
        { name: "Apache Spark", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachespark/apachespark-original.svg" }
      ],
      "Cloud & Infrastructure": [
        { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
        { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
        { name: "GCP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
        { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
        { name: "Terraform", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" },
        { name: "Jenkins", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" }
      ]
    },
    
    experience: [
      {
        id: '1',
        company: "Meta",
        logo: "https://logo.clearbit.com/meta.com",
        role: "Software Engineer",
        duration: "Dec 2024 - Present",
        summary: "Built end-to-end document ingestion, embedding, and semantic retrieval pipelines using Hugging Face Transformers. Designed AI agent orchestration frameworks using LangChain. Developed enterprise AI chatbot systems combining LLM reasoning, retrieval augmentation, and structured tool calling.",
        tech: ["Python", "HuggingFace", "LangChain", "Transformers", "RAG", "LLMs", "React", "GraphQL", "Kubernetes", "Docker"]
      },
      {
        id: '2',
        company: "Sofar Ocean",
        logo: "https://logo.clearbit.com/sofarocean.com",
        role: "Software Engineer",
        duration: "Jan 2022 - Nov 2024",
        summary: "Led development of backend-heavy full-stack systems supporting ingestion, processing, and visualization of real-time oceanic and atmospheric data. Designed and maintained scalable data pipelines for large-scale time-series environmental data.",
        tech: ["Python", "FastAPI", "Flask", "React", "TypeScript", "PostgreSQL", "AWS", "Docker", "NumPy", "Pandas"]
      },
      {
        id: '3',
        company: "Uber",
        logo: "https://logo.clearbit.com/uber.com",
        role: "Software Engineer II",
        duration: "Jan 2020 - Jan 2022",
        summary: "Developed and maintained scalable microservices for Uber Health's patient transportation and care coordination platform. Designed AI-enhanced features for scheduling, route optimization, and predictive patient needs.",
        tech: ["Python", "Java", "React", "PostgreSQL", "AWS", "Docker", "Kubernetes", "ETL", "HIPAA"]
      },
      {
        id: '4',
        company: "Uber",
        logo: "https://logo.clearbit.com/uber.com",
        role: "Software Engineer I",
        duration: "May 2017 - Dec 2019",
        summary: "Built and scaled distributed microservices supporting Uber Eats order lifecycle using CQRS, event-driven architecture, and streaming pipelines. Designed backend systems for dynamic pricing, service fees, courier payouts, and restaurant settlements.",
        tech: ["Java", "Spring Boot", "React", "PostgreSQL", "AWS", "Docker", "REST APIs", "Microservices"]
      },
      {
        id: '5',
        company: "Google",
        logo: "https://logo.clearbit.com/google.com",
        role: "Software Engineering Intern",
        duration: "May 2016 - Aug 2016",
        summary: "Designed and implemented distributed backend services using C++ and Java. Developed responsive user interfaces using Angular.",
        tech: ["C++", "Java", "Angular", "Distributed Systems"]
      },
      {
        id: '6',
        company: "Originate",
        logo: "https://logo.clearbit.com/originate.com",
        role: "Software Engineering Intern",
        duration: "Jun 2015 - Aug 2015",
        summary: "Designed and developed responsive Java-based web forms and data collection tools. Re-engineered a legacy Java portlet and optimized Oracle Database schema.",
        tech: ["Java", "jQuery", "Oracle", "REST APIs"]
      }
    ],
    
    contact: {
      email: 'mprimary.work@gmail.com',
      phone: '(484) 298-9873',
      location: 'Mercer Island, WA',
      linkedin: 'https://linkedin.com/in/alex-maeda',
      github: 'https://github.com'
    }
  },
  
  me: {
    id: 'me',
    name: 'Alex Maeda',
    headline: 'Senior Software Engineer @ Meta',
    location: 'Mercer Island, WA',
    tagline: 'Go • Python • Backend Systems • Distributed Architecture',
    
    hero: {
      subtitle: 'Senior Software Engineer @ Meta | Go & Python Backend Expert',
      tagline: 'Go • Python • Backend Systems • Distributed Architecture',
      showCta: true,
    },
    
    about: {
      paragraphs: [
        'Senior Software Engineer with 8+ years of experience specializing in backend systems, distributed architecture, and scalable microservices. Currently at Meta building high-throughput ad delivery systems.',
        'I have a strong focus on Go and Python for building performant backend services. At Meta, I architected Site Links for Meta Ads that scaled to $7B ARR. Previously at Sofar Ocean and Uber, I built systems handling millions of requests per day.',
        'I love solving complex distributed systems problems and building infrastructure that scales to billions of requests.'
      ],
      stats: [
        { number: '8+', label: 'Years Experience' },
        { number: '$7B', label: 'ARR Impact' },
        { number: 'Go/Python', label: 'Specialization' },
        { number: 'Backend', label: 'Expertise' }
      ]
    },
    
    skills: {
      "Programming Languages": [
        { name: "Go", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" },
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" }
      ],
      "Backend & APIs": [
        { name: "Go", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" },
        { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
        { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
        { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
        { name: "gRPC", icon: "https://grpc.io/img/grpc_logo.svg" },
        { name: "Thrift", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Apache_Thrift_logo.svg/1200px-Apache_Thrift_logo.svg.png" }
      ],
      "Frontend Development": [
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
        { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" }
      ],
      "Data & Streaming": [
        { name: "Kafka", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg" },
        { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
        { name: "DynamoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "Snowflake", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/snowflake/snowflake-original.svg" }
      ],
      "Cloud & Infrastructure": [
        { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
        { name: "GCP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
        { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
        { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
        { name: "Terraform", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" }
      ],
      "DevOps & Tools": [
        { name: "Jenkins", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" }
      ]
    },
    
    experience: [
      {
        id: '1',
        company: "Meta",
        logo: "https://logo.clearbit.com/meta.com",
        role: "Software Engineer",
        duration: "Dec 2024 - Present",
        summary: "Architected and helped launch Site Links for Meta Ads, scaling to $7B ARR within two months. Designed and built scalable backend services in Python, exposing high-throughput Thrift/gRPC APIs. Built asynchronous pipelines using Kafka for ad delivery systems.",
        tech: ["Go", "Python", "Kafka", "Thrift", "gRPC", "Kubernetes", "Redis", "AWS", "PostgreSQL", "Docker"]
      },
      {
        id: '2',
        company: "Sofar Ocean",
        logo: "https://logo.clearbit.com/sofarocean.com",
        role: "Software Engineer",
        duration: "Jan 2022 - Nov 2024",
        summary: "Led development of backend-heavy systems supporting ingestion, processing, and visualization of real-time oceanic and atmospheric data. Built scalable backend data pipelines in Python processing real-time telemetry from distributed ocean sensor networks.",
        tech: ["Python", "FastAPI", "Django", "React", "TypeScript", "PostgreSQL", "AWS", "Docker", "GraphQL"]
      },
      {
        id: '3',
        company: "Uber",
        logo: "https://logo.clearbit.com/uber.com",
        role: "Software Engineer II",
        duration: "Jan 2020 - Jan 2022",
        summary: "Built mission-critical microservices in Golang for Uber Health's patient transportation platform with high reliability requirements. Designed secure REST APIs compliant with HIPAA standards, integrating with EHR systems.",
        tech: ["Go", "Python", "PostgreSQL", "AWS", "Docker", "Jenkins", "REST APIs", "ETL", "HIPAA"]
      },
      {
        id: '4',
        company: "Uber",
        logo: "https://logo.clearbit.com/uber.com",
        role: "Software Engineer I",
        duration: "May 2017 - Dec 2019",
        summary: "Built distributed microservices in Golang for the Uber Eats order lifecycle using event-driven architecture and message queues. Implemented real-time dispatch systems leveraging courier availability and demand signals.",
        tech: ["Go", "PostgreSQL", "AWS", "Docker", "Thrift", "REST APIs", "Microservices", "Event-Driven"]
      },
      {
        id: '5',
        company: "Google",
        logo: "https://logo.clearbit.com/google.com",
        role: "Software Engineering Intern",
        duration: "May 2016 - Aug 2016",
        summary: "Built backend modules in Python integrating Google Classroom with Google Calendar services. Developed responsive user interfaces using Angular.",
        tech: ["Python", "Angular", "GCP", "REST APIs"]
      },
      {
        id: '6',
        company: "Originate",
        logo: "https://logo.clearbit.com/originate.com",
        role: "Software Engineering Intern",
        duration: "Jun 2015 - Aug 2015",
        summary: "Improved platform performance by optimizing data schemas and streamlining RESTful API endpoints, reducing page load latency by 15%. Gained exposure to GCP, containerization, and streaming data pipelines.",
        tech: ["REST APIs", "GCP", "Docker", "Data Pipelines"]
      }
    ],
    
    contact: {
      email: 'mprimary.work@gmail.com',
      phone: '(484) 298-9873',
      location: 'Mercer Island, WA',
      linkedin: 'https://linkedin.com/in/alex-maeda',
      github: 'https://github.com'
    }
  },
  
  home: {
    id: 'home',
    name: 'Alex Maeda',
    headline: 'Senior Software Engineer',
    location: 'Mercer Island, WA',
    tagline: 'Java/Spring Boot • Scalable Systems • Microservices',
    
    hero: {
      subtitle: 'Senior Software Engineer | Java & Spring Boot Expert',
      tagline: 'Java/Spring Boot • Scalable Systems • Microservices',
      showCta: true,
    },
    
    about: {
      paragraphs: [
        'Full Stack Engineer with 9 years of experience scaling systems at Uber, Sofar Ocean, and Meta. Built Java microservices handling 2B+ monthly API requests and supported 100K+ patient trips/month and 2M+ orders/day with low-latency, high-volume backend systems at Uber.',
        'I am a problem solver and self-motivated, passionate about clean code and building reliable systems that make an impact. Currently at Meta, previously built systems at Uber and Sofar Ocean.',
        'Specialized in Java, Spring Boot, and building scalable microservices that handle billions of requests.'
      ],
      stats: [
        { number: '9+', label: 'Years Experience' },
        { number: '2B+', label: 'API Requests/Month' },
        { number: 'Java', label: 'Primary Focus' },
        { number: 'Full Stack', label: 'Expertise' }
      ]
    },
    
    skills: {
      "Backend & APIs": [
        { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
        { name: "Kotlin", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Kafka", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg" },
        { name: "Spark", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/spark/spark-original.svg" },
        { name: "Flink", icon: "https://flink.apache.org/img/logo/flink-logo.svg" },
        { name: "REST APIs", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rest/rest-original.svg" },
        { name: "GraphQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" }
      ],
      "Frontend": [
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
        { name: "Mapbox", icon: "https://docs.mapbox.com/mapbox-gl-js/assets/logo.svg" },
        { name: "Leaflet", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/leaflet/leaflet-original.svg" }
      ],
      "Databases": [
        { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "Cassandra", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cassandra/cassandra-original.svg" },
        { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
        { name: "DynamoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" }
      ],
      "Cloud & DevOps": [
        { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
        { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
        { name: "Terraform", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" },
        { name: "Jenkins", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" }
      ],
      "Monitoring": [
        { name: "Datadog", icon: "https://imgix.datadoghq.com/img/about/presskit/kit/press_kit_badge_v2.svg" },
        { name: "Prometheus", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg" },
        { name: "Grafana", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg" },
        { name: "ELK Stack", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elasticsearch/elasticsearch-original.svg" }
      ]
    },
    
    experience: [
      {
        id: '1',
        company: "Meta",
        logo: "https://logo.clearbit.com/meta.com",
        role: "Software Engineer",
        duration: "Dec 2024 – Present",
        location: "Seattle, WA",
        summary: "Architected and scaled Java (Spring Boot) backend services on AWS, handling over 2B API requests/month. Designed event-driven pipelines with Kafka and Spring Cloud Stream, supporting real-time updates with under 100ms latency. Integrated OAuth2 login for Instagram onboarding, enabling 100M+ users to securely access services with JWT and RBAC. Deployed containerized services with Docker, Helm, and Kubernetes. Enhanced observability with Prometheus, Grafana, and Datadog alerts, reducing incident response time by 60%.",
        tech: ["Java", "Spring Boot", "AWS", "Kafka", "Docker", "Kubernetes", "Terraform", "Jenkins", "Prometheus", "Grafana", "Datadog", "OAuth2", "JWT", "RBAC"]
      },
      {
        id: '2',
        company: "Sofar Ocean",
        logo: "https://logo.clearbit.com/sofarocean.com",
        role: "Software Engineer",
        duration: "Jan 2022 – Nov 2024",
        location: "San Francisco, CA",
        summary: "Led backend services and GraphQL APIs (TypeScript/Node.js) for ingestion and visualization of real-time oceanic and atmospheric data from distributed Spotter buoys. Developed data processing pipelines using Python, NumPy, Pandas, GeoPandas, and Apache Spark. Created internal dashboards and mapping apps (React, Mapbox, Leaflet). Deployed cloud-based systems on AWS (EC2, S3, RDS, Lambda) with Docker and CI/CD pipelines.",
        tech: ["TypeScript", "Node.js", "Python", "GraphQL", "React", "AWS", "Docker", "Spark", "NumPy", "Pandas", "Mapbox", "Leaflet"]
      },
      {
        id: '3',
        company: "Uber",
        logo: "https://logo.clearbit.com/uber.com",
        role: "Software Engineer II",
        duration: "Jan 2020 – Jan 2022",
        location: "Seattle, WA",
        summary: "Built Java backend services and Python automation pipelines for Uber Health, supporting over 100K patient trips/month with HIPAA-compliant scheduling, trip tracking, and provider integrations. Implemented Kafka streaming and Redis caching to enable real-time trip updates and improve API response times by 63%. Developed REST APIs and React dashboards for healthcare providers.",
        tech: ["Java", "Python", "React", "PostgreSQL", "AWS", "Docker", "Kubernetes", "Kafka", "Redis", "HIPAA", "REST APIs"]
      },
      {
        id: '4',
        company: "Uber",
        logo: "https://logo.clearbit.com/uber.com",
        role: "Software Engineer I",
        duration: "May 2017 – Dec 2019",
        location: "Seattle, WA",
        summary: "Developed backend microservices and Python/Kafka pipelines for Uber Eats, handling ~2M orders/day. Implemented database schemas, stored procedures, and Spring Boot batch jobs for financial reconciliation. Built REST APIs and internal dashboards (React/JS). Optimized MySQL and Cassandra queries and caching for low-latency responses.",
        tech: ["Java", "Spring Boot", "Python", "React", "Kafka", "MySQL", "Cassandra", "AWS", "Docker", "REST APIs", "Microservices"]
      },
      {
        id: '5',
        company: "Google",
        logo: "https://logo.clearbit.com/google.com",
        role: "Software Engineering Intern",
        duration: "May 2016 – Aug 2016",
        location: "Mountain View, CA",
        summary: "Built Python backend modules integrating Google Classroom with Calendar services. Developed responsive user interfaces using Angular.",
        tech: ["Python", "Angular", "Google Cloud"]
      }
    ],
    
    education: {
      school: "Carnegie Mellon University",
      degree: "Bachelor's Degree, Electrical and Computer Engineering",
      duration: "Sep 2012 – May 2016",
      location: "Pittsburgh, PA"
    },
    
    contact: {
      email: 'mprimary.work@gmail.com',
      phone: '(484) 298-9873',
      location: 'Mercer Island, WA',
      linkedin: 'https://linkedin.com/in/alex-maeda',
      github: 'https://github.com',
      website: 'https://alexmaeda.netlify.app/home'
    }
  }
};

export const dashboardContact = {
  name: 'Alex Maeda',
  headline: 'Senior Software Engineer @ Meta',
  email: 'mprimary.work@gmail.com',
  phone: '(484) 298-9873',
  linkedin: 'https://linkedin.com/in/alex-maeda',
  github: 'https://github.com'
};
