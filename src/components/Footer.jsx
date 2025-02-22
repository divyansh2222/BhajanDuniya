function Footer() {
  return (
    <footer className="bg-gray-900 text-white p-6 ">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        
        {/* App Download Section */}
        <div className="flex gap-4">
          <a href="https://images.wondershare.com/pdfelement/images2024/mobile-app/pdfelement-ios-android-qr-code-article-adjust.png" target="_blank" rel="noopener noreferrer">
            <img
              src="https://images.wondershare.com/pdfelement/images2024/mobile-app/pdfelement-ios-android-qr-code-article-adjust.png" 
              alt="Download on Google Play"
              className="w-36 h-auto"
            />
          <p className="text-center border">For Android</p>
          </a>
          <a href="https://images.wondershare.com/pdfelement/guide-instascan/qrcode-instascan.png" target="_blank" rel="noopener noreferrer">
            <img
              src="https://images.wondershare.com/pdfelement/guide-instascan/qrcode-instascan.png"
              alt="Download on the App Store"
              className="w-36 h-auto"
            />
            <p className="text-center border">For ios</p>
          </a>
        </div>

        {/* Company Info */}
        <div className="text-center md:text-right mt-4 md:mt-0">
          <p className="text-lg font-semibold">© 2025 Bhajan Duniya</p>
          <p className="text-sm text-gray-400">Powered by YourCompany</p>
        </div>
        
      </div>
    </footer>
  );
}

export default Footer;
