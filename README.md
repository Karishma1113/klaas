# NOVAA: Navigating Online Vulnerability & Achieving Autonomy

**Novaa** is a trauma-informed web platform designed to help domestic violence survivors protect their digital privacy. It provides visual, step-by-step privacy guides that walk users through securing devices, accounts, and personal information — without requiring advanced tech knowledge.

This project was created by the KLAAS team for the University of Washington iSchool Capstone and is being transitioned to open source as of **June 5, 2025** to support future development and iteration.

---

## Live Site

 [https://novaa-1f5eb.web.app](https://novaa-1f5eb.web.app)

---

## Tech Stack

- **Frontend**: React.js
- **Hosting & Auth**: Firebase Hosting + Firebase Authentication
- **Database**: *No user data is stored.* Firebase Firestore is only used for static module data when needed.
- **Security**: Static-only content — no external APIs or backend services that collect or store user information.

> 🔒 **Privacy-first:** This app does not collect or track user data to protect the safety of its intended audience.

---

## How to Run the Project Locally

### Prerequisites

- Node.js & npm
- Firebase CLI
- Git

### Installation

```bash
git clone https://github.com/your-org/novaa.git
cd novaa
npm install
npm start
```

### Deployment

1. Run `firebase login` (if you haven't already)
2. Deploy with:
   ```bash
   firebase deploy
   ```

---

## How to Contribute

We welcome future Capstone teams and open source contributors to expand on Novaa’s mission.

### To contribute:

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes and commit: `git commit -m "Add new module"`
4. Push to your fork: `git push origin feature/your-feature-name`
5. Open a pull request describing your changes

---

##  Future Development Ideas

- Add modules for platforms like Instagram, WhatsApp, and smart devices
- Build out the personalized resource survey and filterable resource database
- Improve accessibility and test for WCAG 2.1 AA compliance
- Add multilingual support and simplified reading level text

---

## Links

- [Live Demo](https://novaa-1f5eb.web.app)
- [Capstone Presentation Deck]()
- [GitHub Repository](https://github.com/your-org/novaa)

---

## Contact

If you're interested in continuing this project or have questions:

**Anjali Schatzer**  
anjali.schatzer@gmail.com

---

## License

This project is open source 

