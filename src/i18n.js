import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
	en: {
        common: {
            "page_title": "Welcome to tomfln.com",
            "credit": "Made with ❤️ by tomfln (contact@tomfln.com)"
        },
		slide1: {
			"title": "Welcome to my",
			"title_highlight": "portfolio",
			"desc": "Hi, I'm Tom! Let me show you what I create.",
            "call_to_action": "Explore"
		},
		slide2: {
			"title": "Get to",
			"title_highlight": "know me",
            "passionate_IT_student": "Passionate computer science student at Epitech Lille",
            "currently_learning": "Currently learning programming language theory & improving my C skills in my free time",
            "contact_me": "Contact me at ",
            "contact_me_addr": "contact@tomfln.com",
            "copy_email": "Copy my email",
            "call_to_action": "Continue",
            "languages": "Languages",
            "techs": "Technologies",
			"email_to_clipboard_confirm": "Email copied to clipboard."
		},
		slide3: {
			"title": "Take a look at",
			"title_highlight": "my projects",
            "huffman_title": "my_huffman",
            "huffman_desc": "Implementation of a Huffman encoding and decoding algorithm in C.",
            "SIP_title": "SIP Oceans Map",
            "SIP_desc": "This website aims to raise awareness and make an impact on the issue of ocean and sea pollution",
            "tomfln.com_title": "tomfln.com",
            "tomfln.com_desc": "The website you're on!",
		}
	},
	fr: {
        common: {
            "page_title": "Welcome to tomfln.com",
            "credit": "Réalisé avec ❤️ par tomfln (contact@tomfln.com)"
        },
		slide1: {
            "title": "Bienvenue sur mon",
            "title_highlight": "portfolio",
            "desc": "Bienvenue ! Laissez-moi vous montrer mon travail.",
            "call_to_action": "Explorer"
        },
        slide2: {
            "title": "Découvrez",
            "title_highlight": "qui je suis",
            "passionate_IT_student": "Étudiant en 1re année à Epitech Lille",
            "currently_learning": "J'apprends la théorie derrière les langages de programmation et j'améliore mes compétences en C pendant mon temps libre.",
            "contact_me": "Contactez-moi à ",
            "contact_me_addr": "contact@tomfln.com",
            "copy_email": "Copier mon email",
            "call_to_action": "Continuer",
            "languages": "Languages",
            "techs": "Technologies",
			"email_to_clipboard_confirm": "Adresse mail copiée."
        },
        slide3: {
            "title": "Certains de mes",
            "title_highlight": "projets",
            "huffman_title": "my_huffman",
            "huffman_desc": "Implémentation d'un algorithme de compression / décompression (Huffman) en C.",
            "SIP_title": "SIP Oceans Map",
            "SIP_desc": "Ce site a pour objectif de sensibiliser aux problèmes liés à la pollution des mers et des océans.",
            "tomfln.com_title": "tomfln.com",
            "tomfln.com_desc": "Le site sur lequel vous êtes !"
        }
        
	}
};

i18n
	.use(initReactI18next)
	.init({
		resources,
		interpolation: {
			escapeValue: false
		},
		lng: "en",
		ns: ["slide1", "slide2", "slide3"]
	});

export default i18n;