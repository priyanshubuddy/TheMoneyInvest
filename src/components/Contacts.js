import ContactDropdown from "../components/ContactDropdown.1";

export default function Contacts() {
  const ContactDropdown = [
    { id: 1, path: "/Contacts/1", cName: "dropdown-link", title: "Contact 1" },
    { id: 2, path: "/Contacts/2", cName: "dropdown-link", title: "Contact 2" },
    { id: 3, path: "/Contacts/3", cName: "dropdown-link", title: "Contact 3" },
  ];

  return (
    <div>
      <h1>Contacts</h1>
      <ContactDropdown ContactDropdown={ContactDropdown} />
    </div>
  );
}
