export interface TabsLowonganProps {
    title: string
    company: string
    salary?: string
    location: string
    description: string
    type?: string
    section?: string
    onClick?: () => void
    id: number
  }
  
  export interface ApiResponse {
    status: number
    data: TabsLowonganProps[]
  }
// DATA
  export const lowonganList: ApiResponse = {
    "status" : 200,
    "data" : [
      {
        id: 1,
        title: "Front End Developer",
        company: "PT Intersollusi Inter Asia",
        salary: "Rp 5,000,000 – Rp 7,500,000 per month",
        location: "Jakarta, Indonesia",
        section: "Informasi & Komunikasi (Teknologi Informasi & Komunikasi)",
        type: "Full Time",
        description: "",
      },
      {
        id: 2,
        title: "Back End Developer",
        company: "PT Inte Inte Asia",
        salary: "Rp 15,000,000 – Rp 87,500,000 per month",
        location: "Bogor, Indonesia",
        section: "Informasi & Komunikasi (Teknologi Informasi & Komunikasi)",
        type: "Full Time",
        description: "",
      },
      {
        id: 3,
        title: "Full Stack Developer",
        company: "PT Dinamis",
        salary: "Rp 55,000,000 – Rp 87,500,000 per month",
        location: "Bandung, Indonesia",
        section: "Informasi & Komunikasi (Teknologi Informasi & Komunikasi)",
        type: "Full Time",
        description: "",
      },
      {
        id: 4,
        title: "Front End Developer",
        company: "PT Tutut Indonesia",
        salary: "Rp 5,000,000 – Rp 7,500,000 per month",
        location: "Bandung, Indonesia",
        section: "Informasi & Komunikasi (Teknologi Informasi & Komunikasi)",
        type: "Full Time",
        description: "",
      },
      {
        id: 5,
        title: "IT Manager",
        company: "PT Intesinte",
        salary: "Rp 7,000,000 – Rp 8,500,000 per month",
        location: "Jakarta, Indonesia",
        section: "Informasi & Komunikasi (Teknologi Informasi & Komunikasi)",
        type: "Full Time",
        description: "",
      },
      {
        id: 6,
        title: "Web Developer",
        company: "PT Nusantara Berkah",
        salary: "Rp 6,000,000 – Rp 7,000,000 per month",
        location: "Semarang, Indonesia",
        section: "Informasi & Komunikasi (Teknologi Informasi & Komunikasi)",
        type: "Full Time",
        description: "",
      },
      {
        id: 7,
        title: "Full Stack Developer",
        company: "PT Adhikari Indonesia",
        salary: "Rp 5,000,000 – Rp 6,500,000 per month",
        location: "Bekasi, Indonesia",
        section: "Informasi & Komunikasi (Teknologi Informasi & Komunikasi)",
        type: "Full Time",
        description: "",
      },
      {
        id: 8,
        title: "Full Stack Programmer (Typescript)",
        company: "PT Pasifik Hoki",
        salary: "Rp 15,000,000 – Rp 17,500,000 per month",
        location: "Jakarta, Indonesia",
        section: "Informasi & Komunikasi (Teknologi Informasi & Komunikasi)",
        type: "Full Time",
        description: "",
      },
      {
        id: 9,
        title: "Full Stack Developer",
        company: "PT IDX Solusi Indonesia",
        salary: "Rp 5,000,000 – Rp 6,500,000 per month",
        location: "Bandung, Indonesia",
        section: "Informasi & Komunikasi (Teknologi Informasi & Komunikasi)",
        type: "Full Time",
        description: "",
      },
      {
        id: 10,
        title: "IT Security",
        company: "PT IDX Solusi Indonesia",
        salary: "Rp 6,000,000 – Rp 7,500,000 per month",
        location: "Bandung, Indonesia",
        section: "Informasi & Komunikasi (Teknologi Informasi & Komunikasi)",
        type: "Full Time",
        description: "",
      },
      {
        id: 11,
        title: "IT Help Desk",
        company: "PT Asus Indonesia",
        salary: "Rp 4,000,000 – Rp 4,500,000 per month",
        location: "Jakarta, Indonesia",
        section: "Informasi & Komunikasi (Teknologi Informasi & Komunikasi)",
        type: "Full Time",
        description: "",
      },
      {
        id: 12,
        title: "Front End Developer",
        company: "PT Lagu Lama Indonesia",
        salary: "Rp 8,000,000 – Rp 9,500,000 per month",
        location: "Jakarta, Indonesia",
        section: "Informasi & Komunikasi (Teknologi Informasi & Komunikasi)",
        type: "Full Time",
        description: "",
      },
      {
        id: 13,
        title: "Back End Developer",
        company: "PT Moile Indonesia",
        salary: "Rp 8,000,000 – Rp 8,500,000 per month",
        location: "Bandung, Indonesia",
        section: "Informasi & Komunikasi (Teknologi Informasi & Komunikasi)",
        type: "Full Time",
        description: "",
      },
    ]
  }  