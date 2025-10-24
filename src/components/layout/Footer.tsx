// src/components/layout/Footer.tsx

const Footer = () => {
  return (
    <footer className="fixed left-0 bottom-0 w-full  text-white py-4 mt-12">
      <div className="container mx-auto text-center">
        <p className="text-gray-400 text-">
          Created by <a target="_blank" href="https://rahulophile.me/" className="hover:text-purple-400 transition-colors text-purple-900"><b>@rahulophile</b></a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;