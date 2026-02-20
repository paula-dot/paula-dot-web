const services = [
    {
        title: "Backend Engineering",
        description: "Designing scalable backend architectures and writing robust business logic. I build secure, high-performance systems utilizing Go and Python to handle complex data workflows.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" className="service-svg">
              <rect x="3" y="4" width="18" height="6" rx="1"></rect>
              <rect x="3" y="14" width="18" height="6" rx="1"></rect>
              <line x1="7" y1="7" x2="7.01" y2="7" strokeWidth="2"></line>
              <line x1="11" y1="7" x2="17" y2="7"></line>
              <line x1="7" y1="17" x2="7.01" y2="17" strokeWidth="2"></line>
              <line x1="11" y1="17" x2="17" y2="17"></line>
              <path d="M12 10v4"></path>
            </svg>
        )
    },
    {
        title: "API Development",
        description: "Crafting highly responsive RESTful APIs and microservices. My APIs focus on structured access, sub-100ms response times, and comprehensive documentation for seamless client integration.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" className="service-svg">
              <circle cx="12" cy="12" r="3"></circle>
              <path d="M12 9V4"></path>
              <circle cx="12" cy="3" r="1"></circle>
              <path d="M15 12h5"></path>
              <circle cx="21" cy="12" r="1"></circle>
              <path d="M12 15v5"></path>
              <circle cx="12" cy="21" r="1"></circle>
              <path d="M9 12H4"></path>
              <circle cx="3" cy="12" r="1"></circle>
              <path d="M14.5 9.5l3.5-3.5"></path>
              <circle cx="18.5" cy="5.5" r="1"></circle>
              <path d="M9.5 14.5l-3.5 3.5"></path>
              <circle cx="5.5" cy="18.5" r="1"></circle>
            </svg>
        )
    },
    {
        title: "Data Engineering",
        description: "Developing robust data pipelines and ETL processes. I specialize in structuring complex datasets, spatial data processing (GIS), and managing high-throughput PostgreSQL databases.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" className="service-svg">
              <ellipse cx="12" cy="6" rx="8" ry="2.5"></ellipse>
              <path d="M4 6v6c0 1.38 3.58 2.5 8 2.5s8-1.12 8-2.5V6"></path>
              <path d="M4 12v6c0 1.38 3.58 2.5 8 2.5s8-1.12 8-2.5v-6"></path>
              <path d="M12 11v10"></path>
              <polyline points="9 18 12 21 15 18"></polyline>
            </svg>
        )
    }
];

export default services;

