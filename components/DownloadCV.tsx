import { Link } from "@chakra-ui/react";

const DownloadCV = () => {
  // Generate a UK-friendly date string in the format DD-MM-YYYY
  const date = new Date();
  const formattedDate = [
    ("0" + date.getDate()).slice(-2),
    ("0" + (date.getMonth() + 1)).slice(-2),
    date.getFullYear(),
  ].join("-");

  // Specify the download filename with the UK-friendly current date appended
  const downloadFileName = `Samuel_Morgan-Tyghe_CV_${formattedDate}.pdf`;

  return (
    <Link
      href="/Samuel_Morgan-Tyghe_CV.pdf"
      download={downloadFileName}
      color="blue.500"
    >
      Download My PDF CV
    </Link>
  );
};

export default DownloadCV;
