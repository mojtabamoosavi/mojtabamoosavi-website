import {
    mdiEmailOutline,
    mdiGithub,
    mdiInstagram,
    mdiLinkedin,
    mdiMapMarkerOutline,
    mdiPhoneOutline,
    mdiTwitter,
} from "@mdi/js";

export const menu = [
    {
        id: 1,
        title: "Home",
        href: "/",
    },
    {
        id: 2,
        title: "Experience",
        href: "/experience",
    },
    {
        id: 3,
        title: "Works",
        href: "/works",
    },
    {
        id: 4,
        title: "Blog",
        href: "/blog",
    },
    {
        id: 5,
        title: "Contact",
        href: "/contact",
    },
];

export const social = [
    {
        id: "twitter",
        href: "#",
        icon: mdiTwitter,
    },
    {
        id: "instagram",
        href: "#",
        icon: mdiInstagram,
    },
    {
        id: "linkedin",
        href: "#",
        icon: mdiLinkedin,
    },
    {
        id: "github",
        href: "#",
        icon: mdiGithub,
    },
];

export const contact = [
    {
        id: "phone",
        title: "Phone",
        value: "+98 935 767 7182",
        icon: mdiPhoneOutline,
    },
    {
        id: "email",
        title: "Email",
        value: "info [at] mojtabamoosavi@gmail.com",
        icon: mdiEmailOutline,
    },
    {
        id: "address",
        title: "Address",
        value: "Tehran, Iran",
        icon: mdiMapMarkerOutline,
    },
];
