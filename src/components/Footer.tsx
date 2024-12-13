const Footer = () => {
  return (
    <footer className="pb-4 ">
      <div className="container mx-auto text-center">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} 유송현. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
