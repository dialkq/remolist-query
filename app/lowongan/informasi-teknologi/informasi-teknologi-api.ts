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
    ]
  }  