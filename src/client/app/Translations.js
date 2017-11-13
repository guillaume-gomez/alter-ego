const translations = {
    "fr": {
        at: "à",
        resume_title: "Curriculum Vitae",
        resume_sub_title: "Expérience professionelle",
        resume_download_resume: "Télécharger mon CV complet",
        resume_array_title: "Titre",
        resume_array_year: "Année",
        resume_array_location: "Where",
        resume_applidget: "Ingénieur Back-end",
        resume_masa: "Stagiaire programmeur 3D ",
        resume_multiposting: "Stagiaire developpeur Back-end ",
        resume_utc: "Diplôme d'Ingénieur en informatique",
        resume_iut: "Diplome D'IUT en informatique option imagerie numérique",
        resume_bac: "Baccalauréat scientifique",
        resume_programming: "Programmation",
        about_me_title: "Quelques mots",
        about_me_content: "Codeur depuis environ 10 ans ; j'ai écrit mes premières lignes de code en C, pour ensuite découvrir beaucoup d'autres langages que ce soit à travers mon cursus universitaire ou professionnel. Passionné par l'aspect créatif que peut être l'informatique, j'essaye à travers des projets personnels d'entrevoir d'autres technologies ainsi que d'autres algorithmes. Quand je ne programme pas, je fais du sport. Et il m'arrive très souvent de faire l'une des deux activités en musique. Je laisse donc en lien mon compte senscritique pour parler musique ou autres ; en plus des classiques github et linkedin :)",
        index_about_me: "A propos",
        index_resume: "CV",
        index_work: "Mes travaux",
        index_student_project: "Projets Etudiants",
        index_personal_project: "Projets Personnels",
        index_contributions: "Contributions",
        student_project_title: "Projets Etudiants",
        personal_project_title: "Projets Personnels",
        contribution_title: "Contributions",
    },
    "en": {
        a: "at",
        resume_title: "Resume",
        resume_sub_title: "A draft from my CV",
        resume_download_resume: "Download my full resume",
        resume_array_title: "Title",
        resume_array_year: "Year",
        resume_array_location: "Lieu",
        resume_applidget: "Back-end engineer",
        resume_masa: "3D software programmer internship",
        resume_multiposting: "Software programmer internship ",
        resume_utc: "Master's Degree in Computer Engineering",
        resume_iut: "2-year engineering diploma in Computer Science",
        resume_bac: "French baccalauréat",
        resume_programming: "Programming",
        about_me_title: "About me",
        about_me_content: "Lorem ipusm sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.",
        index_about_me: "About me",
        index_resume: "Resume",
        index_work: "My work",
        index_student_project: "Student Projects",
        index_personal_project: "Personnal Projects",
        index_contributions: "Contribution",
        student_project_title: "Student Projects",
        personal_project_title: "Personal Projects",
        contribution_title: "Contribution",
    }
}


export function t(locale, key) {
    if (!locale || !Object.keys(translations).includes(locale)) {
        return `Error : the locale ${locale} does not exist yet`;
    }
    const translation = translations[locale][key];
    // "" does not means no existance
    if (translation === undefined) {
        return `Error : the key ${key} does not exist`;
    }

    return translation;
}