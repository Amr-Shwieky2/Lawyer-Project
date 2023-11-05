export const Services = 
{
    data: [
        { 
            id: 1,
            title: 'CORPORATE LAW',
            description: 'Corporate law governs business structures, governance, and compliance with regulations, crucial for the legal operation and success of companies.',
            image: '../public/image/CORPORATE_LAW.jpg',
            category:"Corporate Law"
        },

        { 
            id: 2,
            title: 'TORT LAW', 
            description: 'Tort law deals with civil wrongs and personal injuries, providing legal remedies and compensation for those harmed by the wrongful actions or negligence of others.', 
            image: '../public/image/TORT_LAW.jpg',
            category:"Tort Law" 
        },

        { 
            id: 3, 
            title: 'FAMILY LAW', 
            description: 'Family law focuses on legal matters within family relationships, such as divorce, custody, and support, guiding resolution and family stability.', 
            image: '../public/image/FAMILY_LAW.jpg',
            category:"Family Law" 
        },
        
      ],
};

export const teamData = [
  {
    role: "FOUNDER",
    name: "EMMA LAWRENCE",
    image: "../public/image/lawyers/lawyer1.jpg",
  },
  {
    role: "CO-FOUNDER",
    name: "OLIVIA LAWRENCE",
    image: "../public/image/lawyers/lawyer2.jpg",
  },
  {
    role: "CIVIL ATTORNEY",
    name: "AVA SHAW",
    image: "../public/image/lawyers/lawyer3.jpg",
  },
  {
    role: "CORPORATE LAWYER",
    name: "ISABELLA ANDERSON",
    image: "../public/image/lawyers/lawyer4.jpg",
  },
];

export const inputFields = [
  { name: 'OfficeName', placeholder: 'Office name', type: 'text' },
  { name: 'email', placeholder: 'Email Address', type: 'email' },
  { name: 'phone', placeholder: 'Number', type: 'tel' },
  { name: 'Fax', placeholder: 'Fax', type: 'text' },
  { name: 'Address', placeholder: 'Address', type: 'text' },
  { name: 'Website', placeholder: 'Website', type: 'text' },
];

export const formFields = [
  { name: 'name', placeholder: 'Name' },
  { name: 'email', placeholder: 'Email Address' },
  { name: 'contactNumber', placeholder: 'Contact Number' },
  { name: 'subject', placeholder: 'Subject' },
];

export const initialFormData = {
  name: '',
  email: '',
  contactNumber: '',
  subject: '',
  description: '',
};

// import { BiColumns, BiSolidLandmark } from "react-icons/bi";
// import { GoCodeOfConduct, GoPerson } from "react-icons/go";

// export const iconData = [
//   {
//     icon: <BiColumns />,
//     count: 2286,
//     label: "Solved cases",
//   },
//   {
//     icon: <GoPerson />,
//     count: 20,
//     label: "Staff Members",
//   },
//   {
//     icon: <BiSolidLandmark />,
//     count: 15,
//     label: "Partners Linked",
//   },
//   {
//     icon: <GoCodeOfConduct />,
//     count: 2500,
//     label: "Happy Clients",
//   },
// ];
