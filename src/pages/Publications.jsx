import React from 'react'

const publications = [
  {
    title: "Non-Defectless Valued Fields and Valuations that are not Valuation-independent",
    authors: "A. Linzi",
    journal: "arXiv:2501.17141",
    year: "2025",
    link: "https://arxiv.org/abs/2501.17141"
  },
  {
    title: "Algebraic Hyperstructures vs Ordered Algebraic Structures",
    authors: "A. Linzi",
    journal: "arXiv:2501.10776",
    year: "2025",
    link: "https://arxiv.org/abs/2501.10776"
  },
  {
    title: "A Proof of Generalized Kaplansky's Hypothesis",
    authors: "A. Linzi",
    journal: "arXiv:2412.16010",
    year: "2024",
    link: "https://arxiv.org/abs/2412.16010"
  },
  {
    title: "Valuation-independent Valuations vs Independent Valuations",
    authors: "A. Linzi",
    journal: "arXiv:2404.14811",
    year: "2024",
    link: "https://arxiv.org/abs/2404.14811"
  },
  {
    title: "Dependent and Independent Valuations",
    authors: "A. Linzi",
    journal: "arXiv:2301.07761",
    year: "2023",
    link: "https://arxiv.org/abs/2301.07761"
  },
  {
    title: "Krasner Hyperrings and Ordered Rings",
    authors: "A. Linzi",
    journal: "Journal of Algebra, Volume 625 (2023), 209-232",
    year: "2023",
    link: "https://doi.org/10.1016/j.jalgebra.2023.03.013"
  },
  {
    title: "Hyperrings from Valued Fields",
    authors: "A. Linzi",
    journal: "Journal of Pure and Applied Algebra, Volume 226, Issue 4 (2022), 106883",
    year: "2022",
    link: "https://doi.org/10.1016/j.jpaa.2021.106883"
  },
  {
    title: "Extensions of valued fields and valuation independence",
    authors: "A. Linzi",
    journal: "Journal of Algebra, Volume 584 (2021), 1-28",
    year: "2021",
    link: "https://doi.org/10.1016/j.jalgebra.2021.05.006"
  },
  {
    title: "Valued hyperfields",
    authors: "A. Linzi",
    journal: "Journal of Algebra, Volume 533 (2019), 116-150",
    year: "2019",
    link: "https://doi.org/10.1016/j.jalgebra.2019.05.011"
  },
  {
    title: "Hyperfields and valuations",
    authors: "A. Linzi, M. Marshall",
    journal: "Journal of Pure and Applied Algebra, Volume 222, Issue 8 (2018), 2110-2129",
    year: "2018",
    link: "https://doi.org/10.1016/j.jpaa.2017.09.006"
  },
  {
    title: "Valued Fields",
    authors: "A. Linzi",
    journal: "Ph.D. Thesis, University of Saskatchewan (2018)",
    year: "2018",
    link: "https://harvest.usask.ca/handle/10388/8991"
  },
  {
    title: "A remark on the equivalence of valuations",
    authors: "A. Linzi",
    journal: "Communications in Algebra, Volume 46, Issue 2 (2018), 754-756",
    year: "2018",
    link: "https://doi.org/10.1080/00927872.2017.1339077"
  }
]

const Publications = () => {
  return (
    <div className="page-header">
      <div className="container">
        <h1>Publications</h1>
        <p className="subtitle">The following list is ordered by year of publication</p>
        
        <div className="document-content text-left" style={{ marginTop: '4rem' }}>
          <div className="pub-list">
            {publications.map((pub, index) => (
              <div key={index} className="glass-card pub-item" style={{ padding: '1.5rem' }}>
                <h3 className="pub-title">{pub.title}</h3>
                <p className="pub-authors">{pub.authors} ({pub.year})</p>
                <p className="pub-journal">{pub.journal}</p>
                <a href={pub.link} target="_blank" rel="noopener noreferrer" className="pub-link">
                  View Publication ↗
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <section className="quote-section" style={{ padding: '4rem 0' }}>
        <div className="container">
          <div className="quote-mark">"</div>
          <p className="quote-text serif" style={{ fontSize: '1.5rem' }}>
            My mind is now at rest.
          </p>
          <span className="quote-author">— Andrew Wiles on Solving Fermat (interview transcript)</span>
        </div>
      </section>
    </div>
  )
}

export default Publications
