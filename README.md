# Xiaomin Reference Recommendations

A modern professional reference and recommendation website for **Xiaomin (Aileen) Guo**.

The site presents Xiaomin's professional profile, featured recommendation letter providers, and additional academic or industry references in a clean LinkedIn-style portfolio layout. It is designed for hiring managers, recruiters, admissions reviewers, and professional contacts who need a concise reference overview.

## Live Site

```text
https://xiaomin-reference-recommendations.vercel.app
```

## Purpose

This website provides a polished public reference page with:

- A professional hero section with profile image, title, location, and social links
- Featured recommendation providers with links to recommendation letter PDFs
- Additional references with role, organization, relationship context, and contact details
- Responsive layout for desktop, tablet, and mobile screens

The site includes reference contact details so HR teams and recruiters can verify references when the URL is shared during a job search.

## Tech Stack

- **React**: Component-based UI framework
- **Vite**: Fast frontend build tool and development server
- **TypeScript**: Static typing for safer component and data structures
- **Tailwind CSS**: Utility-first styling
- **lucide-react**: Icon library
- **Framer Motion**: Subtle entry and hover animations
- **ESLint**: Code quality checks

## Project Structure

```text
.
|-- public/
|   |-- favicon.svg
|   |-- files/
|   |   |-- brian-hu-letter.pdf
|   |   |-- jin-li-letter.pdf
|   |   `-- yuri-vanegas-letter.pdf
|   `-- images/
|       `-- profile.jpg
|
|-- src/
|   |-- components/
|   |   |-- ContactList.tsx
|   |   |-- Hero.tsx
|   |   |-- RecommendationCard.tsx
|   |   |-- ReferenceCard.tsx
|   |   `-- SectionTitle.tsx
|   |
|   |-- data/
|   |   |-- recommendations.ts
|   |   `-- references.ts
|   |
|   |-- App.tsx
|   |-- index.css
|   `-- main.tsx
|
|-- index.html
|-- package.json
|-- package-lock.json
|-- tsconfig.json
|-- vite.config.ts
`-- README.md
```

## Main Features

### Hero Section

The hero section introduces Xiaomin with:

- Profile photo
- Full name
- Professional title
- Location
- LinkedIn and GitHub links
- Dark modern developer-style background

Profile image path:

```text
public/images/profile.jpg
```

### Featured Recommendation Providers

The featured section displays recommendation providers with:

- Name
- Role
- Organization
- Relationship context
- PDF recommendation letter link

PDF files are stored in:

```text
public/files/
```

### Additional References

The additional reference section displays smaller reference cards with:

- Name
- Role
- Organization
- Relationship context
- Contact details for recruiter or HR verification

Contact details are visible on the deployed website. Share the production URL only with intended hiring contacts.

## Getting Started

### Prerequisites

Install Node.js before running the project locally.

Recommended:

```text
Node.js 20 or newer
npm 10 or newer
```

Check your versions:

```bash
node -v
npm -v
```

### Install Dependencies

From the project root:

```bash
npm install
```

### Start Local Development Server

```bash
npm run dev
```

Vite will start a local development server, usually at:

```text
http://localhost:5173
```

If port `5173` is already in use, Vite may choose another available port.

## Design Notes

The visual style is intentionally:

- Dark and professional
- Minimal and clean
- Developer-portfolio inspired
- LinkedIn-style in presentation
- Responsive across screen sizes
- Focused on readability and trust

Primary colors:

```text
Background: #0B0F19
Cards:      #111827
Accent:     #3B82F6
Text:       #F9FAFB
Secondary:  #9CA3AF
```

## License

This is a personal professional reference website for Xiaomin (Aileen) Guo. Recommendation letters and profile materials should not be reused without permission.
