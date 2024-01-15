import { Button } from "@/components/ui/button";
import React from "react";

const ContactDownloadButton = () => {
  const downloadVCard = () => {
    const vCardData = `
      BEGIN:VCARD
      VERSION:3.0
      FN:John Doe
      ORG:Company
      TEL:123456789
      EMAIL:john.doe@example.com
      END:VCARD
    `;

    const blob = new Blob([vCardData], { type: "text/vcard" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "contact.vcf";
    a.click();

    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <Button onClick={downloadVCard}>Download Contact</Button>
    </div>
  );
};

export default ContactDownloadButton;
