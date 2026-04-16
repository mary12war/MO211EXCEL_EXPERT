# Excel Expert Certification Learning Site

## Overview
This project is a static learning site for Microsoft 365 Excel Expert exam prep. It uses plain HTML, CSS, and JavaScript only, so the `/site` folder can be deployed directly to GitHub Pages without a build step.

## Project Structure
```text
/site
├── index.html
├── domain-1-manage-workbooks.html
├── domain-2-manage-data-cells.html
├── domain-3-manage-tables-queries.html
├── domain-4-manage-charts.html
├── domain-5-manage-formulas.html
├── lesson-pivot-tables.html
├── sitemap.xml
├── README.md
├── manifest.json
├── css/
│   └── styles.css
├── js/
│   └── app.js
└── assets/
    ├── images/
    │   ├── domain-1-thumb-1200.png
    │   ├── domain-1-thumb-800.png
    │   ├── domain-1-thumb-400.png
    │   ├── domain-2-thumb-1200.png
    │   ├── domain-2-thumb-800.png
    │   ├── domain-2-thumb-400.png
    │   ├── domain-3-thumb-1200.png
    │   ├── domain-3-thumb-800.png
    │   ├── domain-3-thumb-400.png
    │   ├── domain-4-thumb-1200.png
    │   ├── domain-4-thumb-800.png
    │   ├── domain-4-thumb-400.png
    │   ├── domain-5-thumb-1200.png
    │   ├── domain-5-thumb-800.png
    │   └── domain-5-thumb-400.png
    ├── svg/
    │   ├── icon-workbook.svg
    │   ├── icon-data.svg
    │   ├── icon-table.svg
    │   ├── icon-chart.svg
    │   ├── icon-formula.svg
    │   └── icon-download.svg
    └── workbooks/
        ├── manage-workbooks-practice.xlsx
        ├── manage-data-practice.xlsx
        ├── manage-tables-practice.xlsx
        ├── manage-charts-practice.xlsx
        ├── manage-formulas-practice.xlsx
        ├── pivot-tables-practice.xlsx
        ├── sample-sales-data.csv
        └── sample-budget-data.csv
```

## Local Development (no build tools needed)
- Open `/site/index.html` directly in a browser, OR
- Run: `npx serve site` (optional, for absolute paths)

## Content Checklist (automated + manual)
- [ ] Spellcheck all `.html` files
- [ ] Run axe DevTools accessibility audit — target score ≥ 90
- [ ] Test all pages at 375px, 768px, 1280px viewport widths
- [ ] Verify all `.xlsx` and `.csv` download links resolve
- [ ] Confirm all images have descriptive alt attributes
- [ ] Validate `sitemap.xml` at https://www.xml-sitemaps.com/validate-xml-sitemap.html
- [ ] Run Lighthouse: Performance ≥ 60, Accessibility ≥ 90, Best Practices ≥ 85

## File Naming Rules
- All files: kebab-case only (e.g., `manage-workbooks-practice.xlsx`)
- Images: `domain-N-thumb-WIDTHxHEIGHT.png`
- Workbooks: `objective-name-practice.xlsx`

## Source References
- Microsoft Learn: Excel training (https://support.microsoft.com/excel)
- MO-201 Exam Skills Measured (https://learn.microsoft.com/credentials/certifications/resources/study-guides/mo-201)
- GCFGlobal Excel 2019 Advanced (https://edu.gcfglobal.org/en/excel2016/)
- Contextures PivotTable tutorials (https://www.contextures.com/xlPivot01.html)

## Lighthouse Targets
| Metric | Target |
|--------|--------|
| Performance | ≥ 60 |
| Accessibility | ≥ 90 |
| Best Practices | ≥ 85 |
| SEO | ≥ 90 |

## Known Placeholders & Assumptions
- See CHANGELOG section below

## Changelog & Assumptions
- Placeholder `.png` and `.xlsx` files are intentionally empty so the folder tree matches the requested deployment shape.
- Domain overview pages use scaffolded instructional copy and objective placeholders where the full learning-directory row text was not pasted directly into the prompt.
- `manifest.json` is a content manifest array for the site rather than a web app manifest, matching the requested schema.
